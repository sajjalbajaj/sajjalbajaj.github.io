---
layout: post
title: "Odoo Email Marketing: Review Bounces and Blacklists"
date: 2026-11-28 08:00:00 +0530
tags: [Odoo, Odoo 19, ERP, Best Practices, Integration, Customer Management, Business Automation, Compliance]
hub: integrations
description: "Review Odoo email marketing bounces, mailing list opt outs and blacklists before importing contacts or sending another campaign."
faqs:
  - q: "Is mailing list opt out the same as a global blacklist?"
    a: "No. A contact can leave one list, while blacklist exclusion prevents marketing email from the database."
  - q: "Should imports reactivate excluded contacts?"
    a: "No. Imports should preserve recorded subscription and blacklist decisions unless a valid process supports a change."
---

**Short answer:** Respect the recipient's recorded choice and separate temporary delivery problems from global marketing exclusion.

## Applies to

Odoo 19 Email Marketing mailing lists and unsubscription controls. Applicable privacy and electronic marketing law determines the lawful basis for contact.

## Start with the decision

Is the address undeliverable, opted out of one list, or blacklisted from all marketing email?

The configuration should follow that decision. It should not become the place where an unresolved policy choice is hidden. Write down the expected outcome, the owner and the evidence that will show the step is complete. This gives administrators a testable rule and gives reviewers a reason for each exception.

## What Odoo records and what the business must decide

* Mailing list opt out and global blacklist are different states.
* Blacklisted addresses are excluded from marketing mailings.
* Transactional messages can have a different purpose and treatment.

These records make the workflow visible, but they do not judge the commercial, legal or operational meaning on their own. The process owner must decide which source is authoritative, who may correct it and what happens when two records disagree.

## A practical control design

1. **Preserve subscription and unsubscription history.**
2. **Do not overwrite blacklist status during imports.**
3. **Investigate repeated bounces and address quality.**
4. **Require a documented reason before unblacklisting.**

Keep the exception route as clear as the normal route. Staff should know where to place an item that cannot yet be completed, who reviews it and which deadline or business event should bring it back for attention. A dashboard with only completed records can look healthy while unresolved work remains outside the system.

## How to introduce the control

Start with a small set of representative records: one normal transaction, one incomplete record, one correction and one case near a reporting or operational cutoff. Walk each example through the proposed workflow with the people who create, review and use the result. This exposes differences in language and responsibility before they become configuration problems.

Configure the minimum fields and stages needed to express the agreed decision. Add automation only after the team can explain the manual path. An automated action should have a narrow trigger, a visible result and an exception route. If users cannot tell why a record moved or changed, the automation will make investigation slower even when it saves keystrokes.

Before release, compare permissions with actual responsibilities. The person who enters a record may not be the person authorised to approve a correction or financial outcome. Test the workflow with ordinary users as well as administrators, and include a record that should be refused or returned for more information.

## Evidence to keep with the decision

Keep the source reference, responsible person, relevant date, reason for any correction and the final linked record. Where a decision depends on an external document, bank movement, customer message or manager confirmation, retain the reference according to the organisation's document and privacy policy. Avoid copying sensitive material into several places merely to make it visible.

A useful audit trail lets a reviewer reconstruct the sequence without relying on a private inbox or someone's memory. It should show what was known at the time, what exception was found, who resolved it and which downstream record was affected. That is more valuable than a long activity history with no clear outcome.

## Worked example

A contact opts out of a product newsletter but remains subscribed to event updates. Another contact selects global exclusion. The next import preserves both choices instead of resubscribing everyone in the spreadsheet.

The example is illustrative. The useful point is the sequence: confirm the business event, compare it with the Odoo record, resolve the difference with an accountable owner and retain enough context for the next person to understand the result.

## When it fits

This fits organisations managing several mailing lists and recurring imports.

## Limits and boundaries

It does not establish permission to send. Marketing and legal owners must define the lawful basis and required notices.

Where local law, tax, employment, privacy or regulated practice matters, have the appropriate specialist define the requirement. Then test whether the configured workflow produces the required record. A software screen is not evidence that the policy itself is correct.

## Common mistakes

**Treating all opt outs as the same.** Review the underlying record and the next operational consequence before closing the exception.

**Reimporting a blacklisted email as active.** Review the underlying record and the next operational consequence before closing the exception.

**Removing unsubscribe controls from a custom template.** Review the underlying record and the next operational consequence before closing the exception.

**Unblacklisting without evidence.** Review the underlying record and the next operational consequence before closing the exception.

## What the owner should review

Blacklist additions, unblacklist actions, bounce trends, imports and lists with unusually high opt out rates.

Review a small sample as well as totals. Sampling shows whether the reason, source document and next action are understandable, while totals reveal ageing and recurring patterns. Repeated manual corrections usually indicate a rule, data source or ownership problem worth fixing upstream.

The goal is not to remove every exception. It is to make each important exception visible, owned and traceable to a decision.

## Related

Read [How to Set Up Email Marketing in Odoo](/blog/2026/10/03/how-to-set-up-email-marketing-odoo/) for the connected workflow.

## Official references

1. [Mailing lists](https://www.odoo.com/documentation/19.0/applications/marketing/email_marketing/mailing_lists.html)
1. [Email marketing](https://www.odoo.com/documentation/19.0/applications/marketing/email_marketing.html)

*How this article was checked: official Odoo 19 documentation was reviewed in November 2026. Confirm the corresponding documentation for the installed version before implementation. Examples are illustrative business scenarios, not client results or tests on a live database.*

If you need help translating these decisions into your own workflow, see my [Odoo consulting services](/services/odoo-consulting/).
