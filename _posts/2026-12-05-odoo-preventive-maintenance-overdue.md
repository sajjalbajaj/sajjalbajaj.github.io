---
layout: post
title: "Odoo Preventive Maintenance: Control Overdue Equipment Work"
date: 2026-12-05 10:00:00 +0530
tags: [Odoo, Odoo 19, ERP, Best Practices, Manufacturing, Maintenance, Operations, Business Automation]
hub: manufacturing
description: "Review Odoo preventive maintenance dates, requests, equipment availability and overdue actions so planned work is not mistaken for completed maintenance."
faqs:
  - q: "Is a preventive maintenance date proof of service?"
    a: "No. Keep the performed work, responsible person, findings and completion date."
  - q: "What should happen when maintenance is overdue?"
    a: "Assess risk, escalate according to policy and record the approved operating or shutdown decision."
---

**Short answer:** A scheduled date is a promise to inspect or service equipment. Completion needs a performed action, responsible person and outcome.

## Applies to

Odoo 19 Maintenance with Manufacturing where equipment supports work centres. Safety obligations remain the organisation's responsibility.

## The decision to make

Which maintenance task is due, can the equipment operate safely and what evidence proves the work was completed?

## What Odoo can show

* Equipment records hold maintenance team and scheduling context.
* Preventive dates can generate maintenance demand.
* Requests and stages show assigned work and completion state.

## A practical control design

1. **Define intervals from risk and manufacturer guidance.**
2. **Assign an owner and required work description.**
3. **Escalate overdue safety critical tasks.**
4. **Record findings, parts and the next due basis.**

## Worked example

A production machine reaches its service interval during a busy week. The maintenance owner assesses operating risk, schedules approved downtime, records the completed checks and updates the next date from actual completion.

## When this approach fits

This fits operations with equipment whose reliability or safety depends on planned servicing.

## Limits and boundaries

It does not certify that equipment is safe or define legally required intervals. Engineering and safety owners must set those requirements.

## Common mistakes

**Treating a generated request as completed work.** Investigate the source and downstream effect before closing the exception.

**Moving the date repeatedly without approval.** Investigate the source and downstream effect before closing the exception.

**Using one interval for different risk levels.** Investigate the source and downstream effect before closing the exception.

**Closing without recording findings.** Investigate the source and downstream effect before closing the exception.

## What the owner should review

Overdue requests, repeated rescheduling, safety critical equipment, unplanned failures and tasks completed without notes or parts.

The goal is not to remove every exception. It is to make important exceptions visible, owned and traceable to a decision.

## Related

Use the [ERP acceptance evidence worksheet](/resources/erp-acceptance-evidence/) to record the outcome and supporting records.

Read [How to Set Up Maintenance in Odoo](/blog/2026/10/05/how-to-set-up-maintenance-odoo/) for the connected workflow.

## Official references

1. [Maintenance](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/maintenance.html)

*Sources: official Odoo 19 documentation is listed above. Confirm the corresponding documentation for the installed version before implementation. Examples are illustrative business scenarios, not client results or tests on a live database.*

If you need help translating these decisions into your own workflow, see my [Odoo consulting services](/services/odoo-consulting/).
