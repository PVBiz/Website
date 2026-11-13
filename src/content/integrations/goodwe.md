---
installerOnly: true
name: GoodWe
logo: /img/brands/goodwe.svg
logoWidth: 120
logoHeight: 36
answer: 'PVBiz reads solar generation, grid and inverter figures from your GoodWe SEMS account about every five minutes, refreshes solar totals hourly and pulls in SEMS alarms, read-only, on the PVBiz Installer Platform.'
description: GoodWe monitoring on the PVBiz Installer Platform. Connect a SEMS login for PV generation, grid and inverter data, SEMS alarms and history. Read-only.
connectionMethod: Add a GoodWe SEMS account email and password under Integrations on the PVBiz Installer Platform. Available on the PVBiz Installer Platform today.
steps:
  - title: Have your SEMS login ready
    body: Use the email and password of the GoodWe SEMS or SemsPlus account that can see the plants you want to monitor. Regional servers are handled automatically.
  - title: Add it on the Installer Platform
    body: In the PVBiz Installer Platform choose Integrations, add GoodWe and enter the email and password. They are stored encrypted and never shown again. Choose which plants to sync.
  - title: Let the first sync run
    body: PVBiz discovers your plants and inverters and backfills solar totals from the plant start year (not earlier than 2020). Then switch on alerts for the fleet.
dataRead:
  - metric: Solar generation
    detail: PV power from MPPT inputs 1 to 4, with voltage, current and power for each.
  - metric: Inverter
    detail: Inverter temperature and online or offline status.
  - metric: Grid
    detail: Grid frequency, per-phase voltage, current and power, total power (export shown as negative) and grid status.
  - metric: SEMS alarms
    detail: The last 72 hours of alarms with severity from the warning level, closed automatically when GoodWe reports the recovery time.
  - metric: History and totals
    detail: Solar generation only, by day, month and year, refreshed hourly.
control: false
alerts:
  - Inverter offline and plant offline
  - Communication failure when no data arrives
  - GoodWe SEMS alarms raised as PVBiz events
  - Thresholds on the solar, grid and temperature metrics PVBiz reads
limits:
  - GoodWe monitoring in PVBiz is PV-only. Load is not monitored, and there is no battery data, so there are no battery or consumption figures and no battery alerts.
  - Totals cover solar generation only; no load, import, export or battery totals.
  - Inverter status is simple, online or offline, and an inverter that is not reporting is skipped rather than updated.
  - PVBiz is read-only on GoodWe.
  - Available on the PVBiz Installer Platform today. Homeowner subscriptions do not include GoodWe at the moment.
faq:
  - q: Can I connect GoodWe as a homeowner?
    a: GoodWe is available on the PVBiz Installer Platform today. Homeowner subscriptions do not include it at the moment; installers can book a demo from the installers page.
  - q: Does PVBiz show battery or consumption data for GoodWe?
    a: No. GoodWe in PVBiz is PV-only. It shows solar generation, grid and inverter readings, but not load or battery.
  - q: Does PVBiz show GoodWe SEMS alarms?
    a: Yes. SEMS alarms from the last 72 hours are brought in as events, and they close when GoodWe reports recovery.
updated: 2026-11-11
---

GoodWe is the narrowest integration PVBiz offers, by design: it is PV-only monitoring. If you came looking for battery state of charge or home consumption on GoodWe, PVBiz does not read them. What it does read is solar generation, the inverter, the grid connection and GoodWe's own alarms. It is available on the PVBiz Installer Platform today, where installers and O&M teams watch fleets that include GoodWe next to other brands. Homeowner subscriptions do not currently include it.

## Connecting

You add the email and password of a GoodWe SEMS or SemsPlus account under Integrations. PVBiz stores them encrypted, signs in against the right regional server, and lists the plants the account can see so you choose which to sync. Access is read-only.

## What PVBiz reads

Solar power is read from MPPT inputs 1 to 4, each with voltage, current and power. From the inverter PVBiz reads temperature and online or offline status. From the grid it reads frequency, per-phase voltage, current and power, and total power with export shown as negative, plus grid status. Readings are polled about every five minutes, and inverters that are not reporting are skipped rather than written as zero. Solar totals are refreshed hourly, backfilled from the plant's start year with a floor of 2020.

## Alarms

SEMS alarms from the last 72 hours are imported as events, with severity taken from GoodWe's warning level, and they close automatically when GoodWe reports the recovery time. On top of that, PVBiz rules give inverter offline, plant offline, communication failure and thresholds on the metrics above.

## Known limits

Load is not monitored and output power is not available. There is no battery data, so no battery alerts. Totals are solar only. Inverter status is binary, and there is no control. For inverter control, Sunsynk is the only brand PVBiz supports.
