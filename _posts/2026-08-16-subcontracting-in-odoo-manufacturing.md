---
layout: post
title: "Subcontracting in Odoo Manufacturing"
date: 2026-08-16 08:00:00 +0530
tags: [Odoo, Odoo 19, Manufacturing, Subcontracting, ERP]
description: "How Odoo handles subcontracting: outsourcing production to a partner while keeping full control of components, stock and costs."
---

Not every business makes everything in-house. Many outsource part or all of production to a
subcontractor, and I have set this up for several clients who work exactly this way. The challenge is
keeping control of your components, stock and costs when the actual work happens somewhere else. Odoo
handles this neatly. Here is how subcontracting works.

## What subcontracting means

Subcontracting is when you hand production of a product to an outside partner. You may supply the raw
components, they may source some themselves, and they deliver back the finished product. Your books and
stock still need to reflect all of it accurately, even though the making happened off-site.

## How Odoo models it

In Odoo, you flag that a product is produced by a subcontractor and record who that subcontractor is on
its Bill of Materials. From then on, Odoo treats the outside step as part of your flow, so you get the
finished goods into stock and the components accounted for, without pretending it was made in your own
warehouse.

The neat part is that you do not run the shop-floor work orders yourself. You manage the relationship
and the goods, and Odoo keeps the stock and cost picture straight.

## The two common models

Subcontracting usually comes in two shapes, and Odoo supports both:

- **You supply the components.** You send the raw materials to the subcontractor, they assemble, and
  you receive the finished product. Odoo tracks the components sitting at the subcontractor and consumes
  them when the finished goods come back.
- **The subcontractor supplies everything.** They handle materials and production, and you simply
  receive and pay for the finished product. This is closer to a straightforward purchase, with the
  manufacturing structure still recorded.

Choosing the model that matches your real arrangement keeps stock and valuation correct.

## Keeping control from a distance

The reason to do this in Odoo rather than by email and spreadsheet is control. You can see the
components you have sent out, know what finished goods are due back, and keep your inventory and costs
accurate throughout. The work is outsourced, but the visibility is not.

## Practical tips

- Set up your subcontractors and their products clearly before you start.
- Decide which model applies, who supplies the components, and configure accordingly.
- Track the components you send out so nothing goes missing off your books.
- Reconcile finished goods received against what you expected.

## My take

Subcontracting is a normal, sensible way to produce, and Odoo lets you do it without losing sight of
your materials, stock or costs. Model the arrangement honestly, whether you supply the parts or the
subcontractor does, and you keep full control of a process that physically happens outside your walls.
For businesses built around outsourced production, this is one of Odoo's quietly valuable features.

Next in the series: keeping standards high with quality control.

*Based on the official [Odoo 19 Manufacturing documentation](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/manufacturing.html). A plain-English guide, not a replacement for the docs.*
