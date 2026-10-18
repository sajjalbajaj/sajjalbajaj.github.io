---
layout: post
title: "Backorders in Odoo 19: Partial Deliveries and Receipts"
date: 2026-10-13 08:00:00 +0530
tags: [Odoo, Odoo 19, Setup, Inventory, Inventory Management, Warehouse Management, Logistics, Distribution]
hub: inventory
description: "How backorders work in Odoo 19: partial deliveries and receipts, Ask, Always or Never, shipping policy, closing a backorder, and the effect on invoicing."
faqs:
  - q: "What happens when I click No Backorder in Odoo?"
    a: "Odoo validates the quantities you entered and cancels the rest of the demand on that transfer. The order keeps its original quantity but shows the lower delivered or received figure, and for a customer delivery Odoo also schedules an exception activity on the sales order for its salesperson."
  - q: "How do I stop Odoo asking about backorders every time?"
    a: "Open the operation type in Inventory, Configuration, Operations Types and change Create Backorder from Ask to Always or Never. Always creates the backorder without asking; Never cancels the remaining quantity without asking."
  - q: "Does Odoo invoice the whole order if only part was delivered?"
    a: "Only if the product's invoicing policy is Ordered quantities. With Delivered quantities, the invoice follows what has actually been delivered, so a partial delivery gives a partial invoice and the backorder is invoiced when it ships."
---

**Short answer:** in Odoo 19, when you validate a delivery or receipt with less than the demand, Odoo asks whether
to **Create Backorder** (a new transfer for the rest, linked to the original) or **No Backorder** (the rest is
cancelled). Each operation type decides whether Odoo asks, always creates the backorder or never does. On sales
orders, the **Shipping Policy** decides whether the warehouse ships what's available straight away or waits for
everything. What you invoice then depends on the product's invoicing policy: ordered or delivered quantities.

This is the hands-on guide. For how inbound and outbound flows fit together, start with my explainer on
[shipping and receiving in Odoo](/blog/2026/08/14/shipping-and-receiving-in-odoo/).

## Applies to

- **Odoo version:** Odoo 19. I also checked the Odoo 20 documentation, where the operation type and backorder pages
  read the same. The Odoo 20 code renames the first shipping policy option to **As soon as possible, with back
  orders** and turns the default into a company-wide **Shipping Policy** setting in Inventory that also applies to
  operation types. The Odoo 20 lead times page also renames **Customer Lead Time** to **Delivery Time**.
- **Edition:** Community and Enterprise. Everything here is in the Inventory, Sales and Purchase apps of both.
- **Apps:** Inventory, plus Sales for customer deliveries and Purchase for vendor receipts.

## Before you start

1. **Decide your invoicing policy.** Odoo 19's default is **Invoice what is ordered** (**Sales ‣ Configuration ‣
   Settings**, **Invoicing** section). That setting only applies to new products; existing products keep the
   **Invoicing Policy** on their **General Information** tab. If you often ship part of an order, **Delivered
   quantities** is usually the safer choice.
2. **Check the bill control policy.** On a product's **Purchase** tab, **Control Policy** defaults to **On received
   quantities** for goods, so vendor bills follow what actually arrived.
3. **Agree who decides.** Someone has to choose between a backorder and closing the shortfall. If the answer is
   always the same for an operation, set it on the operation type so nobody has to think about it.

## Step by step

1. **Set the default shipping policy.** In **Inventory ‣ Configuration ‣ Settings**, the **Operations** section has
   a **Picking Policy** setting ("When to start shipping") with two options: **Ship products as soon as available,
   with back orders** (the default) and **Ship all products at once**. It sets the policy for new sales orders and
   only appears when Sales is installed.
2. **Override it per order.** On a quotation, open **Other Info** and set **Shipping Policy** to **As soon as
   possible** or **When all products are ready**. Do this before confirming: the field locks once the quotation
   becomes a sales order. With **When all products are ready**, the delivery stays **Waiting** until every line can
   be reserved, and its scheduled date follows the longest product lead time instead of the shortest.
3. **Set the backorder behaviour per operation type.** Go to **Inventory ‣ Configuration ‣ Operations Types**, open
   **Delivery Orders**, then **Receipts**, for each warehouse, and set **Create Backorder**:
   - **Ask** (default): Odoo shows a **Create Backorder?** pop-up when you validate less than the demand.
   - **Always:** the backorder is created without asking.
   - **Never:** the remaining quantity is cancelled without asking.
4. **Ship part of an order.** Open the delivery, enter the **Quantity** you're actually sending on each line (leave
   a line at 0 if none of it goes), and click **Validate**.
5. **Choose.** The pop-up says you have processed less than the initial demand. Click **Create Backorder** if the
   rest will follow, or **No Backorder** if it won't.
6. **Receive part of a purchase.** The same steps work on a receipt: enter what arrived, validate, then choose.
7. **Close a backorder you won't fulfil.** Open the backorder transfer and click **Cancel**. For a customer
   delivery, then check the invoicing policy, as the worked example below shows.

## Worked example: a distributor short on one product

