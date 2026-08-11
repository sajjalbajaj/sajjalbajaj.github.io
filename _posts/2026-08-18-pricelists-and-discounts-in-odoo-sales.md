---
layout: post
title: "Pricelists and Discounts in Odoo Sales"
date: 2026-08-18 10:00:00 +0530
tags: [Odoo, Odoo 19, Sales, ERP]
description: "How Odoo pricelists and discounts let you price the right way for each customer, quantity or period, without constant manual overrides."
---

Pricing is rarely one-size-fits-all. Different customers, quantities, currencies and promotions all pull
your prices in different directions. Odoo pricelists let you handle that properly, so the right price
applies automatically instead of being typed in by hand every time. Here is how they work.

## What a pricelist is

A pricelist is a set of rules that decides the price of your products in a given situation. Rather than a
single fixed price per product, you define the conditions under which prices change, and Odoo applies the
right one when you build a quotation.

## What pricelists can do

Pricelists are flexible. Common uses include:

- **Customer-specific pricing:** a wholesale customer sees different prices than a retail one.
- **Quantity breaks:** the unit price drops when a customer buys more.
- **Time-limited promotions:** a discount that applies only during a set period.
- **Currency-based pricing:** the right prices for customers in different currencies.
- **Formula-based rules:** prices derived from a cost or another price, such as a percentage margin.

Set the rules once, and Odoo picks the correct price automatically based on who is buying, how much, and
when. That removes both the manual effort and the human error of hand-pricing every order.

## Discounts

Alongside pricelists, Odoo supports discounts on quotations and orders. You can apply a discount to a line
or an order when it makes sense, and control who is allowed to. The key is that discounting stays visible
and deliberate, rather than prices quietly drifting through untracked manual edits.

## Why structure beats manual pricing

When pricing lives in rules, it is consistent, auditable and fast. Everyone quotes the agreed prices,
promotions start and stop on time, and you can see how discounting affects your margins. When pricing
lives in people's heads and manual overrides, it is inconsistent and hard to control. Pricelists move you
from the second world to the first.

## Practical tips

- Start with the pricing situations you actually have, wholesale versus retail, quantity breaks, rather
  than every theoretical case.
- Use time-limited pricelists for promotions so they end automatically.
- Keep discounting deliberate and visible, and set who can apply it.
- Review your pricelists periodically as costs and strategy change.

## My take

Pricelists turn pricing from a manual chore into a reliable system. Model your real pricing situations,
lean on rules rather than overrides, and keep discounts deliberate. Your team quotes consistently, your
promotions behave, and you keep a clear eye on your margins, which is exactly what good pricing control
looks like.

Next in the series: deciding when to invoice with invoicing policies.

*Based on the official [Odoo 19 Sales documentation](https://www.odoo.com/documentation/19.0/applications/sales/sales.html). A plain-English guide, not a replacement for the docs.*
