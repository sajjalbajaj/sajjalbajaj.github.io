---
layout: post
title: "Odoo 20 Timesheet Assistant: ActivityWatch, Privacy and Review"
date: 2026-11-19 07:00:00 +0530
tags: [Odoo, Odoo 20, ERP, Best Practices, Timesheets, Project Management, Privacy, Business Automation]
hub: services
description: "Assess Odoo 20 Timesheet Assistant with local ActivityWatch data, matching rules, privacy boundaries and reviewed time entry creation."
last_modified_at: 2026-11-27
faqs:
  - q: "Does ActivityWatch activity automatically become billable time?"
    a: "No. The assistant proposes activity based suggestions; users review and create timesheets. Billing eligibility still depends on the work and agreement."
  - q: "Is raw ActivityWatch data sent to Odoo?"
    a: "The documentation states that raw activity is processed locally and not shared, with suggestions private until a timesheet is created. Review the actual deployment and generated entries as well."
  - q: "What is required for Timesheet Assistant?"
    a: "The documented setup uses the ActivityWatch desktop application and an enabled Timesheet Assistant. Browser extensions are optional for additional browser context."
---

**Short answer:** Odoo 20 Timesheet Assistant uses ActivityWatch activity to suggest time entries for review. It can reduce forgotten work, but screen activity is not proof of a billable task. Configure matching rules, explain the privacy boundaries and require the user to confirm the project, task and duration before creating timesheets.

## What does the documented setup require?

The [Timesheet Assistant guide](https://www.odoo.com/documentation/20.0/applications/services/timesheets/timesheet_assistant.html) uses the ActivityWatch desktop application. Browser extensions are optional for additional browser context. Enable the assistant in Timesheets settings and check the intended time encoding.

Follow the platform specific connection instructions. Where a permitted origin must be configured, use the exact Odoo address rather than broadly allowing every website to connect to the local activity service.

## What does local processing mean for privacy?

The documentation states that raw activity is processed locally and is not shared, and that suggestions remain private until timesheets are created. That is a useful boundary to explain accurately.

It does not remove the need to inspect the final entry. A task description or project choice can still reveal information when submitted. Explain which devices are covered, who can see created timesheets and how a user can exclude unrelated activity.

Avoid presenting the assistant as a covert productivity measurement system. A person can perform useful work away from the tracked applications, and an open window does not establish what work occurred.

## How do matching rules affect suggestions?

Assistant rules match activity context to projects and tasks, using patterns such as regular expressions. The guide also describes activity thresholds and inactive periods. Incorrect patterns can consistently assign genuine work to the wrong customer.

Test rules with representative application titles and browser context. A broad match on a common customer name can catch unrelated activity. Prefer a narrow identifier and review overlap between rules.

## What would a practical review look like?

Consider an illustrative consultant who works on two customer tasks and attends a meeting. Before creating entries, the consultant checks the suggested project and task, removes unrelated activity and adjusts the description.

Meetings and other side activities need deliberate handling. Always Active settings can help represent particular activities, but should not become a reason to treat an entire open application session as chargeable.

| Proposed case | Review focus |
| --- | --- |
| Two tasks with similar titles | Correct customer and task assignment |
| Inactive period | Appropriate exclusion from the suggestion |
| Meeting away from the keyboard | Deliberate treatment of side activity |
| Personal browser activity | Exclusion before timesheet creation |
| Rounded entry | Agreement between displayed and created duration |

## What should the implementation owner approve?

Confirm that users understand the suggestions and can correct them. Inspect created entries, access rights and downstream approvals rather than accepting a successful local connection as the whole test.

The [timesheet setup guide](/blog/2026/09/27/how-to-set-up-timesheets-odoo/) explains the underlying recording workflow. Capture the proposed privacy and matching checks in the [ERP acceptance evidence worksheet](/resources/erp-acceptance-evidence/).

*Sources reviewed on 27 November 2026. Scenarios are proposed acceptance cases, not reported customer results. Confirm edition, installed modules and provider requirements for your database.*
