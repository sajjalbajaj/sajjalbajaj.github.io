---
layout: post
title: "Odoo 20 Appointment Types: Control Availability and Resources"
date: 2026-11-20 07:00:00 +0530
tags: [Odoo, Odoo 20, ERP, Best Practices, Appointments, Customer Management, Website, Operations]
hub: services
description: "Configure Odoo 20 appointment types around user or resource availability, capacity, publication status and clear cancellation rules."
last_modified_at: 2026-11-27
faqs:
  - q: "Does an appointment type reserve both a user and a room automatically?"
    a: "Do not assume that. The documentation distinguishes bookings based on users from bookings based on resources. Test any requirement to coordinate several constraints."
  - q: "Why can a configured appointment type be missing from the website?"
    a: "Check whether it is published. The appointment type's Published ribbon indicates website visibility."
  - q: "How does Employee Schedule affect available slots?"
    a: "When enabled, a slot must fit both the appointment type's availability windows and the employee's working schedule."
---

**Short answer:** Odoo 20 appointment types define what a customer can book, whether availability comes from users or resources, and how assignment and capacity work. Match the configuration to the real service. Verify publication status, working schedules, concurrent bookings and cancellation behaviour before sharing the booking link.

## Which choice should be made before entering time slots?

The [appointment type documentation](https://www.odoo.com/documentation/20.0/applications/productivity/appointments/appointment_types.html) distinguishes user based meetings from resource based bookings. A consultant's availability and a room's capacity are different scheduling constraints.

Do not assume that selecting a specialist automatically reserves a separate room as well. If the service needs both, define the required relationship and demonstrate it in the configured booking flow. Resource linking and capacity options need their own review.

Choose the duration, location and assignment method deliberately. Automatic assignment and a visitor choosing a person can create different customer expectations.

## How do availability windows and employee schedules interact?

Enter the intended windows on the Availabilities tab. If Employee Schedule is enabled, Odoo offers a slot only within the intersection of those windows and the employee's working schedule.

For example, a proposed test can use a type available until 17:00 and an employee whose workday ends at 16:00. Confirm that the later slot is not offered. Include a midday gap and an existing calendar event so the test covers more than an empty calendar.

## What should be checked before publishing the link?

A type that exists internally is not necessarily visible on the website. Review its Published status and test the public booking page while signed out.

Check the wording, time zone, location and information requested from the visitor. Make a question mandatory only when the answer is needed to arrange the appointment. Avoid collecting detailed health or other sensitive records through a generic booking question merely because the form allows text.

## How should cancellations and reminders work?

The type supports reminder configuration and confirmation and cancellation messages. The Cancellation setting restricts how close to the appointment a customer can cancel independently. The documented restricted flow shows contact information when self cancellation is no longer available.

The restriction still needs a human process. Decide who receives a late cancellation request and how the released slot is handled. A reminder being sent is not proof the visitor will attend.

## Which acceptance cases reveal scheduling mistakes?

| Proposed case | Expected review |
| --- | --- |
| Two visitors choose the same capacity | Configured capacity is respected |
| Employee unavailable | Slot is excluded as intended |
| Visitor in another time zone | Displayed and recorded time agree |
| Late cancellation | Correct restriction and contact route |
| Unpublished type | No unintended public booking route |

Confirm the resulting calendar event and assigned person or resource after booking. The [ERP acceptance evidence worksheet](/resources/erp-acceptance-evidence/) provides a place to record these expected results. For broader workflow ownership, see the [field service planning guide](/blog/2026/11/18/odoo-20-field-service-planning/).

*Sources reviewed on 27 November 2026. Scenarios are proposed acceptance cases, not reported customer results. Confirm edition, installed modules and provider requirements for your database.*
