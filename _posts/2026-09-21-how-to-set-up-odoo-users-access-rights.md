---
layout: post
title: "How to Set Up Users and Access Rights in Odoo"
date: 2026-09-21 09:00:00 +0530
tags: [Odoo, Odoo 19, Setup, Security, ERP, Accounting, Finance, Inventory Management]
description: "A plain-English guide to adding users and setting access rights in Odoo, so everyone can do their job and nobody can see or change what they should not."
---

Once your company basics are set, the next step is people: who uses Odoo and what they are allowed to do. Get this right
and the system is both usable and safe. Continuing this series of practical Odoo how-to guides, here is users and access
rights.

## Add your users

Start by adding each person who needs access as a user, with their name and email. The email matters because it is how
they log in and how the system communicates with them. Add people as you onboard them rather than all at once, so access
tracks who actually works with the system.

## Understand access rights and groups

Odoo controls what people can do through access rights, usually assigned via groups tied to each app. A user might have
no access to accounting, be a regular user in sales, and an administrator in inventory. The key idea is that access is
per app and per level, so you can shape exactly what each person can reach.

## Assign access by role

The practical way to do this is to think in roles. What does a salesperson need? A warehouse worker? An accountant? Set
each user's access to match their role, giving them what they need to do their job and nothing beyond it. Thinking in
roles keeps this manageable as your team grows.

## Avoid making everyone an administrator

It is tempting to give everyone full rights so nobody hits a wall, but that is a real risk: settings get changed,
sensitive data gets seen, things get deleted. Keep administrator access to the few who genuinely need it. Everyone else
gets the access their role requires. This single discipline prevents a lot of problems.

## Review access over time

People change roles and leave, and access set once drifts out of date. Review your users and their rights periodically:
remove people who have gone, adjust those who have moved roles. Keeping access matched to reality is an ongoing habit,
not a one-time setup, and it keeps the system secure.

## Practical tips

- Add users with correct names and emails as you onboard them.
- Learn that access is per app and per level, set through groups.
- Assign access by role, giving each person what their job needs.
- Keep administrator rights to the few who genuinely need them.
- Review users and access regularly to keep it matched to reality.

## My take

Setting up users and access rights well is what makes Odoo both usable and safe. Role-based access, sparing use of admin
rights and regular reviews mean people can do their jobs without being able to break or see things they should not. It
takes a little thought up front, but it saves both security headaches and frustrated users down the line.

Next in this series: how to set up email in Odoo.

*Based on the official [Odoo 19 access rights documentation](https://www.odoo.com/documentation/19.0/applications/general/users/access_rights.html). Want your Odoo secure from the start? [Get in touch](/services/odoo-implementation/).*
