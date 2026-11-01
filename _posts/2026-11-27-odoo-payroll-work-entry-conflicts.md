---
layout: post
title: "Odoo Payroll Work Entries: Resolve the Source Conflict"
date: 2026-11-27 08:00:00 +0530
tags: [Odoo, Odoo 19, ERP, Best Practices, Accounting, Finance, Business Automation, Compliance]
hub: accounting
description: "Resolve Odoo payroll work entry conflicts by correcting attendance, time off, planning or contract sources before generating payslips."
faqs:
  - q: "Where should a work entry conflict be fixed?"
    a: "In the source application when attendance, time off or planning created the conflict."
  - q: "Can payslips be generated with unresolved current conflicts?"
    a: "The documented workflow requires conflicts in the processed period to be resolved first."
---

**Short answer:** A payroll conflict is often a symptom of another record. Correct the source and regenerate the work entry instead of masking the problem in payroll.

## Applies to

Odoo 19 Payroll work entries with Employees, Attendances, Time Off or Planning as applicable.

## Start with the decision

Which source created the overlapping, missing or unapproved period, and what approved work status should payroll use?

The configuration should follow that decision. It should not become the place where an unresolved policy choice is hidden. Write down the expected outcome, the owner and the evidence that will show the step is complete. This gives administrators a testable rule and gives reviewers a reason for each exception.

## What Odoo records and what the business must decide

* Work entries can be generated from several applications.
* Conflicts must be resolved for the pay period before payslip generation.
* Source application corrections are preferred when they caused the conflict.

These records make the workflow visible, but they do not judge the commercial, legal or operational meaning on their own. The process owner must decide which source is authoritative, who may correct it and what happens when two records disagree.

## A practical control design

1. **Assign each conflict to an HR or manager owner.**
2. **Correct attendance or leave at the source.**
3. **Regenerate and compare the affected entries.**
4. **Record manual payroll adjustments with a reason.**

Keep the exception route as clear as the normal route. Staff should know where to place an item that cannot yet be completed, who reviews it and which deadline or business event should bring it back for attention. A dashboard with only completed records can look healthy while unresolved work remains outside the system.

## How to introduce the control

Start with a small set of representative records: one normal transaction, one incomplete record, one correction and one case near a reporting or operational cutoff. Walk each example through the proposed workflow with the people who create, review and use the result. This exposes differences in language and responsibility before they become configuration problems.

Configure the minimum fields and stages needed to express the agreed decision. Add automation only after the team can explain the manual path. An automated action should have a narrow trigger, a visible result and an exception route. If users cannot tell why a record moved or changed, the automation will make investigation slower even when it saves keystrokes.

Before release, compare permissions with actual responsibilities. The person who enters a record may not be the person authorised to approve a correction or financial outcome. Test the workflow with ordinary users as well as administrators, and include a record that should be refused or returned for more information.

## Evidence to keep with the decision

Keep the source reference, responsible person, relevant date, reason for any correction and the final linked record. Where a decision depends on an external document, bank movement, customer message or manager confirmation, retain the reference according to the organisation's document and privacy policy. Avoid copying sensitive material into several places merely to make it visible.

A useful audit trail lets a reviewer reconstruct the sequence without relying on a private inbox or someone's memory. It should show what was known at the time, what exception was found, who resolved it and which downstream record was affected. That is more valuable than a long activity history with no clear outcome.

## Worked example

Approved leave overlaps an attendance correction for the same afternoon. HR confirms the employee was on leave, removes the incorrect attendance, and regenerates the work entries before payroll continues.

The example is illustrative. The useful point is the sequence: confirm the business event, compare it with the Odoo record, resolve the difference with an accountable owner and retain enough context for the next person to understand the result.

## When it fits

This fits payroll processes where worked time and absence data flow from connected Odoo applications.

## Limits and boundaries

It does not determine how a disputed shift should be paid. HR policy and employment rules define that outcome.

Where local law, tax, employment, privacy or regulated practice matters, have the appropriate specialist define the requirement. Then test whether the configured workflow produces the required record. A software screen is not evidence that the policy itself is correct.

## Common mistakes

**Deleting the conflict without correcting the source.** Review the underlying record and the next operational consequence before closing the exception.

**Generating payslips with unresolved entries.** Review the underlying record and the next operational consequence before closing the exception.

**Creating a manual entry that duplicates attendance.** Review the underlying record and the next operational consequence before closing the exception.

**Ignoring conflicts outside the current view filter.** Review the underlying record and the next operational consequence before closing the exception.

## What the owner should review

Conflicts by source, manual entries, late leave approvals and repeated corrections for the same employee.

Review a small sample as well as totals. Sampling shows whether the reason, source document and next action are understandable, while totals reveal ageing and recurring patterns. Repeated manual corrections usually indicate a rule, data source or ownership problem worth fixing upstream.

The goal is not to remove every exception. It is to make each important exception visible, owned and traceable to a decision.

## Related

Read [How to Set Up Attendances in Odoo](/blog/2026/10/01/how-to-set-up-attendances-odoo/) for the connected workflow.

## Official references

1. [Work entries](https://www.odoo.com/documentation/19.0/applications/hr/payroll/work_entries.html)
1. [Payroll](https://www.odoo.com/documentation/19.0/applications/hr/payroll.html)

*How this article was checked: official Odoo 19 documentation was reviewed in November 2026. Confirm the corresponding documentation for the installed version before implementation. Examples are illustrative business scenarios, not client results or tests on a live database.*

If you need help translating these decisions into your own workflow, see my [Odoo consulting services](/services/odoo-consulting/).
