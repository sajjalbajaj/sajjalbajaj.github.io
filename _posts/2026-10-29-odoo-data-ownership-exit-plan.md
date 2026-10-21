---
layout: post
title: "Odoo Data Ownership and Exit Planning: What to Keep Accessible"
date: 2026-10-29 09:00:00 +0530
tags: [Odoo, Odoo 19, ERP, Data Import, Migration, Security, Best Practices, SME]
hub: planning
description: "Plan Odoo data access and supplier handover with usable exports, backups, attachment retrieval, account ownership and documented integration dependencies."
faqs:
  - q: "Is a spreadsheet export a complete Odoo backup?"
    a: "No. Selected exported fields do not recreate the database, attachments, custom code and operating configuration needed for restoration."
  - q: "Does access to source code settle every ownership question?"
    a: "No. Usage rights, licences, hosting access and contractual ownership are separate questions. Record the applicable agreements and obtain advice where interpretation is needed."
---

**Short answer:** practical ownership means the business can access its records, operate its accounts and hand over its system with understandable evidence. Plan exports, backups, attachments, credentials and custom module dependencies before a supplier change becomes urgent. These operational preparations complement the applicable contracts and licences; they do not replace them.

## Applies to

Odoo 19 data portability and operational ownership. Export behaviour, backup access and hosting transfer requirements depend on the deployment and permissions. The corresponding Odoo 20 documentation was checked in October 2026. This article targets Odoo 19; confirm your installed version before following any screen labels.

## Which accounts should the business control?

Start with the Odoo subscription, database management account, hosting project, source repository and domain. Add email, payment, shipping and messaging accounts that the system relies on. Record the authorised owner and an alternate contact for each service.

I would avoid making a departing employee or external consultant the only person who can recover an account. Use the provider's supported ownership and access arrangements. Maintain individual access where possible so that changes can be attributed and removed without sharing a single permanent administrator password.

For Odoo Online, the official management documentation describes an ownership transfer request through support. Treat that as a process to arrange and verify, rather than assuming that changing a user's email transfers every commercial or administrative responsibility. Confirm access with the intended owner after any handover.

## What should an export actually contain?

Define the purpose before selecting fields. A contact list for reference differs from a migration extract that must preserve relationships between customers, orders and invoices. Keep identifiers that allow records to be matched reliably rather than relying only on names that may repeat or change.

Odoo's import and export guidance explains external identifiers and their role in mapping records. Preserve the mapping explanation with the files. An exported identifier is useful only when the receiving team understands which source and object it represents.

Include the records needed to explain outstanding work. Open invoices, unfulfilled orders and active service obligations often matter more to an operational transition than a large collection of closed history. Agree how attachments and linked documents will be retrieved, because a row of text does not necessarily contain the evidence users need.

## How are backups different from portable records?

A backup supports restoration of an environment. It is not automatically a convenient archive or a format that another ERP can consume directly. Restoration may require a compatible Odoo version, custom modules and the associated filestore. Record those dependencies alongside the backup procedure.

Conversely, a readable export can support review without recreating all system behaviour. Keep both needs visible. The finance team may need historical document retrieval, while a technical recovery team needs the components required to run the application.

Hosting transfers have compatibility constraints. Odoo Online does not support custom modules, and intermediary Online versions require attention when moving to other hosting. Review the official transfer process before selecting a destination. A downloadable backup does not mean every destination can run it unchanged.

## Worked example: changing implementation partners

Consider a business changing partners after its first year on Odoo. Its records are available, but the source repository belongs to an individual developer and nobody can explain the scheduled connection to a warehouse service. The immediate handover risk is therefore broader than exporting customers and products.

The business inventories the accounts, obtains appropriate repository access and documents the integration's inputs, outputs and failure handling. It prepares sample exports with identifiers and retrieves representative invoice attachments. A technical owner records the version and modules needed for a recovery environment.

The incoming team then follows the documentation using authorised access. Missing information becomes a specific handover item. This exercise establishes practical continuity without requiring the business to migrate away from Odoo merely to prove that it has options.

## When should an exit plan be prepared?

Prepare a proportionate plan during implementation and refresh it when important dependencies change. It is useful for supplier transitions, internal staff departures, hosting changes and disaster recovery. The plan should remain short enough that someone can maintain it.

Not every organisation needs a full migration rehearsal immediately. It should still be able to demonstrate access, retrieve important records and identify the components needed for restoration. Increase the depth when customisation, business criticality or supplier dependency grows.

Record retention and deletion requirements with the responsible business adviser. Different records can have different obligations, and operational convenience does not determine those obligations. The exit plan should explain how approved retention decisions will be carried out without inventing a universal rule.

## Common mistakes and a useful handover pack

Common mistakes include treating login access as account ownership, assuming a backup includes every external dependency and keeping exports without a field dictionary. Another is waiting until access is being withdrawn before asking who holds the recovery credentials.

A useful pack contains account owners, environment details, export definitions, attachment retrieval instructions, backup responsibilities, module sources and integration contacts. Include known limitations and outstanding obligations. Keep secrets in an appropriate credential system rather than copying them into an ordinary project document.

Finally, ask someone other than the author to use the pack. Can they locate a specific invoice, identify its related customer and explain how the system would be restored? The answer is stronger evidence of operational control than a statement in a proposal that the customer owns all data.

## Related

For migration preparation, read [opening balances and cutover](/blog/2026/10/27/odoo-opening-balances-cutover/).

## Official references

1. [Importing and exporting data](https://www.odoo.com/documentation/19.0/applications/essentials/export_import_data.html)
1. [Odoo Online database management](https://www.odoo.com/documentation/19.0/administration/odoo_online.html)
1. [Hosting transfers](https://www.odoo.com/documentation/19.0/administration/hosting.html)

*How this article was checked: the official Odoo 19 references and their Odoo 20 counterparts were reviewed in October 2026. Examples are illustrative planning exercises, not client results or tests on a live database.*

For help applying this to your business, see my [Odoo consulting services](/services/odoo-consulting/).
