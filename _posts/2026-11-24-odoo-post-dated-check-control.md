---
layout: post
title: "Odoo Post Dated Checks: Separate Receipt from Settlement"
date: 2026-11-24 10:00:00 +0530
last_modified_at: 2026-11-27
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

## What Odoo records and what the business must decide

* An incoming check can use a named manual payment method.
* Registering the payment does not move money.
* The bank transaction provides the later reconciliation evidence.

## A practical control design

1. **Record the check number and date consistently.**
2. **Avoid releasing credit based only on physical receipt unless policy allows it.**
3. **Track deposit and settlement ownership.**
4. **Define the response to bounced or replaced checks.**

## Worked example

A customer provides a check dated two weeks ahead. The finance team records the reference in its controlled process but does not treat bank settlement as complete. After deposit, the bank transaction is matched to the payment. A rejected check returns to the exception queue.

## When it fits

This fits businesses that accept checks and need a visible distinction between possession and bank clearance.

## Limits and boundaries

Standard Odoo does not provide every post dated check status for every country. Do not imply a third party module or localization is part of the standard product.

## Common mistakes

**Marking the invoice settled when the check is received.** Review the underlying record and the next operational consequence before closing the exception.

**Losing the check number or date.** Review the underlying record and the next operational consequence before closing the exception.

**Using one status for deposited and cleared.** Review the underlying record and the next operational consequence before closing the exception.

**Failing to reopen collection after rejection.** Review the underlying record and the next operational consequence before closing the exception.

## What the owner should review

Checks awaiting deposit, checks past their date, unreconciled deposits and rejected instruments.

The goal is not to remove every exception. It is to make each important exception visible, owned and traceable to a decision.

## Related

Use the [ERP acceptance evidence worksheet](/resources/erp-acceptance-evidence/) to record the outcome and supporting records.

Read [Odoo Payment Follow Ups and Aged Receivables](/blog/2026/10/26/odoo-payment-followups-aged-receivables/) for the connected workflow.

## Official references

1. [Payments](https://www.odoo.com/documentation/19.0/applications/finance/accounting/payments/online.html)
1. [Bank reconciliation](https://www.odoo.com/documentation/19.0/applications/finance/accounting/bank/reconciliation.html)

*How this article was checked: official Odoo 19 documentation was reviewed in November 2026. Confirm the corresponding documentation for the installed version before implementation. Examples are illustrative business scenarios, not client results or tests on a live database.*

If you need help translating these decisions into your own workflow, see my [Odoo consulting services](/services/odoo-consulting/).
