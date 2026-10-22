---
layout: post
title: "Odoo Helpdesk Closure: Keep Quiet Tickets from Hiding Work"
date: 2026-11-18 09:00:00 +0530
tags: [Odoo, Odoo 19, ERP, Best Practices, Customer Management, Business Automation, Setup, Quality]
hub: services
description: "Configure Odoo Helpdesk closure around resolved work, customer feedback and clear inactivity rules so unanswered tickets do not disappear prematurely."
faqs:
  - q: "Does temporarily folding a Kanban column close its tickets?"
    a: "No. Odoo distinguishes temporary visual folding from the stage setting Folded in Kanban used to mark tickets closed."
  - q: "Does automatic closure use working days?"
    a: "The reviewed documentation says the inactivity period does not take the working calendar into account. Review that difference when setting customer expectations."
---

**Short answer:** Close Odoo Helpdesk tickets when the work meets your resolution policy, and limit automatic closure to clearly defined situations. Silence alone does not prove that a problem is solved. I distinguish a resolved ticket awaiting customer feedback from a ticket that nobody has worked on.

## Applies to

Odoo 19 Enterprise Helpdesk. Odoo 20 documentation was reviewed and describes the same distinctions between folded stages, automatic closing and customer closure. Follow up handling should be checked in the installed configuration; this article does not assume that every incoming reply automatically reopens a ticket.

## What should closed mean for the customer?

The team needs a shared definition of resolution. It may mean a fix has been delivered, a question has been answered or the customer has accepted an agreed workaround. Each outcome should be stated in a closing note so the customer understands what the team considers complete.

A closed ticket can still have useful history and related work. For example, a support question may be resolved while a separately approved enhancement remains on a project backlog. Link that next action rather than leaving the customer to infer that everything discussed has been delivered.

Do not use closure as a substitute for declining a request. If work is outside the agreement or cannot be performed, explain the decision and any available next step. That is a different outcome from a successful repair and should remain understandable in later reporting.

## Which Odoo stage setting actually closes tickets?

The documentation describes closing tickets by moving them to a stage configured as Folded in Kanban. It also warns that temporarily folding a column through the Kanban menu only changes the view. That visual action does not close the tickets.

This distinction can confuse a team trying to tidy its board. A manager may collapse a column and assume its contents are complete, while reports still show active work. Review the stage configuration and ticket state, not just what is visible on the screen.

Use stage names that explain the outcome. If several closed stages exist, decide why they are separate and which one automatic closure should use. Review the selected destination explicitly rather than accepting whichever stage appears by default.

## Where is automatic closure useful?

Automatic closure can suit tickets where the team has supplied a resolution and is waiting for customer feedback. The documented configuration can restrict the inactivity rule to selected stages. That restriction is important because inactivity in a new or actively investigated ticket may reflect a staffing problem.

The inactivity period does not take the working calendar into account. Review weekends and other nonworking periods when explaining the policy. An SLA described in working hours should not be assumed to have the same timing as the closure rule.

Give the customer a clear message about the proposed resolution and how to continue the conversation if the issue remains. Decide how the team will handle a later reply, including assignment and reporting. Check the actual behaviour in the configured system instead of promising automatic reopening without evidence.

## Worked example: a customer has not confirmed a fix

Imagine an illustrative support team that resolves a label formatting problem and asks the customer to confirm the printed result. The ticket moves into a feedback stage with a summary of the change and the check requested from the customer.

The team's agreed policy allows automatic closure after a defined period in that stage. The rule excludes the New and In Progress stages. An unrelated ticket awaiting an internal developer therefore remains open even if it has received no recent message.

When the first customer replies later with another example of the issue, the support owner follows the team's continuation process and reviews whether the earlier resolution was incomplete or the new example is a separate problem. The record preserves both the original work and the customer's latest evidence.

## When it fits and when it doesn't

Automatic closing fits predictable feedback workflows with clear customer communication. It can reduce manual housekeeping without concealing active obligations when stage restrictions are carefully chosen.

It does not fit cases requiring explicit acceptance, unresolved investigations or obligations that remain open regardless of customer silence. Those should follow their agreed closure conditions. A quiet inbox is a weak reason to conclude work that the team itself knows is unfinished.

## Common mistakes

**Closing all inactive tickets.** Restrict the rule to stages where inactivity has the intended meaning.

**Confusing visual folding with closure.** Check the permanent stage configuration.

**Using the wrong destination stage.** Review the outcome recorded by automatic closing.

**Promising a reopening behaviour without checking it.** Define the response to later customer messages and confirm the configured workflow.

## What should the team review after enabling the rule?

Sample automatically closed tickets and compare their final notes with the resolution definition. Look for unanswered customer questions, missing fixes and tickets moved into feedback merely to reduce the active queue.

Also track cases that return soon after closure and read the reasons before blaming the policy. Some are genuinely new requests; others reveal premature resolution. That distinction helps the team improve its closing messages and investigation quality while keeping the workload report honest.

## Related

Read [Odoo Helpdesk SLA Clocks: Review Waiting Time and Calendars](/blog/2026/11/18/odoo-helpdesk-sla-waiting-time/) for the connected workflow.

## Official references

1. [Close tickets](https://www.odoo.com/documentation/19.0/applications/services/helpdesk/advanced/close_tickets.html)
1. [Service level agreements (SLA)](https://www.odoo.com/documentation/19.0/applications/services/helpdesk/overview/sla.html)

*How this article was checked: official Odoo 19 documentation was reviewed in October 2026. Odoo 20 references were also checked; material differences or moved pages are identified above. Examples are illustrative business scenarios, not client results or tests on a live database.*

If you need help translating these decisions into your own workflow, see my [Odoo consulting services](/services/odoo-consulting/).
