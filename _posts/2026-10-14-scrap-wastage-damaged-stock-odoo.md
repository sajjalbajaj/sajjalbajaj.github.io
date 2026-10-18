---
layout: post
title: "How to Record Scrap, Wastage and Damaged Stock in Odoo 19"
date: 2026-10-14 10:00:00 +0530
tags: [Odoo, Odoo 19, Setup, Inventory, Inventory Management, Stock Control, Warehouse Management, Food and Beverage]
hub: inventory
description: "Record scrap and wastage in Odoo 19: scrap orders from stock, receipts and manufacturing, scrap reasons, the Loss Account, and when to adjust instead."
faqs:
  - q: "Where does scrapped stock go in Odoo?"
    a: "To a virtual location of type Inventory Loss. On a new Odoo 19 database the Scrap Location defaults to Inventory adjustment, the same location that count corrections use, so it's worth creating a dedicated scrap location to keep the two apart."
  - q: "Does scrapping stock create an accounting entry in Odoo 19?"
    a: "Only when the product uses Perpetual (at invoicing) valuation and the scrap location has a Loss Account. Odoo then debits the Loss Account and credits the stock valuation account at the product's cost. Otherwise the fall in stock value is picked up by the stock closing entry."
  - q: "Should I scrap stock or use an inventory adjustment?"
    a: "Scrap when you know what happened to the goods: damaged, expired or spoilt. Use an inventory adjustment when a count differs from the system and you can't say why."
---

**Short answer:** in Odoo 19, go to **Inventory ‣ Operations ‣ Scrap**, click **New**, choose the product, quantity
and a **Scrap Reason**, and click **Validate**. Odoo moves the goods out of stock into a virtual **Inventory Loss**
location. You can also scrap from a receipt, delivery or manufacturing order. Give scrap its own Inventory Loss
location with a **Loss Account** so wastage shows separately, and keep inventory adjustments for unexplained count
differences.

This is the setup guide. For counting and correcting stock in general, see my explainer on
[inventory adjustments and cycle counts in Odoo](/blog/2026/08/13/inventory-adjustments-and-cycle-counts-in-odoo/).

## Applies to

- **Odoo version:** Odoo 19. I also checked the Odoo 20 documentation and code, which change this area. In Odoo 20
  a scrap is no longer a separate scrap order record but a stock move marked as scrap. The menu stays the same, but
  the button reads **Confirm**, the checkbox is **Should Replenish**, you can scrap from a lot or serial number, and
  **Moves History** gains a **Scrapped** filter and a **Revert** action for scraps.
- **Edition:** Community and Enterprise for scrapping. The Quality app, Shop Floor and the Profit and Loss report
  in Accounting are Enterprise only.
- **Apps:** Inventory, plus Manufacturing for production scrap and Accounting or Invoicing for the valuation side.

## Before you start

1. **Turn on Storage Locations** in **Inventory ‣ Configuration ‣ Settings** (**Warehouse** section). Without it
   the **Source Location** and **Scrap Location** fields are hidden, so you can't choose where scrap comes from or
   goes to.
2. **Agree your reasons.** A short list works best, for example *Damaged on receipt*, *Damaged in warehouse*,
   *Expired*, *Temperature breach* and *Customer return, unsaleable*.
3. **Check valuation with your accountant.** Odoo 19 values stock either **Perpetual (at invoicing)** or
   **Periodic (at closing)**, set for the company and overridable on each product category. That choice decides
   when scrap reaches the books.

## Step by step

1. **Create a scrap location.** Go to **Inventory ‣ Configuration ‣ Locations**, remove the **Internal** filter and
   check whether a location named **Scrap** already exists. If not, click **New**, name it `Scrap`, set **Location
   Type** to **Inventory Loss** and, under **Accounting Information**, choose a **Loss Account** (an expense
   account your accountant picks for write-offs).
2. **Scrap from stock.** Go to **Inventory ‣ Operations ‣ Scrap** and click **New**. Fill in:
   - **Product** and **Quantity**, plus **Lot/Serial** for tracked products.
   - **Source Location:** where the goods physically are, such as `WH/Stock/Cold Room`.
   - **Scrap Location:** your scrap location. Odoo defaults to the company's first Inventory Loss location, which
     is normally **Inventory adjustment**, so change it each time.
   - **Scrap Reason:** type a reason and pick **Create** if it's new. There's no separate menu for reasons.
   - **Replenish Quantities:** tick it to have Odoo replace the scrapped quantity straight away, through the
     product's usual replenishment route.
   - **Source Document:** a note such as a delivery reference, if relevant.
3. Click **Validate**. If the source location doesn't hold enough of the product, Odoo warns you first.
4. **Scrap from a receipt or delivery.** Open the transfer, click the **Actions** (cog) icon, choose **Scrap**, fill
   in the **Scrap Products** pop-up and click **Scrap Products**. If the transfer is already validated, the scrap
   comes out of its destination; if not, out of its source. For receipts, validate first, so the scrap leaves your
   stock rather than the vendor location.
5. **Scrap in manufacturing.** On a manufacturing order, use **Actions** (cog) ‣ **Scrap**. Components can be
   scrapped before the order is done; finished products once it's done. Shop Floor (Enterprise) lets operators scrap
   components too.

## Scrap or inventory adjustment?

| Situation | Use |
|---|---|
| Cartons crushed, product expired, chilled goods spoilt | Scrap, with a reason |
| A count finds 4 fewer than the system and nobody knows why | Inventory adjustment |
| A count finds more than the system | Inventory adjustment |
| Goods arrive damaged from the vendor | Depends on the supplier; see the next section |

