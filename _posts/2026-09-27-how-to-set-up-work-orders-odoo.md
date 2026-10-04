---
layout: post
title: "How to Set Up Work Centres and Work Orders in Odoo 19"
date: 2026-09-27 08:00:00 +0530
last_modified_at: 2026-10-04
tags: [Odoo, Odoo 19, Setup, Manufacturing, MRP, Production Planning, Work Centers, Shop Floor]
hub: manufacturing
description: "Set up Odoo 19 work centres and work orders step by step: enable work orders, define capacity and costs, add operations to BoMs, and run them on Shop Floor."
faqs:
  - q: "How do I enable work orders in Odoo 19?"
    a: "Go to Manufacturing, Configuration, Settings, tick Work Orders in the Operations section and save. Work centres and the Operations tab on bills of materials then become available."
  - q: "Is Shop Floor available in Odoo Community?"
    a: "No. Shop Floor is part of Odoo Enterprise. Community users can still create work centres and work orders and process them from the Manufacturing app."
  - q: "What does Time Efficiency mean on a work centre?"
    a: "It adjusts expected durations for that work centre. Odoo's documentation gives the example of older equipment that takes twice as long, set at 50 percent efficiency."
---

**Short answer:** in Odoo 19, enable **Work Orders** in **Manufacturing ‣ Configuration ‣ Settings**, create your
work centres in **Manufacturing ‣ Configuration ‣ Work Centers**, then add **operations** to each bill of
materials, choosing the work centre that does each step. Manufacturing orders then create one work order per
operation, which operators process in the Manufacturing app or, on Enterprise, in **Shop Floor**.

This is the setup guide. For an explanation of what work centres and work orders are for, see
[work centres and work orders in Odoo](/blog/2026/08/15/work-centers-and-work-orders-in-odoo/).

## Applies to

- **Odoo version:** Odoo 19. Odoo 20 was released in September 2026; check its documentation before applying
  these steps to an Odoo 20 database.
- **Edition:** Work centres and work orders are in the Manufacturing app in Community and Enterprise. **Shop Floor**,
  quality checks and IoT triggers are Enterprise only.
- **Apps:** Manufacturing and Inventory; Maintenance if you want equipment on work centres.

## Before you start

1. **List where work actually happens.** A work centre is a machine, line, bench or team you schedule work on. If
   two identical machines are planned separately, make two work centres.
2. **Know your times.** For each operation, an expected duration per unit or batch, plus any setup and cleanup time.
3. **Know your costs** if you want manufacturing order costs to include labour or machine time: a cost per hour
   for each work centre.
4. **Have bills of materials ready** for the products you make. See
   [how to set up a bill of materials in Odoo 19](/blog/2026/09/24/how-to-set-up-bill-of-materials-odoo/).

## Step by step

### 1. Enable work orders

Go to **Manufacturing ‣ Configuration ‣ Settings**, tick **Work Orders** in the **Operations** section, and save.

### 2. Create work centres

1. Go to **Manufacturing ‣ Configuration ‣ Work Centers** and click **New**.
2. **Work Center Name** and a short **Code**.
3. **Working Hours:** the default is *Standard 40 hours/week* (Monday to Friday, 8:00 to 17:00). Create another
   schedule if the work centre runs shifts.
4. **Alternative Workcenters:** where work can go if this one is busy.
5. On the **General Information** tab:
   - **Time Efficiency** (percentage), if this work centre runs slower or faster than standard;
   - **Setup Time** and **Cleanup Time**;
   - **Cost per hour**, used to cost work done here;
   - **Allowed Employees**, if only certain people may operate it.
6. **Product Capacities** (optional): how many units of a product can be processed at once.
7. Save, and repeat for each work centre.

### 3. Add operations to your bills of materials

1. Open the BoM (**Manufacturing ‣ Products ‣ Bills of Materials**) and go to the **Operations** tab.
2. Click **Add a line**, name the **Operation** (for example *Cut*), and choose the **Work Center**.
3. Choose **Duration Computation**: compute from tracked time (based on the last few work orders) or set a
   **Default Duration** manually.
