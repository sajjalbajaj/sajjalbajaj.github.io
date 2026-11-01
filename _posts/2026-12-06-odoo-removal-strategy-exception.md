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

Start with the business event rather than the field that looks incomplete. Agree what should happen, who owns the decision and which evidence proves completion. Configuration can then express a rule the operating team understands instead of hiding an unresolved policy choice.

## What Odoo can show

* Removal strategy uses location and tracked product data to propose stock.
* FEFO depends on correctly maintained expiry dates.
* Reservations can hold stock that later becomes unsuitable.

These records create useful traceability, but they do not interpret the commercial, accounting, legal or operational meaning by themselves. The process owner must decide which source is authoritative, who may correct a discrepancy and when the downstream action can proceed.

## A practical control design

1. **Maintain receipt and expiry data accurately.**
2. **Review reservations when dates or condition change.**
3. **Quarantine stock that should not be selected.**
4. **Record and analyse repeated manual overrides.**

Keep the exception route as visible as the normal route. Staff need to know where an incomplete item waits, who reviews it and which date or event brings it back for attention. Otherwise a clean dashboard can hide unresolved work in email, spreadsheets or private notes.

## Implementation and testing

Begin with a small set of representative records: one normal case, one missing input, one correction and one case near a reporting or operational cutoff. Walk them through with the people who create, approve and use the result. This usually exposes differences in language, evidence and ownership before they become configuration problems.

Configure the minimum stages, fields and permissions required for the agreed decision. Add automation only after the manual path is understood. Every automated action should have a narrow trigger, a visible outcome and a route for records it cannot complete safely.

Test with ordinary user access as well as administrator access. Include a scenario that must be rejected or returned for more information, and confirm that the next team cannot proceed until the required decision is visible.

## Evidence and review trail

Retain the source reference, responsible person, relevant date, reason for a correction and the final linked record. When evidence comes from a bank, supplier, customer, employee or external document, keep the appropriate reference according to the organisation's security, privacy and retention policy.

A useful trail lets another reviewer reconstruct what was known, what differed, who decided and which later record changed. That is more valuable than a long activity history with no clear outcome. Avoid copying sensitive documents into several places only to make them visible.

## Build the review into normal work

Choose a review frequency that matches the speed and consequence of the process. High value payments, safety related records and customer commitments may need review before the next action. Lower risk master data may suit a weekly exception list. Name the owner, expected response time and escalation route so an alert does not become another unattended queue.

Use trends to improve the process as well as resolve individual records. When the same exception returns, check whether the cause is unclear policy, incomplete source data, unsuitable permissions, training or an integration boundary. Fixing the upstream cause is usually more valuable than adding another reminder after the error has already occurred.

## Worked example

FEFO selects a lot with the earliest date, but quality has placed it on hold. The picker stops, the lot is moved to the appropriate location and the reservation is reassigned with the exception recorded.

The example is illustrative. The transferable method is to confirm the event, compare it with the Odoo record, resolve the difference with an accountable owner and preserve enough context for the next person to understand the result.

## When this approach fits

This fits food, cosmetic, pharmaceutical and general warehouses using age or expiry based selection.

## Limits and boundaries

It does not decide legal shelf life or prove product quality. Quality and compliance owners define usable stock and customer requirements.

Where accounting, tax, employment, privacy, safety or another regulated practice applies, have the appropriate specialist define the requirement first. Then test whether the configured process produces the required record. A completed software screen is not proof that the underlying policy is correct.

## Common mistakes

**Overriding the suggestion without a reason.** Investigate the source and downstream effect before closing the exception.

**Using FEFO with missing expiry dates.** Investigate the source and downstream effect before closing the exception.

**Leaving quarantined stock in available locations.** Investigate the source and downstream effect before closing the exception.

**Confusing receipt age with expiry priority.** Investigate the source and downstream effect before closing the exception.

## What the owner should review

Manual lot changes, missing expiry dates, reservations on blocked stock, repeated location overrides and expired available quantity.

Review a sample as well as totals. Sampling shows whether the evidence and reason are understandable, while totals reveal ageing and repeated patterns. Frequent manual correction usually points to an upstream rule, data source, training or ownership problem worth fixing.

The goal is not to remove every exception. It is to make important exceptions visible, owned and traceable to a decision.

## Related

Read [Odoo Expiry Dates: Separate Stock Rotation from Customer Shelf Life](/blog/2026/11/07/odoo-expiry-removal-customer-shelf-life/) for the connected workflow.

## Official references

1. [Removal strategies](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/shipping_receiving/removal_strategies.html)

*Sources: official Odoo 19 documentation is listed above. Confirm the corresponding documentation for the installed version before implementation. Examples are illustrative business scenarios, not client results or tests on a live database.*

If you need help translating these decisions into your own workflow, see my [Odoo consulting services](/services/odoo-consulting/).
