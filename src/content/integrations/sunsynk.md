---
name: Sunsynk
logo: /img/brands/sunsynk.png
logoWidth: 1509
logoHeight: 782
logoTall: true
answer: "PVBiz reads your plant's live power flow, battery, grid and inverter figures from the Sunsynk cloud about every five minutes, adds hourly energy totals, and is the only brand where it can also change inverter settings."
description: Sunsynk monitoring with PVBiz. Share your plant with admin@pvbiz.co.za or add your login for live flow, battery and grid alerts, history and inverter control.
connectionMethod: Share the plant with the PVBiz account (admin@pvbiz.co.za) on the Sunsynk cloud, or add your own Sunsynk username and password. Available to homeowners today.
steps:
  - title: Share the plant on the Sunsynk cloud
    body: In the Sunsynk app or web portal, open the plant, choose Share and share it with admin@pvbiz.co.za. A view-only share is enough for monitoring and alerts. Share with Manager permission instead if you want to change inverter settings from PVBiz.
  - title: Add it in PVBiz
    body: Sign in to PVBiz, choose Sunsynk and claim the plant you shared. If the owner email on the plant matches your PVBiz account the claim is approved straight away; otherwise a PVBiz administrator approves it. If you prefer, add your own Sunsynk username and password instead, which PVBiz stores encrypted.
  - title: Wait for the first sync, then set your rules
    body: PVBiz pulls your totals and recent intraday history, and the plant then appears with its figures. The default rules cover grid loss, low battery and inverter faults; add your own thresholds and pick the channels.
dataRead:
  - metric: Live power flow
    detail: 'Solar generation, battery power, grid power and home load, read about every five minutes per inverter from separate load, solar, battery and grid readings.'
  - metric: Solar strings
    detail: Per-string MPPT voltage, current and power for strings 1 to 10, plus lifetime and today's yield.
  - metric: Battery
    detail: State of charge, power, voltage, current, temperature, today's charge and discharge, capacity and current limits.
  - metric: Grid and load
    detail: Grid frequency and status, today's import and export, per-phase voltage, current and power, essential and non-essential load, and generator power.
  - metric: Inverter
    detail: AC and DC temperatures.
  - metric: History and totals
    detail: Daily, monthly and yearly energy (solar, load, import, export, charge, discharge) refreshed hourly, backfilled from the year the plant was created. Intraday 15-minute energy is kept too, but only for the last 90 days because that is all Sunsynk retains.
control: true
controlNote: 'Sunsynk is the only brand where PVBiz can change inverter settings. Settings available are force charge, work mode, energy mode, solar export, grid peak shaving, battery charge current and a six-slot battery timer, with schedules and automations on top. This needs the plant shared with Manager permission or your own Sunsynk login added in PVBiz; a view-only share is monitored but refused control'
alerts:
  - Grid disconnected and grid restored
  - Battery state of charge below a level you set
  - Inverter fault, inverter warning and inverter offline
  - Communication failure when no data arrives for a period you choose
  - AC temperature, essential load and other inverter metrics against your own thresholds
limits:
  - PVBiz reads what the Sunsynk cloud holds. If the inverter's data logger is offline, PVBiz reports the plant offline rather than guessing.
  - Intraday history is limited to 90 days by Sunsynk, so finer-grained data older than that cannot be recovered. Daily, monthly and yearly totals go back to the year the plant was created.
  - Sunsynk's own daily totals can lag by one to three days, so the most recent days may be corrected after the fact.
  - Grid import and export arrive as a single net power figure; today's import and export energy are separate daily counters.
  - A view-only share cannot change settings. Testing your own login can take up to 90 seconds, which is the Sunsynk cloud's response time, not PVBiz's.
faq:
  - q: Do I need any hardware to connect Sunsynk to PVBiz?
    a: No. PVBiz reads from the Sunsynk cloud through the plant you share or the login you add. Nothing is installed and no wiring changes.
  - q: What permission should I share the plant with?
    a: A view-only share is enough for monitoring, alerts, forecasts, analysis and reports. Share with Manager permission only if you want to change inverter settings from PVBiz.
  - q: Can PVBiz control my Sunsynk inverter?
    a: Yes, and Sunsynk is the only brand where it can. Control needs a Manager share or your own Sunsynk login. Every other brand is read-only.
updated: 2026-11-11
---

Connecting Sunsynk is one of the simplest set-ups PVBiz offers: there is nothing to install. You either share the plant with the PVBiz account on the Sunsynk cloud, or you add your own Sunsynk username and password, and PVBiz confirms it can see the plant. If you share, you never hand over your password.

## What you get on Sunsynk

Sunsynk exposes one of the fullest sets of readings of any brand PVBiz supports. Load, solar, battery and grid are read separately for each inverter, so the live flow diagram and the alert rules can use per-string solar data, per-phase grid figures, essential and non-essential load, battery temperature and generator power where your system reports them. All the alert rules PVBiz offers can be pointed at Sunsynk metrics.

Live readings are refreshed about every five minutes. Hourly, PVBiz refreshes energy totals for solar, load, grid import, grid export, battery charge and battery discharge. When a plant is first connected, totals are backfilled from the year the plant was created, so analysis and seasonal comparisons have real history from day one.

## Control is a Sunsynk-only feature

PVBiz is read-only on every other brand. On Sunsynk it can also write settings, but only with Manager permission on the share or your own login. Force charge, work mode, energy mode, solar export, grid peak shaving, battery charge current and the six-slot battery timer can all be changed from PVBiz, and schedules and automation rules can drive them. If you shared as a view-only visitor, PVBiz says so plainly when you try to change something and leaves the inverter alone.

## Honest limits

The 90-day intraday limit is Sunsynk's, not PVBiz's: the vendor keeps only the last 90 days of fine-grained data, so anything older cannot be fetched. Daily totals from Sunsynk can be late by a day or two and PVBiz corrects them as the vendor settles its numbers. Everything PVBiz shows is what the Sunsynk cloud knows, so a logger that has lost its connection shows as offline.
