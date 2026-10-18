---
layout: post
title: "Van Sales and Route Sales in Odoo: What Works, What Needs Adding"
date: 2026-10-14 09:00:00 +0530
tags: [Odoo, Odoo 19, Sales, Distribution, Logistics, Point of Sale, Inventory Management, Trading]
hub: sales
description: "Van sales in Odoo 19: van stock, loading, selling and taking payment on the route, returns, end-of-day checks, and the gaps an app or customisation fills."
faqs:
  - q: "Can Odoo be used offline on a sales van?"
    a: "Point of Sale can. In Odoo 19 it keeps taking orders during an outage and syncs them when the connection returns. The rest of Odoo 19 only lets you view records you opened earlier, so offline sales orders need a dedicated app or customisation."
  - q: "Should each van be a warehouse or a location in Odoo?"
    a: "A location is simpler and enough when the van sells through Point of Sale. A warehouse per van gives each van its own operation types, lets a driver's sales orders default to their van, and lets reordering rules top the van up from the main warehouse."
  - q: "Does Odoo have route or beat plans for van salespeople?"
    a: "Not as a standard feature in Odoo 19. Dispatch management puts batches of pre-sold deliveries on a vehicle, but a plan of which shops each van visits on which day is usually added as an app or a small customisation."
---

**Short answer:** Odoo 19 covers the core of van sales with standard apps: the van becomes a stock location or a
small warehouse, stock transfers load and unload it, the driver sells from it with Point of Sale (or Sales), takes
cash or puts the sale on the customer's account, and closes the register at night with a cash count. What usually
needs an app or customisation is offline order-taking outside Point of Sale, route visit plans, and a single
end-of-day settlement per driver.

If your vans deliver orders that were sold in advance rather than selling from stock, my
[recap of a route-planning module shown at Odoo Experience India 2026](/blog/2026/10/04/ai-route-planning-odoo-experience-india-2026/)
covers that side.

## Applies to

- **Odoo version:** Odoo 19. I also checked the Odoo 20 documentation. Its general offline mode can create and edit
  records offline and sync them later, although the documentation describes it as a solution for short
  interruptions. The **Dispatch Management System** setting is renamed **Transport Management**, and the Field
  Service page on default warehouses now redirects to the Planning documentation.
- **Edition:** Community and Enterprise for Inventory, Sales and Point of Sale. The default-warehouse setup is
  documented under Field Service, which is Enterprise, but the **Default Warehouse** preference itself comes with
  Sales and Inventory.
- **Apps:** Inventory, Point of Sale and/or Sales, Invoicing; Fleet if you track the vehicles.

## What does van sales actually need?

Six things, daily: stock on the van that Odoo knows about, loading, selling on the route, collecting payment,
returns, and an end-of-day check that stock and money add up. Odoo covers each one; the gaps are in tying them
together per driver.

## Should a van be a location or a warehouse?

- **A location:** turn on **Storage Locations** and create one per van under the warehouse, for example `WH/Van 1`.
  Keep it outside `WH/Stock`, because Odoo reserves stock from a location and everything inside it, so warehouse
  orders could otherwise take goods that are already on the van.
- **A warehouse:** create a small warehouse per van under **Inventory ‣ Configuration ‣ Warehouses**. Each gets its
  own operation types, including a **PoS Orders** type that takes stock from that van, and **Resupply From** can
  point at the main warehouse.

Choose a location if drivers sell only through Point of Sale. Choose a warehouse if they also raise sales orders, or
you want Odoo to suggest each van's top-up.

## How do you load and unload the van?

With van locations, loading is an internal transfer from `WH/Stock` to the van, and unloading is the reverse.

With van warehouses, set **Resupply From** to the main warehouse, tick the van's **Supply Product from** route on the
products, and add reordering rules on the van's stock location. The **Replenishment** report then shows what each
van needs to get back to its standard load, and **Order** creates a delivery from the main warehouse and a receipt
on the van. My guide to [reordering rules](/blog/2026/09/23/how-to-set-up-reordering-rules-odoo/) covers Min and Max.

## How do you sell on the route: Point of Sale or Sales?

**Point of Sale** suits walk-in style selling: pick products, take payment, print or send a receipt. Create one point
of sale per van. In its settings, the **Operation Type** under **Inventory** decides the stock source; Odoo's help
text says products are consumed from its default source location. Use the van warehouse's **PoS Orders** type, or a
copy of it pointing at the van location.

**Sales** suits order-based selling with quotations and invoices. Set each driver's **Default Warehouse** (in their
user preferences) to their van, and their sales orders take stock from it; the **Warehouse** field sits on the
order's **Other Info** tab. This needs the van to be a warehouse.

## How do drivers collect payment?

