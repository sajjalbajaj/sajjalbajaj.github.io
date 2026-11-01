---
layout: post
title: "Odoo Website Redirects: Prevent Broken Links and Chains"
date: 2026-11-29 10:00:00 +0530
tags: [Odoo, Odoo 19, ERP, Best Practices, Customer Management, Business Automation, Setup, Analytics]
hub: website
description: "Control Odoo website redirects with destination checks, ownership and periodic review so URL changes preserve useful traffic without creating chains."
faqs:
  - q: "Should every removed page redirect to the homepage?"
    a: "No. Use the closest relevant replacement; some removed content may properly remain unavailable."
  - q: "Why update internal links if a redirect exists?"
    a: "Direct links reduce chains, improve clarity and make future maintenance easier."
---

**Short answer:** Redirect every retired URL to the closest useful replacement, then update internal links so the redirect is a safety net rather than permanent navigation.

## Applies to

Odoo 19 Website redirects. Search indexing behaviour remains under search engine control.

## Start with the decision

Why did the URL change, what is the closest replacement and are there existing redirects that would create a chain?

The configuration should follow that decision. It should not become the place where an unresolved policy choice is hidden. Write down the expected outcome, the owner and the evidence that will show the step is complete. This gives administrators a testable rule and gives reviewers a reason for each exception.

## What Odoo records and what the business must decide

* Redirects help after deletion, URL changes or migration.
* Sequence affects how multiple rules are applied.
* Chains make troubleshooting and maintenance harder.

These records make the workflow visible, but they do not judge the commercial, legal or operational meaning on their own. The process owner must decide which source is authoritative, who may correct it and what happens when two records disagree.

## A practical control design

1. **Keep an inventory of changed public URLs.**
2. **Use the most specific useful destination.**
3. **Update internal links and canonical references.**
4. **Review chains, loops and destinations returning errors.**

Keep the exception route as clear as the normal route. Staff should know where to place an item that cannot yet be completed, who reviews it and which deadline or business event should bring it back for attention. A dashboard with only completed records can look healthy while unresolved work remains outside the system.

## How to introduce the control

Start with a small set of representative records: one normal transaction, one incomplete record, one correction and one case near a reporting or operational cutoff. Walk each example through the proposed workflow with the people who create, review and use the result. This exposes differences in language and responsibility before they become configuration problems.

Configure the minimum fields and stages needed to express the agreed decision. Add automation only after the team can explain the manual path. An automated action should have a narrow trigger, a visible result and an exception route. If users cannot tell why a record moved or changed, the automation will make investigation slower even when it saves keystrokes.

Before release, compare permissions with actual responsibilities. The person who enters a record may not be the person authorised to approve a correction or financial outcome. Test the workflow with ordinary users as well as administrators, and include a record that should be refused or returned for more information.

## Evidence to keep with the decision

Keep the source reference, responsible person, relevant date, reason for any correction and the final linked record. Where a decision depends on an external document, bank movement, customer message or manager confirmation, retain the reference according to the organisation's document and privacy policy. Avoid copying sensitive material into several places merely to make it visible.

A useful audit trail lets a reviewer reconstruct the sequence without relying on a private inbox or someone's memory. It should show what was known at the time, what exception was found, who resolved it and which downstream record was affected. That is more valuable than a long activity history with no clear outcome.

## Worked example

A service page moves from an old category to a new permanent URL. The team creates one direct redirect, updates menus and article links, and removes a previous rule that would have sent visitors through two hops.

The example is illustrative. The useful point is the sequence: confirm the business event, compare it with the Odoo record, resolve the difference with an accountable owner and retain enough context for the next person to understand the result.

## When it fits

This fits site reorganisations, migrations and renamed pages with existing links or search history.

## Limits and boundaries

It does not guarantee ranking preservation. Search engines decide crawling and indexing, so monitor the result.

Where local law, tax, employment, privacy or regulated practice matters, have the appropriate specialist define the requirement. Then test whether the configured workflow produces the required record. A software screen is not evidence that the policy itself is correct.

## Common mistakes

**Sending every removed page to the homepage.** Review the underlying record and the next operational consequence before closing the exception.

**Creating redirect chains.** Review the underlying record and the next operational consequence before closing the exception.

**Leaving internal links pointed at old URLs.** Review the underlying record and the next operational consequence before closing the exception.

**Forgetting rules after the destination is removed.** Review the underlying record and the next operational consequence before closing the exception.

## What the owner should review

Top incoming old URLs, chains, loops, redirect destinations, internal links and 404 logs.

Review a small sample as well as totals. Sampling shows whether the reason, source document and next action are understandable, while totals reveal ageing and recurring patterns. Repeated manual corrections usually indicate a rule, data source or ownership problem worth fixing upstream.

The goal is not to remove every exception. It is to make each important exception visible, owned and traceable to a decision.

## Related

Read [SEO in Odoo Website: Getting Found on Google](/blog/2026/08/24/seo-in-odoo-website/) for the connected workflow.

## Official references

1. [Pages and redirects](https://www.odoo.com/documentation/19.0/applications/websites/website/web_design/pages.html)
1. [Website](https://www.odoo.com/documentation/19.0/applications/websites/website.html)

*How this article was checked: official Odoo 19 documentation was reviewed in November 2026. Confirm the corresponding documentation for the installed version before implementation. Examples are illustrative business scenarios, not client results or tests on a live database.*

If you need help translating these decisions into your own workflow, see my [Odoo consulting services](/services/odoo-consulting/).
