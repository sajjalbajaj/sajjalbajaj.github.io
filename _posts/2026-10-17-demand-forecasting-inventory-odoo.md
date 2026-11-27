---
layout: post
title: "Demand Forecasting in Odoo Inventory: What It Can and Can't Do"
date: 2026-10-17 09:00:00 +0530
last_modified_at: 2026-11-27
tags: [Odoo, Odoo 19, Inventory, Inventory Management, Stock Control, Supply Chain, Procurement, Purchase]
hub: inventory
description: "Separate Odoo stock forecasts from demand estimates. Check historical purchase suggestions, replenishment timing and MPS with worked quantity examples."
faqs:
  - q: "Is Odoo's forecasted stock a prediction of future customer demand?"
    a: "The Forecasted report projects stock from recorded incoming and outgoing operations and their dates. It does not establish how much unrecorded demand customers will generate. Historical purchase suggestions and MPS demand inputs answer a different planning question."
  - q: "Why can a positive forecast still leave an order short?"
    a: "An incoming receipt may arrive after the order's delivery date, or stock may be reserved for another operation. Review the dated forecast and its allocation details rather than relying on a single end-of-period total."
  - q: "Can historical purchase suggestions account for a promotion?"
    a: "You can choose a historical reference period and scale its demand by a percentage. That adjustment expresses a planning assumption; it does not prove the promotion's actual effect. Record the reason, review the proposed quantity and compare it with subsequent demand."
---

**Short answer:** Separate three questions in Odoo: what stock will remain after recorded operations, what to replenish under your stock policy, and what future demand to plan for. The Forecasted report answers the first; reordering rules support the second. Purchase suggestions and the Master Production Schedule can use historical demand for the third. Review their assumptions, quantities and arrival dates before ordering. A historical average is a planning baseline, not proof of future sales.

## Which forecasting question are you trying to answer?

| Business question | Relevant feature | Input to verify |
| --- | --- | --- |
| Can we fulfil the recorded orders on time? | Product Forecasted report | Scheduled receipts, outgoing needs and allocations |
| When should the stock policy trigger replenishment? | Reordering rules and replenishment report | Min, Max, location, route and lead times |
| What might we buy for the next planning period? | Purchase catalogue Suggest | Historical basis, planning days, percentage and supplier |
| What demand should production prepare for over future periods? | Master Production Schedule | Forecasted demand, stock targets and replenishment ownership |

This guide focuses on Odoo 19 Inventory, Purchase and Sales, with relevant Odoo 20 documentation differences noted below. MPS requires the relevant Manufacturing functionality and edition. Additional forecasting modules or integrations must be assessed separately; this is not an inventory of every third-party forecasting product.

## What does the Forecasted report actually show?

Start from a product's **Forecasted** smart button. The [Odoo 19 reference](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/warehouses_storage/reporting/forecast.html) explains on-hand stock, incoming quantities, outgoing operations and the dated projection. Confirmed purchase, sales and manufacturing activity affects that projection; an unconfirmed RFQ does not establish an incoming replenishment.

The useful first approximation is:

**Projected stock = on hand + relevant incoming quantities - relevant outgoing quantities.**

Apply it at the date and warehouse you are evaluating. Read pending operations separately where shown. A replenishment document in draft, a late receipt or an allocation to another order can change what is actually available for the order in front of you.

### Worked example: enough stock eventually, but not on Tuesday

Illustrative scenario: Monday starts with **150 units**, an order for **180 units** is due Tuesday, and a confirmed receipt of **100 units** is due Friday. Assume no other movements.

| Point in time | Calculation | Projected balance |
| --- | --- | ---: |
| Monday opening | Starting quantity | 150 |
| Tuesday delivery requirement | 150 - 180 | -30 |
| Friday receipt | -30 + 100 | 70 |

The Friday balance is positive, but Tuesday still has a 30-unit gap. The decision is whether to expedite supply, agree a partial shipment or change the promised date. It is not solved by adding every incoming quantity to a single undated total. Verify the receipt and delivery dates after any agreed change.

