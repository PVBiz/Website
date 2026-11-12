---
name: Deye
logo: /img/brands/deye.svg
logoWidth: 120
logoHeight: 36
answer: "PVBiz reads your plant's solar, load, battery and grid figures from Deye Cloud about every five minutes and refreshes energy totals hourly, read-only."
description: Deye monitoring with PVBiz. Share your plant from Deye Cloud or add your own app credentials for live flow, battery and grid alerts, history and reports.
connectionMethod: Share the plant with the PVBiz account shown in the app from Deye Cloud, or add your own Deye developer app credentials. Available to homeowners today.
steps:
  - title: Choose how to connect
    body: "There are two routes. Either share the plant from Deye Cloud (plant, Settings, Sharing) with the PVBiz account shown in the app and enter your Station ID, or add your own Deye developer app details: App ID, App Secret, your account email and password, and a Company ID only if you have one (leave it blank for a personal account). The app's connect screen shows where to find the app details."
  - title: Add it in PVBiz
    body: Sign in to PVBiz, choose Deye and claim the plant. A shared plant is approved by a PVBiz administrator; if your own login already lists the plant, it is added at once. Credentials you type are stored encrypted and never shown again.
  - title: Check the first figures and set your rules
    body: Once the first sync completes the plant shows its readings. The default rules cover grid loss, low battery and inverter faults, and you can add your own thresholds.
dataRead:
  - metric: Plant snapshot
    detail: Solar power, load power, battery power, state of charge and voltage, grid power, and today's generation, consumption, import, export, charge and discharge.
  - metric: Solar strings
    detail: Voltage, current and power for each MPPT string, up to ten per inverter.
  - metric: Grid and load per phase
    detail: Grid voltage, current and power on every phase, single-phase or three-phase, plus load voltage, current and power per phase, grid frequency and status.
  - metric: Battery and inverter
    detail: Battery current, capacity, temperature and charge and discharge current limits, AC and DC temperature, generator power, essential (UPS) power and lifetime solar yield.
  - metric: History and totals
    detail: Daily, monthly and yearly energy for solar, load, import, export, charge and discharge, refreshed hourly.
control: false
alerts:
  - Grid disconnected and grid restored
  - Battery state of charge below a level you set
  - Inverter fault and inverter offline
  - Communication failure when no data arrives
  - Thresholds on the metrics Deye reports, including temperatures, generator power and essential load
limits:
  - PVBiz is read-only on Deye. It cannot change inverter settings.
  - Deye does not report a plant status, plant time zone or master-inverter flag to PVBiz, so those are worked out from the readings.
  - PVBiz does not publish a first-connect history depth for Deye. It refreshes recent days regularly and a daily check refills missing days from roughly the last year.
faq:
  - q: Should I share my Deye plant or add my own credentials?
    a: Sharing means PVBiz never holds your password and needs only your Station ID plus a PVBiz administrator's approval. Your own developer app details add the plant straight away if your login already lists it. Both are read-only.
  - q: Does PVBiz show per-string solar data for Deye?
    a: Yes. PVBiz reads voltage, current and power for each MPPT string on every Deye inverter, and grid and load readings for each phase on three-phase models.
  - q: Can PVBiz change my Deye inverter settings?
    a: No. Only Sunsynk supports inverter control. Deye is monitored and alerted on only.
updated: 2026-11-12
---

Deye plants are read through Deye Cloud, the same service behind the Deye app. PVBiz offers two ways in, and which suits you depends on how much you want to hand over. Sharing the plant with the PVBiz account shown in the app means PVBiz holds none of your credentials. Adding your own developer app credentials, which are an App ID and App Secret plus your account email and password, lets a plant be added immediately if your login already lists it. Either way the connection is read-only.

## What PVBiz reads

PVBiz builds a plant-level snapshot of solar power, load, battery power and state of charge, battery voltage and grid power, along with today's generation, consumption, import, export, charge and discharge. For each inverter it adds AC and DC temperature, battery temperature, generator power, essential (UPS) power, grid frequency and grid status. These are polled about every five minutes, and energy totals are refreshed every hour. Totals cover solar, load, export, import, charge and discharge.

## Alerts

All the standard PVBiz alerts run on Deye: grid disconnected and restored, low battery, inverter fault and offline, and loss of communication. Custom rules can use any metric PVBiz reads, such as battery temperature or generator power. Alerts go out by push, email and Telegram, with WhatsApp as an optional add-on.

## Strings and phases

PVBiz reads every Deye inverter's MPPT strings separately, so a string that is shaded, soiled or disconnected stands out against the others. On three-phase models it reads grid voltage, current and power on each phase, and load per phase, which makes an unbalanced or missing phase easy to spot. Deye does not hand PVBiz a plant status, a plant time zone or a master-inverter flag, so PVBiz works them out from the readings.

## History

Normal syncs refresh recent days, and a daily check looks back roughly a year for days that are missing and refetches them. We do not state how far back the very first sync reaches for Deye, because that depth is not confirmed. PVBiz cannot change anything on a Deye inverter; for control, Sunsynk is the only supported brand.
