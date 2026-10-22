---
layout: post
title: "Odoo Alternative Work Centres: Check Capability Before Rescheduling"
date: 2026-11-09 09:00:00 +0530
tags: [Odoo, Odoo 19, ERP, Best Practices, Manufacturing, MRP, Planning, Quality]
hub: manufacturing
description: "Plan Odoo alternative work centres with realistic calendars, capacity and process capability before moving work away from an unavailable machine."
faqs:
  - q: "Does naming an alternative work centre prove it can perform the operation?"
    a: "No. Equipment, tooling, skills and approved process conditions need operational review before the alternative is treated as interchangeable."
  - q: "Does capacity represent only the number of machines?"
    a: "No. The configured capacity and duration assumptions must reflect how the operation is performed, including product differences and practical constraints."
---

**Short answer:** use an alternative work centre only after confirming that it can perform the operation under the required conditions. Odoo can include alternatives in work centre planning, but a configuration link does not prove physical capability. Calendars, capacity, tooling, people and quality requirements need to support the proposed move.

## Applies to

Odoo 19 Manufacturing with Work Orders enabled. Odoo 20 changes some calendar labels and planning navigation; this article avoids relying on those later screen paths. The corresponding Odoo 20 references were reviewed in October 2026; use the documentation for your installed release when configuring screens and fields.

## What makes an alternative genuinely usable?

Identify the operation and the conditions it requires. Another machine may perform a similar task without supporting the same material, dimensions, tooling or approved method. Record those boundaries before planners rely on it during an interruption.

I would ask the production owner to demonstrate a representative job and explain the constraints. Include setup and inspection responsibilities. The objective is evidence that the alternative can deliver the required output, not simply that there is free time on its calendar.

Keep capability ownership distinct from scheduling authority. A planner may be authorised to move work within approved alternatives but should not be expected to approve a new production method. Define the escalation route when the proposed move falls outside the established capability.

## How do calendars and capacity affect the plan?

Odoo work centres include working hours and capacity related configuration. Those values should reflect the actual operating model. A machine available on paper is not necessarily usable if the required operator or tooling is unavailable during the same period.

Review product specific assumptions where relevant. Different products can use a work centre at different effective capacities or durations. A generic setting may be sufficient for a simple operation but misleading for a varied product mix.

Include setup and cleanup time in the appropriate planning model. Moving a job can create a new setup sequence even if processing time is unchanged. A schedule that ignores those transitions may promise an improvement that the floor cannot achieve.

## What should happen when a work centre becomes unavailable?

Record the interruption and identify affected work. Distinguish jobs already started from jobs waiting to begin. Moving partly completed work can require a different process from assigning a fresh order to another approved centre.

Review material availability and downstream dependencies before rescheduling. An alternative machine cannot resolve a missing component, and an earlier operation may still block later work. Keep the reason for the original delay visible so that the response addresses the real constraint.

Communicate the accepted change to the people executing it. Updated planning records should correspond to clear operating instructions. A move on a planning screen does not guarantee that the operator knows which tooling, material or inspection method now applies.

## Worked example: a production machine is unavailable

Imagine a manufacturer whose usual machine becomes unavailable before a planned run. Another centre has free calendar time and is listed as an alternative. The production owner confirms that it can handle the product but needs different tooling and a longer setup.

The planner reviews the tooling, operator availability and affected downstream work. The accepted schedule includes the additional preparation rather than assuming the original duration transfers unchanged. Quality staff confirm the relevant inspection instructions.

After the run, the team compares the recorded execution with the planning assumptions. If the alternative consistently needs a different duration, the appropriate owner reviews the master data. The decision improves future planning without pretending that the first reschedule automatically established a permanent standard.

## Which records should explain the change?

Keep the affected order, original constraint, selected alternative and authorised decision identifiable. If the change introduces a quality or process exception, retain that approval through the agreed documentation process. Staff should not need to infer the reason from a different work centre name.

Record actual execution where the workflow supports it. Planning duration and observed duration answer different questions. A late finish may reveal an inaccurate assumption, but it can also reflect a separate interruption that should not be built into the standard permanently.

Review costs with finance where work centre rates or execution change the result. Do not assume a faster alternative is cheaper or that a similar machine has the same cost basis. The operational decision and its accounting consequences should remain explainable.

## When does alternative planning fit?

It fits operations with genuinely interchangeable capacity and maintained planning data. It can help respond to downtime or workload imbalance when the approved alternatives are understood. The organisation still needs to coordinate people, materials and instructions.

It is a poor substitute for a specialist capability that only one centre provides. In that case, outsourcing, a different method or rescheduling may need a separate decision. Naming an unsuitable machine as an alternative only hides the constraint until execution begins.

Keep the list of alternatives current. Equipment changes, staff capability and product revisions can make a previously valid option unsuitable. Review the affected relationships when the underlying process changes rather than waiting for the next urgent outage.

## Common mistakes

Common mistakes include equating free calendar time with capability, ignoring setup differences and moving started work without a clear continuation method. Another is accepting planning output without checking the availability of people and materials.

Rehearse an unavailable primary centre using a representative order. The planner and production team should explain the selected option, changed assumptions and required approvals. A reliable alternative is one the business can actually execute, with evidence that supports the promise made to the next operation or customer.

## Related

Read [Work Centers and Work Orders in Odoo Manufacturing](/blog/2026/08/15/work-centers-and-work-orders-in-odoo/) for the connected workflow.

## Official references

1. [Work centers](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/manufacturing/advanced_configuration/using_work_centers.html)
1. [Quality control points](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/quality/quality_management/quality_control_points.html)

*How this article was checked: official Odoo 19 documentation and the corresponding Odoo 20 pages were reviewed in October 2026. The examples are illustrative, not client results or tests on a live database.*

For help designing this workflow, see my [Odoo consulting services](/services/odoo-consulting/).
