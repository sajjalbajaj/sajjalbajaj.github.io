---
layout: post
title: "Removal Strategies in Odoo: FIFO, LIFO and FEFO Explained"
date: 2026-08-14 09:00:00 +0530
tags: [Odoo, Odoo 19, Inventory, Warehouse, ERP]
description: "What removal strategies are in Odoo and how FIFO, LIFO and FEFO decide which stock to pick first, with plain examples of when to use each."
---

When you have the same product sitting in several places or from several batches, which units should
you ship first? That decision is a removal strategy, and Odoo automates it. It sounds like a small
detail, but for perishable or tracked goods it is a big one. Here are the main strategies in plain
English.

## FIFO: First In, First Out

FIFO ships the oldest stock first. The first units to arrive are the first to leave.

This is the most common and usually the most sensible default. It keeps stock rotating, stops items
ageing at the back of the shelf, and generally reflects how goods should flow. For most businesses,
FIFO is the right starting point.

## LIFO: Last In, First Out

LIFO ships the newest stock first. The most recently received units leave first.

This is less common and used in specific situations, often for accounting or valuation reasons in
certain regions and industries. It is not usually how you want physical goods to move, since older
stock can languish, so use it deliberately, not by accident.

## FEFO: First Expired, First Out

FEFO ships the stock that expires soonest first, based on expiration dates rather than arrival order.

For anything perishable, food, pharmaceuticals, chemicals, cosmetics, this is the one that matters.
It ensures you sell or use items before they expire, cutting waste and protecting customers. FEFO
relies on the expiry dates you capture through lot tracking, which is why those two features work hand
in hand.

## Choosing the right one

A simple way to think about it:

- **Most businesses:** FIFO. Keep stock rotating, oldest out first.
- **Perishables or dated goods:** FEFO. Expiry beats arrival order.
- **Specific accounting or industry reasons:** LIFO, used knowingly.

Odoo applies your chosen strategy automatically when it reserves and picks stock, so the right units
are selected without your team having to remember the rule on every order.

## Why automating this helps

Left to people, "which one do I pick" gets decided by whatever is nearest or easiest, and that is how
expired goods slip out and old stock gathers dust. Letting Odoo enforce the strategy removes the guess
and the human error, and quietly protects both your margins and your customers.

## My take

Removal strategies are a small setting with an outsized impact. Pick FIFO as a sensible default, reach
for FEFO the moment expiry dates are in play, and use LIFO only when you have a specific reason. Set it
once, and Odoo makes the right call on every pick.

Next in the series: connecting stock to your accounts with inventory valuation.

*Based on the official [Odoo 19 Inventory documentation](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory.html). A plain-English guide, not a replacement for the docs.*
