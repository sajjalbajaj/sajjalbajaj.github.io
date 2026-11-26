---
layout: post
title: "Odoo 20 Field Service Planning: Match Visits with Capacity"
date: 2026-11-18 07:00:00 +0530
tags: [Odoo, Odoo 20, ERP, Best Practices, Field Service, Planning, Operations, Customer Management]
hub: services
description: "Plan Odoo 20 field service interventions, published shifts, worksheets and billable work, with explicit tests for warranty and added products."
last_modified_at: 2026-11-27
faqs:
  - q: "What must a field service shift have before Sign In is available?"
    a: "The documented flow requires the shift to be published and to have a customer."
  - q: "Does Under Warranty make every sales order line free?"
    a: "No. The documentation distinguishes products added from the shift, which receive zero prices under warranty, from lines added directly on the sales order, which are not changed by that setting."
  - q: "Does a completed shift prove the customer issue was solved?"
    a: "No. Review the worksheet, work performed, customer report and any unresolved follow up against the agreed service outcome."
---

**Short answer:** Odoo 20 Field Service in Planning supports customer interventions through published shifts, sign in, work recording and completion. Scheduling a person is only the start. Verify the customer, worksheet, time and billing behaviour, especially where warranty work and chargeable products appear on the same visit.

## How does a planned shift become a service intervention?

The [Field Service planning documentation](https://www.odoo.com/documentation/20.0/applications/services/planning/field_service.html) describes enabling Field Service in Planning settings. Interventions can be organised through planning and linked sales or helpdesk work.

The shift needs a customer and must be published before Sign In is available. Review the employee, visit location and allocated time before publication. A published shift establishes an assignment, not that travel or technical completion is feasible.

Map based planning also depends on usable addresses and the documented mapping configuration. Do not treat a calendar gap as verified travel capacity.

## What should a technician record during the visit?

The documented flow supports signing in, adding photos, products and notes, completing the worksheet, and completing the intervention. The completion process can produce a customer report where applicable.

Define the worksheet around the service outcome. For a repair visit, a useful record might include the equipment reference, fault observed, work performed, parts used and any remaining issue. Those are proposed fields for the business to assess, rather than a claim that a standard template covers every industry.

## Why does warranty billing deserve a separate test?

The documentation makes an important distinction: Under Warranty causes products added from the shift to carry zero prices, but it does not change lines added directly on the sales order.

Consider an illustrative visit with one covered part and one separately authorised chargeable item. Add each through the intended route, inspect the sales lines and verify the price before invoicing. Otherwise two users can record apparently similar materials with different commercial outcomes.

| Proposed case | Expected review |
| --- | --- |
| Covered part added from warranty shift | Zero price behaviour and correct product |
| Item added directly on sales order | Price remains subject to the sales line rules |
| Visit with chargeable labour | Approved time and billing basis |
| Unresolved fault | Explicit follow up instead of an assumed successful repair |

## How should time based work be assessed?

The documented time based setup involves Project and Timesheets, an employee resource and the relevant billable project configuration. Starting and completing work updates time information.

Check the relationship between allocated time, recorded work and what reaches the billable records. They answer different questions. A geolocation recorded with browser permission can support a start or end event; it does not prove the quality of all work between them.

## What closes a service acceptance test?

Have a dispatcher and technician demonstrate the same intervention from assignment through the customer report and sales outcome. Include a return visit or unresolved fault so the workflow does not equate completion of a shift with resolution of the customer's problem.

See [repeat visits in field service](/blog/2026/11/16/odoo-field-service-repeat-visits/) for that distinction. Use the [ERP acceptance evidence resource](/resources/erp-acceptance-evidence/) to connect scheduling, worksheet and billing checks.

*Sources reviewed on 27 November 2026. Scenarios are proposed acceptance cases, not reported customer results. Confirm edition, installed modules and provider requirements for your database.*
