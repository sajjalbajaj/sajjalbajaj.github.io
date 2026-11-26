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

## What Odoo records and what the business must decide

* Redirects help after deletion, URL changes or migration.
* Sequence affects how multiple rules are applied.
* Chains make troubleshooting and maintenance harder.

## A practical control design

1. **Keep an inventory of changed public URLs.**
2. **Use the most specific useful destination.**
3. **Update internal links and canonical references.**
4. **Review chains, loops and destinations returning errors.**

## Worked example

A service page moves from an old category to a new permanent URL. The team creates one direct redirect, updates menus and article links, and removes a previous rule that would have sent visitors through two hops.

## When it fits

This fits site reorganisations, migrations and renamed pages with existing links or search history.

## Limits and boundaries

It does not guarantee ranking preservation. Search engines decide crawling and indexing, so monitor the result.

## Common mistakes

**Sending every removed page to the homepage.** Review the underlying record and the next operational consequence before closing the exception.

**Creating redirect chains.** Review the underlying record and the next operational consequence before closing the exception.

**Leaving internal links pointed at old URLs.** Review the underlying record and the next operational consequence before closing the exception.

**Forgetting rules after the destination is removed.** Review the underlying record and the next operational consequence before closing the exception.

## What the owner should review

Top incoming old URLs, chains, loops, redirect destinations, internal links and 404 logs.

The goal is not to remove every exception. It is to make each important exception visible, owned and traceable to a decision.

## Related

Use the [ERP acceptance evidence worksheet](/resources/erp-acceptance-evidence/) to record the outcome and supporting records.

Read [SEO in Odoo Website: Getting Found on Google](/blog/2026/08/24/seo-in-odoo-website/) for the connected workflow.

## Official references

1. [Pages and redirects](https://www.odoo.com/documentation/19.0/applications/websites/website/web_design/pages.html)
1. [Website](https://www.odoo.com/documentation/19.0/applications/websites/website.html)

*How this article was checked: official Odoo 19 documentation was reviewed in November 2026. Confirm the corresponding documentation for the installed version before implementation. Examples are illustrative business scenarios, not client results or tests on a live database.*

If you need help translating these decisions into your own workflow, see my [Odoo consulting services](/services/odoo-consulting/).
