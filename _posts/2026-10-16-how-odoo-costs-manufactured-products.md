---
layout: post
title: "How Odoo Calculates the Cost of a Manufactured Product"
date: 2026-10-16 09:00:00 +0530
tags: [Odoo, Odoo 19, Manufacturing, MRP, Accounting, Finance, Inventory Management, Stock Control]
hub: manufacturing
description: "How Odoo 19 costs a manufactured product: costing methods, Compute Price from BoM, work centre rates, by-product cost share, WIP and variances."
faqs:
  - q: "What does Compute Price from BoM do in Odoo?"
    a: "It sets the product's Cost to the expected cost from its bill of materials: each component's Cost times its quantity, plus each operation's time at the work centre's cost per hour, divided by the BoM quantity, less any by-product cost share."
  - q: "Why doesn't a manufacturing order change the cost of a standard-cost product?"
    a: "With the Standard Price costing method, finished goods always enter stock at the product's standard Cost. The difference between that and the order's real cost isn't added to stock, so you update the standard deliberately."
  - q: "Are employee wages included in Odoo manufacturing costs?"
    a: "In Community, operations are costed at the work centre's cost per hour only. Enterprise adds a per-employee rate on the work centre for the expected cost and uses each employee's hourly cost for the real cost."
---

**Short answer:** Odoo builds the cost of a manufactured product from the components it consumes, each valued by its
own costing method, plus the time spent in work centres at their cost per hour. The bill of materials gives the
*expected* cost, which **Compute Price from BoM** writes into the product's **Cost** field; a finished manufacturing
order gives the *real* cost. **Standard Price** then ignores the real cost, **AVCO** averages it in, and **FIFO**
keeps it on the units that order produced.

## Applies to

- **Odoo version:** Odoo 19. The Odoo 20 manufacturing cost and by-product pages read the same, except that the
  order's **Produce All** button is now called **Produce**.
- **Edition:** costing methods, Compute Price from BoM, the BoM Overview and the MO Overview are in Community and
  Enterprise. Employee costs on operations and the **Production Analysis** report are Enterprise only.
- **Apps:** Manufacturing, Inventory, and Invoicing or Accounting.

## Which costing method does a manufactured product use?

The one on its product category (**Inventory ‣ Configuration ‣ Product Categories**): **Costing Method** is
**Standard Price**, **First In First Out (FIFO)** or **Average Cost (AVCO)**, and **Inventory Valuation** is
**Periodic (at closing)** or **Perpetual (at invoicing)**, the Odoo 19 names. In the 19 code, a finished order values
its output like this:

- **Standard Price:** finished units enter stock at the product's **Cost**, whatever the order really cost.
- **AVCO:** the order's real unit cost is averaged with the stock already on hand.
- **FIFO:** each order's units carry that order's real cost until used or sold; the **Cost** field shows an average.

Components leave stock at their *own* costing method. For the basics of each method, see
[inventory valuation and landed costs](/blog/2026/08/14/inventory-valuation-and-landed-costs-in-odoo/).

## How does Odoo work out the cost from the bill of materials?

**Compute Price from BoM** sits next to the **Cost** field on the product form, for Manufacturing administrators and
products with a BoM (the 19 code hides it for FIFO products under perpetual valuation). It adds up:

- each component's **Cost** times its quantity on the BoM;
- each operation's time times its work centre's **Cost per hour**: setup, cleanup and the operation's duration per
  cycle, adjusted for time efficiency. With no capacity set on the work centre, one cycle is the BoM quantity;

then takes off any by-product cost share and divides by the BoM **Quantity**. The BoM's **BoM Overview** smart button
shows the same cost line by line.

The button uses each component's *current* **Cost**, so a stale sub-assembly cost passes straight up. To roll up a
multi-level BoM, select the sub-assembly and the finished product in the product list and run **Actions ‣ Compute
Price from BoM**, which recalculates a selected sub-assembly from its own BoM. Under AVCO the result isn't permanent:
later orders keep averaging into it.

## What does a manufacturing order actually cost?

Open the order's **Overview** smart button. **MO Cost** is what it *should* cost from the BoM; **Real Cost** is the
components actually consumed plus each work order's time at the work centre's hourly cost. Once the order is done,
the two columns match.

Each operation's **Cost based on** field picks **Actual time** (the default) or the estimate, labelled **Theorical
time** in Odoo 19 and **Theoretical time** in Odoo 20. If an order is closed with no time recorded, the 19 code fills
in the expected duration, so the real cost quietly equals the estimate.

On Enterprise, the work centre also has a **per employee** rate for the expected cost, and the real cost uses each
employee's **Hourly Cost**. Enterprise also adds **Manufacturing ‣ Reporting ‣ Production Analysis**, with measures
such as **Cost/Unit**, **Total Operation Cost** and **Yield Percentage (%)** to compare orders over time.

## How do by-products share the cost?

