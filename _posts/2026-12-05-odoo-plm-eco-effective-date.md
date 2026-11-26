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

## What Odoo can show

* Engineering changes can revise bills of materials and related documents.
* Stages and approvals express the review path.
* Applying a change creates a new controlled production definition.

## A practical control design

1. **State the reason and affected product clearly.**
2. **Compare the proposed and current revision.**
3. **Define treatment for open manufacturing orders and stock.**
4. **Confirm documents, work instructions and training before effectivity.**

## Worked example

Engineering approves a new component after testing. Planning identifies two open orders using the old revision, completes them under the documented exception and applies the new bill of materials to later orders only.

## When this approach fits

This fits manufacturers controlling product or process revisions through formal engineering review.

## Limits and boundaries

It does not decide product certification, safety approval or retrospective treatment of released products. Qualified owners must define those rules.

## Common mistakes

**Applying the ECO without checking open orders.** Investigate the source and downstream effect before closing the exception.

**Updating the bill of materials outside change control.** Investigate the source and downstream effect before closing the exception.

**Approving without attached test evidence.** Investigate the source and downstream effect before closing the exception.

**Using the same revision label for different designs.** Investigate the source and downstream effect before closing the exception.

## What the owner should review

Approved but unapplied changes, open orders on old revisions, missing documents, emergency changes and products with unclear current revision.

The goal is not to remove every exception. It is to make important exceptions visible, owned and traceable to a decision.

## Related

Use the [ERP acceptance evidence worksheet](/resources/erp-acceptance-evidence/) to record the outcome and supporting records.

Read [Odoo Skincare Production: Control Formula and Label Revisions](/blog/2026/11/01/odoo-skincare-formula-label-revisions/) for the connected workflow.

## Official references

1. [Engineering change orders](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/plm/manage_changes/engineering_change_orders.html)

*Sources: official Odoo 19 documentation is listed above. Confirm the corresponding documentation for the installed version before implementation. Examples are illustrative business scenarios, not client results or tests on a live database.*

If you need help translating these decisions into your own workflow, see my [Odoo consulting services](/services/odoo-consulting/).
