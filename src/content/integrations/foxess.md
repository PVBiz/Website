---
name: FoxESS
logo: /img/brands/foxess.png
logoWidth: 570
logoHeight: 320
answer: "PVBiz reads your plant's solar strings, battery, load and grid figures from FoxESS Cloud about every five minutes, refreshes energy totals hourly and keeps 15-minute history, read-only."
description: FoxESS monitoring with PVBiz. Share your plant with admin@pvbiz.co.za or add your own API key for live flow, battery and grid alerts and history.
connectionMethod: Share the plant from FoxESS Cloud with admin@pvbiz.co.za and enter its Plant ID, or add your own FoxESS API key. Available to homeowners today.
steps:
  - title: Share the plant on FoxESS Cloud
    body: In FoxESS Cloud open the plant and share it with admin@pvbiz.co.za. This is read access only. If you would rather not share, add your own API key instead; the app's connect screen shows where to find it.
  - title: Enter the Plant ID in PVBiz
    body: Sign in to PVBiz, choose FoxESS and enter the plant's ID, shown on the plant's detail page. FoxESS may leave shared-in plants out of its plant list, which is why the ID is used. A PVBiz administrator approves the claim.
  - title: Let history load and set your rules
    body: PVBiz backfills totals from the year the plant was created and 15-minute history from creation. Then switch on the default rules and add your own.
dataRead:
  - metric: Live power flow
    detail: Solar power, load power, grid net power (import minus export), grid frequency and phase voltage, current and power.
  - metric: Solar strings
    detail: Per-string MPPT voltage, current and power for strings 1 to 10.
  - metric: Battery
    detail: Power, state of charge, voltage, current and temperature.
  - metric: Inverter
    detail: Inverter, boost and ambient temperature, and the status of the inverter, logger and meter.
  - metric: History and totals
    detail: Solar, load, import, export, charge and discharge by day, month and year, plus 15-minute energy, backfilled from the plant's creation.
control: false
alerts:
  - Grid disconnected and grid restored
  - Battery state of charge below a level you set
  - Inverter fault and inverter offline
  - Logger offline and communication failure
  - Thresholds on battery, grid and solar metrics you choose
limits:
  - Grid power arrives as one net figure; separate import and export power are not stored, though import and export energy totals are.
  - FoxESS caps API calls per inverter per day and to one per second, so PVBiz paces its requests, and an inverter that cannot be reached is skipped and retried.
  - Generator power and the essential and non-essential load split are not read, so rules on those are not available.
  - FoxESS vendor alarms are not pulled in; alerts come from PVBiz rules on the readings.
  - PVBiz is read-only on FoxESS.
faq:
  - q: Which address do I share my FoxESS plant with?
    a: admin@pvbiz.co.za. Share the plant from FoxESS Cloud and then enter the plant's ID in PVBiz.
  - q: Why does PVBiz ask for the Plant ID?
    a: FoxESS may leave plants shared with another account out of its plant list, so PVBiz looks the plant up directly by its ID.
  - q: Can I use my own FoxESS API key instead of sharing?
    a: Yes. A homeowner can add their own API key, stored encrypted. The connect screen in the app shows where to find the key.
updated: 2026-11-11
---

FoxESS offers two clean ways to connect. The first is to share the plant from FoxESS Cloud with admin@pvbiz.co.za. This is the only share address PVBiz publishes, it carries read access only, and PVBiz never sees your password. The second is to add your own FoxESS API key, which PVBiz stores encrypted. Both are read-only.

## Why a Plant ID

FoxESS may leave plants that were shared with another account out of its plant list. PVBiz therefore looks a shared plant up by its ID, which you copy from the plant's detail page and enter in the app. A PVBiz administrator approves the claim, since FoxESS does not carry the owner's email that would allow automatic approval.

## What PVBiz reads

FoxESS gives a detailed picture. PVBiz reads solar power with per-string MPPT voltage, current and power for strings 1 to 10, load power, grid net power, grid frequency, per-phase voltage, current and power, battery power, state of charge, voltage, current and temperature, and the inverter, boost and ambient temperatures. Status of the inverter, logger and meter is read too. Live readings poll about every five minutes and totals refresh hourly.

## History

Daily, monthly and yearly totals backfill from the year the plant was created. FoxESS is one of three brands where PVBiz also records 15-minute energy, collected overnight and backfilled from the plant's creation.

## Known limits

FoxESS limits each inverter to a set number of API calls per day and one call per second, so PVBiz paces requests and retries an unreachable inverter later rather than hammering it. Grid power is a single net number. Generator power and the essential and non-essential load split are not read, FoxESS's own alarms are not imported, and there is no control: Sunsynk is the only brand where PVBiz can change inverter settings.
