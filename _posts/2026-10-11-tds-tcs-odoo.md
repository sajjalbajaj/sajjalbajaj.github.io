---
layout: post
title: "TDS and TCS in Odoo 19: Setup and Everyday Use"
date: 2026-10-11 08:00:00 +0530
tags: [Odoo, Odoo 19, India, Taxes, Accounting, Finance, Compliance, Setup]
hub: accounting
description: "Set up TDS and TCS in Odoo 19: enable them with your TAN, map accounts to sections, record TDS on bills and payments, and add TCS to invoices."
faqs:
  - q: "Where do I record TDS on a vendor bill in Odoo 19?"
    a: "Post the bill, then click the TDS Entry button at the top of the form. Choose the TDS Section, check the Base Amount and click Apply TDS. Odoo posts a TDS entry and reduces the amount due on the bill."
  - q: "Does Odoo know the current TDS and TCS rates?"
    a: "Odoo ships a tax for each section and rate it supports, with preset thresholds, but tax law changes. Check those taxes and thresholds against current law with your adviser before relying on them."
  - q: "What happens if a customer has no PAN when TCS applies?"
    a: "Odoo shows a banner on the invoice saying the PAN is missing or invalid and that TCS should be applied at the higher rate. The Apply Higher TCS button swaps the line's TCS tax for the highest-rate tax in the same section."
---

