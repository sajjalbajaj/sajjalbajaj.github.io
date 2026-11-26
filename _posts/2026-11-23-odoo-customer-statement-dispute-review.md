---
layout: post
title: "Odoo Customer Statements: Resolve Differences Before Collection"
date: 2026-11-23 10:00:00 +0530
last_modified_at: 2026-11-27
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

## What Odoo records and what the business must decide

* The customer statement reflects the customer portion of the partner ledger.
* A follow up report separates due and overdue items.
* Company and contact relationships can affect which account balance is shown.

## A practical control design

1. **Confirm the commercial entity and contact hierarchy.**
2. **Agree the statement cutoff date and currency.**
3. **Match credits and receipts to the intended invoices.**
4. **Record disputed items separately from ordinary late payment.**

## Worked example

A customer says two invoices were paid. Finance compares the statement with bank receipts and finds one payment under a branch contact and one credit not reconciled to the invoice. The records are corrected before the next reminder is sent.

## When it fits

This fits periodic account confirmation and collection work where both sides need a common list of open items.

## Limits and boundaries

It does not prove that a disputed delivery was accepted or that a deduction is valid. Those issues need the relevant commercial evidence.

## Common mistakes

**Sending a statement for the wrong contact hierarchy.** Review the underlying record and the next operational consequence before closing the exception.

**Mixing date ranges or currencies.** Review the underlying record and the next operational consequence before closing the exception.

**Treating every difference as nonpayment.** Review the underlying record and the next operational consequence before closing the exception.

**Ignoring unapplied credits and receipts.** Review the underlying record and the next operational consequence before closing the exception.

## What the owner should review

Large balances, old credits, receipts without invoice matches, disputed lines and statements returned by customers.

The goal is not to remove every exception. It is to make each important exception visible, owned and traceable to a decision.

## Related

Use the [ERP acceptance evidence worksheet](/resources/erp-acceptance-evidence/) to record the outcome and supporting records.

Read [Odoo Payment Follow Ups and Aged Receivables](/blog/2026/10/26/odoo-payment-followups-aged-receivables/) for the connected workflow.

## Official references

1. [Follow up on invoices](https://www.odoo.com/documentation/19.0/applications/finance/accounting/payments/follow_up.html)
1. [Accounting and invoicing](https://www.odoo.com/documentation/19.0/applications/finance/accounting.html)

*How this article was checked: official Odoo 19 documentation was reviewed in November 2026. Confirm the corresponding documentation for the installed version before implementation. Examples are illustrative business scenarios, not client results or tests on a live database.*

If you need help translating these decisions into your own workflow, see my [Odoo consulting services](/services/odoo-consulting/).
