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

## What Odoo records and what the business must decide

* Contacts can belong to multiple mailing lists.
* List opt out is distinct from database wide blacklist.
* Subscription and unsubscription dates support review.

## A practical control design

1. **Record where and when subscription was obtained.**
2. **Map forms and imports to the intended list.**
3. **Preserve the latest opt out decision.**
4. **Limit unblacklist authority and require a reason.**

## Worked example

A customer subscribes to product updates but later opts out of event promotions. A CRM import updates their company name without changing either subscription state. Marketing sends only the permitted product list.

## When it fits

This fits organisations collecting preferences through forms, CRM and campaign activity.

## Limits and boundaries

It does not establish legal permission by itself. Obtain advice for the applicable marketing and privacy rules.

## Common mistakes

**Using CRM contact existence as blanket consent.** Review the underlying record and the next operational consequence before closing the exception.

**Replacing preferences during import.** Review the underlying record and the next operational consequence before closing the exception.

**Hiding the unsubscribe link in a custom template.** Review the underlying record and the next operational consequence before closing the exception.

**Treating transactional and marketing messages as identical.** Review the underlying record and the next operational consequence before closing the exception.

## What the owner should review

Recent opt outs, imports that modify list fields, unblacklist actions and campaigns using broad dynamic audiences.

The goal is not to remove every exception. It is to make each important exception visible, owned and traceable to a decision.

## Related

Use the [ERP acceptance evidence worksheet](/resources/erp-acceptance-evidence/) to record the outcome and supporting records.

Read [Building and Segmenting Your Marketing Audience in Odoo](/blog/2026/09/02/odoo-marketing-audience-segmentation/) for the connected workflow.

## Official references

1. [Mailing lists](https://www.odoo.com/documentation/19.0/applications/marketing/email_marketing/mailing_lists.html)
1. [Email marketing](https://www.odoo.com/documentation/19.0/applications/marketing/email_marketing.html)

*How this article was checked: official Odoo 19 documentation was reviewed in November 2026. Confirm the corresponding documentation for the installed version before implementation. Examples are illustrative business scenarios, not client results or tests on a live database.*

If you need help translating these decisions into your own workflow, see my [Odoo consulting services](/services/odoo-consulting/).
