---
layout: post
title: "Automating Purchasing in Odoo: Reordering Rules and Lead Times"
date: 2026-08-17 10:00:00 +0530
tags: [Odoo, Odoo 19, Purchase, Inventory, ERP]
description: "How Odoo automates purchasing with reordering rules, make-to-order and vendor lead times, so you reorder the right amounts at the right time."
---

The best purchasing is the kind you barely have to think about: stock tops itself up before you run out,
without over-ordering. Odoo gets you close to that by linking purchasing to inventory and automating the
routine buying. Here is how the pieces fit.

## Reordering rules trigger purchasing

We met reordering rules in the inventory part of this series, and this is where they pay off for buying.
When you set a minimum and maximum stock level for a product, Odoo watches the level for you. When stock
drops to the minimum, it proposes replenishing back to the maximum.

For a bought-in product, that proposal becomes a request for quotation or purchase order to the right
supplier. Your buying turns into reviewing sensible suggestions rather than constantly checking what is
running low.

## Make-to-order: buy against demand

Some items should not be stocked at all. With make-to-order, Odoo waits for real demand, a sales order,
and then triggers the purchase to fulfil exactly that. Nothing sits on the shelf; the buy happens because
a customer actually wants it. This suits bespoke, bulky or expensive items you would rather not hold.

## Lead times keep it on schedule

Automation is only useful if it respects time. Vendor lead times tell Odoo how long a supplier takes to
deliver, and your own purchase lead time adds any internal processing.

Odoo uses these to work backwards from when you need the goods to when you must place the order, so it
prompts you early enough. Accurate lead times are the difference between stock that arrives just in time
and stock that is always slightly late.

## Putting it together

The combination is what makes purchasing feel effortless:

- Reordering rules watch your stock and propose replenishment.
- The right supplier and price come from your vendor pricelists.
- Lead times make sure the timing is realistic.
- You review and confirm, and the goods are on their way.

## Practical tips

- Start with reordering rules on your most important products, not everything.
- Keep vendor lead times honest; optimistic ones cause stockouts.
- Use make-to-order for what you should not stock, and rules for what you should.
- Review the suggestions Odoo makes, especially early on, and tune your min and max levels.

## My take

Automated purchasing is where inventory and buying come together to save real time and money. Let
reordering rules and make-to-order do the watching, feed them accurate lead times, and keep a human eye
on the suggestions. Purchasing stops being a scramble and becomes a calm, reliable routine, which is
exactly what a good ERP should give you.

This completes the Manufacturing and Purchase part of the series. Next we move on to Sales and CRM.

*Based on the official [Odoo 19 Purchase documentation](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/purchase.html). A plain-English guide, not a replacement for the docs.*
