---
layout: post
title: "Migrating From Tally to Odoo: Masters, Opening Balances, Cut-Over"
date: 2026-10-11 09:00:00 +0530
tags: [Odoo, Odoo 19, India, Migration, ERP Migration, Data Import, Accounting, ERP]
hub: accounting
description: "How to migrate from Tally to Odoo 19: export masters to Excel, map ledgers, parties and stock items, load opening balances and plan a clean cut-over."
faqs:
  - q: "Can Odoo import Tally data directly?"
    a: "Not natively. The Odoo 19 documentation has no Tally importer, so you export masters and reports from TallyPrime to Excel and load them with Odoo's import templates, or evaluate a third-party connector from the Odoo Apps store."
  - q: "Should Tally's customer ledgers become accounts in Odoo?"
    a: "No. In Tally each customer is a ledger under Sundry Debtors. In Odoo customers are contacts, and their balances sit on the shared receivable account, tagged with the contact. Import parties as contacts and bring their open invoices across, not one account per party."
  - q: "When is the best time to move from Tally to Odoo?"
    a: "At the end of a financial year if you can, otherwise at the end of a tax period. Odoo's documentation advises against switching in the middle of a tax period, because the return would then combine data from two systems."
---

**Short answer:** Odoo has no built-in Tally importer, so a Tally migration is an Excel job done in a fixed
order. Export from TallyPrime, map ledgers to Odoo's chart of accounts, import parties as contacts (with GSTIN)
and stock items as products (with HSN codes and units). Then load open invoices, stock on hand and an opening
trial balance, using clearing accounts so nothing is counted twice. Cut over at a year or tax-period end, and
run both systems for one period before retiring Tally.

Still deciding whether to move at all? Read [Odoo vs Tally: when an Indian business should move](/blog/2026/10/10/odoo-vs-tally/) first.

## Applies to

- **Odoo version:** Odoo 19. The same pages exist in the Odoo 20 documentation with small label changes: the
  Actions menu item reads **Import** instead of **Import records**, template buttons drop the word "Import"
  (for example **Template for Invoices**), and account codes become optional.
- **Edition:** the import tool is in both editions; the opening-entry steps use the full Accounting app, which
  is Enterprise only.
- **Source system:** TallyPrime, with the Indian - Accounting localisation in Odoo.

## Before you start

1. **Pick the cut-over date.** Odoo's guide calls the fiscal year end the easiest point, followed by the end of
   a tax period. For most Indian businesses that means 1 April, or the start of a GST return period.
2. **Check the localisation.** In **Accounting ‣ Configuration ‣ Settings**, the **Package** field in the
   **Fiscal Localization** section should show the Indian package. It can only be changed before any journal
   entry is posted.
3. **Fill in the company.** In the **Settings** app, **Companies** section, click **Update Info** and enter the
   **GSTIN** and **PAN**.
4. **Rehearse on a test database.** Odoo's documentation is blunt: imports are permanent and can't be undone.
5. **Clean in Tally, not later.** Merge duplicate party ledgers, retire dormant ones, and fill in missing GSTINs
   and HSN codes before exporting.
6. **Decide what history moves.** Odoo's method brings balances and open items, not years of vouchers. Keep
   Tally read-only for history and audits.
7. **Choose Excel or a connector.** Third-party Tally connectors exist on the Odoo Apps store. If you consider
   one, test it on your own data, check exactly what it moves and who supports it, and remember that Odoo Online
   doesn't accept non-standard apps. This guide uses Odoo's own import tool.

## Step by step

1. **Export from TallyPrime.** Press **Alt+E** (Export) and choose **Masters**. Press **C** (Configure), set
   **Type of Master** to **Accounting Masters**, pick Excel as the format, and press **E** to export. Repeat
   for **Inventory Masters**. Then open the **Trial Balance**, **Bills Receivable**, **Bills Payable** and
   **Stock Summary** reports as at the cut-over date and export each with **Ctrl+E**.
2. **Map ledgers to the chart of accounts.** Open **Accounting ‣ Configuration ‣ Chart of Accounts**. Where a
   Tally ledger has an Odoo equivalent, rename and recode the Odoo account rather than deleting it (default
   accounts are linked to products, contacts and settings). Create or import the rest, with unique codes:
   - **Sundry Debtors** and **Sundry Creditors** ledgers aren't accounts in Odoo. Each party becomes a contact.
   - **Bank Accounts** ledgers become bank journals, one per bank account.
   - **Duties & Taxes** ledgers map to the GST accounts the localisation already created.
   - **Sales Accounts**, **Purchase Accounts** and **Stock-in-hand** map to income, expense and stock accounts.
