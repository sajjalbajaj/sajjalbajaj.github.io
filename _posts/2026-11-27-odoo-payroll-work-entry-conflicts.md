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

## What Odoo records and what the business must decide

* Work entries can be generated from several applications.
* Conflicts must be resolved for the pay period before payslip generation.
* Source application corrections are preferred when they caused the conflict.

## A practical control design

1. **Assign each conflict to an HR or manager owner.**
2. **Correct attendance or leave at the source.**
3. **Regenerate and compare the affected entries.**
4. **Record manual payroll adjustments with a reason.**

## Worked example

Approved leave overlaps an attendance correction for the same afternoon. HR confirms the employee was on leave, removes the incorrect attendance, and regenerates the work entries before payroll continues.

## When it fits

This fits payroll processes where worked time and absence data flow from connected Odoo applications.

## Limits and boundaries

It does not determine how a disputed shift should be paid. HR policy and employment rules define that outcome.

## Common mistakes

**Deleting the conflict without correcting the source.** Review the underlying record and the next operational consequence before closing the exception.

**Generating payslips with unresolved entries.** Review the underlying record and the next operational consequence before closing the exception.

**Creating a manual entry that duplicates attendance.** Review the underlying record and the next operational consequence before closing the exception.

**Ignoring conflicts outside the current view filter.** Review the underlying record and the next operational consequence before closing the exception.

## What the owner should review

Conflicts by source, manual entries, late leave approvals and repeated corrections for the same employee.

The goal is not to remove every exception. It is to make each important exception visible, owned and traceable to a decision.

## Related

Use the [ERP acceptance evidence worksheet](/resources/erp-acceptance-evidence/) to record the outcome and supporting records.

Read [How to Set Up Attendances in Odoo](/blog/2026/10/01/how-to-set-up-attendances-odoo/) for the connected workflow.

## Official references

1. [Work entries](https://www.odoo.com/documentation/19.0/applications/hr/payroll/work_entries.html)
1. [Payroll](https://www.odoo.com/documentation/19.0/applications/hr/payroll.html)

*How this article was checked: official Odoo 19 documentation was reviewed in November 2026. Confirm the corresponding documentation for the installed version before implementation. Examples are illustrative business scenarios, not client results or tests on a live database.*

If you need help translating these decisions into your own workflow, see my [Odoo consulting services](/services/odoo-consulting/).
