---
layout: post
title: "Odoo Appointments: Manage Cancellations and No Shows"
date: 2026-12-08 10:00:00 +0530
tags: [Odoo, Odoo 19, ERP, Best Practices, Customer Management, Business Automation, Operations, Website]
hub: services
description: "Control Odoo appointment availability, confirmations, cancellations and no shows so calendars, customer communication and follow up reflect the actual outcome."
faqs:
  - q: "Is a booked appointment proof of attendance?"
    a: "No. Record the actual outcome when attendance matters for service, capacity or follow up."
  - q: "Why separate cancellation from no show?"
    a: "The causes, customer communication and capacity response are different and should not be hidden in one status."
---

**Short answer:** A booking reserves time but does not prove attendance. Define when a slot is released, how late changes are handled and who owns follow up after a no show.

## Applies to

Odoo 19 Appointments with Calendar and Website as applicable. Cancellation fees and sector rules require policy and legal review.

## The decision to make

Was the booking confirmed, cancelled, rescheduled or missed, and what capacity or customer action should follow?

## What Odoo can show

* Appointment types define availability, duration, users and resources.
* Invitations and calendar events communicate the scheduled time.
* Cancellation and attendance outcomes affect future capacity decisions.

## A practical control design

1. **Publish realistic availability and buffers.**
2. **Send clear confirmation and change instructions.**
3. **Release cancelled capacity according to policy.**
4. **Record no shows separately from cancellations.**

## Worked example

A consultation is cancelled one day before the slot. The customer uses the approved reschedule route, the original time becomes available and the team records the outcome separately from a second customer who simply does not attend.

## When this approach fits

This fits advisory, service, clinic administration and sales meetings with bookable time.

## Limits and boundaries

It does not establish lawful cancellation charges or clinical attendance records. Define those requirements with the proper owner.

## Common mistakes

**Counting every booking as attended.** Investigate the source and downstream effect before closing the exception.

**Leaving cancelled events on resource calendars.** Investigate the source and downstream effect before closing the exception.

**Offering slots without preparation buffers.** Investigate the source and downstream effect before closing the exception.

**Using the same follow up for cancellations and no shows.** Investigate the source and downstream effect before closing the exception.

## What the owner should review

Late cancellations, no shows, double booked resources, events without contact details and appointment types with unused capacity.

The goal is not to remove every exception. It is to make important exceptions visible, owned and traceable to a decision.

## Related

Use the [ERP acceptance evidence worksheet](/resources/erp-acceptance-evidence/) to record the outcome and supporting records.

Read [How to Set Up Appointments in Odoo](/blog/2026/09/28/how-to-set-up-appointments-odoo/) for the connected workflow.

## Official references

1. [Appointments](https://www.odoo.com/documentation/19.0/applications/productivity/appointments.html)

*Sources: official Odoo 19 documentation is listed above. Confirm the corresponding documentation for the installed version before implementation. Examples are illustrative business scenarios, not client results or tests on a live database.*

If you need help translating these decisions into your own workflow, see my [Odoo consulting services](/services/odoo-consulting/).
