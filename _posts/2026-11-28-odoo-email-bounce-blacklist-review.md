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

**Short answer:** Review bounced email, mailing list opt-outs and marketing blacklisting as separate conditions. Check the delivery history and the recipient's recorded preference before changing a contact's eligibility; a delivery problem is not permission to reverse an unsubscribe.

## Applies to

Odoo 19 Email Marketing mailing lists and unsubscription controls. Applicable privacy and electronic marketing law determines the lawful basis for contact.

## Start with the decision

Is the address undeliverable, opted out of one list, or blacklisted from all marketing email?

## What Odoo records and what the business must decide

* Mailing list opt out and global blacklist are different states.
* Blacklisted addresses are excluded from marketing mailings.
* Transactional messages can have a different purpose and treatment.

## A practical control design

1. **Preserve subscription and unsubscription history.**
2. **Do not overwrite blacklist status during imports.**
3. **Investigate repeated bounces and address quality.**
4. **Require a documented reason before unblacklisting.**

## Worked example

A contact opts out of a product newsletter but remains subscribed to event updates. Another contact selects global exclusion. The next import preserves both choices instead of resubscribing everyone in the spreadsheet.

## When it fits

This fits organisations managing several mailing lists and recurring imports.

## Limits and boundaries

It does not establish permission to send. Marketing and legal owners must define the lawful basis and required notices.

## Common mistakes

**Treating all opt outs as the same.** Review the underlying record and the next operational consequence before closing the exception.

**Reimporting a blacklisted email as active.** Review the underlying record and the next operational consequence before closing the exception.

**Removing unsubscribe controls from a custom template.** Review the underlying record and the next operational consequence before closing the exception.

**Unblacklisting without evidence.** Review the underlying record and the next operational consequence before closing the exception.

## What the owner should review

Blacklist additions, unblacklist actions, bounce trends, imports and lists with unusually high opt out rates.

The goal is not to remove every exception. It is to make each important exception visible, owned and traceable to a decision.

## Related

Use the [ERP acceptance evidence worksheet](/resources/erp-acceptance-evidence/) to record the outcome and supporting records.

Read [How to Set Up Email Marketing in Odoo](/blog/2026/10/03/how-to-set-up-email-marketing-odoo/) for the connected workflow.

## Official references

1. [Mailing lists](https://www.odoo.com/documentation/19.0/applications/marketing/email_marketing/mailing_lists.html)
1. [Email marketing](https://www.odoo.com/documentation/19.0/applications/marketing/email_marketing.html)

*How this article was checked: official Odoo 19 documentation was reviewed in November 2026. Confirm the corresponding documentation for the installed version before implementation. Examples are illustrative business scenarios, not client results or tests on a live database.*

If you need help translating these decisions into your own workflow, see my [Odoo consulting services](/services/odoo-consulting/).
