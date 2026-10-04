---
layout: case-study
status: anonymised
order: 7
title: "Dairy ERP for a Family Farm Going Direct to Consumer"
description: "A Canadian family dairy farm launched its own creamery and home delivery on a dairy ERP, with demand forecasting and batch traceability."
last_modified_at: 2026-10-05
summary: "A multi-generation dairy farm in Canada stopped selling raw milk to third parties and launched its own creamery, home delivery memberships and farm shop, run on a dairy-specific ERP."
industry: "Dairy: farm, creamery and home delivery"
location: "Canada"
platform: "Dairy ERP built by Master Software Solutions (not Odoo)"
services: ["ERP implementation", "Demand forecasting", "Traceability"]
duration: "Live since October 2023"
metrics:
  - value: "10%"
    label: "better use of raw milk"
  - value: "100%"
    label: "of creamery deliveries within the freshness window"
  - value: "Under 60 s"
    label: "to compile a batch recall report, down from an estimated 2 to 3 days"
  - value: "0"
    label: "batches wasted through scheduling errors"
metrics_note: "Figures published by Master Software Solutions for this project, not my own measurements."
problem: "The farm has about 450 cows producing around 20,000 litres of raw milk a day. Moving from selling raw milk to other dairies to making and selling its own products meant splitting that milk every day across 21 products in seven product lines, with no demand forecast, no link between creamery batches and delivery dates, and no system for members, billing or recalls."
existing_process: "Milk allocation was a daily judgement call, processes were on paper with no traceability, and memberships had no automated billing or renewals. Compiling the list of customers affected by a recall would have taken an estimated two to three days."
requirements:
  - "A demand forecast to decide how much raw milk goes to each product every day."
  - "Creamery production scheduled against the delivery calendar and freshness windows."
  - "A direct-to-consumer storefront on the web, Android and iOS, with year-long home delivery memberships."
  - "Batch-level traceability from milk collection to the customer's door, with fast recall reporting."
  - "Quality checks recorded digitally, with problems flagged as they happen."
role: "I worked on this project as part of the Master Software Solutions team, on the functional side: understanding the farm's operations and working with its team to set up and roll out the platform. The platform is an MSS product, built and extended by MSS developers."
solution: "A dairy-specific ERP covering the whole chain. A forecasting engine turns membership and order demand into a daily milk allocation across all 21 products, and a live dashboard tracks each one. Creamery batches are scheduled against the delivery calendar so products leave within their freshness window. Members sign up, pay and renew through the storefront and apps without manual admin. Every batch carries an ID from milk collection to delivery, production follows digital parameter templates, and quality problems are flagged and logged in real time."
decisions:
  - "Forecast first. The daily allocation decision was the source of the waste, so demand visibility came before anything else."
  - "Schedule production from the delivery calendar, not the other way round, because freshness, not capacity, is the real constraint."
  - "Trace by batch ID from day one, so regulatory traceability and recalls were built in rather than added later."
modules_heading: "Platform features used"
modules: ["Demand forecasting", "Production dashboard", "Creamery scheduling", "Membership and billing", "Online storefront and apps", "Batch traceability", "Quality control"]
implementation: "The system went live in October 2023, at the same time as the farm launched its small-batch creamery, home delivery memberships, glass bottle returns and on-farm shop."
challenges:
  - "Launching everything at once: a new creamery, a membership model, bottle returns and a farm shop, all relying on the same system from day one."
  - "Matching a fixed daily milk supply to demand spread across 21 products."
results:
  - "Milk allocation errors effectively eliminated."
  - "Every creamery delivery within its freshness window, and no batches wasted through scheduling errors."
  - "Recall reports in under a minute instead of days, with full regulatory traceability from the start."
  - "No customer quality complaints traced to production parameter errors."
cta_title: "Planning a move into processing or direct sales?"
cta_text: "If you're adding production or direct-to-consumer sales to an existing business, tell me how supply and demand work today and I'll explain where an ERP should start."
---
## What I'd tell a similar business

- When supply is fixed and demand is spread across many products, a forecast is worth more than any other feature.
- Build traceability in at launch. Adding it after the first recall scare is far harder.
- Launching several new things at once is possible, but only if they share one system and one set of data.

Related guide: [lot and serial number tracking in Odoo](/blog/2026/08/12/lot-and-serial-number-tracking-in-odoo/) covers
the same traceability ideas in Odoo terms.
