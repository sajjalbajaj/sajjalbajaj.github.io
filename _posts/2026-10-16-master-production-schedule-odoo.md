---
layout: post
title: "How to Use the Master Production Schedule (MPS) in Odoo 19"
date: 2026-10-16 08:00:00 +0530
tags: [Odoo, Odoo 19, Setup, Manufacturing, MRP, Production Planning, Procurement, Supply Chain]
hub: manufacturing
description: "Use the Master Production Schedule in Odoo 19: periods, forecast demand, safety stock, ordering from the plan, and why to drop reordering rules."
faqs:
  - q: "Is the Master Production Schedule available in Odoo Community?"
    a: "No. The MPS is an Enterprise feature. In Community the Master Production Schedule option in Manufacturing settings only appears as an upgrade, so planning relies on reordering rules and replenish on order instead."
  - q: "Does adding a product to the MPS create orders automatically?"
    a: "Not by itself. The MPS suggests a quantity for each period, and a planner clicks Order to create the manufacturing order or request for quotation. Each product's Replenishment Trigger can also be set to Automatic or Never."
  - q: "Can I use reordering rules and the MPS on the same product?"
    a: "Odoo's documentation says not to. The MPS plans that product's replenishment, and a reordering rule on top of it leads to inaccurate forecasts and unnecessary orders. Plan a product in one place or the other."
---

**Short answer:** in Odoo 19 Enterprise, tick **Master Production Schedule** in **Manufacturing ‣ Configuration ‣
Settings**, choose a time range (for example monthly) and a number of periods, then add the products you want to plan
in **Manufacturing ‣ Planning ‣ Master Production Schedule**. You enter the demand you expect in each period, Odoo
suggests how much to make or buy to stay at your **Safety Stock Target**, and **Order** turns that suggestion into a
manufacturing order or request for quotation. Don't keep reordering rules on products the MPS plans.

This is the step-by-step guide. If you're still choosing between the MPS, reordering rules and replenish on order,
start with my explainer on [replenishment in Odoo](/blog/2026/08/13/reordering-rules-and-replenishment-in-odoo/).

## Applies to

- **Odoo version:** Odoo 19. I also checked the Odoo 20 MPS documentation, which currently reads the same as the Odoo
  19 page.
- **Edition:** Enterprise only. In Community, the **Master Production Schedule** setting is shown as an upgrade.
- **Apps:** Manufacturing and Inventory, plus Purchase for bought products.

## Before you start

1. **Routes are in place.** A manufactured product needs the **Manufacture** route on its **Inventory** tab and a
   bill of materials. A bought product needs the **Buy** route and a vendor line on its **Purchase** tab.
2. **BoMs are accurate.** If you plan a finished product with its BoM, Odoo adds the components to the MPS too, so
   component quantities and units must be right. See
   [how to set up a bill of materials](/blog/2026/09/24/how-to-set-up-bill-of-materials-odoo/).
3. **You've decided what the MPS owns.** Usually finished products with seasonal demand and components with long lead
   times. Archive any reordering rules on those products first.
4. **Someone owns the demand estimate.** Odoo can suggest one from history, but a planner still has to agree it.

## Step by step

### 1. Switch the MPS on

1. Go to **Manufacturing ‣ Configuration ‣ Settings** and, under **Planning**, tick **Master Production Schedule**.
2. **Default Time Range:** **Daily**, **Weekly**, **Monthly** or **Yearly**.
3. **Number of Periods:** how many columns to show, for example 12 with **Monthly**. Click **Save**.

### 2. Add a product

1. Open **Manufacturing ‣ Planning ‣ Master Production Schedule** and click **Add a Product**.
2. **Product:** the item to plan.
3. **Bill of Materials:** the BoM, for a manufactured product. Leave it empty if you don't want its components in the
   MPS; it can't be changed later.
4. **Route:** **Manufacture** or **Buy**. With **Buy**, a **Vendor** field appears.
5. **Production Warehouse:** only shown when you run more than one warehouse.
6. **Indirect Demand (optional):** lets the **To Forecast** filter hide the product, handy for components you only
   plan through their parents.

