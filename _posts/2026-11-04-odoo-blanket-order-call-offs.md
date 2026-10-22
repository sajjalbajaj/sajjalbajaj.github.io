---
layout: post
title: "Odoo Blanket Orders: Control Each Supplier Call Off"
date: 2026-11-04 08:00:00 +0530
tags: [Odoo, Odoo 19, ERP, Best Practices, Purchase, Procurement, Supply Chain, SME]
hub: purchase
description: "Use Odoo blanket orders for recurring purchases with clear call off quantities, agreed prices, validity dates and supplier commitment reviews."
faqs:
  - q: "Does a blanket order receive goods automatically?"
    a: "No. The agreement provides a basis for related quotations and purchase orders. Receiving and billing still need their own operational records."
  - q: "Are agreement quantities a guaranteed spending limit?"
    a: "Do not assume that. Review the actual configuration and add an approved business control where a contractual quantity or spending ceiling must be enforced."
---

**Short answer:** use a blanket order to record recurring supplier terms, then control each release of demand through its linked quotation and purchase order. The agreement, the quantity ordered and the quantity received answer different questions. Review them together before assuming that a long term arrangement is being used correctly.

## Applies to

Odoo 19 Purchase with purchase agreements enabled, plus Inventory for physical receipts. The controls below are operating recommendations, not automatic contractual enforcement. The corresponding Odoo 20 references were reviewed in October 2026; use the documentation for your installed release when configuring screens and fields.

## What should the agreement contain?

Identify the supplier, products, agreed units, currency, prices and validity period. Include the business owner responsible for interpreting the agreement. If the supplier uses a different product code or case size, resolve that mapping before anyone creates a release against it.

Odoo documents a blanket order as a purchase agreement that can populate related quotations. Its product prices require explicit entry; a pre-existing product price is not automatically inserted into the agreement. That makes an approved price review important, especially when several people prepare supplier records.

I would keep the signed or otherwise accepted commercial evidence accessible through the agreed document process. The Odoo record should correspond to that evidence. A buyer should not need to search a personal inbox to establish whether a price applies to this product, quantity or period.

## How should each call off be reviewed?

Treat a call off as a specific request for goods under the agreement. Confirm the quantity needed, destination and expected timing. A recurring relationship does not remove the need to check whether the business still needs the stock or has space to receive it.

Use the linked quotation and order references to follow the transaction. Odoo's documented agreement view exposes related RFQs and orders and updates ordered quantities. Review that relationship when orders are created outside the usual agreement screen, because an unlinked order may be missed during a manual agreement review.

Keep changes visible. If a supplier proposes a substitute, different case size or exceptional freight charge, decide whether it remains within the existing terms. Record the approved exception before confirming the purchase rather than discovering it when the invoice arrives.

## What should remaining commitment mean?

Agree the meaning before building a report. An intended annual quantity, a minimum purchase commitment and a maximum authorised quantity are different commercial concepts. A field containing a quantity does not establish which interpretation the organisation has accepted.

Separate ordered, received, cancelled and still expected quantities. A cancellation may reduce future demand without changing a supplier's contractual claim. Likewise, a return of damaged goods does not necessarily free the same quantity for a new call off under the agreement.

Finance and purchasing should agree how monetary comparisons handle taxes, currency changes and additional charges. If a strict ceiling is required, identify the enforcement mechanism and demonstrate its behaviour. Do not describe an overview total as a hard purchasing block unless the implementation actually provides one.

## Worked example: packaging purchased throughout the season

Consider a food distributor buying standard cartons from one supplier across a trading season. The agreement defines the carton specification and price, while individual orders reflect warehouse demand. Receiving staff count cartons in the approved unit and record shortages against the relevant order.

A buyer later needs an urgent release to a second location. The review confirms that the agreed price still applies but that the supplier proposes a separate delivery charge. The authorised owner accepts or rejects that exception and records the decision with the release.

At the next agreement review, purchasing compares orders, actual receipts and outstanding demand. The team can explain why the original planning quantity differs from what has arrived. It does not treat an attractive headline price as evidence that every release followed the agreement.

## When does a blanket order fit?

It fits recurring purchases with sufficiently stable specifications and terms. It can reduce repeated negotiation while allowing delivery quantities and dates to vary. The business still needs a process for confirming each release and reviewing exceptions.

It is less suitable as a substitute for competitive evaluation when the product, supplier or pricing basis is still uncertain. An ordinary quotation comparison may be the right first step. Avoid creating a long term agreement simply to bypass a decision that procurement has not completed.

Review the agreement before renewal or expiry. Identify unused commitments, open orders and products that have changed. Decide which terms carry forward and which require a fresh negotiation, keeping the historical arrangement understandable for later invoice or receipt questions.

## Common mistakes

Typical errors include leaving agreement prices at zero, confusing planned quantity with a purchase limit and forgetting orders created outside the usual linked workflow. Another is editing terms after releases have been made without recording the reason or reviewing affected documents.

A useful periodic review asks four questions: which releases were authorised, which goods arrived, which invoices remain unresolved and which commitments still matter? Assign an owner to each difference. This turns the agreement into an operating reference instead of a document that is created once and never revisited.

## Related

Read [Vendor Pricelists and Purchase Agreements in Odoo](/blog/2026/08/17/vendor-pricelists-and-purchase-agreements-in-odoo/) for the connected workflow.

## Official references

1. [Blanket orders](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/purchase/manage_deals/blanket_orders.html)
1. [Requests for quotation](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/purchase/manage_deals/rfq.html)

*How this article was checked: official Odoo 19 documentation and the corresponding Odoo 20 pages were reviewed in October 2026. The examples are illustrative, not client results or tests on a live database.*

For help designing this workflow, see my [Odoo consulting services](/services/odoo-consulting/).
