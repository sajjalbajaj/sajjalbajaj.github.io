---
layout: post
title: "Odoo Timesheet Billing: Review Caps, Nonbillable Work and Corrections"
date: 2026-11-10 09:00:00 +0530
tags: [Odoo, Odoo 19, ERP, Best Practices, Timesheets, Project, Sales, Invoicing]
hub: services
description: "Review Odoo timesheet billing against agreed scope, commercial caps and task links so recorded effort and customer invoices remain explainable."
faqs:
  - q: "Does recording an hour always make it billable?"
    a: "No. The agreement, service configuration and task relationship determine the billing basis. Internal or corrective work may need a different treatment."
  - q: "Does a project budget automatically stop extra billing?"
    a: "Do not assume that. A commercial cap needs an explicit review or verified enforcement mechanism in the actual configuration."
---

**Short answer:** treat timesheets as evidence of effort, then review the commercial basis before turning that effort into an invoice. Correct task links, billable treatment and agreed limits matter as much as the total hours. A useful process preserves actual work while explaining why the customer is charged for a particular portion.

## Applies to

Odoo 19 Sales and Project with Timesheets enabled and appropriate service invoicing configuration. Cap and approval controls described below are business design requirements. The corresponding Odoo 20 references were reviewed in October 2026; use the documentation for your installed release when configuring screens and fields.

## Which agreement governs the time?

Identify whether the service is billed by actual time, prepaid effort, a fixed fee or another arrangement. Similar project activities can have different commercial treatment. The service product and sales order should represent the accepted agreement rather than a default chosen during setup.

Odoo's documented time based invoicing connects service configuration, project tasks and recorded time with delivered quantities on the sales order. Review that relationship for the actual project. Time entered against the wrong task can create a convincing total on the wrong commercial line.

I would define what staff should record even when it is not billable. Internal coordination, training or corrective work may still matter for understanding delivery effort. Deleting real time to make an invoice look acceptable damages the evidence used to plan future work.

## How should a billing cap be interpreted?

Write the cap in plain language: the amount or hours covered, the period, included activities and the approval required to exceed it. An estimate, budget and contractual maximum are different concepts. Users should not need to guess which one a dashboard number represents.

Confirm whether the cap limits work, invoicing or both. The team may need to continue essential support while finance holds additional billing pending approval. Alternatively, the agreement may require stopping work at a threshold. Those responses need different operating instructions.

Do not assume a project budget automatically enforces the commercial rule. Identify the review, notification or custom control required and demonstrate it. A warning that nobody monitors is not equivalent to preventing an unauthorised invoice.

## What should the review inspect?

Check the project and task relationship, work description, period and billing basis. Look for duplicate entries, incorrect durations and work attached to the wrong customer line. Review unusual items with the person who recorded them while the context is still available.

Separate factual corrections from commercial decisions. A mistaken duration should be corrected with an explanation. A decision not to charge for genuine work should preserve the actual effort through the appropriate nonbillable treatment instead of rewriting history.

Consider expenses and purchased services separately where the workflow also invoices them. A time cap may not include every material or expense item. The agreement and customer approval should establish the boundary rather than allowing all linked costs to flow into an invoice unquestioned.

## Worked example: support work approaches an agreed limit

Imagine a service team providing support under an agreed effort limit. Several tasks are linked to the customer order, but one internal improvement task should not contribute to customer billing. The reviewer identifies the incorrect relationship before preparing the invoice.

The team corrects the task allocation while preserving the actual work record. It then compares eligible effort with the agreed limit and obtains a decision on additional requested work. The customer communication explains what is included and what requires a separate approval.

Finance prepares the invoice from the reviewed basis and checks the result against the accepted evidence. The team can explain the difference between total effort and billed effort without relying on an unexplained manual discount or deleted timesheet entries.

## How should late corrections be handled?

Identify whether the affected time has already contributed to a draft or posted invoice. The appropriate response depends on that state. Do not assume editing the timesheet alone will correct every downstream commercial or accounting record.

Have finance review any posted document adjustment. Keep the original work reference and the correction reason connected. The purpose is a consistent account of effort and billing, not simply agreement between today's visible totals.

Review the cause of repeated late changes. They may indicate unclear task allocation, delayed time entry or a review process that occurs too close to billing. Improve the upstream habit instead of making invoice preparation depend on extensive last minute reconstruction.

## When does this process fit?

It fits time based services with several contributors, tasks or commercial boundaries. It is especially useful where customers expect an explanation of work and the organisation needs reliable effort data for planning.

It needs adaptation for fixed fee work. Timesheets can still support internal cost and capacity review without becoming the direct invoicing basis. Keep the chosen service model clear so that staff do not assume every recorded hour changes the customer's bill.

A small engagement may need a simple review by its owner rather than several approval layers. The important point is that someone with the right authority checks the relationship between actual work and the agreement before billing.

## Common mistakes

Common mistakes include linking all tasks to one convenient sales line, deleting nonbillable effort and treating a budget as an automatic cap. Another is correcting time after invoicing without reviewing the financial consequence.

Reconcile recorded effort, eligible effort and the invoiced quantity. The figures need not be identical, but their differences should be explainable. That discipline supports fair customer billing and useful internal planning from the same underlying work evidence.

## Related

Read [Odoo Milestone Invoicing: Connect Billing to Accepted Work](/blog/2026/11/10/odoo-milestone-invoice-acceptance/) for the connected workflow.

## Official references

1. [Invoicing based on time and materials](https://www.odoo.com/documentation/19.0/applications/sales/sales/invoicing/time_materials.html)
1. [Project dashboard](https://www.odoo.com/documentation/19.0/applications/services/project/project_management/project_dashboard.html)

*How this article was checked: official Odoo 19 documentation and the corresponding Odoo 20 pages were reviewed in October 2026. The examples are illustrative, not client results or tests on a live database.*

For help designing this workflow, see my [Odoo consulting services](/services/odoo-consulting/).
