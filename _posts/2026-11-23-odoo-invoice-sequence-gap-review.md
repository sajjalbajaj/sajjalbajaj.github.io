---
layout: post
title: "Odoo Invoice Sequences: Review Gaps Before Resequencing"
date: 2026-11-23 09:00:00 +0530
last_modified_at: 2026-11-27
tags: [Odoo, Odoo 19, ERP, Best Practices, Accounting, Finance, Invoicing, Compliance]
hub: accounting
description: "Review Odoo invoice sequence gaps, dates, lock periods and duplicate risks before resequencing documents or explaining numbering exceptions."
faqs:
  - q: "Can every invoice be resequenced?"
    a: "No. Odoo applies restrictions involving lock dates, duplicate numbers and consistency between sequence and period."
  - q: "Does a sequence gap always mean revenue is missing?"
    a: "No. Investigate cancellations, reversals, migration and filters before drawing that conclusion."
---

**Short answer:** Investigate why the sequence appears incomplete before changing numbers. A gap may reflect cancellation, deletion, migration or a date and sequence mismatch.

## Applies to

Odoo 19 Accounting and Invoicing. Statutory numbering requirements vary by localization and jurisdiction.

## Start with the decision

Is the gap a real missing document, a known reversal or a reporting filter issue, and is resequencing legally and operationally appropriate?

## What Odoo records and what the business must decide

* Odoo restricts resequencing across lock dates, inconsistent months and duplicates.
* The chronological order remains important.
* Imported numbering may be continued under controlled conditions.

## A practical control design

1. **Review the journal, date range and company before concluding a number is missing.**
2. **Preserve the reason for cancelled or reversed documents.**
3. **Use lock dates to protect closed periods.**
4. **Limit resequencing access and retain review evidence.**

## Worked example

After migration, a company sees a gap between two sales invoices. The team finds that the number belonged to a cancelled legacy document. Finance records the explanation and does not renumber posted invoices merely to make the list look continuous.

## When it fits

This fits migration checks, month end review and investigations of numbering warnings.

## Limits and boundaries

It does not determine the legal response to a numbering gap. Finance should apply the rules for the relevant country and document type.

## Common mistakes

**Resequencing before identifying the cause.** Review the underlying record and the next operational consequence before closing the exception.

**Ignoring company and journal filters.** Review the underlying record and the next operational consequence before closing the exception.

**Changing numbers inside a locked period.** Review the underlying record and the next operational consequence before closing the exception.

**Deleting evidence of a cancelled document.** Review the underlying record and the next operational consequence before closing the exception.

## What the owner should review

Sequence warnings, deleted drafts, migration mappings, reversals and user access to resequencing actions.

The goal is not to remove every exception. It is to make each important exception visible, owned and traceable to a decision.

## Related

Use the [ERP acceptance evidence worksheet](/resources/erp-acceptance-evidence/) to record the outcome and supporting records.

Read [Odoo Month End and Year End Closing: A Control Plan](/blog/2026/10/26/odoo-month-end-year-end-closing/) for the connected workflow.

## Official references

1. [Invoicing processes](https://www.odoo.com/documentation/19.0/applications/finance/accounting/customer_invoices/overview.html)
1. [Lock dates](https://www.odoo.com/documentation/19.0/applications/finance/accounting/reporting/year_end.html)

*How this article was checked: official Odoo 19 documentation was reviewed in November 2026. Confirm the corresponding documentation for the installed version before implementation. Examples are illustrative business scenarios, not client results or tests on a live database.*

If you need help translating these decisions into your own workflow, see my [Odoo consulting services](/services/odoo-consulting/).
