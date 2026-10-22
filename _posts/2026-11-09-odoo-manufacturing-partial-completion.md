---
layout: post
title: "Odoo Manufacturing Backorders: Close Only What Was Produced"
date: 2026-11-09 10:00:00 +0530
tags: [Odoo, Odoo 19, ERP, Best Practices, Manufacturing, MRP, Inventory, Planning]
hub: manufacturing
description: "Handle partial Odoo manufacturing with accurate completed quantities, remaining demand and component evidence so production backorders remain meaningful."
faqs:
  - q: "Does creating a manufacturing backorder produce the remainder?"
    a: "No. It preserves the remaining production work in a separate order that still needs resources, execution and completion."
  - q: "Should rejected output count as completed saleable production?"
    a: "Not automatically. Use the approved quality and disposition process to distinguish produced quantity from accepted output and remaining customer demand."
---

**Short answer:** when a manufacturing order is only partly completed, record the actual output and preserve the remaining work through the appropriate backorder process. Then review components, operations and customer demand together. Closing the full planned quantity can hide unfinished work and create stock that the business cannot actually supply.

## Applies to

Odoo 19 Manufacturing partial completion and backorders. Odoo 20 changes some documented Shop Floor steps, so operators should follow the instructions for their installed release. The corresponding Odoo 20 references were reviewed in October 2026; use the documentation for your installed release when configuring screens and fields.

## What caused the partial completion?

Identify whether the constraint is material, equipment, labour, quality or a deliberate scheduling choice. The cause determines the next action. A backorder preserves the remaining demand, but it does not obtain a missing component or repair an unavailable work centre.

I would distinguish physical production from accepted availability. Goods may have completed an operation while still awaiting another step or inspection. Staff need to understand which quantity the completion action represents in the configured workflow.

Record the decision to stop or split the work. If the remaining demand is no longer required, it may need an authorised cancellation rather than an indefinitely open backorder. Keep that decision separate from the fact that the original plan was not fully produced.

## How does the documented backorder work?

Odoo's manufacturing documentation describes splitting the original demand into a completed portion and a remaining manufacturing order. Related references help distinguish the resulting orders. The remaining portion still represents work to be performed.

Review the supported process for the interface being used. Manufacturing and Shop Floor can present different steps, and version changes can alter the instructions. A decision article should not replace the operator procedure for the actual installation.

Confirm the quantities before validation. A small entry error can move too much or too little demand into the remaining order. Inspect the resulting completed and outstanding quantities rather than assuming that the presence of a backorder means the split was correct.

## What happens to component evidence?

Review what was actually consumed, what remains reserved and what is still physically available. The relationship depends on the production configuration and recorded execution. Do not infer component usage solely by multiplying the original planned quantity after an exceptional run.

Track rejected or damaged material through the approved process. A shortage caused by unusable components should not remain disguised as an unexplained difference between planned and actual consumption. The next production attempt needs a credible availability picture.

Preserve lot and serial information where relevant. The completed portion and the remainder may use different material lots or produce separate tracked outputs. Keeping those identities correct matters more than preserving the appearance of one uninterrupted production run.

## Worked example: material supports only part of a run

Imagine a manufacturer starting a run after a partial supplier delivery. The available components support only part of the intended quantity. The planner authorises a partial completion because the first output can satisfy an urgent requirement.

Operations records the actual output and creates the remaining work through the supported backorder process. Warehouse staff confirm the accepted finished stock, while purchasing retains ownership of the missing component. Customer service receives a clear explanation of what can be delivered now and what remains planned.

When the component arrives, the team reviews the remaining order before restarting. It confirms quantities, materials and any changed priorities. The backorder is completed from actual execution rather than assumed complete because the original manufacturing order already has a finished portion.

## How should the remainder be planned?

Assign an owner, a current constraint and a credible next action. An open order with no explanation can remain on the schedule while everyone assumes another department is resolving it. Link the material or capacity dependency through the agreed planning process.

Review customer demand and allocation. The first completed quantity may have been assigned to one order, while the remainder serves another. Avoid making repeated promises from the same expected output when several teams inspect the aggregate production total.

Consider repeated partial completions carefully. They may be necessary, but a growing chain of backorders can indicate unstable supply or unrealistic planning. Review the cause and improve the upstream assumption instead of treating each new split as an isolated event.

## When does a manufacturing backorder fit?

It fits genuine remaining production that the business still intends to complete. It is useful when a partial quantity can be finished and the rest must remain visible. The operating procedure should preserve the relationship between both portions.

It does not resolve a quality rejection by itself, nor does it justify producing demand that has been cancelled. Those cases need their own decisions. The correct next action may be rework, replacement, cancellation or another approved process.

Use the same discipline when several operations are involved. Completion at one work centre may leave later work outstanding. Review the order's actual process before assuming every visible output is ready for shipment.

## Common mistakes

Common mistakes include completing the planned quantity to clear the screen, ignoring component differences and leaving the remainder without an owner. Another is reporting the original order as fully delivered to the customer because part of production finished.

Reconcile planned demand, accepted output, remaining work and authorised cancellations. The quantities should tell a consistent story across production, stock and customer commitments. That explanation is what makes a backorder useful, rather than simply another open record in the manufacturing list.

## Related

Read [Odoo Subcontracting: Resolve Component Shortages Before Receipt](/blog/2026/11/06/odoo-subcontractor-component-shortages/) for the connected workflow.

## Official references

1. [Manufacturing backorders](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/manufacturing/workflows/manufacturing_backorders.html)
1. [Quality control points](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/quality/quality_management/quality_control_points.html)

*How this article was checked: official Odoo 19 documentation and the corresponding Odoo 20 pages were reviewed in October 2026. The examples are illustrative, not client results or tests on a live database.*

For help designing this workflow, see my [Odoo consulting services](/services/odoo-consulting/).
