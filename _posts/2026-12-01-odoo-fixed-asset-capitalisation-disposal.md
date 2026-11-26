---
layout: post
title: "Odoo Fixed Assets: Control Capitalisation, Depreciation and Disposal"
date: 2026-12-01 10:00:00 +0530
tags: [Odoo, Odoo 19, ERP, Best Practices, Accounting, Finance, Invoicing, Reporting]
hub: accounting
description: "Manage Odoo fixed assets with clear capitalisation dates, useful lives, depreciation reviews and disposal evidence so the ledger follows the real asset."
faqs:
  - q: "Does Odoo decide whether a purchase is an asset?"
    a: "No. Finance policy and the applicable accounting framework define capitalisation."
  - q: "What should support disposal?"
    a: "Keep the approval, date, reason, proceeds where relevant and the resulting accounting entry."
---

**Short answer:** An asset record should explain what was acquired, when it became available for use and how its final disposal was authorised. The model alone cannot decide accounting policy.

## Applies to

Odoo 19 Accounting assets. Applicable accounting standards and tax depreciation rules require professional review.

## The decision to make

Should this cost be capitalised, which date starts depreciation and what evidence supports its retirement?

## What Odoo can show

* The source bill and asset account identify the acquisition cost.
* The asset model controls depreciation method, duration and accounts.
* Disposal entries must reflect the approved date and proceeds where applicable.

## A practical control design

1. **Document capitalisation thresholds and asset classes.**
2. **Use the available for use date required by policy.**
3. **Review depreciation schedules after material changes.**
4. **Link sale, scrap or retirement evidence to disposal.**

## Worked example

A company buys production equipment and records it as available only after installation and acceptance. Finance checks the generated schedule. Three years later, an approved sale and receipt support the disposal entry and gain or loss review.

## When this approach fits

This fits businesses with material equipment, vehicles, technology or leasehold improvements.

## Limits and boundaries

It does not select the correct accounting standard, useful life or tax treatment. Those decisions belong to qualified finance and tax owners.

## Common mistakes

**Starting depreciation from the invoice date without policy support.** Investigate the source and downstream effect before closing the exception.

**Capitalising repairs that should be expensed.** Investigate the source and downstream effect before closing the exception.

**Changing useful life without approval.** Investigate the source and downstream effect before closing the exception.

**Removing an asset record without disposal evidence.** Investigate the source and downstream effect before closing the exception.

## What the owner should review

Assets without source bills, draft depreciation, model changes, fully depreciated assets still in use and disposals without proceeds.

The goal is not to remove every exception. It is to make important exceptions visible, owned and traceable to a decision.

## Related

Use the [ERP acceptance evidence worksheet](/resources/erp-acceptance-evidence/) to record the outcome and supporting records.

Read [Odoo Month End and Year End Closing: A Control Plan](/blog/2026/10/26/odoo-month-end-year-end-closing/) for the connected workflow.

## Official references

1. [Assets](https://www.odoo.com/documentation/19.0/applications/finance/accounting/vendor_bills/assets.html)

*Sources: official Odoo 19 documentation is listed above. Confirm the corresponding documentation for the installed version before implementation. Examples are illustrative business scenarios, not client results or tests on a live database.*

If you need help translating these decisions into your own workflow, see my [Odoo consulting services](/services/odoo-consulting/).
