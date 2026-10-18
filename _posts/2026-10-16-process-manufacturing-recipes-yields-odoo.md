---
layout: post
title: "Process Manufacturing in Odoo: Recipes, Yields and Batches"
date: 2026-10-16 10:00:00 +0530
tags: [Odoo, Odoo 19, Setup, Manufacturing, MRP, Food and Beverage, Quality, Inventory Management]
hub: manufacturing
description: "Process manufacturing in Odoo 19: recipes as batch BoMs, scaling, units, lots, by-products, yield loss, quality checks and what needs custom work."
faqs:
  - q: "How do I set up a recipe in Odoo?"
    a: "As a bill of materials whose Quantity is your standard batch, for example 100 kg, with each ingredient's quantity for that batch. A manufacturing order for any other quantity scales every ingredient in proportion."
  - q: "How does Odoo handle yield loss?"
    a: "Build the loss you expect into the recipe by listing what actually goes in against the output you expect. Record unexpected loss on the manufacturing order, by producing less than planned and closing without a backorder, or by scrapping."
  - q: "Does Odoo handle potency or catch weight natively?"
    a: "Not in the standard Manufacturing app. You can record a potency or assay value on a lot as a custom property, but Odoo won't adjust ingredient quantities from it, so potency-based dosing and catch weight usually need customisation."
---

**Short answer:** in Odoo 19, a recipe is an ordinary bill of materials. Set its **Quantity** to your standard batch,
say 100 kg, list each ingredient for that batch in kilograms, grams or litres, and every manufacturing order scales
the ingredients in proportion. Track ingredients and finished batches by lot, record residues you keep or sell as
by-products, build the loss you expect into the recipe and record unexpected loss on the order. Quality checks are
Enterprise only, and potency, catch weight and formula control beyond PLM usually need customisation.

This guide covers recipe and batch production in food, chemicals and cosmetics. For the basic BoM screens, see
[how to set up a bill of materials](/blog/2026/09/24/how-to-set-up-bill-of-materials-odoo/).

## Applies to

- **Odoo version:** Odoo 19. I also checked the Odoo 20 documentation: the product form's **Track Inventory**
  drop-down becomes a **Tracking** field, control points gain an **Apply to** field, the BoM's batch size is
  documented with its quantity labelled **Batch Size Value**, and the order's **Produce All** button becomes
  **Produce**.
- **Edition:** BoMs, units, lots, expiration dates, by-products, scrap and batch sizes are in Community and
  Enterprise. The Quality app, PLM and Shop Floor are Enterprise only.
- **Apps:** Manufacturing and Inventory, plus Quality and PLM on Enterprise.

## Before you start

1. **Pick one unit per ingredient**, the one you weigh or measure it in. Odoo converts grams to kilograms or
   millilitres to litres, but it doesn't know an ingredient's density, so don't mix litres and kilograms for one
   material.
2. **Check decimals.** In Odoo 19 every unit shares one rounding precision, the **Product Unit** decimal accuracy,
   which is 2 decimals by default. A 4 g ingredient can't be written as 0.004 kg. Set minor ingredients up in grams,
   or raise the precision in developer mode under **Settings ‣ Technical ‣ Database Structure ‣ Decimal Accuracy**.
3. **Switch on the features:** **Lots & Serial Numbers** (and **Expiration Dates**, if shelf life matters) in
   **Inventory ‣ Configuration ‣ Settings**, and **By-Products** and **Work Orders** in **Manufacturing ‣ Configuration
   ‣ Settings**.
