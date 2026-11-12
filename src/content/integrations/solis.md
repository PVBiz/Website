---
name: Solis
logo: /img/brands/solis.png
logoWidth: 166
logoHeight: 60
answer: "PVBiz reads your plant's solar, load, battery and grid figures from SolisCloud about every five minutes and refreshes energy totals hourly, through a read-only share."
description: Solis monitoring with PVBiz. Share your SolisCloud plant with the PVBiz account for live flow, battery and grid alerts, history from 2020 and reports.
connectionMethod: Share the plant from SolisCloud with the PVBiz account shown in the app, then add it by its Station ID. Available to homeowners today (share only).
steps:
  - title: Share the plant on SolisCloud
    body: In SolisCloud open the plant, go to Sharing and share it with the PVBiz account shown in the PVBiz app. This is read access only.
  - title: Find the Station ID and claim the plant
    body: The Station ID is at the end of the plant's URL when you open it in SolisCloud. SolisCloud only lists plants an account owns, so a shared plant is added by entering that ID in PVBiz. A PVBiz administrator approves the claim.
  - title: Let history load and set your rules
    body: PVBiz backfills your energy totals back to 2020, or to when the plant began if later. Then switch on the default rules and add your own thresholds.
dataRead:
  - metric: Live power flow
    detail: Load power, essential and non-essential load, per-phase output voltage and current, solar power, today's yield and lifetime yield.
  - metric: Solar strings
    detail: MPPT strings 1 to 4 with voltage, current and power.
  - metric: Battery
    detail: Power, state of charge, voltage, current, temperature, and today's charge and discharge.
  - metric: Grid
    detail: Frequency, grid status (confirmed over three consecutive readings before it flips), import, export, total power and per-phase voltage and current, plus AC temperature.
  - metric: History and totals
    detail: Solar, load, export, import, charge and discharge totals by month and year, refreshed hourly and backfilled from 2020.
control: false
alerts:
  - Grid disconnected and grid restored
  - Battery state of charge below a level you set
  - Inverter fault and inverter offline
  - Communication failure when no data arrives
  - Thresholds on battery, load, grid and solar metrics you choose
limits:
  - Homeowner connections are by share only, and a shared plant has to be added by its Station ID because SolisCloud lists only plants the account owns.
  - PVBiz is read-only on Solis and cannot change inverter settings.
  - Strings are read for MPPT 1 to 4 only.
  - DC temperature and generator power are not read from Solis, so rules on those cannot be built.
  - Solis alarms are not pulled in; alerts come from PVBiz rules evaluated on the readings.
faq:
  - q: Where do I find my Solis Station ID?
    a: Open the plant in SolisCloud. The Station ID is at the end of the plant's address in your browser.
  - q: Can homeowners connect Solis with an API key?
    a: Not at the moment. Homeowners connect Solis by sharing the plant with the PVBiz account and entering the Station ID. Installers can use their own SolisCloud API Key ID and Key Secret.
  - q: How far back does Solis history go?
    a: PVBiz backfills energy totals from 2020 to today when a plant is first connected, or from when the plant started if that is later.
updated: 2026-11-11
---

SolisCloud makes the first step slightly different from other brands: it only lists plants that an account owns. That means a plant you share with PVBiz does not simply show up in a list. Instead you share it with the PVBiz account shown in the app, copy the Station ID from the end of the plant's URL, and add that ID in PVBiz. A PVBiz administrator then approves the claim.

## Homeowners and installers

Homeowners connect Solis by share only. Installers who manage many plants can instead use their own business API Key ID and Key Secret from SolisCloud; the app's connect screen shows where to find them, and customers share their plants with the SolisCloud account that owns the key. Both routes are read-only, and secrets you enter are stored encrypted.

## What PVBiz reads

For each inverter PVBiz reads load power, essential and non-essential load, per-phase output, solar power with today and lifetime yield, strings 1 to 4, and the battery: power, state of charge, voltage, current, temperature and today's charge and discharge. On the grid side it reads frequency, status, import, export, total power and per-phase values. Grid status is debounced over three readings so that a single glitch does not trigger a false grid-loss alert. Readings are polled about every five minutes and energy totals hourly.

## History

When a Solis plant is first connected, monthly and yearly totals are backfilled from 2020 to now, which gives analysis and seasonal comparisons real depth immediately. Totals cover solar, load, export, import, charge and discharge.

## Known limits

SolisCloud enforces a limit of two requests per second per endpoint, so PVBiz paces its calls. DC temperature and generator power are not available, string data stops at MPPT 4, Solis alarms are not imported, and there is no control: PVBiz only reads. For inverter control, Sunsynk is the only supported brand.
