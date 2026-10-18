---
layout: post
title: "Consignment Stock in Odoo: Vendor-Owned and Customer-Held Stock"
date: 2026-10-17 10:00:00 +0530
tags: [Odoo, Odoo 19, Setup, Inventory, Inventory Management, Stock Control, Supply Chain, Distribution]
hub: inventory
description: "Set up consignment stock in Odoo 19: receive vendor-owned stock with an owner, sell it, bill the vendor, and track your own stock held at customer sites."
faqs:
  - q: "Does consignment stock appear in Odoo's inventory valuation?"
    a: "No. Stock whose owner is a partner other than your own company is left out of valuation, so receiving and selling it posts no stock valuation entries. It still counts in on-hand quantities, the Locations report and Moves History."
  - q: "Does Odoo bill the vendor automatically when consignment stock is sold?"
    a: "No. Odoo 19 has no automatic settlement for consigned goods. Report what was delivered from the vendor's stock in the period, then create the vendor bill for those quantities yourself."
  - q: "How do I track my own stock held at a customer's site?"
    a: "Create an internal location for each customer, outside WH/Stock, and move stock there with internal transfers. Leave the owner empty: the stock is still yours, so it stays in your valuation until you invoice what the customer has used."
---

**Short answer:** in Odoo 19, tick **Consignment** in **Inventory ‣ Configuration ‣ Settings** (in the
**Traceability** section). For vendor consignment, create a receipt by hand with the vendor in both **Receive From**
and **Assign Owner**: the stock can be picked and sold, but stays out of your valuation. Odoo doesn't bill the vendor
for you, so report what was sold from the vendor's stock and create the vendor bill. For your own stock held at
customers, use one internal location per customer, outside WH/Stock, and sell from it when the customer reports usage.

For how valuation works generally, start with my explainer on
[inventory valuation and landed costs in Odoo](/blog/2026/08/14/inventory-valuation-and-landed-costs-in-odoo/).

## Applies to

- **Odoo version:** Odoo 19. The Odoo 20 consignment page describes the same steps and adds that consignment stock is
  also left out of the Aging report. In the Odoo 20 code the setting, the owner fields and the valuation rule are
  unchanged.
- **Edition:** Community and Enterprise. Ownership and its effect on valuation are part of the standard Inventory and
  stock accounting modules.
- **Apps:** Inventory and Sales, plus Invoicing or Accounting for the vendor bill.

## Before you start

1. **Agree the terms in writing:** who owns the goods, the price you settle at, how often you settle, how unsold stock
   goes back, and who carries damage or shrinkage.
2. **Products are tracked goods** (**Goods** with **Track Inventory** ticked) with **Sales** ticked. Putting the
   consignor and its agreed price on the **Purchase** tab keeps the settlement price in one place.
3. **For customer consignment,** enable **Storage Locations** in the **Warehouse** section of Inventory settings.
4. **Decide whether you'll hold your own and consigned stock of the same product.** Odoo doesn't prefer one owner over
   the other when picking (see Troubleshooting).

## Step by step

### Vendor consignment: stock you hold but don't own

1. Go to **Inventory ‣ Configuration ‣ Settings**, tick **Consignment** under **Traceability** and click **Save**.
2. Go to **Inventory ‣ Operations ‣ Receipts** and click **New**. Consignment isn't bought, so there's no purchase
   order: every consignment receipt starts by hand.
3. Set **Receive From** to the vendor and **Assign Owner** to the same vendor. **Assign Owner** only appears on
   receipts.
4. Add the products and quantities, then **Validate**. Odoo records the vendor as owner of that stock.
5. Sell as usual. A sales order to any other customer reserves the stock and delivers it; the line's details on the
   delivery show the **From Owner** of the stock taken.
6. At the end of each settlement period, open **Inventory ‣ Reporting ‣ Moves History**, filter **Done** and
   **Outgoing**, set the dates, search **Owner** for the vendor and group by **Product**. Leave out any returns to the
   vendor, which are outgoing too. What remains is the quantity sold from the vendor's stock.
7. Create the vendor bill under **Accounting ‣ Vendors ‣ Bills** (Invoicing in Community) for those quantities at the
   agreed price. Consigned goods are never valued, so selling them posts no stock valuation entry: the bill is where
   their cost enters your books. Agree the account with your accountant before the first one.
8. To send unsold stock back, use **Return** on the original receipt and validate.

### Customer consignment: your stock at a customer's site

1. Go to **Inventory ‣ Configuration ‣ Locations** and click **New**. Name it after the customer, choose the
   warehouse's top location (for example `WH`) as **Parent Location**, not `WH/Stock`, and set **Location Type** to
   **Internal**. Outside `WH/Stock`, ordinary deliveries won't reserve from it.
2. Send stock with an internal transfer (**Inventory ‣ Operations ‣ Internal**, then **New**) from `WH/Stock` to the
   customer's location. Leave the owner empty: the stock is yours. Moving between two internal locations posts no
   valuation entry, so it stays in your stock value.
