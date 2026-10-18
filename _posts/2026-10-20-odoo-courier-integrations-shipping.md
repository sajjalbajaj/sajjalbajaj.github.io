---
layout: post
title: "Courier Integration in Odoo: Rates, Labels, Tracking and Indian Shipping"
date: 2026-10-20 08:00:00 +0530
tags: [Odoo, Odoo 19, Inventory, Shipping, Shiprocket, eCommerce, Integration, Logistics]
hub: integrations
description: "Set up courier shipping in Odoo 19 from rate calculation to labels and tracking. Covers Shiprocket in India, carrier credentials, package data and safe testing."
faqs:
  - q: "Can Odoo connect to Shiprocket in India?"
    a: "Odoo 19 documents a Shiprocket connector. It can calculate shipping costs, charge the Shiprocket account, and generate shipment labels in Odoo when configured for Get Rate and Create Shipment."
  - q: "Does adding a courier to Odoo create a real shipment?"
    a: "In the test environment, Odoo's documentation says generated shipments are cancelled immediately. In production mode, labels are real and may incur carrier charges. Validate the process before switching modes."
  - q: "What data does Odoo need to calculate courier rates?"
    a: "At minimum, keep the warehouse and customer addresses accurate and maintain product weights. The carrier may also require package dimensions, phone numbers, service selection and other account-specific information."
---

When shipping is handled by email and a separate courier portal, warehouse staff copy addresses, weigh packages twice and paste tracking numbers into customer messages. A carrier integration can move those steps into Odoo: calculate a rate, add a delivery charge, create a shipment label, and store the tracking reference on the delivery.

Odoo 19 supports several carrier connectors. The available list varies by region and includes Shiprocket for India, plus providers and aggregators such as DHL Express, UPS, FedEx, Sendcloud and EasyPost in their supported markets. The presence of a connector does not guarantee a particular service, rate or pickup is available for every pin code or product.

## Decide what the integration should do

Odoo delivery methods can support different levels of automation:

- **Rate only:** request an estimated price and add it to a quotation or eCommerce order.
- **Rate and shipment:** calculate the charge and create the shipment, label and tracking data when the delivery is processed.
- **Manual carrier process:** choose a flat or rule-based delivery method, while staff create the shipment in the carrier portal and enter tracking back into Odoo.

Choose the smallest level that removes a real manual step. If customers need a checkout quote, live rates may matter. If warehouse staff only need labels and tracking, rate calculation at checkout may add complexity without helping conversion.

## Configure the data that affects rates

The carrier calculates a shipment from addresses, package dimensions and weight, service rules and its own contract. In Odoo, start with:

1. **Warehouse address:** match the pickup address, phone and email registered with the courier.
2. **Customer delivery address:** validate name, phone, pin code and address fields before the order reaches dispatch.
3. **Product weight:** maintain realistic weight on product records, with a consistent unit of measure.
4. **Packaging:** decide how items are combined into parcels, which package sizes are allowed, and who confirms actual packed weight.
5. **Delivery product and pricing:** choose the Odoo product used for the shipping line and whether the customer sees a quoted charge, a margin, free-shipping rule or actual carrier cost.
6. **Company and warehouse scope:** define which legal entity and pickup location own the shipping method, especially in multi-company databases.

If packages have dimensions or volumetric weight, set a packing process that reflects the physical parcel. A rate based only on product weight can be wrong when the carrier bills by volumetric weight or minimum slab.

## Shiprocket setup for an Indian operation

Odoo's Shiprocket guide describes a sequence: create a Shiprocket account, create an API user with the required modules, add an Odoo sales channel in Shiprocket, enable the couriers, install the Shiprocket connector in Odoo, and configure a delivery method. Odoo can retrieve the available couriers and channels from Shiprocket. A courier priority can be selected in Shiprocket, for example choosing the lowest-cost eligible option.

For labels, set the integration level to **Get Rate and Create Shipment**. Add the Shiprocket email and API password, test the connection, and select the right package type and sales channel. Fill in valid contact details and weights before asking for a rate. When the delivery is validated, Odoo can generate the label and tracking information in the delivery record or chatter.

The important operational detail is that cancellation in Odoo archives a shipment in Shiprocket, but the cancellation is not necessarily sent to the courier. Staff may need to cancel it with the courier separately. Make that exception visible in the warehouse procedure.

## Test without buying labels by accident

Keep the delivery method in its test environment while validating the end-to-end process. Odoo warns that switching to production can create real shipping labels and charge the carrier account. Test with a sample address and product set, verify the rate, package dimensions, service, label, tracking reference and the delivery charge posted to the sales order. Compare a quote from Odoo with a shipment created directly on the provider's site.

Once the warehouse and finance teams approve the results, switch to production and create one controlled shipment. Confirm that the label scans, pickup request works if enabled, the carrier portal shows the correct service, and the tracking link reaches the customer. Then roll the method out to the relevant warehouses.

## Monitor failures and costs

Rate errors often come from invalid pin codes, missing weights, a mismatch between the warehouse address and carrier account, unsupported package dimensions, disabled services or credentials. Odoo can log requests and responses when debug logging is enabled. Limit access to those logs because they can contain addresses and integration details.

Reconcile courier invoices against Odoo shipment records on a regular cadence. Compare estimated rate, actual weight, service, surcharge and return-to-origin fees. Update delivery margins only after reviewing the data; otherwise small per-shipment differences become a recurring margin leak.

For help mapping shipping into your Odoo warehouse and sales process, see [Odoo implementation](/services/odoo-implementation/).

Based on the official [Odoo 19 third-party shipper guide](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/shipping_receiving/setup_configuration/third_party_shipper.html), [Shiprocket setup](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/shipping_receiving/setup_configuration/shiprocket.html), and [eCommerce delivery methods](https://www.odoo.com/documentation/19.0/applications/websites/ecommerce/shipping.html). A plain-English guide, not a replacement for the docs.
