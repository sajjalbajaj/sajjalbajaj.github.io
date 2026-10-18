---
layout: post
title: "Amazon Orders in Odoo 19: FBA, FBM, Stock and Reconciliation"
date: 2026-10-19 10:00:00 +0530
tags: [Odoo, Odoo 19, Amazon, eCommerce, Inventory Management, Sales, Accounting, Integration]
hub: integrations
description: "Understand what Odoo 19's Amazon connector synchronizes for FBA and FBM, how to map products and stock, and what still needs a separate finance process."
faqs:
  - q: "Does Odoo's Amazon connector sync Amazon fees and refunds?"
    a: "Odoo documents the connector primarily for sales orders and fulfillment. It does not download monthly fee reports or manage disputes and refunds, which remain in Amazon Seller Central or a separate accounting process."
  - q: "How are FBA and FBM stock handled in Odoo?"
    a: "Amazon manages fulfillment and stock for FBA, which Odoo can track through an Amazon location. For FBM, the merchant fulfills the order and Odoo Inventory can manage and synchronize available quantities with Amazon."
  - q: "Can the Odoo Amazon connector support several seller accounts?"
    a: "Odoo's documented connector supports multiple seller accounts and multiple marketplaces per seller account. Confirm the marketplace list and tax and settlement setup for your business before enabling each account."
---

If your business sells through Amazon and also uses Odoo, importing the order is only one part of the job. The company still needs a clear view of which stock Amazon holds, which orders the warehouse must ship, what Amazon has already fulfilled, and how marketplace settlements reach the accounts.

Odoo 19 includes an Amazon connector in the Sales app. It synchronizes orders and related order lines, including product quantities and certain shipping or gift-wrapping charges. It can notify Amazon when an FBM shipment is confirmed in Odoo, synchronize available quantities for FBM products, and support multiple seller accounts and marketplaces. The connector does not replace Seller Central for every marketplace task.

## First understand FBA and FBM

The fulfillment model changes how Odoo should be configured.

**Fulfilled by Amazon (FBA):** Amazon stores and ships the stock. Odoo records stock movements in an Amazon location so the business can follow inventory sent to and held by Amazon. Odoo receives shipped or cancelled FBA orders according to Amazon's status. Amazon handles delivery and customer notifications. When replenishing Amazon, the business should record the transfer from its own warehouse to the Amazon location in Odoo.

**Fulfilled by Merchant (FBM):** the business stores and ships the product. Odoo can manage available stock in Inventory, create a delivery order when the sales order is synchronized, and notify Amazon after shipment is validated. The Amazon listing and the Odoo product need to refer to the same sellable item and quantity.

The distinction matters because an FBA shipment is not a normal delivery from your own warehouse to the end customer. If staff treat it that way, stock may be reduced twice or the warehouse may try to ship an order Amazon already fulfilled.

## Prepare the product catalog

Before connecting an account, identify the Amazon SKU or offer and its matching Odoo product. The product should have a stable internal reference, correct product type, sales taxes, income account and stock valuation settings. Decide how bundles and kits are represented, and test lot or serial tracking if it applies to the product.

Review the exact marketplaces you intend to synchronize. Odoo lists supported marketplaces and allows adding a marketplace when it is not in the default list, but a connector being technically able to sync orders does not determine local tax obligations, invoicing rules or product compliance. Confirm those with the relevant finance and compliance advisers.

## Configure orders and fulfillment

The documented setup is in Sales configuration under Connectors, where Amazon synchronization is enabled and seller accounts are linked. For each account, set the company, order follow-up, sales team and marketplaces deliberately. Run the initial sync with a small sample before enabling every store or marketplace.

Orders are fetched on a schedule. Odoo uses order status changes to determine which orders to synchronize: for FBA, shipped and cancelled orders; for FBM, unshipped and cancelled orders. If a shipment fails to synchronize, the record can be investigated and retried after correcting the issue. Train the team to review synchronization status rather than entering a second copy of the order manually.

For FBM, confirm the route from order to delivery: Odoo order, reservation, picking, package, carrier and shipment confirmation back to Amazon. Test partial quantities and cancelled orders. For FBA, record stock sent to Amazon and follow the Amazon stock location; use the stock move history to investigate differences.

## Keep accounting outside the connector's assumptions

The connector records sales activity, but marketplace settlement accounting needs its own design. Amazon payouts may combine many orders, deduct commissions, fulfillment fees, advertising, refunds, reserves or other adjustments. The bank deposit will not normally match a single order invoice.

Agree how the finance team will record:

- Gross sales and tax by marketplace.
- Amazon commissions and fulfillment charges.
- Refunds, chargebacks and reimbursements.
- Currency conversion and settlement differences.
- Payouts as they clear the bank.

A common approach uses a marketplace clearing account and reconciles each settlement report to the related orders, fees and bank transfer. The correct chart of accounts and tax treatment depend on the countries and legal entities involved. Odoo's connector documentation says monthly fee reports, disputes and refunds must be managed in Seller Central or through a separate process, so do not assume that an order sync completes this accounting work.

## A practical test checklist

Before go-live, test one normal FBA order, one FBM order, a cancelled order, a partial shipment, a product with multiple units, and an order with shipping or gift wrap. Compare order lines, customer details available from Amazon, tax amounts, delivery status and stock movements. Then match a real settlement report to the proposed journal entries using sample or historical data.

Also decide who watches connector errors, who can trigger a manual resynchronization, and how the team will avoid duplicating an order while a retry is pending. A useful daily control is to compare Amazon's order count and order value with Odoo's imported orders, then separately reconcile inventory and settlement records.

The Odoo 19 connector is a useful operational bridge between Amazon and Odoo. It is not a full marketplace back office: use Seller Central for the marketplace activities that the connector does not handle, and design a separate, documented accounting reconciliation.

For help fitting marketplace flows into your operations, see [Odoo implementation](/services/odoo-implementation/).

Based on the official [Odoo 19 Amazon connector features](https://www.odoo.com/documentation/19.0/applications/sales/sales/amazon_connector/features.html), [configuration](https://www.odoo.com/documentation/19.0/applications/sales/sales/amazon_connector/setup.html), and [order management](https://www.odoo.com/documentation/19.0/applications/sales/sales/amazon_connector/manage.html) documentation. A plain-English guide, not a replacement for the docs.
