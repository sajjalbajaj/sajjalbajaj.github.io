---
layout: post
title: "Odoo 20 Continuous Production: Keep Manufacturing Flow Visible"
date: 2026-11-12 07:00:00 +0530
tags: [Odoo, Odoo 20, ERP, Best Practices, Manufacturing, Operations, Inventory Management, Planning]
hub: manufacturing
description: "Set up Odoo 20 continuous production to advance partial quantities between dependent work orders while checking stock completion and traceability."
last_modified_at: 2026-11-27
faqs:
  - q: "What does continuous production mean in Odoo 20?"
    a: "It lets a completed partial quantity advance to the next dependent work order before the full manufacturing order quantity is finished."
  - q: "Does a partial work order quantity immediately enter finished stock?"
    a: "The documentation says quantities enter stock after the manufacturing order is completed. Advancing work and completing the inventory outcome are separate events."
  - q: "Where is continuous production enabled?"
    a: "Enable Work Orders in Manufacturing settings, then enable Continuous Production on the bill of materials Miscellaneous tab."
---

**Short answer:** Odoo 20 continuous production lets partial quantities move to the next dependent work order before the whole manufacturing order is finished. It supports overlapping operations. It does not mean every process manufacturing run becomes a continuous accounting period, or that recording partial work immediately places finished goods into stock.

## Which production problem does this solve?

Imagine an assembly order for 100 units with preparation followed by testing. If the first 20 units are ready, testing can begin while preparation continues on the other 80. Waiting for all 100 before starting the next operation would unnecessarily hold up the flow.

This is the type of behaviour described in the [continuous production documentation](https://www.odoo.com/documentation/20.0/applications/inventory_and_mrp/manufacturing/workflows/continuous_production.html). The example here is a proposed acceptance scenario, not a factory performance claim.

## What must be configured first?

Enable Work Orders under Manufacturing settings. On the relevant bill of materials, enable Continuous Production on the Miscellaneous tab. Review the operation sequence and dependencies so the team understands which next work order should become available.

Confirm the unit of measure and how operators will register quantities. Where lot or serial tracking applies, include those identities in the test. The feature does not determine your traceability or quality release policy.

## How is a partial quantity registered?

The documented Shop Floor process uses the work order's menu to register a quantity or lot. Enter the Quantity Produced and validate it. The next dependent work order can then proceed for the available quantity.

Observe both work orders rather than just the notification on the first screen. Check that the downstream operator sees the quantity that was actually released and that the upstream operation still shows the remaining work correctly.

Do not assume that overlapping operations automatically remove a quality hold. If material must pass inspection before the next step, demonstrate that control explicitly in the configured process.

## When does the inventory outcome occur?

The documentation distinguishes partial work order progress from manufacturing order completion: quantities enter stock after the manufacturing order is completed. That matters when sales or warehouse teams are waiting for finished availability.

If the manufacturing order is closed before the entire demand is completed, review the normal backorder flow and the outstanding quantity. Do not report 100 finished merely because operations have started on all 100.

## What should the pilot demonstrate?

| Proposed case | Evidence needed |
| --- | --- |
| First 20 of 100 registered | Next operation can process the intended quantity |
| Remaining 80 still in progress | Remaining work is visible and correctly attributed |
| Tracked output | Lot or serial identity follows the intended operations |
| Order closed short | Completed quantity and backorder agree with physical work |
| Correction to an operator entry | Authorised correction leaves an explainable record |

Review component consumption and finished quantity together. A faster operation sequence does not establish correct costing or measured output.

## What should determine a rollout decision?

Ask the production owner to confirm that operators can explain where each partial quantity is, what remains blocked and when finished stock becomes available. Record exceptions and the release decision in the [ERP acceptance evidence worksheet](/resources/erp-acceptance-evidence/).

For the wider distinction between recipes, yields and shop floor execution, see [process manufacturing in Odoo](/blog/2026/10/16/process-manufacturing-recipes-yields-odoo/).

*Sources reviewed on 27 November 2026. Scenarios are proposed acceptance cases, not reported customer results. Confirm edition, installed modules and provider requirements for your database.*
