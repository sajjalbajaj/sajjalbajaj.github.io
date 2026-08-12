---
layout: post
title: "Invoicing Policies in Odoo Sales: Ordered vs Delivered"
date: 2026-08-19 08:00:00 +0530
tags: [Odoo, Odoo 19, Sales, Accounting, ERP, Warehouse Management, Invoicing, Cash Flow]
description: "How Odoo's invoicing policies decide when you can bill a customer, on ordered or delivered quantities, and how to choose the right one."
---

Here is a question that quietly matters a lot: when should you invoice a customer, when they order, or
when you deliver? Odoo lets you decide per product with invoicing policies, and getting this right keeps
your billing accurate and your cash flow healthy. Here is how it works.

## The two policies

Every product in Odoo carries an invoicing policy, and there are two main choices:

- **Ordered quantities:** you can invoice as soon as the order is confirmed, regardless of what has been
  delivered yet. The bill is based on what was ordered.
- **Delivered quantities:** you can only invoice for what has actually been delivered. The bill follows
  the goods out of the door.

That single setting shapes when revenue can be billed, so it is worth choosing deliberately.

## When to use ordered quantities

Billing on ordered quantities suits situations where delivery is not the trigger for payment. Services are
a classic example: if you sell a block of consulting or a fixed package, you invoice for what was agreed,
not for a physical delivery. It is also common where you take payment up front.

## When to use delivered quantities

Billing on delivered quantities is the prudent choice for physical goods, especially where orders may be
fulfilled partially or over time. If a customer orders 100 units and you ship 60, you invoice for 60. You
never bill for goods that have not left your warehouse, which keeps you honest and avoids awkward
corrections.

## Why it matters

Invoicing policy affects three things at once: the accuracy of your bills, the timing of your revenue, and
the trust of your customers. Bill for undelivered goods and you create disputes and refunds. Forget to bill
delivered goods and you leak money. Matching the policy to how each product really sells keeps all three
right.

## Handling partial deliveries

Because delivered-quantity billing follows actual shipments, Odoo handles partial deliveries gracefully.
You invoice what you send, and the rest becomes invoiceable as it ships. Your billing tracks reality
instead of forcing everything into one all-or-nothing invoice.

## Practical tips

- Set invoicing policy per product, based on how that product actually sells.
- Use delivered quantities for physical goods, especially where partial shipments happen.
- Use ordered quantities for services and cases where you bill on agreement or up front.
- Check the policy on new products, so billing behaves the way you expect.

## My take

Invoicing policy is a small setting with a real impact on your cash flow and your customer relationships.
Bill physical goods on delivery, bill services on order, and let Odoo keep invoicing aligned with what has
genuinely happened. Do that, and your billing stays accurate, timely and dispute-free.

Next in the series: recurring revenue with subscriptions.

*Based on the official [Odoo 19 Sales documentation](https://www.odoo.com/documentation/19.0/applications/sales/sales.html). A plain-English guide, not a replacement for the docs.*
