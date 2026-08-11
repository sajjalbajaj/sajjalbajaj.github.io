---
layout: post
title: "Reordering Rules and Replenishment in Odoo Inventory"
date: 2026-08-13 09:00:00 +0530
tags: [Odoo, Odoo 19, Inventory, Warehouse, ERP]
description: "How Odoo automates restocking with reordering rules, make-to-order and lead times, so you avoid stockouts without over-ordering."
---

Running out of stock loses sales. Holding too much ties up cash. The art of inventory is staying in
the sweet spot between them, and Odoo automates most of that work through replenishment. Here is how
reordering rules, make-to-order and lead times fit together.

## Reordering rules: the classic min/max

The workhorse of replenishment is the reordering rule. You set a minimum and a maximum quantity for a
product at a location. When stock falls to or below the minimum, Odoo proposes replenishing back up
to the maximum.

Depending on the product, that replenishment becomes a purchase order to a supplier or a
manufacturing order to produce more. You review and confirm, and the restock is on its way. Set these
rules on your key products and a big part of your buying becomes a checklist instead of a guessing
game.

## Make-to-order: buy or build on demand

Some products should not sit on a shelf at all. With make-to-order, Odoo waits for actual demand, a
sales order, then triggers the purchase or production to fulfil exactly that.

The difference is timing. Reordering rules keep stock on hand for fast fulfilment. Make-to-order
holds nothing and reacts to real orders. Fast movers usually suit reordering rules, while bespoke or
expensive items often suit make-to-order.

## Lead times: planning for reality

None of this works well if it ignores time. Lead times tell Odoo how long things really take: how
long a supplier takes to deliver, how long production runs, how long your own processing adds.

Odoo uses these to work backwards from when you need stock to when you must act, so it prompts you to
order early enough. Accurate lead times are the difference between replenishment that arrives on time
and replenishment that is always slightly too late.

## Getting it right

A few practical pointers:

- Set reordering rules on the products that matter most first, not everything at once.
- Base your min and max on real demand, and revisit them as demand changes.
- Keep supplier and manufacturing lead times honest and up to date.
- Use make-to-order for items you should not stock, and rules for items you should.

## My take

Replenishment is where Odoo quietly saves you money and stress. Done well, it means fewer stockouts,
less cash frozen in excess inventory, and a lot less firefighting. Start with your critical products,
set sensible min and max levels, keep your lead times real, and let the system do the watching.

Next in the series: keeping your on-hand numbers honest with inventory adjustments.

*Based on the official [Odoo 19 Inventory documentation](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory.html). A plain-English guide, not a replacement for the docs.*
