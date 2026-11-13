// Homeflex vs Homepower estimate: one Eskom financial year (1 April - 31 March), hour by hour.
// Rates: src/data/eskom-residential-2026-27.json (Rand, excl. VAT). Solar: src/data/pv-profiles-za.json (PVGIS).
// Rules from Eskom's Schedule of Standard Prices 2026/27:
//   §22  Homeflex is mandatory for grid-tied generation; Homepower is for homes without it.
//   §9   Homeflex public holidays are billed as the weekday they fall on, so no holiday calendar is needed.
//   §46  Gen-offset: export is credited per TOU period per month, capped at the kWh imported in that period.
import tariffs from '../data/eskom-residential-2026-27.json';
import pv from '../data/pv-profiles-za.json';

export type Period = 'p' | 's' | 'o';
export type Pattern = 'away' | 'home' | 'daytime';
export type SizeId = '1' | '2' | '3' | '4';

export interface Inputs {
  size: SizeId;
  /** Average monthly household use before solar, kWh. */
  monthlyKwh: number;
  pattern: Pattern;
  region: string;
  kwp: number;
  /** Usable battery capacity, kWh. 0 = no battery. */
  batteryKwh: number;
}

export interface Bill {
  fixed: number;
  energy: number;
  vat: number;
  exportCredit: number;
  total: number;
  importKwh: Record<Period, number>;
  exportKwh: number;
  creditedKwh: number;
}

export interface Result {
  homepowerNoSolar: Bill;
  homepowerSolar: Bill;
  homeflexSolar: Bill;
  solarKwh: number;
  selfUsedKwh: number;
  loadKwh: number;
}

// Relative hourly use, 00:00-23:00. Normalised to a daily share below.
const SHAPES: Record<Pattern, number[]> = {
  // Out at work or school on weekdays: morning and evening peaks.
  away: [
    0.45, 0.4, 0.38, 0.38, 0.4, 0.6, 1.6, 1.9, 1.3, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.9, 1.6,
    2.2, 2.2, 1.8, 1.3, 0.9, 0.6,
  ],
  // Someone home during the day.
  home: [
    0.45, 0.4, 0.38, 0.38, 0.4, 0.6, 1.3, 1.6, 1.3, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.1, 1.5,
    1.9, 1.9, 1.6, 1.2, 0.85, 0.6,
  ],
  // Heavy daytime use: home office, pool pump and geyser on daytime timers.
  daytime: [
    0.4, 0.38, 0.36, 0.36, 0.38, 0.5, 1.0, 1.2, 1.4, 1.6, 1.6, 1.6, 1.6, 1.6, 1.6, 1.6, 1.4, 1.4,
    1.6, 1.6, 1.3, 1.0, 0.7, 0.5,
  ],
};

// More use in winter (heating, longer evenings). Day-weighted to average 1 over the year below.
const MONTH_FACTOR = [0.92, 0.92, 0.95, 1.0, 1.06, 1.18, 1.2, 1.12, 1.0, 0.94, 0.92, 0.92];

const BATTERY_EFF = 0.95; // each way, so about 90% round trip
const BATTERY_MAX_KW = 5; // typical hybrid inverter battery power

const normalise = (a: number[]) => {
  const s = a.reduce((x, y) => x + y, 0);
  return a.map((v) => v / s);
};
const SHARE: Record<Pattern, number[]> = {
  away: normalise(SHAPES.away),
  home: normalise(SHAPES.home),
  daytime: normalise(SHAPES.daytime),
};

/** The financial year as UTC calendar days: month (1-12) and weekday (0 = Sunday). */
function yearDays(from: string, to: string) {
  const days: { month: number; dow: number }[] = [];
  const end = Date.parse(`${to}T00:00:00Z`);
  for (let t = Date.parse(`${from}T00:00:00Z`); t <= end; t += 86_400_000) {
    const d = new Date(t);
    days.push({ month: d.getUTCMonth() + 1, dow: d.getUTCDay() });
  }
  return days;
}

export function touPeriod(month: number, dow: number, hour: number): Period {
  const tou = tariffs.tou;
  if (dow === 0) return tou.sunday[hour] as Period;
  if (dow === 6) return tou.saturday[hour] as Period;
  const high = tariffs.highSeasonMonths.includes(month);
  return (high ? tou.high.weekday : tou.low.weekday)[hour] as Period;
}

interface Hourly {
  month: number;
  season: 'high' | 'low';
  period: Period;
  importKwh: number;
  exportKwh: number;
}

/** Hour-by-hour energy flows for one year. Battery runs self-use: charge from surplus solar, discharge on any shortfall. */
export function simulate(input: Inputs, withSolar: boolean) {
  const days = yearDays(tariffs.effectiveFrom, tariffs.effectiveTo);
  const region = pv.regions.find((r) => r.id === input.region) ?? pv.regions[0];
  const meanFactor = days.reduce((s, d) => s + MONTH_FACTOR[d.month - 1], 0) / days.length;
  const dailyKwh = (input.monthlyKwh * 12) / days.length;
  const kwp = withSolar ? input.kwp : 0;
  const cap = withSolar ? input.batteryKwh : 0;
  let soc = cap / 2;
  let solarKwh = 0;
  let selfUsedKwh = 0;
  let loadKwh = 0;
  const hours: Hourly[] = [];
  for (const d of days) {
    const weekend = d.dow === 0 || d.dow === 6;
    const shape = SHARE[weekend && input.pattern === 'away' ? 'home' : input.pattern];
    const dayLoad = (dailyKwh * MONTH_FACTOR[d.month - 1]) / meanFactor;
    const season = tariffs.highSeasonMonths.includes(d.month) ? 'high' : 'low';
    for (let h = 0; h < 24; h++) {
      const period = touPeriod(d.month, d.dow, h);
      const load = dayLoad * shape[h];
      const sun = kwp * region.kwhPerKwp[d.month - 1][h];
      let importKwh = 0;
      let exportKwh = 0;
      if (sun >= load) {
        const charge = Math.min(sun - load, BATTERY_MAX_KW, (cap - soc) / BATTERY_EFF);
        soc += charge * BATTERY_EFF;
        exportKwh = sun - load - charge;
      } else {
        const out = Math.min(load - sun, BATTERY_MAX_KW, soc * BATTERY_EFF);
        soc -= out / BATTERY_EFF;
        importKwh = load - sun - out;
      }
      solarKwh += sun;
      selfUsedKwh += sun - exportKwh;
      loadKwh += load;
      hours.push({ month: d.month, season, period, importKwh, exportKwh });
    }
  }
  return { hours, days: days.length, solarKwh, selfUsedKwh, loadKwh };
}

