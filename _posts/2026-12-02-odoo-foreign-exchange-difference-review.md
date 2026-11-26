---
layout: post
title: "Odoo Exchange Differences: Explain Realised and Unrealised Movements"
date: 2026-12-02 10:00:00 +0530
tags: [Odoo, Odoo 19, ERP, Best Practices, Accounting, Finance, Reporting, Invoicing]
hub: accounting
description: "Review Odoo foreign currency balances, rates, settlements and exchange difference entries so period movements can be explained and corrected when necessary."
faqs:
  - q: "Why can the paid amount differ from the invoice conversion?"
    a: "The invoice and settlement may use rates from different dates, creating a realised currency difference."
  - q: "Should every difference be posted manually?"
    a: "No. First confirm the currencies, dates, rates and reconciliation so the source error is not concealed."
---

**Short answer:** Currency differences should connect to a rate, a transaction date and either an open balance or settlement. Investigate the cause before posting a manual correction.

## Applies to

Odoo 19 multi currency Accounting. The selected rate source and accounting treatment must follow company policy and local requirements.

## The decision to make

Is the movement caused by revaluation of an open item, settlement at a different rate or incorrect transaction data?

## What Odoo can show

* Company and transaction currencies are stored with converted values.
* Payment reconciliation can create realised exchange differences.
* Period end adjustment may be needed for open foreign currency balances.

## A practical control design

1. **Control the rate source and manual rate authority.**
2. **Review transaction and settlement dates.**
3. **Separate open item revaluation from realised settlement differences.**
4. **Reconcile exchange accounts before close.**

## Worked example

A USD customer invoice is paid after the exchange rate changes. Reconciliation creates the settlement difference. A separate review identifies an invoice entered with the wrong currency and corrects the source rather than hiding it in exchange expense.

## When this approach fits

This fits importers, exporters and groups holding receivables, payables or cash in foreign currencies.

## Limits and boundaries

It does not define statutory rates or tax treatment. Finance should confirm the required source, timing and presentation.

## Common mistakes

**Posting every unexplained difference to the exchange account.** Investigate the source and downstream effect before closing the exception.

**Changing a rate without recording the reason.** Investigate the source and downstream effect before closing the exception.

**Mixing open revaluation with settled differences.** Investigate the source and downstream effect before closing the exception.

**Ignoring small recurring balances.** Investigate the source and downstream effect before closing the exception.

## What the owner should review

Large movements, manual rates, negative rates or dates, unreconciled items and exchange accounts with unsupported journals.

The goal is not to remove every exception. It is to make important exceptions visible, owned and traceable to a decision.

## Related

Use the [ERP acceptance evidence worksheet](/resources/erp-acceptance-evidence/) to record the outcome and supporting records.

Read [Multi-Currency in Odoo 19 for Importers and Exporters](/blog/2026/10/12/multi-currency-odoo-import-export/) for the connected workflow.

## Official references

1. [Multi currency system](https://www.odoo.com/documentation/19.0/applications/finance/accounting/get_started/multi_currency.html)

*Sources: official Odoo 19 documentation is listed above. Confirm the corresponding documentation for the installed version before implementation. Examples are illustrative business scenarios, not client results or tests on a live database.*

If you need help translating these decisions into your own workflow, see my [Odoo consulting services](/services/odoo-consulting/).
