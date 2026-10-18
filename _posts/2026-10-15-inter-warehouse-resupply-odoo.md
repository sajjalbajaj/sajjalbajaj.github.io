---
layout: post
title: "Moving Stock Between Branches: Inter-Warehouse Resupply in Odoo"
date: 2026-10-15 08:00:00 +0530
tags: [Odoo, Odoo 19, Setup, Inventory, Warehouse Management, Supply Chain, Logistics, Distribution]
hub: inventory
description: "Set up inter-warehouse resupply in Odoo 19: Resupply From routes, branch reordering rules, the transit location, manual transfers and lead times."
faqs:
  - q: "Where is stock while it travels between warehouses in Odoo?"
    a: "In the company's Inter-warehouse transit location. Odoo moves it there when the supplying warehouse validates its delivery, and out again when the branch validates its receipt. Stock in transit still counts in the company's inventory value."
  - q: "Do I need a separate company for each branch?"
    a: "Not if the branches belong to the same legal entity: make each one a warehouse in one company. Separate companies suit branches that are separate legal entities with their own books, and in Odoo 19 Resupply From only lists warehouses of the same company."
  - q: "Why can't I see the Resupply From field on my warehouse?"
    a: "It only appears once the company has more than one warehouse. Creating the second warehouse switches on the multi-warehouse features, and Storage Locations, by itself."
---

**Short answer:** in Odoo 19, create a warehouse for each branch, then on each branch's warehouse form tick the
central warehouse under **Resupply From**. Odoo creates a route called *Branch: Supply Product from Central*. Tick
that route on the products the branch gets centrally and add a reordering rule at the branch's stock location
using it. When the rule triggers, Odoo creates a delivery at the central warehouse and a receipt at the branch,
and the goods sit in an **Inter-warehouse transit** location in between.

This is the setup guide. For the concepts, see my explainers on
[warehouses, locations and operation types](/blog/2026/08/13/warehouses-locations-operation-types-in-odoo/) and
[replenishment in Odoo](/blog/2026/08/13/reordering-rules-and-replenishment-in-odoo/).

## Applies to

- **Odoo version:** Odoo 19. I also checked the Odoo 20 documentation, where the inter-warehouse replenishment,
  warehouse and reordering rule pages read the same as in Odoo 19. In the Odoo 20 code, **Resupply From** is no
  longer limited to warehouses of the same company, and cross-company resupply goes through the inter-company
  transit location.
- **Edition:** Community and Enterprise. Everything here is in the Inventory app of both.
- **Apps:** Inventory, plus Purchase if the central warehouse buys from vendors.

## Before you start

1. **One warehouse per site.** A branch with its own address is a warehouse; a room or zone inside a site is a
   location. My [warehouse setup guide](/blog/2026/09/23/how-to-set-up-warehouse-locations-odoo/) covers the
   difference.
2. **Decide what is supplied centrally.** Some products may be bought locally by a branch. Only centrally supplied
   products need the resupply route.
3. **Know the travel time** between each pair of sites in days. You'll enter it as a lead time.
4. **Separate legal entities?** Then you need multi-company and inter-company flows, not just warehouses. See
   [how to set up multi-company in Odoo](/blog/2026/09/29/how-to-set-up-multi-company-odoo/).

## Step by step

1. **Create the branch warehouses.** Go to **Inventory ‣ Configuration ‣ Warehouses**, click **New**, and fill in
   **Warehouse**, **Short Name** (up to five characters, used on transfer references) and **Address**. When you
   create the second warehouse, Odoo warns that **Storage Locations** will be switched on, and the multi-warehouse
   fields appear. There's no separate multi-warehouse checkbox to tick.
2. **Set Resupply From.** Open a branch warehouse, go to the **Warehouse Configuration** tab and, under
   **Resupply**, tick the central warehouse in **Resupply From**. Save. Odoo creates the route *Branch: Supply
   Product from Central* and activates the **Inter-warehouse transit** location. A branch can tick more than one
   supplying warehouse, including another branch.
3. **Put the route on products.** On each product, open the **Inventory** tab and, under **Operations**, tick
   *Branch: Supply Product from Central* in **Routes**. With **Multi-Step Routes** enabled, you can set it once on
   the product category instead.
4. **Add a reordering rule at the branch.** Go to **Inventory ‣ Operations ‣ Replenishment** and click **New**.
   Choose the **Product**, set **Location** to the branch stock (for example `JAL/Stock`), and enter **Min** and
   **Max**. Show the **Route** column from the column settings and pick the resupply route. If you leave it empty,
   Odoo shows the route it would use in grey, which may be Buy.
5. **Choose the trigger.** **Auto** creates the transfers itself; **Manual** lists the need on the Replenishment
   report for someone to click **Order**.
6. **Add travel time.** Enable **Multi-Step Routes** in **Inventory ‣ Configuration ‣ Settings**, open **Inventory
   ‣ Configuration ‣ Routes**, open the resupply route, then the rule that brings goods from transit into the
   branch's stock, and set **Lead Time** in days. Odoo schedules the transfers that many days before the branch
   needs the goods, and the branch's rule adds those days when it works out the forecast.
