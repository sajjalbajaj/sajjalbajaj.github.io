---
layout: post
title: "Odoo for Manufacturing: A Practical Introduction to MRP"
date: 2026-07-30 09:00:00 +0530
tags: [ERP, Odoo, Manufacturing, MRP, Inventory]
description: "A plain-English introduction to Odoo Manufacturing (MRP): bills of materials, work orders, routings and how it connects to inventory, for businesses that actually make things."
---

If your business makes things, whether you assemble, build or produce, a spreadsheet and a
whiteboard only get you so far. This is where **Odoo Manufacturing (MRP)** comes in. Here is a
plain-English introduction to what it does and how the pieces fit together.

## What MRP actually means

MRP stands for **Material Requirements Planning**. Strip away the jargon and it answers three
simple questions:

1. What do we need to make, and how many?
2. What materials and steps does each one need?
3. Do we have the materials in stock, or do we need to buy or produce more?

Odoo's Manufacturing app handles all three, and it does it while staying connected to your stock,
your purchasing and your sales. That connection is the whole point of an ERP.

## The building block: the Bill of Materials

Everything in manufacturing starts with the **Bill of Materials (BoM)**. Think of it as the recipe
for a product: the list of components and quantities needed to make one finished item.

A good BoM tells Odoo exactly what to consume when you produce something. Make ten units, and Odoo
knows to deduct ten times the recipe from stock. No manual maths, no guesswork about what you have
left.

Odoo also supports more advanced cases: multi-level BoMs (a component that is itself manufactured),
kits, and variants, so the same structure scales from simple assembly to real production.

## Manufacturing Orders: turning a plan into work

A **Manufacturing Order (MO)** is the instruction to actually produce something. It pulls in the
BoM, reserves the components, and tracks the job from start to finish.

When the order is done, Odoo does the bookkeeping for you: it removes the raw materials from stock
and adds the finished product. Your inventory stays accurate without anyone re-keying it.

## Work Orders and routings: the how, step by step

For anything beyond simple assembly, you can define a **routing**: the sequence of operations
needed to make the product, and the work centre where each step happens.

Odoo then breaks a Manufacturing Order into **Work Orders**, one per operation. Your shop floor can
start, pause and complete each step, often from a tablet at the work centre. That gives you two
things most spreadsheets never will: real-time progress and a genuine record of how long things
take.

## Where it connects to the rest of the business

This is the part that matters most. In Odoo, manufacturing does not sit in a silo:

- **Inventory:** components are reserved and consumed, finished goods are received, all automatically.
- **Purchasing:** if you are short on materials, Odoo can flag it and help you reorder in time.
- **Sales:** a customer order can trigger production, so you make what you actually need.
- **Costing:** you get a clearer picture of what each product really costs to make.

One connected flow, from a sales order to raw materials to a finished product, all in the same
system.

## Planning ahead

Beyond single orders, Odoo helps you plan. Reordering rules keep key components in stock, and
planning tools help you look ahead at what needs producing and whether you have the capacity to do
it. You move from reacting to shortages to seeing them coming.

## Do you need all of it on day one?

No, and you should not try. Start lean:

1. Build accurate Bills of Materials for your main products.
2. Run basic Manufacturing Orders and get your stock moving correctly.
3. Add work centres and routings once the basics are solid.
4. Layer in planning and costing as you grow.

Get the foundation right, keep it clean, and expand from there. That is the same advice I give for
any ERP rollout, and it holds especially true for manufacturing.

## My take

For small and mid-sized manufacturers, Odoo MRP turns making things into a controlled, visible
process instead of a daily scramble. The magic is not any single feature. It is that production,
stock, purchasing and sales finally speak to each other.

If you make products and your current setup is held together by spreadsheets and memory, this is
exactly the kind of problem Odoo solves well. Happy to help you map it out.
