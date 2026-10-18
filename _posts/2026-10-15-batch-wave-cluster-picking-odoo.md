---
layout: post
title: "Batch, Wave and Cluster Picking in Odoo 19 (Step by Step)"
date: 2026-10-15 09:00:00 +0530
tags: [Odoo, Odoo 19, Setup, Inventory, Warehouse Management, Logistics, Distribution, Barcode]
hub: inventory
description: "Set up batch, wave and cluster picking in Odoo 19: settings, manual and automatic batches, waves from move lines, totes for cluster picks and Barcode."
faqs:
  - q: "What is the difference between batch, wave and cluster picking in Odoo?"
    a: "A batch groups whole transfers so one person picks several orders in one trip, then sorts them. A wave takes only some lines from several transfers, such as everything in one zone or category, by splitting the transfers first. Cluster picking is a batch where each order goes into its own tote as it's picked, so there's no sorting afterwards."
  - q: "Why isn't Odoo creating automatic batches?"
    a: "Odoo only batches transfers that are Ready, meaning their stock is reserved, and the operation type needs Automatic Batches plus at least one grouping option. The Maximum lines and Maximum transfers limits can also keep a transfer out of a batch."
  - q: "Is batch picking available in Odoo Community?"
    a: "Yes. Batch, wave and cluster transfers are part of Inventory in both editions of Odoo 19. Only the Barcode app, which lets pickers scan a batch on a mobile device, is Enterprise only."
---

**Short answer:** in Odoo 19, tick **Batch, Wave & Cluster Transfers** (with **Storage Locations** and **Multi-Step
Routes**) in **Inventory ‣ Configuration ‣ Settings**. Group whole transfers into a batch with **Prepare Batch** or
**Actions ‣ Add to batch**, or let the operation type build batches automatically. Build a wave from individual lines
with **Prepare Wave**. For cluster picking, also turn on **Packages** and give each order its own reusable tote as you
pick. All of this is in Community; scanning batches in the Barcode app is Enterprise only.

This is the setup guide. For why picking strategy matters at all, start with my explainer on
[warehouse management with ERP](/blog/2026/07/24/warehouse-management-with-erp/).

## Applies to

- **Odoo version:** Odoo 19. I also checked the Odoo 20 documentation and code. In Odoo 20, batch transfers are part
  of the core Inventory module instead of a separate one, operation types get a **Batch Creation** field (**Manual
  Only** or **Automatic**) in place of the **Automatic Batches** tick box, waves can also be grouped by date, the
  documentation calls the batch's **Check Availability** button **Reserve**, and **Dispatch Management System** is
  renamed **Transport Management**.
- **Edition:** Community and Enterprise for batch, wave and cluster transfers. The **Barcode** app is Enterprise only;
  in Community its setting shows an upgrade prompt.
- **Apps:** Inventory; Barcode if you scan; Fleet if you use dispatch management.

## Before you start

1. **Use multi-step delivery.** Batches and waves are designed for the pick step, so set the warehouse's **Outgoing
   Shipments** to two or three steps in **Inventory ‣ Configuration ‣ Warehouses**. Cluster batches also work with
   one-step delivery.
2. **Name locations in walking order.** A batch's detailed lines are sorted by location name, so racks named `A-01`,
   `A-02` and so on give pickers a sensible route.
3. **Reservation matters.** Automatic batching only picks up transfers that are **Ready**, so check that stock is
   reserved when you expect it to be.
4. **Decide the method per operation type** before switching on any automation.

## Step by step

1. **Turn on the features.** In **Inventory ‣ Configuration ‣ Settings**, under **Operations**, tick **Batch, Wave &
   Cluster Transfers** (and **Packages** for cluster picking). Under **Warehouse**, tick **Storage Locations** and
   **Multi-Step Routes**. Click **Save**.