4. **Keep the product master clean:** bulk, ingredients and packaging as separate products with unique internal
   references. On a [skincare manufacturer's project](/case-studies/skincare-manufacturer-odoo-woocommerce-sync/) I
   delivered, duplicate references across bulk bases, raw materials, fragrances and packaging broke the store sync.

## Step by step

### 1. Write the recipe as a batch BoM

1. Go to **Manufacturing ‣ Products ‣ Bills of Materials ‣ New** and choose the bulk product.
2. **Quantity:** your standard batch, for example 100 kg. Odoo's help text describes it as the smallest quantity the
   product can be produced in.
3. On **Components**, enter each ingredient's quantity *for that batch*.
4. Build the expected loss in: if 126 kg of inputs give 100 kg of product, list all 126 kg. The BoM cost per kilogram
   then includes the loss automatically.

### 2. Add the process steps

On **Operations**, add steps such as *Cook* at a *Kettle* work centre with a **Default Duration** per batch. With no
capacity set on the work centre, one cycle is the BoM quantity, so 250 kg on a 100 kg recipe plans three cycles.

### 3. Set the Miscellaneous tab

- **Flexible Consumption:** **Allowed with warning** suits processes where actual weights vary; **Blocked** means only
  a manager can close an order that differs from the recipe.
- **Batch Size:** tick it and enter the batch. In the Odoo 19 code, automatically generated manufacturing orders
  (from reordering rules, replenish on order or the MPS) are then split into orders of that size, rounding up to whole
  batches: a 250 kg need becomes three 100 kg orders.

### 4. Pack from the bulk

Create a second BoM for each pack size, for example a 500 g jar: 0.5 kg of bulk plus jar, lid and label. Filling
orders then consume the bulk batch's lot.

### 5. Track lots and expiry

1. On each ingredient and the finished products, set **Track Inventory** to **By Lots**.
2. With **Expiration Dates** on, tick **Expiration Date** in the product's **Inventory** tab and fill in the days for
   **Expiration Date**, **Best Before Date**, **Removal Date** and **Alert Date**.
3. On a confirmed order, the **Lot/Serial Number** field takes the batch's lot (the plus icon generates the next
   number). Lot-tracked ingredients need their lots recorded too.
4. Need a value per batch, such as a Brix or assay reading? Add it to the lot form with **Add Properties**.

If an order uses an expired ingredient lot, Odoo asks for confirmation before going ahead.

### 6. Add by-products

On the BoM's **By-products** tab, add residues you store or sell, with their **Quantity** per batch and, optionally,
**Produced in Operation** and **Cost Share (%)**. Use by-products for physical things such as peel or whey, never for
evaporation.

### 7. Add quality checks (Enterprise)

In **Quality ‣ Quality Control ‣ Control Points**, set **Operations** to **Manufacturing** and, optionally, a **Work
Order Operation**. Use **Measure** (with a **Norm** and **Tolerance**) for readings, **Pass - Fail** for visual checks
or **Register Consumed Materials** to confirm ingredients. See
[how to set up quality control](/blog/2026/09/27/how-to-set-up-quality-control-odoo/).

### 8. Record the actual yield

When a batch comes out short, type the real output into the order's **Quantity**. Odoo recalculates ingredients and
by-products in proportion, so correct each line to what really went in or came out, then click **Produce**. With
**Allowed with warning**, a consumption warning appears first: **Confirm** keeps your figures, while **Set Quantities
& Validate** would put the recipe back. In **You produced less than the initial demand**, choose **No Backorder**, or
**Create backorder** if the rest will still be made.

For other losses, use the gear icon's **Scrap**: ingredients while the order is draft or confirmed, finished product
once it is done. See [scrap, wastage and damaged stock](/blog/2026/10/14/scrap-wastage-damaged-stock-odoo/).

## Worked example: a jam maker

A jam maker cooks mixed fruit jam in 100 kg batches and fills 500 g jars. All figures are illustrative.

| Recipe line, per 100 kg batch | Quantity |
|---|---|
| Fresh mixed fruit | 70 kg |
| Sugar | 54 kg |
| Pectin | 1.20 kg |
| Citric acid | 0.80 kg |
| By-product: peel and stones | 10 kg |

- **Expected loss:** 126 kg goes in; 100 kg of jam and 10 kg of peel come out, and the rest evaporates. The BoM cost
  already carries that loss.
- **Scaling:** an order for 250 kg reserves 175 kg of fruit, 135 kg of sugar, 3 kg of pectin and 2 kg of citric acid,
  and expects 25 kg of peel. With **Batch Size** 100 kg on the BoM, a reordering rule needing 250 kg would create three
  100 kg orders instead.
- **Traceability:** the operator records the fruit and sugar lots used; the jam batch gets its own lot and expiry
  date, and its **Traceability** report shows which ingredient lots went in.
