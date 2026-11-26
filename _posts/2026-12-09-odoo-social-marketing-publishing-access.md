---
layout: post
title: "Odoo Social Marketing: Control Publishing Access and Review"
date: 2026-12-09 10:00:00 +0530
tags: [Odoo, Odoo 19, ERP, Best Practices, Marketing, Integration, Compliance, Business Automation]
hub: integrations
description: "Control Odoo Social Marketing accounts, drafts, approvals and publishing ownership so a connected profile does not become an uncontrolled broadcast channel."
faqs:
  - q: "Does connecting an account mean every user should publish?"
    a: "No. Limit publishing access and define draft, review, scheduling and response responsibilities."
  - q: "What should be checked before scheduling?"
    a: "Confirm the account, audience, message, claims, link destination, time and person responsible after publication."
---

**Short answer:** Connecting a social account creates capability, not permission for every user to publish. Define who drafts, reviews, schedules and responds.

## Applies to

Odoo 19 Social Marketing. Platform rules, advertising law and brand policy remain external requirements.

## The decision to make

Which account and audience will receive the post, who approved the message and who monitors the response after publication?

## What Odoo can show

* Social streams connect external accounts to Odoo.
* Posts can be prepared and scheduled across selected accounts.
* Access to connected accounts can create material brand and privacy risk.

## A practical control design

1. **Use named account owners and backup administrators.**
2. **Separate draft preparation from approval for sensitive messages.**
3. **Check links, audience and timing before scheduling.**
4. **Review connected accounts when staff or agencies change.**

## Worked example

A campaign draft is prepared for two company profiles, but one message contains a market specific claim. The reviewer removes the wrong account, confirms the link and schedule, and assigns response monitoring after publication.

## When this approach fits

This fits teams coordinating planned organic social content across business accounts.

## Limits and boundaries

It does not override platform permissions or prove advertising and privacy compliance. Marketing and legal owners must review applicable claims.

## Common mistakes

**Sharing one external account password broadly.** Investigate the source and downstream effect before closing the exception.

**Publishing to every connected profile by default.** Investigate the source and downstream effect before closing the exception.

**Scheduling without checking destination links.** Investigate the source and downstream effect before closing the exception.

**Keeping former agencies connected.** Investigate the source and downstream effect before closing the exception.

## What the owner should review

Connected accounts, users with publishing access, posts awaiting review, failed publications, expired tokens and messages without response ownership.

The goal is not to remove every exception. It is to make important exceptions visible, owned and traceable to a decision.

## Related

Use the [ERP acceptance evidence worksheet](/resources/erp-acceptance-evidence/) to record the outcome and supporting records.

Read [How to Set Up Social Marketing in Odoo](/blog/2026/10/03/how-to-set-up-social-marketing-odoo/) for the connected workflow.

## Official references

1. [Social Marketing](https://www.odoo.com/documentation/19.0/applications/marketing/social_marketing.html)

*Sources: official Odoo 19 documentation is listed above. Confirm the corresponding documentation for the installed version before implementation. Examples are illustrative business scenarios, not client results or tests on a live database.*

If you need help translating these decisions into your own workflow, see my [Odoo consulting services](/services/odoo-consulting/).
