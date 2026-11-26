---
layout: post
title: "Odoo Time Off Accruals: Control Plan Changes"
date: 2026-11-25 08:00:00 +0530
last_modified_at: 2026-11-27
tags: [Odoo, Odoo 19, ERP, Best Practices, ERP Implementation, Business Automation, Setup, Compliance]
hub: services
description: "Change Odoo time off accrual plans with effective dates, carryover rules, caps and employee communication so balances remain explainable."
faqs:
  - q: "Can accrual depend on worked time?"
    a: "Yes. Plans can consider worked time and exclude absences according to configuration."
  - q: "Who should approve an accrual change?"
    a: "The owner of employment policy should approve it before an administrator changes the system."
---

**Short answer:** A changed accrual rule can alter employee balances and payroll inputs. Treat the plan as a governed policy, not a convenient configuration value.

## Applies to

Odoo 19 Time Off accrual plans. Employment law, contracts and company policy determine entitlement.

## Start with the decision

When does the new rule begin, which employees are affected and how will opening balances or carryover be handled?

## What Odoo records and what the business must decide

* Accrual can depend on worked time or calendar periods.
* Milestones control rates, timing, caps and carryover.
* A company field can limit a plan in multi company environments.

## A practical control design

1. **Record the approved policy and effective date.**
2. **Test milestone transitions with representative employees.**
3. **Reconcile balances before assigning the new plan.**
4. **Explain visible changes to managers and employees.**

## Worked example

A company increases annual leave after three years of service. HR tests employees on each side of the milestone, confirms carryover and cap behaviour, and moves the plan only after reconciling current balances.

## When it fits

This fits earned leave policies with clear service milestones and balance rules.

## Limits and boundaries

It does not define legal entitlement. HR and legal advisers must approve the policy before configuration.

## Common mistakes

**Editing a live milestone without an effective date.** Review the underlying record and the next operational consequence before closing the exception.

**Ignoring worked time exclusions.** Review the underlying record and the next operational consequence before closing the exception.

**Applying one plan to the wrong company.** Review the underlying record and the next operational consequence before closing the exception.

**Changing balances without an explanation.** Review the underlying record and the next operational consequence before closing the exception.

## What the owner should review

Employees near milestones, negative or capped balances, carryover dates and manual allocations.

The goal is not to remove every exception. It is to make each important exception visible, owned and traceable to a decision.

## Related

Use the [ERP acceptance evidence worksheet](/resources/erp-acceptance-evidence/) to record the outcome and supporting records.

Read [How to Set Up Time Off in Odoo](/blog/2026/09/28/how-to-set-up-time-off-odoo/) for the connected workflow.

## Official references

1. [Accrual plans](https://www.odoo.com/documentation/19.0/applications/hr/time_off/accrual_plans.html)
1. [Time off types](https://www.odoo.com/documentation/19.0/applications/hr/time_off/time_off_types.html)

*How this article was checked: official Odoo 19 documentation was reviewed in November 2026. Confirm the corresponding documentation for the installed version before implementation. Examples are illustrative business scenarios, not client results or tests on a live database.*

If you need help translating these decisions into your own workflow, see my [Odoo consulting services](/services/odoo-consulting/).
