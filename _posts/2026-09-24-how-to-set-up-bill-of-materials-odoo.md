---
layout: post
title: "How to Set Up a Bill of Materials in Odoo 19"
date: 2026-09-24 08:00:00 +0530
last_modified_at: 2026-10-04
tags: [Odoo, Odoo 19, Setup, Manufacturing, MRP, Inventory Management, Stock Control, Production Planning]
hub: manufacturing
description: "Create a bill of materials in Odoo 19 step by step: components, quantities, operations, consumption rules and lead times, with a worked example and fixes."
faqs:
  - q: "What is the difference between a manufacturing BoM and a kit in Odoo?"
    a: "A BoM of type Manufacture this Product is used to make the product through manufacturing orders, consuming components into a finished item. A Kit is a set of unassembled components sold together: Odoo delivers the components rather than producing the kit."
  - q: "Why is there no Operations tab on my bill of materials?"
    a: "The Work Orders setting is off. Enable it in Manufacturing, Configuration, Settings, in the Operations section, and the Operations tab appears on BoMs."
  - q: "Should components be consumed exactly as the BoM says?"
    a: "That depends on the process. The Flexible Consumption field on the BoM's Miscellaneous tab can block deviations, allow them, or allow them with a warning. Processes with natural variation, such as roasting or cutting, usually need Allowed or Allowed with Warning."
---

**Short answer:** in Odoo 19, go to **Manufacturing ‣ Products ‣ Bills of Materials ‣ New**, choose the
**Product**, set the **Quantity** the BoM produces, keep **BoM Type** as **Manufacture this Product**, and list
each component with its quantity on the **Components** tab. Enable **Work Orders** in Manufacturing settings
if you also want to record operations and work centres.

This is the setup guide. For how manufacturing orders use the BoM from confirmation to completion, see
[manufacturing orders and the production workflow in Odoo](/blog/2026/08/15/manufacturing-orders-production-workflow-in-odoo/).

## Applies to

- **Odoo version:** Odoo 19. Odoo 20 was released in September 2026; check its documentation before applying
  these steps to an Odoo 20 database.
- **Edition:** Bills of materials, operations and work orders are in the Manufacturing app in both Community and
  Enterprise. Detailed step instructions (which need the Quality app), BoM versioning through PLM and the Shop
  Floor app are Enterprise only.
- **Apps:** Manufacturing and Inventory.

## Before you start

1. **Create the finished product and every component as products first**, with the right units of measure. See
   [how to set up products and units of measure](/blog/2026/09/22/how-to-set-up-products-in-odoo/).
2. **Make the finished product a tracked good** if you hold it in stock, and decide whether it needs lots or serial
   numbers.
3. **Enable the Manufacture route** on the finished product's **Inventory** tab if reordering rules or
   make-to-order should create manufacturing orders automatically.
4. **Get the recipe from production, not from memory.** Weigh or count real batches, including losses.

## Step by step

### 1. Create the BoM

1. Go to **Manufacturing ‣ Products ‣ Bills of Materials** and click **New**. (Or use the **Bill of Materials**
   smart button on the product form.)
2. **Product:** the finished product.
3. **Quantity:** how many units this BoM produces, for example 1 bag or a batch of 50.
4. **BoM Type:** **Manufacture this Product**.

### 2. Add components

1. On the **Components** tab, click **Add a line**.
2. Choose the **Component** and enter the **Quantity** needed to produce the BoM's quantity, in the component's unit.
3. Repeat for every component, including packaging such as bags, labels and boxes, if you want them consumed and
   costed.
4. Optional columns, shown through the column settings icon on the Components tab:
   - **Apply on Variants**, when a component is used only for some variants;
   - **Consumed in Operation**, to tie a component to the operation that uses it;
   - **Manual Consumption**, to make operators confirm the quantity consumed.

### 3. Add operations (optional)

1. Enable **Work Orders** in **Manufacturing ‣ Configuration ‣ Settings** (Operations section).
2. Back on the BoM, open the **Operations** tab and click **Add a line**.
3. Enter the **Operation** name, choose the **Work Center**, and choose how duration is tracked: computed from
   tracked time, or set manually with a **Default Duration**.
