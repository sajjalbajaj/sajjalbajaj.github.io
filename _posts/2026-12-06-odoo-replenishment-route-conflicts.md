---
layout: post
title: "Odoo Replenishment Routes: Resolve Conflicting Supply Rules"
date: 2026-12-06 09:00:00 +0530
tags: [Odoo, Odoo 19, ERP, Best Practices, Inventory Management, Purchase, Manufacturing, Warehouse]
hub: inventory
description: "Review Odoo replenishment routes, warehouses, vendors and manufacturing rules when one demand triggers an unexpected purchase, transfer or production order."
faqs:
  - q: "Why did a sale create the wrong supply order?"
    a: "Trace the demand through its selected route, warehouse, company and product settings before changing the generated document."
  - q: "Should every possible route be enabled?"
    a: "No. Use only the routes required by the intended operating model and test their boundaries."
---

**Short answer:** An unexpected supply order usually reflects route and rule selection. Trace the demand backward before cancelling documents or adding more automation.

## Applies to

Odoo 19 Inventory routes and replenishment. Custom routes and multi company rules require testing in the installed database.

## The decision to make

Which demand created the supply document, which route was selected and is that route valid for this product, warehouse and company?

## What Odoo can show

* Routes connect demand to purchase, manufacture or internal transfer rules.
* Product, category, warehouse and order settings can influence selection.
* Procurement groups and source documents help trace generated supply.

## A practical control design

1. **Define the intended supply method by product and warehouse.**
2. **Avoid overlapping routes without a clear priority.**
3. **Test sales, replenishment and manufacturing demand separately.**
4. **Trace unexpected documents to their source before correction.**

## Worked example

A branch sale unexpectedly creates a purchase order even though central stock is available. The team traces the demand to a product route copied from another company, corrects the warehouse rule and retests the order flow.

## When this approach fits

This fits multi warehouse businesses using purchase, manufacture, dropship or resupply routes.

## Limits and boundaries

It does not guarantee that custom routes interact correctly without scenario testing. Configuration order and extensions can change behaviour.

## Common mistakes

**Cancelling generated orders without fixing the route.** Investigate the source and downstream effect before closing the exception.

**Selecting every available route on the product.** Investigate the source and downstream effect before closing the exception.

**Testing only manual replenishment.** Investigate the source and downstream effect before closing the exception.

**Ignoring company and warehouse context.** Investigate the source and downstream effect before closing the exception.

## What the owner should review

Unexpected purchases, duplicate supply, routes shared across companies, cancelled procurements and demand without a source document.

The goal is not to remove every exception. It is to make important exceptions visible, owned and traceable to a decision.

## Related

Use the [ERP acceptance evidence worksheet](/resources/erp-acceptance-evidence/) to record the outcome and supporting records.

Read [Moving Stock Between Branches: Inter-Warehouse Resupply in Odoo](/blog/2026/10/15/inter-warehouse-resupply-odoo/) for the connected workflow.

## Official references

1. [Routes and push pull rules](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/shipping_receiving/daily_operations/use_routes.html)

*Sources: official Odoo 19 documentation is listed above. Confirm the corresponding documentation for the installed version before implementation. Examples are illustrative business scenarios, not client results or tests on a live database.*

If you need help translating these decisions into your own workflow, see my [Odoo consulting services](/services/odoo-consulting/).
