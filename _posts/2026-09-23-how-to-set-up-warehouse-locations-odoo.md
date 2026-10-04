---
layout: post
title: "How to Set Up a Warehouse and Storage Locations in Odoo 19"
date: 2026-09-23 08:00:00 +0530
last_modified_at: 2026-10-04
tags: [Odoo, Odoo 19, Setup, Inventory, Warehouse, Warehouse Management, Logistics, Inventory Management]
hub: inventory
description: "Set up Odoo 19 warehouses and storage locations step by step: the settings to enable, location structure, putaway rules, receipt and delivery steps, and fixes."
faqs:
  - q: "Why can't I see the Locations menu in Odoo Inventory?"
    a: "The Storage Locations setting is off. Enable it in Inventory, Configuration, Settings, under the Warehouse section. Enabling Multi-Step Routes also switches Storage Locations on."
  - q: "Should I create a warehouse or a location?"
    a: "Create a warehouse for a separate physical site with its own address, such as a second depot. Create locations for areas inside a site, such as zones, racks, shelves or a cold room."
  - q: "How many steps should receipts and deliveries use?"
    a: "Start with one step unless you have a clear reason for more. Two-step receipts suit sites with a receiving or inspection area, and two- or three-step deliveries suit sites that pick, pack and ship separately."
---

**Short answer:** Odoo 19 already creates one warehouse (short name **WH**) with your company address. To
organise stock inside it, enable **Storage Locations** in **Inventory ‣ Configuration ‣ Settings**, then
create locations under `WH/Stock` in **Inventory ‣ Configuration ‣ Locations**. Add **putaway rules** if
incoming products should go to specific locations automatically, and enable **Multi-Step Routes** only if you
receive or ship in more than one step.

This is the step-by-step setup guide. For the concepts behind warehouses, locations and operation types, see my
explainer: [Warehouses, locations and operation types in Odoo](/blog/2026/08/13/warehouses-locations-operation-types-in-odoo/).

## Applies to

- **Odoo version:** Odoo 19. Odoo 20 was released in September 2026; check its documentation before applying
  these steps to an Odoo 20 database.
- **Edition:** Community and Enterprise. The Barcode app mentioned below is Enterprise only; everything else is
  in the Inventory app in both editions.

## Before you start

1. **Draw the layout first.** List your sites, then the areas inside each one: receiving, main storage zones,
   racks or bins you really pick from, quarantine or damaged stock, and dispatch. Only model the level of detail
   your team will actually scan or select every day.
2. **Agree naming.** Location names build into paths such as `WH/Stock/Zone A/Rack 01`, so keep them short and
   consistent.
3. **Decide whether you need a second warehouse.** A separate building with its own address is a warehouse. A
   room or zone in the same building is a location.

## Step by step

### 1. Check or edit your main warehouse

1. Go to **Inventory ‣ Configuration ‣ Warehouses** and open the existing warehouse.
2. Set a clear **Warehouse** name, and a **Short Name** of up to five characters. The short name appears on
   warehouse documents, so pick something memorable, such as `MOH` for a Mohali site.
3. Confirm the **Address** and **Company**, then save.
4. For an additional site, click **New** and fill in the same fields.

### 2. Enable storage locations

1. Go to **Inventory ‣ Configuration ‣ Settings**.
2. In the **Warehouse** section, tick **Storage Locations**. Tick **Multi-Step Routes** too if you plan to
   receive or deliver in more than one step; it switches Storage Locations on automatically.
3. Click **Save**.

### 3. Create your locations

1. Go to **Inventory ‣ Configuration ‣ Locations** and click **New**.
2. **Location Name:** for example `Zone A`.
3. **Parent Location:** `WH/Stock`, so the full path becomes `WH/Stock/Zone A`.
4. **Location Type:** keep **Internal** for anywhere you physically store stock. Other types (Vendor, Customer,
   Inventory Loss, Production, Transit, Virtual) are for Odoo's own accounting of where stock comes from and goes.
5. Optional fields:
   - **Barcode**, if you'll scan locations with the Barcode app.
   - **Inventory Frequency** (days), to schedule regular cycle counts for this location.
   - **Removal Strategy** in the Logistics section: FIFO, LIFO, Closest Location, Least Packages or FEFO.
6. Save, then repeat for each zone, rack or room. Create the parent locations before their children.

### 4. Add putaway rules (optional)

