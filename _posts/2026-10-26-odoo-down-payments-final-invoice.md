---
layout: post
title: "Odoo Down Payments: Deposits and the Final Invoice"
date: 2026-10-26 08:00:00 +0530
tags: [Odoo, Odoo 19, Sales, Accounting, Invoicing, Finance, ERP, Best Practices]
hub: accounting
description: "Understand Odoo down payments, deposit invoices and final deductions, with a practical reconciliation example and checks before collecting money."
faqs:
  - q: "Is a down payment the same as a payment term?"
    a: "No. A down payment creates a separate invoice for part of an order. Payment terms divide the due dates on an invoice."
  - q: "Does a posted deposit invoice prove that money arrived?"
    a: "No. Check the payment and reconciliation records separately before treating the deposit as collected."
---

**Short answer:** use an Odoo down payment invoice when you need to bill part of a confirmed order before issuing the balance. Agree the commercial purpose of the deposit, verify its accounting treatment and reconcile its eventual deduction. An invoice request and a receipt of money are separate events.

## Applies to

Odoo 19 Sales and Invoicing. The core sales invoice workflow applies to Community and Enterprise; additional accounting reports depend on the installed edition and localisation. The corresponding Odoo 20 documentation was checked in October 2026. This article targets Odoo 19; confirm your installed version before following any screen labels.

## What problem should the deposit solve?

I would start with the risk the business wants to manage. A manufacturer may buy unusual materials only after receiving an advance. A distributor may reserve scarce stock. A service business may ask the customer to commit before allocating a team. Those reasons lead to different release rules, even if all three businesses call the amount a deposit.

Write the rule in language that sales, finance and operations can use. For example, production starts after finance confirms receipt against the advance invoice. Avoid a vague instruction to proceed when the order looks paid. A salesperson should not have to infer payment status from an email or an invoice number.

Also distinguish a sales advance from refundable security held against damage. Their commercial and accounting treatment can differ. If the money is refundable security, get the accountant to approve that design rather than assuming the normal sales down payment process is appropriate.

## How does the standard invoice flow work?

Odoo documents fixed amount and percentage down payments from a confirmed sales order. The initial result is a draft invoice, allowing finance to review it before posting. The later regular invoice can deduct the advance. This connects the initial request and the balance to the sales order instead of relying on an unrelated manual invoice.

Before using it, inspect the down payment product, its account and its tax treatment with finance. Do not assume that a default configuration matches your country, customer or contract. Where goods have different taxes, inspect the resulting invoice lines and the deduction rather than checking only the grand total.

Document who may edit a draft and who may post it. An approval conversation outside Odoo can leave a different amount on the actual invoice. The release decision should use the posted document and reconciled receipt that operations can identify.

## How should you distinguish the key balances?

Keep four questions separate: what the customer ordered, what you have invoiced, what the customer has paid and what remains to deliver. A deposit does not necessarily mean a corresponding proportion of goods has left the warehouse. Equally, a completed delivery does not prove that the final invoice has been sent.

Give each role a clear source for its answer. Sales owns the agreed order. Finance owns invoice and receipt status. Warehouse staff own fulfilment. A short reconciliation sheet can bring these references together during the pilot without becoming a permanent substitute for the accounting records.

If the order changes, review the outstanding advance before raising another invoice. A reduced order, cancelled line or partial shipment may require a different final settlement. Resolve the commercial decision first, then use an approved invoice or credit process to record it.

## Worked example: a custom fabrication order

Consider an illustrative order for 100,000 currency units before tax, with a 30 percent advance. The initial request is 30,000 before any applicable tax. Finance checks the draft, posts it and later matches the customer's payment. The workshop receives permission to start only after that receipt has been confirmed.

When the order is ready for final billing, finance checks that the final invoice represents the agreed sale and deducts the previously invoiced advance. The total invoiced across the two documents should equal the order value, allowing for approved changes and tax treatment. Counting both the full order and the advance as additional revenue would overstate the commercial transaction.

Now change the example: the customer cancels one optional item before production. Do not simply reduce the second payment request by an arbitrary amount. Reconcile the revised order, any credit required, the original receipt and the remaining invoice. Keep the references together so another accountant can follow the decision.

## When does this approach fit?

Separate down payment invoices fit agreements where an advance is billed and a later invoice settles the balance. Payment terms fit a different situation: one invoice whose balance falls due in instalments. Choosing between them depends on the contract and accounting requirements, not the convenience of a particular button.

Milestone billing also deserves its own design. If each milestone represents a separately agreed deliverable, a sequence of percentage advances may obscure what the customer accepted. Document the acceptance event and invoice basis before deciding whether down payments are the right tool.

## Common mistakes and the checks that catch them

A common mistake is releasing goods because the invoice is posted. Ask finance to demonstrate how receipt confirmation reaches the delivery team. Another is treating the advance invoice and final invoice as independent documents, making the deduction easy to miss. Review both documents together before sending the final bill.

During the pilot, include a normal advance, a partial payment, a cancelled order, a changed order and an overpayment. For each, record the expected customer balance and compare it with the actual ledger. Reconcile by customer and document reference, not only by total bank receipts.

Before expanding the workflow, agree who handles an unmatched payment, who approves a refund and where the customer sees the balance due. These decisions are what make the process reliable when the straightforward example becomes an exception.

## Related

Read the [customer invoicing guide](/blog/2026/08/21/customer-invoicing-in-odoo/) for the wider billing process.

## Official references

1. [Odoo 19 down payments](https://www.odoo.com/documentation/19.0/applications/sales/sales/invoicing/down_payment.html)
1. [Odoo 19 payment terms](https://www.odoo.com/documentation/19.0/applications/finance/accounting/customer_invoices/payment_terms.html)

*How this article was checked: the official Odoo 19 references and their Odoo 20 counterparts were reviewed in October 2026. Examples are illustrative planning exercises, not client results or tests on a live database.*

For help applying this to your business, see my [Odoo consulting services](/services/odoo-consulting/).
