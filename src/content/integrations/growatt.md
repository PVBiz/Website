---
name: Growatt
logo: /img/brands/growatt.png
logoWidth: 182
logoHeight: 31
answer: "PVBiz reads your plant's solar, battery, load and grid figures from the Growatt API about every ten minutes and builds hourly energy totals, read-only, using a Growatt API token."
description: Growatt monitoring with PVBiz. Connect with a Growatt API token and your server region for live solar, battery, load and grid readings, alerts and daily energy totals. Read-only.
connectionMethod: Add a Growatt API token and choose your server region (Global, United States, China or Australia). Available to homeowners today.
steps:
  - title: Get your Growatt API token
    body: PVBiz connects with a Growatt API token, not your password. The app's connect screen shows where to find the token for your account.
  - title: Add it in PVBiz with your region
    body: Sign in to PVBiz, choose Growatt, paste the token and pick the server region your account is on - Global, United States, China or Australia. The token is stored encrypted and never shown again.
  - title: Pick your plant and set your rules
    body: Choose the plant to sync. Daily totals start building from the day you connect, and the default rules switch on, with your own thresholds on top.
dataRead:
  - metric: Live readings
    detail: For the plant's main inverter, solar power, battery power, state of charge, voltage and temperature, and load output power.
  - metric: Grid
    detail: Grid frequency, status, power, and today's import and export.
  - metric: Inverter
    detail: Inverter and DC temperature.
  - metric: History and totals
    detail: Daily energy from Growatt's today counters; monthly and yearly figures are sums of PVBiz's own daily records.
control: false
alerts:
  - Grid disconnected and grid restored
  - Battery state of charge below a level you set
  - Inverter fault and inverter offline
  - Communication failure when no data arrives
  - Thresholds on battery, load, grid and solar power, though not generator power, the essential load split or grid voltage
limits:
  - Growatt is refreshed every 10 minutes, not every 5, so alerts can be up to that much slower to arrive than on most brands.
  - There is no per-string (MPPT) data and no per-phase data.
  - Only the main inverter on each plant is read, and Growatt does not supply plant status, rated power or a time zone.
  - PVBiz does not confirm a first-connect history backfill for Growatt. Daily totals build from when you connect, and Growatt itself keeps only about three months of history.
  - Monthly and yearly totals are sums of PVBiz's daily records, and lifetime totals are not fetched.
  - PVBiz is read-only on Growatt.
faq:
  - q: How often does PVBiz refresh Growatt?
    a: Live readings are refreshed every 10 minutes, half the rate of most other brands. Energy totals are refreshed hourly.
  - q: Does PVBiz need my Growatt password?
    a: No. It uses a Growatt API token and your server region. The app's connect screen shows where to find the token, and PVBiz stores it encrypted.
  - q: Can I see my Growatt history from before I connected?
    a: Do not count on it. PVBiz does not confirm a history backfill for Growatt; daily totals build from the day you connect, and Growatt keeps only about three months itself.
updated: 2026-11-11
---

Growatt connects through an API token rather than a username and password, and that shapes the whole integration. You choose the server region your account lives on, either Global, United States, China or Australia, paste the token, and PVBiz reads through Growatt's open API. Your password is never used. The token is stored encrypted and is write-only in the app.

## Ten-minute refresh

Growatt is the slowest-refreshing integration PVBiz runs: live readings update every 10 minutes instead of every 5. That is how Growatt is configured in PVBiz. Energy totals still refresh hourly. If a fast reaction to a grid or battery event matters to you, bear in mind that a Growatt alert can arrive up to that much later than on other brands.

## What PVBiz reads

PVBiz reads the plant's main inverter. From it come solar power, battery power, state of charge, voltage and temperature, load output power, grid frequency, status and power, today's import and export, and inverter and DC temperature. There are no per-string MPPT readings and no per-phase data.

## History

Daily totals come from Growatt's own counters for today. Monthly and yearly figures are sums of the daily records PVBiz has stored, and lifetime totals are not fetched. PVBiz does not confirm a first-connect backfill for Growatt, and Growatt itself retains only around three months of history, so plan on history building from the day you connect.

## Alerts and limits

The standard alerts run on Growatt: grid loss, low battery, inverter fault and offline, and loss of communication, with custom thresholds on the metrics above, though not on generator power, the essential load split or grid voltage. Growatt does not give PVBiz plant status, rated power or a time zone, so these are inferred. There is no control: Sunsynk is the only brand where PVBiz changes settings.
