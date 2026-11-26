---
layout: post
title: "Odoo Removal Strategies: Handle FIFO and FEFO Exceptions"
date: 2026-12-06 10:00:00 +0530
tags: [Odoo, Odoo 19, ERP, Best Practices, Inventory Management, Warehouse, Compliance, Operations]
hub: inventory
description: "Control Odoo FIFO and FEFO removal exceptions by reviewing locations, lots, expiry dates, reservations and approved overrides before picking stock."
faqs:
  - q: "Does FEFO guarantee the right customer shelf life?"
    a: "No. FEFO uses configured expiry information. Customer minimum life and quality holds need additional controls."
  - q: "What should happen when the suggested lot is unsuitable?"
    a: "Stop the pick, correct availability or condition data, and record the approved reason for any override."
---

**Short answer:** A removal strategy proposes stock according to configured data. When staff override it, record whether the issue is data quality, physical access, product condition or a legitimate priority.

## Applies to

Odoo 19 Inventory removal strategies. Product safety and customer shelf life rules remain business responsibilities.

## The decision to make

Why is the suggested lot unsuitable, and does the exception require corrected data, quarantine or an authorised picking change?

## What Odoo can show

* Removal strategy uses location and tracked product data to propose stock.
* FEFO depends on correctly maintained expiry dates.
* Reservations can hold stock that later becomes unsuitable.

## A practical control design

1. **Maintain receipt and expiry data accurately.**
2. **Review reservations when dates or condition change.**
3. **Quarantine stock that should not be selected.**
4. **Record and analyse repeated manual overrides.**

## Worked example

FEFO selects a lot with the earliest date, but quality has placed it on hold. The picker stops, the lot is moved to the appropriate location and the reservation is reassigned with the exception recorded.

## When this approach fits

This fits food, cosmetic, pharmaceutical and general warehouses using age or expiry based selection.

## Limits and boundaries

It does not decide legal shelf life or prove product quality. Quality and compliance owners define usable stock and customer requirements.

## Common mistakes

**Overriding the suggestion without a reason.** Investigate the source and downstream effect before closing the exception.

**Using FEFO with missing expiry dates.** Investigate the source and downstream effect before closing the exception.

**Leaving quarantined stock in available locations.** Investigate the source and downstream effect before closing the exception.

**Confusing receipt age with expiry priority.** Investigate the source and downstream effect before closing the exception.

## What the owner should review

Manual lot changes, missing expiry dates, reservations on blocked stock, repeated location overrides and expired available quantity.

The goal is not to remove every exception. It is to make important exceptions visible, owned and traceable to a decision.

## Related

Use the [ERP acceptance evidence worksheet](/resources/erp-acceptance-evidence/) to record the outcome and supporting records.

Read [Odoo Expiry Dates: Separate Stock Rotation from Customer Shelf Life](/blog/2026/11/07/odoo-expiry-removal-customer-shelf-life/) for the connected workflow.

## Official references

1. [Removal strategies](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/shipping_receiving/removal_strategies.html)

*Sources: official Odoo 19 documentation is listed above. Confirm the corresponding documentation for the installed version before implementation. Examples are illustrative business scenarios, not client results or tests on a live database.*

If you need help translating these decisions into your own workflow, see my [Odoo consulting services](/services/odoo-consulting/).
