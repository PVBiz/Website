---
installerOnly: true
name: Canadian Solar
logo: /img/brands/canadiansolar.png
logoWidth: 631
logoHeight: 118
answer: "PVBiz reads inverter, string and grid-meter figures from the Canadian Solar SmartEnergy Portal about every five minutes, refreshes energy totals hourly and pulls in portal alarms, read-only, on the PVBiz Installer Platform."
description: "Canadian Solar monitoring on the PVBiz Installer Platform via the SmartEnergy Portal (EU): inverter, MPPT and meter data, alarms and history. Read-only."
connectionMethod: Add your Canadian Solar SmartEnergy Portal (EU) username and password under Integrations on the PVBiz Installer Platform. Available on the PVBiz Installer Platform today.
steps:
  - title: Have your SmartEnergy Portal login ready
    body: Use the username and password for the Canadian Solar SmartEnergy Portal (EU). PVBiz hashes the password locally before it signs in, and there is no share route.
  - title: Add it on the Installer Platform
    body: In the PVBiz Installer Platform choose Integrations, add Canadian Solar and enter the username and password. They are stored encrypted and never shown again. Choose which plants to sync.
  - title: Let the first sync run
    body: PVBiz discovers the plants and inverters and backfills totals from each plant's creation year, not earlier than 2020. Then switch on alerts for the fleet.
dataRead:
  - metric: Inverter live data
    detail: Output power, phase power, voltage and current, frequency, solar power, lifetime yield and daily energy, with AC and boost temperature.
  - metric: Solar strings
    detail: MPPT strings 1 to 10 with voltage, current and power; strings 5 to 10 only where present.
  - metric: Grid meter
    detail: Grid frequency, power, voltage, current and per-phase power.
  - metric: Portal alarms
    detail: Alerts from the last 6 hours, graded critical, warning or info and de-duplicated by alert.
  - metric: History and totals
    detail: Solar, load, import and export, refreshed hourly. Battery charge and discharge are not provided.
control: false
alerts:
  - Inverter offline and plant offline
  - Communication failure when no data arrives
  - Canadian Solar portal alarms raised as PVBiz events with their severity
  - Thresholds on the inverter, solar and grid metrics PVBiz reads
limits:
  - There is no battery data. Plants on Canadian Solar are read as solar-only, so there are no battery readings, charge or discharge totals, or battery alerts.
  - Today's grid import and export figures are not populated; grid power is read from the meter.
  - Portal alarms are never closed automatically, so cleared alarms stay in PVBiz until you close them.
  - PVBiz is read-only on Canadian Solar, and PVBiz does not state a vendor rate limit because none is documented.
  - Available on the PVBiz Installer Platform today. Homeowner subscriptions do not include Canadian Solar at the moment.
faq:
  - q: Can I connect Canadian Solar as a homeowner?
    a: Canadian Solar is available on the PVBiz Installer Platform today. Homeowner subscriptions do not include it at the moment; installers can book a demo from the installers page.
  - q: Does PVBiz show battery data for Canadian Solar?
    a: No. Canadian Solar plants are read as solar-only, so battery readings and totals are not available.
  - q: Are SmartEnergy Portal alarms shown in PVBiz?
    a: Yes. Alarms from the last 6 hours are brought in as events with their severity. They are not closed automatically.
updated: 2026-11-11
---

Canadian Solar plants are read from the SmartEnergy Portal (EU) with a portal username and password. PVBiz hashes the password locally before signing in and stores the credentials encrypted. There is no share route. Canadian Solar is available on the PVBiz Installer Platform today, where installers and O&M teams monitor fleets across brands. Homeowner subscriptions do not currently include it.

## What PVBiz reads

From each inverter PVBiz reads output power, per-phase power, voltage and current, frequency, solar power, lifetime yield and daily energy, plus AC and boost temperature. It reads MPPT strings 1 to 10 with voltage, current and power, with strings 5 to 10 only where the inverter has them. From the grid meter it reads frequency, power, voltage, current and per-phase power. Readings poll about every five minutes and totals refresh hourly. Totals backfill from the plant's creation year with a floor of 2020, and cover solar, load, import and export.

## No battery data

The key limit is storage: Canadian Solar plants are read as solar-only. Every battery field is empty, so there is no state of charge, no charge or discharge totals and no battery alerts. Today's grid import and export figures are also not populated, although grid power is read from the meter.

## Alarms

Unlike most brands, Canadian Solar's alarms are brought in. PVBiz pulls the alerts from the last 6 hours, grades them critical, warning or info, and de-duplicates them by alert. They are never closed automatically, so a cleared alarm stays until someone closes it. On top, PVBiz's own rules give inverter offline, plant offline, communication failure and your thresholds.

## Known limits

PVBiz does not publish a rate limit for the portal because none is documented, and spaces its calls conservatively. There is no control: PVBiz is read-only on Canadian Solar, and Sunsynk is the only brand where it can change inverter settings.
