---
layout: post
title: "Shipping and Receiving in Odoo: Inbound and Outbound Flows"
date: 2026-08-14 08:00:00 +0530
tags: [Odoo, Odoo 19, Inventory, Warehouse, ERP, Inventory Management, Stock Control, Warehouse Management]
description: "How Odoo handles goods coming in and going out, from simple one-step flows to multi-step receiving and dispatch, plus carriers and reservations."
---

Stock is only useful when it moves: in from suppliers, out to customers. Odoo gives you real control
over these inbound and outbound flows, from dead simple to genuinely sophisticated. Here is how
shipping and receiving works.

## One step, two steps, three steps

The key idea is that you choose how many steps a flow has, to match how your warehouse really works.

**Receiving (inbound):**

- **One step:** goods arrive and go straight into stock. Simple and fast.
- **Two steps:** goods are received, then put away to their storage location.
- **Three steps:** goods are received, inspected or checked for quality, then put away.

**Delivery (outbound):**

- **One step:** pick and ship in a single move.
- **Two steps:** pick the goods, then pack and ship.
- **Three steps:** pick, pack, then ship.

A small shop might run everything in one step. A larger operation with quality checks and a packing
station needs more. Odoo lets each warehouse pick the level that fits.

## Reservations: promising the right stock

When an order needs fulfilling, Odoo reserves stock for it so the same units are not promised twice.
You can control how and when that reservation happens, immediately, or only when you are ready to
process the order, which keeps busy warehouses from tripping over themselves.

## Carriers and delivery methods

For outbound goods, Odoo supports delivery methods and integrations with shipping carriers. That can
mean calculating shipping costs, producing labels, and passing tracking information back, so
dispatch becomes part of the same smooth flow rather than a separate manual job.

## Why the flexibility matters

The reason Odoo offers one, two and three step flows is that forcing every business into the same
process is exactly what makes software painful. A quality-critical importer and a quick-turnaround
retailer have genuinely different needs. Matching the flow to your reality means the system helps
rather than fights you.

## Getting started sensibly

Begin with the simplest flow that is honest about your process. If you do not inspect incoming goods,
do not add an inspection step just because it exists. Add steps only where they reflect real work.
You can always increase the detail as your operation grows.

## My take

Shipping and receiving is where inventory meets the real world of vans, boxes and deadlines. Odoo's
step-based flows let you model exactly how goods move through your business, no more and no less.
Start simple, match the steps to reality, and both your receipts and your dispatches stay fast and
accurate.

Next in the series: how Odoo decides which stock to pick first, with removal strategies.

*Based on the official [Odoo 19 Inventory documentation](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory.html). A plain-English guide, not a replacement for the docs.*
