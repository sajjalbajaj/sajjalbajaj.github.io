---
layout: post
title: "Odoo Repeat Service Visits: Keep the Unfinished Work Visible"
date: 2026-11-16 10:00:00 +0530
tags: [Odoo, Odoo 19, ERP, Best Practices, Customer Management, Business Automation, Quality, ERP Implementation]
hub: services
description: "Manage repeat Odoo service visits with clear remaining work, appointment ownership, parts readiness and billing decisions linked to the original visit."
faqs:
  - q: "Should an unfinished visit be described as fully resolved?"
    a: "No. Record the work completed and the work still required separately. The next visit should have a clear owner and prerequisites."
  - q: "Is a repeat visit always free?"
    a: "No. Billing depends on the service agreement and reason for the return. Do not infer warranty or chargeability from the fact that a second visit exists."
---

**Short answer:** Record what the first service visit achieved and create a clear path for the remaining work. A repeat visit needs its own scheduling decision, prerequisites and billing review. I avoid making the original visit look unresolved forever or falsely presenting it as a fully solved customer issue.

## Applies to

Odoo 19 Enterprise Field Service, with Studio required for the documented worksheet template design. Odoo 20 documentation moves field service into Planning and describes shifts and property based worksheets. The old worksheet URL returns 404 for Odoo 20; its replacement is the official Planning field service page. Do not apply the Odoo 19 screens unchanged to Odoo 20.

## What caused the need for another visit?

The reason determines the next action. Missing parts require procurement or stock allocation. No site access requires a new customer agreement. A failed diagnostic attempt may require specialist review. A customer request for extra work may be a new commercial scope rather than unfinished service.

Record the reason in practical terms. “Return needed” does not tell the coordinator what must change before rescheduling. “Replacement component not available” or “customer power connection incomplete” gives the team a decision to make.

Avoid using the second visit as a catchall for every unresolved question. Identify which work belongs to the original commitment and which work requires new approval. That distinction matters for both customer expectations and the service team's capacity.

## How should the first visit be recorded?

Keep an accurate account of the work actually performed, time spent and materials used. The original visit is evidence of a real event even when the overall issue remains open. Do not erase that event by moving all notes to a new task and leaving the first record empty.

A worksheet can capture completed checks and the remaining issue. In Odoo 19, saving a worksheet is not proof that all optional fields were answered, so office staff should review the exception itself. Make the next required action understandable without requiring a phone call to the original technician.

Choose task stages and follow up records according to the team's design. The article does not prescribe a universal automatic repeat visit feature. The important control is that the original work and the remaining obligation can both be found and understood.

## What must be ready before rescheduling?

Confirm the customer contact, access window, required skills and material availability. If any prerequisite remains uncertain, give someone ownership of resolving it before making another firm appointment.

The material decision should include the stock source. A replacement part at the central depot is not necessarily in the technician's van. Coordinate the transfer or collection so the second visit does not reproduce the first failure.

Review the commercial position as well. The return might be included in the agreed service, covered by warranty or separately chargeable. Record the basis for the decision and any customer approval. Do not ask the technician to improvise billing policy at the doorstep.

## Worked example: a dispenser needs a replacement component

Consider an illustrative service visit to a food outlet. The technician identifies a failed component but does not have the correct replacement. The visit records the diagnosis, the equipment reference and the fact that the unit remains unavailable.

The coordinator arranges the part and links the follow up work to the original visit. Before confirming the next appointment, they check that the component will be in the assigned technician's stock and that the outlet can provide access. The customer is told what the next visit is expected to achieve.

Finance reviews whether the diagnostic work and replacement visit are included in the original agreement. The second technician can read the earlier findings, so they do not repeat the same investigation without reason. Once the repair is completed, the customer issue can be closed with a clear record of both visits.

## When it fits and when it doesn't

This approach fits repair, maintenance and installation work where one visit may not complete the customer outcome. It is useful when different technicians perform diagnosis and final work.

It does not mean every later request should be attached to an old task. A different fault, a new service period or a new scope may deserve a separate case. Keep the relationship where it explains the work, but avoid building an endless record containing unrelated customer issues.

## Common mistakes

**Scheduling before parts are ready.** Confirm the actual source and movement of the required material.

**Leaving only a vague return note.** State what must happen before the next visit can succeed.

**Assuming a second visit is automatically warranty work.** Apply the agreement and documented reason.

**Losing the first visit's evidence.** Preserve the work, materials and observations already recorded.

## How should repeat visits be reviewed?

Group the reasons for repeat visits in a way that supports action: parts readiness, access, diagnosis, additional scope or another meaningful category. These are suggested operational categories, not a claim about a standard Odoo report.

Review the underlying records before drawing conclusions about technician performance. A repeat visit caused by unavailable customer access is different from one caused by missing preparation. Use the review to improve readiness and communication, while keeping the service history honest about what happened on each visit.

## Related

Read [Odoo Field Service Worksheets: Define Useful Completion Evidence](/blog/2026/11/16/odoo-field-service-worksheet-evidence/) for the connected workflow.

## Official references

1. [Worksheets](https://www.odoo.com/documentation/19.0/applications/services/field_service/worksheets.html)
1. [Product management](https://www.odoo.com/documentation/19.0/applications/services/field_service/product_management.html)

The replacement version reference is [Odoo 20 Field Service in Planning](https://www.odoo.com/documentation/20.0/applications/services/planning/field_service.html).

*How this article was checked: official Odoo 19 documentation was reviewed in October 2026. Odoo 20 references were also checked; material differences or moved pages are identified above. Examples are illustrative business scenarios, not client results or tests on a live database.*

If you need help translating these decisions into your own workflow, see my [Odoo consulting services](/services/odoo-consulting/).
