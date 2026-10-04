---
layout: post
title: "How to Set Up Products and Units of Measure in Odoo 19"
date: 2026-09-22 10:00:00 +0530
last_modified_at: 2026-10-04
tags: [Odoo, Odoo 19, Setup, Products, Inventory, Inventory Management, Stock Control, Purchase]
hub: inventory
description: "Set up products in Odoo 19 step by step: Goods vs Service, Track Inventory, units of measure and packagings, vendors, and the mistakes that break stock counts."
faqs:
  - q: "What replaced storable and consumable products in Odoo 19?"
    a: "Odoo 18 and 19 use the product type Goods with a Track Inventory checkbox. A tracked good behaves like the old storable product, with on-hand and forecasted quantities. An untracked good behaves like the old consumable and is treated as always available."
  - q: "Can I buy a product in boxes and sell it in units?"
    a: "Yes. Enable Units of Measure & Packagings in Inventory settings, keep the product's inventory unit as Units, set the purchase unit on the vendor line, and add selling packagings on the Sales tab. Odoo converts quantities on receipts and deliveries automatically."
  - q: "Which products need Track Inventory ticked?"
    a: "Anything you need to count, value, reorder or trace: finished goods, resale items and most components. Leave it off for low-value items you never count, such as office supplies or packing tape."
---

**Short answer:** in Odoo 19, open **Inventory ‣ Products ‣ Products ‣ New**. Set **Product Type** to **Goods**
for physical items and tick **Track Inventory** if you need stock counts; set it to **Service** for work you
sell or buy. Choose the unit you count stock in, add vendors with their purchase unit, and enable **Units of
Measure & Packagings** if you buy, store or sell in different units.

This is the step-by-step guide. For the reasoning behind product types, units and packaging, see the explainer:
[product types, units of measure and packaging in Odoo](/blog/2026/08/12/odoo-product-types-units-of-measure-packaging/).

## Applies to

- **Odoo version:** Odoo 19 (and 18, which introduced the Goods + Track Inventory model). Odoo 17 and earlier
  use the older *storable* and *consumable* product types instead.
- **Edition:** Community and Enterprise.
- **Apps:** Inventory; Sales and Purchase add their own tabs and fields to the product form.

## Before you start

1. **Decide how you count each product.** Your inventory unit should be the unit your team counts on the shelf:
   units, kilograms, metres. Changing it once stock moves exist causes confusion, so decide first.
2. **List how suppliers sell to you.** Boxes of 12, rolls of 50 metres, sacks of 25 kg. These become purchase units
   or packagings.
3. **Decide which products need lots or serial numbers.** Traceability is set per product and is far easier to set
   before the first receipt.

## Step by step

### 1. Enable units of measure (if needed)

1. Go to **Inventory ‣ Configuration ‣ Settings**.
2. Under **Products**, tick **Units of Measure & Packagings** and click **Save**.

Skip this if every product is bought, stored and sold in single units.

### 2. Create the product

1. Go to **Inventory ‣ Products ‣ Products** and click **New**.
2. Enter the product name.
3. Tick **Sales** if you sell it and **Purchase** if you buy it. A component you only buy has Purchase alone; a
   finished product you only sell has Sales alone.
4. On the **General Information** tab, set **Product Type**:
   - **Goods** for physical items;
   - **Service** for work such as installation or consulting;
   - **Combo** for a bundle of goods and services.

### 3. Decide whether to track inventory

For goods, tick **Track Inventory** if you need stock levels, valuation, reordering rules or traceability. Then
choose how to track:

- **By Quantity** for ordinary stock;
- **By Lots** for batches, for example food, chemicals or anything with expiry dates;
- **By Unique Serial Number** for individually traceable items such as machines.

Leave Track Inventory off for items you never count. Odoo treats untracked goods as always available, so they can't
use reordering rules, inventory adjustments or stock valuation.

### 4. Set the inventory unit, price and cost

The unit next to **Sales Price** and **Cost** is the product's inventory unit, the one stock is counted and moved in.
Changing it in one field changes the other, because Odoo keeps them the same. Enter the sales price and cost per
that unit.

### 5. Add vendors and the purchase unit

1. Open the **Purchase** tab and click **Add a line**.
2. Choose the **Vendor**, enter the **Unit Price**, the **Lead Time** in days and the purchase **Unit**, for example
   a box.
3. Put your preferred vendor first. Odoo uses the top line when it creates purchase orders automatically.

### 6. Add selling packagings (optional)

On the **Sales** tab, in **Upsell & Cross-Sell**, add the packagings customers can buy, such as a case of 12.
Several packagings can be added to one product.

### 7. Check routes and save

On the **Inventory** tab, confirm the routes: **Buy** for purchased products, **Manufacture** for products made
in-house. Save the product.

## Worked example: bought by the box, sold by the unit

A distributor sells **Hand sanitiser 500 ml**.

| Field | Value |
|---|---|
| Product Type | Goods |
| Track Inventory | Ticked, **By Lots** (batches carry expiry dates) |
| Inventory unit | Units |
| Sales and Purchase | Both ticked |
| Vendor line | Supplier A, purchase unit **Box of 24**, lead time 5 days |
| Selling packaging | Case of 12 |
| Route | Buy |

A purchase order for **10 boxes** creates a receipt for **240 units**, because the warehouse counts in units. A
customer order for **2 cases** creates a delivery for **24 units**. Stock reports, reordering rules and valuation
all work in units, so nobody has to convert by hand.

## What you should see

- A **Forecasted** smart button on the product form, showing on-hand and forecasted quantities (tracked goods only).
- Purchase orders that default to the vendor's unit, and receipts that show the converted quantity in the inventory
  unit.
- A **Lot/Serial Number** field on receipts for lot- or serial-tracked products.

## Troubleshooting

**No stock figures or Forecasted button.** The product is a Service, or a Good without **Track Inventory**. Tick it.

**The reordering rule option is missing.** Same cause: reordering rules need a tracked good.

**Receipts show odd quantities.** The purchase unit on the vendor line is wrong, or the conversion behind it is. A
box defined as 24 units turns 10 boxes into 240 units on the receipt.

**Automatic purchase orders aren't created.** There is no vendor on the **Purchase** tab, or the **Purchase**
checkbox isn't ticked.

**Products were created with the wrong type.** Fix it before stock moves exist where you can; once transactions exist,
correcting the setup is more involved, so test with a few products before importing the whole catalogue.

**Cost looks wrong after receipts.** Check the product category's costing method, which controls whether cost is
standard or updated from purchases.

## Related setup

- [How to set up a warehouse and storage locations in Odoo 19](/blog/2026/09/23/how-to-set-up-warehouse-locations-odoo/)
- [How to set up reordering rules in Odoo 19](/blog/2026/09/23/how-to-set-up-reordering-rules-odoo/)
- [Lot and serial number tracking in Odoo](/blog/2026/08/12/lot-and-serial-number-tracking-in-odoo/)
- [Importing and exporting data in Odoo](/blog/2026/09/14/odoo-import-export-data/), for loading a full catalogue
- Setting up a large catalogue? See [Odoo implementation](/services/odoo-implementation/).

## Official references

- Odoo 19 documentation: [Product type](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/product_management/configure/type.html)
- Odoo 19 documentation: [Units of measure](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/product_management/configure/uom.html)
- Odoo 19 documentation: [Reordering rules](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/warehouses_storage/replenishment/reordering_rules.html)

*How this guide was checked: menus, fields and behaviour were checked against the Odoo 19 documentation in October
2026. The example is illustrative and wasn't run on a live database, so there are no screenshots; labels can vary
slightly with your installed apps and language.*
