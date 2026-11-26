---
layout: post
title: "Odoo Landed Costs: Correct Allocation Without Hiding the Original"
date: 2026-12-04 10:00:00 +0530
tags: [Odoo, Odoo 19, ERP, Best Practices, Inventory Management, Accounting, Purchase, Finance]
hub: inventory
description: "Review Odoo landed cost allocations against freight bills, eligible receipts, allocation methods and valuation entries before correcting a mistake."
faqs:
  - q: "Can a landed cost use different allocation methods?"
    a: "Yes. The chosen method should follow the organisation's approved costing policy and the nature of the cost."
  - q: "What should be checked before validation?"
    a: "Confirm the supplier charge, eligible transfers, product population, split method and resulting valuation adjustment."
---

**Short answer:** A landed cost correction should show which shipment and cost were wrong, how the revised allocation was calculated and what accounting value changed.

## Applies to

Odoo 19 Inventory landed costs with automated valuation where configured. Tax and customs treatment require local advice.

## The decision to make

Was the wrong cost, transfer, product population or allocation basis used, and has the valuation already been posted?

## What Odoo can show

* Landed cost documents link additional costs to eligible transfers.
* Split methods distribute value using quantity, cost, weight, volume or equal shares.
* Validation updates inventory valuation and accounting where applicable.

## A practical control design

1. **Match the cost bill to the shipment and receipt.**
2. **Choose a split method that reflects policy.**
3. **Review the valuation adjustment before validation.**
4. **Correct validated errors through an authorised traceable method.**

## Worked example

Freight for two receipts is allocated only to one transfer. Finance detects the mismatch before close, documents the corrected population and reviews the revised valuation rather than adding an unexplained manual cost.

## When this approach fits

This fits importers and distributors adding freight, duty or handling to inventory value.

## Limits and boundaries

It does not determine which costs may be capitalised or the statutory customs value. Finance and tax owners define those rules.

## Common mistakes

**Allocating one invoice to the wrong receipt.** Investigate the source and downstream effect before closing the exception.

**Choosing a split method without policy.** Investigate the source and downstream effect before closing the exception.

**Validating before the supplier bill is checked.** Investigate the source and downstream effect before closing the exception.

**Using a journal to hide a landed cost error.** Investigate the source and downstream effect before closing the exception.

## What the owner should review

Unvalidated costs, duplicate supplier charges, unusual split methods, negative adjustments and valuation changes after close.

The goal is not to remove every exception. It is to make important exceptions visible, owned and traceable to a decision.

## Related

Use the [ERP acceptance evidence worksheet](/resources/erp-acceptance-evidence/) to record the outcome and supporting records.

Read [Customs Duty and Import Costs in Odoo: Landed Cost by Shipment](/blog/2026/10/18/customs-duty-import-costs-odoo/) for the connected workflow.

## Official references

1. [Landed costs](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/product_management/inventory_valuation/landed_costs.html)

*Sources: official Odoo 19 documentation is listed above. Confirm the corresponding documentation for the installed version before implementation. Examples are illustrative business scenarios, not client results or tests on a live database.*

If you need help translating these decisions into your own workflow, see my [Odoo consulting services](/services/odoo-consulting/).
