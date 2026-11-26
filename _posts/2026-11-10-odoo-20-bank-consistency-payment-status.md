---
layout: post
title: "Odoo 20 Bank Consistency and the New Payment Statuses"
date: 2026-11-10 07:00:00 +0530
tags: [Odoo, Odoo 20, ERP, Best Practices, Accounting, Finance, Banking, Invoicing]
hub: accounting
description: "Understand Odoo 20 bank consistency, renamed payment statuses and the evidence finance needs before treating a payment as reconciled."
last_modified_at: 2026-11-27
faqs:
  - q: "What changed in Odoo 20 payment status names?"
    a: "The release notes rename In Process to Paid and the former Paid status to Reconciled. Update procedures and integrations that interpret those labels."
  - q: "Does Paid prove a bank transaction has been matched?"
    a: "No. Establish the linked bank transaction and reconciliation evidence rather than interpreting the label as proof of settlement."
  - q: "Can an imported bill reconcile a bank transaction automatically?"
    a: "Uploading a bill in Bank Matching does not itself reconcile the active transaction. Review and match the appropriate counterpart."
---

**Short answer:** Odoo 20 changes both bank consistency controls and payment terminology. The former In Process status becomes Paid, while the former Paid status becomes Reconciled. Finance teams should update their procedures around those meanings and prove the connection between the payment, actual bank transaction and counterpart entries before closing an exception.

## What does the bank consistency change cover?

The [Odoo 20 release notes](https://www.odoo.com/odoo-20-release-notes) describe bank account journal impact originating from bank transactions, together with clearer feedback about statement balance inconsistencies. This strengthens the connection between bank activity and accounting records. It does not establish that the beneficiary, amount or business purpose was authorised.

A migration review should identify any custom import, journal routine or integration that previously posted directly against a bank account. Confirm the supported replacement with the implementation team in a test database. Do not assume an old adjustment routine will continue to behave identically.

## How should the new statuses change a payment review?

Use the following translation when reviewing old training material:

| Previous label | Odoo 20 label | Review implication |
| --- | --- | --- |
| In Process | Paid | Do not infer bank matching from the label alone |
| Paid | Reconciled | Inspect the associated matching evidence |
| Manual status action | Mark as Reconciled in the action menu | A manual action still needs supporting evidence |

Also inspect integrations and spreadsheets that compare literal status values. A screen label and an underlying technical value are different things; confirm both before changing an interface.

## How does an ordinary supplier payment illustrate the distinction?

Consider a proposed test involving a supplier bill of 2,400 and an outgoing bank transaction of 2,412, including a separately supported bank fee. Recording the payment should not cause the reviewer to overlook the difference.

Open the journal's Bank Matching view, find the transaction and inspect the proposed counterpart. Check the supplier, reference, amount and currency. Match the supported bill or payment, then account for the fee according to the company's approved policy. Retain the transaction reference and the reason for the difference.

The [bank reconciliation documentation](https://www.odoo.com/documentation/20.0/applications/finance/accounting/bank/reconciliation.html) explains matching existing items and handling remaining amounts. It also warns that uploading bills from that view does not automatically reconcile them with the selected transaction.

## Which exceptions should remain visible?

Test a partial payment, a missing bank transaction, a duplicate import and a payment with the right amount but the wrong supplier reference. For each, specify the expected open item and who investigates it.

A partially matched transaction and a partially settled invoice are not interchangeable. Review the outstanding amount on each record. Avoid writing off a difference merely to make the screen look complete.

## What evidence supports acceptance?

Keep the bill, payment and bank transaction identifiers, matching result, residual amount and reviewer decision together. Check the period end reconciliation summary against the ledger. The useful acceptance condition is a traceable settlement result, rather than a payment changing colour or label.

For broader finance context, see the [accounting overview](/blog/2026/08/21/odoo-accounting-overview-for-business-owners/). Record these proposed tests in the [ERP acceptance evidence worksheet](/resources/erp-acceptance-evidence/).

*Sources reviewed on 27 November 2026. Scenarios are proposed acceptance cases, not reported customer results. Confirm edition, installed modules and provider requirements for your database.*