With **By-Products** enabled in Manufacturing settings, the BoM's **By-products** tab has an optional **Cost Share
(%)** column, hidden by default; the shares can't total more than 100. In the 19 code, the main product's cost is
reduced by the total share, and each by-product receives its share divided by its quantity, but only if it uses FIFO
or AVCO. A standard-cost by-product enters stock at its own **Cost**.

## Where do variances go with standard cost?

Under **Perpetual (at invoicing)**, the documentation describes a **Cost of Production** account on the production
location, set through the **locations** link in the Accounting settings. In the 19 code, consumed components are
moved into that account, work centre time is posted to it from the work centre's **Expense Account** (or the
product's expense account), and the finished product is taken out of it at its stock value. Under FIFO or AVCO that
nets to roughly zero; under Standard Price, what remains is your variance.

## Can Odoo show work in progress in the accounts?

Yes, by hand. On an open order, click the gear icon and choose **Post WIP Accounting Entry**. Odoo proposes the
components consumed and work centre time so far, debited to the **WIP Account** and credited to stock valuation and
the **WIP Overhead Account** (both set in the Accounting settings), then click **Post WIP**. The **Reversal Date**
defaults to the next day, which suits a month-end entry for orders that run across it.

## Worked example: a dining table (illustrative numbers)

| BoM line for 1 table | Basis | Cost |
|---|---|---|
| Tabletop panel | 1 × ₹6,000 | ₹6,000 |
| Legs | 4 × ₹500 | ₹2,000 |
| Hardware kit | 1 × ₹300 | ₹300 |
| Assemble, at ₹600 per hour | 90 minutes | ₹900 |
| Polish, at ₹800 per hour | 60 minutes | ₹800 |
| **Compute Price from BoM** | | **₹10,000** |

An order for 10 tables is expected to cost ₹100,000. On the floor, a leg splits and the operator records 41 legs
consumed (+₹500), and assembly takes 17 hours instead of 15 (+₹1,200). **Real Cost: ₹101,700, or ₹10,170 a table.**

- **Standard Price at ₹10,000:** the ten tables enter stock at ₹100,000; the ₹1,700 is the variance.
- **AVCO, with five tables already in stock at ₹10,000:** (₹50,000 + ₹101,700) ÷ 15 = **₹10,113.33** a table.
- **FIFO:** these ten carry ₹10,170 each; the older five stay at ₹10,000 and are used first.
- **A 2% cost share on an offcuts by-product** would lower the table's BoM cost to ₹9,800.

## When it fits and when it doesn't

It fits makers whose cost is materials plus machine and labour time per operation. Standard cost suits stable costs
and a finance team that reviews variances; AVCO is the simplest for most small manufacturers. It fits less well when
overhead is absorbed per kilogram or as a percentage of material, or when joint products need more than a fixed
percentage split. Those usually mean periodic journal entries or customisation.

## Common mistakes

- **Cost per hour left at zero:** operations cost nothing, so every product looks cheaper than it is.
- **Computing only the top level:** the parent picks up a stale sub-assembly cost.
- **Expecting a standard cost to move after an order:** it won't; update it on purpose.
- **A cost share on a standard-cost by-product:** the main product is reduced, but the by-product still enters at
  its own standard cost.
- **No time tracking:** the real cost becomes a copy of the estimate.

## Related

- [How to use the Master Production Schedule in Odoo 19](/blog/2026/10/16/master-production-schedule-odoo/)
- [How to set up a bill of materials in Odoo 19](/blog/2026/09/24/how-to-set-up-bill-of-materials-odoo/)
- [How to set up work centres and work orders in Odoo 19](/blog/2026/09/27/how-to-set-up-work-orders-odoo/)
- [Inventory valuation and landed costs in Odoo](/blog/2026/08/14/inventory-valuation-and-landed-costs-in-odoo/)
- Want product costs your finance team trusts? See [Odoo implementation](/services/odoo-implementation/).

## Official references

- Odoo 19 documentation: [Manufacturing order costs](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/manufacturing/basic_setup/mo_costs.html)
- Odoo 19 documentation: [Work-in-progress costs](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/manufacturing/basic_setup/work_in_progress.html)
- Odoo 19 documentation: [By-products](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/manufacturing/workflows/byproducts.html)
- Odoo 19 documentation: [Inventory valuation (Accounting)](https://www.odoo.com/documentation/19.0/applications/finance/accounting/get_started/inventory_valuation.html)
- Odoo 19 documentation: [Valuation of stock movements](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/inventory_valuation/operations_valuation.html)
- Odoo 19 documentation: [Production analysis](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/manufacturing/reporting/production_analysis.html)
- Odoo 19 source code: [Accounting - MRP (mrp_account) module](https://github.com/odoo/odoo/tree/19.0/addons/mrp_account)

*How this article was checked: the cost calculations, buttons, fields and accounting entries were checked against the
Odoo 19 documentation and the Odoo 19 code of the mrp, mrp_account and stock_account modules in October 2026, with the
Odoo 20 pages and code compared. Employee costs and Production Analysis are Enterprise features and come from the
documentation only. The worked example uses illustrative numbers and wasn't run on a live database.*
