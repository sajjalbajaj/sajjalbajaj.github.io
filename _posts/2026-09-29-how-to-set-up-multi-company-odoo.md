---
layout: post
title: "How to Set Up Multi-Company in Odoo"
date: 2026-09-29 10:00:00 +0530
tags: [Odoo, Odoo 19, Setup, Multi-Company, ERP, Contacts, Customer Management, Accounting]
description: "A plain-English guide to setting up multi-company in Odoo, so you can run several companies in one system with the right separation and shared data."
---

If your business is really several companies, Odoo can run them all in one system, with shared data where it helps and
separation where it matters. It is powerful, and it needs deliberate setup. To round off this series of practical Odoo
how-to guides, here is multi-company.

## Decide if you really need it

First, be honest about whether you need multi-company at all. It is for genuinely separate legal entities, not just
departments or brands within one company. Many businesses that think they need it actually do not, and turning it on
unnecessarily adds complexity. Use it when you truly have multiple companies, and keep it simple otherwise.

## Set up your companies

If you do need it, set up each company with its own details: name, address, tax registration, currency and so on. Each
company keeps its own accounting and documents, which is the point, so that each entity's books and invoices are properly
its own. Getting these details right per company is the foundation of clean multi-company operation.

## Understand shared versus separate data

The key concept is what is shared and what is separate. Some data, like products or contacts, can be shared across
companies, while accounting and documents stay separate per company. Understanding this split is essential, because it
determines how data behaves. Plan deliberately what you want shared and what must be kept apart.

## Set up users and their company access

Users can be given access to one company or several, and can switch between the companies they are allowed to see.
Setting this up correctly means people see and work in the right companies and nothing they should not. This is where
multi-company and access rights meet, and getting it right keeps data landing in the correct company.

## Handle inter-company transactions

When your companies trade with each other, Odoo can help handle inter-company transactions so a sale in one becomes a
purchase in the other cleanly. If this applies to you, set it up deliberately, because inter-company flows are exactly
where a careless multi-company setup produces confusing, mismatched records.

## Practical tips

- Confirm you genuinely need multi-company before turning it on.
- Set up each company with its own complete details.
- Understand what data is shared versus separate, and plan it.
- Give users the right access to the right companies.
- Set up inter-company transactions deliberately if your companies trade.

## My take

Multi-company is a genuinely powerful capability that rewards deliberate setup and punishes carelessness. Confirming you
really need it, configuring each company properly, understanding the shared-versus-separate split and getting user access
right are what keep it clean. Done well, you run several companies smoothly in one system; done hastily, you get confused
books. So plan it, do not just switch it on.

This series has walked through setting up even more of Odoo step by step, across manufacturing, services, HR, marketing
and the structure of the system itself. Between these guides and the earlier ones, we have covered a great deal of a real
implementation. I will keep sharing practical setup guides like these from real projects over time.

*Based on the official [Odoo 19 multi-company documentation](https://www.odoo.com/documentation/19.0/applications/general/multi_company.html). Running several companies in Odoo? [Get in touch](/services/odoo-consulting/).*
