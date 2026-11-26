---
layout: post
title: "Odoo 20 Production Overview: Review Orders, Components and Delays"
date: 2026-11-13 07:00:00 +0530
tags: [Odoo, Odoo 20, ERP, Best Practices, Manufacturing, Reporting, Inventory Management, Operations]
hub: manufacturing
description: "Use Odoo 20 Manufacturing Kanban production overview to inspect order priorities, component availability, work centres and planning exceptions."
last_modified_at: 2026-11-27
faqs:
  - q: "Where is the Odoo 20 production overview?"
    a: "Open Manufacturing, Operations, Manufacturing Orders and select Kanban view. The documented overview is this order view."
  - q: "Why might a completed manufacturing order be missing?"
    a: "The default To Do filter can exclude it. Inspect the active filters and grouping before concluding that the record is missing."
  - q: "Does component availability on a card prove physical readiness?"
    a: "No. Open the underlying order and check locations, reservations and actual material handling before committing production capacity."
---

**Short answer:** The Odoo 20 production overview is the Kanban view of manufacturing orders. It brings order status, priorities, component availability and work progress together for review. Its value depends on choosing the right filters and checking the underlying order before changing a production commitment.

## Where do planners find the overview?

The [production overview documentation](https://www.odoo.com/documentation/20.0/applications/inventory_and_mrp/manufacturing/reporting/production_overview.html) directs users to Manufacturing, Operations, Manufacturing Orders, then Kanban. This is an operational order view, rather than a separate capacity optimisation engine.

The default To Do filter and weekly grouping affect what appears. Cards are organised with priority and scheduled date in mind. Start a planning review by recording the active filters and date grouping so everyone is discussing the same population.

## Which card details deserve attention?

The view includes the manufacturing order, product and quantity, status, priority, activities, remaining work order time, component availability and responsible person. Depending on the order's progress, the active work centre and child manufacturing status can also provide context.

Use those details to choose what to investigate. They are summaries of recorded activity, and may lag behind work that has happened physically but has not been entered.

| Signal on the overview | Useful follow up |
| --- | --- |
| Components waiting | Inspect the missing component, reservation and expected receipt |
| Priority raised | Confirm who authorised the change and what other work it displaces |
| Work centre active | Open work order progress and confirm the actual remaining work |
| Child order delayed | Check the dependency before changing the parent promise |

## How should a planner handle a possible shortage?

Consider an illustrative assembly order scheduled for tomorrow. Its card indicates a component issue. Open the order and identify the exact component, quantity and supplying location. Determine whether supply is genuinely late, is waiting for a warehouse operation, or is recorded in the wrong place.

Only then decide whether to expedite material, release a partial quantity or reschedule. A priority change without that investigation can simply move the same shortage to another order.

If partial quantities are the issue, the [continuous production guide](/blog/2026/11/12/odoo-20-continuous-production/) explains why operation progress and finished stock availability require separate checks.

## How can grouping improve the daily meeting?

Group by product when discussing related production runs, by status when reviewing the work queue, and by material availability when focusing on shortages. Date and deadline groupings answer different questions, so do not silently substitute one for the other.

Use a small set of agreed views with a stated purpose. A screenshot without its filter context is weak evidence of what the team actually reviewed.

## What should acceptance testing prove?

Create proposed cases for a ready order, an order waiting on a component, an active work centre and a delayed child order. Verify that each appears under the intended filters and opens the correct source record.

Include a completed order so reviewers understand why it disappears from the default To Do population. Confirm that priority edits are restricted to the intended users and that the team can identify who owns an unresolved exception.

The acceptance outcome is a reproducible planning review, with a decision and owner for each material issue. Capture that review in the [ERP acceptance evidence resource](/resources/erp-acceptance-evidence/).

*Sources reviewed on 27 November 2026. Scenarios are proposed acceptance cases, not reported customer results. Confirm edition, installed modules and provider requirements for your database.*
