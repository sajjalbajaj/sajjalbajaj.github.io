---
layout: post
title: "Odoo Marketing Consent: Preserve Subscription Decisions"
date: 2026-11-30 10:00:00 +0530
tags: [Odoo, Odoo 19, ERP, Best Practices, Integration, Customer Management, Business Automation, Compliance]
hub: integrations
description: "Govern Odoo marketing subscription records, list membership, opt outs and consent evidence so channel activity follows the recipient's latest decision."
faqs:
  - q: "Can one contact have different choices for different lists?"
    a: "Yes. Mailing list membership and list level opt out can represent separate preferences."
  - q: "Does being a CRM contact equal marketing consent?"
    a: "No. The organisation must establish the lawful basis and preserve subscription decisions."
---

**Short answer:** Treat subscription status as controlled customer data. A list import, CRM update or campaign copy should not silently undo the recipient's choice.

## Applies to

Odoo 19 Email Marketing mailing lists and blacklist controls. Legal requirements vary by country, audience and message type.

## Start with the decision

What permission or business basis supports this message, and does the current record show a later opt out or broader exclusion?

The configuration should follow that decision. It should not become the place where an unresolved policy choice is hidden. Write down the expected outcome, the owner and the evidence that will show the step is complete. This gives administrators a testable rule and gives reviewers a reason for each exception.

## What Odoo records and what the business must decide

* Contacts can belong to multiple mailing lists.
* List opt out is distinct from database wide blacklist.
* Subscription and unsubscription dates support review.

These records make the workflow visible, but they do not judge the commercial, legal or operational meaning on their own. The process owner must decide which source is authoritative, who may correct it and what happens when two records disagree.

## A practical control design

1. **Record where and when subscription was obtained.**
2. **Map forms and imports to the intended list.**
3. **Preserve the latest opt out decision.**
4. **Limit unblacklist authority and require a reason.**

Keep the exception route as clear as the normal route. Staff should know where to place an item that cannot yet be completed, who reviews it and which deadline or business event should bring it back for attention. A dashboard with only completed records can look healthy while unresolved work remains outside the system.

## How to introduce the control

Start with a small set of representative records: one normal transaction, one incomplete record, one correction and one case near a reporting or operational cutoff. Walk each example through the proposed workflow with the people who create, review and use the result. This exposes differences in language and responsibility before they become configuration problems.

Configure the minimum fields and stages needed to express the agreed decision. Add automation only after the team can explain the manual path. An automated action should have a narrow trigger, a visible result and an exception route. If users cannot tell why a record moved or changed, the automation will make investigation slower even when it saves keystrokes.

Before release, compare permissions with actual responsibilities. The person who enters a record may not be the person authorised to approve a correction or financial outcome. Test the workflow with ordinary users as well as administrators, and include a record that should be refused or returned for more information.

## Evidence to keep with the decision

Keep the source reference, responsible person, relevant date, reason for any correction and the final linked record. Where a decision depends on an external document, bank movement, customer message or manager confirmation, retain the reference according to the organisation's document and privacy policy. Avoid copying sensitive material into several places merely to make it visible.

A useful audit trail lets a reviewer reconstruct the sequence without relying on a private inbox or someone's memory. It should show what was known at the time, what exception was found, who resolved it and which downstream record was affected. That is more valuable than a long activity history with no clear outcome.

## Worked example

A customer subscribes to product updates but later opts out of event promotions. A CRM import updates their company name without changing either subscription state. Marketing sends only the permitted product list.

The example is illustrative. The useful point is the sequence: confirm the business event, compare it with the Odoo record, resolve the difference with an accountable owner and retain enough context for the next person to understand the result.

## When it fits

This fits organisations collecting preferences through forms, CRM and campaign activity.

## Limits and boundaries

It does not establish legal permission by itself. Obtain advice for the applicable marketing and privacy rules.

Where local law, tax, employment, privacy or regulated practice matters, have the appropriate specialist define the requirement. Then test whether the configured workflow produces the required record. A software screen is not evidence that the policy itself is correct.

## Common mistakes

**Using CRM contact existence as blanket consent.** Review the underlying record and the next operational consequence before closing the exception.

**Replacing preferences during import.** Review the underlying record and the next operational consequence before closing the exception.

**Hiding the unsubscribe link in a custom template.** Review the underlying record and the next operational consequence before closing the exception.

**Treating transactional and marketing messages as identical.** Review the underlying record and the next operational consequence before closing the exception.

## What the owner should review

Recent opt outs, imports that modify list fields, unblacklist actions and campaigns using broad dynamic audiences.

Review a small sample as well as totals. Sampling shows whether the reason, source document and next action are understandable, while totals reveal ageing and recurring patterns. Repeated manual corrections usually indicate a rule, data source or ownership problem worth fixing upstream.

The goal is not to remove every exception. It is to make each important exception visible, owned and traceable to a decision.

## Related

Read [Building and Segmenting Your Marketing Audience in Odoo](/blog/2026/09/02/odoo-marketing-audience-segmentation/) for the connected workflow.

## Official references

1. [Mailing lists](https://www.odoo.com/documentation/19.0/applications/marketing/email_marketing/mailing_lists.html)
1. [Email marketing](https://www.odoo.com/documentation/19.0/applications/marketing/email_marketing.html)

*How this article was checked: official Odoo 19 documentation was reviewed in November 2026. Confirm the corresponding documentation for the installed version before implementation. Examples are illustrative business scenarios, not client results or tests on a live database.*

If you need help translating these decisions into your own workflow, see my [Odoo consulting services](/services/odoo-consulting/).
