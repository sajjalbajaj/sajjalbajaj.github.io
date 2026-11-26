---
layout: post
title: "Odoo 20 Release Date and Global Availability"
date: 2026-09-05 14:00:00 +0530
last_modified_at: 2026-11-27
tags: [Odoo, Odoo 20, Upgrade, ERP, Migration, ERP Migration, Planning, Scheduling]
hub: planning
description: "Check Odoo 20 release and support dates, major versus Online versions and hosting specific upgrade availability without assuming universal readiness."
faqs:
  - q: "When was Odoo 20 released?"
    a: "Odoo's current support table records September 2026 for Odoo 20.0. This page no longer treats the release as upcoming."
  - q: "Is Odoo 20.0 the same as an Online interim version?"
    a: "No. The support documentation distinguishes major versions from SaaS versions available only on Odoo Online."
  - q: "Is there a single production ready date for every database?"
    a: "No. Confirm the target version offered for the hosting, compatible custom modules, external dependencies and acceptance results."
---

**Short answer:** Odoo's current support table records the Odoo 20.0 release in September 2026 and lists that major version across Odoo Online, Odoo.sh and on premises hosting. That does not establish one upgrade date for every database. Confirm the target offered for your hosting and the readiness of your own dependencies.

## Which release date is supported by the source?

The [standard and extended support reference](https://www.odoo.com/documentation/20.0/administration/standard_extended_support.html) provides the release month. It also lists September 2029 as the planned end of standard support for Odoo 20.0.

This page previously mixed a launch preview with an assumed later stable patch window. That unsupported timetable has been removed. The support table establishes release and support information, rather than a guaranteed date on which every custom installation becomes ready.

## How do major and Online versions differ?

Odoo distinguishes major versions from SaaS or Online versions. The support page describes the latter as available only on Odoo Online.

When discussing an upgrade, record the exact source and target version. A reference to “the newest Odoo” is insufficient if one team means an Online interim release and another is preparing code for a major version on Odoo.sh.

The target choices shown for a particular database and the provider's notices should guide the practical request.

## What should be checked for each hosting arrangement?

| Hosting | Availability question |
| --- | --- |
| Odoo Online | Which target and upgrade notice apply to this database? |
| Odoo.sh | Is the staging upgrade successful with compatible custom code? |
| On premises | Are target dependencies, code, database and filestore ready? |

The [upgrade documentation](https://www.odoo.com/documentation/20.0/administration/upgrade.html) gives different processes and obligations by hosting. Do not replace those distinctions with a claim that everyone receives an identical production rollout on the same day.

## Is there a separate India readiness question?

The support table describes hosting and version status, rather than certifying a company's country configuration. For an Indian installation, confirm the relevant localisation modules, portal connections and validated accounting outputs.

The [India guide](/blog/2026/09/05/odoo-20-in-india-availability-and-gst/) covers that assessment. A globally released version and a locally accepted implementation are related, but separate, facts.

## When should a business actually move?

Use current support obligations, dependency readiness and test results. Do not adopt an arbitrary rule to wait four to eight weeks after a first patch. That rule cannot account for an urgent support deadline or an unavailable critical connector.

For the commercial timing decision, see [whether and when to upgrade](/blog/2026/08/10/odoo-20-migration-should-you-upgrade-and-when/). For the conversion steps, use the [migration execution guide](/blog/2026/08/10/upgrading-to-odoo-20-migration-guide/).

## What is a reliable availability record?

Retain the date checked, exact target version offered, hosting, compatible module evidence and provider response. Link those records to the test results and the authorised production decision.

Recheck shortly before cutover if development or production configuration has changed. The [ERP acceptance evidence worksheet](/resources/erp-acceptance-evidence/) can connect those conditions without treating a release date as business acceptance.

*Official references reviewed on 27 November 2026. Examples and test cases are illustrative proposals, not completed customer tests. Check the installed version, edition, hosting and provider requirements.*