Inventory adjustments live in **Inventory ‣ Operations ‣ Physical Inventory**: enter the counted quantity and
click **Apply**. They post to the **Inventory adjustment** location too, which is why a separate scrap location
makes the two easy to tell apart.

## Damaged goods on receipt

Decide before you validate the receipt:

- **The supplier will credit you and won't resend:** receive only the good units and click **No Backorder**. The
  purchase order's **Received** quantity is then correct, and a bill on received quantities is for what you kept.
  My guide to [backorders in Odoo](/blog/2026/10/13/backorders-odoo/) covers this.
- **The supplier will collect them:** receive everything, then use **Return** on the validated receipt. By default
  a return lowers the purchase order's received quantity.
- **They're your loss:** receive everything, then scrap the damaged units from the receipt with a reason.
- **You inspect goods (Enterprise):** a Quality control point on receipts, with **Control Per** set to
  **Quantity**, can send failed units to a **Failure Location** such as `WH/Quarantine`. You then return or scrap
  them from there.

## Worked example: a food and FMCG distributor

A distributor of packaged foods keeps chilled lines in `WH/Stock/Cold Room` and tracks them by lot. It uses
Perpetual valuation and has created a `Scrap` location with a write-off expense account as its Loss Account.

- **Monday:** 200 cartons of biscuits arrive and 6 are crushed. The supplier agrees to credit them and tells the
  team to dispose of them. The receiver enters 194, validates and clicks **No Backorder**.
- **Wednesday:** a cold room check finds 18 tubs of yoghurt from one lot past their date. The supervisor scraps
  them from `WH/Stock/Cold Room` to `Scrap`, with the lot and the reason *Expired*. Odoo posts an entry debiting the
  Loss Account and crediting stock at the product's cost.
- **Friday:** a van brings back 3 cases of juice dented in transit. They were already delivered, so the team
  processes a customer return (see my guide to [sales returns in Odoo](/blog/2026/10/13/sales-returns-rma-odoo/)),
  then scraps the 3 cases from stock with the reason *Customer return, unsaleable*.
- **Month end:** the manager opens **Scrap Orders**, switches to the pivot view and groups by **Product** and
  **Scrap Location** to see what was written off.

To cut expiry waste, the team also picks chilled lines first-expired, first-out; see
[removal strategies in Odoo](/blog/2026/08/14/removal-strategies-fifo-lifo-fefo-in-odoo/).

## What you should see

- A scrap reference on each validated scrap order, and a **Product Moves** smart button with the move.
- A **Scraps** smart button on any transfer or manufacturing order you scrapped from.
- On-hand stock lower in the source location, and the scrapped quantity in the scrap location's stock.
- **Scrap Orders** in list, pivot and graph views, with grouping by **Product**, **Location**, **Scrap Location**
  and **Transfer**.
- With Perpetual valuation and a Loss Account, a posted journal entry per scrap. If either is missing, there's no
  entry at the time; the stock closing entry picks up the change.

## Troubleshooting

**Scrap went to Inventory adjustment instead of Scrap.**
That's Odoo's default. Change **Scrap Location** on each new scrap order. Validated scraps can't be edited or
deleted, so ask your accountant to reclassify past amounts if they need separating.

**No journal entry after scrapping.**
The product uses **Periodic (at closing)** valuation, through its category or the company default, or the scrap
location has no **Loss Account**.

**You can't see Source Location or Scrap Location.**
**Storage Locations** is off.

**The scrap tried to take stock from the vendor.**
You scrapped from a receipt that wasn't validated yet. Validate the receipt, then scrap.

**Scrapped stock was reordered without anyone asking.**
**Replenish Quantities** was ticked, which runs the product's replenishment straight away.

## Related setup

- [How to set up a warehouse and locations in Odoo 19](/blog/2026/09/23/how-to-set-up-warehouse-locations-odoo/)
- [Inventory valuation and landed costs in Odoo](/blog/2026/08/14/inventory-valuation-and-landed-costs-in-odoo/)
- [How to set up quality control in Odoo](/blog/2026/09/27/how-to-set-up-quality-control-odoo/)
- [Lot and serial number tracking in Odoo](/blog/2026/08/12/lot-and-serial-number-tracking-in-odoo/)

## Official references

- Odoo 19 documentation: [Scrap inventory](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/warehouses_storage/inventory_management/scrap_inventory.html)
- Odoo 19 documentation: [Account for scrapped goods](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/inventory_valuation/scrapped_inventory_valuation.html)
- Odoo 19 documentation: [Scrap during manufacturing](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/manufacturing/workflows/scrap_manufacturing.html)
- Odoo 19 documentation: [Inventory adjustments](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/warehouses_storage/inventory_management/count_products.html)
- Odoo 19 documentation: [Inventory valuation (Accounting)](https://www.odoo.com/documentation/19.0/applications/finance/accounting/get_started/inventory_valuation.html)
- Odoo 19 documentation: [Failure locations (Quality)](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/quality/quality_management/failure_locations.html)

*How this guide was checked: menu paths, field names, defaults and Enterprise-only status were checked against the
Odoo 19 documentation and the Odoo 19 code for scrap orders, locations, returns and stock accounting, in October
2026. The Odoo 19 manufacturing page names the default scrap location differently from the Inventory page; I've
followed the code. The worked example is illustrative and wasn't run on a live database, so there are no
screenshots; labels can vary slightly with your installed apps and language.*

If wastage is a real cost line for you and you want it visible and accounted for properly, I can help design the
setup. See [Odoo implementation](/services/odoo-implementation/).
