---
name: Sol-Ark
logo: /img/brands/solark.png
logoWidth: 600
logoHeight: 190
answer: "PVBiz reads your plant's solar, battery, load and grid figures from Sol-Ark Cloud about every five minutes and refreshes energy totals hourly, monitoring only, with your Sol-Ark login."
description: Sol-Ark monitoring with PVBiz. Connect your Sol-Ark Cloud login for live flow, per-string solar, battery and grid alerts and full history. Monitoring only.
connectionMethod: Add your Sol-Ark Cloud username and password, then choose which plants to sync. Monitoring only. Available to homeowners today.
steps:
  - title: Use your Sol-Ark Cloud login
    body: PVBiz signs in with the username and password of your Sol-Ark Cloud (MySolArk) account. There is no share step on Sol-Ark; PVBiz uses the login itself.
  - title: Add it in PVBiz and choose plants
    body: Sign in to PVBiz, choose Sol-Ark and enter the login, which is stored encrypted and never shown again. PVBiz fetches your plants and you pick which to sync.
  - title: Let history load and set your rules
    body: PVBiz backfills energy totals from the month the plant was created, not earlier than 2020. Then switch on the default rules and add your own thresholds.
dataRead:
  - metric: Live power flow
    detail: Solar power, today's and lifetime yield, load power (total, essential, non-essential, daily, frequency and per phase).
  - metric: Solar strings
    detail: Per-string MPPT voltage, current and power for strings 1 to 10.
  - metric: Battery
    detail: Power, state of charge, voltage, current, temperature, capacity, limits and today's charge and discharge.
  - metric: Grid and generator
    detail: Frequency, status, import, export, total and per-phase values, plus generator power and AC and DC temperature.
  - metric: History and totals
    detail: Solar, load, export, import, charge and discharge, taken as Sol-Ark reports them and refreshed hourly.
control: false
controlNote: PVBiz offers monitoring only on Sol-Ark. It reads plants, inverters, live readings and energy totals and does not change inverter settings
alerts:
  - Grid disconnected and grid restored
  - Battery state of charge below a level you set
  - Inverter fault and inverter offline
  - Communication failure when no data arrives
  - Thresholds on battery, load, grid, generator and temperature metrics, including per-string solar
limits:
  - Monitoring only. PVBiz does not change inverter settings on Sol-Ark, and no operational data is collected beyond readings and energy totals.
  - Monthly and yearly totals are Sol-Ark's own figures, used as reported rather than rebuilt from daily values, so they match the Sol-Ark app.
  - If one part of Sol-Ark's data fails during a sync, the rest is kept and the gap is flagged instead of the whole reading being dropped.
  - Sol-Ark logins are backed off after a rejection, so a wrong password is not retried repeatedly.
  - Sol-Ark alarms are not pulled in; alerts come from PVBiz rules on the readings.
faq:
  - q: Do I share my Sol-Ark plant with PVBiz?
    a: No. Sol-Ark connects with your own Sol-Ark Cloud username and password, which PVBiz stores encrypted. You then choose which plants to sync.
  - q: Can PVBiz control my Sol-Ark inverter?
    a: No. Sol-Ark is monitoring only in PVBiz. Sunsynk is the only brand where PVBiz can change inverter settings.
  - q: How far back does Sol-Ark history go?
    a: PVBiz backfills totals from the month the plant was created, with a floor of 2020.
updated: 2026-11-11
---

Sol-Ark is one of the fullest integrations PVBiz offers on the read side, and one of the clearest on the limits: it is monitoring only. You add your Sol-Ark Cloud (MySolArk) username and password, PVBiz fetches your plants, and you choose which to sync. There is no share step on Sol-Ark. The login is stored encrypted and is write-only in the app.

## What PVBiz reads

For each plant's master inverter PVBiz reads solar power with today and lifetime yield, strings 1 to 10 with voltage, current and power, and load power including total, essential, non-essential and per-phase figures. The battery is covered in depth: power, state of charge, voltage, current, temperature, capacity, current limits and today's charge and discharge. On the grid side PVBiz reads frequency, status, import, export, total and per-phase values, plus generator power and AC and DC temperature. Readings poll about every five minutes and totals refresh hourly.

## How totals work

Monthly and yearly totals are Sol-Ark's own figures, used as Sol-Ark reports them rather than summed up from days. That keeps PVBiz in step with the numbers in the Sol-Ark app. Normal syncs refresh the last 14 days; on first connect PVBiz backfills from the month the plant was created, with a floor of 2020.

## Resilience

If one of Sol-Ark's data calls fails during a sync, PVBiz keeps the rest and flags the gap instead of discarding the whole reading. After a rejected login it backs off rather than repeating the attempt.

## Alerts and control

All the standard alerts run on Sol-Ark, including thresholds on per-string solar, generator and battery metrics. Sol-Ark's own alarm list is not imported. There is no control on Sol-Ark: PVBiz is monitoring only, and Sunsynk is the only brand where it can change settings.
