---
layout: post
title: "Odoo Attendance Corrections: Review the Evidence Before Payroll"
date: 2026-11-25 09:00:00 +0530
last_modified_at: 2026-11-27
tags: [Odoo, Odoo 19, ERP, Best Practices, ERP Implementation, Business Automation, Setup, Compliance]
hub: services
description: "Correct Odoo 19 attendance errors with evidence, review payroll work entries, and distinguish missing checkouts from overtime approval."
faqs:
  - q: "Should an attendance error be corrected in Payroll or Attendances?"
    a: "Where Attendances caused the error, correct that source record first, then regenerate and review the affected payroll work entries. Odoo warns that source errors can return when work entries are regenerated."
  - q: "Does an overtime approval prove the full shift was worked?"
    a: "No. Overtime approval and the accuracy of the underlying attendance are different questions. Review the recorded times and supporting evidence before approving the required outcome."
  - q: "What if payroll already used the incorrect attendance?"
    a: "Establish which payslip, journal entry or payment was affected before changing records. The authorised payroll owner should decide the correction route; changing attendance does not by itself prove a completed payroll has been corrected."
---

**Short answer:** Correct an Odoo attendance error after confirming the actual shift, its source and whether payroll has already used it. Where the attendance record caused a payroll conflict, fix that source before regenerating the affected work entries. Keep overtime approval and payroll settlement as separate decisions.

## What is the difference between an attendance correction and overtime approval?

An attendance correction changes an inaccurate check-in or checkout. Overtime approval decides how much extra time the organisation accepts under its policy. Those decisions can involve the same record but answer different questions.

Odoo 19's [management documentation](https://www.odoo.com/documentation/19.0/applications/hr/attendances/management.html) describes the **Attendances ‣ Management** dashboard and partial approval of extra hours. It also explains that check-in and checkout details can be modified on the detailed record. The documented **Mode** field records how the entry was created and is not editable.

I would inspect the detailed record before approving a material exception. Approving an item from a list does not establish that somebody checked the supporting circumstances.

## Which evidence should support a missing checkout?

Compare the employee's explanation with the roster and an appropriate source that supports the actual shift. A location signal at check-in is not evidence of presence throughout the day.

| Item | Review question |
|---|---|
| Original check-in and checkout | Which value is missing or inaccurate? |
| Proposed replacement | What supports the proposed time? |
| Payroll period | Has this period already been processed? |
| Decision record | Who authorised the correction and why? |

These are proposed review fields, not a claim that every installation supplies a mandatory correction form. Keep supporting information within the organisation's privacy and retention arrangements.

## How should the correction reach Payroll?

Odoo's [work entry documentation](https://www.odoo.com/documentation/19.0/applications/hr/payroll/work_entries.html) recommends fixing conflicts in the app that created them. Otherwise regeneration can recreate the problem.

For an attendance-origin error, I would follow this sequence:

1. Identify the employee, shift and affected payroll period.
2. Retain a reference to the original values and the authorised reason.
3. Correct the attendance source under the permitted role.
4. Use **Payroll ‣ Work Entries ‣ Work Entries** to review the affected period.
5. Where regeneration is required, select only the relevant employees and date range.
6. Compare the resulting hours and unresolved conflicts with the approved correction.

Regeneration overwrites the selected work entries. Define the intended range and record the evidence before using it.

## What does a worked example show?

In this illustrative scenario, an employee worked from 09:00 to 17:00 but has no checkout. The manager confirms the end time against an authorised shift record. HR corrects the attendance, then Payroll reviews the resulting work entry for that employee and day.

If a break or different work-entry source applies, eight elapsed hours should not automatically be treated as eight payable hours. Compare the configured rules and the actual payroll record. This example is not a live test or a client result.

## What if a payslip or payment already exists?

First identify what relied on the incorrect time. A corrected attendance is only the upstream part of the investigation. An authorised payroll owner must decide whether later records require a controlled adjustment under the applicable localisation and accounting process.

Do not erase the trail by making unrelated edits until totals agree. The reviewer needs to understand the original discrepancy and the downstream correction.

## Which acceptance tests are useful?

Demonstrate a missing checkout, a partial overtime approval and an error discovered after the payroll cutoff. For each, retain the original reference, authorised correction, resulting work entry and decision about the next payroll step.

Use the [ERP acceptance evidence worksheet](/resources/erp-acceptance-evidence/) to record those links. For initial configuration, see [setting up Attendances](/blog/2026/10/01/how-to-set-up-attendances-odoo/).

## Sources and review

The Odoo 19 [attendance management](https://www.odoo.com/documentation/19.0/applications/hr/attendances/management.html) and [work entries](https://www.odoo.com/documentation/19.0/applications/hr/payroll/work_entries.html) pages were checked on 27 November 2026. The review sequence is my implementation recommendation. Employment and payroll requirements remain the responsibility of the appropriate local specialists.

For help defining correction and acceptance procedures, see my [Odoo consulting services](/services/odoo-consulting/).
