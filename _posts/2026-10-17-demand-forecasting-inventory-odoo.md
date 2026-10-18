---
layout: post
title: "Demand Forecasting in Odoo Inventory: What It Can and Can't Do"
date: 2026-10-17 09:00:00 +0530
tags: [Odoo, Odoo 19, Inventory, Inventory Management, Stock Control, Supply Chain, Procurement, Purchase]
hub: inventory
description: "Demand forecasting in Odoo 19, honestly: forecasted stock, reordering rules, purchase suggestions from sales history, MPS demand, and where it stops."
faqs:
  - q: "Does Odoo 19 have demand forecasting?"
    a: "Not a statistical forecasting engine. It projects stock from confirmed orders, and it can average past deliveries to suggest purchase quantities or, in the Master Production Schedule (Enterprise), forecasted demand per period. Trends, promotions and new products need human judgement, a spreadsheet or an external tool."
  - q: "What does forecasted quantity mean in Odoo?"
    a: "On-hand stock plus confirmed incoming purchase and manufacturing orders, minus confirmed outgoing deliveries and component needs, by scheduled date. Quotations and requests for quotation don't count until they're confirmed."
  - q: "Can Odoo's AI predict stock demand?"
    a: "Not in Odoo 19 as documented. The AI app (Enterprise) covers Ask AI, agents, AI fields, server actions and text tools; none of its documented features forecasts demand."
---

**Short answer:** Odoo 19 doesn't have a statistical demand-forecasting engine. It projects stock from what is already
confirmed (the Forecasted report), acts on that projection with reordering rules, and can average past deliveries over a
period you choose, either to suggest purchase quantities or, in the Master Production Schedule (Enterprise), to suggest
demand per period. Trends, promotions and new products remain a human judgement, a spreadsheet or an external tool,
with the result fed back into Odoo as Min and Max or as MPS demand.

The replenishment basics are in my explainer on
[replenishment in Odoo](/blog/2026/08/13/reordering-rules-and-replenishment-in-odoo/).

## Applies to

- **Odoo version:** Odoo 19. The Odoo 20 documentation for the forecasted report, reordering rules, replenishment
  report, MPS and purchase suggestions reads the same as Odoo 19. The Odoo 20 code goes further: reordering rules gain a
  **Daily Demand** figure, and the Replenishment Information pop-up can set Min and Max from days of cover and
  replenishment frequency. The 20 documentation doesn't describe that yet, so check it on a 20 database.
- **Edition:** Community and Enterprise for the forecasted report, reordering rules, the replenishment report and
  purchase suggestions. The MPS, Odoo Spreadsheet (part of Documents) and the AI app are Enterprise only.
- **Apps:** Inventory, Purchase and Sales; Manufacturing for the MPS.

## What does "forecasted" mean in Odoo?

The **Forecasted** smart button on a tracked product opens a report of **On Hand**, **Incoming**, **Outgoing** and
**Forecasted** stock over time. Incoming means confirmed purchase and manufacturing orders; outgoing means confirmed sales
orders and other outgoing operations, placed on their scheduled dates. Requests for quotation and quotations don't count
until they're confirmed.

A negative forecast is a useful early warning that commitments exceed supply. But it's a projection of orders you
already have, not a prediction of orders you'll get.

## How do reordering rules use it?

A reordering rule compares the forecast, within the lead-time window, with its **Min** and orders enough to reach
**Max**. On the replenishment report, **horizon days** make manual rules look further ahead. The rule never changes its
own Min or Max: those two numbers are your forecast, written down. The steps are in
[how to set up reordering rules](/blog/2026/09/23/how-to-set-up-reordering-rules-odoo/).

## Can Odoo suggest quantities from past demand?

Yes, in two places, both built on averages:

- **Suggest in the purchase catalogue.** On a request for quotation, choose the vendor, click **Catalog** and toggle
  **Suggest**. Set **Replenish for** (days) and **Based on** (forecasted, the last 7 days, 30 days, 3 months or 12
  months, or the same month or quarter last year), plus a percentage to scale it. Odoo averages the warehouse's
  deliveries and component consumption over that period, multiplies by the days, and deducts available and incoming
  stock. Products must be tracked goods with a vendor price and at least one validated delivery.
- **The Replenishment Information pop-up.** The info icon on a line of **Inventory ‣ Operations ‣ Replenishment**
  shows the lead times. In the Odoo 19 code it also has a **Min - Max** panel: pick a **Based on** period and percentage
  and Odoo shows **Daily Demand**, **Average Stock**, **Ordering Frequency** and **Lead Time** against the rule's
  current Min and Max, which you can edit there.

Apart from Suggest's forecasted option, which uses confirmed future orders, both work on averages of past demand: a
sound baseline, with no trend, no events and no seasonality beyond "same period last year".

## What does the Master Production Schedule add?

The MPS (Enterprise), under **Manufacturing ‣ Planning ‣ Master Production Schedule**, plans by period. Each product has
a **Forecasted Demand** row you type in, or fill with **Suggest Forecasted Demand**, based on **Actual Demand**,
**Previous Year**, or the last 30 days, 3 months or 12 months, scaled by a percentage. With a **Safety Stock Target** and
**Minimum to Replenish**, Odoo proposes a replenishment quantity per period and you click **Order**. It works for bought
products too.

