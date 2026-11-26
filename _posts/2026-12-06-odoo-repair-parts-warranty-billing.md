---
layout: post
title: "Odoo Repairs: Separate Warranty, Parts and Customer Billing"
date: 2026-12-06 08:00:00 +0530
tags: [Odoo, Odoo 19, ERP, Best Practices, Inventory Management, Customer Management, Invoicing, Support]
hub: services
description: "Control Odoo repair orders by recording received items, diagnosis, warranty decisions, parts consumed, return condition and customer billing separately."
faqs:
  - q: "Does repair completion prove warranty approval?"
    a: "No. Warranty responsibility is a separate commercial and legal decision that should be recorded."
  - q: "What stock evidence should be retained?"
    a: "Keep the received item identity, parts consumed, replacements, unusable material and final return movement."
---

**Short answer:** A repair can be operationally complete while its warranty decision or invoice remains open. Track each outcome rather than using one status for the entire case.

## Applies to

Odoo 19 Repairs with Inventory, Sales or Accounting where applicable. Consumer and warranty rights depend on policy and law.

## The decision to make

What failed, who is financially responsible and which parts, labour and stock movements support the final outcome?

## What Odoo can show

* Repair orders identify the product and customer context.
* Parts consumption and return movements affect stock.
* Charges and warranty treatment require a separate commercial decision.

## A practical control design

1. **Record the received serial number and condition.**
2. **Approve warranty coverage before waiving charges.**
3. **Capture parts used and unusable returns accurately.**
4. **Reconcile completion with delivery and billing.**

## Worked example

A customer returns a serialised device. Diagnosis finds one covered component and one customer caused damage. The repair records both parts, obtains approval for the chargeable work and returns the item only after testing and billing review.

## When this approach fits

This fits repair centres and service teams managing customer owned products and replacement parts.

## Limits and boundaries

It does not determine legal warranty coverage or technical safety. Use qualified policy and engineering decisions.

## Common mistakes

**Starting work without identifying the returned item.** Investigate the source and downstream effect before closing the exception.

**Treating all parts as warranty cost.** Investigate the source and downstream effect before closing the exception.

**Returning unused parts to available stock without inspection.** Investigate the source and downstream effect before closing the exception.

**Closing the repair while billing is unresolved.** Investigate the source and downstream effect before closing the exception.

## What the owner should review

Repairs without serial numbers, warranty overrides, unbilled chargeable work, parts variances and repaired items awaiting return.

The goal is not to remove every exception. It is to make important exceptions visible, owned and traceable to a decision.

## Related

Use the [ERP acceptance evidence worksheet](/resources/erp-acceptance-evidence/) to record the outcome and supporting records.

Read [Odoo Helpdesk: Connect Warranty Claims, Returns and Repairs](/blog/2026/11/02/odoo-helpdesk-warranty-return-repair/) for the connected workflow.

## Official references

1. [Repairs](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/repairs.html)

*Sources: official Odoo 19 documentation is listed above. Confirm the corresponding documentation for the installed version before implementation. Examples are illustrative business scenarios, not client results or tests on a live database.*

If you need help translating these decisions into your own workflow, see my [Odoo consulting services](/services/odoo-consulting/).
