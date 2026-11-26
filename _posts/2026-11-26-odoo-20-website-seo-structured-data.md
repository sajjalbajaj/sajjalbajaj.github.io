---
layout: post
title: "Odoo 20 Website SEO: Structured Data, Sitemaps and Duplicate Pages"
date: 2026-11-26 07:00:00 +0530
tags: [Odoo, Odoo 20, ERP, Best Practices, Website, SEO, Analytics, Content Marketing]
hub: website
description: "Check Odoo 20 generated structured data, sitemap eligibility, paginated URLs and adaptive images without assuming automatic search visibility."
last_modified_at: 2026-11-27
faqs:
  - q: "Does default structured data guarantee a rich result?"
    a: "No. The markup must accurately describe the visible page, and search engines decide eligibility and display."
  - q: "What sitemap improvement is confirmed in Odoo 20?"
    a: "The release notes describe limiting sitemap entries to indexable 2XX URLs and keeping within size and URL limits."
  - q: "Does adaptive image sizing replace mobile testing?"
    a: "No. Check the actual selected images, dimensions, loading behaviour and page performance on representative devices."
---

**Short answer:** Odoo 20 adds default structured data, tighter sitemap eligibility, refined pagination handling and adaptive image sizing. These are useful foundations for SEO. Inspect the rendered pages and real URLs, because generated metadata cannot guarantee indexing, remove every duplicate or make inaccurate content trustworthy.

## Which changes are confirmed by the release notes?

The [Odoo 20 release notes](https://www.odoo.com/odoo-20-release-notes) identify those four changes. The [Website SEO documentation](https://www.odoo.com/documentation/20.0/applications/websites/website/structure/seo.html) provides the broader workflow for titles, descriptions, image text, indexation and sitemap maintenance.

The release establishes product behaviour, not a measured improvement for a particular website. Treat traffic or ranking gains as something to observe after implementation.

## What should structured data actually describe?

Review a service page, blog article and product page separately. Confirm that the generated entity, name, URL and image agree with the visible content and the business's verified identity.

Look for additional markup from a theme or custom module. Conflicting copies can describe different authors, products or URLs. Validate the final rendered page, rather than reviewing only the template or editor fields.

Do not add ratings, certifications or claims solely to make markup look richer. Structured data should represent facts the page can support.

## How should sitemap eligibility be tested?

Take a sample of sitemap entries and request the destinations. Check the successful response, indexation instruction and canonical URL. Then test a redirect, an unpublished page and a page intentionally excluded from search.

| URL case | Review question |
| --- | --- |
| Published public page | Is it indexable and represented by the intended URL? |
| Redirected old page | Does discovery lead to the current destination? |
| Excluded page | Is it absent from the indexable sitemap population? |
| Paginated collection | Can visitors and crawlers reach the intended content? |

The documentation notes sitemap caching, so allow for the supported refresh behaviour when evaluating a recent edit. Do not repeatedly alter page settings because an immediate request still shows an older sitemap.

## Why does pagination still need manual review?

Refined default logic does not establish that every custom filter, theme or route produces a useful search page. Inspect category pagination, sorting and filtered URLs.

Check whether equivalent content is presented through several addresses and whether the canonical destination is appropriate. Preserve useful navigation to deeper products or articles when reducing duplicates.

## What should mobile image testing cover?

Adaptive image selection helps a browser request an appropriate size. Review the actual image loaded, its dimensions and the space reserved in the layout. Oversized originals, unsuitable crops and missing descriptive alternative text still need attention.

Compare representative mobile pages before and after the change using the same conditions. Record observations rather than promising a universal speed increase.

The [existing SEO guide](/blog/2026/08/24/seo-in-odoo-website/) covers the wider content foundation. Capture the proposed URL and markup checks in the [ERP acceptance evidence resource](/resources/erp-acceptance-evidence/).

*Sources reviewed on 27 November 2026. Scenarios are proposed acceptance cases, not reported customer results. Confirm edition, installed modules and provider requirements for your database.*
