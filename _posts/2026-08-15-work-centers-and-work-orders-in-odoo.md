---
layout: post
title: "Work Centers and Work Orders in Odoo Manufacturing"
date: 2026-08-15 09:00:00 +0530
tags: [Odoo, Odoo 19, Manufacturing, MRP, ERP, Inventory Management, Stock Control, Production Planning]
description: "How Odoo models the shop floor with work centers, operations and work orders, giving you real-time production tracking and capacity planning."
---

A Bill of Materials tells Odoo what a product is made of. Work centers and work orders tell it how the
product is actually made, step by step, on your shop floor. For anything beyond simple assembly, this
is where Odoo Manufacturing earns its keep.

## Work centers: where the work happens

A work center is a place or resource where an operation is carried out: an assembly bench, a machine, a
paint booth, a packing station. In Odoo, each work center can carry its own details, such as its
capacity, its running cost per hour, and its expected efficiency.

Because Odoo knows the cost and capacity of each work center, it can help you both cost your products
accurately and plan realistically around what your resources can actually handle.

## Operations and routings

An operation is a single step in making a product: cut, weld, assemble, test, pack. A routing is the
ordered sequence of those operations, each linked to the work center where it happens.

Attach a routing to your Bill of Materials and Odoo knows not just what goes into a product, but the
exact steps to build it and where each one takes place. That is the difference between a parts list and
a real production plan.

## Work orders: the steps in action

When you launch production, Odoo breaks the manufacturing order into work orders, one per operation.
Your shop floor works through them in sequence.

The powerful part is what happens at the work center itself. Operators can start, pause and complete
each work order, often from a tablet right where they are working. That gives you two things
spreadsheets never will: real-time visibility of where every job stands, and a genuine record of how
long each step actually takes.

## Capacity and performance

Because Odoo captures planned versus actual times and knows each work center's capacity, it can help
you see bottlenecks, plan workload, and measure performance over time. You move from a vague sense of
"we are busy" to a clear picture of where time really goes and where the constraints are.

## Starting sensibly

You do not need to model every nuance on day one:

- Begin with your main work centers and the key operations that matter.
- Keep routings realistic; capture the steps you actually track.
- Get operators comfortable starting and finishing work orders before adding more detail.
- Add capacity and performance analysis once the basics are flowing.

## My take

Work centers and work orders turn Odoo from a stock system into a real manufacturing tool. They give
you live shop-floor visibility, accurate costing, and the data to plan and improve. Start with your
core operations, get the flow working, and expand the detail as your team gets comfortable.

Next in the series: pulling it together with manufacturing orders and the production workflow.

*Based on the official [Odoo 19 Manufacturing documentation](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/manufacturing.html). A plain-English guide, not a replacement for the docs.*
