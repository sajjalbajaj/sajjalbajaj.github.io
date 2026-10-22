---
layout: post
title: "Odoo Vendor Price Updates: Avoid Duplicate and Incorrect Rates"
date: 2026-11-06 08:00:00 +0530
tags: [Odoo, Odoo 19, ERP, Best Practices, Purchase, Data Import, Procurement, Finance]
hub: purchase
description: "Update Odoo vendor prices with stable identifiers, quantity tiers, approved source files and sample quotations that reveal incorrect or duplicate rates."
faqs:
  - q: "Why can importing a supplier price file create duplicates?"
    a: "Odoo documents external identifiers as the link used to update existing vendor price records. Omitting that link can create new records instead of updating the intended ones."
  - q: "Should a new supplier price overwrite every open purchase order?"
    a: "No. Review the commercial status and effective terms of each affected order. A master data update and an agreed order amendment are separate decisions."
---

**Short answer:** update vendor prices as a controlled data change with a known source, stable record identifiers and a review of the resulting quotations. A successful import does not prove that the right rate will be selected. Supplier, product, quantity and unit relationships all need to remain understandable after the update.

## Applies to

Odoo 19 Purchase vendor pricelists and import tools. This is a review method for controlled updates rather than a file format specification for every custom database. The corresponding Odoo 20 references were reviewed in October 2026; use the documentation for your installed release when configuring screens and fields.

## Which records are being changed?

Identify the vendor price records rather than matching only a visible product name. A product can have several suppliers and several quantity conditions. Similar names or supplier descriptions can refer to different variants, units or commercial arrangements.

Odoo's vendor pricelist documentation recommends exporting a suitable template from the database. For updates, preserve the external identifiers that connect rows with existing records. A newly created row and an update to an existing row should be intentional, not accidental consequences of a spreadsheet export.

I would keep the supplier's original file alongside the approved mapping and transformation notes. If a rate later looks wrong, the reviewer can distinguish what the supplier supplied from what was changed during preparation. That is difficult when the working spreadsheet is repeatedly overwritten.

## What should be checked before importing?

Review product identity, supplier, unit, currency, quantity condition and company scope where applicable. A numeric price has little meaning without its basis. A case price entered against an individual unit can produce a convincing but materially incorrect quotation.

Check the role of quantity tiers. The documented Quantity field represents the minimum quantity for the rate. Confirm that the intended purchase quantity selects the expected arrangement, especially near a tier boundary or when purchase units differ from inventory units.

Identify additions, changes and records that should no longer be used. Do not treat every missing spreadsheet row as an instruction to delete historical information. Agree the effective treatment with purchasing and preserve the evidence needed to explain previous transactions.

## How should the import be rehearsed?

Use a controlled copy appropriate to the platform and protect external actions. Review the mapping before loading the file, then inspect the actual records and representative RFQs afterwards. Odoo's import checks help identify structural problems, but they do not decide whether a supplier price is commercially correct.

Include examples that distinguish the competing conditions: different suppliers, quantities, variants and companies where relevant. A single ordinary product can pass while a tier or variant relationship remains wrong. Choose samples based on the changes being introduced.

Count intended updates and additions separately. If a price refresh unexpectedly doubles the number of records, investigate before applying it to production. A visually correct new row can coexist with an older competing row that users do not notice until a quotation selects it.

## Worked example: a pet supplies price refresh

Imagine a pet supplies distributor receiving a supplier spreadsheet with revised case prices and minimum quantities. The product master uses individual items for inventory and supplier units for purchasing. The preparation team first maps each supplier code to the correct product and purchase basis.

The team exports the existing vendor price records with identifiers, applies the approved changes and preserves genuinely new rows as additions. A rehearsal checks small and bulk orders, including a product whose case quantity differs from another item in the same range.

One sample quotation selects an unexpected rate because an old competing record remains. The team resolves the data design before the live update and records the decision. It does not solve the symptom by manually correcting every future purchase order.

## What happens to existing orders?

Separate master data maintenance from changing a commercial commitment. An already confirmed order may retain agreed terms even when a later supplier list changes. Purchasing needs to identify which open quotations or orders require review and obtain the appropriate supplier agreement.

Avoid assuming the import will update every relevant document automatically. Inspect the actual workflow for existing drafts, newly created quotations and confirmed orders. Each can behave differently, particularly in a customised implementation.

Record exceptions clearly. If an urgent order uses a negotiated rate outside the standard list, retain its basis with the order. A valid exception should not force the team to distort the general supplier record used by other purchases.

## When does a bulk update fit?

It fits a meaningful number of structured changes with reliable identifiers and a repeatable review process. A small isolated correction may be easier to manage directly with appropriate approval. The choice should reduce uncertainty rather than maximise the number of rows processed at once.

It does not fit an unreviewed supplier file whose columns, units or product mapping are unclear. Resolve those questions first. Importing ambiguous data quickly only moves the ambiguity into records that ordinary buyers may trust.

## Common mistakes

Common mistakes include dropping external identifiers, confusing minimum quantity with pack size and importing into the wrong company context. Another is treating an import success message as confirmation that new RFQs select the intended rates.

Retain the accepted source file, mapping, counts and sample outcomes. After the update, review early quotations for the affected products and assign an owner to discrepancies. A controlled price refresh should leave purchasing able to explain both the current rate and the evidence that authorised its introduction.

## Related

Read [Odoo Alternative RFQs: Compare the Offer Behind the Price](/blog/2026/11/04/odoo-alternative-rfq-supplier-selection/) for the connected workflow.

## Official references

1. [Import vendor pricelist](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/purchase/products/pricelist.html)
1. [Export and import data](https://www.odoo.com/documentation/19.0/applications/essentials/export_import_data.html)

*How this article was checked: official Odoo 19 documentation and the corresponding Odoo 20 pages were reviewed in October 2026. The examples are illustrative, not client results or tests on a live database.*

For help designing this workflow, see my [Odoo consulting services](/services/odoo-consulting/).
