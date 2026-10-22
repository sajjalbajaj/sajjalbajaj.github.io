---
layout: post
title: "Odoo Unbuild Orders: Review Components Before Returning Them to Use"
date: 2026-11-08 10:00:00 +0530
tags: [Odoo, Odoo 19, ERP, Best Practices, Manufacturing, Inventory, Quality, MRP]
hub: manufacturing
description: "Use Odoo unbuild orders with product identity, correct bills of materials and inspection of recovered components before making them available again."
faqs:
  - q: "Does an unbuild order mean every component is reusable?"
    a: "No. Odoo documents separate scrapping for components that cannot be reused. Inspection and disposition need the appropriate business process."
  - q: "Should an unbuild be used to fix missing finished stock?"
    a: "No. Confirm the actual product and quantity first. The documentation warns that proceeding without sufficient on hand stock can cause inconsistencies."
---

**Short answer:** an unbuild order should represent the actual dismantling of manufactured goods and the components recovered from them. Confirm the product identity, relevant bill of materials and physical quantity before processing it. Returning components to stock does not by itself establish that they are suitable for reuse.

## Applies to

Odoo 19 Manufacturing unbuild orders and Inventory tracking. This article concerns dismantling manufactured goods; other disassembly models need separate assessment. The corresponding Odoo 20 references were reviewed in October 2026; use the documentation for your installed release when configuring screens and fields.

## What business event are you recording?

An unbuild can be useful when manufactured products need to be dismantled, such as excess finished goods or components reclaimed for another purpose. Identify the reason and the authorised decision. The stock operation should follow that business event rather than serve as a convenient way to repair unrelated records.

Distinguish unbuilding from repairing a product that will retain its identity, returning goods to a supplier or dismantling purchased items under another production model. Those processes can have different stock and cost consequences. Choose the workflow from the physical activity and ownership.

I would confirm that the product actually exists in the stated location. Odoo's documentation warns against proceeding with insufficient on hand quantity. An override that creates recovered components from absent finished goods makes later reconciliation harder, even if the screen permits it.

## Which bill of materials should apply?

Review the product's manufacturing history and relevant revision. A current bill of materials may differ from the version used when the item was made. If the original manufacturing order is available, assess the supported link and confirm the resulting component expectations.

Identify product variants and substitutions. Similar finished items can contain different components, so a name match alone may be insufficient. The operating reviewer should understand what is expected to be recovered before the stock transaction is completed.

Keep the evidence for an exceptional choice. If history is incomplete, record how the responsible person established the component basis. Do not present an assumed bill of materials as a verified record of the item's actual construction.

## How should recovered components be assessed?

Separate recovery quantity from suitability. A component can physically emerge from dismantling while being damaged, contaminated, incomplete or otherwise unsuitable for normal use. The relevant product or quality specialist should define the inspection and disposition criteria.

Use a location or process that reflects the review state. Automatically treating every recovered component as ordinary available stock can create an unintended supply promise. Confirm how the actual configuration handles the transition from recovery to accepted reuse.

Odoo documents scrapping unusable components after unbuilding. Apply the appropriate supported process with evidence of the quantity and reason. The aim is an accurate account of usable and unusable material, not an artificially perfect recovery rate.

## Worked example: excess assemblies are dismantled

Imagine a manufacturer deciding to dismantle excess assemblies to recover components needed elsewhere. The planner identifies the finished quantity and original production references. Operations confirms the items are physically present and selects the appropriate component basis.

During dismantling, some recovered parts require inspection and one type cannot be reused. The team records the unbuild and follows the approved disposition process for the unusable quantity. Only accepted material becomes available to the next production job.

Finance reviews the resulting stock and valuation evidence according to the configured costing approach. The team does not assume that physically recovering a component means its financial treatment is identical across every product and costing configuration.

## What traceability should remain?

Preserve the relationship between the finished item, unbuild record and recovered stock where the operating model requires it. Lot and serial information can matter when later questions concern the origin of a reused component.

Review mixed recovery carefully. Combining components from several finished batches into an unidentified container may make the next manufacturing stage difficult to explain. The process should define how recovered items are labelled and stored before they are consumed again.

Keep supporting observations with the relevant record through the approved documentation method. A later reviewer should be able to distinguish expected recovery, actual recovery and rejected material. A total quantity without context may hide the most important decision.

## When does an unbuild fit?

It fits a documented dismantling of manufactured products whose component basis can be established. It can support stock accuracy when the business deliberately reverses the physical assembly into usable materials.

It does not automatically fit every repair or purchased product disassembly. Those situations need assessment of their own process and valuation requirements. Avoid selecting unbuild solely because it produces component stock with fewer clicks than a more appropriate workflow.

Review commercial obligations where goods belong to a customer or another party. The right to dismantle and reuse them should be established by the authorised owner. An ERP operation does not grant that permission simply because the product appears in a location.

## Common mistakes

Common mistakes include using the latest bill of materials without reviewing history, unbuilding absent stock and making all recovered parts available before inspection. Another is overlooking lot identity when the components are reused in a later batch.

Rehearse one ordinary recovery and one case with unusable components. Inspect the finished quantity, recovered stock, rejected material and financial evidence together. The process is ready when those records explain the actual dismantling and the authorised reuse decision without an undocumented balancing adjustment.

## Related

Read [Odoo Skincare Production: Control Formula and Label Revisions](/blog/2026/11/01/odoo-skincare-formula-label-revisions/) for the connected workflow.

## Official references

1. [Unbuild orders](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/manufacturing/workflows/unbuild_orders.html)
1. [Lot numbers](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/product_management/product_tracking/lots.html)

*How this article was checked: official Odoo 19 documentation and the corresponding Odoo 20 pages were reviewed in October 2026. The examples are illustrative, not client results or tests on a live database.*

For help designing this workflow, see my [Odoo consulting services](/services/odoo-consulting/).