3. When the customer reports what it used, create a sales order for that quantity and confirm it.
4. On the delivery, change **Source Location** to the customer's location before validating. Odoo releases anything it
   had reserved in `WH/Stock` and reserves from the customer's location instead; click **Check Availability** if it
   doesn't. Validate, then invoice from the sales order.
5. Count the customer's location regularly with **Inventory ‣ Operations ‣ Physical Inventory**, filtered on that
   location, so Odoo matches what is really on the customer's shelf.

If you sell from one customer's site often, a separate warehouse for it is the alternative: choosing that **Warehouse**
on the sales order's **Other Info** tab makes the delivery come from it without editing locations.

## Worked example: an auto-parts distributor

A Ludhiana auto-parts distributor holds a bearing maker's stock on consignment and keeps its own oil filters at a large
workshop customer. The names and figures are illustrative.

**Vendor side.** On 1 October it receives 200 bearings with **Receive From** and **Assign Owner** both set to the
bearing maker. During October it sells 120 to various garages through normal sales orders.

| Report on 31 October | What it shows |
|---|---|
| Moves History (Done, Outgoing, Owner = bearing maker) | 120 bearings delivered |
| Locations | 80 bearings in `WH/Stock`, **Owner**: bearing maker |
| Stock valuation | No value for the bearings |

Finance then enters a vendor bill from the bearing maker for 120 bearings at the agreed price.

**Customer side.** The distributor creates `WH/Sharma Motors Consignment` as an internal location under `WH` and
transfers 50 oil filters there. At month end Sharma Motors reports 18 used. A sales order for 18 is confirmed, its
delivery's **Source Location** is changed to Sharma's location, and the invoice follows. The other 32 filters stay in
the distributor's valuation, at the customer's site.

## What you should see

- **Assign Owner** on receipts, and an **Owner** column and **Owner** grouping in **Inventory ‣ Reporting ‣
  Locations**.
- Vendor-owned stock in on-hand and forecasted quantities, but not in the stock valuation report.
- Stock at customer locations in both on-hand quantities and valuation.
- In Moves History, vendor-owned moves you can search by **Owner**.

## Troubleshooting

**There's no Assign Owner field.**
**Consignment** isn't enabled, or you're not on a receipt: the field only shows for incoming operations.

**Consigned stock shows up in valuation.**
The owner was left empty, or set to your own company, which counts as your stock. The owner can't be edited on existing
stock lines, so correct it with your accountant: count the wrong line to zero and add a new line with the right owner
in **Physical Inventory**.

**A reordering rule doesn't trigger even though your own stock is low.**
On-hand and forecasted quantities include vendor-owned stock, so the rule sees it as available. Review Min and Max for
consigned products, or keep them as separate products.

**A delivery took your own stock instead of the consignor's, or the reverse.**
Odoo reserves by removal strategy, whoever the owner is. If the difference matters, keep consigned goods as a separate
product, for example under the vendor's reference.

**A customer returned consigned goods and they came back as yours.**
Returns don't carry the owner back. On the return receipt, set **Assign Owner** to the vendor before validating.

**Customer-site stock is used for ordinary orders.**
The customer's location sits under `WH/Stock`. Change its **Parent Location** to `WH`.

## Related setup

- [How to set up a warehouse and locations in Odoo 19](/blog/2026/09/23/how-to-set-up-warehouse-locations-odoo/)
- [Warehouses, locations and operation types in Odoo](/blog/2026/08/13/warehouses-locations-operation-types-in-odoo/)
- [Vendor bills and three-way matching in Odoo](/blog/2026/08/17/vendor-bills-and-three-way-matching-in-odoo/)
- [Sales returns in Odoo: return stock and credit note together](/blog/2026/10/13/sales-returns-rma-odoo/)
- [Inter-warehouse resupply in Odoo](/blog/2026/10/15/inter-warehouse-resupply-odoo/)

## Official references

- Odoo 19 documentation: [Consignment: buy and sell stock without owning it](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/shipping_receiving/daily_operations/owned_stock.html)
- Odoo 19 documentation: [Locations](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/warehouses_storage/inventory_management/use_locations.html)
- Odoo 19 documentation: [Locations report](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/warehouses_storage/reporting/locations.html)
- Odoo 19 documentation: [Moves history](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/warehouses_storage/reporting/moves_history.html)
- Odoo 19 documentation: [Inventory valuation](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/inventory_valuation.html)
- Odoo 19 documentation: [Vendor bills](https://www.odoo.com/documentation/19.0/applications/finance/accounting/vendor_bills.html)

*How this guide was checked: menu paths, field names and behaviour were checked against the Odoo 19 documentation and
the Odoo 19 code for receipts, stock ownership, reservation, returns and stock valuation in October 2026. The
consignment page in the documentation still shows some older labels, so field names here follow the Odoo 19 code.
The worked example is illustrative and wasn't run on a live database, so there are no screenshots; labels can vary
slightly with your installed apps and language.*

Holding stock you don't own, or keeping yours at customers' sites? See
[Odoo implementation](/services/odoo-implementation/) and I'll help you set up ownership, locations and settlement so
the numbers agree with your accountant's.