1. Go to **Inventory ‣ Configuration ‣ Putaway Rules** and click **New**. (If the menu is missing, enable
   **Multi-Step Routes** in settings.)
2. Choose the **Product** or **Product Category** the rule applies to.
3. **When product arrives in:** the receiving location, for example `WH/Stock`.
4. **Store to:** a sub-location of that location, for example `WH/Stock/Cold Room`.
5. Save, and repeat for other products or categories.

### 5. Choose receipt and delivery steps (optional)

1. Open the warehouse in **Inventory ‣ Configuration ‣ Warehouses** and go to the **Warehouse Configuration** tab.
   (These options appear once **Multi-Step Routes** is enabled.)
2. **Incoming Shipments:** one step (receive straight into stock), two steps (input, then stock) or three steps.
3. **Outgoing Shipments:** one step (deliver straight from stock), two steps (pick, then ship) or three steps
   (pick, pack, ship).
4. Save.

### 6. Load opening stock

Use **inventory adjustments** to record the opening quantity in each location, so stock history and valuation
start from a proper, documented count.

## Worked example: a food distributor with a cold room

A distributor of packaged foods runs one site. Most products sit on racks, fast movers are kept near dispatch,
and chilled items need the cold room.

| Location | Purpose |
|---|---|
| `WH/Stock/Fast Movers` | Top sellers near the dispatch bay |
| `WH/Stock/Racks` | Everything else |
| `WH/Stock/Cold Room` | Chilled products |

Putaway rules:

- Product category **Chilled**, arriving in `WH/Stock` → store to `WH/Stock/Cold Room`.
- An empty rule (no product or category) arriving in `WH/Stock` → store to `WH/Stock/Racks`, so nothing is left
  in the parent location by accident.

Receipts stay one-step because the team puts goods away as they unload. Deliveries become two-step (pick, then
ship) so a supervisor can check orders in the dispatch bay before they leave. FEFO is set on the cold room,
because chilled products are tracked by lots with expiry dates.

## What you should see

- Locations listed in **Inventory ‣ Configuration ‣ Locations** with full paths such as `WH/Stock/Cold Room`.
- When a receipt into `WH/Stock` is validated, chilled products are directed to `WH/Stock/Cold Room` and everything
  else to `WH/Stock/Racks`.
- With two-step delivery, each confirmed sales order creates a pick operation followed by a delivery operation.
- On-hand quantities can be filtered or grouped by location.

## Troubleshooting

**There is no Locations menu.** Enable **Storage Locations** in **Inventory ‣ Configuration ‣ Settings**.

**The warehouse form has no receipt or delivery step options.** Enable **Multi-Step Routes** in the same settings.

**Putaway rules are ignored.** The **Store to** location must be a sub-location of **When product arrives in**, and
the rule's product or category must match the product received. Check that the receipt's destination is the
location named in the rule.

**FEFO has no effect.** FEFO picks by expiry date, so it only works for products tracked by lots that carry
expiry dates.

**Stock appears in the parent location.** Products without a matching putaway rule stay where they arrive. Add a
general rule, as in the example, or move them with an internal transfer.

**Picking takes longer than before.** The structure is probably too detailed. Merge locations nobody needs to
search by, and keep bin-level locations for the areas where they save time.

## Related setup

- [How to set up products and units of measure in Odoo 19](/blog/2026/09/22/how-to-set-up-products-in-odoo/)
- [How to set up reordering rules in Odoo 19](/blog/2026/09/23/how-to-set-up-reordering-rules-odoo/)
- [Inventory adjustments and cycle counts in Odoo](/blog/2026/08/13/inventory-adjustments-and-cycle-counts-in-odoo/)
- Planning a multi-warehouse rollout? See [Odoo implementation](/services/odoo-implementation/).

## Official references

- Odoo 19 documentation: [Warehouses](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/warehouses_storage/inventory_management/warehouses.html)
- Odoo 19 documentation: [Locations](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/warehouses_storage/inventory_management/use_locations.html)
- Odoo 19 documentation: [Putaway rules](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/shipping_receiving/daily_operations/putaway.html)
- Odoo 19 documentation: [Two-step receipt and delivery](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/shipping_receiving/daily_operations/receipts_delivery_two_steps.html)

*How this guide was checked: menus, settings and field names were checked against the Odoo 19 documentation in
October 2026. The example is illustrative and wasn't run on a live database, so there are no screenshots; labels
can vary slightly with your installed apps and language.*