4. Add instructions in the **Work Sheet** tab (text, a PDF or a link), then **Save & Close** or **Save & New**.

### 4. Set consumption and timing (Miscellaneous tab)

- **Manufacturing Readiness:** whether an order counts as ready when the first operation's components are available,
  or only when all components are.
- **Flexible Consumption:** **Blocked**, **Allowed** or **Allowed with Warning** when operators consume a different
  quantity from the BoM.
- **Manuf Lead Time:** days to complete a manufacturing order after confirmation.
- **Days to prepare Manufacturing Order:** days needed to get components or sub-assemblies ready.

### 5. Add by-products (optional)

Enable **By-Products** in Manufacturing settings, then list residual products on the BoM's **By-products** tab.

## Worked example: a 250 g bag of roasted coffee

A roaster sells **House Blend, roasted, 250 g bag**. Roasting loses moisture, so a bag needs more green coffee than
it holds. Their own test batches show about 17 percent loss.

| Component | Quantity per bag |
|---|---|
| Green coffee, house blend | 0.300 kg |
| Valve bag, 250 g | 1 unit |
| Front label | 1 unit |

- **Quantity** on the BoM: 1 unit.
- **Operations:** *Roast* at work centre *Roaster 1*, and *Pack* at *Packing table*.
- **Flexible Consumption:** **Allowed with Warning**, because roast loss varies from batch to batch.

A manufacturing order for 40 bags therefore reserves 12 kg of green coffee, 40 bags and 40 labels. If an operator
records 12.4 kg used, Odoo warns rather than blocks, and the extra consumption shows in the order's cost.

## What you should see

- A new manufacturing order for the product (**Manufacturing ‣ Operations ‣ Manufacturing Orders ‣ New**) fills its
  components from the BoM, scaled to the quantity you produce.
- The order's component status shows whether everything needed is available.
- When the order is marked done, components leave stock and finished units arrive in stock.
- With work orders enabled, each operation becomes a work order at its work centre.

## Troubleshooting

**No Operations tab.** Enable **Work Orders** in Manufacturing settings.

**Reordering rules never create manufacturing orders.** The product has no BoM, or the **Manufacture** route isn't
enabled on its Inventory tab. If it has both Buy and Manufacture routes, set the preferred route on the rule.

**Component quantities look wrong on orders.** Check the BoM **Quantity**: components are per the BoM's quantity, not
per single unit, so a BoM for a batch of 50 needs batch-level component quantities.

**Operators get a consumption warning.** **Manual Consumption** is ticked for that component, or the recorded
quantity differs from the BoM under **Allowed with Warning**. Check the setting matches how the floor really works.

**Orders show as not ready though some components are in stock.** **Manufacturing Readiness** is set to wait for all
components. Change it if work can start once the first operation's components are available.

**A product sold as a set never gets a manufacturing order.** It uses a **Kit** BoM. Kits are delivered as their
components and aren't manufactured.

## Related setup

- [How to set up work centres and work orders in Odoo 19](/blog/2026/09/27/how-to-set-up-work-orders-odoo/)
- [How to set up reordering rules in Odoo 19](/blog/2026/09/23/how-to-set-up-reordering-rules-odoo/)
- [Subcontracting in Odoo manufacturing](/blog/2026/08/16/subcontracting-in-odoo-manufacturing/)
- Setting up manufacturing for the first time? See [Odoo implementation](/services/odoo-implementation/).

## Official references

- Odoo 19 documentation: [Bill of materials](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/manufacturing/basic_setup/bill_configuration.html)
- Odoo 19 documentation: [Manufacturing product configuration](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/manufacturing/basic_setup/configure_manufacturing_product.html)
- Odoo 19 documentation: [Kits](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/manufacturing/advanced_configuration/kit_shipping.html)

*How this guide was checked: menus, fields and settings were checked against the Odoo 19 documentation in October
2026, and edition availability against Odoo 19's open-source code. The example is illustrative and wasn't run on a
live database, so there are no screenshots; labels can vary slightly with your installed apps and language.*
