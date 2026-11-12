---
installerOnly: true
name: Huawei FusionSolar
logo: /img/brands/huawei.png
logoWidth: 266
logoHeight: 60
answer: "PVBiz reads inverter, battery and grid-meter figures from FusionSolar about every five minutes, refreshes energy totals hourly and pulls in FusionSolar alarms, read-only, on the PVBiz Installer Platform."
description: "Huawei FusionSolar monitoring on the PVBiz Installer Platform: live inverter, battery and meter data, vendor alarms, history and fleet reports."
connectionMethod: Add a FusionSolar account username and password under Integrations on the PVBiz Installer Platform. Available on the PVBiz Installer Platform today.
steps:
  - title: Prepare a FusionSolar account
    body: Use a FusionSolar account that can see the plants you want to monitor. For larger fleets the app suggests adding more than one account, because Huawei limits how fast its service can be queried. The app's connect screen shows what is needed.
  - title: Add it on the Installer Platform
    body: In the PVBiz Installer Platform choose Integrations, add Huawei FusionSolar and enter the username and password. They are stored encrypted and never shown again. PVBiz lists the plants the account can reach so you pick which to sync.
  - title: Let the first sync run
    body: PVBiz discovers the plants and inverters, then backfills daily and monthly totals back to the earliest plant creation date. Switch on rules and alerts for the fleet.
dataRead:
  - metric: Inverter live data
    detail: Output power, phase voltage and current, today's and lifetime energy, frequency and inverter temperature.
  - metric: Solar strings
    detail: Up to 20 strings are combined into 10 channels (voltage averaged, current and power summed).
  - metric: Battery
    detail: On battery inverters, power, state of charge, voltage, temperature, current, and charge and discharge energy.
  - metric: Grid meter
    detail: Grid power, import and export where a meter is installed.
  - metric: FusionSolar alarms
    detail: Current alarms matched to the inverter, ranked critical, warning or info, and closed automatically when FusionSolar clears them.
  - metric: History and totals
    detail: Solar, load, import, export, charge and discharge, refreshed hourly and backfilled to the plant's creation date.
control: false
alerts:
  - Inverter offline and plant offline
  - Communication failure when no data arrives
  - FusionSolar alarms raised as PVBiz events with their severity
  - Thresholds on the inverter, battery and grid metrics PVBiz reads
limits:
  - Huawei rate-limits its service heavily. PVBiz waits and retries when it is throttled, and a large fleet is best spread across several FusionSolar accounts.
  - Some devices that fail repeatedly are skipped for 24 hours before PVBiz tries them again.
  - DC temperature is not read, and the data has no collection timestamp from Huawei.
  - PVBiz is read-only on FusionSolar.
  - Available on the PVBiz Installer Platform today. Homeowner subscriptions do not include FusionSolar at the moment.
faq:
  - q: Can I connect Huawei FusionSolar as a homeowner?
    a: FusionSolar is available on the PVBiz Installer Platform today. Homeowner subscriptions do not include it at the moment; installers can book a demo from the installers page.
  - q: Why does PVBiz suggest several FusionSolar accounts?
    a: Huawei limits how quickly its service can be queried. Spreading plants across several accounts keeps a large fleet refreshing reliably.
  - q: Are FusionSolar alarms shown in PVBiz?
    a: Yes. Active alarms are brought in as events with severity, and they close automatically once FusionSolar clears them.
updated: 2026-11-11
---

Huawei FusionSolar is one of the heavier-weight integrations because Huawei throttles its service aggressively. PVBiz is built for it, but the practical result is that fleet operators get the best results by spreading plants across more than one FusionSolar account, and the connect screen in the Installer Platform says so. Huawei FusionSolar is available on the PVBiz Installer Platform today, which is where installers and O&M teams monitor fleets across brands. Homeowner subscriptions do not currently include it.

## Connecting

You add a FusionSolar account username and password under Integrations. PVBiz stores them encrypted, lists every plant that account can reach, and lets you choose which to sync. Read-only access is all that is used; nothing is written back to your inverters.

## What PVBiz reads

String inverters and battery inverters are both covered, and a grid meter is read where fitted. From the inverter PVBiz takes output power, per-phase voltage and current, today's and lifetime energy, frequency and temperature. Up to 20 strings are combined into 10 channels. Battery inverters also give battery power, state of charge, voltage, temperature, current and charge and discharge energy. Readings poll about every five minutes and totals refresh hourly. Totals are backfilled to the earliest plant creation date.

## Alarms

Unlike most brands, FusionSolar's own alarms are brought in whenever the portal session is available. Each is matched to its inverter, tagged critical, warning or info, and closed automatically when FusionSolar reports it cleared. On top of that, PVBiz's own rules give inverter offline, plant offline, communication failure and custom thresholds on the metrics above.

## Known limits

Because Huawei limits request rates, PVBiz paces its calls, waits when throttled and skips a device for 24 hours if it keeps failing. DC temperature is not read and Huawei provides no collection timestamp with the readings. There is no control on FusionSolar; Sunsynk is the only brand where PVBiz can change settings.
