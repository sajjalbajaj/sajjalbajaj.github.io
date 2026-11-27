---
layout: post
title: "Odoo 20 Bill of Materials: Components, Operations and Setup"
seo_title: "Odoo 20 Bill of Materials Setup: Components and Operations"
date: 2026-09-24 08:00:00 +0530
tags: [Odoo, Odoo 20, Odoo 19, Setup, Manufacturing, MRP, Inventory Management, Production Planning]
hub: manufacturing
description: "Set up an Odoo 20 bill of materials with components and operations. Follow a quantity-scaling example and troubleshoot common setup problems."
last_modified_at: 2026-11-27
faqs:
  - q: "Why are component quantities multiplied on my manufacturing order?"
    a: "BoM components are defined for the BoM's output quantity. For example, a recipe for ten kits with twenty brackets scales to sixty brackets for thirty kits, before any rounding or additional consumption."
  - q: "Why is there no Operations tab on the BoM?"
    a: "The documented setup requires Work Orders in Manufacturing settings. Check that setting and the user's access before concluding the BoM is incomplete."
  - q: "Is the BoM output quantity the same as Batch Size Value?"
    a: "No. BoM Quantity defines the component recipe basis. Odoo 20 separately documents batch-size behaviour for splitting demand; demonstrate the intended replenishment flow rather than assuming the two fields are interchangeable."
---

**Short answer:** In Odoo 20, create a bill of materials under **Manufacturing ‣ Products ‣ Bills of Materials**, select the finished product and output quantity, then add the components required for that quantity. Enable Work Orders when operations are needed. Validate the scaled quantities, operation settings and resulting order before using the BoM in production.

This guide explains the blueprint. The [manufacturing-order workflow](/blog/2026/08/15/manufacturing-orders-production-workflow-in-odoo/) explains how a particular order records production, and the [costing guide](/blog/2026/10/16/how-odoo-costs-manufactured-products/) explains the cost evidence.

## What needs to exist before creating a BoM?

Create the finished product and components with the correct units and tracking choices. Identify whether the business intends to manufacture a finished item, deliver a kit or use a subcontracting process.

The steps here follow a manufacturing BoM in Manufacturing and Inventory. Advanced instructions and version-management functions depend on the relevant applications, such as Quality and PLM, and their permissions.

If replenishment should create manufacturing orders, review the product's routes and the actual replenishment rule separately. A BoM describes how to make something; its existence is not proof that the correct procurement route will be selected.

## How do you create the basic manufacturing blueprint?