const zero = (): Record<Period, number> => ({ p: 0, s: 0, o: 0 });

function bill(
  sim: ReturnType<typeof simulate>,
  size: SizeId,
  kind: 'homeflex' | 'homepower'
): Bill {
  const vatRate = tariffs.vatPercent / 100;
  const t = tariffs[kind][size] as {
    fixedPerDay: number;
    importRate?: number;
    importRates?: Record<string, Record<Period, number>>;
    exportRates?: Record<string, Record<Period, number>>;
  };
  const importKwh = zero();
  let energy = 0;
  let exportKwh = 0;
  // Gen-offset cap: per calendar month and TOU period.
  const monthly = new Map<
    number,
    { season: string; imp: Record<Period, number>; exp: Record<Period, number> }
  >();
  for (const h of sim.hours) {
    importKwh[h.period] += h.importKwh;
    exportKwh += h.exportKwh;
    energy +=
      h.importKwh * (kind === 'homeflex' ? t.importRates![h.season][h.period] : t.importRate!);
    let m = monthly.get(h.month);
    if (!m) monthly.set(h.month, (m = { season: h.season, imp: zero(), exp: zero() }));
    m.imp[h.period] += h.importKwh;
    m.exp[h.period] += h.exportKwh;
  }
  let exportCredit = 0;
  let creditedKwh = 0;
  if (kind === 'homeflex') {
    for (const m of monthly.values()) {
      for (const p of ['p', 's', 'o'] as Period[]) {
        const kwh = Math.min(m.exp[p], m.imp[p]);
        creditedKwh += kwh;
        exportCredit += kwh * t.exportRates![m.season][p];
      }
    }
  }
  const fixed = sim.days * t.fixedPerDay;
  const vat = (fixed + energy) * vatRate;
  // Credit is valued at Eskom's published rate without VAT (conservative; see page notes).
  const total = fixed + energy + vat - exportCredit;
  return { fixed, energy, vat, exportCredit, total, importKwh, exportKwh, creditedKwh };
}

export function estimate(input: Inputs): Result {
  const none = simulate(input, false);
  const solar = simulate(input, true);
  return {
    homepowerNoSolar: bill(none, input.size, 'homepower'),
    homepowerSolar: bill(solar, input.size, 'homepower'),
    homeflexSolar: bill(solar, input.size, 'homeflex'),
    solarKwh: solar.solarKwh,
    selfUsedKwh: solar.selfUsedKwh,
    loadKwh: solar.loadKwh,
  };
}

/** "R17 800": whole rand, space thousands (South African style), no locale dependence. */
export function rand(n: number, step = 1) {
  const v = Math.round(n / step) * step;
  const s = Math.abs(v)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, '\u00a0');
  return `${v < 0 ? '-' : ''}R${s}`;
}

export const kwh = (n: number) => `${rand(n).slice(1)}\u00a0kWh`;

export const DEFAULT_INPUTS: Inputs = {
  size: '4',
  monthlyKwh: 900,
  pattern: 'away',
  region: 'gauteng',
  kwp: 5,
  batteryKwh: 10,
};

/** Every figure the page shows, as text, so the build and the browser render the same thing. */
export function describe(r: Result): Record<string, string> {
  const hf = r.homeflexSolar;
  const diff = hf.total - r.homepowerSolar.total;
  const verdict =
    Math.abs(diff) < 300
      ? 'With this setup Homeflex and Homepower cost about the same, within R300 a year.'
      : diff < 0
        ? `Homeflex is about ${rand(-diff, 10)} a year cheaper than Homepower with the same solar.`
        : `Homeflex is about ${rand(diff, 10)} a year dearer than Homepower with the same solar.`;
  return {
    verdict,
    hfYear: rand(hf.total, 10),
    hfMonth: rand(hf.total / 12),
    hpSolarYear: rand(r.homepowerSolar.total, 10),
    hpNoneYear: rand(r.homepowerNoSolar.total, 10),
    saving: `Against Homepower without solar, your solar on Homeflex saves about ${rand(r.homepowerNoSolar.total - hf.total, 10)} a year.`,
    fixed: rand(hf.fixed),
    peak: `${kwh(hf.importKwh.p)}`,
    standard: `${kwh(hf.importKwh.s)}`,
    offpeak: `${kwh(hf.importKwh.o)}`,
    energy: rand(hf.energy),
    vat: `${rand(hf.vat)} (${tariffs.vatPercent}%)`,
    credit: `-${rand(hf.exportCredit)}`,
    creditKwh: `${kwh(hf.creditedKwh)} of ${kwh(hf.exportKwh)} exported`,
    total: rand(hf.total),
    solar: kwh(r.solarKwh),
    selfUse: r.solarKwh > 0 ? `${Math.round((100 * r.selfUsedKwh) / r.solarKwh)}%` : '-',
  };
}
