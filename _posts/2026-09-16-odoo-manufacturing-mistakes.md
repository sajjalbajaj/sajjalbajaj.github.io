---
layout: post
title: "Common Mistakes in Odoo Manufacturing"
date: 2026-09-16 08:00:00 +0530
tags: [Odoo, Odoo 19, Manufacturing, MRP, ERP]
description: "The manufacturing mistakes that cause the most trouble in Odoo, from inaccurate bills of materials to ignoring work centers, and how to keep production running clean."
---

Manufacturing is unforgiving of bad data, because a wrong bill of materials or a missing work center shows up
immediately on the shop floor. Most Odoo manufacturing problems trace back to a few common mistakes. Continuing this
series on common Odoo mistakes, here is Manufacturing.

## Inaccurate bills of materials

The bill of materials is the recipe for what you make, and if it is wrong, everything built on it is wrong: stock
consumption, costing, planning. Businesses often set up BoMs roughly and never revisit them, so they drift from
reality. Keep BoMs accurate and current, because almost everything in manufacturing depends on them.

## Changing BoMs without control

The flip side of accuracy is control. Editing a bill of materials directly whenever something changes means nobody
knows which version is right, and the shop floor may build from outdated information. This is exactly what PLM and
engineering change orders exist for. Manage changes properly rather than quietly editing the recipe.

## Ignoring work centers and capacity

Manufacturing orders alone do not tell you whether you can actually make everything on time. Skipping work centers
means you cannot see capacity, and you end up promising more than the floor can deliver. Model your work centers so
planning reflects real capacity, not wishful thinking.

## Not tracking components properly

If component stock is not tracked accurately, manufacturing orders stall for want of parts nobody knew were missing.
Manufacturing depends entirely on good inventory underneath it. Get the components right and production flows; get them
wrong and you are constantly chasing shortages.

## Overlooking subcontracting features

Businesses that send work out to subcontractors sometimes handle it with manual workarounds, missing that Odoo supports
subcontracting directly. That means lost visibility over stock and cost at the subcontractor. If you subcontract, use
the features built for it rather than bolting on spreadsheets.

## Practical tips

- Keep bills of materials accurate and review them regularly.
- Manage BoM changes through controlled change orders, not ad-hoc edits.
- Model work centers so planning reflects real capacity.
- Keep component inventory accurate so orders do not stall.
- Use Odoo's subcontracting features instead of manual workarounds.

## My take

Manufacturing in Odoo works beautifully when the data underneath it is clean, and falls apart when it is not. Accurate,
controlled bills of materials, modelled work centers and reliable component stock are the foundation. Get those right
and the shop floor runs on the system rather than around it, which is the whole point.

Next in this series: common mistakes in Odoo CRM and Sales.

*Based on the official [Odoo 19 Manufacturing documentation](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/manufacturing.html). Want production running clean? [Get in touch](/services/odoo-implementation/).*
