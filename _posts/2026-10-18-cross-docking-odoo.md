---
layout: post
title: "Cross-Docking in Odoo: Receive and Ship Without Storing"
date: 2026-10-18 08:00:00 +0530
tags: [Odoo, Odoo 19, Inventory, Inventory Management, Warehouse Management, Logistics, Supply Chain, Distribution]
hub: inventory
description: "Cross-docking in Odoo 19: why the Crossdock route is gone, how MTO links each receipt to a waiting delivery, setup steps and a worked example."
faqs:
  - q: "Does Odoo 19 have a Crossdock route?"
    a: "No. Warehouses had one up to Odoo 18, and Odoo 19 removed it, keeping only a Cross Dock operation type (Input to Output) that no standard route uses. Buying against each sales order with Replenish on Order (MTO) is the standard way to move goods straight through."
  - q: "Will Replenish on Order use stock I already hold?"
    a: "No. Odoo's documentation says a replenishment order is always created when the sales order is confirmed, even if there is enough stock. That suits cross-docked goods, but not products you also sell from the shelf, so apply the route only where you mean it."
  - q: "Why is there no delivery order on my sales order yet?"
    a: "In Odoo 19 multi-step flows, each operation is created when the previous one is validated. With two-step deliveries, the sales order first shows only the pick; the delivery order appears once the pick is validated."
---

**Short answer:** Odoo 19 no longer has a ready-made Crossdock route: it existed up to Odoo 18 and was removed. The
standard way to cross-dock in Odoo 19 is to buy against each sales order. Tick **Replenish on Order (MTO)** on the
product, give it a vendor, and confirm the sales order. Odoo raises an RFQ for that order, and when the goods arrive
they're already reserved for the waiting pick, so your team moves them from the receiving dock to dispatch instead of
a shelf.

This is the setup guide. For how receipts and deliveries work in general, start with my explainer on
[shipping and receiving in Odoo](/blog/2026/08/14/shipping-and-receiving-in-odoo/).

## Applies to

- **Odoo version:** Odoo 19. I also checked the Odoo 20 documentation on replenish on order, routes and two-step flows,
  which reads the same as Odoo 19's. The Odoo 20 code has no Crossdock route either.
- **Edition:** Community and Enterprise. Routes, multi-step flows and Replenish on Order are part of the core
  Inventory app.
- **Apps:** Inventory, Purchase and Sales.
- **What happened to the Crossdock route:** up to Odoo 18, each warehouse had one, active when both receipts and
  deliveries used two or more steps. According to the change note in Odoo's source code, it was removed in Odoo 19
  because it misbehaved both ways: set on a product, it also diverted that product's ordinary purchases to dispatch,
  and set on one order line, it never reached the receipt. What remains is a **Cross Dock** operation type (sequence
  code XD, from `WH/Input` to `WH/Output`). Odoo activates it only when receipts and deliveries both use two or more
  steps, and no standard rule creates transfers of that type.

## Before you start

1. **Know what is pre-sold.** Cross-docking only works when each incoming unit already has a customer order waiting
   for it.
2. **Set up each product properly.** On the product form, **Product Type** is **Goods** with **Track Inventory**
   ticked, the **Purchase** box is ticked, and the **Purchase** tab has a vendor with a realistic **Lead Time**. The
   documentation is clear that Odoo can't raise an RFQ without a vendor.
3. **Choose the steps.** For a hub, I'd use **Receive and Store (1 step)** with **Pick then Deliver (2 steps)**. The
   receipt is the unloading, the pick is the sort into an outbound lane (`WH/Output`) and the delivery order is the
   loading. Two-step receipts add a Storage transfer (`WH/Input` to `WH/Stock`) that means nothing physically for
   cross-docked goods. Steps are set per warehouse, so a building that also needs two-step receipts for stocked goods
   either validates that Storage transfer straight away or runs the hub as its own warehouse.
4. **Decide how purchases are grouped.** By default each sales order gets its own RFQ. A hub that wants one RFQ per
   factory per day can change that on the vendor (step 6 below).

## Step by step

1. Go to **Inventory ‣ Configuration ‣ Settings**. In the **Warehouse** section, tick **Multi-Step Routes** (this also
   switches on **Storage Locations**). In the **Logistics** section, tick **Replenish on Order (MTO)**. Click **Save**.
2. Open **Inventory ‣ Configuration ‣ Warehouses** and choose the warehouse. On the **Warehouse Configuration** tab,
   set **Incoming Shipments** to **Receive and Store (1 step)** and **Outgoing Shipments** to **Pick then Deliver (2
   steps)**. Odoo creates the `WH/Output` location and the Pick operation by itself; don't edit the rules.
3. Open each cross-docked product (**Inventory ‣ Products ‣ Products**). On the **Inventory** tab, under
   **Operations**, tick **Replenish on Order (MTO)** in **Routes**. Don't look for a Buy route: in Odoo 19 it's hidden
   and applied automatically to products with a vendor. For a whole range, set the route on the category instead, in
   **Inventory ‣ Configuration ‣ Product Categories**, under **Logistics**.
4. **Optional, cross-dock only some orders:** in **Inventory ‣ Configuration ‣ Routes**, open **Replenish on Order
   (MTO)** and tick **Sales Order Lines** under **Applicable On**. Leave the route off the product. On a quotation,
   show the optional **Route** column and choose the route only on lines you want bought to order.
5. Check the vendor's **Lead Time** on the product's **Purchase** tab. It drives the expected arrival date on the RFQ.
6. **Optional, group RFQs:** open the vendor in **Contacts**, go to **Sales & Purchase**, and in the **Purchase**
   section set **Group RFQ**. **On Order** (the default) keeps one RFQ per sales order; **Daily** puts all needs with
   the same expected arrival date on one RFQ.