2. **Create a batch by hand.** On the Inventory Overview, open the vertical ellipsis on an operation card such as
   **Pick** and choose **Prepare Batch**. Set **Responsible** (leave it blank if anyone can pick), **Operation Type**
   and **Scheduled Date**, then use **Add a line** on the **Transfers** tab to choose transfers. Click **Confirm**.
   From any transfers list you can also select transfers and use **Actions ‣ Add to batch**, choosing a new or
   existing batch, a **Responsible**, a **Description** and, if it isn't ready yet, **Draft**.
3. **Let Odoo build batches.** Open **Inventory ‣ Configuration ‣ Operation Types**, then **Pick** (or **Delivery
   Orders**). In **Batch & Wave Transfers**, tick **Automatic Batches** and choose a **Batch Grouping**: **Contact**,
   **Destination Country**, **Source Location**, **Destination Location**, or **Carrier** once delivery methods are
   installed. Set **Maximum lines** and/or **Maximum transfers**. **Auto-confirm**, on by default, makes new batches
   ready to work; untick it to keep them in draft. When a transfer becomes Ready, Odoo adds it to an open batch
   that matches, or starts a new one.
4. **Create a wave.** On the operation card's ellipsis menu, choose **Prepare Wave**. The pop-up lists move lines
   grouped by source location; filter by product or location, tick the lines and click **Add to Wave**, then choose
   a new or existing wave and a **Responsible**. Odoo splits the transfers so only those lines go into the wave. A
   wave can only hold lines from one operation type. For automatic waves, tick **Automatic Batches** on the operation
   type and choose a **Wave Grouping**: **Product**, **Product Category** (pick the categories) or, in the 19.0 code
   though not yet in the documentation, **Location**.
5. **Prepare totes for cluster picking.** In **Inventory ‣ Configuration ‣ Package Types**, create a type such as
   "Picking tote" with **Package Use** set to **Reusable Box (totes)**. Then create one package per tote in
   **Inventory ‣ Products ‣ Packages**, for example `TOTE-01`.
6. **Process the batch.** Open **Inventory ‣ Operations ‣ Batch Transfers** and the batch. The **Operations** tab lists
   products and quantities; the **Moves** smart button opens the detailed operations, one line per product and
   location. For cluster picking, set each line's **Destination Package** to that order's tote. Click **Validate**.
   If you picked less than was reserved, Odoo asks whether to **Create Backorder**; transfers you didn't validate
   leave the batch.
7. **Or scan it (Enterprise).** In the **Barcode** app, go to **Operations**, choose the operation type and open the
   batch. Lines are grouped by location and colour-coded by order, and a tote assigned to an order shows in italics
   under the product. Scan the location, product and tote, then **Validate**.

## Which method fits?

| Method | Fits | Trade-off |
|---|---|---|
| One transfer at a time | Few orders, or big orders with many lines | The most walking |
| Batch | Many small orders for popular products, stable demand | A sorting step after picking |
| Cluster | Many small orders of items that fit a tote | Totes and carts; batches prepared in advance; urgent orders can't jump the queue |
| Wave | High volume where orders share products, categories or zones | Transfers are split, then sorted |

## Worked example: a distributor's morning picking

An illustrative food and drinks distributor uses two-step delivery (**Pick**, then **Delivery Orders**). By 7:00 about
60 orders are confirmed, most with four to eight lines, and four vans leave at 10:00.

| Setting | Value |
|---|---|
| Pick: Automatic Batches | Ticked |
| Batch Grouping | Source Location |
| Maximum transfers | 8 |
| Auto-confirm | Ticked |
| Package type | Picking tote, **Reusable Box (totes)** |
| Packages | `TOTE-01` to `TOTE-08` |

- **Why Source Location:** every pick starts in `WH/Stock`, so this grouping fills the open batch with Ready picks until
  it holds eight, then starts the next. Sixty orders make eight batches: seven of eight and one of four.
- **Cluster picking:** each picker takes a cart with eight totes, opens their batch and walks the lines in location
  order, putting each order's items in its own tote. That's eight walks round the racks instead of sixty.
