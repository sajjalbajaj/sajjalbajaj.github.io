---
layout: post
title: "How to Set Up Reordering Rules in Odoo 19 (Step by Step)"
date: 2026-09-23 09:00:00 +0530
last_modified_at: 2026-10-04
tags: [Odoo, Odoo 19, Setup, Inventory, Purchase, Inventory Management, Stock Control, Procurement]
hub: inventory
description: "Set up Odoo 19 reordering rules step by step: prerequisites, Min and Max, Auto vs Manual triggers, routes, vendors, a worked example and troubleshooting."
faqs:
  - q: "Do Odoo reordering rules use on-hand or forecasted quantity?"
    a: "Forecasted quantity. Odoo compares the forecast (on hand, plus confirmed incoming, minus confirmed outgoing, within the lead-time window) with the rule's Min. When the forecast drops below Min, the rule is triggered and orders enough to bring the forecast back up to Max."
  - q: "What is the difference between Auto and Manual reordering rules?"
    a: "Both calculate the same quantities. An Auto rule creates the purchase or manufacturing order itself, when the scheduler runs (once a day by default) or when a confirmed sales order pushes the forecast below Min. A Manual rule only lists the need on the Replenishment report, and someone clicks Order."
  - q: "Why did my reordering rule order more than the Max?"
    a: "Usually because of the Multiple field. Odoo rounds the To Order quantity up to the next multiple of the purchase packaging, which can take stock slightly above Max, and shows a warning about possible excess stock."
---

**Short answer:** in Odoo 19, open **Inventory ‣ Operations ‣ Replenishment**, click **New**, choose the
product and location, and enter a **Min** and **Max**. When the product's *forecasted* quantity falls below
Min, Odoo creates a request for quotation or a manufacturing order for enough to bring the forecast back up
to Max. The product must be a tracked good with a vendor (to buy) or a bill of materials (to manufacture).

This is the step-by-step setup guide. If you're still deciding between reordering rules, buying to order and
other replenishment strategies, start with my explainer on
[replenishment in Odoo](/blog/2026/08/13/reordering-rules-and-replenishment-in-odoo/).

## Applies to

- **Odoo version:** Odoo 19. Odoo 20 was released in September 2026; check its documentation for changes before
  applying these steps to an Odoo 20 database.
- **Edition:** Community and Enterprise. Reordering rules are part of the Inventory app's core, so both editions
  have them.
- **Apps:** Inventory, plus Purchase (to buy) and/or Manufacturing (to make).

## Before you start

1. **The product is a tracked good.** On the product form (**Inventory ‣ Products ‣ Products**), the **Product
   Type** is **Goods** and **Track Inventory** is ticked. Untracked goods and services can't use reordering
   rules, because Odoo has no stock figure to compare.
2. **For bought products:** the Purchase app is installed, the product's **Purchase** checkbox is ticked, and
   at least one vendor is on the **Purchase** tab. Odoo uses the vendor at the top of that list unless you
   choose another on the rule.
3. **For manufactured products:** the Manufacturing app is installed and the product has a bill of materials.
   Without a BoM, Odoo can't create a manufacturing order.
4. **Lead times are realistic.** The vendor line's **Lead Time** (and any purchase or manufacturing lead times
   you use) controls how far ahead Odoo looks when it calculates the forecast. Wrong lead times are the most
   common reason rules trigger too late.

## Step by step

1. Go to **Inventory ‣ Operations ‣ Replenishment** and click **New**. (You can also use the **Reordering Rules**
   smart button on the product form.)
2. **Product:** choose the product.
3. **Location:** choose the stock location the rule protects, usually your warehouse's main stock location,
   for example `WH/Stock`.
4. **Min:** the lowest forecasted quantity you're willing to reach. When the forecast falls *below* this number,
   the rule is triggered.
5. **Max:** the level the rule restocks up to. If you leave it empty or set it below Min, Odoo sets it equal to
   Min.
6. **Show the optional columns** you need: click the column settings icon at the far right of the list header
   and tick **Trigger**, **Route**, **Vendor**, **Bill of Materials** or **Multiple**. They're hidden by default.
7. **Trigger:** keep **Auto** to let Odoo create orders itself, or choose **Manual** if a buyer should review
   each need on the Replenishment report first.
8. **Route:** if the product can be both bought and manufactured, pick the preferred route here. Without one,
   Odoo uses Buy first, then Manufacture.
9. **Vendor or Bill of Materials (optional):** pick a specific vendor from the vendor pricelist, or a specific
   BoM when the product has several.
