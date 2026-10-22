---
layout: post
title: "Odoo Import External IDs: Keep Updates on the Right Records"
date: 2026-11-19 08:00:00 +0530
tags: [Odoo, Odoo 19, ERP, Best Practices, Data Import, Migration, Integration, Setup]
hub: admin
description: "Use stable Odoo import external IDs to update the intended records, preserve relationships and prevent repeated files from creating duplicate data."
faqs:
  - q: "Is a record name a reliable import identifier?"
    a: "Names can be repeated or changed. A stable External ID provides a more reliable reference for repeat updates and relationships when it is mapped correctly."
  - q: "Can different records share the same External ID?"
    a: "No. Odoo documents conflicts where multiple records use the same External ID. Use a naming convention that prevents collisions across source tables and objects."
---

**Short answer:** Keep a stable External ID for each record that will be imported again or referenced by another file. Do not regenerate identifiers from changing names or spreadsheet row positions. I treat the mapping between source data and Odoo as part of the migration deliverable, with an owner and a preserved record of decisions.

## Applies to

Odoo 19 standard import and export tools across editions, subject to the user permissions and fields available for each model. Odoo 20 documentation was reviewed and changes the export interface, including the Updatable fields only label. The identifier and field mapping decisions remain relevant; use the screens for your installed version.

## What problem does an External ID solve?

An import needs to distinguish a new business record from an update to an existing one. A customer name is a weak basis for that distinction because names can change and different customers can share similar names. An identifier provides continuity even when the description changes.

Odoo documents External IDs as useful for updating records without creating duplicates and for linking related records. This does not make a file automatically safe to rerun. The identifier must still refer to the intended object, and the mapped values must represent the changes the business wants.

Think of the identifier as a durable connection, not a decorative spreadsheet column. If someone removes it before the second import, the workflow may no longer identify the existing records as intended. A tidy looking file can therefore be less reliable than the original export it replaced.

## How should identifiers be named?

Use a convention that separates source systems and record types. A source customer and a source product might both have numeric key 42. Their Odoo External IDs should not collide simply because the original systems reused the number in different tables.

The official documentation recommends prefixes to avoid such conflicts. Choose a convention the team can explain and maintain. Preserve the original source key in the mapping record so future corrections do not depend on remembering how a particular identifier was constructed.

Avoid using the current spreadsheet row number as identity. Sorting, filtering or inserting a row would change the relationship. Likewise, deriving identity from a customer name can create a new identifier when the customer changes its trading name, even though the business record should remain the same.

## How do related records stay connected?

Import parent or referenced records before records that depend on them. For example, people linked to companies need a reliable reference to the intended company. Use the relevant relationship field with the External ID rather than hoping a repeated display name will resolve unambiguously.

Review the mapping separately from the visible data. A contact's email address may be correct while its company relationship is wrong. Such a file can look convincing when reviewed row by row without examining the linked organisation.

Keep one approved mapping register for the migration or recurring import. Record intentional mergers, excluded source records and changes in business identity. If two old customer accounts become one approved Odoo customer, that decision should be explicit rather than an accidental side effect of matching similar names.

## Worked example: a supplier renames its business

Imagine an illustrative purchasing team that imports supplier contact details from a maintained source file. A supplier changes its trading name, while the underlying relationship and source identifier remain the same.

The team updates the name against the existing External ID. Related contacts continue to reference that same supplier identity. Before applying the file, the owner reviews the changed name and confirms that it is a rename, not a different legal supplier taking over the account.

If the identifier had been generated from the old name, a newly generated file could instead describe a second record. Purchasing would then see two plausible suppliers, with history divided between them. A stable identifier and an explicit business review prevent that avoidable ambiguity.

## When it fits and when it doesn't

External IDs are especially useful for staged migrations, repeated catalogue updates and connected datasets. They support reproducible mapping when several files must refer to the same customers, products or organisations.

They do not decide whether two records are the same real world entity. A merger, ownership change or duplicate account still needs a business decision. Nor do they replace transaction level idempotency in a custom integration. The import identifier is one part of reliable data handling, not a universal duplicate prevention mechanism.

## Common mistakes

**Dropping identifiers from an update file.** Preserve the field that connects each row to its intended record.

**Reusing raw numeric keys across object types.** Apply a convention that avoids collisions.

**Matching related companies by name alone.** Review relationship identifiers where names are ambiguous.

**Treating every rename as a new entity.** Confirm the business change before deciding how identity should behave.

## What should be kept after the import?

Retain the approved source file, identifier mapping, selected field mappings and a concise record of exceptions. These materials allow a later owner to explain how a source record became an Odoo record.

For a repeat update, compare the intended changes with the previous approved file before importing. Review a representative set of resulting records and their relationships afterwards. The useful outcome is continuity that the team can explain, so a future correction does not require reconstructing the migration from scattered spreadsheets.

## Related

Read [Odoo Vendor Price Updates: Avoid Duplicate and Incorrect Rates](/blog/2026/11/06/odoo-vendor-price-import-revisions/) for the connected workflow.

## Official references

1. [Export and import data](https://www.odoo.com/documentation/19.0/applications/essentials/export_import_data.html)

*How this article was checked: official Odoo 19 documentation was reviewed in October 2026. Odoo 20 references were also checked; material differences or moved pages are identified above. Examples are illustrative business scenarios, not client results or tests on a live database.*

If you need help translating these decisions into your own workflow, see my [Odoo consulting services](/services/odoo-consulting/).
