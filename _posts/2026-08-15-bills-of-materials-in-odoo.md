---
layout: post
title: "Bills of Materials in Odoo: Kits, Variants and Multi-Level BoMs"
date: 2026-08-15 08:00:00 +0530
tags: [Odoo, Odoo 19, Manufacturing, MRP, ERP]
description: "A plain-English guide to Bills of Materials in Odoo: what a BoM is, plus kits, product variants, multi-level BoMs and by-products explained."
---

If you make things, the Bill of Materials is the single most important record you will set up. Every
manufacturing order, cost and stock movement flows from it. Odoo goes well beyond a simple parts
list, so here is a plain-English guide to Bills of Materials and the useful variations.

## What a Bill of Materials is

A Bill of Materials, or BoM, is the recipe for a product: the list of components and the quantities
needed to make one finished item. When you produce ten units, Odoo reads the BoM and knows to consume
ten times each component from stock. No manual maths, no guesswork about what you used.

That one record drives everything downstream: what to reserve, what to buy, what a product costs, and
how stock moves when you produce.

## Kits: sold as one, handled as parts

A kit is a special BoM (sometimes called a phantom) where there is no real manufacturing step. The
product is really just a bundle of components sold together. When a kit is sold, Odoo delivers the
individual parts and deducts them from stock, rather than treating the kit as a stocked item itself.

Kits are perfect for sets and bundles: a gift box, a starter pack, a set of fittings. You sell one
line, and Odoo handles the components underneath.

## Variants: one product, many versions

If a product comes in variants, sizes, colours, materials, Odoo lets your BoM adapt. You can apply
specific components only to specific variants, so a red version uses red parts and a large version
uses more material, all from a sensible structure rather than a separate product for every combination.

## Multi-level BoMs: assemblies within assemblies

Real products are often built from subassemblies that are themselves manufactured. Odoo handles this
with multi-level BoMs: a component in one BoM can have its own BoM. A bicycle needs a wheel; the wheel
has its own recipe of rim, spokes and tyre.

Odoo understands the whole tree, so it can plan production and purchasing at every level, not just the
top one. This is what lets Odoo scale from simple assembly to genuinely complex manufacturing.

## By-products

Some processes create more than one output: a main product plus a by-product. Odoo lets a BoM record
these secondary outputs, so everything you actually produce is captured in stock, not just the primary
item.

## Getting BoMs right

A few practical habits:

- Keep quantities and units of measure accurate; a small error here multiplies across every order.
- Use multi-level BoMs to reflect real subassemblies rather than one giant flat list.
- Reach for kits when there is no real production step, just a bundle.
- Review BoMs when your product or process changes, so the recipe stays true.

## My take

The Bill of Materials is the foundation of Odoo Manufacturing, and time spent getting it right pays
back on every single order. Model your products honestly, use kits, variants and multi-level BoMs where
they fit, and the rest of production planning and costing rests on solid ground.

Next in the series: where the work happens, with work centers and work orders.

*Based on the official [Odoo 19 Manufacturing documentation](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/manufacturing.html). A plain-English guide, not a replacement for the docs.*
