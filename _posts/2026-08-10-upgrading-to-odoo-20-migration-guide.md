---
layout: post
title: "Upgrading to Odoo 20: A Practical Migration Guide"
date: 2026-08-10 09:00:00 +0530
last_modified_at: 2026-11-27
tags: [ERP, Odoo, Migration, ERP Implementation, Digital Transformation, Inventory Management, Stock Control, Business Automation]
hub: planning
description: "Plan an Odoo 20 test upgrade, custom module adaptation, neutralised integrations, acceptance testing, cutover and hosting specific recovery."
faqs:
  - q: "Does a standard upgrade include changing edition or hosting?"
    a: "No. Odoo's upgrade documentation separates version upgrades from edition changes, hosting changes and migration from another ERP. Scope those activities explicitly."
  - q: "Why might scheduled jobs or emails not run on a test database?"
    a: "Odoo neutralises test databases to reduce unintended production effects. Verify disabled processes and use controlled test credentials for integration checks."
  - q: "Can every production upgrade be undone with one click?"
    a: "No. Recovery differs by hosting and circumstances. Confirm the supported process and how post cutover transactions would be preserved before approving the move."
---

**Short answer:** An Odoo 20 migration needs a test database conversion, compatible custom code, workflow checks and a rehearsed production cutover. Verify neutralised integrations in testing and agree recovery for the actual hosting. A completed conversion is not evidence that users can safely resume every business process.

## What does the upgrade project include?

The [Odoo upgrade documentation](https://www.odoo.com/documentation/20.0/administration/upgrade.html) describes moving a database to a newer supported version. It separates that activity from changing edition, changing hosting and migrating from a different ERP.

Record the starting version, edition and hosting, target version, company scope and module inventory. If the project includes a hosting move or business redesign, give those changes their own responsibilities and acceptance conditions.

## How should the test upgrade be organised?

Request the upgraded test database through the supported route for your hosting. In parallel, obtain compatible custom module code from its maintainer.

Odoo's [customised database guidance](https://www.odoo.com/documentation/20.0/developer/howtos/upgrade_custom_db.html) distinguishes checking modules on an empty target database from testing them on the upgraded business database. The first can reveal installation and compatibility issues; the second exposes interactions with existing records and configuration.

For self hosted work, follow the documented treatment of the filestore and attachments. A database that opens while its documents are missing is not a complete rehearsal.

## Why are test integrations different from production?

Read the [neutralised database reference](https://www.odoo.com/documentation/20.0/administration/neutralized_database.html). Test environments disable or alter processes such as outgoing mail, scheduled actions, bank connections and payment or delivery services to reduce unintended effects.

Inspect custom connectors separately. Do not assume every external endpoint has become safe merely because the database displays a test banner. Use sandbox credentials and controlled destinations where available.

A silent scheduled action can therefore mean test neutralisation rather than a broken upgrade. Record which integrations were intentionally disabled and how their behaviour will be demonstrated safely.

## Which acceptance cases should users run?

Use end to end cases from actual responsibilities. An illustrative distributor could test a partial receipt, a tracked delivery, a customer invoice and the resulting report.

| Area | Proposed evidence |
| --- | --- |
| Sales and warehouse | Order, reservation, delivery and remaining demand agree |
| Accounting | Opening balances, selected transactions and reports reconcile |
| Access | Intended users can work and unrelated records remain restricted |
| Integrations | Successful transaction, refusal, retry and owned failure |
| Documents | Required attachments and generated outputs remain usable |

Record expected results before execution and assign discrepancies. The [ERP acceptance evidence worksheet](/resources/erp-acceptance-evidence/) includes a blank CSV for this work.

## How should cutover be rehearsed?

Rehearse with a recent copy and the intended code. Record conversion duration, deployment order, data freeze, verification steps and the person who decides whether to reopen.

Changes made in production after a copy is taken do not automatically appear in that copy. Define the last included transaction and how any allowed late activity is captured. Avoid vague instructions to load remaining data without a controlled method.

## What does recovery need to cover?

Confirm the hosting specific behaviour. Odoo documents different production upgrade processes and cautions; there is no universal one click downgrade promise.

Agree a tested backup and restore route where applicable, a decision deadline and the treatment of transactions entered after reopening. Restoring an older database without reconciling new orders or payments can lose legitimate business activity.

## What happens after reopening?

Verify critical transactions before normal volume resumes. Check authorised production endpoints, scheduled processes, attachments and user access. Assign support owners for the first operating cycles and the first relevant financial close.

For the investment and timing decision that precedes this work, read [whether and when to upgrade](/blog/2026/08/10/odoo-20-migration-should-you-upgrade-and-when/).

*Official references reviewed on 27 November 2026. Examples and test cases are illustrative proposals, not completed customer tests. Check the installed version, edition, hosting and provider requirements.*
