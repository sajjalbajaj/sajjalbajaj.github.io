---
layout: post
title: "How to Set Up Work Orders and the Shop Floor in Odoo"
date: 2026-09-27 08:00:00 +0530
tags: [Odoo, Odoo 19, Setup, Manufacturing, MRP]
description: "A plain-English guide to setting up work orders and the shop floor in Odoo, so your manufacturing steps, work centers and operators all stay in sync."
---

Once your bills of materials are in place, the next step in manufacturing is running production on the shop floor, and
that means work centers and work orders. Setting these up is what turns a manufacturing order into clear steps people
actually carry out. Continuing this series of practical Odoo how-to guides, here is work orders and the shop floor.

## Set up your work centers

A work center is a place or resource where work happens: an assembly bench, a machine, a station. Set up the work
centers that reflect your real production, with their capacity and cost where relevant. These are the foundation, because
work orders are carried out at work centers, and capacity planning depends on them being accurate.

## Add operations to your bills of materials

To generate work orders, your bill of materials needs operations, the steps involved in making the product, each linked
to a work center. Setting these up tells Odoo the sequence of work and where each step happens. This is what breaks a
build down into the individual jobs your team performs.

## Understand work orders

When you launch a manufacturing order for a product with operations, Odoo creates work orders, one per operation. Each
work order tells an operator what to do, at which work center, and in what order. This is how the plan on paper becomes
clear instructions on the floor.

## Use the shop floor view

Odoo's shop floor view is designed for operators to work through their jobs: starting and finishing work orders,
recording time, and seeing what is next. Setting this up gives your team a clear, hands-on interface rather than digging
through the back office. It is what makes the system usable where the actual work happens.

## Track time and capacity

Because work orders are tied to work centers and can record time, you get real visibility into how long things take and
how loaded each work center is. Use this to plan realistically and to see where bottlenecks are. It turns manufacturing
from guesswork into something you can measure and improve.

## Practical tips

- Set up work centers that reflect your real production resources.
- Add operations to your BoMs, each linked to a work center.
- Understand that operations generate one work order each.
- Use the shop floor view so operators have a clear interface.
- Track time and capacity to plan realistically and find bottlenecks.

## My take

Work orders and the shop floor are where manufacturing plans meet reality. Well-set-up work centers, operations on your
BoMs and a clear shop floor view turn a manufacturing order into concrete, trackable steps your team can actually run.
Add time and capacity tracking and you can start improving, not just executing. It is the setup that makes Odoo
manufacturing genuinely operational.

Next in this series: how to set up quality control.

*Based on the official [Odoo 19 shop floor documentation](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/manufacturing/shop_floor.html). Setting up manufacturing? [Get in touch](/services/odoo-implementation/).*