### 3. Set the replenishment options

- **Safety Stock Target:** the stock you want left at the end of every period.
- **Minimum to Replenish:** the smallest quantity worth ordering in a period, such as a supplier's minimum order. When
  a period needs anything, Odoo suggests at least this; when it needs nothing, it suggests 0.
- **Replenishment Trigger:** **Manual** (you click **Order**), **Automatic** (Odoo schedules the order itself) or
  **Never** (the product is shown but never replenished from the MPS).

Older guides, including Odoo's own 18.0 documentation, also describe a **Maximum to Replenish** and a **Batch Size**
on this form. The Odoo 19 documentation dropped both in an August 2026 update, so check your own form before
planning around a cap. Click **Save**.

### 4. Enter the demand

Each product gets a block of rows: the starting stock in its header, then **- Forecasted Demand**, **- Indirect
Demand Forecast** (components only: demand that comes from making the products they go into), **+ Replenishment**
and **= Forecasted Stock**. Type the demand you expect into each period.

To start from history instead, click the pencil next to **- Forecasted Demand** (**Suggest Forecasted Demand**),
choose **Based on** (**Actual Demand**, **Previous Year**, **Last 30 Days**, **Last 3 Months** or **Last 12
Months**), add a percentage such as 110% for ten percent growth, and click **Apply**.

### 5. Read the suggestion

- **Replenishment** = Safety Stock Target − Starting Stock + Forecasted Demand + Indirect Demand Forecast
- **Forecasted Stock** = Starting Stock − Forecasted Demand − Indirect Demand Forecast + Replenishment

Each period's forecasted stock becomes the next period's starting stock. You can overwrite any replenishment cell; a
reset button next to it brings the suggestion back.

### 6. Add the rows you need

From the search bar's drop-down, add **Actual Demand** (confirmed sales next to your forecast), **Actual Demand Y-1**
and **Y-2**, **Indirect Actual Demand**, **Actual Replenishment** and **Available to Promise**.

### 7. Order

- **Order** at the top of the page replenishes every product for the current period.
- **Order** on a product's **+ Replenishment** row replenishes that product.
- To do several at once, tick them and use **Actions ‣ Order**.

The **Buy** route creates a request for quotation in **Purchase ‣ Orders ‣ Requests for Quotation**; **Manufacture**
creates a manufacturing order in **Manufacturing ‣ Operations ‣ Manufacturing Orders**. If the BoM's **Batch Size**
option (Miscellaneous tab) is ticked, the Odoo 19 code splits automatically created manufacturing orders into orders
of that size, and MPS orders go through the same routine.

### 8. Edit or remove a product

The pencil next to a product's header opens **Edit Production Schedule**; everything except **Product** and **Bill of
Materials** can be changed. To remove a product, tick it and choose **Actions ‣ Delete**.

## MPS and reordering rules

A reordering rule orders when the forecast falls below Min; the MPS plans the same product period by period. Put both
on one product and they cover the same need twice, which is why Odoo's documentation says not to apply reordering
rules to MPS products. A split that works:

- **MPS:** finished products with seasonal or lumpy demand, and components with long lead times.
- **Reordering rules:** cheap, short-lead components such as screws, labels and cartons. If they arrived in the MPS
  with a BoM, delete them from the MPS and give them rules. Once the planned manufacturing orders are confirmed, their
  component needs count in the forecast those rules watch. The
  [reordering rules guide](/blog/2026/09/23/how-to-set-up-reordering-rules-odoo/) covers the setup.

## Worked example: a furniture workshop planning by month

A workshop makes a six-seater dining table. Sales peak in the festive and wedding season, and the solid-wood tabletop
panel comes from a supplier with a 45-day lead time. All numbers are illustrative.

The planner sets **Monthly** with 6 periods and adds the table with its BoM, **Route** Manufacture, **Safety Stock
Target** 10 and **Replenishment Trigger** Manual. There are 30 tables in stock, and demand is entered from last
year's sales.

