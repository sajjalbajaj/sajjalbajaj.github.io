---
layout: post
title: "How to Set Up Taxes and Fiscal Positions in Odoo"
date: 2026-09-22 09:00:00 +0530
tags: [Odoo, Odoo 19, Setup, Accounting, ERP]
description: "A plain-English guide to configuring taxes and fiscal positions in Odoo, so the right tax is applied automatically on every invoice and bill."
---

Tax is fiddly, and getting it wrong means wrong invoices and awkward corrections. Odoo handles tax well once it is set
up properly, and fiscal positions are the clever part that applies the right tax automatically. Continuing this series
of practical Odoo how-to guides, here is taxes and fiscal positions.

## Start with the taxes you actually use

Odoo's country templates come with the standard taxes for your jurisdiction already set up, so most businesses do not
start from scratch. Check that the taxes you actually charge and pay are present and correct, your standard sales tax,
reduced rates, any special cases, and set the right default so it applies without thinking on most transactions.

## Understand sales versus purchase taxes

Tax works on two sides: the tax you charge customers on sales, and the tax you pay suppliers on purchases. Odoo keeps
these separate, which is what lets it report what you owe and what you can reclaim correctly. Make sure both sides are
set up, not just the sales side, so your tax reporting is complete.

## What fiscal positions do

A fiscal position is a rule that automatically swaps taxes based on the customer or supplier. For example, a customer in
another country or a tax-exempt customer should not be charged your standard domestic tax. Instead of remembering to
change the tax manually every time, a fiscal position does it for you, correctly, on every relevant transaction.

## Set up fiscal positions for your cases

Think about the different situations you deal with: domestic customers, customers abroad, tax-exempt organisations,
special zones. Set up a fiscal position for each so the right tax applies automatically depending on who you are dealing
with. This is where you prevent a whole category of tax mistakes before they happen.

## Test with real scenarios

Before relying on it, create test invoices for your main scenarios, a normal domestic sale, an export, an exempt
customer, and confirm the right tax appears. A few minutes of testing catches setup mistakes while they are harmless,
rather than discovering them on a real customer invoice.

## Practical tips

- Check your country's default taxes are present and set a sensible default.
- Set up both sales and purchase taxes so reporting is complete.
- Use fiscal positions to swap taxes automatically by customer or supplier.
- Create a fiscal position for each real situation you deal with.
- Test with real invoice scenarios before relying on the setup.

## My take

Taxes and fiscal positions are where a bit of careful setup prevents a lot of ongoing errors. The taxes themselves come
largely ready from the country template; the real win is using fiscal positions so the correct tax applies
automatically for every kind of customer. Set that up and tested, and your invoices are right without anyone having to
remember the rules.

Next in this series: how to set up your products.

*Based on the official [Odoo 19 fiscal positions documentation](https://www.odoo.com/documentation/19.0/applications/finance/accounting/taxes/fiscal_positions.html). Want tax set up correctly? [Get in touch](/services/odoo-implementation/).*