**Short answer:** in Odoo 19, open **Accounting ‣ Configuration ‣ Settings** and, under **Indian Integration**, tick
**TDS** (it asks for your company's **TAN**) and **TCS** as needed. That activates the TDS and TCS taxes Odoo ships
for each section. Link your expense and income accounts to a **TCS/TDS Section** so Odoo warns you when a threshold is
crossed. Record TDS on a posted vendor bill or payment with the **TDS Entry** button, add TCS as a tax on customer
invoice lines, and keep a PAN on every partner.

This guide builds on [how to set up GST in Odoo](/blog/2026/10/10/how-to-set-up-gst-odoo/). For electronic invoices,
see [GST e-invoicing and e-way bills in Odoo](/blog/2026/10/10/gst-e-invoicing-e-way-bill-odoo/).

## What are TDS and TCS?

**TDS (Tax Deducted at Source)** is income tax that the payer holds back from certain payments, such as contract work,
professional fees, rent or commission, and pays to the government against the payee's PAN. The payee receives the
rest and claims credit for the tax deducted.

**TCS (Tax Collected at Source)** works the other way round. The seller in certain transactions, such as sales of
scrap or minerals, collects extra tax from the buyer on top of the invoice and pays it to the government. The buyer
then claims credit for it.

## Applies to

- **Odoo version:** Odoo 19. The Odoo 20 India documentation currently reads the same as the Odoo 19 page, but the
  Odoo 20 code reworks TDS: withholding moves onto a shared withholding-tax module, and the **TDS Entry** window
  described here is no longer in the Indian module. Expect different screens on Odoo 20.
- **Edition:** Community and Enterprise. The TDS and TCS taxes, threshold alerts and TDS entries are in the
  open-source **Indian - Accounting** module. The TDS and TCS reports sit in the Tax Report, which is Enterprise.
- **Apps:** Invoicing or Accounting.

## Before you start

1. **Your company's TAN.** Odoo makes it compulsory when you switch TDS on.
2. **A PAN on every partner.** Odoo reads it from the GSTIN automatically. For an unregistered vendor, such as a
   freelancer, type it in the **PAN** field on the contact. Partners sharing a PAN are added together for thresholds,
   across your branches.
3. **Know which sections apply to you.** Odoo 19's current code ships two sets of sections: the newer ones it labels
   **I.T. Act 25** (sections 392, 393 and 394), which it activates, and the older **ACT 1961** ones (194C, 194J, 206C
   and so on), which stay archived. A database created on an earlier Odoo 19 build may show a different list. Which
   section and rate apply is a question for your tax adviser: treat Odoo's taxes and thresholds as a starting point to
   check against current law.

## Step by step

1. **Switch the features on.** In **Accounting ‣ Configuration ‣ Settings**, under **Indian Integration**, tick **TDS**
   and enter your **TAN**. Tick **TCS** if you collect it. Save. Odoo activates the taxes in its **TDS** and **TCS**
   tax groups.
2. **TDS journal and account.** On the same page, under **Default Accounts**, **India TDS Control** sets the
   **Journal** for TDS entries and the control **Account**. The Indian chart proposes **TDS (Withholding Control)**.
3. **Map accounts to sections.** Go to **Accounting ‣ Configuration ‣ Chart of Accounts**, click **View** on an account
   and set **TCS/TDS Section**. For example, map a professional fees expense account to **393(1) SI.6(iii) D(b) PROF**,
   or a scrap sales income account to **394(1) SI.4 Scrap**. Odoo uses this to check thresholds and suggest sections.
4. **Review the thresholds.** Each section ships with limits: per transaction, aggregate (monthly or per financial
   year), or both, measured on the untaxed or total amount. To change one, open a TDS or TCS tax in **Accounting ‣
   Configuration ‣ Taxes**, go to the **Advanced Options** tab and click the internal link next to **Section**.
5. **Set the deduction type for each PAN.** **Accounting ‣ Accounting ‣ PAN Entity** lists every PAN. **TDS
   Deduction** can be **Normal**, **Lower**, **Higher** or **No**. For **Lower**, attach the certificate in **TDS
   Certificate**. **No** hides the **TDS Entry** button for that partner. The same form holds MSME/Udyam details.
6. **TDS on a vendor bill.** Post the bill. Once the section's threshold is crossed, a banner reads "It's advisable to
   deduct TDS u/s ... on this transaction." Click **TDS Entry** at the top of the bill and check **Entry Date**, **TDS
   Section**, **Base Amount** (pre-filled from the bill's lines on accounts mapped to that section), **TDS Amount**,
   **Journal** and **Reference**. Click **Apply TDS**. If the partner has no PAN, the window flags **Higher
   Deduction**.
7. **TDS on an advance payment.** Open the vendor payment while it's still unreconciled and click **TDS Entry** there.
   Odoo posts the TDS entry but doesn't reconcile it with anything.
8. **TDS your customers deduct.** The same button on a posted customer invoice records TDS that the customer withheld,
   using the sales-side TDS taxes.
9. **TCS on a customer invoice.** Add the section's TCS tax to the invoice line next to the GST tax, for example **1%
   TCS 394(1) SI.4 SCRAP**. TCS isn't a separate step: it's an ordinary line tax.
10. **Reports (Enterprise).** In **Accounting ‣ Reporting ‣ Tax Report**, pick **TDS I.T. Act 25 Report** or **TCS
    I.T. Act 25 Report** in the report selector, or the **ACT 1961** versions, for totals by section. In any edition,
    a threshold banner's **View Journal Item(s)** link lists the lines behind it.

## Worked example: a consultant and a scrap sale

The Ludhiana distributor from the GST guide hires a freelance IT consultant who isn't registered for GST but has given
her PAN. Its **Professional Fees** expense account is mapped to **393(1) SI.6(iii) D(b) PROF**, whose preset limit in
Odoo's data is an aggregate of ₹50,000 per financial year. That figure, and the 10% below, are Odoo's presets; check
both against current law.

| Bill | Amount | Running total for her PAN | Banner? |
|---|---|---|---|
| July | ₹30,000 | ₹30,000 | No |
| September | ₹30,000 | ₹60,000 | Yes, suggests 393(1) SI.6(iii) D(b) PROF |

- On the September bill, click **TDS Entry** and choose **10% TDS 393(1) SI.6(iii) D(b) PROF P** as the **TDS
  Section**. Odoo fills **Base Amount** with ₹30,000 and **TDS Amount** with ₹3,000.
- If your adviser says the July bill must be covered too, raise **Base Amount** to ₹60,000 (TDS ₹6,000). Odoo warns
  that the base is larger than the bill but lets you go ahead.
- After **Apply TDS**, the September bill's amount due falls from ₹30,000 to ₹27,000 (or ₹24,000), and you pay the
  consultant the balance.

The same company sells scrap packaging to a dealer and maps **Scrap Sales** to **394(1) SI.4 Scrap**. With the dealer's
PAN on file, the invoice line carries the GST tax plus **1% TCS 394(1) SI.4 SCRAP**, and the TCS appears as its own line
in the totals. Without a PAN, a banner says to apply TCS at the higher rate, and **Apply Higher TCS** swaps in **2% TCS
394(1) SI.4 SCRAP**, the highest rate Odoo ships in that section.

## What you should see

- On the bill: a **TDS** smart button with the total withheld, a **TDS Information** tab and a lower amount due.
- In the TDS journal: a posted entry with the reference "TDS of" and the bill number, reconciled with the bill.
- On the invoice: the TCS line in the totals and the PDF.
- In Enterprise: TDS and TCS totals by section in the Tax Report.

## Troubleshooting

**There's no TDS Entry button.**
The bill or invoice must be posted, TDS must be on, and the partner's PAN must not be set to **No** deduction. On a
payment, the button only shows while the payment is unreconciled.

**"Please configure the withholding account from the settings".**
Set the **Account** under **India TDS Control**.

**No threshold banner.**
The account has no **TCS/TDS Section**, the feature is off, the bill already has a TDS entry for that section, or the
total is still under the section's limit.

**The section you need isn't in the list.**
It may be an archived **ACT 1961** tax. Unarchive it in **Accounting ‣ Configuration ‣ Taxes** if your adviser confirms
it applies.

**There's no Section field on the tax's Advanced Options tab.**
In Odoo 19's code it only shows when both **TDS** and **TCS** are ticked in settings.

**"The base amount of TDS is greater than the amount of the Vendor Bill".**
A warning, not an error. Check the figure and continue if it's intended.

## Related setup

- [How to set up GST in Odoo 19](/blog/2026/10/10/how-to-set-up-gst-odoo/)
- [GST e-invoicing and e-way bills in Odoo 19](/blog/2026/10/10/gst-e-invoicing-e-way-bill-odoo/)
- [How to set up your chart of accounts in Odoo](/blog/2026/09/22/how-to-set-up-chart-of-accounts-odoo/)
- [Vendor bills and payments in Odoo Accounting](/blog/2026/08/21/vendor-bills-and-payments-in-odoo-accounting/)
- Want TDS and TCS mapped correctly before your next quarter closes? See
  [Odoo consulting](/services/odoo-consulting/).

## Official references

- Odoo 19 documentation: [India (fiscal localisation)](https://www.odoo.com/documentation/19.0/applications/finance/fiscal_localizations/india.html)
- Odoo 19 documentation: [Taxes](https://www.odoo.com/documentation/19.0/applications/finance/accounting/taxes.html)
- Odoo 19 documentation: [Chart of accounts](https://www.odoo.com/documentation/19.0/applications/finance/accounting/get_started/chart_of_accounts.html)
- Government of India: [Income Tax e-filing portal](https://www.incometax.gov.in/iec/foportal/), for current rates and
  rules

*How this guide was checked: menu paths, field names and the TDS/TCS behaviour were checked against the Odoo 19
documentation and the Indian localisation code in Odoo 19 (settings, sections, taxes, the TDS Entry window and the
threshold alerts) in October 2026. The worked example is illustrative and wasn't run on a live database, so there are
no screenshots; labels can vary slightly with your installed apps and language.*