- **A wave for the heavy items:** 20-litre water jars sit in a floor bay. The supervisor uses **Prepare Wave**,
  filters by the jar product and sends every jar line to the pallet-truck driver as one wave. Odoo splits those lines
  out of each pick; the rest stays in its batch.
- **Loading:** at packing, items are already separated by order. For loading, the dispatcher can set each delivery's
  carrier to its van and add each van's deliveries to a batch, as the dispatch documentation describes.

## What you should see

- The **Pick** card on the Inventory Overview shows a **Batches** button with a count, and a **Waves** count once
  waves exist.
- **Inventory ‣ Operations ‣ Batch Transfers** and **Wave Transfers** list them, with each one's responsible person.
- Each pick in a batch has a **Batch** smart button.
- In the batch's detailed operations, each line shows its tote under **Destination Package**.

## Troubleshooting

**"If the Automatic Batches feature is enabled, at least one 'Group by' option must be selected."**
Tick at least one batch or wave grouping on the operation type.

**Transfers don't join automatic batches.**
Only Ready transfers are batched. Check reservation, that the grouping field matches (two picks for different
contacts never share a **Contact** batch), and the **Maximum lines** and **Maximum transfers** limits.

**A batch grows while someone is picking it.**
With **Auto-confirm** on, Odoo also adds Ready transfers to batches already in progress. Set a limit, or untick
**Auto-confirm** so transfers only join draft batches.

**Source Location or Destination Location grouping is missing.**
These need **Storage Locations** and a default source or destination location on the operation type.

**Carrier grouping is missing.**
It appears once delivery methods are installed (**Delivery Methods** in the Inventory settings).

**Lines are missing from the detailed operations.**
Only reserved quantities appear there. Check the **Operations** tab and click **Check Availability**.

**No Batch & Wave Transfers section on an operation type.**
It only shows on receipt, delivery and internal operation types, and only with the setting enabled.

## Related setup

- [How to set up a warehouse and storage locations in Odoo 19](/blog/2026/09/23/how-to-set-up-warehouse-locations-odoo/)
- [Shipping and receiving in Odoo](/blog/2026/08/14/shipping-and-receiving-in-odoo/)
- [Barcode in Odoo](/blog/2026/09/10/odoo-barcode/)
- [Backorders in Odoo 19](/blog/2026/10/13/backorders-odoo/)
- [Moving stock between branches: inter-warehouse resupply in Odoo](/blog/2026/10/15/inter-warehouse-resupply-odoo/)
- [Removal strategies in Odoo: FIFO, LIFO and FEFO](/blog/2026/08/14/removal-strategies-fifo-lifo-fefo-in-odoo/)
- Redesigning picking for a busy warehouse? See [Odoo implementation](/services/odoo-implementation/).

## Official references

- Odoo 19 documentation: [Batch picking](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/shipping_receiving/picking_methods/batch.html)
- Odoo 19 documentation: [Wave transfers](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/shipping_receiving/picking_methods/wave.html)
- Odoo 19 documentation: [Cluster picking](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/shipping_receiving/picking_methods/cluster.html)
- Odoo 19 documentation: [Packages](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/product_management/configure/package.html)
- Odoo 19 documentation: [Operation types](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/warehouses_storage/inventory_management/operation_type.html)
- Odoo 19 documentation: [Two-step delivery](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/shipping_receiving/daily_operations/receipts_delivery_two_steps.html)
- Odoo 19 documentation: [Process batch transfers in Barcode](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/barcode/operations/process_transfers.html)
- Odoo 19 documentation: [Dispatch management system](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/shipping_receiving/setup_configuration/dispatch.html)

*How this guide was checked: menu paths, field names and behaviour were checked against the Odoo 19 documentation
and the batch transfer code in Odoo 19 (operation type grouping, automatic batching and waves, the batch form and the
carrier grouping) in October 2026. The worked example is illustrative and wasn't run on a live database, so there are
no screenshots; labels can vary slightly with your installed apps and language.*

If picking is the bottleneck in your mornings, I can help you choose the method and set it up around your
warehouse. See [Odoo implementation](/services/odoo-implementation/).