| Month | Starting stock | Forecasted demand | Suggested replenishment | Forecasted stock |
|---|---|---|---|---|
| October | 30 | 40 | 20 | 10 |
| November | 10 | 60 | 60 | 10 |
| December | 10 | 80 | 80 | 10 |
| January | 10 | 30 | 30 | 10 |

- **October:** 10 − 30 + 40 = **20**. The **Order** button at the top replenishes the current period, so it creates
  a manufacturing order for 20 tables.
- **Components:** the panel, legs and hardware kit appear under the table with an **Indirect Demand Forecast** row,
  at one panel and four legs per table. Adding **Indirect Actual Demand** shows how much of that is already backed by
  confirmed manufacturing orders.
- **The long-lead panel:** the buyer edits its schedule to **Route** Buy with the panel supplier as **Vendor**, gives
  it its own safety stock target, and reviews its row every month, ordering when a cell turns green.
- **The hardware kit:** cheap and delivered in two days, so the planner deletes it from the MPS and gives it a
  reordering rule.

## What you should see

- Replenishment cells in **green** (ready to be replenished), **grey** (an order exists and matches the suggestion),
  **yellow** (ordered less than suggested) or **red** (ordered more).
- New requests for quotation or manufacturing orders after you click **Order**.
- Filters such as **To Replenish**, **Replenishment Too Low**, **Replenishment Too High** and **Forecast Too Low**
  to find what needs attention.

## Troubleshooting

**There's no Master Production Schedule menu.**
You're on Community, or the setting wasn't saved.

**Order creates nothing, or the wrong kind of order.**
Check the route on the product's schedule and on the product form: **Manufacture** needs a BoM, **Buy** needs a
vendor on the **Purchase** tab.

**Extra orders keep appearing.**
A reordering rule is still active on an MPS product. Archive it.

**The plan is cluttered with screws and labels.**
The BoM was selected when the product was added, so every component came in. Delete the ones you don't want to plan
here.

**The suggestion is 0 although there is demand.**
Starting stock already covers demand plus the safety stock target.

**The suggestion is bigger than the need.**
**Minimum to Replenish** is set. Lower it, or overwrite the cell.

**One click created several manufacturing orders.**
The BoM has a **Batch Size** ticked on its Miscellaneous tab.

## Related setup

- [How to set up reordering rules in Odoo 19](/blog/2026/09/23/how-to-set-up-reordering-rules-odoo/)
- [How to set up a bill of materials in Odoo 19](/blog/2026/09/24/how-to-set-up-bill-of-materials-odoo/)
- [Manufacturing orders and the production workflow in Odoo](/blog/2026/08/15/manufacturing-orders-production-workflow-in-odoo/)
- [How to set up work centres and work orders in Odoo 19](/blog/2026/09/27/how-to-set-up-work-orders-odoo/), to
  check you have the capacity for the plan
- Planning a seasonal range or long-lead materials and unsure what belongs in the MPS? See
  [Odoo implementation](/services/odoo-implementation/).

## Official references

- Odoo 19 documentation: [Master production schedule](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/manufacturing/workflows/use_mps.html)
- Odoo 19 documentation: [Reordering rules](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/warehouses_storage/replenishment/reordering_rules.html)
- Odoo 19 documentation: [Manufacturing product configuration](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/manufacturing/basic_setup/configure_manufacturing_product.html)
- Odoo 19 documentation: [Lead times](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/warehouses_storage/replenishment/lead_times.html)

*How this guide was checked: menu paths, fields, formulas and Enterprise-only status were checked against the Odoo 19
MPS documentation (compared with the 18.0 and 20.0 versions) and the Manufacturing settings and order-creation code
in Odoo 19 in October 2026. The MPS itself is Enterprise code, so its behaviour comes from the documentation only. The
worked example is illustrative and wasn't run on a live database, so there are no screenshots; labels can vary
slightly with your installed apps and language.*