- **Quality:** a **Measure** check on *Cook* records the Brix reading against the norm and tolerance from the maker's
  own specification.
- **A short batch:** one cook ends at 96 kg. The operator enters 96, puts the ingredients back to the full recipe,
  clicks **Produce**, confirms the consumption warning and chooses **No Backorder**. Under AVCO or FIFO, the cost of
  126 kg of inputs is spread over 96 kg, so the loss shows up in that batch's cost per kilogram.

## What you should see

- A lot on every finished batch, with expiry dates computed from the product's settings.
- By-products arriving in stock when the order is produced.
- The order's **Overview** showing real cost against the recipe cost, which is where yield loss becomes visible.

## Troubleshooting

**A minor ingredient becomes 0.00 kg on the BoM, or 0.01 kg on orders.**
The 2-decimal precision can't hold it. Use grams for that ingredient or raise the decimal accuracy.

**Every ingredient is 100 times too large.**
The BoM **Quantity** is 1 while the component lines are for a 100 kg batch. Make them agree.

**The order can't be closed because consumption differs.**
**Flexible Consumption** is **Blocked**; a manager has to close it, or change the setting.

**Odoo asks for lot numbers when you produce.**
A lot-tracked ingredient or the finished product has no lot. Record them on the order.

## What's native and what usually needs customising

Native: batch recipes and scaling, bulk-then-pack BoMs, lots with expiry, by-products with cost share, consumption
tolerances, scrap, batch sizes, quality checks (Enterprise) and BoM versions through PLM's engineering change orders
(Enterprise; see [Odoo PLM](/blog/2026/09/10/odoo-plm/)).

Usually customised:

- **Potency or assay dosing:** Odoo can store the value on a lot, but won't adjust quantities from it.
- **Catch weight:** selling or stocking by count while invoicing by actual weight.
- **Density conversions** between litres and kilograms for the same ingredient.
- **Formula control beyond PLM**, such as allergen or nutrition declarations generated from the recipe.
- **Batch parameter records.** On a [dairy project](/case-studies/dairy-farm-erp-direct-to-consumer/) I delivered,
  batch IDs from milk collection to delivery and digital production parameter templates were built into an
  Odoo-based dairy ERP.

## Related setup

- [How Odoo calculates the cost of a manufactured product](/blog/2026/10/16/how-odoo-costs-manufactured-products/)
- [How to use the Master Production Schedule in Odoo 19](/blog/2026/10/16/master-production-schedule-odoo/)
- [Lot and serial number tracking in Odoo](/blog/2026/08/12/lot-and-serial-number-tracking-in-odoo/)
- [Bills of materials in Odoo: kits, variants and multi-level BoMs](/blog/2026/08/15/bills-of-materials-in-odoo/)
- Moving recipe-based production onto Odoo? See [Odoo implementation](/services/odoo-implementation/).

## Official references

- Odoo 19 documentation: [Bill of materials](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/manufacturing/basic_setup/bill_configuration.html)
- Odoo 19 documentation: [By-products](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/manufacturing/workflows/byproducts.html)
- Odoo 19 documentation: [Manufacture with lots and serial numbers](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/manufacturing/workflows/manufacture_lots_serials.html)
- Odoo 19 documentation: [Expiration dates](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/product_management/product_tracking/expiration_dates.html)
- Odoo 19 documentation: [Scrap during manufacturing](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/manufacturing/workflows/scrap_manufacturing.html)
- Odoo 19 documentation: [Quality control points](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/quality/quality_management/quality_control_points.html)
- Odoo 19 documentation: [Units of measure](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/product_management/configure/uom.html)

*How this guide was checked: menu paths, fields and behaviour were checked against the Odoo 19 documentation and the
Odoo 19 code of the mrp, uom and mrp_product_expiry modules (BoM scaling and rounding, batch size, unit precision,
consumption and expired-lot warnings) in October 2026, with the Odoo 20 pages compared. Quality and PLM are
Enterprise features and come from the documentation only. The worked example is illustrative and wasn't run on a live
database, so there are no screenshots; labels can vary slightly with your installed apps and language.*
