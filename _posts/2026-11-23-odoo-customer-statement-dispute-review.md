---
layout: post
title: "Odoo Customer Statements: Resolve Differences Before Collection"
date: 2026-11-23 10:00:00 +0530
tags: [Odoo, Odoo 19, ERP, Best Practices, Accounting, Finance, Customer Management, Invoicing]
hub: accounting
description: "Use Odoo customer statements to compare invoices, credits and payments, then resolve partner, date and reconciliation differences before follow up."
faqs:
  - q: "Is a customer statement the same as a follow up report?"
    a: "No. The statement shows the customer account, while the follow up view focuses on due and overdue collection actions."
  - q: "What should happen when the customer disputes a line?"
    a: "Assign the dispute for investigation and keep it distinct from ordinary collection activity."
---

**Short answer:** A statement is most useful as a shared reconciliation record. When the customer disagrees, compare the underlying documents rather than sending the same balance repeatedly.

## Applies to

Odoo 19 Accounting customer statements, partner ledger and follow up reporting.

## Start with the decision

Do both parties refer to the same legal customer, date range, currency and set of posted transactions?

The configuration should follow that decision. It should not become the place where an unresolved policy choice is hidden. Write down the expected outcome, the owner and the evidence that will show the step is complete. This gives administrators a testable rule and gives reviewers a reason for each exception.

## What Odoo records and what the business must decide

* The customer statement reflects the customer portion of the partner ledger.
* A follow up report separates due and overdue items.
* Company and contact relationships can affect which account balance is shown.

These records make the workflow visible, but they do not judge the commercial, legal or operational meaning on their own. The process owner must decide which source is authoritative, who may correct it and what happens when two records disagree.

## A practical control design

1. **Confirm the commercial entity and contact hierarchy.**
2. **Agree the statement cutoff date and currency.**
3. **Match credits and receipts to the intended invoices.**
4. **Record disputed items separately from ordinary late payment.**

Keep the exception route as clear as the normal route. Staff should know where to place an item that cannot yet be completed, who reviews it and which deadline or business event should bring it back for attention. A dashboard with only completed records can look healthy while unresolved work remains outside the system.

## How to introduce the control

Start with a small set of representative records: one normal transaction, one incomplete record, one correction and one case near a reporting or operational cutoff. Walk each example through the proposed workflow with the people who create, review and use the result. This exposes differences in language and responsibility before they become configuration problems.

Configure the minimum fields and stages needed to express the agreed decision. Add automation only after the team can explain the manual path. An automated action should have a narrow trigger, a visible result and an exception route. If users cannot tell why a record moved or changed, the automation will make investigation slower even when it saves keystrokes.

Before release, compare permissions with actual responsibilities. The person who enters a record may not be the person authorised to approve a correction or financial outcome. Test the workflow with ordinary users as well as administrators, and include a record that should be refused or returned for more information.

## Evidence to keep with the decision

Keep the source reference, responsible person, relevant date, reason for any correction and the final linked record. Where a decision depends on an external document, bank movement, customer message or manager confirmation, retain the reference according to the organisation's document and privacy policy. Avoid copying sensitive material into several places merely to make it visible.

A useful audit trail lets a reviewer reconstruct the sequence without relying on a private inbox or someone's memory. It should show what was known at the time, what exception was found, who resolved it and which downstream record was affected. That is more valuable than a long activity history with no clear outcome.

## Worked example

A customer says two invoices were paid. Finance compares the statement with bank receipts and finds one payment under a branch contact and one credit not reconciled to the invoice. The records are corrected before the next reminder is sent.

The example is illustrative. The useful point is the sequence: confirm the business event, compare it with the Odoo record, resolve the difference with an accountable owner and retain enough context for the next person to understand the result.

## When it fits

This fits periodic account confirmation and collection work where both sides need a common list of open items.

## Limits and boundaries

It does not prove that a disputed delivery was accepted or that a deduction is valid. Those issues need the relevant commercial evidence.

Where local law, tax, employment, privacy or regulated practice matters, have the appropriate specialist define the requirement. Then test whether the configured workflow produces the required record. A software screen is not evidence that the policy itself is correct.

## Common mistakes

**Sending a statement for the wrong contact hierarchy.** Review the underlying record and the next operational consequence before closing the exception.

**Mixing date ranges or currencies.** Review the underlying record and the next operational consequence before closing the exception.

**Treating every difference as nonpayment.** Review the underlying record and the next operational consequence before closing the exception.

**Ignoring unapplied credits and receipts.** Review the underlying record and the next operational consequence before closing the exception.

## What the owner should review

Large balances, old credits, receipts without invoice matches, disputed lines and statements returned by customers.

Review a small sample as well as totals. Sampling shows whether the reason, source document and next action are understandable, while totals reveal ageing and recurring patterns. Repeated manual corrections usually indicate a rule, data source or ownership problem worth fixing upstream.

The goal is not to remove every exception. It is to make each important exception visible, owned and traceable to a decision.

## Related

Read [Odoo Payment Follow Ups and Aged Receivables](/blog/2026/10/26/odoo-payment-followups-aged-receivables/) for the connected workflow.

## Official references

1. [Follow up on invoices](https://www.odoo.com/documentation/19.0/applications/finance/accounting/payments/follow_up.html)
1. [Accounting and invoicing](https://www.odoo.com/documentation/19.0/applications/finance/accounting.html)

*How this article was checked: official Odoo 19 documentation was reviewed in November 2026. Confirm the corresponding documentation for the installed version before implementation. Examples are illustrative business scenarios, not client results or tests on a live database.*

If you need help translating these decisions into your own workflow, see my [Odoo consulting services](/services/odoo-consulting/).
