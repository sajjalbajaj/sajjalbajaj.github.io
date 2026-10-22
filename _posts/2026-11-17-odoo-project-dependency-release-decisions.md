---
layout: post
title: "Odoo Task Dependencies: Review What Releases Blocked Work"
date: 2026-11-17 08:00:00 +0530
tags: [Odoo, Odoo 19, ERP, Best Practices, Business Automation, ERP Implementation, Customer Management, Setup]
hub: services
description: "Use Odoo task dependencies with clear predecessor outcomes, cancellation decisions and practical rules for releasing work to the next team."
faqs:
  - q: "Which predecessor states release dependent work?"
    a: "The reviewed documentation says successor tasks wait until predecessors are Approved, Cancelled or Done. Review whether cancellation satisfies your business prerequisite."
  - q: "Does a dependency prove that a customer approved the output?"
    a: "No. A dependency reflects task status. Define and record the evidence required for customer acceptance separately."
---

**Short answer:** Use Odoo task dependencies to represent a real prerequisite, then define what each predecessor outcome means. The documented workflow can release a successor when a predecessor is approved, done or cancelled. I review cancellation carefully because stopping a task is not always equivalent to satisfying the condition it represented.

## Applies to

Odoo 19 Project task dependencies. Project is available across editions, while Gantt and other advanced views can require Enterprise; this discussion does not depend on Gantt access. The corresponding Odoo 20 dependency documentation was reviewed and describes the same predecessor states.

## What should a dependency represent?

A dependency should explain why work cannot start yet. Installation might depend on site readiness, data import on an approved mapping, or a customer demonstration on a prepared environment. These are different conditions, and the task name should make the required outcome clear.

Avoid linking every task to the previous one simply because they appear in a preferred order. Some work can proceed in parallel. Excessive dependencies make the plan brittle and encourage staff to remove links whenever the schedule changes.

I start by asking the receiving owner what evidence they need before beginning. That answer defines the predecessor more accurately than a generic stage name. It also exposes cases where the true prerequisite belongs to a customer or another department rather than the project team.

## What does the documented Odoo behaviour mean?

Odoo lets a successor identify its predecessors in the Blocked by tab. The documentation describes successor tasks entering Waiting and being unable to move to In Progress until their predecessors are Approved, Cancelled or Done.

The inclusion of Cancelled is important. Cancelling a task may mean the prerequisite is no longer needed, which can legitimately release the next step. It may also mean the prerequisite cannot be delivered, which should trigger a wider plan change. The application status alone cannot distinguish those business meanings.

For that reason, define who may cancel a prerequisite and what review follows. A cancellation note should explain whether the downstream work remains valid. Where a stronger control is required, design it explicitly rather than assuming the dependency mechanism enforces every business approval.

## How do you handle a changed prerequisite?

When scope changes, review the dependency with the receiving team. A task may need a different predecessor, a revised output or a new owner. Removing the link without explaining why makes it difficult to understand how the work was authorised to start.

Keep the acceptance evidence close to the task. That might be an approved mapping, a customer confirmation or a recorded readiness review. The evidence should be specific enough that another team member can understand the decision later.

Also review partial completion. If only part of the output is ready, decide whether the successor can use that part safely or needs to wait. Splitting the work into meaningful tasks may be clearer than declaring the whole prerequisite done and relying on an informal warning.

## Worked example: importing a customer catalogue

Imagine an illustrative implementation project with a catalogue import blocked by a data mapping task. The customer decides to exclude a product family from the first release. The mapping owner cancels a separate task that covered only the excluded family.

That cancellation can legitimately remove a dependency for work that no longer needs the excluded data. However, cancelling the overall mapping task would not prove the remaining catalogue is ready. The project manager checks which predecessor each import task actually depends on.

The team records the revised scope and keeps the required mapping review for the included products. The import owner can then proceed with a clear explanation of what was approved and what was deliberately deferred. The dependency structure reflects the decision instead of obscuring it.

## When it fits and when it doesn't

Dependencies fit projects with identifiable outputs and sequencing constraints. They help when several people need to coordinate without continuously asking whether earlier work is ready.

They do not replace resource planning, customer acceptance or formal approval controls. A task can be technically available to start while the assigned person is unavailable or a commercial condition remains unresolved. Use dependencies for sequencing and handle those other constraints in their appropriate workflows.

## Common mistakes

**Treating cancelled as successful.** Review whether the downstream prerequisite still exists.

**Linking every task into one long chain.** Preserve legitimate parallel work and avoid unnecessary blocking.

**Using vague predecessor names.** Describe the output the receiving team needs.

**Removing links to make a schedule look healthy.** Record the scope or sequencing decision that justifies the change.

## What should the project manager review?

Look at blocked tasks whose predecessors have no clear next action. These often need a decision rather than more reminders. Identify the owner of the missing evidence and agree when the dependency can be reviewed again.

Also review tasks released after a predecessor was cancelled. A small sample can reveal whether the team understands that state consistently. The objective is a plan that explains readiness, so staff can trust the next available task rather than checking every dependency through a separate conversation.

## Related

Read [Odoo Sales Handover: Turn a Won Deal into Deliverable Work](/blog/2026/11/15/odoo-sales-delivery-handover/) for the connected workflow.

## Official references

1. [Task dependencies](https://www.odoo.com/documentation/19.0/applications/services/project/tasks/task_dependencies.html)

*How this article was checked: official Odoo 19 documentation was reviewed in October 2026. Odoo 20 references were also checked; material differences or moved pages are identified above. Examples are illustrative business scenarios, not client results or tests on a live database.*

If you need help translating these decisions into your own workflow, see my [Odoo consulting services](/services/odoo-consulting/).
