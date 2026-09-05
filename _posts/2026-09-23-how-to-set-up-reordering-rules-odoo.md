---
layout: post
title: "How to Set Up Reordering Rules in Odoo"
date: 2026-09-23 09:00:00 +0530
tags: [Odoo, Odoo 19, Setup, Inventory, Purchase]
description: "A plain-English guide to setting up reordering rules in Odoo, so the system tells you what to buy and when, ending both stockouts and overstocking."
---

Reordering rules are one of the highest-value things you can set up in Odoo, because they turn buying from a manual,
error-prone chore into something the system prompts you about automatically. Continuing this series of practical Odoo
how-to guides, here is reordering rules.

## What a reordering rule does

A reordering rule watches a product's stock and tells you to replenish it when it runs low. You set a minimum quantity
and a maximum, and when stock falls to the minimum, Odoo proposes bringing it back up to the maximum, either by
purchasing or by manufacturing. It is the system doing your reorder-watching for you.

## Set sensible minimum and maximum levels

The rule is only as good as the numbers you give it. The minimum should cover demand during the time it takes to
restock, so you do not run out while waiting. The maximum sets how much you bring in at once, balancing not running out
against not tying up cash in excess stock. Set these thoughtfully per product.

## Account for lead time

How long a product takes to arrive after you order matters a great deal. If a supplier takes two weeks, your minimum
must cover two weeks of demand or you will run dry. Building lead time into your levels is what makes reordering rules
actually prevent stockouts rather than just flagging them once it is already too late.

## Choose purchase or manufacture

For a bought-in product, the rule generates a purchase suggestion; for something you make, it can trigger manufacturing.
Make sure each product is set up to replenish the right way, so the rule proposes the correct action. This is what
connects reordering to your actual supply process.

## Review and adjust over time

Demand changes, suppliers change, seasons change. Reordering levels set once and never revisited drift out of line with
reality. Review them periodically, especially on your important products, and adjust as your business evolves.
Reordering rules are a living setting, not a set-and-forget one.

## Practical tips

- Set a minimum that covers demand during your restock time.
- Set a maximum that balances availability against tied-up cash.
- Build supplier lead time into your minimum so you do not run dry.
- Make sure each product replenishes the right way: buy or make.
- Review levels regularly as demand and suppliers change.

## My take

Reordering rules are where Odoo stops being a record of your stock and starts actively helping you manage it. With
sensible levels that account for lead time, the system watches your stock so you do not have to, ending both the
stockouts and the overstocking that come from buying by gut feel. It is a small setup with an outsized payoff.

Next in this series: how to set up your sales workflow from quotation to invoice.

*Based on the official [Odoo 19 reordering rules documentation](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/warehouses_storage/replenishment/reordering_rules.html). Want smarter stock replenishment? [Get in touch](/services/odoo-consulting/).*
