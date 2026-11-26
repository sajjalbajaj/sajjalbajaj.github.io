---
layout: post
title: "Odoo UTM Tracking: Keep Campaign Names Consistent"
date: 2026-11-28 09:00:00 +0530
tags: [Odoo, Odoo 19, ERP, Best Practices, Integration, Analytics, Customer Management, Business Automation]
hub: integrations
description: "Govern Odoo UTM campaign, medium and source names so link tracking and marketing attribution remain comparable across teams and channels."
faqs:
  - q: "What are the core UTM values used by Odoo attribution?"
    a: "Medium, source and campaign."
  - q: "Does a tracked click prove the campaign caused revenue?"
    a: "No. It is one attribution signal and should be reviewed with lead quality and the wider journey."
---

**Short answer:** A tracked link is only useful when the naming convention is stable. Agree the vocabulary before every team creates its own version of the same channel.

## Applies to

Odoo 19 Link Tracker and CRM marketing attribution.

## Start with the decision

Which business question should the link answer, and which campaign, medium and source values make results comparable?

## What Odoo records and what the business must decide

* Campaign identifies the specific initiative.
* Medium describes the channel category.
* Source identifies the referring platform or origin.

## A practical control design

1. **Publish a short naming convention.**
2. **Reuse approved values instead of near duplicates.**
3. **Keep destination URLs and campaign dates visible.**
4. **Review attribution alongside actual lead quality.**

## Worked example

A webinar is promoted through LinkedIn organic posts and an email newsletter. Both links use one campaign name, while medium and source distinguish the channels. The team can compare traffic without splitting results across spelling variations.

## When it fits

This fits multi channel campaigns where links feed CRM or website reporting.

## Limits and boundaries

It does not prove that one touch caused a sale. Attribution reports should be interpreted with the customer journey and data limitations.

## Common mistakes

**Using campaign as the channel name.** Review the underlying record and the next operational consequence before closing the exception.

**Creating LinkedIn, linkedin and Linked In as separate sources.** Review the underlying record and the next operational consequence before closing the exception.

**Reusing one link for unrelated campaigns.** Review the underlying record and the next operational consequence before closing the exception.

**Equating clicks with qualified leads.** Review the underlying record and the next operational consequence before closing the exception.

## What the owner should review

Duplicate UTM values, links with missing source, old destinations and campaigns with traffic but no relevant leads.

The goal is not to remove every exception. It is to make each important exception visible, owned and traceable to a decision.

## Related

Use the [ERP acceptance evidence worksheet](/resources/erp-acceptance-evidence/) to record the outcome and supporting records.

Read [Measuring Marketing in Odoo: Metrics That Matter](/blog/2026/09/02/odoo-measuring-marketing/) for the connected workflow.

## Official references

1. [Marketing attribution reports](https://www.odoo.com/documentation/19.0/applications/sales/crm/track_leads/marketing_attribution.html)
1. [Link tracker](https://www.odoo.com/documentation/19.0/applications/websites/website/reporting/link_tracker.html)

*How this article was checked: official Odoo 19 documentation was reviewed in November 2026. Confirm the corresponding documentation for the installed version before implementation. Examples are illustrative business scenarios, not client results or tests on a live database.*

If you need help translating these decisions into your own workflow, see my [Odoo consulting services](/services/odoo-consulting/).
