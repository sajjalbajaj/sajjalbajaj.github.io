---
layout: post
title: "Odoo Lot and Serial Corrections: Preserve Traceability"
date: 2026-12-04 08:00:00 +0530
tags: [Odoo, Odoo 19, ERP, Best Practices, Inventory Management, Warehouse, Manufacturing, Compliance]
hub: inventory
description: "Correct Odoo lot and serial mistakes through controlled stock movements and evidence so traceability remains understandable after the error is fixed."
faqs:
  - q: "Can a lot name simply be changed after use?"
    a: "Treat any change carefully because completed receipts, production and deliveries may already depend on that identity."
  - q: "What should happen to uncertain stock?"
    a: "Isolate it until the physical label, source document and system record agree."
---

**Short answer:** A traceability correction must explain both the physical identity and the system change. Do not simply rename or replace history to make the current screen look right.

## Applies to

Odoo 19 Inventory lot and serial tracking. Regulated traceability rules may require specialist validation.

## The decision to make

Was the physical item misidentified, was the wrong number recorded or did stock move under the wrong tracked identity?

## What Odoo can show

* Lots and serial numbers connect receipts, internal movements, production and deliveries.
* On hand quantities are tied to locations and tracked identities.
* Historical documents may already refer to the incorrect number.

## A practical control design

1. **Quarantine uncertain stock before correction.**
2. **Verify labels and source documents physically.**
3. **Use approved inventory movements for quantity changes.**
4. **Retain the old and corrected references with the reason.**

## Worked example

A received carton was scanned under the adjacent lot number. The warehouse isolates the remaining stock, verifies supplier labels, corrects quantities through controlled movements and records which deliveries require traceability review.

## When this approach fits

This fits warehouses and manufacturers using lots or serials for warranty, expiry or recall needs.

## Limits and boundaries

It does not authorise rewriting regulated history. Quality or compliance owners should define the acceptable correction method.

## Common mistakes

**Renaming a lot that has completed movements.** Investigate the source and downstream effect before closing the exception.

**Correcting the system without checking physical labels.** Investigate the source and downstream effect before closing the exception.

**Moving quantity but losing the original reference.** Investigate the source and downstream effect before closing the exception.

**Ignoring deliveries already made.** Investigate the source and downstream effect before closing the exception.

## What the owner should review

Negative tracked quantities, duplicate serials, renamed lots, corrections after delivery and stock without physical labels.

The goal is not to remove every exception. It is to make important exceptions visible, owned and traceable to a decision.

## Related

Use the [ERP acceptance evidence worksheet](/resources/erp-acceptance-evidence/) to record the outcome and supporting records.

Read [Odoo Food Traceability: Run a Practical Recall Drill](/blog/2026/11/01/odoo-food-recall-traceability-drill/) for the connected workflow.

## Official references

1. [Lots](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/product_management/product_tracking/lots.html)
1. [Serial numbers](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/product_management/product_tracking/serial_numbers.html)

*Sources: official Odoo 19 documentation is listed above. Confirm the corresponding documentation for the installed version before implementation. Examples are illustrative business scenarios, not client results or tests on a live database.*

If you need help translating these decisions into your own workflow, see my [Odoo consulting services](/services/odoo-consulting/).
