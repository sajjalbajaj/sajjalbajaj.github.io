---
layout: post
title: "Odoo Intercompany Transactions: Review Both Counterparts"
date: 2026-11-24 08:00:00 +0530
last_modified_at: 2026-11-27
tags: [Odoo, Odoo 19, ERP, Best Practices, Accounting, Finance, Multi-Company, Business Automation]
hub: accounting
description: "Control Odoo intercompany transactions by checking company context, counterpart documents, fiscal positions and exceptions on both sides."
faqs:
  - q: "Does intercompany automation remove the need to review both entities?"
    a: "No. Each legal entity still needs correct taxes, accounts, dates and approvals."
  - q: "Can shared products have company specific values?"
    a: "Yes. Review company context and property values rather than assuming every field is common."
---

**Short answer:** Automation can create the counterpart, but each company still owns the accuracy of its document. Review both sides before relying on group balances.

## Applies to

Odoo 19 multi company and intercompany transactions. Configuration and localization must be valid for every participating legal entity.

## Start with the decision

Did the originating document create the intended counterpart in the correct company, currency, tax position and period?

## What Odoo records and what the business must decide

* Intercompany settings can create counterpart orders, bills, invoices or credits.
* Products may be shared while accounting values remain company specific.
* Company selection affects which records and defaults a user is working with.

## A practical control design

1. **Define which company initiates each transaction type.**
2. **Review fiscal positions and company specific accounts.**
3. **Match quantities, prices, currencies and dates across counterparts.**
4. **Create an exception queue for failed or manually changed counterparts.**

## Worked example

One company sells packaging services to another group entity. Confirmation creates the counterpart document, but finance notices the receiving company used an outdated fiscal position. Both sides are corrected before period close.

## When it fits

This fits repeatable trading between legal entities in one Odoo database where counterpart creation reduces duplicate entry.

## Limits and boundaries

It does not replace transfer pricing policy, tax advice or approval authority. Automation should follow those decisions.

## Common mistakes

**Working in the wrong active company.** Review the underlying record and the next operational consequence before closing the exception.

**Assuming shared products have identical accounting values.** Review the underlying record and the next operational consequence before closing the exception.

**Correcting one side only.** Review the underlying record and the next operational consequence before closing the exception.

**Ignoring failed counterpart creation.** Review the underlying record and the next operational consequence before closing the exception.

## What the owner should review

Unmatched intercompany balances, manually edited counterparts, currency differences and transactions near lock dates.

The goal is not to remove every exception. It is to make each important exception visible, owned and traceable to a decision.

## Related

Use the [ERP acceptance evidence worksheet](/resources/erp-acceptance-evidence/) to record the outcome and supporting records.

Read [Odoo Shared Products: Review Company Specific Values](/blog/2026/11/20/odoo-shared-products-company-values/) for the connected workflow.

## Official references

1. [Multi company](https://www.odoo.com/documentation/19.0/applications/general/multi_company.html)
1. [Accounting and invoicing](https://www.odoo.com/documentation/19.0/applications/finance/accounting.html)

*How this article was checked: official Odoo 19 documentation was reviewed in November 2026. Confirm the corresponding documentation for the installed version before implementation. Examples are illustrative business scenarios, not client results or tests on a live database.*

If you need help translating these decisions into your own workflow, see my [Odoo consulting services](/services/odoo-consulting/).
