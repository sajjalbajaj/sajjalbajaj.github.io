---
layout: post
title: "Odoo Online, Odoo.sh or Self Hosting: Who Runs What?"
date: 2026-10-30 08:00:00 +0530
tags: [Odoo, Odoo 19, Hosting, Security, ERP, Implementation, Best Practices, SME]
hub: admin
description: "Choose Odoo hosting by custom code needs, release control, backups and operating responsibility rather than comparing server prices alone."
faqs:
  - q: "Can Odoo Online run custom modules?"
    a: "The official documentation says Odoo Online is incompatible with custom modules and modules from the Odoo Apps Store. Check whether configuration alone meets the requirement."
  - q: "Does self hosting remove the need for support?"
    a: "No. It assigns infrastructure, security, backup and recovery responsibilities to the organisation or its appointed provider, alongside application support."
---

**Short answer:** choose Odoo hosting according to the application requirements and the people who will operate it. Custom code, deployment control, recovery arrangements and infrastructure ownership matter more than a server price comparison. Establish those requirements before assuming that Online, Odoo.sh and self hosting are interchangeable ways to run the same solution.

## Applies to

Odoo 19 hosting decisions. Odoo Online and Odoo.sh are distinct managed services; self hosting requires a separately operated deployment. The corresponding Odoo 20 documentation was checked in October 2026. This article targets Odoo 19; confirm your installed version before following any screen labels.

## Can the requirement fit Odoo Online?

Odoo Online provides a managed database accessed through a browser. The official documentation says it does not support custom modules or modules from the Odoo Apps Store. That boundary should be checked early if a proposal depends on a specialist extension.

Configuration can still satisfy many requirements without custom code. I would ask for a focused demonstration of the important workflow and its exceptions. A general claim that the platform is flexible does not establish whether a particular dependency fits the service.

Identify how the business will manage its database account, backups and available upgrade process. A managed service reduces infrastructure work, but the customer still owns business decisions, access administration and data quality. Those responsibilities need named people even when there is no server for them to maintain.

## When does Odoo.sh fit?

Odoo.sh provides a development and deployment environment for Odoo projects, including production, staging and development branches. It can fit a solution that requires maintained custom modules and a controlled path for changes. The business still needs someone responsible for the code and its compatibility.

The branch types serve different purposes. Staging uses a neutralised production copy for evaluation, while development environments support development work. Do not treat a temporary environment as a permanent archive or assume every branch has the same backup behaviour.

The official documentation explains that staging neutralisation affects scheduled actions, outgoing email and other services. Custom connections still need review before a rehearsal. A platform safeguard is useful, but it does not establish that every bespoke external action is harmless in a copied database.

## What does self hosting require?

Self hosting gives the organisation or its provider responsibility for the operating environment. That includes deployment, monitoring, updates, network configuration, backups and recovery. The official deployment guide describes production security and configuration considerations that go beyond starting an application process.

Assign ownership of the database and filestore as well as the application code. A recovery procedure needs the components that belong together. Monitoring should identify failures that matter to the business, including unavailable services and failed background processing, rather than only showing that a server is powered on.

Ask who responds outside ordinary office hours and how an incident is escalated. A technically capable employee may still be an unsuitable sole recovery dependency. The operating arrangement should survive leave, staff changes and an unavailable primary contact.

## Worked example: a service firm needs one custom integration

Imagine a service firm whose standard workflows fit Odoo, but which needs a bespoke connection to an external scheduling system. The team first checks whether the requirement can be met through supported configuration and available interfaces. It avoids selecting a platform solely from the sales presentation.

If a custom module is necessary, Online's restriction becomes a material decision point. The team compares an Odoo.sh project with a separately managed deployment, including who maintains the connector, approves releases and investigates failures.

The final choice depends on available operating capability and the connector's requirements. A lower infrastructure quote is not decisive if nobody owns recovery. Equally, a custom hosting arrangement is unnecessary if the business can meet the requirement within the managed service's supported boundaries.

## How easy is it to change later?

Hosting can change, but compatibility and transfer procedures matter. The official guidance identifies restrictions around Online intermediary versions and nonstandard applications. Treat a move as planned work with a supported source, destination and transition procedure.

Record what would trigger a move, such as a new custom module or an infrastructure requirement. Then assess the consequences before promising that a future migration will be trivial. Backups, subscription arrangements, external services and operational testing may all require coordination.

Keep hosting changes separate from version upgrades in the plan, even if they are delivered together. Each introduces assumptions that need review. Combining them without clear ownership can make a failed rehearsal harder to diagnose.

## Common mistakes and the selection checklist

Common mistakes include confusing hosting with edition, assuming managed infrastructure maintains custom code and treating a backup download as proof of recovery. Another is selecting self hosting without budgeting for the people who operate it.

Build a short comparison with requirements in the rows: custom modules, release process, recovery, external connectivity, account ownership and support. For each option, record the evidence and responsible party. Avoid scoring a capability as available until the proposed service actually includes it.

Before deciding, rehearse the conversation you would have during an outage or a failed release. Who can act, what access do they have and which evidence confirms recovery? The hosting choice is ready when those answers are as clear as the subscription and infrastructure quotation.

## Related

Compare operating costs with [the Odoo ownership cost model](/blog/2026/10/29/odoo-total-cost-of-ownership/).

## Official references

1. [Odoo Online capabilities](https://www.odoo.com/documentation/19.0/administration/odoo_online.html)
1. [Odoo.sh environments](https://www.odoo.com/documentation/19.0/administration/odoo_sh/getting_started/branches.html)
1. [Self hosted deployment guidance](https://www.odoo.com/documentation/19.0/administration/on_premise/deploy.html)
1. [Changing hosting type](https://www.odoo.com/documentation/19.0/administration/hosting.html)

*How this article was checked: the official Odoo 19 references and their Odoo 20 counterparts were reviewed in October 2026. Examples are illustrative planning exercises, not client results or tests on a live database.*

For help applying this to your business, see my [Odoo consulting services](/services/odoo-consulting/).
