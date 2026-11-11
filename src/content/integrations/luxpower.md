---
name: LuxPower
logo: /img/brands/luxpower.webp
logoWidth: 1030
logoHeight: 186
answer: "PVBiz reads your main inverter's solar, battery, load and grid figures from the LuxPower portal about every five minutes and refreshes energy totals hourly, read-only, with your portal login."
description: LuxPower monitoring with PVBiz. Connect with your LuxPower portal username and password, installer or homeowner, for live flow, battery and grid alerts and full yearly history. Read-only.
connectionMethod: Add your LuxPower portal username and password. An installer login or the homeowner's own login both work. Available to homeowners today.
steps:
  - title: Use your LuxPower portal login
    body: PVBiz signs in with the username and password you use for the LuxPower portal. A homeowner's own login works, and so does an installer's, including for plants shared with a homeowner account.
  - title: Add it in PVBiz
    body: Sign in to PVBiz, choose LuxPower and enter the login. It is stored encrypted and never shown again.
  - title: Pick your plants and set your rules
    body: Choose the plants to sync. History is backfilled, and the default rules switch on, with your own thresholds on top.
dataRead:
  - metric: Live readings
    detail: For the master inverter, solar power, load (consumption and essential), and today's yield, usage, import, export, charge and discharge.
  - metric: Battery
    detail: Power, state of charge, voltage and temperature.
  - metric: Grid
    detail: Frequency, status and net power.
  - metric: Inverter
    detail: Inverter and radiator temperature, and lifetime yield.
  - metric: History and totals
    detail: Solar, load, export, import, charge and discharge, refreshed hourly and backfilled for every year LuxPower reports.
control: false
alerts:
  - Grid disconnected and grid restored
  - Battery state of charge below a level you set
  - Inverter fault and inverter offline
  - Communication failure when no data arrives
  - Thresholds on battery, load, grid and solar power, though not generator power or the essential load split
limits:
  - There is no per-string (MPPT) data and no per-phase data, and generator power is not read.
  - Only the master inverter of each plant is read.
  - Some LuxPower devices carry no location data, and without a time zone for a plant its totals are skipped.
  - LuxPower alarms are not pulled in; alerts come from PVBiz rules on the readings.
  - PVBiz is read-only on LuxPower.
faq:
  - q: Can I use my installer's LuxPower login?
    a: Yes. An installer's login or your own homeowner login both work, and plants shared with a homeowner account are read the same way.
  - q: How far back does LuxPower history go?
    a: PVBiz backfills totals for every year LuxPower reports, with no fixed limit, and it skips months it already has.
  - q: Does PVBiz show per-string solar data for LuxPower?
    a: No. LuxPower in PVBiz has no per-string MPPT or per-phase data; solar power is the total.
updated: 2026-11-11
---

LuxPower connects with a plain username and password for the LuxPower portal. Either the installer's login or the homeowner's own login works, and plants that have been shared with a homeowner account are read the same way. PVBiz stores the password encrypted, never shows it again.

## What PVBiz reads

For each plant PVBiz reads the master inverter. That gives solar power, load consumption and essential load, battery power, state of charge, voltage and temperature, grid frequency, status and net power, inverter and radiator temperatures, and today's yield, usage, import, export, charge and discharge, along with lifetime yield. Live readings poll about every five minutes and energy totals refresh hourly. Totals cover solar, load, export, import, charge and discharge.

## History

LuxPower has one of the deepest backfills: when a plant is connected PVBiz pulls totals for every year the portal reports, with no fixed floor, and skips months it already holds. That makes analysis and seasonal comparisons useful from the start.

## What LuxPower does not give PVBiz

There is no per-string MPPT data and no per-phase data, and generator power is not read, so rules on those cannot be built. Only the master inverter on a plant is read. Some LuxPower devices carry no coordinates, and where a plant has no time zone its totals are skipped. LuxPower's own alarms are not imported.

## Alerts and control

The standard alerts run on LuxPower: grid loss, low battery, inverter fault and offline, and loss of communication, plus custom thresholds on the metrics above. PVBiz is read-only on LuxPower, and Sunsynk is the only brand where it can change inverter settings.
