---
layout: post
title: "Odoo 20: What to Expect and How to Prepare"
date: 2026-07-31 09:00:00 +0530
last_modified_at: 2026-11-27
tags: [ERP, Odoo, AI, Digital Transformation, Bookkeeping, Business Intelligence, Data Analytics, Business Automation]
hub: planning
description: "Prepare for Odoo 20 with a process inventory, feature shortlist, dependency checks and clear ownership before choosing an upgrade project."
faqs:
  - q: "Is Odoo 20 still an upcoming release?"
    a: "No. Odoo's support table lists Odoo 20.0 as released in September 2026. Earlier preview wording in this article has been replaced with current preparation advice."
  - q: "What should be prepared before requesting an upgrade?"
    a: "Record the current version, edition, hosting, installed modules, custom code, integrations and critical business workflows."
  - q: "Does a release note prove a feature will work in my database?"
    a: "No. Confirm the feature's requirements and demonstrate it with the intended user roles, modules and representative records."
---

**Short answer:** Odoo 20 is released, so preparation should now focus on your actual database and business processes. Build an inventory of modules, custom work and integrations, shortlist the changes that matter, and assign owners to the evidence needed for an upgrade decision.

## What has changed since this article was first published?

This page began as a July 2026 preview. It has been revised to remove expectations presented as current facts. Odoo's [standard and extended support table](https://www.odoo.com/documentation/20.0/administration/standard_extended_support.html) records the September 2026 release of Odoo 20.0.

Use the [official release notes](https://www.odoo.com/odoo-20-release-notes) for confirmed product changes. They describe capabilities, but do not establish that your custom modules, country requirements or connected services are ready.

## What should the starting inventory contain?

Record the current version and build, edition, hosting, installed applications and active companies. Then identify the owner of each custom module, connector, report and automated action.

Include apparently small adaptations such as modified invoice layouts, export files and access rules. These can matter to a customer or regulator even when they are absent from the main project presentation.

| Inventory item | Question to answer |
| --- | --- |
| Business workflow | What must staff still be able to complete? |
| Custom module | Who supplies and maintains the target version? |
| Integration | Which system owns credentials, retries and errors? |
| Report | Which source balances or records must it reproduce? |
| User role | Which permitted and refused actions must remain correct? |

## How should new features be shortlisted?

Start with an existing operational problem. A planner might need earlier movement between work orders; a finance team might need clearer bank matching; a support team might want assistance using approved procedures.

Link each problem to a documented capability, then identify what remains a business decision. For example, a new stock report can expose a reservation but cannot decide which customer receives priority.

Select a few workflows for assessment. Turning on unrelated features during the upgrade makes it harder to understand whether an issue came from version conversion or process redesign.

## What should a discovery review produce?

Consider an illustrative distributor with a courier connector and custom customer statements. Discovery should identify the connector owner, available Odoo 20 version, statement reconciliation examples and the people who can approve them.

The output is a dependency list with an owner and an evidence request. It is not a promised completion date based only on the number of installed apps.

For the detailed operating implications, consult the guides on [continuous production](/blog/2026/11/12/odoo-20-continuous-production/), [bank consistency](/blog/2026/11/10/odoo-20-bank-consistency-payment-status/) and [AI agent scope](/blog/2026/11/04/odoo-20-ai-agents-governance/).

## What comes after preparation?

Use the inventory to make a [whether and when to upgrade decision](/blog/2026/08/10/odoo-20-migration-should-you-upgrade-and-when/). If the project proceeds, the separate [migration guide](/blog/2026/08/10/upgrading-to-odoo-20-migration-guide/) covers test conversion and cutover.

Capture expected outcomes in the [ERP acceptance evidence worksheet](/resources/erp-acceptance-evidence/). Preparation is complete when the important unknowns have owners and a route to evidence, even if some dependencies still block production.

*Official references reviewed on 27 November 2026. Examples and test cases are illustrative proposals, not completed customer tests. Check the installed version, edition, hosting and provider requirements.*
