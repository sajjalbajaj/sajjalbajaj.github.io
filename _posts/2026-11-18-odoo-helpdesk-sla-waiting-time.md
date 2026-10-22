---
layout: post
title: "Odoo Helpdesk SLA Clocks: Review Waiting Time and Calendars"
date: 2026-11-18 08:00:00 +0530
tags: [Odoo, Odoo 19, ERP, Best Practices, Customer Management, Business Automation, Setup, ERP Implementation]
hub: services
description: "Review Odoo Helpdesk SLA waiting stages, working calendars and target stages so deadlines reflect the support agreement and remain explainable."
faqs:
  - q: "Does time in an excluded stage count towards an SLA deadline?"
    a: "The documented SLA configuration excludes time in the stages selected under Excluding Stages. Agree when staff may use those stages and what work remains owned."
  - q: "Does the ticket always display every SLA deadline?"
    a: "When several policies apply, Odoo documents displaying the earliest deadline, followed by the next after that deadline passes. Review the policies rather than relying on one displayed date."
---

**Short answer:** An Odoo Helpdesk SLA deadline depends on the matching policy, working hours and stages excluded from the calculation. Define what waiting means before pausing a clock. I keep a named owner and a next action even when the contractual time is not running.

## Applies to

Odoo 19 Enterprise Helpdesk. The corresponding Odoo 20 SLA documentation describes the same working hours, target stage and excluded stage concepts. The waiting rules below are proposed business controls; the application cannot decide whether a customer delay is justified without an agreed process.

## Which clock are you trying to measure?

First response, investigation start and resolution are different commitments. A ticket reaching an internal stage might satisfy one policy while the customer's problem remains unresolved. Give each target a name that describes the event it measures.

Odoo SLA policies specify a stage to reach within an allowed time. The business must decide whether movement into that stage genuinely demonstrates the promised event. A stage called In Progress does not prove a meaningful customer response was sent unless the team defines and follows that rule.

Keep the contract and the workflow aligned. If the agreement measures working hours, the calendar matters. If the customer expects continuous coverage, a normal office calendar would produce a different deadline. Do not solve that mismatch by manually changing dates whenever someone complains.

## When is excluding a waiting stage appropriate?

A waiting stage may be justified when support needs information from the customer or an agreed external action. The Odoo configuration excludes time spent in selected stages from the SLA calculation. That is a calculation rule, not evidence that every use of the stage is appropriate.

Define the entry condition. For example, the team might require a clear question sent to the customer, an explanation of why the answer is needed and a date for reviewing the ticket again. Record those facts before moving the ticket into the waiting stage.

Waiting for an internal specialist is different from waiting for the customer. Whether either period is excluded depends on the service agreement. Avoid grouping them together simply because the same support agent cannot progress both cases immediately. The customer should not lose visibility of a problem because internal ownership is unclear.

## What does the working calendar change?

Odoo calculates SLA deadlines using the relevant working hours. Review the calendar associated with the policy and the team's coverage, including the practical treatment of days when the support team is not operating.

A deadline that appears surprising may be explained by nonworking time, the ticket creation date or a matching policy that was not intended. Investigate those inputs before assuming the application arithmetic is wrong. Keep a representative example in the team's operating notes so staff can explain the result.

Also distinguish SLA time from automatic closure time. Odoo's automatic closing documentation uses an inactivity period that does not follow the working calendar. The two mechanisms should not be described to customers as though they use the same clock.

## Worked example: awaiting a reproducible example

Consider an illustrative support ticket about an intermittent import error. The support owner asks the customer for a sample file with sensitive information removed and explains what is needed to reproduce the issue. The agreement allows the resolution clock to exclude time awaiting that information.

The owner records the request, moves the ticket into the agreed waiting stage and schedules a follow up. The ticket remains owned. When the file arrives, the team resumes investigation and updates the stage so the SLA calculation reflects the new state.

If the team had merely been waiting for its own consultant to become available, the same exclusion would not automatically be justified. The support lead would apply the agreement's internal escalation rules instead of presenting the delay as a customer dependency.

## When it fits and when it doesn't

This approach fits support teams with explicit response or resolution commitments and legitimate waiting periods. It is useful when customers ask why the visible deadline changed.

It does not justify designing stages solely to improve reported performance. If a customer agreement lacks clear exclusions, clarify the service definition before relying on a paused clock. A technically correct calculation can still represent the wrong commercial promise.

## Common mistakes

**Using waiting as an unowned queue.** Keep a responsible person and a dated next action.

**Excluding every internal delay.** Apply the actual agreement to each kind of wait.

**Treating a green SLA indicator as complete resolution.** Check the target event the policy measures.

**Confusing inactivity days with working hours.** Review automatic closing separately from SLA calculations.

## How should the support lead review exclusions?

Look at tickets that remain in excluded stages for long periods and ask what specific event will release them. If nobody can answer, the issue is ownership or definition rather than the clock itself.

Review failed policies honestly as well. Odoo documents that a failed SLA indicator remains red even after the target stage is reached. Use that history to understand the delay and improve the process. Removing the explanation would make the report less useful for both service management and customer communication.

## Related

Read [Odoo Helpdesk Priority: Triage Impact Before Starting the Clock](/blog/2026/11/17/odoo-helpdesk-priority-triage/) for the connected workflow.

## Official references

1. [Service level agreements (SLA)](https://www.odoo.com/documentation/19.0/applications/services/helpdesk/overview/sla.html)

*How this article was checked: official Odoo 19 documentation was reviewed in October 2026. Odoo 20 references were also checked; material differences or moved pages are identified above. Examples are illustrative business scenarios, not client results or tests on a live database.*

If you need help translating these decisions into your own workflow, see my [Odoo consulting services](/services/odoo-consulting/).