3. **Import contacts.** In the **Contacts** app, switch to list view, click the **Actions** (gear) icon ‣
   **Import records**, and download the template. Fill **Name**, **Tax ID** (labelled **GSTIN** for Indian
   contacts), **GST Treatment** (for example *Registered Business - Regular* or *Unregistered Business*),
   address and **State**. Give each row an **External ID** such as `tally_party_0001` for later files to refer
   to. Fill the state yourself: the contact form derives it from the GSTIN, but don't rely on that in an import.
4. **Set up units and products.** Enable **Units of Measure & Packagings** in **Inventory ‣ Configuration ‣
   Settings**, then create Tally's units in **Inventory ‣ Configuration ‣ Units & Packagings**. On each unit,
   the **Indian GST UQC** field holds the GST unit quantity code. Import product categories next (they carry
   **Costing Method** and **Inventory Valuation**), then products from **Inventory ‣ Products ‣ Products** with
   **Product Type** *Goods*, **Track Inventory**, unit, **HSN/SAC Code**, **Sales Taxes**, **Purchase Taxes**
   and **Cost**.
5. **Create warehouses** for Tally's godowns in **Inventory ‣ Configuration ‣ Warehouses**, or enable
   **Storage Locations** in the Inventory settings if a godown becomes a location inside a warehouse.
6. **Import open invoices and bills.** In **Accounting ‣ Customers ‣ Invoices**, click **Actions** ‣ **Import
   records** ‣ **Import Template for Invoices**. Add one line per open bill from Tally's Bills Receivable:
   **Partner** (matching a contact exactly), **Number** (unused, with the same year as the date), **Invoice
   Bill Date**, **Due Date**, a label such as "Opening invoices", **Invoice Lines / Account** set to a
   receivable clearing account, and **Invoice Lines / Unit Price** as the amount still due. Leave taxes off:
   importing the total due only stops tax accounts being hit twice. Negative amounts are credit notes, imported
   under **Accounting ‣ Customers ‣ Credit Notes**. Repeat for bills in **Accounting ‣ Vendors ‣ Bills** with a
   payable clearing account. Records arrive as drafts: select them, then **Actions** ‣ **Confirm Entries**. Do
   this before switching on **E-Invoicing** in the **Indian Integration** settings: with it on, Odoo 19 marks
   eligible invoices for sending to the portal when posted, and e-invoiced ones already have IRNs.
7. **Import opening stock.** With costs set, go to **Inventory ‣ Operations ‣ Physical Inventory**, click
   **Actions** ‣ **Import records** ‣ **Import Template for Inventory Adjustments**, and fill **Product**,
   **Counted**, **Location** (required once locations are enabled) and **Lot/Serial Number** for tracked items.
   Click **Apply All**, enter an **Inventory Reason** such as "Opening stock" and a **Counting Date**, then
   **Update Quantities**.
8. **Import the opening trial balance.** In Tally's Trial Balance, replace the Sundry Debtors total with an AR
   Clearing account and the Sundry Creditors total with AP Clearing. In **Accounting ‣ Accounting ‣ Journal
   Entries**, use **Actions** ‣ **Import records** ‣ **Import Template for Misc. Operations**. Fill
   **Reference**, **Date** and **Journal** on the first line only, then one line per account with a value in
   **Journal Items/Debit** or **Journal Items/Credit**, never both, never 0.00 or negative. Review the draft and
   click **Post**. At a year-end cut-over, agree with your accountant how last year's result enters equity.
9. **Set bank opening balances.** On each bank journal's first statement, set the **Starting Balance** to the
   real balance before the first Odoo transaction. With bank synchronisation, delete transactions dated before
   the trial balance.
10. **Close the clearing accounts.** AR Clearing and AP Clearing should now be zero. Change their **Account
    Type** to **Off-Balance Sheet** so they drop out of reports.
11. **Run one period in parallel.** Record the first month in both systems, decide in advance which one files
    that month's GST returns, and compare the outputs below before retiring Tally.

## Worked example: a hardware trader cutting over on 1 April

Illustrative figures. At the close of 31 March, Tally shows Sundry Debtors of ₹18,40,000 across 212 open bills,
Sundry Creditors of ₹9,15,000 across 64 bills, stock of ₹26,30,000 in two godowns, and ₹4,20,000 in the bank.

