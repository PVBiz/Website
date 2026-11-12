---
installerOnly: true
name: ATESS
logo: /img/brands/atess.svg
logoWidth: 120
logoHeight: 36
answer: "PVBiz reads your hybrid inverter's solar, battery and grid figures from the ATESS cloud about every five minutes and refreshes energy totals hourly, read-only, on the PVBiz Installer Platform."
description: "ATESS monitoring on the PVBiz Installer Platform: connect an ATESS cloud login for HPS inverter solar, battery and grid data, history and alerts. Read-only."
connectionMethod: Add an ATESS cloud username and password under Integrations on the PVBiz Installer Platform. Available on the PVBiz Installer Platform today.
steps:
  - title: Have your ATESS login ready
    body: Use the username and password of the ATESS cloud account that can see the plants you want to monitor. There is no share route on ATESS; PVBiz uses the login itself.
  - title: Add it on the Installer Platform
    body: In the PVBiz Installer Platform choose Integrations, add ATESS and enter the username and password. They are stored encrypted and never shown again. Choose which plants to sync.
  - title: Let the first sync run
    body: PVBiz discovers the plants and inverters and backfills totals back to the first year in ATESS's yearly chart. Then switch on alerts for the fleet.
dataRead:
  - metric: Live power flow
    detail: For each HPS inverter, the latest point of ATESS's history, giving output power and phases, frequency, solar power, and today's and lifetime yield.
  - metric: Solar strings
    detail: MPPT strings 1 to 10 where the inverter reports them.
  - metric: Battery
    detail: Power, state of charge, voltage, current, temperature, and today's charge and discharge.
  - metric: Grid
    detail: Frequency, status, import, export and total power, plus AC and DC temperature.
  - metric: History and totals
    detail: Solar, load, import, export, charge and discharge from ATESS's month, year and total energy charts, refreshed hourly.
control: false
alerts:
  - Inverter offline and plant offline
  - Communication failure when no data arrives
  - Thresholds on the solar, battery, grid and temperature metrics PVBiz reads
limits:
  - ATESS field names vary by firmware, so PVBiz tries several candidates for each reading; a reading some firmware does not expose will be missing.
  - Where ATESS leaves a value out of its charts, PVBiz records it as zero, so a gap can look like a zero day.
  - ATESS's own alarms are not pulled in; alerts come from PVBiz's own rules on the readings.
  - PVBiz signs in again on each sync, and retries when the ATESS server reports it is busy.
  - PVBiz is read-only on ATESS.
  - Available on the PVBiz Installer Platform today. Homeowner subscriptions do not include ATESS at the moment.
faq:
  - q: Can I connect ATESS as a homeowner?
    a: ATESS is available on the PVBiz Installer Platform today. Homeowner subscriptions do not include it at the moment; installers can book a demo from the installers page.
  - q: Does ATESS include battery data in PVBiz?
    a: Yes. For HPS hybrid inverters PVBiz reads battery power, state of charge, voltage, current, temperature and today's charge and discharge where your firmware reports them.
  - q: Are ATESS alarms shown in PVBiz?
    a: Not from ATESS itself. PVBiz raises alerts from its own rules, such as inverter offline, communication failure and your thresholds.
updated: 2026-11-11
---

ATESS plants are read through the ATESS cloud with a username and password. There is no share option, so PVBiz uses the login itself and stores it encrypted. ATESS is available on the PVBiz Installer Platform today, where installers and O&M teams monitor fleets across brands. Homeowner subscriptions do not currently include it.

## What PVBiz reads

PVBiz focuses on ATESS HPS inverters and takes the latest point of the inverter's history. That yields output power and phases, frequency, solar power, today's and lifetime yield, MPPT strings 1 to 10, battery power, state of charge, voltage, current and temperature, today's charge and discharge, AC and DC temperature, and grid frequency, status, import, export and total power. ATESS field names differ between firmware versions, so PVBiz tries several candidates for each reading. Readings poll about every five minutes and totals refresh hourly.

## History

Totals are built from ATESS's month, year and total energy charts for solar, load, import, export, charge and discharge. On first connect PVBiz goes back to the first year that appears in the yearly chart. A caveat is that when ATESS leaves a value out of a chart PVBiz records zero, so a missing figure can show up as a zero day.

## Alerts

PVBiz's own rules provide inverter offline, plant offline, communication failure and thresholds on the metrics above. ATESS's own alarms are not imported.

## Known limits

PVBiz signs in to the ATESS cloud on each sync and retries if the server says it is busy. Readings depend on the firmware naming described above. There is no control: PVBiz is read-only on ATESS, and Sunsynk is the only brand where it can change inverter settings.