4. Add instructions in the **Work Sheet** tab if operators need them.
5. Repeat for each step, in production order. Use **Consumed in Operation** on the Components tab to tie components
   to the step that uses them.

### 4. Plan and run work orders

1. Confirm a manufacturing order. Odoo creates one work order per operation, planned on its work centre.
2. Review the schedule in **Manufacturing ‣ Planning ‣ Planning by Workcenter**.
3. Operators start, pause and finish work orders from **Manufacturing ‣ Operations ‣ Work Orders**, or on Enterprise
   from the **Shop Floor** app.

### 5. Set up Shop Floor (Enterprise)

1. On the workstation, open **Shop Floor** from the main dashboard.
2. The first time, click **Activate your Work Centers** and select the work centres this station serves.
3. Operators sign in through the operator panel on the left. **Overview** shows manufacturing orders ready to start
   (confirmed, with components available); each work centre has its own view of its work orders.
4. Optionally install Shop Floor as an app in the station's Chrome browser to keep operators out of other Odoo apps.

## Worked example: a sheet-metal fabricator

A fabricator makes **steel brackets** in three steps.

| Work centre | Notes |
|---|---|
| Laser Cutter | Setup time 15 minutes; cost per hour set from machine and operator cost |
| Press Brake | Older machine, Time Efficiency 80% |
| Assembly Bench | Alternative work centre: Assembly Bench 2 |

The bracket's BoM gets three operations: *Cut* at Laser Cutter, *Bend* at Press Brake and *Assemble* at Assembly
Bench, each with a default duration measured on the floor.

When a manufacturing order for 50 brackets is confirmed, Odoo creates three work orders. Their expected durations
come from the operation durations, adjusted for each work centre's setup time and efficiency, and the Planning by
Workcenter view shows when each machine is booked. If Assembly Bench is full, work can be moved to Assembly Bench 2.

## What you should see

- Work orders listed under **Manufacturing ‣ Operations ‣ Work Orders**, one per operation of each confirmed order.
- A Gantt-style schedule in **Planning by Workcenter**.
- Performance figures on each work centre's form (OEE, lost time, load and performance) once work orders are
  recorded.
- On Enterprise, manufacturing order cards in Shop Floor, with **Register Production** for lot- or serial-tracked
  products and **Close Production** when the order is finished.

## Troubleshooting

**No work centres menu or Operations tab.** Enable **Work Orders** in Manufacturing settings.

**Manufacturing orders have no work orders.** The BoM has no operations, or the order was created before operations
were added. New orders pick up the current BoM.

**Planned durations look far too long or short.** Check the operation's default duration (is it per unit or per
batch?), the work centre's Time Efficiency, Setup and Cleanup times, and the Product Capacities tab.

**An order doesn't appear on the Shop Floor overview.** The overview shows orders that are ready to start. Remove the
**MO Ready** filter to see every confirmed order, and check component availability.

**Costs ignore labour.** The work centre has no **Cost per hour**, so time recorded there adds nothing to the order's
cost.

**The schedule ignores a night shift.** The work centre still uses the standard 40-hour calendar. Assign working hours
that match the real shifts.

## Related setup

- [How to set up a bill of materials in Odoo 19](/blog/2026/09/24/how-to-set-up-bill-of-materials-odoo/)
- [Manufacturing orders and the production workflow in Odoo](/blog/2026/08/15/manufacturing-orders-production-workflow-in-odoo/)
- [Maintenance in Odoo](/blog/2026/09/09/odoo-maintenance/), for equipment on work centres
- Rolling out manufacturing? See [Odoo implementation](/services/odoo-implementation/).

## Official references

- Odoo 19 documentation: [Work centers](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/manufacturing/advanced_configuration/using_work_centers.html)
- Odoo 19 documentation: [Bill of materials](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/manufacturing/basic_setup/bill_configuration.html)
- Odoo 19 documentation: [Shop Floor overview](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/manufacturing/shop_floor/shop_floor_overview.html)

*How this guide was checked: menus, fields and behaviour were checked against the Odoo 19 documentation in October
2026, and edition availability against Odoo 19's open-source code. The example is illustrative and wasn't run on a
live database, so there are no screenshots; labels can vary slightly with your installed apps and language.*
