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

## What Odoo records and what the business must decide

* Events records registrations and attendee status.
* Check in can be recorded at the event.
* Capacity and communication decisions depend on the correct stage.

## A practical control design

1. **Define when a registration becomes confirmed.**
2. **Record cancellations before the event where possible.**
3. **Use check in consistently at each entrance.**
4. **Review no shows separately from failed payment or declined registration.**

## Worked example

A workshop has one hundred registrations and eighty seats. Ten people cancel, seventy two check in and four approved walk ins attend. The organiser reports actual attendance separately from total registrations and uses the no show rate for the next event plan.

## When it fits

This fits conferences, workshops and customer events that need attendee communication and capacity review.

## Limits and boundaries

It does not verify identity or payment merely because someone is registered. Add the required checks for the event model.

## Common mistakes

**Reporting registrations as attendance.** Review the underlying record and the next operational consequence before closing the exception.

**Ignoring cancelled registrations in capacity.** Review the underlying record and the next operational consequence before closing the exception.

**Using inconsistent check in points.** Review the underlying record and the next operational consequence before closing the exception.

**Following up with no shows as if they attended.** Review the underlying record and the next operational consequence before closing the exception.

## What the owner should review

Registrations without payment where required, duplicate attendees, late cancellations, walk ins and missing check in records.

The goal is not to remove every exception. It is to make each important exception visible, owned and traceable to a decision.

## Related

Use the [ERP acceptance evidence worksheet](/resources/erp-acceptance-evidence/) to record the outcome and supporting records.

Read [How to Set Up Events in Odoo](/blog/2026/09/29/how-to-set-up-events-odoo/) for the connected workflow.

## Official references

1. [Events](https://www.odoo.com/documentation/19.0/applications/marketing/events.html)

*How this article was checked: official Odoo 19 documentation was reviewed in November 2026. Confirm the corresponding documentation for the installed version before implementation. Examples are illustrative business scenarios, not client results or tests on a live database.*

If you need help translating these decisions into your own workflow, see my [Odoo consulting services](/services/odoo-consulting/).
