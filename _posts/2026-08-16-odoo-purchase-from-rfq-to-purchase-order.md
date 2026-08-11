---
layout: post
title: "Odoo Purchase: From RFQ to Purchase Order"
date: 2026-08-16 10:00:00 +0530
tags: [Odoo, Odoo 19, Purchase, ERP]
description: "A plain-English walk through Odoo Purchase: how requests for quotation become purchase orders, and how buying connects to stock and accounting."
---

Buying well is quietly one of the biggest levers in any business: get the right goods, at the right
price, at the right time. Odoo Purchase turns that into a clean, controlled process. Here is how it
flows, from first enquiry to a confirmed order.

## The starting point: the RFQ

The purchasing process usually begins with a request for quotation, or RFQ. This is a draft order you
send to a supplier to ask for pricing and availability, before anything is committed.

You choose the vendor, add the products and quantities you need, and Odoo can pull in prices and details
it already knows about that supplier. You can send the RFQ straight from Odoo by email, keeping the whole
conversation in one place.

## From RFQ to purchase order

Once you and the supplier agree, the RFQ becomes a purchase order, or PO. This is the firm commitment to
buy. Confirming it tells the rest of Odoo that these goods are on their way, which matters more than it
first appears.

## Where the magic is: everything connects

A purchase order in Odoo does not sit alone. The moment you confirm it:

- **Inventory** expects the goods. A receipt is prepared, so your team knows what is arriving and can
  book it in against the order.
- **Accounting** expects a bill. When the supplier invoices you, the bill links back to the order, so
  matching and payment are straightforward.

This connection is the whole point of buying inside an ERP. Purchasing, stock and accounts stay in step
automatically, instead of three people re-keying the same order into three systems.

## Receiving and closing the loop

When the goods arrive, you record the receipt, and Odoo updates your stock. When the invoice comes, you
match it to the order and receipt. The loop, order, receive, bill, is closed, with each step checking the
others.

## Practical tips

- Keep your vendor and product records clean so RFQs are quick to raise.
- Use RFQs to compare and negotiate before committing to a PO.
- Confirm orders promptly so inventory and planning see what is incoming.
- Record receipts as goods arrive, rather than in a batch later, to keep stock accurate.

## My take

Odoo Purchase brings order and visibility to buying. The flow from RFQ to purchase order is simple, but
the real value is how it ties into stock and accounting, so nothing falls through the cracks. Get your
vendors and products set up cleanly, and purchasing becomes a controlled, transparent process instead of
a scatter of emails.

Next in the series: matching what you ordered, received and were billed.

*Based on the official [Odoo 19 Purchase documentation](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/purchase.html). A plain-English guide, not a replacement for the docs.*
