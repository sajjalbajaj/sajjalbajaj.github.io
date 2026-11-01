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

Start with the business event rather than the field that looks incomplete. Agree what should happen, who owns the decision and which evidence proves completion. Configuration can then express a rule the operating team understands instead of hiding an unresolved policy choice.

## What Odoo can show

* Company and transaction currencies are stored with converted values.
* Payment reconciliation can create realised exchange differences.
* Period end adjustment may be needed for open foreign currency balances.

These records create useful traceability, but they do not interpret the commercial, accounting, legal or operational meaning by themselves. The process owner must decide which source is authoritative, who may correct a discrepancy and when the downstream action can proceed.

## A practical control design

1. **Control the rate source and manual rate authority.**
2. **Review transaction and settlement dates.**
3. **Separate open item revaluation from realised settlement differences.**
4. **Reconcile exchange accounts before close.**

Keep the exception route as visible as the normal route. Staff need to know where an incomplete item waits, who reviews it and which date or event brings it back for attention. Otherwise a clean dashboard can hide unresolved work in email, spreadsheets or private notes.

## Implementation and testing

Begin with a small set of representative records: one normal case, one missing input, one correction and one case near a reporting or operational cutoff. Walk them through with the people who create, approve and use the result. This usually exposes differences in language, evidence and ownership before they become configuration problems.

Configure the minimum stages, fields and permissions required for the agreed decision. Add automation only after the manual path is understood. Every automated action should have a narrow trigger, a visible outcome and a route for records it cannot complete safely.

Test with ordinary user access as well as administrator access. Include a scenario that must be rejected or returned for more information, and confirm that the next team cannot proceed until the required decision is visible.

## Evidence and review trail

Retain the source reference, responsible person, relevant date, reason for a correction and the final linked record. When evidence comes from a bank, supplier, customer, employee or external document, keep the appropriate reference according to the organisation's security, privacy and retention policy.

A useful trail lets another reviewer reconstruct what was known, what differed, who decided and which later record changed. That is more valuable than a long activity history with no clear outcome. Avoid copying sensitive documents into several places only to make them visible.

## Build the review into normal work

Choose a review frequency that matches the speed and consequence of the process. High value payments, safety related records and customer commitments may need review before the next action. Lower risk master data may suit a weekly exception list. Name the owner, expected response time and escalation route so an alert does not become another unattended queue.

Use trends to improve the process as well as resolve individual records. When the same exception returns, check whether the cause is unclear policy, incomplete source data, unsuitable permissions, training or an integration boundary. Fixing the upstream cause is usually more valuable than adding another reminder after the error has already occurred.

## Worked example

A USD customer invoice is paid after the exchange rate changes. Reconciliation creates the settlement difference. A separate review identifies an invoice entered with the wrong currency and corrects the source rather than hiding it in exchange expense.

The example is illustrative. The transferable method is to confirm the event, compare it with the Odoo record, resolve the difference with an accountable owner and preserve enough context for the next person to understand the result.

## When this approach fits

This fits importers, exporters and groups holding receivables, payables or cash in foreign currencies.

## Limits and boundaries

It does not define statutory rates or tax treatment. Finance should confirm the required source, timing and presentation.

Where accounting, tax, employment, privacy, safety or another regulated practice applies, have the appropriate specialist define the requirement first. Then test whether the configured process produces the required record. A completed software screen is not proof that the underlying policy is correct.

## Common mistakes

**Posting every unexplained difference to the exchange account.** Investigate the source and downstream effect before closing the exception.

**Changing a rate without recording the reason.** Investigate the source and downstream effect before closing the exception.

**Mixing open revaluation with settled differences.** Investigate the source and downstream effect before closing the exception.

**Ignoring small recurring balances.** Investigate the source and downstream effect before closing the exception.

## What the owner should review

Large movements, manual rates, negative rates or dates, unreconciled items and exchange accounts with unsupported journals.

Review a sample as well as totals. Sampling shows whether the evidence and reason are understandable, while totals reveal ageing and repeated patterns. Frequent manual correction usually points to an upstream rule, data source, training or ownership problem worth fixing.

The goal is not to remove every exception. It is to make important exceptions visible, owned and traceable to a decision.

## Related

Read [Multi-Currency in Odoo 19 for Importers and Exporters](/blog/2026/10/12/multi-currency-odoo-import-export/) for the connected workflow.

## Official references

1. [Multi currency system](https://www.odoo.com/documentation/19.0/applications/finance/accounting/get_started/multi_currency.html)

*Sources: official Odoo 19 documentation is listed above. Confirm the corresponding documentation for the installed version before implementation. Examples are illustrative business scenarios, not client results or tests on a live database.*

If you need help translating these decisions into your own workflow, see my [Odoo consulting services](/services/odoo-consulting/).