In Point of Sale, offer cash and any other payment methods you use. For shops that buy on credit, create a **Customer
account** payment method (**Identify Customer** ticked, **Journal** left blank so it uses the customer's receivable).
Odoo warns when a customer passes their maximum sales credit but doesn't stop the sale, so read my post on
[customer credit limits](/blog/2026/10/12/customer-credit-limits-odoo/) before trusting it.

With Sales, the driver invoices and registers the payment, or sends a payment link.

## How do returns work on the route?

In Point of Sale, refund against a past order, or add products with a negative quantity; a preset with **Return
mode** enters everything as negative. Odoo creates a return transfer into the operation type's source location, the
van. With Sales, use the **Return** button on the validated delivery, then a credit note if it was invoiced. Damaged
goods come back onto the van too, so scrap them at unloading. For crates and bottles, see
[returnable crates, bottles and deposits](/blog/2026/10/13/returnable-crates-bottles-deposits-odoo/).

## What does end-of-day reconciliation look like?

- **Money:** **Close Register** shows the expected amount per payment method; the driver counts the cash. With **Set
  Maximum Difference** and an **Authorized Difference**, a bigger gap needs a manager.
- **Stock:** count the van in **Inventory ‣ Operations ‣ Physical Inventory**, filtered by its location, then unload.

## What usually needs an app or customisation?

- **Offline order-taking outside Point of Sale.** Point of Sale keeps selling during an outage and syncs later, and
  invoices requested offline are generated when the connection returns. Odoo 19's general offline mode is read-only.
- **Route or beat plans:** which shops each van visits on which day, with the outcome of each visit.
- **One settlement per driver:** stock loaded, sold, returned and counted, against cash, account sales and the
  register close, on one page.
- **Empties and deposits** collected on the route, if you use returnable containers.

## When it fits and when it doesn't

Standard Odoo fits when vans sell from stock through Point of Sale and signal is mostly available. It fits less well
when drivers need full sales orders offline, or management wants a daily van settlement in one place. If the vans
only deliver pre-sold orders, use delivery orders, batches and **Dispatch Management**, which assigns batches to
vehicles and checks their capacity. On a
[propane delivery project I delivered](/case-studies/propane-delivery-odoo-routes-accounting/), routes were planned in
Odoo from the day's delivery orders and invoices came from completed deliveries.

## Worked example: a snacks distributor with three vans

An illustrative distributor runs three vans, each with a driver who also sells.

1. **Setup:** three warehouses, Van 1 to Van 3 (short names `VAN1` to `VAN3`), resupplied from the main warehouse,
   with a reordering rule per product on each van at its standard load and a **Manual** trigger. Each van has its
   own point of sale using its **PoS Orders** type, with cash and **Customer account** payment methods.
2. **Evening before:** the warehouse lead opens **Replenishment**, filters by van and clicks **Order**. The morning
   load is a validated delivery from the main warehouse and receipt on the van.
3. **On the route:** the driver opens the register and sells. A shop returns two damaged packs through a **Return
   mode** preset; a regular customer buys on account. Signal drops in one village, and Point of Sale keeps selling
   offline, then syncs.
4. **Evening:** the driver closes the register with a cash count, counts the van and scraps the damaged packs.
   Tomorrow's top-up appears on the Replenishment report.

What the business still adds is a one-page settlement per van and a weekly visit plan per route.

## Common mistakes

- **Van locations inside `WH/Stock`:** warehouse deliveries reserve van stock.
- **One shared point of sale for all vans:** sales and cash can't be reconciled per driver.
- **Unloading before counting:** the variance disappears into the warehouse.

## Related

- [How to set up a warehouse and storage locations in Odoo 19](/blog/2026/09/23/how-to-set-up-warehouse-locations-odoo/)
- [How to set up Point of Sale in Odoo](/blog/2026/09/25/how-to-set-up-point-of-sale-odoo/)
- [A B2B ordering portal for dealers and distributors in Odoo](/blog/2026/10/14/b2b-dealer-ordering-portal-odoo/), for shops that order
  ahead
- [How to set up fleet management in Odoo](/blog/2026/10/02/how-to-set-up-fleet-odoo/)
- [ERP for trading and distribution](/blog/2026/08/26/erp-for-trading-and-distribution/)

## Official references

- Odoo 19 documentation: [Locations](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/warehouses_storage/inventory_management/use_locations.html)
- Odoo 19 documentation: [Warehouses](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/warehouses_storage/inventory_management/warehouses.html)
- Odoo 19 documentation: [Inter-warehouse replenishment](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/warehouses_storage/replenishment/resupply_warehouses.html)
- Odoo 19 documentation: [Field Service product management (default warehouse)](https://www.odoo.com/documentation/19.0/applications/services/field_service/product_management.html)
- Odoo 19 documentation: [Point of Sale: sell, refund, close and offline](https://www.odoo.com/documentation/19.0/applications/sales/point_of_sale/use.html)
- Odoo 19 documentation: [Customer account](https://www.odoo.com/documentation/19.0/applications/sales/point_of_sale/payment_methods/customer_credit.html)
- Odoo 19 documentation: [Offline mode](https://www.odoo.com/documentation/19.0/applications/general/offline_mode.html)
- Odoo 19 documentation: [Dispatch management system](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/shipping_receiving/setup_configuration/dispatch.html)

*How this article was checked: features, menu paths and field names were checked against the Odoo 19 documentation
and the Odoo 19 source (the Point of Sale operation type, per-warehouse PoS Orders types, the user's default
warehouse and stock reservation) in October 2026. The worked example is illustrative and wasn't run on a live
database, so there are no screenshots; labels can vary slightly with your installed apps and language.*

Planning van sales on Odoo, or deciding what to build around it? I can help you scope the standard setup and the
pieces worth adding. See [Odoo implementation](/services/odoo-implementation/).
