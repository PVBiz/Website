---
name: Solar Assistant
logo: /img/brands/solarassistant.png
logoWidth: 503
logoHeight: 300
logoTall: true
answer: "PVBiz reads your site's solar, battery, load and grid figures from your Solar Assistant gateway about every five minutes and works out energy totals hourly, through a read-only share."
description: Solar Assistant monitoring with PVBiz. Share your site with the PVBiz account and add its address for live flow, battery and grid alerts and full history from the site's first sample.
connectionMethod: Share the Solar Assistant site with the PVBiz account shown in the app, then add the site by its address. Available to homeowners today (share only).
steps:
  - title: Share the site with PVBiz
    body: In Solar Assistant, share the site with the PVBiz account shown in the PVBiz app. PVBiz reads the site; it changes nothing on it.
  - title: Add the site by its address
    body: Solar Assistant has no plant list, so each site is added by its host name. Use the address shown in your browser when the site is open, for example plant1.eu.solar-assistant.io. It must end in .solar-assistant.io. A PVBiz administrator approves the claim.
  - title: Let history load and set your rules
    body: PVBiz backfills from the earliest sample in the site's database. Then switch on the default rules and add your own thresholds.
dataRead:
  - metric: Live power flow
    detail: Solar power, load, essential and non-essential load, battery state of charge, power, temperature and voltage, grid power, voltage and frequency, and generator power.
  - metric: Solar strings
    detail: Per-inverter MPPT voltage, current and power for strings 1 to 10.
  - metric: Inverter
    detail: Inverter temperature and DC temperature.
  - metric: History and totals
    detail: Solar, load, import, export, charge and discharge, worked out by PVBiz from one-minute power data, backfilled from the site's earliest sample.
control: false
alerts:
  - Grid disconnected and grid restored
  - Battery state of charge below a level you set
  - Inverter fault and inverter offline, with the plant marked offline after 15 minutes of the device being offline
  - Communication failure when no data arrives
  - Thresholds on battery, load, grid, generator and temperature metrics
limits:
  - The Solar Assistant gateway must be online. If the unit is offline the site cannot be read and PVBiz records it as device offline.
  - Totals are calculated by PVBiz from one-minute power readings because Solar Assistant has no vendor totals; a day with less than half its data present is left blank rather than estimated.
  - Grid voltage is not available for alert rules, and a battery temperature of zero is treated as not reported.
  - Homeowner connections are by share only.
  - PVBiz is read-only on Solar Assistant.
faq:
  - q: Which Solar Assistant address does PVBiz need?
    a: The site's host name, the address shown in your browser when the site is open, for example plant1.eu.solar-assistant.io. It must end in .solar-assistant.io.
  - q: What if my Solar Assistant unit is offline?
    a: PVBiz can only read the site while the gateway is online. When it is not, PVBiz records the site as device offline, and the plant is marked offline after 15 minutes.
  - q: Where do Solar Assistant energy totals come from?
    a: PVBiz works them out from the site's one-minute power data, because Solar Assistant provides no vendor totals. Days with under half their data are left blank.
updated: 2026-11-11
---

Solar Assistant differs from the other brands because it is not a vendor cloud. It is a gateway you run on your own site, and PVBiz reads it through the site's web interface and its own database. For homeowners the route is a share: you share the site with the PVBiz account shown in the app, then add the site by its address. There is no plant list on Solar Assistant, so the address, such as plant1.eu.solar-assistant.io, is how PVBiz finds the site. Only HTTPS addresses ending in .solar-assistant.io are accepted.

## What PVBiz reads

From the site's database PVBiz reads solar power, load, essential and non-essential load, battery state of charge, power, temperature and voltage, grid power, voltage and frequency, generator power, inverter temperature and DC temperature, plus per-inverter MPPT strings 1 to 10 with voltage, current and power. Readings poll about every five minutes. Daily energy shown in the live view is taken from PVBiz's own daily totals.

## How totals work

Solar Assistant has no vendor totals, so PVBiz integrates energy itself from one-minute power data: solar, load, import, export, charge and discharge. A day with under half its data present is left blank instead of estimated, and during the first three local hours of each day PVBiz re-reads yesterday to catch late data. History backfills from the earliest sample in the site's database, which can be far deeper than most cloud brands.

## Alerts

The standard alerts run on Solar Assistant: grid loss, low battery, inverter fault and offline, and loss of communication, plus thresholds on the metrics above. The plant is marked offline after 15 minutes of the device being offline. Grid voltage is not available for rules.

## Known limits

Everything depends on the gateway being online and reachable. If the unit is down, the site cannot be read and is recorded as device offline. Because totals are calculated by PVBiz, they can differ slightly from figures you derive elsewhere. PVBiz is read-only on Solar Assistant, and Sunsynk is the only brand where it can change settings.
