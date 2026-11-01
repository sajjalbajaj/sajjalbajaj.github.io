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

Start with the business event rather than the field that looks incomplete. Agree what should happen, who owns the decision and which evidence proves completion. Configuration can then express a rule the operating team understands instead of hiding an unresolved policy choice.

## What Odoo can show

* Approval types define request fields and approvers.
* Attachments and notes provide the decision context.
* Request status and approver responses show the recorded outcome.

These records create useful traceability, but they do not interpret the commercial, accounting, legal or operational meaning by themselves. The process owner must decide which source is authoritative, who may correct a discrepancy and when the downstream action can proceed.

## A practical control design

1. **Name each approval category around one decision.**
2. **Require the minimum evidence before submission.**
3. **Map approvers to real delegated authority.**
4. **Link approval to the purchase, change or action it permits.**

Keep the exception route as visible as the normal route. Staff need to know where an incomplete item waits, who reviews it and which date or event brings it back for attention. Otherwise a clean dashboard can hide unresolved work in email, spreadsheets or private notes.

## Implementation and testing

Begin with a small set of representative records: one normal case, one missing input, one correction and one case near a reporting or operational cutoff. Walk them through with the people who create, approve and use the result. This usually exposes differences in language, evidence and ownership before they become configuration problems.

Configure the minimum stages, fields and permissions required for the agreed decision. Add automation only after the manual path is understood. Every automated action should have a narrow trigger, a visible outcome and a route for records it cannot complete safely.

Test with ordinary user access as well as administrator access. Include a scenario that must be rejected or returned for more information, and confirm that the next team cannot proceed until the required decision is visible.

## Evidence and review trail

Retain the source reference, responsible person, relevant date, reason for a correction and the final linked record. When evidence comes from a bank, supplier, customer, employee or external document, keep the appropriate reference according to the organisation's security, privacy and retention policy.

A useful trail lets another reviewer reconstruct what was known, what differed, who decided and which later record changed. That is more valuable than a long activity history with no clear outcome. Avoid copying sensitive documents into several places only to make them visible.

## Build the review into normal work

Choose a review frequency that matches the speed and consequence of the process. High value payments, safety related records and customer commitments may need review before the next action. Lower risk master data may suit a weekly exception list. Name the owner, expected response time and escalation route so an alert does not become another unattended queue.

Use trends to improve the process as well as resolve individual records. When the same exception returns, check whether the cause is unclear policy, incomplete source data, unsuitable permissions, training or an integration boundary. Fixing the upstream cause is usually more valuable than adding another reminder after the error has already occurred.

## Worked example

A manager requests exceptional equipment spend. The form requires quotation, cost centre and business reason. Finance and the budget owner approve within their limits, and purchasing links the final order to the request.

The example is illustrative. The transferable method is to confirm the event, compare it with the Odoo record, resolve the difference with an accountable owner and preserve enough context for the next person to understand the result.

## When this approach fits

This fits recurring internal decisions such as exceptions, spend, travel or policy requests.

## Limits and boundaries

It does not create legal authority or validate evidence automatically. Delegation and policy must be defined outside the screen.

Where accounting, tax, employment, privacy, safety or another regulated practice applies, have the appropriate specialist define the requirement first. Then test whether the configured process produces the required record. A completed software screen is not proof that the underlying policy is correct.

## Common mistakes

**Using one generic approval category for every decision.** Investigate the source and downstream effect before closing the exception.

**Approving without required attachments.** Investigate the source and downstream effect before closing the exception.

**Adding senior approvers who lack operational context.** Investigate the source and downstream effect before closing the exception.

**Failing to link the authorised follow up action.** Investigate the source and downstream effect before closing the exception.

## What the owner should review

Approved requests without follow up, missing attachments, changed values after approval, overdue decisions and repeated exceptions.

Review a sample as well as totals. Sampling shows whether the evidence and reason are understandable, while totals reveal ageing and repeated patterns. Frequent manual correction usually points to an upstream rule, data source, training or ownership problem worth fixing.

The goal is not to remove every exception. It is to make important exceptions visible, owned and traceable to a decision.

## Related

Read [Odoo Change Requests: Control Scope Without Blocking Useful Work](/blog/2026/10/30/odoo-change-request-control/) for the connected workflow.

## Official references

1. [Approvals](https://www.odoo.com/documentation/19.0/applications/productivity/approvals.html)

*Sources: official Odoo 19 documentation is listed above. Confirm the corresponding documentation for the installed version before implementation. Examples are illustrative business scenarios, not client results or tests on a live database.*

If you need help translating these decisions into your own workflow, see my [Odoo consulting services](/services/odoo-consulting/).
