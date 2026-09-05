---
layout: post
title: "How to Set Up a Bill of Materials in Odoo"
date: 2026-09-24 08:00:00 +0530
tags: [Odoo, Odoo 19, Setup, Manufacturing, MRP]
description: "A plain-English guide to setting up a bill of materials in Odoo, the recipe behind everything you make, so manufacturing, stock and costing all work."
---

If you make things, the bill of materials is where manufacturing begins. It is the recipe that tells Odoo what goes
into a product, and almost everything on the shop floor depends on getting it right. Continuing this series of practical
Odoo how-to guides, here is the bill of materials.

## What a bill of materials is

A bill of materials, or BoM, lists the components and quantities needed to make one unit of a product. When you
manufacture, Odoo reads the BoM to know what to consume and what results. It is the single source of truth for how a
product is built, which is why accuracy here matters so much.

## Start with the finished product and its components

To create a BoM, you choose the product you are making and then list each component and how much of it goes in. Get the
quantities right, because they drive stock consumption and costing. A BoM that says two when it means three quietly
throws off your inventory and your margins every time you build.

## Choose the right BoM type

Odoo supports different BoM types. A standard manufacturing BoM produces a product from components. A kit, by contrast,
is a set of products sold together but not really "manufactured". Choosing the right type matters, because it changes
how Odoo handles stock and the sale. Pick the one that matches what you actually do.

## Add operations if you track them

If you want to track the steps and work centers involved in making the product, you can add operations to the BoM. This
connects to work orders and lets you see time and capacity. If you do not need that detail yet, you can keep the BoM
simple and add operations later as your setup matures.

## Keep BoMs accurate and controlled

A BoM is not set once and forgotten; products change. The important thing is to keep BoMs accurate and to manage changes
in a controlled way rather than quietly editing them, so the shop floor always builds from the right version. Accuracy
and control here protect quality and costing alike.

## Practical tips

- List every component and get the quantities exactly right.
- Choose the correct BoM type: manufacturing versus a kit.
- Add operations and work centers only if you track that detail.
- Keep BoMs accurate as products evolve.
- Manage BoM changes in a controlled way, not by ad-hoc edits.

## My take

The bill of materials is the foundation of everything in manufacturing, so care here pays off across stock, costing and
production. Get the components and quantities right, pick the correct type, and keep it accurate and controlled, and the
shop floor runs on reliable recipes. Rush the BoM and every build inherits the error, so it is worth doing properly.

Next in this series: how to set up your CRM pipeline.

*Based on the official [Odoo 19 bill of materials documentation](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/manufacturing/basic_setup/bill_configuration.html). Setting up manufacturing? [Get in touch](/services/odoo-implementation/).*
