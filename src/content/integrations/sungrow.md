---
installerOnly: true
name: Sungrow
logo: /img/brands/sungrow.svg
logoWidth: 120
logoHeight: 36
answer: 'PVBiz reads inverter solar, AC and meter figures from Sungrow iSolarCloud about every five minutes and refreshes solar totals hourly, read-only, on the PVBiz Installer Platform.'
description: Sungrow monitoring on the PVBiz Installer Platform. Connect iSolarCloud for inverter, MPPT and meter data and history. No load or battery data.
connectionMethod: Add iSolarCloud OpenAPI credentials (region, App Key, Secret Key) and your iSolarCloud login under Integrations on the PVBiz Installer Platform. Available on the PVBiz Installer Platform today.
steps:
  - title: Gather your iSolarCloud details
    body: You need your iSolarCloud region (International, Europe, Australia or China), an App Key and Secret Key for the iSolarCloud OpenAPI, and your iSolarCloud user email or username and password. The app's connect screen shows where to find the key and secret.
  - title: Add it on the Installer Platform
    body: In the PVBiz Installer Platform choose Integrations, add Sungrow iSolarCloud and enter the five values. They are stored encrypted and never shown again. Choose which plants to sync.
  - title: Let the first sync run
    body: PVBiz discovers the plants and devices and backfills solar totals from each plant's install date. Then switch on alerts for the fleet.
dataRead:
  - metric: Inverter
    detail: DC and AC power, today's and total yield, frequency, air temperature, per-phase voltage and current.
  - metric: Solar strings
    detail: MPPT voltage and current, with power worked out as voltage times current.
  - metric: Grid meter
    detail: If a meter is installed, grid power, frequency, import and export.
  - metric: History and totals
    detail: Solar by day, month and year; import, export and load only where a meter provides them. Hourly refresh, backfilled from the install date.
control: false
alerts:
  - Inverter offline and plant offline, with status taken from the device fault status
  - Communication failure when no data arrives
  - Thresholds on the solar, grid and temperature metrics PVBiz reads
limits:
  - Sungrow has no load or battery data in PVBiz. Only solar and, where a meter is fitted, grid figures are read, so there are no battery alerts or consumption figures.
  - Import, export and load totals exist only where a meter reports them.
  - Today's figures are not in the historical pull, which excludes the current day.
  - Sungrow supplies no collection timestamp with the readings.
  - Connecting needs more than a login, because an App Key and Secret Key are required as well as your user credentials.
  - PVBiz is read-only on Sungrow, and PVBiz raises alerts only from its own rules because Sungrow's alarms are not pulled in.
  - Available on the PVBiz Installer Platform today. Homeowner subscriptions do not include Sungrow at the moment.
faq:
  - q: Does PVBiz show battery or home load for Sungrow?
    a: No. For Sungrow, PVBiz reads inverter and string data, plus grid figures where a meter is installed, but not load or battery.
  - q: What do I need to connect Sungrow iSolarCloud?
    a: Your iSolarCloud region, an App Key and Secret Key, and your iSolarCloud user login. The app's connect screen shows where to find the key and secret.
  - q: Can I connect Sungrow as a homeowner?
    a: Sungrow is available on the PVBiz Installer Platform today. Homeowner subscriptions do not include it at the moment.
updated: 2026-11-11
---

Sungrow connects through the iSolarCloud OpenAPI, which means five values rather than a simple login: the region of your account (International, Europe, Australia or China), an App Key, a Secret Key, and your iSolarCloud user email or username and password. PVBiz stores all five encrypted. The app's connect screen shows where to find the key and secret. Sungrow is available on the PVBiz Installer Platform today, which is where installers and O&M teams monitor mixed-brand fleets. Homeowner subscriptions do not currently include it.

## What PVBiz reads

PVBiz reads from the inverter: DC and AC power, today's and total yield, frequency, air temperature, and per-phase voltage and current. For strings it reads MPPT voltage and current, with power calculated as voltage times current. Where a grid meter is installed, PVBiz overlays grid power, frequency, import and export. Readings poll about every five minutes. Totals are refreshed hourly.

## What Sungrow does not give PVBiz

Be clear before you connect: there is no load or battery data for Sungrow. Load power is not requested and every battery field is empty, so you will not see consumption, battery state of charge or battery alerts. Import, export and load totals appear only where a meter provides them, and otherwise stay blank rather than being shown as zero. Sungrow also gives no collection timestamp with the readings.

## History

Totals backfill from each plant's install date, with a floor of 2015. Ordinary runs pull the last 30 days of daily values, and the historical pull excludes the current day.

## Alerts

PVBiz's own rules give inverter offline, plant offline and communication failure, with status taken from the device's fault status, plus thresholds on the solar, grid and temperature metrics above. Sungrow's own alarm list is not imported. PVBiz is read-only on Sungrow; Sunsynk is the only brand where it can change settings.
