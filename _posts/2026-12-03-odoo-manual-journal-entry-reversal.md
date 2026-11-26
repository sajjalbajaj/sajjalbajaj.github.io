---
layout: post
title: "Odoo Manual Journals: Control Adjustments and Reversals"
date: 2026-12-03 10:00:00 +0530
tags: [Odoo, Odoo 19, ERP, Best Practices, Accounting, Finance, Reporting, Compliance]
hub: accounting
description: "Control Odoo manual journal entries with purpose, support, approval, reversal dates and closing review so adjustments do not become unexplained balances."
faqs:
  - q: "When should a manual journal be used?"
    a: "Use it when the accounting event is not properly represented by a normal invoice, payment or other subledger workflow."
  - q: "Why set a reversal date?"
    a: "It helps temporary accruals or adjustments reverse in the intended period instead of remaining unnoticed."
---

**Short answer:** Every manual journal should explain the business event, accounts, period and reviewer. If it is temporary, define the reversal before posting.

## Applies to

Odoo 19 Accounting journal entries. Approval and evidence requirements depend on the organisation's financial control framework.

## The decision to make

What fact is not represented by a normal transaction, and should the adjustment remain or reverse in a later period?

## What Odoo can show

* Journal lines change ledger balances directly.
* References and attachments provide context for later review.
* Reversal dates can prevent temporary accruals from remaining indefinitely.

## A practical control design

1. **Use normal invoices and payments where they represent the event.**
2. **Require support and a clear calculation for manual entries.**
3. **Separate preparation from review for material adjustments.**
4. **Check scheduled reversals and unexpected residual balances.**

## Worked example

Finance records a month end service accrual from an approved calculation and sets it to reverse on the first day of the next month. The reviewer checks the accounts, period, amount and support before posting.

## When this approach fits

This fits accruals, reallocations and corrections not created by a normal subledger document.

## Limits and boundaries

It does not justify an entry that lacks an underlying event or override statutory requirements. Material judgement needs qualified review.

## Common mistakes

**Using journals to bypass invoice controls.** Investigate the source and downstream effect before closing the exception.

**Posting round amounts without calculations.** Investigate the source and downstream effect before closing the exception.

**Forgetting temporary entry reversals.** Investigate the source and downstream effect before closing the exception.

**Approving an entry after reports are issued.** Investigate the source and downstream effect before closing the exception.

## What the owner should review

Large or unusual journals, weekend postings, entries by administrators, missing support, suspense accounts and overdue reversals.

The goal is not to remove every exception. It is to make important exceptions visible, owned and traceable to a decision.

## Related

Use the [ERP acceptance evidence worksheet](/resources/erp-acceptance-evidence/) to record the outcome and supporting records.

Read [Odoo Month End and Year End Closing: A Control Plan](/blog/2026/10/26/odoo-month-end-year-end-closing/) for the connected workflow.

## Official references

1. [Accounting and invoicing](https://www.odoo.com/documentation/19.0/applications/finance/accounting.html)

*Sources: official Odoo 19 documentation is listed above. Confirm the corresponding documentation for the installed version before implementation. Examples are illustrative business scenarios, not client results or tests on a live database.*

If you need help translating these decisions into your own workflow, see my [Odoo consulting services](/services/odoo-consulting/).
