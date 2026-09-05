---
layout: post
title: "Common Mistakes in Odoo Inventory (and How to Avoid Them)"
date: 2026-09-15 09:00:00 +0530
tags: [Odoo, Odoo 19, Inventory, ERP, Warehouse]
description: "The inventory mistakes that quietly wreck stock accuracy in Odoo, from ignoring units of measure to skipping reordering rules, and how to fix them."
---

Inventory is where a lot of businesses feel the pain of a badly set up system, because stock either says one thing and
reality says another. Most of the time it traces back to a few common mistakes. Continuing this series on common Odoo
mistakes, here is Inventory.

## Getting units of measure wrong

Units of measure trip up more inventory setups than almost anything. Buying in boxes, storing in units and selling in
packs, all of one product, has to be modelled correctly or your quantities and costs go haywire. Take the time to set
units of measure properly up front; fixing it later is painful.

## Not using reordering rules

Many teams keep buying stock by gut feel long after Odoo could be prompting them automatically. Reordering rules, with
sensible minimum and maximum levels, let the system tell you what to buy and when. Skipping them means stockouts,
overstocking, and a lot of manual watching that the system could do for you.

## Never doing inventory adjustments

If you never reconcile the system against physical stock, small errors accumulate until the numbers are meaningless.
Regular inventory adjustments or cycle counts keep the system honest. A system nobody trusts gets worked around, and
then it is worth nothing.

## Ignoring lot and serial tracking when you need it

Businesses that genuinely need traceability, food, pharma, anything with recalls, sometimes skip lot and serial
tracking because it feels like extra effort. Then a problem hits and they cannot trace a batch. If you need
traceability, set it up from the start, not after the incident.

## Sloppy warehouse and location setup

Dumping everything into one location because it is simpler throws away much of what Odoo can do. A sensible location
structure lets you see where stock actually is, run proper picking, and understand your operations. A little structure
here pays back every day.

## Practical tips

- Model units of measure correctly before you import a single product.
- Turn on reordering rules so the system flags what to buy.
- Run regular adjustments or cycle counts to keep stock accurate.
- Use lot and serial tracking if your industry needs traceability.
- Give your warehouse a sensible location structure from the start.

## My take

Inventory rewards care at setup and punishes shortcuts. Almost every "Odoo inventory is wrong" complaint traces back to
units of measure, missing reordering rules or a system nobody reconciles. Get those right and stock accuracy stops
being a running battle and becomes something you can actually rely on.

Next in this series: common mistakes in Odoo Accounting.

*Based on the official [Odoo 19 Inventory documentation](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory.html). Want help getting your stock right? [Get in touch](/services/odoo-implementation/).*
