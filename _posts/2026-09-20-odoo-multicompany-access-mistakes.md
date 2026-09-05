---
layout: post
title: "Common Mistakes with Odoo Multi-Company and Access Rights"
date: 2026-09-20 10:00:00 +0530
tags: [Odoo, Odoo 19, Multi-Company, Security, ERP]
description: "The multi-company and access-rights mistakes that cause confusion and risk in Odoo, from giving everyone admin to muddled company setup, and how to get it right."
---

Access rights and multi-company setup are the least glamorous parts of Odoo and among the most consequential, because
getting them wrong means either people cannot do their jobs or they can see and do far too much. To round off this
series on common Odoo mistakes, here is multi-company and access rights.

## Giving everyone admin

The laziest and most dangerous shortcut is making everyone an administrator so nobody hits a permission wall. It works
until someone changes a setting they should not, deletes something important or sees sensitive data. Give people the
access their role needs and no more; it is basic hygiene that prevents a whole category of problems.

## Not thinking through roles

Access rights work best when they map to real roles: what does a salesperson, a warehouse worker, an accountant actually
need? Assigning permissions ad hoc, person by person, becomes an unmanageable tangle. Design access around roles, and
onboarding, changes and audits all get far simpler.

## Muddled multi-company setup

For businesses running several companies in one Odoo, a careless setup leads to data landing in the wrong company,
confused reporting and inter-company transactions that do not add up. Multi-company is powerful but needs deliberate
configuration. Plan how companies, users and shared data relate before switching it on.

## Confusing company separation with security

A common misunderstanding is assuming multi-company separation is the same as access control. They are different tools:
one organises data across companies, the other controls what each user can do. You usually need both, set up
thoughtfully together, not one standing in for the other.

## Never reviewing access

Access set up once and never revisited drifts out of line with reality as people change roles and leave. Old permissions
linger, becoming a security risk. Review access periodically so it still matches who does what today, and remove what is
no longer needed. Security is a habit, not a one-time task.

## Practical tips

- Give each person only the access their role needs, never blanket admin.
- Design access rights around real roles, not ad hoc per person.
- Plan multi-company setup deliberately before switching it on.
- Treat company separation and access control as two different tools.
- Review access regularly so it stays matched to reality.

## My take

Access rights and multi-company are where convenience and safety pull against each other, and shortcuts here create
quiet risk. Role-based access, a deliberate multi-company setup and periodic reviews are what keep the system both usable
and secure. It is unglamorous work, but it protects the business, and it is far easier to do well from the start than to
untangle later.

This series has now walked through the mistakes that most often trip up Odoo, across the core apps, the people and
service apps, the shop floor, reporting and security. The pattern throughout is clear: almost none of these are the
software's fault. They are about how it is set up and used. Avoid them, and Odoo does exactly what it is meant to. I will
keep sharing more lessons from real projects over time.

*See the official [Odoo 19 companies and users documentation](https://www.odoo.com/documentation/19.0/applications/general/companies.html). Want your setup secure and sensible? [Get in touch](/services/odoo-consulting/).*