The [Odoo 20 forecast reference](https://www.odoo.com/documentation/20.0/applications/inventory_and_mrp/inventory/warehouses_storage/reporting/forecast.html) also documents assigning and unassigning incoming or manufactured units to demand. Check allocation as well as quantity when using that workflow.

## Reordering rules express a stock policy

A rule's minimum is a trigger threshold; its maximum is a replenishment target. They are not, by themselves, a statistical estimate of customer demand. Set them using your agreed service level, demand assumptions and supply constraints.

The [reordering rules guide](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/warehouses_storage/replenishment/reordering_rules.html) distinguishes manual and automatic triggers, routes, replenishment multiples and planning horizons. With a manual rule, review the need before ordering. With an automatic rule, verify the trigger and resulting procurement before relying on it operationally.

Check the product and stock location, vendor or manufacturing route, lead time and packaging multiple. A different horizon can expose a future requirement sooner; it does not create a prediction of previously unknown sales. Read [reordering rules and replenishment](/blog/2026/08/13/reordering-rules-and-replenishment-in-odoo/) for the setup sequence.

## How do historical purchase suggestions work?

In Odoo 19 Purchase, open an RFQ for the intended supplier, select **Catalog** and enable **Suggest**. The [official instructions](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/purchase/advanced/suggest.html) describe a reference period, **Replenish for** days and a scaling percentage.

For the historical mode, the planning logic uses relevant outgoing or consumed quantities over the selected period, derives a daily rate and extends it across the planning days. Stock and incoming supply then affect the proposed replenishment. Check the actual warehouse and movement history; the inputs are broader than a simple total of sales quotations.

Before diagnosing a missing suggestion in Odoo 19, confirm the required apps, tracked goods, delivery history and vendor price information. The [Odoo 20 reference](https://www.odoo.com/documentation/20.0/applications/inventory_and_mrp/purchase/advanced/suggest.html) also describes a confirmed purchase order from the vendor as an alternative to a vendor-pricelist association. Use the prerequisites for your installed version.

### Worked example: a baseline and an explicit adjustment

These are simplified planning calculations, not a database test or a guarantee of an exact catalogue suggestion. Assume **600 units** of relevant consumption over **30 days**, a **30-day** planning period, **150 units** available and **100 units** incoming. For this quantity comparison, assume the incoming stock arrives when needed, with no additional reservation, rounding or packaging constraint.

| Assumption | 100% historical rate | 130% adjusted rate |
| --- | ---: | ---: |
| Daily demand | 600 ÷ 30 = 20 | 20 × 1.30 = 26 |
| Demand over 30 days | 20 × 30 = 600 | 26 × 30 = 780 |
| Available plus incoming | 150 + 100 = 250 | 250 |
| Net requirement | 600 - 250 = 350 | 780 - 250 = 530 |

The adjustment adds **180 units** to the proposed requirement. It does not show that a promotion will sell 30% more. Record who approved that assumption and why. Then check timing as in the Tuesday example, supplier minimums, pack sizes and expiry exposure before finalising an RFQ.

## When should you use the Master Production Schedule?

Use MPS when the business needs a demand plan across future periods, including demand that has not yet become confirmed orders. Its [reference](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/manufacturing/workflows/use_mps.html) describes editable forecasted demand, historical suggestions and stock targets.

An MPS history-based suggestion is an input to the plan. The planner still needs to assess seasonality, supplier or production constraints and changes in the product range. Confirm the configured replenishment trigger and who authorises the resulting purchase or manufacturing orders. Avoid overlapping replenishment mechanisms for the same product without an explicitly tested design; the documentation warns against combining MPS and reordering rules indiscriminately.

See [the MPS setup guide](/blog/2026/10/16/master-production-schedule-odoo/) for its dedicated configuration. Adding a product to a planning screen is not evidence that its supply is approved or available.

## Diagnose an implausible forecast or suggestion

| Symptom | Competing explanation | Evidence and next action |
| --- | --- | --- |
| Forecast looks healthy but orders are late | Supply is counted after the requirement date | Compare each receipt with the delivery it is expected to cover |
| Suggested quantity is unexpectedly low | Stockouts suppressed recorded consumption | Compare unavailable days and unfulfilled demand with the history window |
| Demand looks unusually high | A one-off order or internal resupply dominates history | Inspect source movements and choose a justified basis |
| Product is absent from the supplier catalogue | Vendor or product prerequisites differ | Check supplier association, tracked goods and relevant history |
| Quantity differs from the simple calculation | Different stock, warehouse, period, percentage or ordering constraints | Reconcile inputs before changing the rule |
| Supply is duplicated | More than one replenishment mechanism is active | Trace each RFQ or MO to its origin and assign a single planning owner |

Do not change on-hand stock merely to make a forecast look correct. Correct an inventory balance only when a physical count or supported stock correction justifies it.

## What would make a forecast more trustworthy?

Keep a dated record of the historical period, excluded exceptional demand, available stock, expected receipts, adjustment percentage and approved quantity. After the planning period ends, compare the original demand estimate with actual demand and record shortages and excess stock separately.

For a spreadsheet or external prediction model, compare it against a simple historical baseline on periods it was not fitted to. A more complex model is useful only if its performance and operational consequences are better for your products. Calling a suggestion AI does not establish that evidence.

For execution after planning, read [batch, wave and cluster picking](/blog/2026/10/15/batch-wave-cluster-picking-odoo/) and [backorders](/blog/2026/10/13/backorders-odoo/). If you need help connecting demand assumptions with replenishment decisions, see [Odoo implementation](/services/odoo-implementation/).

*Reviewed on 27 November 2026 against the linked Odoo 19 and corresponding Odoo 20 forecast, reordering, purchase-suggestion and MPS documentation. Both worked examples are illustrative and were not run on a live database. Actual suggestions depend on the installed version, records, dates and configuration.*
