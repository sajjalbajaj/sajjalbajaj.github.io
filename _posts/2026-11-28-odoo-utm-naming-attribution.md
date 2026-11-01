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

The configuration should follow that decision. It should not become the place where an unresolved policy choice is hidden. Write down the expected outcome, the owner and the evidence that will show the step is complete. This gives administrators a testable rule and gives reviewers a reason for each exception.

## What Odoo records and what the business must decide

* Campaign identifies the specific initiative.
* Medium describes the channel category.
* Source identifies the referring platform or origin.

These records make the workflow visible, but they do not judge the commercial, legal or operational meaning on their own. The process owner must decide which source is authoritative, who may correct it and what happens when two records disagree.

## A practical control design

1. **Publish a short naming convention.**
2. **Reuse approved values instead of near duplicates.**
3. **Keep destination URLs and campaign dates visible.**
4. **Review attribution alongside actual lead quality.**

Keep the exception route as clear as the normal route. Staff should know where to place an item that cannot yet be completed, who reviews it and which deadline or business event should bring it back for attention. A dashboard with only completed records can look healthy while unresolved work remains outside the system.

## How to introduce the control

Start with a small set of representative records: one normal transaction, one incomplete record, one correction and one case near a reporting or operational cutoff. Walk each example through the proposed workflow with the people who create, review and use the result. This exposes differences in language and responsibility before they become configuration problems.

Configure the minimum fields and stages needed to express the agreed decision. Add automation only after the team can explain the manual path. An automated action should have a narrow trigger, a visible result and an exception route. If users cannot tell why a record moved or changed, the automation will make investigation slower even when it saves keystrokes.

Before release, compare permissions with actual responsibilities. The person who enters a record may not be the person authorised to approve a correction or financial outcome. Test the workflow with ordinary users as well as administrators, and include a record that should be refused or returned for more information.

## Evidence to keep with the decision

Keep the source reference, responsible person, relevant date, reason for any correction and the final linked record. Where a decision depends on an external document, bank movement, customer message or manager confirmation, retain the reference according to the organisation's document and privacy policy. Avoid copying sensitive material into several places merely to make it visible.

A useful audit trail lets a reviewer reconstruct the sequence without relying on a private inbox or someone's memory. It should show what was known at the time, what exception was found, who resolved it and which downstream record was affected. That is more valuable than a long activity history with no clear outcome.

## Worked example

A webinar is promoted through LinkedIn organic posts and an email newsletter. Both links use one campaign name, while medium and source distinguish the channels. The team can compare traffic without splitting results across spelling variations.

The example is illustrative. The useful point is the sequence: confirm the business event, compare it with the Odoo record, resolve the difference with an accountable owner and retain enough context for the next person to understand the result.

## When it fits

This fits multi channel campaigns where links feed CRM or website reporting.

## Limits and boundaries

It does not prove that one touch caused a sale. Attribution reports should be interpreted with the customer journey and data limitations.

Where local law, tax, employment, privacy or regulated practice matters, have the appropriate specialist define the requirement. Then test whether the configured workflow produces the required record. A software screen is not evidence that the policy itself is correct.

## Common mistakes

**Using campaign as the channel name.** Review the underlying record and the next operational consequence before closing the exception.

**Creating LinkedIn, linkedin and Linked In as separate sources.** Review the underlying record and the next operational consequence before closing the exception.

**Reusing one link for unrelated campaigns.** Review the underlying record and the next operational consequence before closing the exception.

**Equating clicks with qualified leads.** Review the underlying record and the next operational consequence before closing the exception.

## What the owner should review

Duplicate UTM values, links with missing source, old destinations and campaigns with traffic but no relevant leads.

Review a small sample as well as totals. Sampling shows whether the reason, source document and next action are understandable, while totals reveal ageing and recurring patterns. Repeated manual corrections usually indicate a rule, data source or ownership problem worth fixing upstream.

The goal is not to remove every exception. It is to make each important exception visible, owned and traceable to a decision.

## Related

Read [Measuring Marketing in Odoo: Metrics That Matter](/blog/2026/09/02/odoo-measuring-marketing/) for the connected workflow.

## Official references

1. [Marketing attribution reports](https://www.odoo.com/documentation/19.0/applications/sales/crm/track_leads/marketing_attribution.html)
1. [Link tracker](https://www.odoo.com/documentation/19.0/applications/websites/website/reporting/link_tracker.html)

*How this article was checked: official Odoo 19 documentation was reviewed in November 2026. Confirm the corresponding documentation for the installed version before implementation. Examples are illustrative business scenarios, not client results or tests on a live database.*

If you need help translating these decisions into your own workflow, see my [Odoo consulting services](/services/odoo-consulting/).
