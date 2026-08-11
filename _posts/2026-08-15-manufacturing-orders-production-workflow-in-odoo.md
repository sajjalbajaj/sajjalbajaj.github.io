---
layout: post
title: "Manufacturing Orders: The Production Workflow in Odoo"
date: 2026-08-15 10:00:00 +0530
tags: [Odoo, Odoo 19, Manufacturing, MRP, ERP]
description: "How a manufacturing order works in Odoo from draft to done, how it consumes components and produces finished goods, and how it keeps stock accurate."
---

The Bill of Materials is the recipe and work orders are the steps. The manufacturing order is the
instruction that ties them together and actually gets something made. Understanding its workflow is
the key to running production smoothly in Odoo.

## What a manufacturing order is

A manufacturing order, or MO, is the instruction to produce a specific quantity of a product. When you
create one, Odoo pulls in the product's Bill of Materials, works out the components required, and
reserves them from stock. Everything needed to make the item is gathered in one place.

## The workflow, stage by stage

An MO moves through a clear set of stages:

- **Draft:** the order is created but not yet committed. You can still adjust it.
- **Confirmed:** the order is firm, and Odoo checks and reserves the components.
- **In progress:** production is underway; if you use work orders, your team works through the steps.
- **Done:** production is complete.

At each stage you can see exactly where the order stands, which is the visibility that keeps a busy
production floor under control.

## What happens to your stock

This is the part that keeps your inventory honest. When the manufacturing order is completed, Odoo does
the bookkeeping automatically: it removes the consumed components from stock and adds the finished
product. Your on-hand quantities update themselves, with no separate data entry.

That automatic movement is why manufacturing has to sit inside the ERP, not in a spreadsheet beside it.
The moment you produce, sales can see the finished goods and purchasing can see the components are gone.

## Handling the real world

Production is rarely perfect, and Odoo has room for that:

- **Partial production and backorders:** if you make fewer than planned, Odoo can handle the remainder.
- **Scrap:** if components or output are damaged, you can scrap them so stock reflects reality.
- **Component swaps:** you can adjust what was actually consumed when the real world differs from the
  recipe.

Capturing these honestly keeps both your stock and your product costs accurate.

## Keeping it smooth

A few pointers:

- Make sure components are in stock or on order before you confirm, so production is not starved.
- Record actual consumption and any scrap, rather than assuming the recipe was followed exactly.
- Use the stages to keep everyone clear on what is planned, running and finished.

## My take

The manufacturing order is where planning becomes product. Follow its workflow, let Odoo consume
components and create finished goods automatically, and record the messy real-world bits honestly, and
your production and your stock stay perfectly in step. That connection is the whole reason to run
manufacturing inside your ERP.

Next in the series: outsourcing production with subcontracting.

*Based on the official [Odoo 19 Manufacturing documentation](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/manufacturing.html). A plain-English guide, not a replacement for the docs.*
