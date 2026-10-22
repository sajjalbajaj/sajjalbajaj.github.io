---
layout: post
title: "Odoo Vendor Bill Matching: Resolve Receipt and Price Exceptions"
date: 2026-11-05 08:00:00 +0530
tags: [Odoo, Odoo 19, ERP, Best Practices, Purchase, Accounting, Invoicing, Finance]
hub: accounting
description: "Review Odoo vendor bill exceptions by comparing the order, received quantities and supplier invoice before approving payment or correcting records."
faqs:
  - q: "Does three way matching prevent every incorrect payment?"
    a: "No. Odoo documents an Exception status when draft bill information changes and does not universally block those changes. Payment approval still needs a defined review."
  - q: "Should receiving be changed to match an invoice?"
    a: "Only when the physical receipt record is genuinely incorrect and an authorised correction is supported by evidence. A supplier invoice is not proof that extra goods arrived."
---

**Short answer:** investigate a vendor bill exception by comparing what was ordered, what physically arrived and what the supplier charged. Each record has a different owner and purpose. Correct the record that is wrong, or approve a documented commercial exception, instead of changing quantities merely to make the documents agree.

## Applies to

Odoo 19 Purchase with vendor billing and Inventory receipts. Three way matching is intended for the received quantities control policy. The corresponding Odoo 20 references were reviewed in October 2026; use the documentation for your installed release when configuring screens and fields.

## What does the bill control policy establish?

The product's control policy determines the quantity basis used when preparing a bill from purchasing. Odoo documents ordered quantities and received quantities as different approaches. Choose the policy according to the commercial arrangement and operating process rather than treating one as universally correct.

With received quantities, a partial receipt can provide the basis for a partial bill. That does not prove the supplier's invoice is correct in every other respect. Prices, additional charges, references and tax treatment still need the appropriate review.

I would document which team maintains the policy and how exceptions are handled. A service purchase may have a different acceptance basis from physical goods. Users should know what evidence authorises billing when there is no ordinary warehouse receipt to inspect.

## What does three way matching actually signal?

Odoo's documented matching behaviour uses a Should Be Paid field and can flag an exception when draft bill information is changed. The documentation explicitly explains that a discrepancy does not necessarily block the change because a valid reason may exist.

Treat the signal as a prompt for investigation. It is not a substitute for an approved payment process or proof that every route to payment is controlled. Review permissions and the actual workflow if the business requires stronger enforcement.

Keep the resolution with the bill. If a reviewer accepts a freight adjustment or price correction, record the evidence and authority. Another finance employee should be able to understand the decision without assuming that a changed status means somebody checked everything.

## How should quantity differences be investigated?

Check the purchase unit and the receiving unit first. A supplier invoice in cases can appear inconsistent with a receipt in individual items even when the physical quantity is correct. Confirm the conversion and compare like quantities before raising a commercial dispute.

Then inspect partial receipts, outstanding backorders and returns. The invoice may cover an entire order while only part has arrived, or a credit may still be due for returned goods. Identify the exact document references rather than comparing unrelated totals for the same supplier.

If the receipt is wrong, use the approved correction process with warehouse evidence. Do not validate an extra receipt to satisfy the invoice when the goods are absent. That would create misleading availability and potentially affect later valuation or fulfilment decisions.

## Worked example: an invoice includes undelivered stock

Imagine a distributor ordering a product in several cases. The warehouse receives only part of the order and records the shortage. The supplier sends an invoice for the full order, including a delivery charge that was not on the original quotation.

Finance identifies the quantity difference and asks purchasing to confirm the supplier's intention. The warehouse confirms the actual receipt and outstanding quantity. The commercial owner separately reviews the additional charge instead of combining both questions into one unexplained adjustment.

The accepted outcome may involve a corrected invoice, an agreed staged billing arrangement or another documented treatment. The example does not prescribe accounting entries. It shows how the three owners preserve accurate purchasing, stock and financial evidence while resolving the supplier issue.

## Who should own each exception?

Purchasing owns the agreed commercial terms and supplier clarification. Warehouse staff own evidence of physical receipts and returns. Finance owns the bill, accounting treatment and payment review. Assign a coordinating owner when a difference needs action from more than one team.

Use a short exception register for unresolved cases. Include the bill reference, discrepancy, amount or quantity affected, next action and responsible person. A pending dispute should remain visible even when the rest of the supplier account is ready for settlement.

Avoid making payment urgency the reason to erase an unresolved difference. If management accepts a commercial exception, record that decision explicitly. The audit trail should distinguish an authorised exception from an accidental mismatch that nobody investigated.

## When does this review fit?

It fits organisations with purchase orders, physical receipts and supplier invoices that need coordinated approval. It is especially useful where partial deliveries and additional charges are common. The process can remain lightweight when differences are rare and ownership is clear.

It needs adaptation for services, advances and other purchases whose acceptance evidence is not a stock receipt. Define that evidence before configuring billing expectations. Otherwise a team may manufacture a meaningless receipt simply to satisfy a procedural habit.

## Common mistakes

Common mistakes include treating an Exception label as a hard block, changing receipts to match invoices and overlooking units or returned quantities. Another is approving a price difference without identifying whether the underlying supplier agreement changed.

A resolved exception should leave a clear explanation of the correct quantity, accepted charge and remaining obligation. Review a few completed cases periodically. If staff still need private spreadsheets to explain the outcome, improve the links and ownership rather than adding another unexplained status.

## Related

Read [Vendor Bills and Three-Way Matching in Odoo](/blog/2026/08/17/vendor-bills-and-three-way-matching-in-odoo/) for the connected workflow.

## Official references

1. [Control policies](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/purchase/manage_deals/control_bills.html)
1. [Manage vendor bills](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/purchase/manage_deals/manage.html)

*How this article was checked: official Odoo 19 documentation and the corresponding Odoo 20 pages were reviewed in October 2026. The examples are illustrative, not client results or tests on a live database.*

For help designing this workflow, see my [Odoo consulting services](/services/odoo-consulting/).
