---
layout: case-study
status: representative
title: "Representative Example: Odoo for a Coffee Roaster and Wholesaler"
description: "A representative example of how I would approach Odoo for a coffee roaster: purchasing, roasting, lot traceability, sales channels and accounting."
last_modified_at: 2026-10-04
summary: "An illustration of how I would approach an Odoo project for a growing coffee roaster and wholesaler that runs on spreadsheets: the typical problems, the design decisions and the outcomes the design aims for."
industry: "Coffee (food and beverage)"
services: ["Odoo implementation", "Inventory", "Manufacturing", "Accounting"]
problem: "A growing roaster that sells wholesale, retail and by subscription often runs on spreadsheets and disconnected tools. Green coffee stock, roasting, orders and accounts rarely agree, and as volume grows the gaps turn into wasted time, errors and guesswork about the real cost of each blend."
existing_process: "In a typical setup, green coffee stock lives in one spreadsheet, roasting is logged on paper, wholesale orders arrive by email and the accounts are kept separately. Nobody has a live, trustworthy view, and tracing a bag of roasted coffee back to its green coffee lot is slow and manual."
requirements:
  - "One system for purchasing, stock, roasting, sales and accounts."
  - "Traceability from green coffee lot to finished bag."
  - "Realistic roast yields and a clear cost per blend."
  - "Wholesale, retail and subscription orders drawing on the same stock."
solution: "I would implement Odoo across Purchase, Inventory, Manufacturing, Sales and Accounting, configured around how a roastery works. Roasting is modelled as a manufacturing step and each blend as a bill of materials, so green coffee consumed, roasted coffee produced and the cost per bag stay connected. The first phase stays small, usually purchasing and stock, so the team trusts the system before production and sales move across."
decisions:
  - "Green coffee and finished coffee tracked by lots, so any bag can be traced back to the green coffee it came from."
  - "Blends as multi-level bills of materials rather than custom code, with roast loss built into the component quantities."
  - "Flexible consumption set to warn rather than block, because roast loss varies between batches."
  - "Standard Odoo features first; any customisation only after a fit-gap shows a real need."
modules: ["Purchase", "Inventory", "Manufacturing", "Sales", "Accounting"]
customizations:
  - "Kept to a minimum: standard Odoo covers most roastery needs, with blends handled through bills of materials rather than custom code."
integrations:
  - "If the roaster sells online, web orders would flow into Odoo alongside wholesale and subscription orders so they share the same stock."
implementation: "Delivered in phases: purchasing and stock first, then roasting and sales, then accounting. Product and lot data is cleaned before import, staff test their daily tasks in a test database, and the first busy weeks after go-live get close support."
challenges:
  - "Roasting loses weight, so stock and cost drift if it isn't modelled. Treating roasting as a manufacturing order, with green coffee in and roasted coffee out, keeps both accurate."
  - "Getting roasters to record batches in the system instead of on paper. Short, role-based training and simple daily actions help."
results:
  - "One system instead of scattered spreadsheets, as the single source of truth."
  - "Live stock and sales visibility instead of waiting for manual reports."
  - "Traceability from green coffee lot to finished bag, supporting quality checks and recalls."
  - "Consistent costing per blend, so pricing decisions rest on real yields."
  - "Wholesale, retail and subscription orders handled together against the same stock."
cta_title: "Running a coffee or food business on spreadsheets?"
cta_text: "If your stock, production and accounts don't agree with each other, tell me how you work today and I'll explain how I would approach it in Odoo."
---

For the setup steps behind this approach, see my guides on
[bills of materials](/blog/2026/09/24/how-to-set-up-bill-of-materials-odoo/),
[products and units of measure](/blog/2026/09/22/how-to-set-up-products-in-odoo/) and
[lot and serial number tracking](/blog/2026/08/12/lot-and-serial-number-tracking-in-odoo/).
If you'd like to hear about comparable projects I've worked on, ask me directly and I'll share what I can.
