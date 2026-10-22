---
layout: post
title: "Odoo Dropshipping: Handle Missing and Partial Deliveries"
date: 2026-11-06 09:00:00 +0530
tags: [Odoo, Odoo 19, ERP, Best Practices, Dropshipping, Purchase, Sales, Logistics]
hub: inventory
description: "Manage Odoo dropship exceptions with supplier delivery evidence, partial quantities and customer communication before closing orders or settling claims."
faqs:
  - q: "Does a confirmed dropship purchase order prove delivery?"
    a: "No. It establishes an order commitment. The business needs evidence of the actual direct shipment and customer outcome."
  - q: "Should a supplier to customer return pass through our warehouse?"
    a: "Only if that is the real movement. Design the return route to match custody and the accepted commercial process instead of recording fictitious internal stock."
---

**Short answer:** dropship exceptions need a clear relationship between the customer order, supplier order and evidence of direct delivery. Because the goods bypass your warehouse, an internal receipt count cannot establish what arrived. Keep partial shipments, disputed delivery and returns visible until the customer and supplier outcomes are reconciled.

## Applies to

Odoo 19 Sales, Purchase and Inventory dropshipping. Odoo 20 adds reporting clarification for dropshipped stock; this article does not assume it appears as internal warehouse inventory. The corresponding Odoo 20 references were reviewed in October 2026; use the documentation for your installed release when configuring screens and fields.

## What changes when goods bypass the warehouse?

The business remains responsible for its customer promise even though another organisation dispatches the goods. Identify who obtains supplier updates and who communicates with the customer. Without that ownership, both parties can assume the other is investigating a missing delivery.

Odoo's documented dropship route connects purchasing and the direct supplier to customer movement. Review the destination address and product details before confirmation. A correct quantity sent to the wrong address is still an operational failure, even if the document chain looks complete.

I would agree what counts as delivery evidence for the particular service. A dispatch notice, carrier scan and customer acceptance can answer different questions. Record the appropriate reference rather than using an informal statement that the supplier says it is done.

## How should partial deliveries be handled?

Record the quantity actually delivered through the supported workflow and keep the remainder identifiable. Confirm whether the supplier still intends to ship it, has cancelled it or proposes a substitute. The customer's next action depends on that distinction.

Keep customer communication aligned with the quantities. A message saying the order is delivered can be misleading when only one line arrived. Use clear references and tell the responsible customer service owner which part remains unresolved.

Review invoicing and supplier billing separately. Their policies may depend on ordered or delivered quantities, but the operational evidence still needs to be accurate. Do not mark the full shipment complete merely to enable a document that finance wants to prepare.

## What should happen when delivery is disputed?

Collect the order, shipment and delivery references and identify the exact disagreement. A missing package, damaged item and wrong product need different investigation. The business should avoid asking the customer to repeat the same explanation to several departments.

Ask the supplier for the evidence relevant to the claim and retain it with the case. If a carrier is involved, assign responsibility for that conversation. A tracking link without interpretation may not resolve whether the correct goods reached the intended recipient.

Keep uncertain outcomes open. An external status may be delayed or incorrect, and repeating a shipment prematurely can create duplicate supply. Obtain an authorised decision before replacement or refund where the original delivery outcome remains unresolved.

## Worked example: a direct shipment arrives incomplete

Imagine a retailer selling several bulky products that a supplier ships directly. The customer reports that one item is missing although the carrier record shows a delivered shipment. Customer service identifies the affected line and asks the supplier to reconcile the packing and delivery evidence.

The supplier confirms a partial dispatch and proposes a later shipment for the remainder. The retailer records that commitment and updates the customer through the agreed route. Finance reviews which invoices and balances are affected rather than assuming the whole commercial transaction is complete.

If the customer cancels the missing item, the team follows an authorised cancellation and settlement process. The original shipped items remain traceable. The outcome can be understood without inventing a receipt into the retailer's own warehouse.

## How should returns and replacements be connected?

Decide the actual physical route: customer to supplier, customer to your warehouse or another approved destination. Record movements that reflect reality. A convenient standard route should not create stock at a location that never held the goods.

Link the commercial outcome to the original sale and purchase. A supplier credit, customer credit and replacement order may all be relevant, but each needs its own accepted basis. Receiving a supplier credit does not automatically prove that the customer has been refunded.

Check whether a replacement duplicates an outstanding supplier commitment. If the original shipment is later found, the team needs a decision about the extra goods. Preserve the incident references so that a late update does not become an unrelated stock or billing problem.

## When does dropshipping fit?

It fits products and supplier arrangements where direct fulfilment is reliable and the business can obtain usable delivery evidence. It can reduce internal handling, but it increases dependence on supplier communication and external execution.

It is a poor fit when the business needs an internal inspection before customer delivery and no alternative assurance process exists. It also needs careful design where products from several sources must arrive as one coordinated customer order.

## Common mistakes

Common mistakes include treating supplier confirmation as delivery, closing full quantities after a partial shipment and recording returns through fictitious internal locations. Another is creating a replacement before checking whether the original order still has an active dispatch commitment.

Review an exception from both sides: what the customer expects and what the supplier still owes. The case is complete when those positions agree with the physical evidence and approved financial outcome. A closed order status alone cannot provide that explanation.

## Related

Read [Odoo Supplier Returns: Follow the Goods Through to the Credit](/blog/2026/11/05/odoo-supplier-return-credit-reconciliation/) for the connected workflow.

## Official references

1. [Dropshipping](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/shipping_receiving/daily_operations/dropshipping.html)
1. [Credit notes and refunds](https://www.odoo.com/documentation/19.0/applications/finance/accounting/customer_invoices/credit_notes.html)

*How this article was checked: official Odoo 19 documentation and the corresponding Odoo 20 pages were reviewed in October 2026. The examples are illustrative, not client results or tests on a live database.*

For help designing this workflow, see my [Odoo consulting services](/services/odoo-consulting/).