Follow the [official Odoo 20 BoM reference](https://www.odoo.com/documentation/20.0/applications/inventory_and_mrp/manufacturing/basic_setup/bill_configuration.html):

1. Open **Manufacturing ‣ Products ‣ Bills of Materials** and choose **New**.
2. Select the **Product**, and a particular variant where the recipe is variant-specific.
3. Enter **Quantity**, the output represented by this recipe.
4. Add a meaningful **Reference** where similar BoMs exist.
5. Set **BoM Type** to **Manufacture this product**.
6. On **Components**, add the products and quantities required for the stated output.

Include packaging if it is actually consumed and should be represented in production. Do not leave out a carton merely because it is inexpensive if the warehouse needs to reserve and consume it.

Use the component table's optional columns for **Apply on Variants** and **Consumed in Operation** where relevant. A blank variant restriction means the component applies across variants, so review that choice deliberately.

## How should quantity scaling be checked?

Component quantities are relative to the BoM output. They are not always quantities for a single finished unit.

Consider this explicitly illustrative assembly recipe:

| Recipe basis | Brackets | Screws | Cartons |
| --- | ---: | ---: | ---: |
| BoM output: 10 kits | 20 units | 80 units | 10 units |
| Manufacturing order: 30 kits | 60 units | 240 units | 30 units |

The scaling factor is 30 divided by 10, or three. Check all units before using that factor. A kilogram component and a unit component need their own correct quantities; they are not directly interchangeable.

Create a proposed test order at a different quantity from the BoM, then inspect the component requirement. This often reveals a recipe entered per item while the output field describes a whole batch.

## How are operations and work centres added?

Enable **Work Orders** in **Manufacturing ‣ Configuration ‣ Settings**, then return to the BoM's **Operations** tab. Add an operation, choose its work centre and review any variant restriction.

Odoo 20's BoM reference separates two decisions:

| Setting | Purpose | Review question |
| --- | --- | --- |
| Cost based on | Actual or theoretical operation cost basis | Which recorded or estimated inputs should drive this cost? |
| Duration Computation | Fixed or computed duration estimate | Is there a reliable time baseline or sufficient relevant history? |
| Default Duration | Starting duration where applicable | Is the unit and production quantity basis correct? |

Do not treat a computed duration as proof that the underlying recorded work was accurate. Review unusual or missing time records before using their history for planning.

The [19.0 reference](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/manufacturing/basic_setup/bill_configuration.html) uses different duration labels, including **Set duration manually** and **Compute based on tracked time**. Follow the target-version interface rather than relabelling old screenshots.

## What changed in the instructions about consumption?

The earlier version of this guide carried the 19.0 **Flexible Consumption** selector into its 20.0 instructions. That has been corrected.

The current 19.0 reference describes Blocked, Allowed and Allowed with Warning. The reviewed 20.0 BoM reference and standard BoM model do not expose that same selector in the same way. Do not assume that a 19.0 setting creates an equivalent restriction after upgrading.

For the installed 20.0 build, demonstrate how excess consumption, missing quantities and authorised corrections behave. Record the actual result and the control the business requires. A prompt or a training note is not evidence that excess use will be blocked.

## How should readiness, timing and batch size be understood?

On **Miscellaneous**, the documented **Manufacturing Readiness** choice distinguishes having all components from having those required for the first operation. Map components to operations when relying on that distinction.

Readiness indicates whether work can begin according to the configured rule. It does not create missing stock or establish a quality release.

Also distinguish these quantities and times:

* **BoM Quantity:** the recipe's output basis.
* **Batch Size Value:** the documented size used when demand is split into manufacturing batches. Test the intended automatically generated orders; do not assume every manual order is split identically.
* **Manufacturing Lead Time:** expected time to manufacture.
* **Days to prepare:** advance time for components or sub-assemblies.

For overlapping work on partial quantities, see [continuous production](/blog/2026/11/12/odoo-20-continuous-production/). It is a separate workflow decision from the recipe's output quantity.

## How do instructions and by-products fit?

The Odoo 20 reference describes operation instructions as quality control points, including the required type and any attached material. Confirm the relevant application and access before adding these steps.

Where production creates a residual product that should be tracked, enable **By-Products** in Manufacturing settings and enter the product, quantity, unit and producing operation where applicable.

A by-product quantity and a cost share answer different questions. Record both intentionally, and review the resulting cost explanation rather than assuming every residual material receives the same treatment.

## What should be checked in BoM Overview?

Open the **BoM Overview** smart button and inspect the intended output quantity, components, sub-assemblies, operations and cost basis.

The 20.0 reference distinguishes grey costs read from a product record from computed costs where the report can expand a sub-BoM or use operation rates. A displayed total is therefore not proof that every purchased component's value was freshly recalculated.

Check the forecast information against the relevant location and reservation context. A component shown on hand may already be committed to another order.

## How should common setup problems be diagnosed?

| Symptom | Evidence to inspect | Correct next question |
| --- | --- | --- |
| Wrong component quantities | BoM output, component units and order quantity | Was the recipe entered per unit or per batch? |
| Unexpected component or variant | Selected product variant, BoM reference and restrictions | Did the intended recipe actually apply? |
| Missing Operations tab | Work Orders setting and access | Is the required feature available to this user? |
| Work cannot start | Readiness choice and first-operation component mapping | Which exact component blocks the intended start? |
| No automatic manufacturing order | Product route, rule, warehouse and matching BoM | Which procurement route was selected? |
| Expected cost looks wrong | Component values, sub-assemblies and work centre/time setup | Which input explains the difference? |

Avoid changing several settings together merely to make an order appear ready. Keep one reproducible case so a correction can be attributed to its cause.

## What should acceptance demonstrate?

Use the ten-kit recipe above to compare a ten-kit and a thirty-kit order. Add a variant case, an unavailable component and a recorded consumption difference. Inspect the resulting operations and output records as well as the BoM screen.

Record expected quantities before running the cases, then the observed result and any unresolved restriction. The [ERP acceptance evidence worksheet](/resources/erp-acceptance-evidence/) provides a place for that record. The examples here have not been executed on a live customer database.

## Sources and review

Reviewed on 27 November 2026: the linked 19.0 and 20.0 BoM references, the [current manufacturing-product configuration page](https://www.odoo.com/documentation/20.0/applications/inventory_and_mrp/manufacturing/basic_setup/configure_manufacturing_product.html), [20.0 by-products](https://www.odoo.com/documentation/20.0/applications/inventory_and_mrp/manufacturing/workflows/byproducts.html) and the [standard 20.0 BoM model](https://github.com/odoo/odoo/blob/20.0/addons/mrp/models/mrp_bom.py). Source review does not certify every installed module or customisation.

For help translating a production recipe into a verified operating workflow, see [Odoo implementation](/services/odoo-implementation/).
