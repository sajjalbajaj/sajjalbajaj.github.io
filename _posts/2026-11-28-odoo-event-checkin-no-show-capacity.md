---
layout: post
title: "Odoo Events: Reconcile Registrations, Check Ins and No Shows"
date: 2026-11-28 10:00:00 +0530
tags: [Odoo, Odoo 19, ERP, Best Practices, Customer Management, Business Automation, Setup, Analytics]
hub: services
description: "Use Odoo event registrations and check ins to review capacity, attendance and no shows without treating every registration as an attendee."
faqs:
  - q: "Is a registration the same as attendance?"
    a: "No. Use check in or another agreed arrival record for actual attendance."
  - q: "Why retain no show information?"
    a: "It helps capacity planning and allows appropriate follow up without overstating participation."
---

**Short answer:** Registration shows intent; check in shows recorded arrival. Keep both so capacity planning and follow up use the right measure.

## Applies to

Odoo 19 Events registration, attendees and check in tools.

## Start with the decision

How many places were reserved, how many people arrived, and which cancellations or walk ins changed the final attendance?

The configuration should follow that decision. It should not become the place where an unresolved policy choice is hidden. Write down the expected outcome, the owner and the evidence that will show the step is complete. This gives administrators a testable rule and gives reviewers a reason for each exception.

## What Odoo records and what the business must decide

* Events records registrations and attendee status.
* Check in can be recorded at the event.
* Capacity and communication decisions depend on the correct stage.

These records make the workflow visible, but they do not judge the commercial, legal or operational meaning on their own. The process owner must decide which source is authoritative, who may correct it and what happens when two records disagree.

## A practical control design

1. **Define when a registration becomes confirmed.**
2. **Record cancellations before the event where possible.**
3. **Use check in consistently at each entrance.**
4. **Review no shows separately from failed payment or declined registration.**

Keep the exception route as clear as the normal route. Staff should know where to place an item that cannot yet be completed, who reviews it and which deadline or business event should bring it back for attention. A dashboard with only completed records can look healthy while unresolved work remains outside the system.

## How to introduce the control

Start with a small set of representative records: one normal transaction, one incomplete record, one correction and one case near a reporting or operational cutoff. Walk each example through the proposed workflow with the people who create, review and use the result. This exposes differences in language and responsibility before they become configuration problems.

Configure the minimum fields and stages needed to express the agreed decision. Add automation only after the team can explain the manual path. An automated action should have a narrow trigger, a visible result and an exception route. If users cannot tell why a record moved or changed, the automation will make investigation slower even when it saves keystrokes.

Before release, compare permissions with actual responsibilities. The person who enters a record may not be the person authorised to approve a correction or financial outcome. Test the workflow with ordinary users as well as administrators, and include a record that should be refused or returned for more information.

## Evidence to keep with the decision

Keep the source reference, responsible person, relevant date, reason for any correction and the final linked record. Where a decision depends on an external document, bank movement, customer message or manager confirmation, retain the reference according to the organisation's document and privacy policy. Avoid copying sensitive material into several places merely to make it visible.

A useful audit trail lets a reviewer reconstruct the sequence without relying on a private inbox or someone's memory. It should show what was known at the time, what exception was found, who resolved it and which downstream record was affected. That is more valuable than a long activity history with no clear outcome.

## Worked example

A workshop has one hundred registrations and eighty seats. Ten people cancel, seventy two check in and four approved walk ins attend. The organiser reports actual attendance separately from total registrations and uses the no show rate for the next event plan.

The example is illustrative. The useful point is the sequence: confirm the business event, compare it with the Odoo record, resolve the difference with an accountable owner and retain enough context for the next person to understand the result.

## When it fits

This fits conferences, workshops and customer events that need attendee communication and capacity review.

## Limits and boundaries

It does not verify identity or payment merely because someone is registered. Add the required checks for the event model.

Where local law, tax, employment, privacy or regulated practice matters, have the appropriate specialist define the requirement. Then test whether the configured workflow produces the required record. A software screen is not evidence that the policy itself is correct.

## Common mistakes

**Reporting registrations as attendance.** Review the underlying record and the next operational consequence before closing the exception.

**Ignoring cancelled registrations in capacity.** Review the underlying record and the next operational consequence before closing the exception.

**Using inconsistent check in points.** Review the underlying record and the next operational consequence before closing the exception.

**Following up with no shows as if they attended.** Review the underlying record and the next operational consequence before closing the exception.

## What the owner should review

Registrations without payment where required, duplicate attendees, late cancellations, walk ins and missing check in records.

Review a small sample as well as totals. Sampling shows whether the reason, source document and next action are understandable, while totals reveal ageing and recurring patterns. Repeated manual corrections usually indicate a rule, data source or ownership problem worth fixing upstream.

The goal is not to remove every exception. It is to make each important exception visible, owned and traceable to a decision.

## Related

Read [How to Set Up Events in Odoo](/blog/2026/09/29/how-to-set-up-events-odoo/) for the connected workflow.

## Official references

1. [Events](https://www.odoo.com/documentation/19.0/applications/marketing/events.html)

*How this article was checked: official Odoo 19 documentation was reviewed in November 2026. Confirm the corresponding documentation for the installed version before implementation. Examples are illustrative business scenarios, not client results or tests on a live database.*

If you need help translating these decisions into your own workflow, see my [Odoo consulting services](/services/odoo-consulting/).
