---
name: SolarEdge
logo: /img/brands/solaredge.svg
logoWidth: 120
logoHeight: 36
answer: "PVBiz reads your site's power flow, inverter and storage figures from the SolarEdge monitoring portal about every five minutes and refreshes energy totals hourly, read-only, with your portal email and password."
description: SolarEdge monitoring with PVBiz. Connect with your monitoring-portal email and password (API keys were retired 2026-11-01) for live flow, 15-minute history, alerts and reports.
connectionMethod: Sign in with the email and password you use at monitoring.solaredge.com. SolarEdge retired API keys on 2026-11-01, so PVBiz does not use them. Available to homeowners today.
steps:
  - title: Use your monitoring-portal login
    body: PVBiz connects with the same email and password you use at monitoring.solaredge.com. SolarEdge retired its API keys on 2026-11-01, so there is no key to create. The login is stored encrypted and never shown again.
  - title: Add it in PVBiz and allow the first login
    body: Sign in to PVBiz, choose SolarEdge and enter the login. The first connection opens a background sign-in and can take up to 90 seconds; after that PVBiz keeps its portal session refreshed without repeating it.
  - title: Pick your site and set your rules
    body: Choose the site to sync. History is backfilled, and the default rules switch on, with your own thresholds on top.
dataRead:
  - metric: Inverter live data
    detail: Active power, AC voltage and current on each phase, AC frequency, temperature, DC voltage and lifetime energy.
  - metric: Site power flow
    detail: Solar, load, grid and storage flows for the site, plus today's import and export.
  - metric: History and totals
    detail: Production, consumption, export (feed-in) and import (purchased) by day, month and year, refreshed hourly and backfilled from the year the site was created.
  - metric: Intraday energy
    detail: 15-minute energy including self-consumption, backfilled from site creation or up to 730 days.
control: false
alerts:
  - Plant offline when the site stops communicating
  - Inverter offline
  - Communication failure when no data arrives
  - Thresholds on the power flow and inverter metrics PVBiz reads
limits:
  - API keys are not used. SolarEdge retired them on 2026-11-01, so connection is by monitoring-portal email and password only.
  - Only MPPT 1 is partly read and strings 2 to 10 are not; per-phase power and battery voltage are not read either.
  - Battery charge and discharge energy totals are not provided, and rules on DC temperature, battery temperature or voltage and generator cannot be built.
  - Readings older than 20 minutes are treated as missing rather than shown as current, and a plant is marked offline only when it is not communicating and its last update is over an hour old.
  - PVBiz is read-only on SolarEdge.
faq:
  - q: Does PVBiz still use SolarEdge API keys?
    a: No. SolarEdge retired its API keys on 2026-11-01. PVBiz connects with the email and password you use for the SolarEdge monitoring portal.
  - q: Why does the first SolarEdge connection take so long?
    a: The first sign-in opens a background login to the SolarEdge portal and can take up to 90 seconds. After that PVBiz refreshes its session without repeating it.
  - q: Can PVBiz change my SolarEdge settings?
    a: No. SolarEdge is monitored and alerted on only. Sunsynk is the only brand with inverter control.
updated: 2026-11-11
---

SolarEdge changed how third parties connect: its API keys were retired on 2026-11-01. PVBiz therefore connects the way you would yourself, with the email and password for the SolarEdge monitoring portal at monitoring.solaredge.com. There is no key to generate. Your login is stored encrypted and is write-only in the app, so it is never displayed again.

## The first login

The first connection signs in to the portal in the background, and that can take up to 90 seconds. After it succeeds, PVBiz keeps its session refreshed without repeating the full sign-in. If your first test seems slow, that is the SolarEdge portal responding, not a fault.

## What PVBiz reads

From each inverter PVBiz reads active power, AC voltage and current on each phase, frequency, temperature, DC voltage and lifetime energy. From the site's power-flow view it reads solar, load, grid and storage flows. Today's import and export come from the energy summary, which is cached for a short time. Live readings are polled about every five minutes and totals are refreshed every hour. Totals are production, consumption, export and import by day, month and year, backfilled from the year the site was created.

## Intraday history

SolarEdge is one of three brands where PVBiz also keeps 15-minute energy, including self-consumption. It is collected overnight and resumes from where it last stopped; on first connection it backfills from the site's creation or up to 730 days.

## Known limits

The portal route has gaps worth knowing about: MPPT strings 2 to 10 are not read, MPPT 1 is partial, per-phase power and battery voltage are missing, and battery charge and discharge energy is not provided. Readings older than 20 minutes are discarded rather than shown as current. PVBiz marks a plant offline only when SolarEdge says it is not communicating and the last update is over an hour old. PVBiz is read-only on SolarEdge, and for control Sunsynk is the only supported brand.
