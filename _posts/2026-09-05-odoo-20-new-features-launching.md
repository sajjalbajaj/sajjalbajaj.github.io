---
layout: post
title: "Odoo 20 Features: Confirmed Capabilities and What to Test"
date: 2026-09-05 12:00:00 +0530
last_modified_at: 2026-11-27
tags: [Odoo, Odoo 20, Features, ERP, AI, Automation, Upgrade, Business Automation]
hub: planning
description: "Explore confirmed Odoo 20 capabilities through AI, documents, production and website examples, with links to detailed guides and practical limits."
faqs:
  - q: "Is this an exhaustive list of Odoo 20 changes?"
    a: "No. It is a selected capability map. Use the official release notes for the full release list and the detailed documentation for setup."
  - q: "Does every item in Odoo 20 release notes originate in version 20?"
    a: "No. Some notes explicitly identify availability from earlier versions. Check that qualification before describing a capability as entirely new."
  - q: "Do the same features work on every edition and hosting plan?"
    a: "Do not assume so. Confirm installed applications, edition, hosting, access and external service requirements for the feature being assessed."
---

**Short answer:** Odoo 20 has documented capabilities across AI, document handling, manufacturing and website operations. Use a shortlist matched to your business problem, then read the detailed requirements and test the outcome. A release list is neither an implementation specification nor proof that every item is new to version 20.

## Which sources replace the earlier preview?

This page originally discussed expected features before launch. It now uses the [Odoo 20 release notes](https://www.odoo.com/odoo-20-release-notes) and the linked official documentation.

Some release entries identify availability from earlier versions. Keep those qualifications when comparing versions. Describing an existing capability as newly introduced can lead a team to plan an unnecessary upgrade or overlook a configuration option it already has.

## Which AI capabilities deserve separate assessment?

The [agent documentation](https://www.odoo.com/documentation/20.0/applications/productivity/ai/agents.html) describes agents through instructions, knowledge, skills, tools and triggers. The [MCP server reference](https://www.odoo.com/documentation/20.0/applications/productivity/ai/mcp_server.html) addresses external client connections.

Those solve different problems. An internal agent's task definition is not the same as granting an external client access to database tools.

The [document sorting guide](https://www.odoo.com/documentation/20.0/applications/productivity/ai/document_sort.html) describes folder based prompts and available actions. Classification should still be checked before a document's routing is treated as an approved accounting or confidentiality decision.

## What should operations teams investigate?

| Business question | Guide to start with | Important distinction |
| --- | --- | --- |
| Can the next operation start on a partial quantity? | [Continuous production](/blog/2026/11/12/odoo-20-continuous-production/) | Work progress differs from finished stock |
| Which receipt checks did a supplier pass? | [Quality rate](/blog/2026/11/14/odoo-20-quality-rate/) | Check percentages differ from unit yield |
| Which demand needs incoming supply? | [Allocation report](/blog/2026/11/16/odoo-20-allocation-report/) | Allocation does not move inventory |
| Can a client use database tools? | [MCP server](/blog/2026/11/05/odoo-20-mcp-server/) | Connection approval differs from action permission |

Select the row that corresponds to a real issue. Avoid enabling all of them as an undefined “innovation” workstream.

## What should website teams review?

The release notes describe AI assisted page and form editing, default structured data, adaptive images and sitemap improvements. Each has a different acceptance result.

For a form, demonstrate the submission and destination record. For structured data, check that the entity agrees with the visible page. For images, inspect mobile loading and presentation. None of those checks can be replaced by a claim that the site now uses AI.

The [Website SEO guide](/blog/2026/11/26/odoo-20-website-seo-structured-data/) explains the rendered page checks.

## How should a feature shortlist become a decision?

For each candidate, state the current problem, confirmed capability, setup requirements and proposed evidence. Include the cost of adaptation and training as well as any service usage charges.

An illustrative shortlist might retain one reporting change for immediate assessment and defer an action taking AI pilot until permissions are clear. That is a planning decision, not a measured benefit from a completed deployment.

Use the [ERP acceptance evidence worksheet](/resources/erp-acceptance-evidence/) to record tests. For changes to an existing workflow, read [what needs review when moving from Odoo 19](/blog/2026/09/05/odoo-20-whats-getting-upgraded/).

*Official references reviewed on 27 November 2026. Examples and test cases are illustrative proposals, not completed customer tests. Check the installed version, edition, hosting and provider requirements.*
