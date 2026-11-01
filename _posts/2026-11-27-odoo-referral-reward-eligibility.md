---
layout: post
title: "Odoo Referrals: Define Reward Eligibility Before Hiring"
date: 2026-11-27 10:00:00 +0530
tags: [Odoo, Odoo 19, ERP, Best Practices, Customer Management, Business Automation, Setup, Compliance]
hub: services
description: "Define Odoo referral reward eligibility, duplicate ownership and payout evidence before candidates move through recruitment and hiring."
faqs:
  - q: "When should reward eligibility be defined?"
    a: "Before referrals are submitted, including duplicate and prior application rules."
  - q: "Is a referral point the same as a paid reward?"
    a: "No. The organisation should reconcile the application milestone, approval and actual payout."
---

**Short answer:** The reward rule should exist before a successful hire creates competing claims. Separate candidate ownership from the final payment approval.

## Applies to

Odoo 19 Referrals and Recruitment. Tax, payroll and employment policy determine how rewards are paid.

## Start with the decision

Which referral counts, when is it earned, and how are prior applications or multiple referrers handled?

The configuration should follow that decision. It should not become the place where an unresolved policy choice is hidden. Write down the expected outcome, the owner and the evidence that will show the step is complete. This gives administrators a testable rule and gives reviewers a reason for each exception.

## What Odoo records and what the business must decide

* Referrals connects employees, jobs and referred applicants.
* Rewards and points can support participation.
* Recruitment outcomes and payment approval are distinct decisions.

These records make the workflow visible, but they do not judge the commercial, legal or operational meaning on their own. The process owner must decide which source is authoritative, who may correct it and what happens when two records disagree.

## A practical control design

1. **Publish eligibility and duplicate rules.**
2. **Identify prior candidate records before assigning ownership.**
3. **Define the qualifying employment milestone.**
4. **Reconcile approved rewards with payroll or accounts payable.**

Keep the exception route as clear as the normal route. Staff should know where to place an item that cannot yet be completed, who reviews it and which deadline or business event should bring it back for attention. A dashboard with only completed records can look healthy while unresolved work remains outside the system.

## How to introduce the control

Start with a small set of representative records: one normal transaction, one incomplete record, one correction and one case near a reporting or operational cutoff. Walk each example through the proposed workflow with the people who create, review and use the result. This exposes differences in language and responsibility before they become configuration problems.

Configure the minimum fields and stages needed to express the agreed decision. Add automation only after the team can explain the manual path. An automated action should have a narrow trigger, a visible result and an exception route. If users cannot tell why a record moved or changed, the automation will make investigation slower even when it saves keystrokes.

Before release, compare permissions with actual responsibilities. The person who enters a record may not be the person authorised to approve a correction or financial outcome. Test the workflow with ordinary users as well as administrators, and include a record that should be refused or returned for more information.

## Evidence to keep with the decision

Keep the source reference, responsible person, relevant date, reason for any correction and the final linked record. Where a decision depends on an external document, bank movement, customer message or manager confirmation, retain the reference according to the organisation's document and privacy policy. Avoid copying sensitive material into several places merely to make it visible.

A useful audit trail lets a reviewer reconstruct the sequence without relying on a private inbox or someone's memory. It should show what was known at the time, what exception was found, who resolved it and which downstream record was affected. That is more valuable than a long activity history with no clear outcome.

## Worked example

Two employees refer the same person within a week, but the candidate had applied directly months earlier. HR applies the written prior application rule, records the decision and avoids changing ownership after the hire.

The example is illustrative. The useful point is the sequence: confirm the business event, compare it with the Odoo record, resolve the difference with an accountable owner and retain enough context for the next person to understand the result.

## When it fits

This fits employee referral programmes with clear job, candidate and reward milestones.

## Limits and boundaries

It does not decide payroll tax or fairness rules. Those must be approved in policy before configuration.

Where local law, tax, employment, privacy or regulated practice matters, have the appropriate specialist define the requirement. Then test whether the configured workflow produces the required record. A software screen is not evidence that the policy itself is correct.

## Common mistakes

**Creating rules after a disputed hire.** Review the underlying record and the next operational consequence before closing the exception.

**Paying on application rather than the agreed milestone.** Review the underlying record and the next operational consequence before closing the exception.

**Ignoring prior candidate records.** Review the underlying record and the next operational consequence before closing the exception.

**Recording points without reconciling actual payout.** Review the underlying record and the next operational consequence before closing the exception.

## What the owner should review

Duplicate candidates, rewards pending after the milestone, manual ownership changes and payments without an approved referral.

Review a small sample as well as totals. Sampling shows whether the reason, source document and next action are understandable, while totals reveal ageing and recurring patterns. Repeated manual corrections usually indicate a rule, data source or ownership problem worth fixing upstream.

The goal is not to remove every exception. It is to make each important exception visible, owned and traceable to a decision.

## Related

Read [Employee Referrals in Odoo: Hiring Through Your Team](/blog/2026/08/30/odoo-referrals/) for the connected workflow.

## Official references

1. [Referrals](https://www.odoo.com/documentation/19.0/applications/hr/referrals.html)
1. [Recruitment](https://www.odoo.com/documentation/19.0/applications/hr/recruitment.html)

*How this article was checked: official Odoo 19 documentation was reviewed in November 2026. Confirm the corresponding documentation for the installed version before implementation. Examples are illustrative business scenarios, not client results or tests on a live database.*

If you need help translating these decisions into your own workflow, see my [Odoo consulting services](/services/odoo-consulting/).
