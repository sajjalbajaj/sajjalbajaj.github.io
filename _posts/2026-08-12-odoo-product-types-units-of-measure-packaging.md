---
layout: post
title: "Product Types, Units of Measure and Packaging in Odoo"
date: 2026-08-12 09:00:00 +0530
tags: [Odoo, Odoo 19, Inventory, ERP, Inventory Management, Stock Control, Warehouse Management, ERP Cost]
description: "How Odoo handles product configuration: product types, units of measure and packaging, and why getting these right keeps your inventory accurate."
---

Every accurate inventory starts with well-defined products. Before Odoo can track, value or move
anything, it needs to know what the thing is. This post covers the three configuration basics:
product types, units of measure, and packaging.

## Product types: storable, consumable, service

Odoo asks one important question about every product: does it need stock tracking?

- **Storable products** are the ones Odoo tracks quantities for. If you want to know how many you
  have on hand, this is the type to use. Almost everything in a warehouse is storable.
- **Consumable products** are physical goods you do not want to track quantities of, low-value items
  you never count, for example.
- **Service products** are not physical at all, like a consulting hour or a delivery charge.

Choosing the right type matters, because only storable products flow through the full inventory
logic of stock levels, reordering and valuation.

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
