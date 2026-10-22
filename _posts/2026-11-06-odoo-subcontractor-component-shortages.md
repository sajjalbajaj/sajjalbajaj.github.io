---
layout: post
title: "Odoo Subcontracting: Resolve Component Shortages Before Receipt"
date: 2026-11-06 10:00:00 +0530
tags: [Odoo, Odoo 19, ERP, Best Practices, Subcontracting, Manufacturing, Inventory, Purchase]
hub: manufacturing
description: "Control Odoo subcontracting shortages with component dispatch records, supplier confirmation and finished goods evidence before accepting receipts."
faqs:
  - q: "Does sending components mean the subcontractor has completed the work?"
    a: "No. Component supply, external production and finished goods receipt are distinct events that need consistent evidence."
  - q: "Can the finished quantity be received just to close an overdue order?"
    a: "It should reflect the actual accepted receipt. An unsupported completion can hide missing components, unfinished work and incorrect stock records."
---

**Short answer:** resolve a subcontracting shortage by reconciling the components sent, the quantity the subcontractor can actually produce and the finished goods received. Keep those events distinct. Odoo's resupply workflow connects the records, but the business still needs external confirmation and an authorised response when supply or production differs from the plan.

## Applies to

Odoo 19 Manufacturing, Purchase and Inventory using resupply subcontracting. The component and finished goods reconciliation described here is an operating control. The corresponding Odoo 20 references were reviewed in October 2026; use the documentation for your installed release when configuring screens and fields.

## Which responsibility belongs to each party?

Define the materials your business supplies and the work the subcontractor performs. Confirm whether any components are sourced independently by the subcontractor. The bill of materials and commercial arrangement should describe the same operating model.

Odoo's resupply subcontracting documentation describes a subcontracting bill of materials, a purchase of the finished product and transfers of supplied components. The supplier lead time for that arrangement should account for the relevant component receipt, production and return delivery period.

I would assign an owner for the subcontractor relationship and another for physical stock evidence where appropriate. A purchase order status cannot tell the whole story if nobody confirms what the external location actually holds.

## What should be checked before component dispatch?

Compare the required component quantities with what is available and approved for use. Review units, product identity and tracking information. A shortage may be caused by a genuine lack of stock or by an incorrect bill of materials, unit conversion or allocation.

Confirm the delivery destination and the subcontractor's readiness to receive. If production requires a complete set, sending an incomplete kit without agreement can consume transport and handling effort while leaving the job blocked. Record the accepted plan for any staged supply.

Use the actual dispatched quantities. Do not validate the full planned transfer when only part physically leaves. The external stock position becomes harder to reconcile if the system begins with an assumed quantity that the subcontractor never received.

## How should the external stock position be reviewed?

Compare component transfers, reported consumption, finished receipts and remaining quantities. The exact reconciliation depends on the configured workflow and the point at which Odoo records consumption. Understand that behaviour before interpreting a location balance as a physical count.

Request supplier confirmation where the business needs evidence of external holdings. Investigate damaged materials, replacements and agreed losses separately. A balancing adjustment without explanation may conceal a recurring handling or specification problem.

Keep lot identity where required. If components from different lots are supplied, the finished goods evidence should support the required traceability. Do not assume that sending tracked materials guarantees a complete record of how the external party actually used them.

## Worked example: a packaging assembly is short of one component

Imagine a manufacturer supplying several components for an externally assembled package. Most materials are dispatched, but one component is delayed. The subcontractor confirms that only part of the planned finished quantity can be completed with the materials received.

The buyer and production planner agree whether to accept a partial finished delivery or wait for the missing component. Warehouse staff record the actual transfers and receipts. Customer commitments are reviewed against the accepted finished quantity rather than the original purchase total.

After the remaining component arrives, the team reconciles the second production stage and external balances. Any unused materials remain identifiable. The shortage is resolved through evidence and a revised plan instead of receiving the full finished order early to remove an overdue status.

## What if consumption differs from the bill of materials?

Investigate whether the difference reflects an approved substitution, process loss, incorrect recording or a changed specification. Each needs a different decision. A supplier's request for extra materials should not automatically become a permanent increase in the standard requirement.

Review the effect on cost and future planning with the responsible owners. The procurement team may see a small quantity difference while finance sees a meaningful cost or ownership issue. Keep both perspectives connected to the same production case.

If the design permits adjustments to actual consumption, use the supported process and retain the reason. Avoid prescribing a universal correction sequence across custom configurations. The accepted result should preserve traceability and explain the remaining component stock.

## When does resupply subcontracting fit?

It fits arrangements where your business supplies components for externally produced goods and needs to follow those materials. It differs from buying a finished product whose materials are entirely the supplier's responsibility. Choose the workflow from actual ownership and supply obligations.

It may need additional design where components travel directly from another supplier to the subcontractor or where several external stages are involved. Keep those routes explicit rather than forcing every movement through your warehouse on paper.

## Common mistakes

Common mistakes include validating planned component quantities, ignoring unused external stock and treating a supplier lead time as only the workshop duration. Another is accepting finished goods without reviewing the component and traceability consequences.

Close the exception with a clear account of supplied materials, accepted output and remaining obligations. Purchasing, warehouse and production should agree on that account. Once they do, the next order can use better planning information instead of inheriting an unexplained shortage from the previous one.

## Related

Read [Subcontracting in Odoo Manufacturing](/blog/2026/08/16/subcontracting-in-odoo-manufacturing/) for the connected workflow.

## Official references

1. [Resupply subcontracting](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/manufacturing/subcontracting/subcontracting_resupply.html)
1. [Lot numbers](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/product_management/product_tracking/lots.html)

*How this article was checked: official Odoo 19 documentation and the corresponding Odoo 20 pages were reviewed in October 2026. The examples are illustrative, not client results or tests on a live database.*

For help designing this workflow, see my [Odoo consulting services](/services/odoo-consulting/).
