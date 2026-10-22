---
layout: post
title: "Odoo Project Profitability: Investigate Missing Costs"
date: 2026-11-17 09:00:00 +0530
tags: [Odoo, Odoo 19, ERP, Best Practices, Accounting, Finance, ERP Implementation, Invoicing]
hub: accounting
description: "Review missing Odoo project costs by checking analytic links, document states, employee cost settings and material movements before trusting margin."
faqs:
  - q: "Why might a project cost be absent from the dashboard?"
    a: "Check the record link, analytic account, document state and relevant feature settings. Different cost types enter the dashboard through different workflows."
  - q: "Is the project dashboard the same as cash profit?"
    a: "No. Expected, delivered and invoiced amounts represent different stages. Review the accounting and payment records separately when assessing cash."
---

**Short answer:** When Odoo project profitability looks unusually strong, investigate whether costs are missing before concluding the project performed well. Check the source records, their analytic links and their workflow states. I separate a genuine margin improvement from a dashboard that has not yet received all relevant costs.

## Applies to

Odoo 19 billable projects with the relevant Project, Timesheets, Sales, Accounting and Inventory features installed. The full profitability workflow and advanced apps can require Enterprise. Odoo 20 project profitability documentation was reviewed and describes the same linked record and analytic account requirements.

## Which records feed the dashboard?

The documented profitability dashboard uses records linked to the project and its analytic account. Revenue and costs can come from several applications, including timesheets, materials, expenses and accounting documents. A cost existing somewhere in the database does not guarantee it belongs to the project's view.

Begin with the business event you expected to see. Was it employee time, a subcontractor bill, stock used on the job or an expense? Identify that source record before changing dashboard filters. Each type has its own requirements and timing.

The documentation also distinguishes expected amounts, amounts to invoice or bill, and invoiced or billed amounts. Comparing unlike stages can produce a misleading impression. A planned sale and a posted supplier cost are not equally final simply because both appear in a project review.

## Why can labour costs look wrong?

Timesheet costs depend on employee settings and recorded time. If time is missing, linked to another task or associated with an incorrect employee cost, the project may not reflect the effort actually used.

Review the employee cost basis with the responsible finance or HR owner. Do not invent a rate to make the dashboard match an expected margin. The business needs a consistent method for estimating labour cost, and that method should be understood when comparing projects.

Separate recorded work from billable work. A team may spend time correcting an internal mistake that cannot be charged to the customer. Hiding the time to protect billing figures also hides cost. The timesheet and sales configuration should support the distinction between effort and recoverable revenue.

## Why might purchases and materials be absent?

The Odoo documentation notes that the purchase order cost entry appears once the vendor bill is posted. A purchase commitment can therefore require review even before the expected cost is visible in that dashboard section.

For material stock moves, the documented profitability flow requires the relevant Analytic Costs setting on the operation type. Review the configuration and validated movement with the inventory owner. Do not assume that linking a sales order to a project automatically captures every physical material movement.

Expenses and vendor bills also need appropriate links and states. A draft, unapproved or incorrectly allocated record may explain the apparent gap. Correct the source through the normal workflow and preserve the reason for the change instead of adding an unrelated manual number to compensate.

## Worked example: an installation appears highly profitable

Consider an illustrative installation project with accepted service revenue and recorded technician time. A specialist subcontractor has completed work, but the supplier bill remains in draft. Some materials were issued through an operation that was not configured for the intended analytic cost treatment.

The manager notices that the dashboard margin is higher than the project estimate. Finance identifies the unposted bill, and inventory reviews the material movement and configuration. The team establishes which corrections are appropriate before relying on the dashboard for a final performance decision.

The review also distinguishes committed work from recorded actual cost. The project manager keeps the expected subcontractor amount visible in the management discussion while finance completes its process. No one treats the temporary dashboard result as a realised saving.

## When it fits and when it doesn't

This approach fits project reviews where margin changes unexpectedly or source documents span several departments. It is useful before closing a job, quoting similar work or evaluating delivery performance.

It does not replace statutory accounts or a complete cash flow analysis. The dashboard answers a project management question using configured links and workflow states. Finance should define how that view reconciles to the organisation's accounting reports and cost policies.

## Common mistakes

**Assuming an empty cost line means no cost.** Find the underlying business event and its record.

**Comparing expected revenue with incomplete actual costs.** State the maturity of both sides of the comparison.

**Removing nonbillable time.** Preserve actual effort even when it cannot be invoiced.

**Correcting only the dashboard.** Fix links or source records through the responsible application workflow.

## What should a monthly review include?

Review outstanding supplier bills, unsubmitted time and expenses, and material movements awaiting clarification. Assign each gap to the person who can resolve the source rather than making the project manager guess a financial correction.

Keep the explanation alongside the management result. A project can be operationally complete while its cost picture remains provisional. Making that uncertainty explicit supports better pricing and delivery decisions than presenting a precise margin that the underlying records cannot yet support.

## Related

Read [Project Profitability in Odoo: Did the Project Make Money?](/blog/2026/09/05/odoo-project-profitability/) for the connected workflow.

## Official references

1. [Project profitability](https://www.odoo.com/documentation/19.0/applications/services/project/project_management/project_profitability.html)

*How this article was checked: official Odoo 19 documentation was reviewed in October 2026. Odoo 20 references were also checked; material differences or moved pages are identified above. Examples are illustrative business scenarios, not client results or tests on a live database.*

If you need help translating these decisions into your own workflow, see my [Odoo consulting services](/services/odoo-consulting/).
