---
layout: post
title: "Odoo Import Blank Fields: Decide What to Clear or Preserve"
date: 2026-11-19 09:00:00 +0530
tags: [Odoo, Odoo 19, ERP, Best Practices, Data Import, Migration, Setup, ERP Implementation]
hub: admin
description: "Review blank fields in Odoo imports so a routine update does not erase useful values, misread dates or overwrite unrelated changes in existing records."
faqs:
  - q: "Is a blank mapped field the same as an omitted column?"
    a: "No. Odoo documents a distinction between fields absent from the file and fields provided with empty values. Review the intended effect for the record and field being imported."
  - q: "Can an import be undone with one command?"
    a: "The documentation warns that imports are permanent. Keep a recovery plan and the original values rather than assuming a universal undo action exists."
---

**Short answer:** Decide whether every blank in an Odoo import means clear the value, preserve it or reject the row for review. Those are different instructions. I reduce update files to the fields intentionally being changed and keep the original values available before applying a bulk correction.

## Applies to

Odoo 19 standard import and export tools across editions, subject to the user permissions and fields available for each model. Odoo 20 documentation was reviewed and changes the export interface, including the Updatable fields only label. The identifier and field mapping decisions remain relevant; use the screens for your installed version.

## Why does a blank cell create risk?

A spreadsheet often uses an empty cell to mean information is unknown or has not been collected. An import can interpret a mapped empty value as an instruction to clear a field. The person preparing the file and the application may therefore assign different meanings to the same blank.

Odoo's documentation distinguishes a field omitted from a file from a field included with an empty value. Defaults, required fields and model behaviour also matter. Do not turn that general distinction into an assumption that every field on every object behaves identically.

Define the intended result before reviewing the mapping screen. If the task is to update phone numbers, unrelated address and payment fields usually do not belong in the change file. A smaller, deliberate update is easier to review than a complete export containing many values nobody intended to alter.

## How should clear and preserve decisions be recorded?

Separate rows that intentionally remove information from rows where the source is simply incomplete. The data owner should decide which is correct. An administrator should not infer a business decision from an unexplained empty cell.

For example, a customer contact may no longer have a valid mobile number, so clearing it is intentional. Another customer's number may be absent only because the source spreadsheet was never completed. Applying both blanks as corrections would remove valid information from the second record.

Keep a short exception list for unclear rows. This is often more efficient than delaying the entire file or making assumptions that require another bulk correction later. Record who resolved each exception and the source of the replacement value.

## What other formatting problems deserve review?

Dates can be ambiguous when day and month positions are interchangeable. Odoo documents import formatting options and the need to review detected date formats. Use an unambiguous source format and inspect examples where a mistaken interpretation would still produce a valid date.

Identifiers and codes also deserve attention. Spreadsheet software may transform a code that looks numeric or remove leading zeroes. Preserve the business meaning of the source value rather than trusting the cell's appearance. Confirm the field mapping matches the kind of value being imported.

Review relationships and multi value fields separately. A correction to a contact's phone number should not accidentally replace its associated company or tags. The wider the file, the more unrelated state is exposed to accidental change. Minimise that exposure by making the update purpose explicit.

## Worked example: refreshing customer contact details

Consider an illustrative distributor receiving a spreadsheet of updated customer phone numbers. The file also contains address columns copied from an old export, with many blanks where the employee did not check the data.

The administrator asks the account owner to distinguish verified removals from unreviewed cells. The update file retains stable identifiers and the fields intentionally changed. Address corrections are handled separately when there is an approved source, rather than imported as a side effect of the phone update.

One customer has explicitly retired a mobile number, while another has a valid number missing from the spreadsheet. Those rows receive different treatment. The resulting records reflect the actual decisions, and the team retains the prior values and approved source to investigate any later question.

## When it fits and when it doesn't

This approach fits bulk corrections, customer master updates and staged migrations where incomplete source data is common. It is useful whenever several people contribute to a spreadsheet without sharing the same definition of an empty value.

It does not replace understanding the target object's import behaviour. Order lines, relationships and computed fields can require different handling from simple contact text. Use a representative rehearsal in a suitable environment when the business applies the process, particularly for changes that are difficult to reverse.

## Common mistakes

**Treating all blanks as missing information.** Confirm whether the import will clear the mapped field.

**Reimporting a full export for a small correction.** Include only the fields required for the approved update.

**Trusting automatically detected dates.** Review ambiguous examples and the selected format.

**Assuming a successful import means correct data.** Check representative resulting records against the approved business change.

## What makes a correction recoverable?

Preserve a record of the values before the change and the exact file applied. The documentation warns that an import is not a reversible editing session. A recovery plan should identify how the affected records would be found and how their intended state would be restored.

Do not immediately rerun a problematic file with more columns added. First determine which records changed and why. Correct the mapping or source issue, then define the next deliberate update. That sequence prevents one unclear import from becoming several overlapping attempts with no reliable explanation.

## Related

Read [Odoo Import External IDs: Keep Updates on the Right Records](/blog/2026/11/19/odoo-import-external-id-ownership/) for the connected workflow.

## Official references

1. [Export and import data](https://www.odoo.com/documentation/19.0/applications/essentials/export_import_data.html)

*How this article was checked: official Odoo 19 documentation was reviewed in October 2026. Odoo 20 references were also checked; material differences or moved pages are identified above. Examples are illustrative business scenarios, not client results or tests on a live database.*

If you need help translating these decisions into your own workflow, see my [Odoo consulting services](/services/odoo-consulting/).
