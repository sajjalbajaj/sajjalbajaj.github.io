---
layout: post
title: "Lot and Serial Number Tracking in Odoo Inventory"
date: 2026-08-12 10:00:00 +0530
tags: [Odoo, Odoo 19, Inventory, Warehouse, ERP]
description: "How Odoo tracks individual items with lot and serial numbers, when to use each, and how it powers traceability and recalls."
---

Sometimes knowing you have fifty units is not enough. You need to know exactly which fifty, where
they came from, and where they went. That is what lot and serial number tracking in Odoo is for, and
for many businesses it is essential.

## Lot numbers vs serial numbers

Both track individual items, but at different levels of detail.

- **Lot numbers** track a batch of items together. A production run, a delivery from a supplier, or a
  batch with the same expiry date all share one lot number. Perfect for food, chemicals,
  pharmaceuticals and anything made or received in batches.
- **Serial numbers** track a single, unique item. Each unit has its own number. Ideal for
  high-value or regulated goods like electronics, machinery or vehicles, where you need the history
  of one specific item.

The rule of thumb: use lots when items move in batches, and serials when each unit needs its own
identity.

## Turning it on

Tracking is set per product, so you only apply it where it earns its keep. You enable lot or serial
tracking on the product, and from then on Odoo asks for the number whenever that product is received,
moved or delivered. It becomes part of the normal flow rather than an extra chore.

## Why it is powerful: traceability

The real payoff is traceability. Because Odoo records the lot or serial on every movement, you can
trace an item's full journey: which supplier it came from, which operations it passed through, and
which customer received it.

That matters most when something goes wrong. If a batch is faulty, you can find every place it went
in seconds and act, instead of guessing or recalling everything. For regulated industries, this is
not a nice-to-have, it is a requirement.

## Expiration dates

Closely related is expiry tracking. For perishable goods, Odoo can record expiration dates against
lots and help you use the oldest stock first, so you sell or consume items before they expire and cut
waste. This pairs naturally with the FEFO removal strategy we will cover later in the series.

## A word of caution

Tracking adds discipline. Every receipt, transfer and delivery now needs the right number captured,
so your process and your team have to keep up. Turn it on where it genuinely adds value, not
everywhere by default, or you add friction without benefit.

## My take

Lot and serial tracking turns your inventory from "how many" into "exactly which," and that
difference is the foundation of real traceability, safer recalls and compliance. Use lots for
batches, serials for unique items, and switch it on where it matters. When you need it, nothing else
comes close.

Next in the series: warehouses, locations and operation types.

*Based on the official [Odoo 19 Inventory documentation](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory.html). A plain-English guide, not a replacement for the docs.*
