---
layout: post
title: "Odoo Intercompany Transactions: Review Both Counterparts"
date: 2026-11-24 08:00:00 +0530
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

The configuration should follow that decision. It should not become the place where an unresolved policy choice is hidden. Write down the expected outcome, the owner and the evidence that will show the step is complete. This gives administrators a testable rule and gives reviewers a reason for each exception.

## What Odoo records and what the business must decide

* Intercompany settings can create counterpart orders, bills, invoices or credits.
* Products may be shared while accounting values remain company specific.
* Company selection affects which records and defaults a user is working with.

These records make the workflow visible, but they do not judge the commercial, legal or operational meaning on their own. The process owner must decide which source is authoritative, who may correct it and what happens when two records disagree.

## A practical control design

1. **Define which company initiates each transaction type.**
2. **Review fiscal positions and company specific accounts.**
3. **Match quantities, prices, currencies and dates across counterparts.**
4. **Create an exception queue for failed or manually changed counterparts.**

Keep the exception route as clear as the normal route. Staff should know where to place an item that cannot yet be completed, who reviews it and which deadline or business event should bring it back for attention. A dashboard with only completed records can look healthy while unresolved work remains outside the system.

## How to introduce the control

Start with a small set of representative records: one normal transaction, one incomplete record, one correction and one case near a reporting or operational cutoff. Walk each example through the proposed workflow with the people who create, review and use the result. This exposes differences in language and responsibility before they become configuration problems.

Configure the minimum fields and stages needed to express the agreed decision. Add automation only after the team can explain the manual path. An automated action should have a narrow trigger, a visible result and an exception route. If users cannot tell why a record moved or changed, the automation will make investigation slower even when it saves keystrokes.

Before release, compare permissions with actual responsibilities. The person who enters a record may not be the person authorised to approve a correction or financial outcome. Test the workflow with ordinary users as well as administrators, and include a record that should be refused or returned for more information.

## Evidence to keep with the decision

Keep the source reference, responsible person, relevant date, reason for any correction and the final linked record. Where a decision depends on an external document, bank movement, customer message or manager confirmation, retain the reference according to the organisation's document and privacy policy. Avoid copying sensitive material into several places merely to make it visible.

A useful audit trail lets a reviewer reconstruct the sequence without relying on a private inbox or someone's memory. It should show what was known at the time, what exception was found, who resolved it and which downstream record was affected. That is more valuable than a long activity history with no clear outcome.

## Worked example

One company sells packaging services to another group entity. Confirmation creates the counterpart document, but finance notices the receiving company used an outdated fiscal position. Both sides are corrected before period close.

The example is illustrative. The useful point is the sequence: confirm the business event, compare it with the Odoo record, resolve the difference with an accountable owner and retain enough context for the next person to understand the result.

## When it fits

This fits repeatable trading between legal entities in one Odoo database where counterpart creation reduces duplicate entry.

## Limits and boundaries

It does not replace transfer pricing policy, tax advice or approval authority. Automation should follow those decisions.

Where local law, tax, employment, privacy or regulated practice matters, have the appropriate specialist define the requirement. Then test whether the configured workflow produces the required record. A software screen is not evidence that the policy itself is correct.

## Common mistakes

**Working in the wrong active company.** Review the underlying record and the next operational consequence before closing the exception.

**Assuming shared products have identical accounting values.** Review the underlying record and the next operational consequence before closing the exception.

**Correcting one side only.** Review the underlying record and the next operational consequence before closing the exception.

**Ignoring failed counterpart creation.** Review the underlying record and the next operational consequence before closing the exception.

## What the owner should review

Unmatched intercompany balances, manually edited counterparts, currency differences and transactions near lock dates.

Review a small sample as well as totals. Sampling shows whether the reason, source document and next action are understandable, while totals reveal ageing and recurring patterns. Repeated manual corrections usually indicate a rule, data source or ownership problem worth fixing upstream.

The goal is not to remove every exception. It is to make each important exception visible, owned and traceable to a decision.

## Related

Read [Odoo Shared Products: Review Company Specific Values](/blog/2026/11/20/odoo-shared-products-company-values/) for the connected workflow.

## Official references

1. [Multi company](https://www.odoo.com/documentation/19.0/applications/general/multi_company.html)
1. [Accounting and invoicing](https://www.odoo.com/documentation/19.0/applications/finance/accounting.html)

*How this article was checked: official Odoo 19 documentation was reviewed in November 2026. Confirm the corresponding documentation for the installed version before implementation. Examples are illustrative business scenarios, not client results or tests on a live database.*

If you need help translating these decisions into your own workflow, see my [Odoo consulting services](/services/odoo-consulting/).