10. **Multiple (optional):** if the supplier only sells in packs, choose that packaging so orders are rounded up
    to whole packs. Only packagings listed on the vendor pricelist appear here.
11. Save the line.

## Worked example: a distributor buying in cases

A stationery distributor stocks **A4 copier paper (box)**. The supplier, Sharma Paper Traders, is first on the
vendor pricelist with a **Lead Time** of 3 days and only sells cases of 10 boxes.

| Setting | Value |
|---|---|
| Location | `WH/Stock` |
| Min | 40 boxes |
| Max | 120 boxes |
| Trigger | Auto |
| Route | Buy |
| Multiple | Case of 10 |

On Monday there are 60 boxes on hand. A customer order for 30 boxes is confirmed, with delivery in two days,
inside the three-day lead-time window.

- **Forecast:** 60 on hand − 30 outgoing = **30**, which is below Min (40).
- **Quantity needed:** 120 (Max) − 30 (forecast) = **90**, already a whole number of cases.
- Because the rule is **Auto** and the confirmed order pushed the forecast below Min, Odoo creates a **draft
  RFQ** to Sharma Paper Traders for **90 boxes** straight away. It doesn't wait for the nightly scheduler.

If the forecast had been 28 instead, Odoo would need 92 boxes, round up to the next case and propose **100**.
That takes stock slightly above Max, and Odoo shows a warning about possible excess stock.

## What you should see

- **Auto rule:** a draft RFQ in **Purchase ‣ Orders ‣ Requests for Quotation**, or a draft manufacturing order
  in **Manufacturing ‣ Operations ‣ Manufacturing Orders**, for the **To Order** quantity.
- **Manual rule:** the product appears on **Inventory ‣ Operations ‣ Replenishment** under the **To Reorder**
  filter, with the suggested **To Order** quantity. You can edit that quantity, then click **Order**.
- The rule doesn't order the same need twice: quantities already in progress, such as a draft RFQ it created
  earlier, count towards the forecast.

## Troubleshooting

**The rule never triggers.**
Check that the product is a **Goods** product with **Track Inventory** ticked, and that the rule's location
matches where the stock and demand actually sit. Then compare the rule's **Forecast** column with Min: the rule
only fires when the forecast is *below* Min, not equal to it.

**An Auto rule hasn't created an order yet.**
Auto rules run when the scheduler runs (once a day by default) or when a confirmed sales order lowers the
forecast below Min. To run it now, enable developer mode and use **Inventory ‣ Operations ‣ Run Scheduler**.
Be aware this also runs other scheduled actions.

**Stock still runs out.**
The forecast only looks as far ahead as the lead times allow. If vendor lead times are understated, or demand
is lumpy, raise Min or correct the lead times. For **Manual** rules, **horizon days** on the Replenishment report
extend how far ahead Odoo looks, so needs appear earlier.

**The RFQ went to the wrong vendor.**
Odoo uses the top vendor on the product's vendor pricelist. Reorder the vendor lines or set the **Vendor**
column on the rule.

**A manufacturing order appeared when you expected a purchase, or the reverse.**
The product has more than one route and no preferred route on the rule. Set the **Route** column.

**A manufactured product never triggers.**
It has no bill of materials, or the Manufacture route isn't enabled on the product's **Inventory** tab.

**You can't see your Auto rules on the Replenishment report.**
Auto rules are hidden by default there. Remove the default filter to show them.

## Related setup

- [How to set up products and units of measure in Odoo 19](/blog/2026/09/22/how-to-set-up-products-in-odoo/)
- [How to set up a warehouse and locations in Odoo 19](/blog/2026/09/23/how-to-set-up-warehouse-locations-odoo/)
- [How to set up a bill of materials in Odoo 19](/blog/2026/09/24/how-to-set-up-bill-of-materials-odoo/)
- Need help tuning Min, Max and lead times across a large catalogue? See [Odoo implementation](/services/odoo-implementation/).

## Official references

- Odoo 19 documentation: [Reordering rules](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/warehouses_storage/replenishment/reordering_rules.html)
- Odoo 19 documentation: [Replenishment report](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/warehouses_storage/replenishment/report.html)
- Odoo 19 documentation: [Lead times](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/warehouses_storage/replenishment/lead_times.html)
- Odoo 19 documentation: [Product type](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/product_management/configure/type.html)

*How this guide was checked: menu paths, field names and behaviour were checked against the Odoo 19 documentation
and the reordering-rule code in Odoo 19's Inventory module in October 2026. The worked example is illustrative
and wasn't run on a live database, so there are no screenshots; labels can vary slightly with your installed
apps and language.*
