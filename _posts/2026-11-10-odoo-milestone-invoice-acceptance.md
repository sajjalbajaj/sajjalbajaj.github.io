---
layout: post
title: "Odoo Milestone Invoicing: Connect Billing to Accepted Work"
date: 2026-11-10 08:00:00 +0530
tags: [Odoo, Odoo 19, ERP, Best Practices, Project, Sales, Invoicing, Accounting]
hub: services
description: "Connect Odoo milestone invoicing with clear deliverables, acceptance evidence and sales order quantities before preparing each customer invoice."
faqs:
  - q: "Does marking a milestone reached automatically create its invoice?"
    a: "No. The documented workflow updates the delivered quantity on the sales order so that the completed portion can be invoiced."
  - q: "Is an internally completed task always customer acceptance?"
    a: "No. Define the acceptance condition from the agreement and retain the required evidence before using it as a billing trigger."
---

**Short answer:** milestone billing works when each milestone has a clear deliverable, acceptance condition and relationship to the sales order. Marking work reached in Odoo can make the associated quantity available for invoicing, but the business still needs evidence that the agreed billing condition has been met. Keep internal progress and customer acceptance distinguishable.

## Applies to

Odoo 19 Sales, Project and invoicing with milestone based service products. Customer acceptance rules are part of the business agreement and delivery process. The corresponding Odoo 20 references were reviewed in October 2026; use the documentation for your installed release when configuring screens and fields.

## What makes a milestone billable?

Start with the agreement rather than the project board. A milestone might depend on delivery, demonstration, approval or another defined event. The project team and finance should use the same interpretation before the service is sold.

I would record the deliverable, required evidence and authorised acceptance role. A phrase such as phase complete can hide different expectations. Define what the reviewer will inspect and what happens when part of the work remains open.

Keep payment timing separate from the work itself. A scheduled date can be a useful planning target without proving that a deliverable is accepted. If the commercial arrangement bills by calendar rather than completion, assess whether milestone invoicing is the right model.

## How does Odoo connect the records?

Odoo documents milestone based invoicing at the service product level, with progress managed in Project. Marking a milestone reached updates the delivered quantity on the related sales order. An invoice can then be prepared for the eligible portion.

The documentation explicitly distinguishes reaching the milestone from creating the invoice. This boundary is useful: finance can review the sales order quantity and supporting evidence before posting the customer document. Do not describe the reached checkbox as proof that an invoice has been sent or paid.

Review milestone percentages and sales order relationships when using templates. A reusable project structure does not guarantee that the billing allocation is correct for every new engagement. Confirm that the configured portions match the actual commercial agreement.

## What evidence should acceptance retain?

Keep the accepted deliverable reference, reviewer, decision and any limitations together through the approved documentation process. A customer email or signed record may be relevant, depending on the agreement. The article does not prescribe one universal legal form of acceptance.

Distinguish accepted with minor outstanding work from rejected or awaiting review. Each can have a different billing consequence. If the business permits partial acceptance, define how the corresponding quantity and invoice are handled rather than improvising a percentage after the event.

Protect the record from ambiguity when project members change. A later finance user should be able to identify why the invoice was authorised without reconstructing several meetings or relying on a project manager's memory.

## Worked example: a phased implementation service

Imagine a consultant delivering a service in agreed phases. One phase requires a documented workflow demonstration and customer approval before billing. The delivery team completes its internal tasks, but the customer requests clarification on an exception scenario.

The milestone remains under review until the agreed evidence is supplied and the authorised decision is recorded. The project owner then marks the appropriate portion reached. Finance checks the resulting sales order quantity against the acceptance and prepares the invoice.

A separate improvement request is recorded through change control instead of silently expanding the accepted milestone. This keeps the original delivery obligation, customer acceptance and additional work understandable without claiming that every requested improvement must delay the same invoice.

## What happens when scope changes?

Review the commercial allocation before changing milestones. Adding a phase, moving work between phases or reducing scope can affect the sales order and previously invoiced amounts. Delivery and finance should agree the treatment together.

Preserve the original and revised decision basis. An edited milestone name does not explain why the amount changed. Retain the approved change and its effective relationship to remaining work so that later reporting can distinguish a revision from an error.

Be careful with completed or invoiced portions. Do not use a planning edit as an informal way to reverse a financial document. Finance should determine the appropriate correction or credit process when a posted invoice needs adjustment.

## When does milestone invoicing fit?

It fits services delivered in meaningful phases with observable completion conditions. It can help align billing with accepted progress and give both parties a clearer view of the remaining obligation. The milestones need enough substance to justify separate decisions.

It is less suitable when work is primarily billed by actual time or recurring calendar periods. In those cases, another invoicing model may represent the agreement more accurately. Avoid forcing a vague ongoing service into artificial milestones merely because the project application supports them.

Review the number of milestones as well. Too many small approval events can create administrative delay, while one enormous final milestone may obscure useful progress. The right structure follows the agreement and the customer's ability to review delivered work.

## Common mistakes

Common mistakes include equating task completion with acceptance, leaving template percentages unchanged and assuming reached means invoiced. Another is changing commercial allocations without reviewing invoices already raised.

Before the first bill, follow a representative milestone from agreement through delivery, acceptance and invoice preparation. The project owner and finance reviewer should reach the same conclusion from the records. That shared evidence makes milestone billing a controlled process rather than a manual percentage entered when cash is needed.

## Related

Read [Odoo User Acceptance Testing: Scenarios That Prove Readiness](/blog/2026/10/30/odoo-user-acceptance-scenarios/) for the connected workflow.

## Official references

1. [Invoice project milestones](https://www.odoo.com/documentation/19.0/applications/sales/sales/invoicing/milestone.html)
1. [Project dashboard](https://www.odoo.com/documentation/19.0/applications/services/project/project_management/project_dashboard.html)

*How this article was checked: official Odoo 19 documentation and the corresponding Odoo 20 pages were reviewed in October 2026. The examples are illustrative, not client results or tests on a live database.*

For help designing this workflow, see my [Odoo consulting services](/services/odoo-consulting/).
