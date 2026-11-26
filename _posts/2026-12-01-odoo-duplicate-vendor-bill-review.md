---
layout: post
title: "Odoo Vendor Bills: Stop Duplicate Invoices Before Payment"
date: 2026-12-01 08:00:00 +0530
tags: [Odoo, Odoo 19, ERP, Best Practices, Accounting, Purchase, Invoicing, Finance]
hub: accounting
description: "Review Odoo vendor bills for repeated invoice numbers, suppliers, dates and amounts before approval so the same liability is not paid twice."
faqs:
  - q: "Does Odoo decide that two bills are duplicates?"
    a: "It can surface matching information, but an authorised reviewer must decide whether the liability is repeated or valid."
  - q: "Should a posted duplicate simply be deleted?"
    a: "No. Use the approved correction method so accounting history and any payment impact remain traceable."
---

**Short answer:** A duplicate warning is a reason to investigate, not proof that either bill should be deleted. Compare the source invoice, receipt and payment status before approval.

## Applies to

Odoo 19 Accounting and Purchase. Supplier document quality and local record retention rules remain business responsibilities.

## The decision to make

Is this a second copy of the same liability, a valid recurring charge or a supplier correction?

## What Odoo can show

* The vendor, bill reference, date and amount support duplicate review.
* Purchase and receipt links explain what was ordered and received.
* Posted entries and payments determine whether correction needs a reversal or credit.

## A practical control design

1. **Require the supplier invoice number in a consistent field.**
2. **Review warnings before posting or payment selection.**
3. **Compare repeated amounts with purchase and receipt evidence.**
4. **Correct posted duplicates through an authorised accounting route.**

## Worked example

A supplier emails an invoice twice to different team members. Both drafts show the same reference and amount. Accounts payable retains one bill, attaches the source once and records why the second draft was rejected.

## When this approach fits

This fits central and branch accounts payable teams receiving invoices through several channels.

## Limits and boundaries

It does not prove fraud or decide whether a repeated monthly amount is valid. The reviewer still needs the source document and commercial context.

## Common mistakes

**Deleting a posted duplicate without preserving the correction trail.** Investigate the source and downstream effect before closing the exception.

**Treating every repeated amount as a duplicate.** Investigate the source and downstream effect before closing the exception.

**Ignoring supplier reference formatting differences.** Investigate the source and downstream effect before closing the exception.

**Checking only when the payment file is prepared.** Investigate the source and downstream effect before closing the exception.

## What the owner should review

Duplicate warnings, repeated supplier references, same day amounts, bills without purchase evidence and posted corrections.

The goal is not to remove every exception. It is to make important exceptions visible, owned and traceable to a decision.

## Related

Use the [ERP acceptance evidence worksheet](/resources/erp-acceptance-evidence/) to record the outcome and supporting records.

Read [Odoo Vendor Bill Matching: Resolve Receipt and Price Exceptions](/blog/2026/11/05/odoo-vendor-bill-matching-exceptions/) for the connected workflow.

## Official references

1. [Vendor bills](https://www.odoo.com/documentation/19.0/applications/finance/accounting/vendor_bills.html)

*Sources: official Odoo 19 documentation is listed above. Confirm the corresponding documentation for the installed version before implementation. Examples are illustrative business scenarios, not client results or tests on a live database.*

If you need help translating these decisions into your own workflow, see my [Odoo consulting services](/services/odoo-consulting/).
