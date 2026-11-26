---
layout: post
title: "Odoo Approvals: Keep the Request and Decision Evidence Together"
date: 2026-12-07 08:00:00 +0530
tags: [Odoo, Odoo 19, ERP, Best Practices, Business Automation, Compliance, Operations, Project Management]
hub: services
description: "Design Odoo approval requests with clear categories, required evidence, approvers and final actions so an approved status explains what was authorised."
faqs:
  - q: "Does approved status prove the evidence was sufficient?"
    a: "No. The category must require useful information and approvers must review it against policy."
  - q: "Why link the later action?"
    a: "It shows that the purchase, change or exception stayed within the scope that was actually approved."
---

**Short answer:** Approval is useful only when the request states the decision, supporting information and scope. A green status should not stand in for missing evidence.

## Applies to

Odoo 19 Approvals. Legal authority, financial delegation and regulated approval rules remain organisational decisions.

## The decision to make

What exactly is being authorised, what evidence must be reviewed and which later action depends on the decision?

## What Odoo can show

* Approval types define request fields and approvers.
* Attachments and notes provide the decision context.
* Request status and approver responses show the recorded outcome.

## A practical control design

1. **Name each approval category around one decision.**
2. **Require the minimum evidence before submission.**
3. **Map approvers to real delegated authority.**
4. **Link approval to the purchase, change or action it permits.**

## Worked example

A manager requests exceptional equipment spend. The form requires quotation, cost centre and business reason. Finance and the budget owner approve within their limits, and purchasing links the final order to the request.

## When this approach fits

This fits recurring internal decisions such as exceptions, spend, travel or policy requests.

## Limits and boundaries

It does not create legal authority or validate evidence automatically. Delegation and policy must be defined outside the screen.

## Common mistakes

**Using one generic approval category for every decision.** Investigate the source and downstream effect before closing the exception.

**Approving without required attachments.** Investigate the source and downstream effect before closing the exception.

**Adding senior approvers who lack operational context.** Investigate the source and downstream effect before closing the exception.

**Failing to link the authorised follow up action.** Investigate the source and downstream effect before closing the exception.

## What the owner should review

Approved requests without follow up, missing attachments, changed values after approval, overdue decisions and repeated exceptions.

The goal is not to remove every exception. It is to make important exceptions visible, owned and traceable to a decision.

## Related

Use the [ERP acceptance evidence worksheet](/resources/erp-acceptance-evidence/) to record the outcome and supporting records.

Read [Odoo Change Requests: Control Scope Without Blocking Useful Work](/blog/2026/10/30/odoo-change-request-control/) for the connected workflow.

## Official references

1. [Approvals](https://www.odoo.com/documentation/19.0/applications/productivity/approvals.html)

*Sources: official Odoo 19 documentation is listed above. Confirm the corresponding documentation for the installed version before implementation. Examples are illustrative business scenarios, not client results or tests on a live database.*

If you need help translating these decisions into your own workflow, see my [Odoo consulting services](/services/odoo-consulting/).