A hardware distributor confirms a sales order for **100 boxes of wood screws** and **40 door hinges**. The Shipping
Policy is **As soon as possible** and both products use **Delivered quantities**. Only 70 boxes of screws are in
stock; a purchase order for 200 boxes is due from the supplier on Friday.

| When | What happens in Odoo |
|---|---|
| Monday | The picker enters 70 screws and 40 hinges, validates and clicks **Create Backorder**. A new delivery for 30 screws appears, with **Back Order of** pointing to the first. |
| Monday | The sales order shows **Delivered** 70 and 40. **Create Invoice** invoices 70 boxes and 40 hinges. |
| Friday | The supplier sends 150 boxes. The receiver enters 150, validates and creates a backorder for 50. The purchase order line shows **Received** 150, and a bill on received quantities is for 150. |
| Friday | The 30-box customer backorder can now be reserved, shipped and invoiced as a second invoice. |
| Later | The supplier says the last 50 boxes are discontinued. The buyer cancels the receipt backorder. |

Had the customer only wanted what was available, the picker would have clicked **No Backorder** on Monday. The 30
boxes would be cancelled, the sales order would show **Delivered** 70, and its **Delivery Status** would read
**Fully Delivered**, because nothing is left to ship. With **Delivered quantities**, invoicing the 70 boxes then
marks the order **Fully Invoiced**.

With **Ordered quantities** it's different: Odoo still proposes to invoice all 100. Before invoicing, lower the
line's ordered quantity to 70 (Odoo won't let you go below what's been delivered), or issue a credit note if the
invoice has already gone out.

Receipts behave the same way. A cancelled receipt backorder leaves the purchase order's **Received** at what
actually arrived, and its **Receipt Status** shows **Fully Received** because nothing is left open. If you use
reordering rules, the cancelled quantity no longer counts as incoming, so the next run proposes a new order if
stock is below Min.

## What you should see

- A chatter message on the original transfer: "The backorder ... has been created", with a link.
- A **Back Order of** field on the new transfer, and a **Back Orders** link with a count on the operation's card in
  the Inventory **Overview**.
- A **Backorders** filter on the transfer lists, showing open transfers created from partial validations.
- On the sales order: the **Delivery** smart button counts both transfers, and **Delivery Status** reads
  **Partially Delivered** while the backorder is open.
- After **No Backorder** on a customer delivery: an exception activity on the sales order for the salesperson,
  summarising what was actually delivered.

## Troubleshooting

**The backorder pop-up never appears.**
The operation type's **Create Backorder** is **Always** or **Never**. Check it in **Inventory ‣ Configuration ‣
Operations Types**.

**The delivery is stuck in Waiting although some stock is available.**
The order uses **When all products are ready**. Change **Shipping Policy** on the delivery's **Additional Info** tab
to **As soon as possible** if the customer accepts a part shipment.

**The customer was invoiced for goods that never shipped.**
The product uses **Ordered quantities**. Issue a credit note for the missing quantity, and switch products you
often ship partially to **Delivered quantities**.

**A new delivery appeared after editing the sales order.**
Once a backorder is cancelled, Odoo counts only the delivered quantity as already supplied. Changing the line's
quantity to anything above the delivered figure creates a delivery for the difference. Set it to the delivered
quantity instead.

**A receipt backorder lingers for goods the vendor will never send.**
Cancel it. Until you do, it counts as incoming stock in forecasts and reordering rules.

## Related setup

- [How to set up the sales workflow in Odoo 19](/blog/2026/09/23/how-to-set-up-sales-workflow-odoo/)
- [Invoicing policies in Odoo Sales](/blog/2026/08/19/invoicing-policies-in-odoo-sales/)
- [Odoo Purchase: from RFQ to purchase order](/blog/2026/08/16/odoo-purchase-from-rfq-to-purchase-order/)
- [Vendor bills and three-way matching in Odoo](/blog/2026/08/17/vendor-bills-and-three-way-matching-in-odoo/)
- [How to set up reordering rules in Odoo 19](/blog/2026/09/23/how-to-set-up-reordering-rules-odoo/)

## Official references

- Odoo 19 documentation: [Operation types](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/warehouses_storage/inventory_management/operation_type.html)
- Odoo 19 documentation: [Multi-package shipments (backorders section)](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/shipping_receiving/setup_configuration/multipack.html)
- Odoo 19 documentation: [Lead times (shipping policy)](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/warehouses_storage/replenishment/lead_times.html)
- Odoo 19 documentation: [Invoicing policies](https://www.odoo.com/documentation/19.0/applications/sales/sales/invoicing/invoicing_policy.html)
- Odoo 19 documentation: [Control policies](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/purchase/manage_deals/control_bills.html)

*How this guide was checked: menu paths, field names and behaviour were checked against the Odoo 19 documentation
and the Odoo 19 code for transfers, the backorder wizard, sales order delivery and invoice status, and purchase
receipts, in October 2026. The worked example is illustrative and wasn't run on a live database, so there are no
screenshots; labels can vary slightly with your installed apps and language.*

If partial shipments are tangling your invoicing or stock figures, I can help you set the right policies per
operation and product. See [Odoo implementation](/services/odoo-implementation/).
