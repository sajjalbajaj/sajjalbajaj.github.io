---
layout: post
title: "Odoo Sales Handover: Turn a Won Deal into Deliverable Work"
date: 2026-11-15 08:00:00 +0530
tags: [Odoo, Odoo 19, ERP, Best Practices, CRM, ERP Implementation, Customer Management, Business Automation]
hub: services
description: "Build an Odoo sales handover that connects accepted scope, delivery responsibilities, open assumptions and billing triggers before work begins."
faqs:
  - q: "Does marking an opportunity won mean delivery can start?"
    a: "No. Confirm the accepted order, operational prerequisites and responsible delivery owner. CRM success is not evidence that every delivery condition is ready."
  - q: "Should open assumptions be hidden from the delivery team?"
    a: "No. Record unresolved assumptions with an owner and decision date so the team can distinguish agreed scope from work still being clarified."
---

**Short answer:** A useful Odoo sales handover tells the delivery team what the customer accepted, what must happen next and which assumptions remain open. A won opportunity is only a commercial milestone. I ask the receiving owner to confirm that the order can be delivered as described before work is scheduled.

## Applies to

Odoo 19 CRM and Sales, with Project or Inventory according to the delivery model. Core apps are available across editions; advanced project views and specialist apps may require Enterprise. Corresponding Odoo 20 quotation and task dependency documentation was reviewed. The handover checklist is a recommended operating process.

## What information must survive the sales conversation?

Sales discussions contain requirements that may never reach a quotation line: an access restriction, an agreed contact, a dependency on customer data or a date that was only provisional. If these details remain in one person's memory, the delivery team starts with an incomplete picture.

The handover should identify the accepted offer and the outcome the customer expects. Separate the committed scope from optional work and future ideas. A proposal may describe several phases, while the order authorises only the first. The delivery owner needs to know exactly where that boundary sits.

Include the customer's responsibilities as well. A service team cannot complete installation if the site is unavailable, and an implementation team cannot migrate data that has not been supplied. Record who will obtain each prerequisite and when it is needed.

## Which Odoo records should be connected?

Use the opportunity for commercial context, the sales order for the accepted transaction and the relevant delivery records for execution. Depending on the product configuration, work may involve stock transfers, project tasks or other application records. Review the actual links in the database rather than assuming every service product creates the same kind of task.

Keep the current quotation reference visible in the handover note. If there were revisions, identify the accepted one. A delivery team should not have to choose between several PDFs with similar names to understand the promise.

For project work, task dependencies can help express sequencing. Odoo documents predecessors and blocked tasks, but a dependency is only useful when the task definition describes the real prerequisite. “Discovery complete” should mean a defined output exists, not simply that a meeting was held.

## How should commercial exceptions be handled?

Record unusual payment arrangements, acceptance conditions and customer supplied materials in a way the responsible team can interpret. Avoid scattering the same condition across informal notes with different wording.

Billing triggers deserve particular attention. A delivery manager may understand that a milestone is complete, while finance expects signed acceptance before invoicing. Decide which evidence is required and who supplies it. The sales handover should explain that requirement before the project reaches the milestone.

If a promise cannot be delivered, escalate it early. Do not quietly change the delivery plan and hope the customer will accept the difference. The commercial owner should agree the revised commitment with the customer and preserve the resulting decision on the appropriate record.

## Worked example: equipment plus installation

Imagine an illustrative supplier selling equipment with installation at a customer's new premises. The opportunity is won, and the sales order includes both goods and a service. The building contractor has not confirmed when the site will be ready.

During handover, the delivery owner identifies site readiness as an unresolved prerequisite. Warehouse staff can prepare the goods, but the installation date remains provisional. The sales owner obtains the customer's confirmation rather than allowing the service scheduler to interpret the requested date as guaranteed.

The handover also states that the customer will provide power and access equipment. Those responsibilities become part of the preparation review. When the site is ready, the service team receives a workable brief and finance knows which completion evidence supports billing. The team has converted a sale into coordinated work without pretending every condition was settled at confirmation.

## When it fits and when it doesn't

This approach fits project services, equipment installation and any sale where delivery is handled by someone other than the salesperson. It is also useful for repeat orders with unusual exceptions.

It does not justify a lengthy meeting for every standard transaction. For routine orders, a concise record review may be enough. Reserve deeper handovers for scope, timing or acceptance conditions that could materially change delivery effort or customer expectations.

## Common mistakes

**Treating won as ready.** Confirm operational prerequisites and accepted scope before allocating work.

**Passing every sales attachment without context.** Identify the current offer and the decisions that matter.

**Leaving billing triggers implicit.** State the evidence finance needs and who will provide it.

**Using task stages as proof of customer acceptance.** Define the acceptance decision separately from internal progress.

## What does a completed handover look like?

The receiving owner can explain the scope, the first action and the unresolved conditions without asking the salesperson to reconstruct the entire conversation. Warehouse, service and finance responsibilities are clear enough that work can move between them.

Keep a short list of handovers returned for clarification. Patterns in that list often reveal a quotation or discovery problem upstream. Improve the sales process where the missing information originates, rather than asking delivery staff to compensate indefinitely.

## Related

Read [Odoo Quotations: Keep Revisions and Acceptance Clear](/blog/2026/11/14/odoo-quotation-revision-acceptance/) for the connected workflow.

## Official references

1. [Create quotations](https://www.odoo.com/documentation/19.0/applications/sales/sales/sales_quotations/create_quotations.html)
1. [Task dependencies](https://www.odoo.com/documentation/19.0/applications/services/project/tasks/task_dependencies.html)

*How this article was checked: official Odoo 19 documentation was reviewed in October 2026. Odoo 20 references were also checked; material differences or moved pages are identified above. Examples are illustrative business scenarios, not client results or tests on a live database.*

If you need help translating these decisions into your own workflow, see my [Odoo consulting services](/services/odoo-consulting/).
