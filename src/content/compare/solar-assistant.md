---
competitor: Solar Assistant
integration: solar-assistant
relationship: complement
title: PVBiz and Solar Assistant
answer: "Solar Assistant is local monitoring software on a small Raspberry Pi or Orange Pi device wired to your inverter, bought once with no monthly fee. PVBiz is a cloud app that can read a Solar Assistant site you share with it, and adds push, Telegram and WhatsApp alerts, cloud history, a 7-day forecast and plants on other brands in one place. They work together."
description: "PVBiz and Solar Assistant: a local monitoring device and a cloud app that reads it. What each does, alerts, prices and why many owners use both."
rows:
  - feature: What it is
    pvbiz: Cloud monitoring, alerts and analysis app. Reads a Solar Assistant site through a share, plus 14+ other brands and platforms.
    them: Local monitoring and control software on a Raspberry Pi or Orange Pi, wired to the inverter and battery.
  - feature: Price
    pvbiz: R55 a month or R549 a year for up to two plants, every feature included. 7-day free trial.
    them: Software R999 once, with lifetime updates and no monthly fee, or a ready-made device from R2,499, plus a cable. Optional Pro features R249 a year.
  - feature: Hardware
    pvbiz: None. PVBiz reads from the cloud or gateway your system already reports to.
    them: A Raspberry Pi or Orange Pi device and an inverter-specific cable.
  - feature: Where data lives
    pvbiz: In PVBiz's cloud, so history stays available when the site is offline.
    them: On the device. Solar Assistant states it does not store your data in the cloud.
  - feature: Live data
    pvbiz: Solar, battery, load and grid about every five minutes from the Solar Assistant site, with totals worked out hourly from one-minute data.
    them: Updates as often as every two seconds on the local dashboard.
  - feature: Alerts
    pvbiz: Grid lost and restored, battery below a level you choose, inverter fault or offline, device offline after 15 minutes, and your own thresholds on battery, load, grid, generator and temperature.
    them: Email notifications on any tracked metric, including Eskom load shedding, sent through Solar Assistant's cloud. One email when a condition starts and one when it ends.
  - feature: Alert channels
    pvbiz: Push, email and Telegram. WhatsApp as an optional add-on.
    them: Email.
  - feature: Reports and exports
    pvbiz: Excel export of every metric for any period.
    them: CSV export of monitoring data.
  - feature: Inverter settings
    pvbiz: None on Solar Assistant. PVBiz is read-only here.
    them: Remote inverter settings for administrators, and rule-table automations.
  - feature: Multiple sites
    pvbiz: Two plants on any brands in one subscription. Installers get a fleet view on the PVBiz Installer Platform.
    them: One login for many sites, with viewer and administrator roles. Organisations can bulk-activate devices and run a branded portal.
chooseThem:
  - You want local, second-by-second data that keeps working without the internet.
  - You want to pay once, with no monthly fee.
  - You want to change inverter settings or run automations locally, or feed Home Assistant.
choosePvbiz:
  - You want alerts by push, Telegram or WhatsApp, not only email.
  - You want history kept in the cloud even when the device is offline.
  - You have other plants on inverter clouds, such as Sunsynk, Solis or Huawei, and want them all in one app.
  - You want a 7-day forecast and month-on-month analysis without setting anything up.
faq:
  - q: Does PVBiz replace Solar Assistant?
    a: No. PVBiz reads a Solar Assistant site that you share with the PVBiz account. Solar Assistant keeps running locally, and PVBiz adds cloud alerts, history and other brands on top.
  - q: What happens in PVBiz if my Solar Assistant device goes offline?
    a: PVBiz cannot read the site while the device is offline. It marks the plant offline after 15 minutes and can alert you, and the history it already collected stays available.
  - q: Can PVBiz change settings through Solar Assistant?
    a: No. PVBiz is read-only on Solar Assistant. Inverter control in PVBiz is available on Sunsynk only.
  - q: How much does Solar Assistant cost?
    a: On its South African shop, checked 12 November 2026, the software is R999 once with lifetime updates, ready-made devices start at R2,499, cables are extra, and optional Pro features are R249 a year.
sources:
  - label: Solar Assistant home page
    url: https://solar-assistant.io/
  - label: "Solar Assistant shop: software"
    url: https://solar-assistant.io/shop/products/software
  - label: "Solar Assistant shop: Pro"
    url: https://solar-assistant.io/shop/products/software_pro
  - label: Solar Assistant shop
    url: https://solar-assistant.io/shop
  - label: "Solar Assistant help: remote access"
    url: https://solar-assistant.io/help/access/overview
  - label: "Solar Assistant help: email notifications"
    url: https://solar-assistant.io/help/automation/notify
  - label: "Solar Assistant help: exporting data"
    url: https://solar-assistant.io/help/historic-data/export
  - label: "Solar Assistant help: users and roles"
    url: https://solar-assistant.io/help/user-management/overview
  - label: "Solar Assistant help: organisations and bulk activation"
    url: https://solar-assistant.io/help/organizations/bulk-activation
checked: 2026-11-12
---

## A local device and a cloud app

Solar Assistant runs on a small computer next to your inverter, connected by a cable. It reads the inverter and battery directly, shows live figures every few seconds, keeps working when the internet is down, and stores its data on the device. You pay once.

PVBiz is a cloud app. When you share a Solar Assistant site with the PVBiz account and add it by its address, PVBiz reads solar, battery, load and grid figures from it about every five minutes, works out daily totals from one-minute power data, and keeps the history in the cloud.

So the two are not rivals. Solar Assistant is the local eyes on the inverter; PVBiz is where the alerts, the long-term history and your other plants come together.

## What PVBiz adds to a Solar Assistant site

**Alerts that reach you.** Solar Assistant sends email notifications. PVBiz sends push, email and Telegram, with WhatsApp as an add-on, on grid loss, battery level, faults, the device going offline, or thresholds you set.

**History that survives the device.** If the Pi or its SD card fails, the history PVBiz already collected is still in PVBiz.

**Everything in one place.** A Solar Assistant site at home and a Sunsynk or Solis plant elsewhere sit in one PVBiz subscription.

## Where Solar Assistant shines

Second-by-second local data, operation without the internet, local automations, Home Assistant integration and inverter settings changes are Solar Assistant's strengths, and they keep working alongside PVBiz.
