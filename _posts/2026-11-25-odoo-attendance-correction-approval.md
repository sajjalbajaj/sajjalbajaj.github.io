---
layout: post
title: "Odoo Attendance Corrections: Review the Evidence Before Payroll"
date: 2026-11-25 09:00:00 +0530
tags: [Odoo, Odoo 19, ERP, Best Practices, ERP Implementation, Business Automation, Setup, Compliance]
hub: services
description: "Control Odoo attendance corrections with employee explanations, manager review and payroll cutoffs so missing checkouts do not become silent edits."
faqs:
  - q: "Where should an attendance error be corrected?"
    a: "Correct the source attendance entry where possible, then review the resulting work entry."
  - q: "Does location data prove the full shift?"
    a: "No. It is one signal and must be interpreted within the organisation's policy and evidence."
---

**Short answer:** Correct the source attendance record with a reason and accountable review before payroll consumes the hours.

## Applies to

Odoo 19 Attendances and Payroll work entries. Local timekeeping and employment requirements still apply.

## Start with the decision

What actually happened during the shift, who can support the correction and has payroll already used the record?

The configuration should follow that decision. It should not become the place where an unresolved policy choice is hidden. Write down the expected outcome, the owner and the evidence that will show the step is complete. This gives administrators a testable rule and gives reviewers a reason for each exception.

## What Odoo records and what the business must decide

* Attendance errors include missing checkouts and unusually long entries.
* Completed logs contribute to displayed worked time.
* Payroll work entries can inherit problems from attendance records.

These records make the workflow visible, but they do not judge the commercial, legal or operational meaning on their own. The process owner must decide which source is authoritative, who may correct it and what happens when two records disagree.

## A practical control design

1. **Give employees a clear route to report mistakes.**
2. **Require manager evidence for material changes.**
3. **Correct the attendance source before the payroll entry.**
4. **Lock or report changes after the pay period cutoff.**

Keep the exception route as clear as the normal route. Staff should know where to place an item that cannot yet be completed, who reviews it and which deadline or business event should bring it back for attention. A dashboard with only completed records can look healthy while unresolved work remains outside the system.

## How to introduce the control

Start with a small set of representative records: one normal transaction, one incomplete record, one correction and one case near a reporting or operational cutoff. Walk each example through the proposed workflow with the people who create, review and use the result. This exposes differences in language and responsibility before they become configuration problems.

Configure the minimum fields and stages needed to express the agreed decision. Add automation only after the team can explain the manual path. An automated action should have a narrow trigger, a visible result and an exception route. If users cannot tell why a record moved or changed, the automation will make investigation slower even when it saves keystrokes.

Before release, compare permissions with actual responsibilities. The person who enters a record may not be the person authorised to approve a correction or financial outcome. Test the workflow with ordinary users as well as administrators, and include a record that should be refused or returned for more information.

## Evidence to keep with the decision

Keep the source reference, responsible person, relevant date, reason for any correction and the final linked record. Where a decision depends on an external document, bank movement, customer message or manager confirmation, retain the reference according to the organisation's document and privacy policy. Avoid copying sensitive material into several places merely to make it visible.

A useful audit trail lets a reviewer reconstruct the sequence without relying on a private inbox or someone's memory. It should show what was known at the time, what exception was found, who resolved it and which downstream record was affected. That is more valuable than a long activity history with no clear outcome.

## Worked example

An employee forgets to check out after a normal shift. The manager confirms the roster and site record, HR corrects the checkout with the reason, and payroll regenerates the affected work entry before payslips are finalised.

The example is illustrative. The useful point is the sequence: confirm the business event, compare it with the Odoo record, resolve the difference with an accountable owner and retain enough context for the next person to understand the result.

## When it fits

This fits organisations using Odoo as the attendance source for payroll or workforce reporting.

## Limits and boundaries

It does not prove presence from GPS or browser data alone. Use those signals according to policy and privacy requirements.

Where local law, tax, employment, privacy or regulated practice matters, have the appropriate specialist define the requirement. Then test whether the configured workflow produces the required record. A software screen is not evidence that the policy itself is correct.

## Common mistakes

**Editing payroll without fixing attendance.** Review the underlying record and the next operational consequence before closing the exception.

**Accepting every correction without evidence.** Review the underlying record and the next operational consequence before closing the exception.

**Ignoring repeated automatic checkouts.** Review the underlying record and the next operational consequence before closing the exception.

**Changing a closed period without payroll review.** Review the underlying record and the next operational consequence before closing the exception.

## What the owner should review

Error logs, automatic checkouts, repeated corrections, edits after cutoff and conflicts in work entries.

Review a small sample as well as totals. Sampling shows whether the reason, source document and next action are understandable, while totals reveal ageing and recurring patterns. Repeated manual corrections usually indicate a rule, data source or ownership problem worth fixing upstream.

The goal is not to remove every exception. It is to make each important exception visible, owned and traceable to a decision.

## Related

Read [How to Set Up Attendances in Odoo](/blog/2026/10/01/how-to-set-up-attendances-odoo/) for the connected workflow.

## Official references

1. [Attendance logs](https://www.odoo.com/documentation/19.0/applications/hr/attendances/attendance_logs.html)
1. [Work entries](https://www.odoo.com/documentation/19.0/applications/hr/payroll/work_entries.html)

*How this article was checked: official Odoo 19 documentation was reviewed in November 2026. Confirm the corresponding documentation for the installed version before implementation. Examples are illustrative business scenarios, not client results or tests on a live database.*

If you need help translating these decisions into your own workflow, see my [Odoo consulting services](/services/odoo-consulting/).