| Import | Lines | Effect |
|---|---|---|
| Open invoices | 212, total ₹18,40,000 | Receivable debited, AR Clearing credited |
| Open bills | 64, total ₹9,15,000 | AP Clearing debited, payable credited |
| Opening stock | Quantity × cost = ₹26,30,000 | Matches the inventory line in the trial balance |
| Trial balance | AR Clearing Dr ₹18,40,000, AP Clearing Cr ₹9,15,000, stock, bank and the rest | Draft entry, reviewed and posted |

After posting, receivables stand at ₹18,40,000, payables at ₹9,15,000, and both clearing accounts at zero. April
runs in both systems, and its GSTR-1 is filed from Odoo once the totals match.

## What you should see

- Odoo's **Balance Sheet** at the cut-over date matches Tally's.
- **Aged Receivable** and **Aged Payable** match Tally's Bills Receivable and Bills Payable, party by party.
- Stock matches Tally's Stock Summary per godown, and quantity × cost matches the inventory account.
- Each bank journal matches its statement, and both clearing accounts are zero.
- After the parallel month, sales, purchases, GST and closing stock agree between the systems.

## Troubleshooting

**Receivables are double what Tally shows.**
The trial balance still carried Sundry Debtors as receivables. Replace them with AR Clearing, and use AR
Clearing on the invoice lines.

**The import says a partner doesn't exist.**
**Partner** must match a contact's name exactly. Import contacts first, or refer to them by External ID.

**Day and month are swapped.**
Dates like 01-03-2026 are ambiguous. Use YYYY-MM-DD, set the date format in the CSV **Formatting** options, or
store dates as date cells in Excel.

**A contact warns that its state should be different.**
The state doesn't match the GSTIN's first two digits. Click **update it** on the warning, or correct the State
column and re-import with the same External ID.

**A clearing account isn't zero.**
Tally's open bills don't add up to its party balances, often because a receipt or payment was never allocated
to a bill. Find the difference in Tally and agree with your accountant how to bring it across.

**Stock value doesn't match the inventory account.**
Usually missing or wrong product costs. Set **Cost** before importing the count.

**An import went wrong.**
Filter by creation date to find the imported records, or restore the test database.

## Related setup

- [How to set up GST in Odoo](/blog/2026/10/10/how-to-set-up-gst-odoo/)
- [How to set up your chart of accounts in Odoo](/blog/2026/09/22/how-to-set-up-chart-of-accounts-odoo/)
- [Importing and exporting data in Odoo](/blog/2026/09/14/odoo-import-export-data/) and
  [common data import mistakes](/blog/2026/09/17/odoo-data-migration-mistakes/)
- Case study: [moving a propane distributor's accounting from QuickBooks into Odoo](/case-studies/propane-delivery-odoo-routes-accounting/),
  a different source system with the same discipline: map the chart first, then migrate.

## Official references

- Odoo 19 documentation: [Accounting, get started (opening entries)](https://www.odoo.com/documentation/19.0/applications/finance/accounting/get_started.html)
- Odoo 19 documentation: [Export and import data](https://www.odoo.com/documentation/19.0/applications/essentials/export_import_data.html)
- Odoo 19 documentation: [Chart of accounts](https://www.odoo.com/documentation/19.0/applications/finance/accounting/get_started/chart_of_accounts.html)
- Odoo 19 documentation: [India](https://www.odoo.com/documentation/19.0/applications/finance/fiscal_localizations/india.html)
- Odoo 19 documentation: [Units of measure](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/product_management/configure/uom.html)
- TallyPrime help: [Export data](https://help.tallysolutions.com/tally-prime/data-management/export-data-in-tally/) and [chart of accounts](https://help.tallysolutions.com/charts-of-accounts-tally/)
- Odoo Apps store: [third-party Tally connectors](https://apps.odoo.com/apps/modules/browse?search=tally)

*How this guide was checked: menu paths, fields and the opening-entry method come from the Odoo 19
documentation, compared with the Odoo 20 pages in October 2026. The India fields and the e-invoice behaviour were
checked in Odoo 19's India localisation source code, and the Tally steps in TallyPrime's help. The worked example
is illustrative and wasn't run on a live database.*

Moving off Tally and want the cut-over done once, properly? See [Odoo migration](/services/odoo-migration/).
