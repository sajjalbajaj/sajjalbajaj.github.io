---
layout: post
title: "Odoo 20 Bill of Materials: Components, Operations and Setup"
date: 2026-09-24 08:00:00 +0530
last_modified_at: 2026-11-25
tags: [Odoo, Odoo 20, Odoo 19, Setup, Manufacturing, MRP, Inventory Management, Production Planning]
hub: manufacturing
description: "Set up an Odoo 20 bill of materials with components, quantities, operations, work centres, consumption rules, by-products and a practical example."
faqs:
  - q: "What is the difference between a manufacturing BoM and a kit in Odoo?"
    a: "A BoM of type Manufacture this Product is used to make the product through manufacturing orders, consuming components into a finished item. A Kit is a set of unassembled components sold together: Odoo delivers the components rather than producing the kit."
  - q: "Why is there no Operations tab on my Odoo 20 bill of materials?"
    a: "The Work Orders setting is off. Enable it in Manufacturing, Configuration, Settings, in the Operations section, and the Operations tab appears on BoMs."
  - q: "Should components be consumed exactly as the BoM says?"
    a: "That depends on the process. The Flexible Consumption field on the BoM's Miscellaneous tab can block deviations, allow them, or allow them with a warning. Processes with natural variation, such as roasting or cutting, usually need Allowed or Allowed with Warning."
---

**Short answer:** in Odoo 20, go to **Manufacturing ‣ Products ‣ Bills of Materials ‣ New**, choose the
**Product**, set the **Quantity** the BoM produces, keep **BoM Type** as **Manufacture this Product**, and list
each component with its quantity on the **Components** tab. Enable **Work Orders** in Manufacturing settings
if you also want to record operations and work centres. The BoM becomes the production blueprint used to reserve
components, create work orders, calculate expected cost and document how the product should be made.

This is the setup guide. For how manufacturing orders use the BoM from confirmation to completion, see
[manufacturing orders and the production workflow in Odoo](/blog/2026/08/15/manufacturing-orders-production-workflow-in-odoo/).

## Applies to

- **Odoo version:** Odoo 20. The core setup remains familiar to Odoo 19 users, but this guide now follows the
  official Odoo 20 bill of materials documentation.
- **Edition:** Bills of materials, operations and work orders are in the Manufacturing app in both Community and
  Enterprise. Detailed step instructions (which need the Quality app), BoM versioning through PLM and the Shop
  Floor app are Enterprise only.
- **Apps:** Manufacturing and Inventory.

## What is the difference between a bill of materials and a manufacturing order?

A bill of materials defines what a product needs: components, quantities and any operations. A manufacturing order
uses that definition for a particular production quantity and records the work carried out. Editing a recipe and
confirming that a batch was produced are therefore separate actions.

For an illustrative batch, a BoM for 10 finished units requiring 20 components means a planned run of 30 finished
units needs 60 components, before any extra consumption. Check the BoM quantity and units of measure before treating
a larger component requirement as an error. Odoo's [BoM setup reference](https://www.odoo.com/documentation/20.0/applications/inventory_and_mrp/manufacturing/basic_setup/bill_configuration.html)
explains the output quantity and component structure.

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
3. Enter the **Operation** name and choose the **Work Center**. The Odoo 20 BoM documentation describes
   **Duration Computation** as **Fixed**, with a **Default Duration**, or **Computed**, based on recent work orders.
4. Where Quality is installed, add steps through the operation's **Instructions** tab. Each step is a quality
   control point; supplementary PDFs belong on the step's **Attachment** tab. Save the step and the operation.

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

- [How to set up work centres and work orders in Odoo 20](/blog/2026/09/27/how-to-set-up-work-orders-odoo/)
- [How to set up reordering rules in Odoo](/blog/2026/09/23/how-to-set-up-reordering-rules-odoo/)
- [Subcontracting in Odoo manufacturing](/blog/2026/08/16/subcontracting-in-odoo-manufacturing/)
- Setting up manufacturing for the first time? See [Odoo implementation](/services/odoo-implementation/).

## Official references

- Odoo 20 documentation: [Bill of materials](https://www.odoo.com/documentation/20.0/applications/inventory_and_mrp/manufacturing/basic_setup/bill_configuration.html)
- Odoo 20 documentation: [Manufacturing product configuration](https://www.odoo.com/documentation/20.0/applications/inventory_and_mrp/manufacturing/management/configure_manufacturing_product.html)
- Odoo 20 documentation: [Manufacturing](https://www.odoo.com/documentation/20.0/applications/inventory_and_mrp/manufacturing.html)

*Updated on 17 November 2026 using the official Odoo 20 bill of materials and manufacturing documentation. The
worked example is illustrative and was not run on a live database. Labels can vary with installed apps and language.*
