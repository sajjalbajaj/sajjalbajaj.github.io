---
layout: post
title: "ERP for Dropshipping: How Odoo Connects Orders and Suppliers"
date: 2026-08-28 14:00:00 +0530
last_modified_at: 2026-11-17
tags: [ERP, Odoo, Odoo 20, Dropshipping, Procurement, Inventory, Sales, Automation]
hub: industries
description: "See how ERP supports dropshipping in Odoo 20, from sales orders and supplier purchasing to direct delivery, margins, exceptions and customer updates."
faqs:
  - q: "How does ERP help a dropshipping business?"
    a: "It connects the customer order, supplier purchase, direct delivery and financial records so teams do not have to re-enter the same order across separate systems."
  - q: "Does Odoo hold dropshipped products in warehouse stock?"
    a: "No. The supplier ships directly to the customer, so the products are not stored in the company's internal inventory locations."
  - q: "Does confirming a dropship sales order create a supplier purchase?"
    a: "When the product and route are configured correctly, confirming the sales order creates a linked request for quotation for the selected supplier."
---

**Short answer:** ERP helps a dropshipping business connect the customer sale, supplier purchase, direct delivery
and financial outcome in one traceable workflow. In Odoo 20, a correctly configured dropship route can create a
linked request for quotation when the sales order is confirmed. The supplier ships to the customer, while your team
retains visibility of the sale, purchase and delivery records without receiving the product into its own warehouse.

This guide explains where that connected workflow helps and where operating controls are still required. For the
configuration steps, also read [Odoo Purchase from RFQ to purchase order](/blog/2026/08/16/odoo-purchase-from-rfq-to-purchase-order/)
and [shipping and receiving in Odoo](/blog/2026/08/14/shipping-and-receiving-in-odoo/).

## How the Odoo dropshipping workflow connects

The product must be available for sale and purchase, have an appropriate vendor and use the **Dropship** route. When
a customer order is confirmed, Odoo creates a linked supplier request for quotation. Confirming that supplier order
creates the dropship movement from the vendor location to the customer location. The business validates that movement
after the supplier confirms delivery.

The connection is useful because the customer order, supplier order and fulfilment record remain related. It does not
mean the workflow is fully automatic. Someone still needs to review supplier selection, delivery evidence, price
changes, shortages, cancellations and customer communication.

## Problem: getting orders to the supplier quickly

In dropshipping, speed matters: a customer order needs to reach the right supplier fast, and doing that
by hand for every order does not scale.

**How Odoo solves it:** a dropship route lets a confirmed sales order automatically raise a purchase
order to your supplier, so orders flow through without manual re-keying.

## Problem: you do not hold the stock

You are selling products you do not physically have, which makes availability and fulfilment easy to get
wrong.

**How Odoo solves it:** modelling products as dropshipped means Odoo handles fulfilment through the
supplier rather than your own stock, keeping orders and expectations aligned with how you actually
operate.

## Problem: margins are tight and easy to lose

Your margin is the gap between what the customer pays and what the supplier charges, and it is easily
eaten by pricing mistakes and hidden costs.

**How Odoo solves it:** with sales prices, supplier costs and every order in one system, your real margin
on each product and order is visible, so you protect it rather than guess at it.

## Problem: selling across multiple channels

Orders come from your website, marketplaces and elsewhere, and keeping them all straight is a constant
juggle.

**How Odoo solves it:** one connected system brings orders from your channels together, all feeding the
same fulfilment and supplier flow, so nothing is dropped or double-handled.

## Problem: tracking and customer trust

Customers expect to know where their order is, even though you never touched it.

**How Odoo solves it:** keeping every order, purchase and delivery linked in one place gives you the
visibility to keep customers informed and build trust, despite the hands-off fulfilment.

## Where ERP does not remove the risk

The supplier controls the physical fulfilment, so product availability and delivery performance still depend on
information received from that supplier. A connected ERP cannot prove that stock exists at the supplier unless a
reliable integration or operating process supplies that information.

Returns also need a defined route. Decide whether the customer returns to the supplier or to your business, who
authorises a refund and how supplier credits are reconciled. For the financial side, see
[vendor bills and three-way matching in Odoo](/blog/2026/08/17/vendor-bills-and-three-way-matching-in-odoo/).

## A practical control checklist

1. Confirm the approved supplier and purchase price before accepting the customer order.
2. Keep the customer sale, supplier purchase and dropship movement linked.
3. Define how tracking information reaches customer service.
4. Review supplier price or quantity exceptions before confirming the purchase.
5. Record whether a cancellation occurred before or after supplier acceptance.
6. Reconcile returns, refunds and supplier credits as separate but connected events.

## Related guides

Read [Odoo dropship delivery exceptions](/blog/2026/11/06/odoo-dropship-delivery-exceptions/) for late, partial or
failed supplier deliveries, and [Odoo integrations](/blog/2026/08/08/erp-integrations-connecting-your-systems/) for
connecting marketplaces and external order channels.

## Official reference

[Odoo 20 documentation: Dropshipping](https://www.odoo.com/documentation/20.0/applications/inventory_and_mrp/inventory/shipping_receiving/daily_operations/dropshipping.html)

*Updated on 17 November 2026 using the official Odoo 20 documentation. The workflow examples are illustrative and
should be demonstrated in the installed edition before go-live.*

## Getting the workflow reviewed

If your order, supplier and delivery records do not agree, see my [Odoo consulting services](/services/odoo-consulting/)
for help mapping and testing the workflow.
