---
layout: post
title: "Odoo Work Orders: Set Up Work Centres in Odoo 20"
date: 2026-09-27 08:00:00 +0530
last_modified_at: 2026-11-25
tags: [Odoo, Odoo 20, Odoo 19, Setup, Manufacturing, MRP, Work Centers, Shop Floor]
hub: manufacturing
description: "Set up Odoo 20 work orders and work centres: enable the feature, define capacity and costs, add BoM operations, plan work and use Shop Floor."
faqs:
  - q: "How do I enable work orders in Odoo 20?"
    a: "Go to Manufacturing, Configuration, Settings, tick Work Orders in the Operations section and save. Work centres and the Operations tab on bills of materials then become available."
  - q: "Is Shop Floor available in Odoo Community?"
    a: "No. Shop Floor is part of Odoo Enterprise. Community users can still create work centres and work orders and process them from the Manufacturing app."
  - q: "What does Time Efficiency mean on a work centre?"
    a: "It adjusts expected durations for that work centre. Odoo's documentation gives the example of older equipment that takes twice as long, set at 50 percent efficiency."
---

**Short answer:** in Odoo 20, enable **Work Orders** in **Manufacturing ‣ Configuration ‣ Settings**, create your
work centres in **Manufacturing ‣ Configuration ‣ Work Centers**, then add **operations** to each bill of
materials, choosing the work centre that does each step. Manufacturing orders then create one work order per
operation. Work centres provide the calendar, capacity, expected duration and cost basis used to plan and measure
that work. Operators process the resulting work orders in Manufacturing or, on Enterprise, in **Shop Floor**.

This is the setup guide. For an explanation of what work centres and work orders are for, see
[work centres and work orders in Odoo](/blog/2026/08/15/work-centers-and-work-orders-in-odoo/).

## Applies to

- **Odoo version:** Odoo 20. The setup is similar in Odoo 19, but this article now follows the current Odoo 20
  work centre and bill of materials documentation.
- **Edition:** Work centres and work orders are in the Manufacturing app in Community and Enterprise. **Shop Floor**,
  quality checks and IoT triggers are Enterprise only.
- **Apps:** Manufacturing and Inventory; Maintenance if you want equipment on work centres.

## What is the difference between an operation, a work centre and a work order?

An operation describes a production step on the bill of materials. A work centre is the resource assigned to that
step. A work order records the execution of that operation for a manufacturing order. These records answer three
different questions: what must happen, where it can happen and what happened on this production run.

| Record | Illustrative example | What to verify |
|---|---|---|
| BoM operation | Pack the finished product | Instructions and expected duration |
| Work centre | Packing Bench 1 | Working hours, capacity and hourly cost |
| Work order | Packing work for the current manufacturing order | Recorded time and completion |

Use Odoo's [work centre configuration reference](https://www.odoo.com/documentation/20.0/applications/inventory_and_mrp/manufacturing/advanced_configuration/using_work_centers.html)
to distinguish resource settings from operation settings before changing a duration or capacity.

## Before you start

1. **List where work actually happens.** A work centre is a machine, line, bench or team you schedule work on. If
   two identical machines are planned separately, make two work centres.
2. **Know your times.** For each operation, an expected duration per unit or batch, plus any setup and cleanup time.
3. **Know your costs** if you want manufacturing order costs to include labour or machine time: a cost per hour
   for each work centre.
4. **Have bills of materials ready** for the products you make. See
   [how to set up a bill of materials in Odoo 20](/blog/2026/09/24/how-to-set-up-bill-of-materials-odoo/).

## Step by step

### 1. Enable work orders

Go to **Manufacturing ‣ Configuration ‣ Settings**, tick **Work Orders** in the **Operations** section, and save.

### 2. Create work centres

1. Go to **Manufacturing ‣ Configuration ‣ Work Centers** and click **New**.
2. **Work Center Name** and a short **Code**.
3. **Working Hours:** the documented Odoo 20 default is *Work Center 40 hours/week* (Monday to Friday, 8:00 to
   16:00). Create another
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
3. Choose **Duration Computation**: the Odoo 20 BoM reference describes **Computed**, based on recent work orders,
   or **Fixed**, with a **Default Duration**. Check the labels in the installed build.
4. Where Quality is installed, add operator steps through the operation's **Instructions** tab.
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

- [How to set up a bill of materials in Odoo 20](/blog/2026/09/24/how-to-set-up-bill-of-materials-odoo/)
- [Manufacturing orders and the production workflow in Odoo](/blog/2026/08/15/manufacturing-orders-production-workflow-in-odoo/)
- [Maintenance in Odoo](/blog/2026/09/09/odoo-maintenance/), for equipment on work centres
- Rolling out manufacturing? See [Odoo implementation](/services/odoo-implementation/).

## Official references

- Odoo 20 documentation: [Work centers](https://www.odoo.com/documentation/20.0/applications/inventory_and_mrp/manufacturing/advanced_configuration/using_work_centers.html)
- Odoo 20 documentation: [Bill of materials](https://www.odoo.com/documentation/20.0/applications/inventory_and_mrp/manufacturing/basic_setup/bill_configuration.html)
- Odoo 19 documentation: [Shop Floor overview](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/manufacturing/shop_floor/shop_floor_overview.html)

*Updated on 17 November 2026 using the official Odoo 20 work centre and bill of materials documentation. The example
is illustrative and was not run on a live database. Labels can vary with installed apps and language.*
