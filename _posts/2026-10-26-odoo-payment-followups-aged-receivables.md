---
layout: post
title: "Odoo Payment Follow Ups and Aged Receivables"
date: 2026-10-26 09:00:00 +0530
tags: [Odoo, Odoo 19, Accounting, Finance, Customer Management, Invoicing, ERP, Best Practices]
hub: accounting
description: "Build an Odoo payment follow up process that separates overdue debt, disputes and unmatched receipts, with clear ownership and collection checks."
faqs:
  - q: "Why might a paid customer receive a reminder?"
    a: "The receipt may not yet be reconciled against the invoice. Reconcile incoming money before processing reminders."
  - q: "Should every overdue invoice get the same reminder?"
    a: "No. Disputed amounts, agreed payment plans and ordinary overdue invoices need different handling and accountable owners."
---

**Short answer:** use aged receivables to understand outstanding customer balances, then use Odoo follow up actions to organise collection. Reconcile receipts first, separate disputes from ordinary late payment and assign a person to every promise or exception. Sending more reminders is useful only when the underlying balance is correct.

## Applies to

Odoo 19 Enterprise Accounting for the documented follow up reports and automation. Delivery channels also need their own configuration and may incur charges. The corresponding Odoo 20 documentation was checked in October 2026. This article targets Odoo 19; confirm your installed version before following any screen labels.

## What should the collection team review first?

I would begin with a reliable list of unpaid invoices and their due dates. Invoice date, due date and the customer's promised payment date answer different questions. An invoice raised recently can already be overdue if its agreed terms require immediate payment. An older invoice may still be within its agreed terms.

Before contacting anyone, review unmatched bank receipts, pending credit notes and transactions posted against the wrong customer. Otherwise a reminder can tell a customer to pay money that the business already holds. That creates avoidable work for sales and damages confidence in the account statement.

Use the ageing view as a queue for investigation. It tells you where balances sit across time periods; it does not explain why they remain outstanding. Add a reason and next action after reviewing the underlying documents and recent correspondence.

## What does Odoo provide?

The documented follow up workflow supports levels based on overdue days, messages and assigned activities. Finance can configure follow up levels under **Accounting ‣ Configuration ‣ Follow-up Levels**. Automated reminders are an option, not a requirement to use them for every customer.

Odoo's documentation explicitly recommends reconciling bank transactions before processing follow ups. It also distinguishes a customer statement from the follow up report. Choose the document that answers the customer's question rather than attaching a large ledger export to every email.

Treat each delivery channel as a separate operational choice. Confirm the intended recipient and the content being sent. If using SMS or WhatsApp, review channel requirements and charges. Do not assume that a reminder sent through one channel has been read or accepted.

## How should you organise exceptions?

Use a small set of reasons that lead to different actions. A missing purchase order number goes to the salesperson or account owner. A delivery dispute needs fulfilment evidence. A pricing dispute needs the approved quotation. A payment already sent needs bank matching rather than another collection message.

For each exception, capture an owner, the amount affected, the evidence needed and the next review date. A customer disputing one line may still owe the undisputed balance. Finance should agree how to communicate that distinction without presenting an unresolved amount as an accepted debt.

An agreed payment plan needs dates and amounts that can be checked. Record what was promised, when the conversation happened and who approved any commercial concession. Keep the original invoice and its due date intact unless the accounting policy explicitly requires a correction.

## Worked example: a distributor's morning review

Imagine a distributor reviewing three overdue customers. Customer A has paid, but the bank receipt has an abbreviated reference. Customer B challenges a damaged delivery. Customer C accepts the balance and promises payment on Friday. All three appear overdue, but sending the same message would miss the real work.

For A, the reviewer finds the remittance advice, confirms the payer and reconciles the receipt. For B, the account owner gathers the delivery and return records, separates the disputed amount and schedules a resolution. For C, finance records the promise and reviews the account after the agreed date.

The next morning, the collection queue should show which actions remain open. A should no longer be pursued for the settled invoice. B should remain visible as an unresolved case. C should have an explicit next review rather than being forgotten because someone wrote a note.

## When should reminders be automated?

Automation fits customers with dependable contact details, reliable reconciliation and consistent terms. Start with a limited group whose invoices and communications are easy to review. Read the actual generated messages, including attachments, before extending the process.

Keep manual handling where the account needs commercial judgement. Examples include a serious dispute, a negotiated payment plan or an invoice sent to a public sector customer with a special submission process. These cases may still need activities and deadlines, even when automatic messages are inappropriate.

Do not measure success by the number of messages sent. Review overdue balances, broken promises, unresolved disputes and the time taken to match receipts. A rise in reminders could indicate worsening data quality rather than stronger collections.

## Common mistakes and review questions

The first mistake is automating before cleaning balances. The second is allowing sales and finance to make different promises to the same customer. Agree who may change terms, approve a payment arrangement or pause reminders, and how that decision is recorded.

Another mistake is using ageing buckets without checking whether they represent invoice age or lateness against due dates. Record the report filters and reporting date when sharing a collection summary. People should be comparing the same position rather than differently filtered screenshots.

Finally, review closure evidence. A case is complete when the payment is matched, the credit is posted or an authorised resolution is recorded. A friendly conversation is progress, but it does not settle the ledger. Keep the human relationship and the accounting position connected through clear references.

## Related

See [customer credit limits](/blog/2026/10/12/customer-credit-limits-odoo/) for the related order approval decision.

## Official references

1. [Odoo 19 invoice follow ups](https://www.odoo.com/documentation/19.0/applications/finance/accounting/payments/follow_up.html)
1. [Odoo 19 payment terms](https://www.odoo.com/documentation/19.0/applications/finance/accounting/customer_invoices/payment_terms.html)

*How this article was checked: the official Odoo 19 references and their Odoo 20 counterparts were reviewed in October 2026. Examples are illustrative planning exercises, not client results or tests on a live database.*

For help applying this to your business, see my [Odoo consulting services](/services/odoo-consulting/).