The documentation warns against also putting reordering rules on MPS products. More in my post on the
[master production schedule](/blog/2026/10/16/master-production-schedule-odoo/).

## Where do reports and spreadsheets fit?

History lives in **Sales ‣ Reporting ‣ Products** and **Inventory ‣ Reporting ‣ Moves Analysis**, grouped by product
and month. In Enterprise, insert that pivot into Odoo Spreadsheet and use functions such as **FORECAST**, **TREND**,
**GROWTH** and **POLYFIT.FORECAST**, or add a trend line (linear, exponential, polynomial, logarithmic or trailing
moving average) to a chart. That can capture trend and seasonality, but someone has to own the model and copy the
result into Min and Max or the MPS.

## What about AI?

The Odoo 19 AI app (Enterprise) documents Ask AI, agents, AI fields, server actions, document sorting, email templates,
voice and text improvement. None of it forecasts demand, and the Odoo 20 additions (image generation and an MCP server)
don't either. See [AI in Odoo: what it can do today](/blog/2026/08/11/ai-in-odoo-what-it-can-do-today/).

## When it fits and when it doesn't

- **Odoo alone fits** steady demand with sensible lead times and a buyer who reviews Min and Max every few months, or a
  seasonal maker using the MPS with last year as the baseline.
- **It doesn't fit** thousands of products with patchy demand, promotion-driven sales, frequent launches, or long import
  lead times where safety stock should follow a target service level. There, a forecasting tool or custom module
  calculates the numbers and pushes them into Odoo, for example by importing Min and Max. On a dairy project I
  delivered, the daily milk allocation came from a forecasting feature built on top of Odoo, not from a standard
  setting ([case study](/case-studies/dairy-farm-erp-direct-to-consumer/)).

## Worked example: a spice distributor before the festive season

A Ludhiana distributor buys turmeric powder in 500 g packs from one vendor with a 10-day lead time. The figures are
illustrative.

- In the last 30 days it delivered 600 packs, an average of 20 a day.
- Today 150 packs are available and 100 are on a confirmed purchase order.
- With **Suggest**, **Replenish for** 30 days and **Based on** the last 30 days at 100%, estimated demand is 600, so
  Odoo suggests 600 − (150 + 100) = **350** packs.
- For the festive month the buyer raises the percentage to 130%. Daily demand becomes 26, estimated demand 780, and the
  suggestion **530** packs.
- The buyer also raises the reordering rule's Min for the season and lowers it again afterwards. Odoo won't make that
  change by itself.

## Common mistakes

- **Reading the Forecasted report as a sales forecast.** It only shows confirmed commitments.
- **Setting Min and Max once and never revisiting them** as demand changes.
- **Using the MPS and reordering rules on the same product**, which the documentation warns against.
- **Understated lead times**, so rules look too short a way ahead and trigger late.
- **Expecting draft quotations to count.** They're ignored by the forecast and by Suggest until confirmed.

## Related

- [How to set up reordering rules in Odoo 19](/blog/2026/09/23/how-to-set-up-reordering-rules-odoo/)
- [Automating purchasing in Odoo](/blog/2026/08/17/automating-purchasing-in-odoo/)
- [How to use the master production schedule (MPS) in Odoo 19](/blog/2026/10/16/master-production-schedule-odoo/)
- [Odoo Spreadsheet](/blog/2026/09/07/odoo-spreadsheet/)
- [Inter-warehouse resupply in Odoo](/blog/2026/10/15/inter-warehouse-resupply-odoo/)

## Official references

- Odoo 19 documentation: [Forecasted report](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/warehouses_storage/reporting/forecast.html)
- Odoo 19 documentation: [Reordering rules](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/warehouses_storage/replenishment/reordering_rules.html)
- Odoo 19 documentation: [Replenishment report](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/warehouses_storage/replenishment/report.html)
- Odoo 19 documentation: [Suggest quantities based on historical demand](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/purchase/advanced/suggest.html)
- Odoo 19 documentation: [Master production schedule](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/manufacturing/workflows/use_mps.html)
- Odoo 19 documentation: [Spreadsheet functions](https://www.odoo.com/documentation/19.0/applications/productivity/spreadsheet/work_with_data/functions.html)
- Odoo 19 documentation: [AI](https://www.odoo.com/documentation/19.0/applications/productivity/ai.html)

*How this article was checked: features, menu paths and calculations were checked against the Odoo 19 documentation and
the Odoo 19 code for the forecasted report, reordering rules, the Replenishment Information pop-up and the purchase
catalogue's Suggest option in October 2026. The MPS, Documents and AI apps are Enterprise only, absent from Odoo 19
Community. The worked example is illustrative and wasn't run on a live database.*

If your planning has outgrown Min and Max set by feel, see [Odoo consulting](/services/odoo-consulting/) and we can work
out what Odoo should calculate and what belongs in a separate forecast.
