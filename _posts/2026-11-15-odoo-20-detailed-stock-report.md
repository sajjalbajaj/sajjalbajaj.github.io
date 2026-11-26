---
layout: post
title: "Odoo 20 Detailed Stock Report: Explain Quantity by Location"
date: 2026-11-15 07:00:00 +0530
tags: [Odoo, Odoo 20, ERP, Best Practices, Inventory Management, Warehouse, Reporting, Operations]
hub: inventory
description: "Investigate Odoo 20 detailed stock by location, lot and reservation without confusing a report review with an inventory adjustment."
last_modified_at: 2026-11-27
faqs:
  - q: "How do I open Detailed Stock in Odoo 20?"
    a: "Enable Storage Locations in Inventory settings, then open Inventory, Reporting, Detailed Stock with the appropriate reporting access."
  - q: "Does reserved quantity mean stock has left the warehouse?"
    a: "No. A reservation assigns quantity to demand; inspect the associated transfer and its state to establish whether a movement has occurred."
  - q: "Is Detailed Stock entirely read only?"
    a: "No. The documented interface supports inventory quantity actions. Restrict adjustment rights and avoid changing stock simply to resolve a reporting question."
---

**Short answer:** Odoo 20 Detailed Stock explains quantities by product, location and tracked lot or serial number, alongside reservations. Use it to trace a discrepancy to the relevant stock records. Do not enter an inventory adjustment until movement timing, locations and physical evidence explain why a correction is needed.

## What setup and access does the report require?

The [Detailed Stock documentation](https://www.odoo.com/documentation/20.0/applications/inventory_and_mrp/inventory/warehouses_storage/reporting/detailed_stock.html) requires Storage Locations to be enabled under Inventory settings. Open Inventory, Reporting, Detailed Stock using the appropriate reporting administrator access.

The report includes product, location, lot or serial, inventoried quantity, reserved quantity and unit of measure. Check those dimensions together. A product total without its location can conceal stock in an input, packing or other intermediate area.

## How can stock appear unavailable without being missing?

Consider a proposed warehouse test where 30 units are physically present across two locations, but part of the quantity is reserved for an earlier delivery. A second order cannot necessarily use all 30.

Inspect the location and reservation, then open the associated transfer. Determine whether the allocation is intentional, whether the transfer is still pending and whether a warehouse operation has been recorded late.

The report's History view defaults to completed movements. Remove or change that filter when investigating pending activity or reservations. An empty completed history does not prove that no demand is holding the stock.

## Which filters help investigate different problems?

| Problem | Starting point |
| --- | --- |
| Old stock in the warehouse | Internal locations, relevant dates and product detail |
| Expired tracked stock | Internal locations and expired lots |
| Goods apparently stranded | Input or packing locations and related transfers |
| Count conflicting with later movement | Conflict indicators and movement history |

These are investigation starting points, not automatic conclusions. For example, stock in a packing location may be entirely appropriate for a delivery currently being prepared.

## Why should reviewers avoid casual quantity edits?

The documented interface supports inventory actions, including entering quantities. It is therefore more than a passive dashboard.

A user who changes a quantity while trying to understand a discrepancy can create a second problem: the report may look correct while the reason for the original difference remains unknown. Restrict adjustment permissions and require a count reference, reason and authorised review when an actual adjustment is needed.

## What should acceptance testing demonstrate?

Use a product with two locations, a known reservation and a tracked lot. Demonstrate how the report explains the available and reserved positions. Add a pending transfer and confirm the difference between its reservation and a completed movement.

Finally, run a supervised count discrepancy case in a test database. Confirm who can change quantities and what evidence remains after an authorised correction.

The [inventory count variance guide](/blog/2026/11/07/odoo-inventory-count-variance-review/) covers the correction decision. Keep the report filters, movement references and count evidence together in the [ERP acceptance evidence worksheet](/resources/erp-acceptance-evidence/).

*Sources reviewed on 27 November 2026. Scenarios are proposed acceptance cases, not reported customer results. Confirm edition, installed modules and provider requirements for your database.*
