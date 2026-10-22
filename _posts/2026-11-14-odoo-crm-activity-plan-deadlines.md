---
layout: post
title: "Odoo CRM Activity Plans: Choose Dates That Match the Work"
date: 2026-11-14 08:00:00 +0530
tags: [Odoo, Odoo 19, ERP, Best Practices, CRM, Business Automation, Customer Management, Setup]
hub: sales
description: "Plan Odoo CRM activities around real customer milestones, with clear assignment, sensible deadline anchors and controls for repeated follow ups."
faqs:
  - q: "Does an activity plan wait for each task to finish?"
    a: "Launching an activity plan schedules its activities. Activity chaining has separate suggest or trigger choices; do not assume every plan is a sequential approval process."
  - q: "Should deadlines follow completion or the previous deadline?"
    a: "Use the previous deadline for a fixed timetable and completion when the next action depends on finished work. Review how lateness affects the intended customer promise."
---

**Short answer:** Build an Odoo CRM activity plan around a meaningful event, such as a discovery meeting or proposal review. Assign each action to the person who can complete it and choose its date deliberately. I avoid treating a scheduled sequence as proof that the preceding work has happened.

## Applies to

Odoo 19 CRM in Community or Enterprise. The corresponding Odoo 20 activity documentation describes the same plan date, assignment and chaining concepts. Available activity actions depend on installed applications. This is a decision guide for designing plans rather than a claim that an activity plan enforces business approvals.

## Which event should anchor the plan?

A plan date should mean something to the people doing the work. If it represents a customer meeting, preparation belongs before that date and proposal follow up belongs after it. If it represents an expected decision, the sequence will be different. Calling every plan date “today” loses that useful distinction.

Odoo activity plans support intervals before or after the plan date. The plan summary shows the resulting deadlines before scheduling. Review that summary with the salesperson, especially where the customer has already agreed a meeting or submission date.

Do not build a plan around a guessed purchase date simply because the pipeline requires one. A forecast date can change without the customer agreeing to a new timetable. Use a confirmed event where possible, or label the plan as provisional and make review of its dates part of the next conversation.

## How is a plan different from activity chaining?

A plan schedules a set of activities when it is launched. It is useful for arranging preparation, document collection and follow up around an event. It should not be described as a workflow that waits for each earlier task to finish before creating the next one.

Activity types have a separate chaining choice. Odoo can suggest a next activity or trigger one when the current activity is marked done. A suggested action leaves a decision to the user. A triggered action creates a stronger expectation of continuity, so it should only be used when the next step is normally appropriate.

The date basis also matters. Scheduling after a previous deadline maintains a fixed timetable even if work is late. Scheduling after completion moves the reference point to when the earlier action finished. Neither option is universally better: one protects a calendar, while the other reflects a dependency.

## Who receives each activity?

A plan can use a default user or ask for the responsible person at launch. Those choices are independent of the assumption that the opportunity's salesperson will do everything. A technical review may belong to a specialist, while the customer call belongs to the commercial owner.

Review default users when employees change roles. A carefully designed sequence can quietly become unreliable if it keeps assigning work to someone who no longer handles that responsibility. Avoid using an individual as a permanent default when the real responsibility rotates between several colleagues.

I also make summaries specific enough to act on. “Follow up” gives little guidance. “Confirm whether the revised scope meets the buyer's requirement” explains the decision the activity should produce. Keep the supporting instructions short and link the relevant quotation or discussion.

## Worked example: preparing a demonstration

Consider an illustrative software distributor arranging a product demonstration. The agreed demonstration date is the anchor. A requirements call is due beforehand, a specialist prepares the demonstration, and the salesperson follows up afterwards with the customer's remaining questions.

The plan summary shows that the preparation deadline would already be overdue if the demonstration is scheduled tomorrow. The salesperson does not launch the normal sequence unchanged. They agree a shorter preparation arrangement with the specialist and update the activities to match what is achievable.

After the demonstration, the customer asks for a different scope. The salesperson reviews the remaining plan instead of allowing a generic quotation reminder to proceed as though nothing changed. This preserves the purpose of the plan: supporting a real sales conversation rather than generating a predictable number of tasks.

## When it fits and when it doesn't

Activity plans fit repeatable preparation and follow up where responsibilities and timing are reasonably stable. They can help a growing team apply a consistent minimum process without relying on memory.

They do not replace formal approvals, complex dependency management or consent rules for outbound messages. If an action must be blocked until another decision is approved, design that control explicitly. A reminder in the chatter is not the same as enforced permission to proceed.

## Common mistakes

**Using the wrong anchor date.** Agree whether the plan is based on a meeting, submission or decision.

**Launching the same plan twice.** Check existing activities before scheduling another sequence for the same event.

**Confusing suggestions with triggers.** Decide where staff should exercise judgement before creating more work.

**Completing activities just to remove overdue warnings.** Record whether the intended action occurred and what changed.

## What makes a plan worth keeping?

Review a sample of completed opportunities with the team. Identify activities that repeatedly produced a useful decision and those routinely skipped because they were irrelevant. Adjust the plan around observed work rather than adding more reminders each time something goes wrong.

A good plan leaves room for the salesperson to respond to the customer. Its value is a clearer next action, with a credible date and an accountable owner. The number of activities created is a poor substitute for those outcomes.

## Related

Read [Odoo CRM: Transfer Lead Ownership Without Losing Follow Ups](/blog/2026/11/13/odoo-crm-lead-ownership-handover/) for the connected workflow.

## Official references

1. [CRM activities and activity plans](https://www.odoo.com/documentation/19.0/applications/sales/crm/optimize/utilize_activities.html)

*How this article was checked: official Odoo 19 documentation was reviewed in October 2026. Odoo 20 references were also checked; material differences or moved pages are identified above. Examples are illustrative business scenarios, not client results or tests on a live database.*

If you need help translating these decisions into your own workflow, see my [Odoo consulting services](/services/odoo-consulting/).
