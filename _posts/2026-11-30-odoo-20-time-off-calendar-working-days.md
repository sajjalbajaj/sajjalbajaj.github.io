---
layout: post
title: "Odoo 20 Time Off: Calendar Days, Working Days and Minimum Requests"
date: 2026-11-30 07:00:00 +0530
tags: [Odoo, Odoo 20, ERP, Best Practices, Human Resources, Time Off, Payroll, Compliance]
hub: services
description: "Review Odoo 20 calendar versus working day leave deductions, minimum requests and public holidays against the actual employee schedule and policy."
faqs:
  - q: "Can Odoo 20 calculate leave using calendar days?"
    a: "Yes. The release notes describe a choice between calendar day and working day deductions."
  - q: "Are country suggested holidays automatically correct for every employee?"
    a: "No. Review the observed dates, company, region and working schedule before applying them."
  - q: "Does changing a deduction rule decide the payroll treatment?"
    a: "No. Validate the leave balance and work entry or payroll outcome separately against the applicable policy and requirements."
---

**Short answer:** Odoo 20 adds calendar day or working day leave deductions and a minimum request amount. Configure those choices against the actual leave policy and employee schedule. Test weekends, observed holidays and payroll related outputs before applying a new rule broadly.

## What does the release confirm?

The [Time Off release notes](https://www.odoo.com/odoo-20-release-notes) describe the deduction choice, minimum request amounts and loading public holidays for a year with suggestions based on the company's country.

The detailed [time off type guide](https://www.odoo.com/documentation/20.0/applications/hr/time_off/time_off_types.html) covers approvals, allocations and public holiday handling, but does not fully describe every new control. Confirm the available fields in the actual Odoo 20 database rather than inventing a menu path from an earlier version.

## Why must the policy be written before configuration?

Calendar days and working days can produce different deductions for the same date range. Neither is universally correct for every leave category or employment arrangement.

Write down which days count, the unit requested, how public holidays are handled and any minimum duration. Identify whether different employee schedules need different cases. Obtain the appropriate HR and payroll review before interpreting that policy as a system rule.

## How should a weekend and holiday case be tested?

Use an illustrative employee with an agreed Monday to Friday schedule and a leave request spanning a weekend. Add an observed public holiday in the test period.

HR should calculate the expected deduction under the approved policy before entering the request. Then compare the request duration, remaining allocation and calendar display with that expectation. Do not use the system's first result as the definition of the policy.

| Proposed case | Review focus |
| --- | --- |
| Leave spanning a weekend | Calendar or working day treatment |
| Observed public holiday | Inclusion or exclusion as intended |
| Part time schedule | Correct employee working pattern |
| Request below the minimum | Clear and appropriate validation |
| Cancellation after approval | Restored balance and downstream records |

## What needs reviewing in public holiday setup?

The [public holiday documentation](https://www.odoo.com/documentation/20.0/applications/hr/time_off/public_holidays.html) explains company, date and working hour scope, along with work entry type where payroll is used.

Country suggestions are a starting point. Check regional observance, company policy and the intended year before accepting them. A holiday can affect other applications using working schedules, so review planning and production implications as well as leave.

## What should happen before changing an existing type?

Record the current configuration and identify approved or future requests affected by the change. Test how the database handles them; do not assume a changed rule recalculates every historical request safely.

Compare balances before and after the test, and inspect work entries or payroll inputs where relevant. Keep a decision owner for discrepancies instead of correcting totals without explanation.

For the related accrual decision, see [time off accrual plan changes](/blog/2026/11/25/odoo-time-off-accrual-plan-changes/). Use the [ERP acceptance evidence resource](/resources/erp-acceptance-evidence/) to connect policy, expected deductions and observed results.

*Sources reviewed on 27 November 2026. Scenarios are proposed acceptance cases, not reported customer results. Confirm edition, installed modules and provider requirements for your database.*
