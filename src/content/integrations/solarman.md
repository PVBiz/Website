---
name: Solarman
logo: /img/brands/solarman.svg
logoWidth: 1037
logoHeight: 235
answer: "PVBiz reads your plant's solar, load, battery and grid figures from Solarman about every five minutes and refreshes energy totals hourly, through a read-only share."
description: Solarman monitoring with PVBiz. Share your plant with the PVBiz account from the Solarman Sharing menu for live flow, alerts, history and reports.
connectionMethod: Share the plant with the PVBiz account shown in the app from the Solarman Sharing menu. Installers can instead add a Solarman login. Available to homeowners today (share only).
steps:
  - title: Share the plant in Solarman
    body: In the Solarman app, open the plant, go to Sharing and share it with the PVBiz account shown in the PVBiz app. PVBiz only needs to read the plant, so no inverter settings are exposed.
  - title: Claim the plant in PVBiz
    body: Sign in to PVBiz, choose Solarman and claim the plant you shared. A PVBiz administrator approves shared plants. Homeowner subscriptions connect Solarman by share only.
  - title: Let the first sync run
    body: PVBiz pulls your history from the year the plant was created, then the plant appears with its readings. Switch on the default rules for grid loss, low battery and inverter faults, and add your own thresholds.
dataRead:
  - metric: Live power flow
    detail: Load power and today's load, per-phase output voltage, current and power, frequency, solar power, today's yield and lifetime yield.
  - metric: Solar strings
    detail: Per-string MPPT voltage, current and power for strings 1 to 10.
  - metric: Battery
    detail: Power, state of charge, voltage, current, temperature, capacity, limits and today's charge and discharge.
  - metric: Grid
    detail: Frequency, status, per-phase voltage, current and power, total power, and today's import and export, plus AC and DC temperature.
  - metric: History and totals
    detail: Daily, monthly and yearly energy for solar, import, export, charge, discharge and load, refreshed hourly and backfilled from the year the plant was created.
control: false
alerts:
  - Grid disconnected and grid restored
  - Battery state of charge below a level you set
  - Inverter fault and inverter offline
  - Communication failure when no data arrives
  - Thresholds on battery, grid and inverter metrics you choose
limits:
  - Homeowner connections are by share only. Adding a Solarman login is an installer route.
  - PVBiz is read-only on Solarman and cannot change inverter settings.
  - Live readings come from today's device data, so they reflect the current day only.
  - Generator power is not read from Solarman.
  - Alerts from Solarman's own alarm feed are not pulled in; alerts come from PVBiz rules evaluated on the readings it collects.
faq:
  - q: How do I share a Solarman plant with PVBiz?
    a: In the Solarman app open the plant, go to Sharing and share it with the PVBiz account shown in the PVBiz app. Then claim it in PVBiz, where an administrator approves it.
  - q: Can I connect Solarman with my own username and password as a homeowner?
    a: Not at the moment. Homeowners connect Solarman by share. Installers can add a Solarman login, which can cover several businesses and lists plants grouped by business.
  - q: Does PVBiz show per-string solar data for Solarman?
    a: Yes. Strings 1 to 10 are read with voltage, current and power where your inverter reports them.
updated: 2026-11-11
---

Solarman is a platform used by many inverter makers, and PVBiz reads from its cloud rather than from the inverter. For homeowners the route is a share: you share the plant with the PVBiz account shown in the app, using the Sharing menu inside the plant in the Solarman app. PVBiz never holds your Solarman password on this route, and read-only is all it needs.

## Installers and multiple businesses

Installers connect Solarman a different way: they add a Solarman login to the PVBiz Installer Platform. One login can span several businesses, and PVBiz lists the plants grouped by business so you choose which to sync. That route stores the password encrypted. Homeowner subscriptions use the share route only.

## What PVBiz reads

Each sync takes the latest value of each field from Solarman's device data for today. That includes load power and today's load, per-phase output, solar power, today's yield and lifetime yield, strings 1 to 10 with voltage, current and power, and the full battery picture: power, state of charge, voltage, current, temperature, capacity, limits and today's charge and discharge. On the grid side PVBiz reads frequency, status, per-phase values, total power and today's import and export, plus AC and DC temperature. Readings are polled about every five minutes and totals are refreshed hourly.

## Alerts

The standard PVBiz alerts work on Solarman: grid loss and restoration, low battery, inverter fault and offline, and loss of communication, plus custom thresholds on any of the metrics above. They arrive by push, email and Telegram, with WhatsApp as an optional add-on.

## Known limits

PVBiz does not change inverter settings on Solarman. It does not read generator power, and it does not import Solarman's own alarm list; alerts come from PVBiz's rules evaluated on the data it collects. Live readings are taken from today's device data only, so history before you connected comes from the daily, monthly and yearly totals, which are backfilled from the year the plant was created.
