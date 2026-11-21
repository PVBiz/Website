---
installerOnly: true
name: Victron Energy (VRM)
logo: /img/brands/victron.svg
logoWidth: 120
logoHeight: 36
answer: "PVBiz reads your Victron site's solar, battery, load and grid figures from the VRM portal with a VRM access token, at the interval your GX device logs, and works out daily energy totals, monitoring only."
description: Victron VRM monitoring with PVBiz. Paste a VRM access token for live flow, battery and grid alerts and daily history. Monitoring only, nothing installed.
connectionMethod: Create a VRM access token and paste it into PVBiz, then choose which sites to monitor. Monitoring only.
steps:
  - title: Create a VRM access token
    body: In the VRM portal open Preferences, then Integrations, then Access tokens, and create a token. VRM issues every token with full access, so treat it like a password. PVBiz only reads with it.
  - title: Add the token in PVBiz and choose sites
    body: Sign in to PVBiz, choose Victron VRM and paste the token, which is stored encrypted and never shown again. Each VRM installation appears as a plant and you pick which sites to monitor. Sites you do not select are never synced.
  - title: Set the site time zone in VRM
    body: Set each site's time zone in VRM so daily totals are cut on local days. Then switch on the default rules and add your own thresholds.
dataRead:
  - metric: Live power flow
    detail: Solar power, load power and output per phase, and AC and DC temperature, as logged by the GX device.
  - metric: Solar strings
    detail: Per-string MPPT voltage, current and power.
  - metric: Battery
    detail: Power, state of charge, voltage, current, temperature, capacity, charge and discharge limits and today's charge and discharge.
  - metric: Grid and generator
    detail: Grid status, frequency, import, export, total and per-phase values, plus generator power. A site with a generator on an AC input is flagged as generator-backed.
  - metric: History and totals
    detail: Daily energy in kWh from VRM, cut on the site's local days, with monthly and yearly totals summed from those days.
control: false
controlNote: PVBiz offers monitoring only on Victron VRM. It reads sites, live readings and energy totals and does not change inverter settings.
alerts:
  - Grid disconnected and grid restored, where the site has a Multi or Quattro with a grid input
  - Battery state of charge below a level you set
  - Plant offline when the site's last reading is more than 60 minutes old
  - Communication failure when a site is still logging but sends no usable values
  - Thresholds on battery, load, grid, generator and temperature metrics
limits:
  - Data follows the GX device's log interval, 15 minutes by default, so readings can be up to about 20 minutes old.
  - A site is marked offline when its last reading is more than 60 minutes old, so with the default alert batching the offline alert arrives about 70 to 80 minutes after the gateway stops logging.
  - A site with no energy meter, for example a vehicle or a Phoenix-only system, shows live power but no daily totals.
  - Sites without a grid input, or without a Multi or Quattro, show no grid status.
  - PVBiz is read-only on Victron VRM.
faq:
  - q: Where do I find the VRM access token?
    a: In the VRM portal, open Preferences, then Integrations, then Access tokens, and create a token. Paste it into PVBiz. VRM issues every token with full access, so keep it private.
  - q: Why is my Victron data a few minutes behind?
    a: VRM stores what your GX device logs, every 15 minutes by default, so readings can be up to about 20 minutes old. PVBiz can only show what VRM holds.
  - q: Why does my Victron site have no daily totals?
    a: A site with no energy meter, for example a vehicle or a Phoenix-only system, reports no energy to VRM. PVBiz shows its live power but writes no daily totals.
updated: 2026-11-21
---

Victron Energy sites reach PVBiz through the VRM portal. There is no share step: you create an access token in VRM and paste it into PVBiz, and PVBiz uses it to read your sites. Each VRM installation appears as a plant, and you choose which sites to monitor. Nothing is installed and nothing at the site changes.

## What PVBiz reads

PVBiz reads solar power, load power and output per phase, per-string MPPT voltage, current and power, and battery power, state of charge, voltage, current, temperature, capacity and charge and discharge limits. It also reads grid status, frequency, import, export and per-phase values, plus generator power and AC and DC temperature. Because VRM stores what the GX device logs, which is every 15 minutes by default, the readings follow that interval rather than a fixed poll.

## How totals work

Daily energy comes from VRM and is cut on the site's local days, which is why the site's time zone should be set in VRM. Monthly and yearly totals are summed from those daily rows. A site with no energy meter, such as a vehicle or a Phoenix-only system, shows live power but no daily totals.

## Grid status and generators

Grid status shows whether grid voltage is present at the Multi or Quattro's grid input. A site that runs on its battery by choice while the grid is up shows the grid as connected, with the grid reading idle rather than no data. When the grid input has no voltage, PVBiz shows the grid as disconnected and can raise the grid-disconnect alert. Sites without a grid input, or without a Multi or Quattro, show no grid status. A site with a generator configured on an AC input is flagged as generator-backed.

## Alerts

The standard alerts run on Victron: grid loss, low battery, a plant going offline and loss of communication, plus thresholds on the metrics above. A site is marked offline when its last reading is more than 60 minutes old and goes back online, closing the alert, on its next reading. A site that is still logging but sends no usable values stays online and raises a no-data alert instead.

## Known limits

Everything depends on the GX device logging to VRM. Readings can be up to about 20 minutes old, and with the default alert batching an offline alert arrives about 70 to 80 minutes after the gateway stops logging, later than for brands PVBiz polls directly. PVBiz is read-only on Victron VRM, and Sunsynk is the only brand where it can change settings.
