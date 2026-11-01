---
layout: post
title: "Odoo Post Dated Checks: Separate Receipt from Settlement"
date: 2026-11-24 10:00:00 +0530
tags: [Odoo, Odoo 19, ERP, Best Practices, Accounting, Finance, Invoicing, Customer Management]
hub: accounting
description: "Handle post dated customer checks in Odoo by separating receipt, deposit, bank settlement and bounce decisions instead of marking invoices paid too early."
faqs:
  - q: "Does registering an incoming check move money in Odoo?"
    a: "No. The official documentation says the check must be deposited and the resulting bank transaction reconciled."
  - q: "Is a complete post dated check lifecycle standard everywhere?"
    a: "No. Availability can depend on localization or an evaluated extension, so define the required states before choosing the solution."
---

**Short answer:** Receiving a check is not the same as receiving cleared funds. Keep the check reference and promised date visible, then reconcile only when the bank movement supports settlement.

## Applies to

Standard Odoo 19 Accounting supports manual check payment identification and bank reconciliation. A full post dated check lifecycle may require localization or an evaluated extension.

## Start with the decision

What state does the business need to know: check received, deposited, cleared, rejected or replaced?

The configuration should follow that decision. It should not become the place where an unresolved policy choice is hidden. Write down the expected outcome, the owner and the evidence that will show the step is complete. This gives administrators a testable rule and gives reviewers a reason for each exception.

## What Odoo records and what the business must decide

* An incoming check can use a named manual payment method.
* Registering the payment does not move money.
* The bank transaction provides the later reconciliation evidence.

These records make the workflow visible, but they do not judge the commercial, legal or operational meaning on their own. The process owner must decide which source is authoritative, who may correct it and what happens when two records disagree.

## A practical control design

1. **Record the check number and date consistently.**
2. **Avoid releasing credit based only on physical receipt unless policy allows it.**
3. **Track deposit and settlement ownership.**
4. **Define the response to bounced or replaced checks.**

Keep the exception route as clear as the normal route. Staff should know where to place an item that cannot yet be completed, who reviews it and which deadline or business event should bring it back for attention. A dashboard with only completed records can look healthy while unresolved work remains outside the system.

## How to introduce the control

Start with a small set of representative records: one normal transaction, one incomplete record, one correction and one case near a reporting or operational cutoff. Walk each example through the proposed workflow with the people who create, review and use the result. This exposes differences in language and responsibility before they become configuration problems.

Configure the minimum fields and stages needed to express the agreed decision. Add automation only after the team can explain the manual path. An automated action should have a narrow trigger, a visible result and an exception route. If users cannot tell why a record moved or changed, the automation will make investigation slower even when it saves keystrokes.

Before release, compare permissions with actual responsibilities. The person who enters a record may not be the person authorised to approve a correction or financial outcome. Test the workflow with ordinary users as well as administrators, and include a record that should be refused or returned for more information.

## Evidence to keep with the decision

Keep the source reference, responsible person, relevant date, reason for any correction and the final linked record. Where a decision depends on an external document, bank movement, customer message or manager confirmation, retain the reference according to the organisation's document and privacy policy. Avoid copying sensitive material into several places merely to make it visible.

A useful audit trail lets a reviewer reconstruct the sequence without relying on a private inbox or someone's memory. It should show what was known at the time, what exception was found, who resolved it and which downstream record was affected. That is more valuable than a long activity history with no clear outcome.

## Worked example

A customer provides a check dated two weeks ahead. The finance team records the reference in its controlled process but does not treat bank settlement as complete. After deposit, the bank transaction is matched to the payment. A rejected check returns to the exception queue.

The example is illustrative. The useful point is the sequence: confirm the business event, compare it with the Odoo record, resolve the difference with an accountable owner and retain enough context for the next person to understand the result.

## When it fits

This fits businesses that accept checks and need a visible distinction between possession and bank clearance.

## Limits and boundaries

Standard Odoo does not provide every post dated check status for every country. Do not imply a third party module or localization is part of the standard product.

Where local law, tax, employment, privacy or regulated practice matters, have the appropriate specialist define the requirement. Then test whether the configured workflow produces the required record. A software screen is not evidence that the policy itself is correct.

## Common mistakes

**Marking the invoice settled when the check is received.** Review the underlying record and the next operational consequence before closing the exception.

**Losing the check number or date.** Review the underlying record and the next operational consequence before closing the exception.

**Using one status for deposited and cleared.** Review the underlying record and the next operational consequence before closing the exception.

**Failing to reopen collection after rejection.** Review the underlying record and the next operational consequence before closing the exception.

## What the owner should review

Checks awaiting deposit, checks past their date, unreconciled deposits and rejected instruments.

Review a small sample as well as totals. Sampling shows whether the reason, source document and next action are understandable, while totals reveal ageing and recurring patterns. Repeated manual corrections usually indicate a rule, data source or ownership problem worth fixing upstream.

The goal is not to remove every exception. It is to make each important exception visible, owned and traceable to a decision.

## Related

Read [Odoo Payment Follow Ups and Aged Receivables](/blog/2026/10/26/odoo-payment-followups-aged-receivables/) for the connected workflow.

## Official references

1. [Payments](https://www.odoo.com/documentation/19.0/applications/finance/accounting/payments/online.html)
1. [Bank reconciliation](https://www.odoo.com/documentation/19.0/applications/finance/accounting/bank/reconciliation.html)

*How this article was checked: official Odoo 19 documentation was reviewed in November 2026. Confirm the corresponding documentation for the installed version before implementation. Examples are illustrative business scenarios, not client results or tests on a live database.*

If you need help translating these decisions into your own workflow, see my [Odoo consulting services](/services/odoo-consulting/).
