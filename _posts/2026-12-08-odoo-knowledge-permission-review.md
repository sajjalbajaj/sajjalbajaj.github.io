---
layout: post
title: "Odoo Knowledge Access: Review Readers and Editors"
date: 2026-12-08 09:00:00 +0530
tags: [Odoo, Odoo 19, ERP, Best Practices, Business Automation, Compliance, Support, Project Management]
hub: services
description: "Review Odoo Knowledge access, article ownership, inherited permissions and links so guidance reaches the right people without exposing restricted content."
faqs:
  - q: "Should all readers be editors?"
    a: "No. Separate the audience that needs guidance from the smaller group responsible for maintaining it."
  - q: "Why review access after moving an article?"
    a: "Hierarchy or workspace context can change who can reach the content, so confirm the resulting permissions."
---

**Short answer:** Publishing an article answers what people should know. Permission review answers who may read, edit, share or reuse that information.

## Applies to

Odoo 19 Knowledge. Confidentiality classification and information security policy remain organisational responsibilities.

## The decision to make

Who needs the guidance, who may change it and does the article contain information that should not inherit broad access?

Start with the business event rather than the field that looks incomplete. Agree what should happen, who owns the decision and which evidence proves completion. Configuration can then express a rule the operating team understands instead of hiding an unresolved policy choice.

## What Odoo can show

* Articles can be organised in hierarchies with shared access context.
* Editing and reading are different responsibilities.
* Templates and copied content can spread outdated or restricted information.

These records create useful traceability, but they do not interpret the commercial, accounting, legal or operational meaning by themselves. The process owner must decide which source is authoritative, who may correct a discrepancy and when the downstream action can proceed.

## A practical control design

1. **Classify content before choosing its audience.**
2. **Give edit access only to responsible maintainers.**
3. **Review inherited access when moving articles.**
4. **Remove public or external sharing when the purpose ends.**

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

A support procedure moves under a broadly shared workspace and inherits wider access. The owner separates a confidential escalation appendix, restores the intended permissions and leaves the general troubleshooting guide available to agents.

The example is illustrative. The transferable method is to confirm the event, compare it with the Odoo record, resolve the difference with an accountable owner and preserve enough context for the next person to understand the result.

## When this approach fits

This fits internal handbooks, operating procedures and support guidance maintained by several teams.

## Limits and boundaries

It does not replace a formal information security system or guarantee copied information remains controlled elsewhere.

Where accounting, tax, employment, privacy, safety or another regulated practice applies, have the appropriate specialist define the requirement first. Then test whether the configured process produces the required record. A completed software screen is not proof that the underlying policy is correct.

## Common mistakes

**Giving every reader edit rights.** Investigate the source and downstream effect before closing the exception.

**Moving an article without checking inherited access.** Investigate the source and downstream effect before closing the exception.

**Copying confidential steps into a public template.** Investigate the source and downstream effect before closing the exception.

**Keeping departed staff as maintainers.** Investigate the source and downstream effect before closing the exception.

## What the owner should review

Externally shared articles, broad editor lists, ownerless content, moved articles, confidential keywords and access held by inactive users.

Review a sample as well as totals. Sampling shows whether the evidence and reason are understandable, while totals reveal ageing and repeated patterns. Frequent manual correction usually points to an upstream rule, data source, training or ownership problem worth fixing.

The goal is not to remove every exception. It is to make important exceptions visible, owned and traceable to a decision.

## Related

Read [Odoo Knowledge: Keep Support Articles Accurate and Findable](/blog/2026/11/18/odoo-knowledge-support-article-review/) for the connected workflow.

## Official references

1. [Knowledge](https://www.odoo.com/documentation/19.0/applications/productivity/knowledge.html)

*Sources: official Odoo 19 documentation is listed above. Confirm the corresponding documentation for the installed version before implementation. Examples are illustrative business scenarios, not client results or tests on a live database.*

If you need help translating these decisions into your own workflow, see my [Odoo consulting services](/services/odoo-consulting/).
