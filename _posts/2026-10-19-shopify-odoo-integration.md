---
layout: post
title: "Shopify and Odoo 19: A Practical Integration Guide"
date: 2026-10-19 08:00:00 +0530
tags: [Odoo, Odoo 19, Shopify, eCommerce, Integration, Inventory Management, Sales, Accounting]
hub: integrations
description: "Connect Shopify to Odoo 19 with a clear source of truth for products, orders, inventory and fulfillment. Includes Odoo.sh limits, mapping decisions and a go-live checklist."
faqs:
  - q: "Does the Odoo 19 Shopify connector work on Odoo Online?"
    a: "Odoo's documented Shopify connector requires Odoo.sh and Odoo 19. If you use Odoo Online, confirm the hosting limitation before choosing another connector or redesigning the integration."
  - q: "Does Shopify sync to Odoo in real time?"
    a: "The documented Odoo 19 connector uses scheduled actions, not webhooks. Orders and deliveries are synchronized on an interval, so the integration is not instantaneous."
  - q: "Which system should own product and inventory data?"
    a: "Choose one system as the authority for each field. A common setup keeps product master data and available stock in Odoo, while Shopify owns storefront content and checkout. Map SKUs and locations before enabling two-way stock updates."
---

Shopify is a strong storefront, and Odoo is built to run the operational work behind an order. Connecting them can remove re-keying, but only if the business agrees which system owns products, stock, fulfillment, taxes and customer communication. The connector is the last step in that design, not a substitute for it.

This guide covers the documented Odoo 19 Shopify connector. It is intended for businesses already using Shopify that want Sales and Inventory activity recorded in Odoo. For a new store, compare the cost of keeping Shopify with Odoo's own eCommerce before adding another system.

## What the Odoo connector synchronizes

Odoo's connector can import confirmed orders, customers and products from Shopify. Inventory and fulfillment can move in both directions. Invoices and payments can be created in Odoo, while returns and refunds can be brought across from Shopify. The precise behavior depends on configuration, especially on which platform handles delivery.

There are two broad fulfillment patterns:

1. **Odoo handles delivery.** An imported Shopify order becomes a confirmed Odoo sales order and creates an Odoo delivery. The warehouse processes it in Inventory, then fulfillment details are sent to Shopify for customer notifications.
2. **Shopify handles delivery.** Shopify fulfills the order. Odoo imports the fulfillment information, including the carrier and tracking details, so the operational record is visible in Odoo.

The documented connector runs scheduled actions. Odoo's guide describes order and delivery synchronization at ten-minute intervals by default. This is frequent enough for many stores, but it is not a live event stream. A customer may see an order in Shopify before the corresponding Odoo record appears.

The connector also has scope limits. For example, returns started in Shopify are synchronized, but a return initiated in Odoo is not automatically sent back to Shopify in the same way. Agree how staff will handle exceptions before launch.

## Check hosting and prerequisites first

Odoo's documented Shopify integration for version 19 requires Odoo.sh. It also requires an active Shopify store, the Shopify connector app, and the Sales app. The connector setup uses a Shopify app and credentials. For stores created on or after January 1, 2026, Odoo's setup guide requires OAuth; older stores may use a self-access token.

Confirm these points before planning the build:

- Your Odoo hosting supports the connector you intend to use.
- Someone with Shopify administrator access can authorize the app.
- Your product catalog has stable, unique SKUs.
- Warehouses and stock locations in Odoo correspond to Shopify locations.
- Your finance team has decided how taxes, payment records, refunds and marketplace fees will be recorded.
- The person responsible for fulfillment knows whether the warehouse or Shopify will mark orders shipped.

The exact application and hosting requirements can change by version. Confirm them against Odoo's current [Shopify connector setup guide](https://www.odoo.com/documentation/19.0/applications/sales/sales/shopify_connector/setup.html) before starting.

## Decide the data rules before connecting

### Product matching

Odoo matches Shopify products using the Shopify SKU and Odoo's internal reference. A blank or reused SKU creates ambiguity. Clean the catalog first, including product variants, units of measure, barcode, sales taxes and product type. Odoo's documented import flow treats Shopify variants as separate products rather than rebuilding Odoo attribute lines automatically, so verify how each variant should appear in Odoo.

Decide whether new items may be created by the connector or whether every product must first be approved in Odoo. For a controlled catalog, create products in Odoo, assign the SKU as the internal reference, and map Shopify offers to them. This helps prevent duplicate products and incorrect stock updates.

### Inventory ownership

Write down which Odoo locations supply each Shopify location. If multiple stores share the same Odoo location, they are reading from the same pool. That can be intentional, but it should be a deliberate decision. If they need separate availability, create and map separate locations.

Decide whether to push stock from Odoo to Shopify, pull it from Shopify, or use each direction only for a defined setup or correction task. Two systems changing the same stock quantity without a rule can create oscillating balances. Your rule should also state whether the value is on hand, forecasted, reserved, or a sellable quantity after a safety buffer.

### Taxes, invoices and payments

Shopify checkout and Odoo accounting need to agree on tax treatment. Configure product taxes and fiscal positions in Odoo, and test an order with shipping, discounts, multiple tax rates and a refund. Decide whether Odoo creates invoices and registers payments for paid orders, or whether accounting handles those steps after reviewing the order.

The Shopify payment gateway payout is usually a settlement for many orders, less fees and adjustments. A payment record on an individual order does not by itself reconcile the bank payout. Set up the appropriate journals, clearing accounts and fee process with the accountant.

## A safe rollout sequence

1. Export the Shopify catalog and compare it with Odoo products. Resolve duplicate or missing SKUs.
2. Configure one store and a small set of product and location mappings.
3. Choose the delivery mode and document which team validates each fulfillment.
4. Test representative cases: a normal paid order, an unpaid order, a partial delivery, a cancellation, a refund, a tax variation and an order with multiple variants.
5. Compare order totals, taxes, shipping, stock movements and payment records across both systems.
6. Run the connector in a controlled pilot, review its synchronization logs, and only then expand the product range or store count.

For each test, record the expected result and who resolves a mismatch. A useful acceptance check is that an order can be traced from Shopify checkout through Odoo sale, picking, invoice and settlement without entering the same business fact twice.

## What to monitor after go-live

Check synchronization timestamps and error logs each day during the first weeks. Reconcile the number and value of Shopify orders against Odoo. Investigate unmatched SKUs, orders cancelled after delivery creation, stock discrepancies and differences caused by rounding. Odoo notes that small currency differences can occur because Shopify and Odoo may round differently.

Keep a simple owner for each exception: sales for customer or pricing issues, warehouse for fulfillment, and finance for taxes and settlement. An integration becomes reliable when people can see failures and correct them without quietly changing both databases by hand.

Planning a Shopify and Odoo rollout? See [Odoo implementation](/services/odoo-implementation/) or [Odoo consulting](/services/odoo-consulting/).

Based on the official [Odoo 19 Shopify Connector documentation](https://www.odoo.com/documentation/19.0/applications/sales/sales/shopify_connector.html), [configuration guide](https://www.odoo.com/documentation/19.0/applications/sales/sales/shopify_connector/setup.html), and [order management guide](https://www.odoo.com/documentation/19.0/applications/sales/sales/shopify_connector/manage.html). A plain-English guide, not a replacement for the docs.