7. Confirm the sales order. Open the **Purchase** smart button, check the RFQ and click **Confirm Order**.
8. When the truck arrives, validate the receipt. The pick becomes **Ready**; validate it as the goods are sorted to
   the outbound lane, then validate the delivery order when the vehicle is loaded.

## Worked example: a distributor's hub in Nagpur

A kitchen-appliance distributor runs a hub in Nagpur for dealers across Vidarbha. Mixer grinders come from a factory
in Vadodara with a four-day lead time and are only bought against dealer orders. The warehouse uses one-step receipts
and two-step deliveries, the product has **Replenish on Order (MTO)**, and the factory's **Group RFQ** is **Daily**.
The business and quantities are illustrative.

| Day | What happens in Odoo |
|---|---|
| Monday | Dealer orders from Wardha (60 units) and Amravati (40 units) are confirmed with the same delivery date. Odoo creates one draft RFQ for both needs, with both order numbers in its **Source Document**, plus two picks of 60 and 40 in **Waiting Another Operation**. |
| Monday | The buyer confirms the RFQ. Odoo creates one receipt for 100 units. |
| Friday | The truck arrives. The storekeeper counts 100 and validates the receipt. Both picks turn **Ready**, reserved from those 100 units. |
| Friday | The team sorts 60 into the Wardha lane and 40 into the Amravati lane and validates the picks. Odoo creates the two delivery orders, which are validated as each vehicle leaves. |

No unit goes to a shelf. On paper the stock sits in `WH/Stock` for the minutes between receipt and pick, and the
picks can't take anything else, because they're linked to that purchase rather than to general stock.

## What you should see

- **On the sales order:** a **Purchase** smart button for the RFQ, and a **Delivery** smart button that first shows
  only the pick.
- **On the pick, before the goods arrive:** status **Waiting Another Operation**. After the receipt is validated:
  **Ready**.
- **On the receipt:** an ordinary `WH/IN` transfer whose **Source Document** is the purchase order.
- **The delivery order** appears only after the pick is validated. The documentation states that in multi-step flows
  each operation is created when the previous one is validated.

## When cross-docking fits, and when it doesn't

It fits pre-sold goods: dealer indents, B2B orders taken before the factory ships, and fast movers you'd rather not
hold. It suits distributor hubs that break a full factory load into dealer loads, and seasonal or promotional stock
sold before it lands.

It fits badly when you want to sell from existing stock first, because Replenish on Order always buys. It's also a
poor match when incoming goods need inspection, repacking or kitting before dispatch, or when vendors often ship short.
Those products are better stocked and replenished with
[reordering rules](/blog/2026/09/23/how-to-set-up-reordering-rules-odoo/).

If you need a genuine `WH/Input` to `WH/Output` hop, that's a custom route built around the Cross Dock operation type.
Treat it as a customisation and test it on a duplicate database first, given that Odoo withdrew its own version.

## Troubleshooting

**No RFQ was created.**
The product has no vendor, or the route isn't on the product, its category or the order line. Without a vendor, Odoo
switches the move to take from stock and posts a note on the sales order that no supplier was found.

**The RFQ was cancelled by mistake.**
The documentation warns that Odoo doesn't create a replacement, and a new purchase can't be linked back to the sales
order. Adjust the RFQ rather than cancelling it.

**The pick still says Waiting after the goods arrived.**
With two-step receipts, the Storage transfer still has to be validated. With several warehouses, check the **Deliver
To** on the purchase order: goods received into another warehouse don't release the pick.

**Every sales order makes its own RFQ.**
That's the **On Order** default. Set **Group RFQ** to **Daily** on the vendor.

**Cross-docked goods were picked for another order.**
The product isn't on Replenish on Order, so the receipt went into general stock. Check the route on the product,
category or line.

**The vendor shipped short.**
Validate what arrived and create a backorder for the rest. Check each pick's reserved quantity before dispatch so you
know which dealer is short; see [backorders in Odoo](/blog/2026/10/13/backorders-odoo/).

## Related setup

- [Warehouses, locations and operation types in Odoo](/blog/2026/08/13/warehouses-locations-operation-types-in-odoo/)
- [How to set up a warehouse and locations in Odoo 19](/blog/2026/09/23/how-to-set-up-warehouse-locations-odoo/)
- [Reordering rules and replenishment in Odoo](/blog/2026/08/13/reordering-rules-and-replenishment-in-odoo/)
- [Inter-warehouse resupply in Odoo](/blog/2026/10/15/inter-warehouse-resupply-odoo/)
- [Batch, wave and cluster picking in Odoo](/blog/2026/10/15/batch-wave-cluster-picking-odoo/)
- [ERP for trading and distribution](/blog/2026/08/26/erp-for-trading-and-distribution/)
- Planning a hub-and-spoke flow, or deciding whether a custom route is worth it? See
  [Odoo implementation](/services/odoo-implementation/).

## Official references

- Odoo 19 documentation: [Replenish on order (MTO)](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/warehouses_storage/replenishment/mto.html)
- Odoo 19 documentation: [Routes and push/pull rules](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/shipping_receiving/daily_operations/use_routes.html)
- Odoo 19 documentation: [Two-step receipt and delivery](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/shipping_receiving/daily_operations/receipts_delivery_two_steps.html)
- Odoo 19 documentation: [Request for quotations (Group RFQ)](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/purchase/manage_deals/rfq.html)

*How this guide was checked: menu paths, field names and behaviour were checked against the Odoo 19 documentation and
the Odoo 19 Inventory, Purchase and Sales code (warehouse routes, stock rules, and the change that removed the
Crossdock route) in October 2026. The worked example is illustrative and wasn't run on a live database, so there are
no screenshots; labels can vary slightly with your installed apps and language.*
