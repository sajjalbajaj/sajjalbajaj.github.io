---
layout: case-study
status: anonymised
order: 3
title: "One Odoo Database for a Three-Brand Tools Distributor"
description: "A UK and European tools group put three companies into one multi-company Odoo with intercompany automation, Shopify sync and customs invoices."
last_modified_at: 2026-10-05
summary: "A tools group with three brands in the UK and continental Europe moved from one Odoo company plus spreadsheets and paper to a single multi-company Odoo database, with automatic intercompany orders and Shopify sync."
industry: "Wholesale distribution: tools"
location: "United Kingdom and continental Europe"
platform: "Odoo with Shopify"
services: ["Odoo implementation", "Multi-company setup", "Shopify integration"]
metrics:
  - value: "98%+"
    label: "order fulfilment"
  - value: "99%"
    label: "inventory accuracy"
  - value: "75%"
    label: "less manual data entry"
  - value: "100%"
    label: "of Shopify orders synced"
metrics_note: "Figures published by Master Software Solutions for this project, not my own measurements."
problem: "The group buys its tools from factories in China and India and sells them under three brands across the UK and Europe, from one central warehouse. One brand ran on Odoo; the other two ran on spreadsheets and paper. Stock figures disagreed, orders were missed, late or wrong, intercompany sales were entered twice, and the Shopify stores weren't connected to anything."
existing_process: "Parent and subsidiary data were reconciled by hand, intercompany transactions were keyed on both sides, online orders were re-entered from Shopify, and commercial invoices for customs were written manually."
requirements:
  - "All three companies in one system, each still a separate entity with its own accounts, catalogue, customers and suppliers."
  - "Intercompany sales and purchases created automatically, at agreed intercompany prices."
  - "Accurate, real-time stock across warehouse locations, with barcode scanning."
  - "Shopify orders flowing straight into Odoo."
  - "Customs commercial invoices generated from the system."
role: "I delivered this project at Master Software Solutions as consultant, tech lead, project manager and delivery manager: mapping how the three companies worked together and designing the multi-company setup, leading the MSS developers who built the customs invoices and the Shopify connection, planning and running the project, and owning delivery through go-live."
solution: "We extended and restructured the existing Odoo database rather than starting again, adding the other two companies alongside the first. Each company keeps its own chart of accounts, product catalogue, customers, suppliers and financial reports, and users switch between companies as they need. When one company sells to another, Odoo creates the matching purchase order automatically at the agreed intercompany price. Stock is managed by location with barcode scanning, reordering rules, demand forecasting and automatic back orders. Shopify is connected both ways, and commercial invoices for customs are generated from purchase orders."
decisions:
  - "Extend the existing database instead of replacing it, keeping the first brand's history and setup."
  - "Separate companies in one database, so each brand's accounts stay its own while intercompany orders and group reporting can be automated."
  - "Set intercompany prices as rules, so automatic orders are always priced consistently."
  - "Generate customs paperwork from the purchase order, so the data is entered once."
modules: ["Multi-company", "Inventory and warehouse", "Barcode", "Purchase", "Sales", "Accounting"]
customizations:
  - "A commercial invoice template for customs, generated from purchase orders."
  - "Intercompany pricing rules."
integrations:
  - "Shopify: a live, two-way connection for the brands' online stores."
challenges:
  - "Bringing two brands from spreadsheets and paper into a database the third brand already relied on."
  - "Keeping legal and financial separation between three companies while automating the transactions between them."
results:
  - "Three systems consolidated into one."
  - "Real-time stock visibility, with intercompany purchase orders created instantly."
  - "Commercial invoices ready with no separate preparation time."
  - "Consolidated reporting across the group."
cta_title: "Running several brands or companies on separate systems?"
cta_text: "Tell me how your companies, warehouses and online stores connect today, and I'll explain how one Odoo database could bring them together."
---
## What I'd tell a similar business

- If you already have Odoo for part of the group, extending it is usually cheaper and safer than starting again. Check the existing setup first.
- Agree intercompany prices as rules before go-live. Automatic orders are only as good as the prices they use.
- Barcode scanning is what turns stock accuracy from a target into a habit.

Related guides: [how to set up multi-company in Odoo](/blog/2026/09/29/how-to-set-up-multi-company-odoo/),
[barcode in Odoo](/blog/2026/09/10/odoo-barcode/) and
[eCommerce meets inventory](/blog/2026/08/26/odoo-ecommerce-inventory-connected/).
