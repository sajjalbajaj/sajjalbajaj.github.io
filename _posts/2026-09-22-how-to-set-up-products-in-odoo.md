---
layout: post
title: "How to Set Up Products in Odoo"
date: 2026-09-22 10:00:00 +0530
tags: [Odoo, Odoo 19, Setup, Products, ERP, Accounting, Finance, Inventory Management]
description: "A plain-English guide to setting up products in Odoo, from product types to units of measure and variants, so sales, stock and accounting all behave."
---

Products sit at the centre of Odoo: they drive sales, purchases, stock and costing. Setting them up correctly is what
makes all of those work smoothly, and getting the basics wrong causes trouble everywhere. Continuing this series of
practical Odoo how-to guides, here is setting up products.

## Choose the right product type

The first decision for each product is its type, and it matters more than it looks. A storable product is tracked in
stock; a consumable is bought and used but not stock-tracked; a service is not physical at all. Choosing the right type
determines whether Odoo manages inventory for it, so get this right per product from the start.

## Get units of measure right

If you buy, store and sell in different units, boxes, packs, individual items, you must set the units of measure
correctly. This is one of the most common setup mistakes, and it throws off quantities and costs when wrong. Take the
time to model your units properly; it saves a great deal of confusion later.

## Set prices and costs

Each product carries a sales price and a cost. The sales price drives your quotes and invoices; the cost feeds your
margins and inventory valuation. Set both thoughtfully, and understand that cost may be updated automatically depending
on your valuation method. Accurate prices and costs are what make your sales and reporting meaningful.

## Use variants for genuine variations

If a product comes in several colours or sizes, use variants rather than creating a separate product for each. Variants
keep related items tidy under one product with its options, which is far easier to manage than dozens of near-identical
separate products. Reserve them for real variations of the same thing.

## Organise with categories

Product categories keep your catalogue manageable and also drive some accounting and inventory behaviour behind the
scenes. A sensible category structure makes products easier to find and report on, and keeps the setup tidy as your
catalogue grows. A little organisation here pays off every time you search or report.

## Practical tips

- Choose the correct product type; it decides whether stock is tracked.
- Set units of measure carefully if you buy, store and sell differently.
- Set both sales price and cost thoughtfully for correct margins.
- Use variants for real variations, not separate near-identical products.
- Organise products into sensible categories from the start.

## My take

Products are central enough that getting them right pays off across the whole system, and getting them wrong causes
scattered problems that are hard to trace. The right type, correct units of measure, sensible prices and tidy variants
and categories are the foundation. Set products up with care and sales, stock and accounting all behave; rush them and
you will be untangling issues for months.

Next in this series: how to set up a warehouse and locations.

*Based on the official [Odoo 19 product type documentation](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/product_management/configure/type.html). Want your catalogue set up right? [Get in touch](/services/odoo-implementation/).*
