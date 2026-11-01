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

Start with the business event rather than the field that looks incomplete. Agree what should happen, who owns the decision and which evidence proves completion. Configuration can then express a rule the operating team understands instead of hiding an unresolved policy choice.

## What Odoo can show

* Appointment types define availability, duration, users and resources.
* Invitations and calendar events communicate the scheduled time.
* Cancellation and attendance outcomes affect future capacity decisions.

These records create useful traceability, but they do not interpret the commercial, accounting, legal or operational meaning by themselves. The process owner must decide which source is authoritative, who may correct a discrepancy and when the downstream action can proceed.

## A practical control design

1. **Publish realistic availability and buffers.**
2. **Send clear confirmation and change instructions.**
3. **Release cancelled capacity according to policy.**
4. **Record no shows separately from cancellations.**

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

A consultation is cancelled one day before the slot. The customer uses the approved reschedule route, the original time becomes available and the team records the outcome separately from a second customer who simply does not attend.

The example is illustrative. The transferable method is to confirm the event, compare it with the Odoo record, resolve the difference with an accountable owner and preserve enough context for the next person to understand the result.

## When this approach fits

This fits advisory, service, clinic administration and sales meetings with bookable time.

## Limits and boundaries

It does not establish lawful cancellation charges or clinical attendance records. Define those requirements with the proper owner.

Where accounting, tax, employment, privacy, safety or another regulated practice applies, have the appropriate specialist define the requirement first. Then test whether the configured process produces the required record. A completed software screen is not proof that the underlying policy is correct.

## Common mistakes

**Counting every booking as attended.** Investigate the source and downstream effect before closing the exception.

**Leaving cancelled events on resource calendars.** Investigate the source and downstream effect before closing the exception.

**Offering slots without preparation buffers.** Investigate the source and downstream effect before closing the exception.

**Using the same follow up for cancellations and no shows.** Investigate the source and downstream effect before closing the exception.

## What the owner should review

Late cancellations, no shows, double booked resources, events without contact details and appointment types with unused capacity.

Review a sample as well as totals. Sampling shows whether the evidence and reason are understandable, while totals reveal ageing and repeated patterns. Frequent manual correction usually points to an upstream rule, data source, training or ownership problem worth fixing.

The goal is not to remove every exception. It is to make important exceptions visible, owned and traceable to a decision.

## Related

Read [How to Set Up Appointments in Odoo](/blog/2026/09/28/how-to-set-up-appointments-odoo/) for the connected workflow.

## Official references

1. [Appointments](https://www.odoo.com/documentation/19.0/applications/productivity/appointments.html)

*Sources: official Odoo 19 documentation is listed above. Confirm the corresponding documentation for the installed version before implementation. Examples are illustrative business scenarios, not client results or tests on a live database.*

If you need help translating these decisions into your own workflow, see my [Odoo consulting services](/services/odoo-consulting/).
