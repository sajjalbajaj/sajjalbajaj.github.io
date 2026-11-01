---
layout: post
title: "Odoo Planning: Resolve Shift Conflicts Before Publishing"
date: 2026-12-07 09:00:00 +0530
tags: [Odoo, Odoo 19, ERP, Best Practices, Project Management, Operations, Human Resources, Business Automation]
hub: services
description: "Review Odoo Planning shifts for overlapping assignments, unavailable staff, roles, locations and working time before publishing the schedule."
faqs:
  - q: "Does publishing a shift confirm attendance?"
    a: "No. It communicates the plan. Attendance or delivered work must be recorded through the relevant process."
  - q: "What conflicts should be checked?"
    a: "Review overlapping assignments, time off, working schedules, required roles, location and practical travel time."
---

**Short answer:** A filled planning slot is not proof that the assigned person is available or qualified. Check conflicts and communicate changes before work begins.

## Applies to

Odoo 19 Planning with employee or project records as applicable. Labour law and contractual working limits require specialist review.

## The decision to make

Who is needed, which role and location apply, and does the proposed time conflict with availability or another commitment?

Start with the business event rather than the field that looks incomplete. Agree what should happen, who owns the decision and which evidence proves completion. Configuration can then express a rule the operating team understands instead of hiding an unresolved policy choice.

## What Odoo can show

* Shifts record resource, role, project and time context.
* Working schedules and time off affect practical availability.
* Publishing communicates a plan but does not confirm acceptance or attendance.

These records create useful traceability, but they do not interpret the commercial, accounting, legal or operational meaning by themselves. The process owner must decide which source is authoritative, who may correct a discrepancy and when the downstream action can proceed.

## A practical control design

1. **Define roles and locations consistently.**
2. **Review overlaps and time off before publication.**
3. **Control changes after staff receive the schedule.**
4. **Compare planned time with attendance or delivery outcomes.**

Keep the exception route as visible as the normal route. Staff need to know where an incomplete item waits, who reviews it and which date or event brings it back for attention. Otherwise a clean dashboard can hide unresolved work in email, spreadsheets or private notes.

## Implementation and testing

Begin with a small set of representative records: one normal case, one missing input, one correction and one case near a reporting or operational cutoff. Walk them through with the people who create, approve and use the result. This usually exposes differences in language, evidence and ownership before they become configuration problems.

Configure the minimum stages, fields and permissions required for the agreed decision. Add automation only after the manual path is understood. Every automated action should have a narrow trigger, a visible outcome and a route for records it cannot complete safely.

Test with ordinary user access as well as administrator access. Include a scenario that must be rejected or returned for more information, and confirm that the next team cannot proceed until the required decision is visible.

## Evidence and review trail

Retain the source reference, responsible person, relevant date, reason for a correction and the final linked record. When evidence comes from a bank, supplier, customer, employee or external document, keep the appropriate reference according to the organisation's security, privacy and retention policy.

A useful trail lets another reviewer reconstruct what was known, what differed, who decided and which later record changed. That is more valuable than a long activity history with no clear outcome. Avoid copying sensitive documents into several places only to make them visible.

## Build the review into normal work

Choose a review frequency that matches the speed and consequence of the process. High value payments, safety related records and customer commitments may need review before the next action. Lower risk master data may suit a weekly exception list. Name the owner, expected response time and escalation route so an alert does not become another unattended queue.

Use trends to improve the process as well as resolve individual records. When the same exception returns, check whether the cause is unclear policy, incomplete source data, unsuitable permissions, training or an integration boundary. Fixing the upstream cause is usually more valuable than adding another reminder after the error has already occurred.

## Worked example

A technician is assigned to two customer sites at the same time. The planner catches the overlap, checks skills and travel time, reassigns one visit and republishes the affected shifts with a clear note.

The example is illustrative. The transferable method is to confirm the event, compare it with the Odoo record, resolve the difference with an accountable owner and preserve enough context for the next person to understand the result.

## When this approach fits

This fits service, retail and operational teams allocating people or resources to timed work.

## Limits and boundaries

It does not determine lawful hours, rest or overtime. HR and legal policy must set those boundaries.

Where accounting, tax, employment, privacy, safety or another regulated practice applies, have the appropriate specialist define the requirement first. Then test whether the configured process produces the required record. A completed software screen is not proof that the underlying policy is correct.

## Common mistakes

**Publishing before checking time off.** Investigate the source and downstream effect before closing the exception.

**Using role names inconsistently.** Investigate the source and downstream effect before closing the exception.

**Changing shifts without notifying staff.** Investigate the source and downstream effect before closing the exception.

**Treating the plan as actual time worked.** Investigate the source and downstream effect before closing the exception.

## What the owner should review

Overlapping shifts, unpublished changes, unfilled roles, work outside schedules and large differences between planned and actual time.

Review a sample as well as totals. Sampling shows whether the evidence and reason are understandable, while totals reveal ageing and repeated patterns. Frequent manual correction usually points to an upstream rule, data source, training or ownership problem worth fixing.

The goal is not to remove every exception. It is to make important exceptions visible, owned and traceable to a decision.

## Related

Read [How to Set Up Planning in Odoo](/blog/2026/10/01/how-to-set-up-planning-odoo/) for the connected workflow.

## Official references

1. [Planning](https://www.odoo.com/documentation/19.0/applications/services/planning.html)

*Sources: official Odoo 19 documentation is listed above. Confirm the corresponding documentation for the installed version before implementation. Examples are illustrative business scenarios, not client results or tests on a live database.*

If you need help translating these decisions into your own workflow, see my [Odoo consulting services](/services/odoo-consulting/).
