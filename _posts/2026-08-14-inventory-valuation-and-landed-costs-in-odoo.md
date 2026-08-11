---
layout: post
title: "Inventory Valuation and Landed Costs in Odoo"
date: 2026-08-14 10:00:00 +0530
tags: [Odoo, Odoo 19, Inventory, ERP, Accounting]
description: "How Odoo values your stock, the difference between costing methods, and how landed costs capture the true cost of getting goods to your door."
---

Your stock is money sitting on a shelf, and your accounts need to reflect that. Inventory valuation
is how Odoo puts a value on what you hold and keeps it in step with your books. Add landed costs, and
you get the true cost of your goods, not just the sticker price. Here is how it works, without the
accounting jargon.

## What inventory valuation means

Valuation answers a simple question: what is the stock you are holding worth? Odoo tracks this
continuously as goods come in and go out, so at any moment you know the value of your inventory, and
that value can flow straight into your financial statements.

## The costing methods

Odoo offers a few ways to decide the cost of each unit. In plain terms:

- **Standard price:** every unit is valued at a fixed cost you set. Simple and predictable, good when
  your costs are stable.
- **First In, First Out (FIFO):** units are valued in the order they arrived, so the cost of goods
  sold reflects your oldest purchase prices first. This mirrors the FIFO removal strategy.
- **Average cost (AVCO):** Odoo keeps a running average cost as new stock arrives at different
  prices, smoothing out fluctuations.

There is no single right answer; the best method depends on your business, your accountant's advice
and, sometimes, local rules. The important thing is to choose deliberately and stay consistent.

## Manual vs automated valuation

Odoo can handle valuation in two ways. With manual (periodic) valuation, you update the accounts
yourself at intervals. With automated (perpetual) valuation, Odoo posts the accounting entries
automatically every time stock moves, keeping inventory and accounts in constant sync. For most
growing businesses, automated valuation is the goal, because it removes manual reconciliation.

## Landed costs: the true cost of goods

Here is a detail many businesses miss. The price on the supplier invoice is rarely the full cost of
getting a product onto your shelf. There is freight, insurance, customs and handling.

Landed costs let you add those extra expenses to the value of the goods they relate to, so each
product carries its true cost. That gives you honest margins and honest stock values, instead of
quietly understating what your inventory really cost you.

## Why this matters

Get valuation right and your balance sheet, your margins and your pricing decisions all rest on real
numbers. Get it wrong, or ignore landed costs, and you may think you are more profitable than you are.
For any business where stock is a big part of the picture, this is not optional detail, it is the
truth of your finances.

## My take

Inventory valuation is where your warehouse meets your accounts. Pick a costing method with your
accountant, lean towards automated valuation so stock and books stay in sync, and use landed costs to
capture what goods really cost you. Do that, and the numbers you run the business on are numbers you
can trust.

This completes the Inventory pillar of the series. Next we move on to the other core Odoo apps.

*Based on the official [Odoo 19 Inventory documentation](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory.html). A plain-English guide, not a replacement for the docs.*
