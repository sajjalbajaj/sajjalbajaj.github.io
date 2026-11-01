---
layout: post
title: "Odoo PLM Changes: Control the Effective Date of an ECO"
date: 2026-12-05 09:00:00 +0530
tags: [Odoo, Odoo 19, ERP, Best Practices, Manufacturing, PLM, Quality, Business Automation]
hub: manufacturing
description: "Control Odoo engineering change orders with revision evidence, approvals, effective dates and open production review before a new design is applied."
faqs:
  - q: "Does ECO approval automatically resolve open production?"
    a: "No. Review open orders, existing stock and work instructions before deciding when the change takes effect."
  - q: "Why preserve revisions?"
    a: "They show which approved definition governed a product or order at a particular time."
---

**Short answer:** Approval and effectivity are separate decisions. A change can be technically approved while existing orders, stock or documentation still need a controlled transition.

## Applies to

Odoo 19 PLM and Manufacturing. Product safety and regulated design controls require specialist governance.

## The decision to make

Which revision is approved, from what event should it apply and what happens to open orders and existing material?

Start with the business event rather than the field that looks incomplete. Agree what should happen, who owns the decision and which evidence proves completion. Configuration can then express a rule the operating team understands instead of hiding an unresolved policy choice.

## What Odoo can show

* Engineering changes can revise bills of materials and related documents.
* Stages and approvals express the review path.
* Applying a change creates a new controlled production definition.

These records create useful traceability, but they do not interpret the commercial, accounting, legal or operational meaning by themselves. The process owner must decide which source is authoritative, who may correct a discrepancy and when the downstream action can proceed.

## A practical control design

1. **State the reason and affected product clearly.**
2. **Compare the proposed and current revision.**
3. **Define treatment for open manufacturing orders and stock.**
4. **Confirm documents, work instructions and training before effectivity.**

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

Engineering approves a new component after testing. Planning identifies two open orders using the old revision, completes them under the documented exception and applies the new bill of materials to later orders only.

The example is illustrative. The transferable method is to confirm the event, compare it with the Odoo record, resolve the difference with an accountable owner and preserve enough context for the next person to understand the result.

## When this approach fits

This fits manufacturers controlling product or process revisions through formal engineering review.

## Limits and boundaries

It does not decide product certification, safety approval or retrospective treatment of released products. Qualified owners must define those rules.

Where accounting, tax, employment, privacy, safety or another regulated practice applies, have the appropriate specialist define the requirement first. Then test whether the configured process produces the required record. A completed software screen is not proof that the underlying policy is correct.

## Common mistakes

**Applying the ECO without checking open orders.** Investigate the source and downstream effect before closing the exception.

**Updating the bill of materials outside change control.** Investigate the source and downstream effect before closing the exception.

**Approving without attached test evidence.** Investigate the source and downstream effect before closing the exception.

**Using the same revision label for different designs.** Investigate the source and downstream effect before closing the exception.

## What the owner should review

Approved but unapplied changes, open orders on old revisions, missing documents, emergency changes and products with unclear current revision.

Review a sample as well as totals. Sampling shows whether the evidence and reason are understandable, while totals reveal ageing and repeated patterns. Frequent manual correction usually points to an upstream rule, data source, training or ownership problem worth fixing.

The goal is not to remove every exception. It is to make important exceptions visible, owned and traceable to a decision.

## Related

Read [Odoo Skincare Production: Control Formula and Label Revisions](/blog/2026/11/01/odoo-skincare-formula-label-revisions/) for the connected workflow.

## Official references

1. [Engineering change orders](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/plm/manage_changes/engineering_change_orders.html)

*Sources: official Odoo 19 documentation is listed above. Confirm the corresponding documentation for the installed version before implementation. Examples are illustrative business scenarios, not client results or tests on a live database.*

If you need help translating these decisions into your own workflow, see my [Odoo consulting services](/services/odoo-consulting/).
