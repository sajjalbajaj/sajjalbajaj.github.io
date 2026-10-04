---
layout: post
title: "Product Types, Units of Measure and Packaging in Odoo"
last_modified_at: 2026-10-04
date: 2026-08-12 09:00:00 +0530
tags: [Odoo, Odoo 19, Inventory, ERP, Inventory Management, Stock Control, Warehouse Management, ERP Cost]
hub: inventory
description: "How Odoo handles product configuration: product types, units of measure and packaging, and why getting these right keeps your inventory accurate."
---

Every accurate inventory starts with well-defined products. Before Odoo can track, value or move
anything, it needs to know what the thing is. This post covers the three configuration basics:
product types, units of measure, and packaging.

## Product types: goods, services and combos

Odoo 19 asks two questions about every product. First, what kind of thing is it?

- **Goods** are physical items, from raw materials to finished products.
- **Services** are not physical at all, like a consulting hour or an installation.
- **Combos** bundle goods and services together, such as equipment sold with an installation.

Second, for goods: should Odoo track how many you have? That is the **Track Inventory** checkbox. Tick it for
anything you count, value, reorder or trace by lot or serial number; you then choose to track by quantity, by
lots or by unique serial numbers. Leave it unticked for low-value items you never count, such as office supplies.

Getting this right matters, because only tracked goods get on-hand and forecasted quantities, reordering rules,
inventory adjustments and stock valuation. (Older Odoo versions called these "storable" and "consumable"
products; Odoo 18 and 19 use Goods plus the Track Inventory checkbox instead.)

For the exact clicks, see my step-by-step guide:
[how to set up products and units of measure in Odoo 19](/blog/2026/09/22/how-to-set-up-products-in-odoo/).

## Units of measure: buy in one, sell in another

This is one of Odoo's genuinely useful features. A unit of measure is simply how you count a
product: pieces, kilograms, litres, boxes, metres.

The clever part is that Odoo can convert between units in the same category. You might buy a raw
material by the tonne, store it by the kilogram, and use it by the gram. Set the conversions once,
and Odoo keeps the maths straight everywhere: purchasing, stock and production. This removes a whole
class of manual errors.

To use this well, keep your unit categories sensible and your conversion factors accurate. A wrong
conversion quietly corrupts every number that depends on it.

## Packaging: selling in groups

Packaging describes how a product is grouped for handling or sale. A drink might be a single can, a
six-pack, or a pallet of cases. Packaging lets you define those groupings so people can transact in
whatever unit makes sense, while Odoo still tracks the underlying quantity correctly.

This keeps ordering and picking practical. A customer orders two pallets, your team picks two
pallets, and Odoo knows exactly how many individual units that represents.

## Why this foundation matters

These settings feel like admin, but they are the bedrock of accurate inventory. Get the product type
wrong and Odoo may not track stock at all. Get a unit conversion wrong and your quantities and costs
drift. Skip packaging and everyday handling becomes clumsy. A little care here saves a lot of
cleanup later.

## My take

Product configuration is not glamorous, but it is where inventory accuracy is won or lost. Decide
your product types deliberately, set your units of measure and conversions carefully, and use
packaging where it reflects how you really trade. Do that, and every feature built on top of your
products behaves.

Next in the series: tracking individual items with lot and serial numbers.

*Based on the official [Odoo 19 Inventory documentation](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory.html). A plain-English guide, not a replacement for the docs.*
