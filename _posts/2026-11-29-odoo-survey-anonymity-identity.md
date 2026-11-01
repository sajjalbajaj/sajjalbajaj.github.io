---
layout: post
title: "Odoo Surveys: Decide Whether Answers Should Be Anonymous"
date: 2026-11-29 08:00:00 +0530
tags: [Odoo, Odoo 19, ERP, Best Practices, Customer Management, Business Automation, Setup, Compliance]
hub: services
description: "Configure Odoo surveys with a clear identity and anonymity decision so invitations, scoring and follow up match what respondents were told."
faqs:
  - q: "Should every survey be anonymous?"
    a: "No. Choose based on purpose, and tell respondents clearly whether answers are attributed."
  - q: "Is removing the name field enough to guarantee anonymity?"
    a: "No. Invitations, metadata, small groups and exports may still identify a respondent."
---

**Short answer:** Decide before launch whether the business needs attributed answers or protected anonymity. Do not promise anonymity while collecting identifiers for follow up.

## Applies to

Odoo 19 Surveys. Privacy notices, retention and research ethics remain the organisation's responsibility.

## Start with the decision

What will the answers be used for, who needs to see identity, and what has the respondent been told?

The configuration should follow that decision. It should not become the place where an unresolved policy choice is hidden. Write down the expected outcome, the owner and the evidence that will show the step is complete. This gives administrators a testable rule and gives reviewers a reason for each exception.

## What Odoo records and what the business must decide

* Survey access and invitation choices affect who can respond.
* Scoring and certification can require identified participation.
* Anonymous feedback supports a different purpose from individual case follow up.

These records make the workflow visible, but they do not judge the commercial, legal or operational meaning on their own. The process owner must decide which source is authoritative, who may correct it and what happens when two records disagree.

## A practical control design

1. **Write the purpose and identity treatment in the introduction.**
2. **Collect only fields needed for the purpose.**
3. **Separate anonymous trend analysis from personal case handling.**
4. **Test the respondent view before sending invitations.**

Keep the exception route as clear as the normal route. Staff should know where to place an item that cannot yet be completed, who reviews it and which deadline or business event should bring it back for attention. A dashboard with only completed records can look healthy while unresolved work remains outside the system.

## How to introduce the control

Start with a small set of representative records: one normal transaction, one incomplete record, one correction and one case near a reporting or operational cutoff. Walk each example through the proposed workflow with the people who create, review and use the result. This exposes differences in language and responsibility before they become configuration problems.

Configure the minimum fields and stages needed to express the agreed decision. Add automation only after the team can explain the manual path. An automated action should have a narrow trigger, a visible result and an exception route. If users cannot tell why a record moved or changed, the automation will make investigation slower even when it saves keystrokes.

Before release, compare permissions with actual responsibilities. The person who enters a record may not be the person authorised to approve a correction or financial outcome. Test the workflow with ordinary users as well as administrators, and include a record that should be refused or returned for more information.

## Evidence to keep with the decision

Keep the source reference, responsible person, relevant date, reason for any correction and the final linked record. Where a decision depends on an external document, bank movement, customer message or manager confirmation, retain the reference according to the organisation's document and privacy policy. Avoid copying sensitive material into several places merely to make it visible.

A useful audit trail lets a reviewer reconstruct the sequence without relying on a private inbox or someone's memory. It should show what was known at the time, what exception was found, who resolved it and which downstream record was affected. That is more valuable than a long activity history with no clear outcome.

## Worked example

An employee climate survey promises anonymous trend reporting. The team removes name questions and avoids using unique invitation results for manager follow up. A separate support survey asks for contact details because the customer requests a response.

The example is illustrative. The useful point is the sequence: confirm the business event, compare it with the Odoo record, resolve the difference with an accountable owner and retain enough context for the next person to understand the result.

## When it fits

This fits feedback, assessments and research where the identity model is chosen deliberately.

## Limits and boundaries

It does not guarantee legal anonymity merely because a name field is absent. Review metadata, access and export handling.

Where local law, tax, employment, privacy or regulated practice matters, have the appropriate specialist define the requirement. Then test whether the configured workflow produces the required record. A software screen is not evidence that the policy itself is correct.

## Common mistakes

**Promising anonymity while using identifiable invitations.** Review the underlying record and the next operational consequence before closing the exception.

**Collecting unnecessary contact fields.** Review the underlying record and the next operational consequence before closing the exception.

**Combining anonymous feedback with performance action.** Review the underlying record and the next operational consequence before closing the exception.

**Changing access rules after launch.** Review the underlying record and the next operational consequence before closing the exception.

## What the owner should review

Survey introductions, access settings, exported identifiers, small groups and users with result access.

Review a small sample as well as totals. Sampling shows whether the reason, source document and next action are understandable, while totals reveal ageing and recurring patterns. Repeated manual corrections usually indicate a rule, data source or ownership problem worth fixing upstream.

The goal is not to remove every exception. It is to make each important exception visible, owned and traceable to a decision.

## Related

Read [How to Set Up Surveys in Odoo](/blog/2026/10/02/how-to-set-up-surveys-odoo/) for the connected workflow.

## Official references

1. [Surveys](https://www.odoo.com/documentation/19.0/applications/marketing/surveys.html)

*How this article was checked: official Odoo 19 documentation was reviewed in November 2026. Confirm the corresponding documentation for the installed version before implementation. Examples are illustrative business scenarios, not client results or tests on a live database.*

If you need help translating these decisions into your own workflow, see my [Odoo consulting services](/services/odoo-consulting/).