7. **One-off resupply.** On the product form, click **Replenish**, set **Warehouse** to the branch and **Preferred
   Route** to the resupply route, enter the **Quantity** and click **Confirm**.
8. **A quick direct move.** For a same-day hand-over, go to **Inventory ‣ Operations ‣ Internal**, click **New**,
   pick the central warehouse's internal transfer type, set **Source Location** to `CEN/Stock` and **Destination
   Location** to `JAL/Stock`, add lines and validate. It's one step with no transit, so stock appears at the branch
   the moment you validate.

## Worked example: a central warehouse supplying two branches

A paint distributor runs a **Central** warehouse (`CEN`) and two branch shops, **Jalandhar** (`JAL`) and
**Amritsar** (`ASR`). Both branches have **Resupply From** set to Central and a 1-day **Lead Time** on their transit
rules. These three reordering rules, all **Auto**, cover *Exterior emulsion, 20 L*:

| Warehouse | Location | Min | Max | Route |
|---|---|---|---|---|
| Jalandhar | `JAL/Stock` | 10 | 30 | Jalandhar: Supply Product from Central |
| Amritsar | `ASR/Stock` | 8 | 24 | Amritsar: Supply Product from Central |
| Central | `CEN/Stock` | 60 | 150 | Buy |

1. Jalandhar has 18 tins. A contractor's order for 14 is confirmed there, so the branch forecast drops to 4,
   below Min.
2. When the order is confirmed (or at the next scheduler run), the Auto rule orders 30 minus 4 = **26 tins**. Odoo
   creates a **CEN** delivery from `CEN/Stock` to **Inter-warehouse transit**, and a **JAL** receipt from transit
   to `JAL/Stock`, which waits for the delivery.
3. Central's forecast is now 22 on hand minus 26 going out, below its Min of 60, so at its next run Central's
   own Buy rule raises a purchase. Branch demand flows up to the warehouse that buys.
4. Central has only 22 tins to send today. The dispatcher sends 22 and creates a backorder for 4, as in my guide
   to [backorders in Odoo](/blog/2026/10/13/backorders-odoo/).
5. Next day, Jalandhar receives 22 and creates a backorder for the 4 still to come from Central.

Amritsar works the same way, independently, from its own rule.

## What you should see

- A **Routes** smart button on each branch warehouse that includes the resupply route.
- The route as a checkbox on the product's **Inventory** tab.
- Pairs of transfers: a central delivery into **Inter-warehouse transit**, and a branch receipt in **Waiting
  Another Operation** until the delivery is validated, then **Ready**.
- Stock in transit under **Inventory ‣ Configuration ‣ Locations** once you remove the **Internal** filter. It's
  still part of the company's inventory value.

## Troubleshooting

**Resupply From isn't on the warehouse form.**
The company has only one active warehouse. Create the branch warehouse first.

**The branch rule created a purchase instead of a transfer.**
The rule has no **Route**, so Odoo used the default, often Buy. Set the resupply route on the rule.

**The branch receipt stays in Waiting Another Operation.**
The central warehouse hasn't validated its delivery yet. Check it, and its stock.

**The central delivery is waiting for stock.**
Central has nothing to send. Give Central its own reordering rule so branch demand turns into purchases.

**Stock seems to vanish between sites.**
It's in **Inter-warehouse transit** until the branch validates its receipt.

**A warehouse is missing from Resupply From.**
In Odoo 19 the list only shows the other warehouses of the same company.

## Related setup

- [How to set up reordering rules in Odoo 19](/blog/2026/09/23/how-to-set-up-reordering-rules-odoo/)
- [How to set up a warehouse and locations in Odoo 19](/blog/2026/09/23/how-to-set-up-warehouse-locations-odoo/)
- [Shipping and receiving in Odoo](/blog/2026/08/14/shipping-and-receiving-in-odoo/)
- Running several branches and want replenishment to work without daily phone calls? See
  [Odoo implementation](/services/odoo-implementation/).

## Official references

- Odoo 19 documentation: [Inter-warehouse replenishment](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/warehouses_storage/replenishment/resupply_warehouses.html)
- Odoo 19 documentation: [Warehouses](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/warehouses_storage/inventory_management/warehouses.html)
- Odoo 19 documentation: [Reordering rules](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/warehouses_storage/replenishment/reordering_rules.html)
- Odoo 19 documentation: [Routes and push/pull rules](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/shipping_receiving/daily_operations/use_routes.html)
- Odoo 19 documentation: [Lead times](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/warehouses_storage/replenishment/lead_times.html)

*How this guide was checked: menu paths, field names and behaviour were checked against the Odoo 19 documentation
and the Odoo 19 code for warehouses, resupply routes, rules, reordering rules and the transit location, in October
2026. The worked example is illustrative and wasn't run on a live database, so there are no screenshots; labels can
vary slightly with your installed apps and language.*

If you're planning branch replenishment across several sites, I can help map the routes and rules before go-live.
See [Odoo consulting](/services/odoo-consulting/).
