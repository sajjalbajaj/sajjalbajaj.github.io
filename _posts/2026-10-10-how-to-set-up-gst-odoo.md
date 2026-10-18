---
layout: post
title: "How to Set Up GST in Odoo 19: HSN, CGST, SGST, IGST and Returns"
date: 2026-10-10 08:00:00 +0530
tags: [Odoo, Odoo 19, India, GST, Taxes, Accounting, Compliance, Setup]
hub: accounting
description: "Set up GST in Odoo 19 step by step: Indian localisation, GSTIN, HSN codes, automatic CGST, SGST or IGST, reverse charge and GSTR returns."
faqs:
  - q: "How does Odoo decide between CGST plus SGST and IGST?"
    a: "It compares the invoice's Place of supply with your company's state. If they match, the Within (your state) fiscal position keeps the product's GST tax, which splits into CGST and SGST. If they differ, the Inter State fiscal position replaces it with IGST at the same rate."
  - q: "Can I file GST returns from Odoo Community?"
    a: "No. GSTR-1 filing, GSTR-2B matching and the GSTR reports come from the Indian - Accounting Reports module, which is Enterprise only. Community still has the Indian chart of accounts, GST taxes, fiscal positions and HSN codes."
  - q: "Where do I enter the HSN code in Odoo?"
    a: "On the product form's General Information tab, in the HSN/SAC Code field below Product Category. The field only appears once the company is registered under GST, and invoice lines copy the code from the product."
---

**Short answer:** in Odoo 19, the Indian localisation (**Indian - Accounting**) installs itself for a company based in
India and brings the Indian chart of accounts, GST taxes and GST fiscal positions. Add your company's state and GSTIN,
tick **Registered Under GST** in **Accounting ‣ Configuration ‣ Settings**, put an HSN or SAC code and the intra-state
GST tax on every product, and give each contact a GST treatment and GSTIN. Odoo then compares the place of supply with
your state and applies CGST plus SGST, or IGST, by itself. Filing GSTR-1 and matching GSTR-2B from Odoo is Enterprise
only.

This is the hands-on setup guide. For the general idea of how taxes and fiscal positions work together, start with my
explainer on [taxes and fiscal positions in Odoo](/blog/2026/08/22/taxes-and-fiscal-positions-in-odoo/).

## Applies to

- **Odoo version:** Odoo 19. I also checked the Odoo 20 India documentation, which currently reads the same as the
  Odoo 19 page. The Odoo 20 code does change some screens, though: **Registered Under GST** becomes a **Registration
  Type** field (Regular or Composition), and there are separate charts of accounts for corporate and non-corporate
  entities. Check on a 20 database before following these steps there.
- **Edition:** Community and Enterprise for the chart of accounts, GST taxes, fiscal positions and HSN codes. GST return
  filing, GSTR-2B matching and the GSTR reports come from the **Indian - Accounting Reports** module, which is
  Enterprise only.
- **Apps:** Invoicing or Accounting. Sales and Purchase use the same taxes.

## Before you start

1. **The company has a full Indian address:** street, city, **State**, six-digit PIN code and **Country**. Odoo builds
   the intra-state fiscal position from the company's state, so this has to be right.
2. **The Indian package is installed.** In **Accounting ‣ Configuration ‣ Settings**, the **Package** under **Fiscal
   Localization** should be the Indian one. You can only switch package before any entry is posted.
3. **You have your GSTIN and PAN**, plus the HSN codes (goods) and SAC codes (services) for what you sell. GST rates come
   from government notifications, so confirm each rate with your tax adviser rather than trusting a default.
4. **Composition dealers, read this first:** the help text on **Registered Under GST** says to tick it if you have a GST
   number *except* under the composition scheme.

## Step by step

1. **Company details.** Open **Settings**, scroll to **Companies**, click **Update Info** and fill in the address,
   **PAN** and **GSTIN**. If the first two digits of the GSTIN don't match the state, Odoo shows a warning with an
   **update it** link. In Odoo's state data, Punjab is 03 and Haryana is 06.
2. **Switch GST on.** In **Accounting ‣ Configuration ‣ Settings**, scroll to **Indian Integration**, tick **Registered
   Under GST** and check the **GST Number**. This activates the GST taxes, which are installed archived. Saving a valid
   GSTIN on the company also ticks the box for you.
3. **Default taxes.** At that moment Odoo 19 sets the company's default sales and purchase taxes to the 5% GST taxes. If
   most of your catalogue uses another rate, change **Default Taxes** in the **Taxes** section of the same page, so new
   products start with the right tax.
4. **HSN/SAC Validation.** Still in **Indian Integration**, choose 4, 6 or 8 digits. Odoo labels the options by
   turnover; pick the one your adviser confirms. Invoice lines with a shorter or non-numeric code then raise a warning.
5. **Learn the tax names.** Open **Accounting ‣ Configuration ‣ Taxes**. Each intra-state rate is a group tax: **18% GST
   S** (sales) is 9% SGST plus 9% CGST. Its inter-state twin, **18% IGST S**, lists the inter-state fiscal position in
   its **Fiscal Position** field and the GST tax in **Replaces**. Purchase taxes end in **P**.
6. **Products.** On each product's **General Information** tab, fill in **HSN/SAC Code** (below **Product Category**).
   Type a code or a few words and Odoo suggests matches from the GST portal's HSN search. Set **Sales Taxes** to the
   *intra-state* GST tax, and on the **Purchase** tab set **Purchase Taxes** the same way. Never put IGST on a product:
   the fiscal position swaps it when needed.
7. **Contacts.** For each customer and vendor, set **GST Treatment** (for example **Registered Business - Regular**,
   **Unregistered Business**, **Consumer** or **Overseas**), the **GSTIN** and the **State**. Odoo fills **PAN** from
   the GSTIN. Leave **Fiscal Position** on the **Sales & Purchase** tab empty, because a fiscal position on the contact
   overrides Odoo's place-of-supply logic.
8. **Check the fiscal positions.** **Accounting ‣ Configuration ‣ Fiscal Positions** should list **Within** *your
   state* (for example **Within Punjab**), **Inter State**, **Special Economic Zone (SEZ)**, **Export**, two **LUT
   (WOP)** positions and two **Reverse charge** positions. Odoo detects the first four by itself; you choose the LUT
   and reverse charge ones by hand.
9. **Reverse charge purchases.** On a bill where you, the buyer, pay the GST, open the **Other Info** tab and choose
   **Reverse charge Intra State** or **Reverse charge Inter State** before adding lines. Odoo swaps in the matching
   **GST RC** or **IGST RC** taxes, which carry the **Reverse charge** flag used by the GST reports.
10. **Returns (Enterprise only).** On the GST portal, enable API access under **My Profile ‣ Manage API Access**. In
    Odoo, tick **GST E-Filing & Matching**, enter your **GST Username** and make sure the **GSP** field is set. On the
    Accounting dashboard, click **Tax Returns** on the **Tax Returns** journal and fill in **Opening Date**, **Fiscal
    Year End** and **GSTIN Periodicity**.
    - **GSTR-1:** open the period's return and clear the validation checks (wrong tax for the state, missing or invalid
      HSN codes, missing e-invoices and others). Click **Validate**, then **Submit** and **Push Data**. After **Check
      Status**, click **Mark as Filed**. A filed return can't be reset.
    - **GSTR-2B:** open the period, click **Fetch E-Invoice** and **Validate**, then **Fetch GSTR-2B**. Odoo matches the
      portal's invoices with your bills. Correct any mismatched bills, use **Re-Match**, then **Mark as Complete**.
    - **GSTR-3B:** go to **Accounting ‣ Reporting ‣ Tax Report** and pick the GSTR-3B report in the report selector.

## Worked example: a Punjab distributor selling in Punjab and Haryana

A hardware distributor in Ludhiana, Punjab, is registered under GST. Its company state is **Punjab**, so Odoo created
**Within Punjab** and **Inter State** fiscal positions. Its brass door hinges have an 8-digit HSN code and **18% GST S**
as the sales tax. The 18% is for illustration only; use the rate notified for your own code.

| Invoice | Customer | Place of supply | Fiscal position | Tax on ₹50,000 |
|---|---|---|---|---|
| 1 | Registered retailer, Amritsar | Punjab | Within Punjab | CGST ₹4,500 + SGST ₹4,500 |
| 2 | Registered dealer, Panchkula | Haryana | Inter State | IGST ₹9,000 |

- **Invoice 1:** the place of supply matches the company's state, so the product's 18% GST stays and splits into CGST
  and SGST. Total ₹59,000.
- **Invoice 2:** Haryana differs from Punjab, so **Inter State** replaces **18% GST S** with **18% IGST S**. The total
  is also ₹59,000; only the split changes.
- **A different delivery address:** if the Amritsar retailer asks for delivery to its own branch in Haryana, Odoo takes
  the place of supply from that delivery address and applies IGST. You can still change **Place of supply** on the
  draft if your adviser says the rule differs for that sale.
- **Purchases:** a bill from a Haryana supplier gets IGST, because on bills Odoo compares the vendor's state with yours.

## What you should see

- On a draft invoice: **Place of supply** and **GST Treatment** filled in, and the fiscal position on **Other Info**.
- In the invoice totals: CGST and SGST lines, or a single IGST line.
- On the PDF: an **HSN/SAC** column, an **HSN Summary** table split by SGST/UTGST, CGST, IGST and CESS, and the place
  of supply.
- In Enterprise: **GSTR-1 (IN)**, **GSTR-2B** and **GSTR-3B** available in the Tax Report's report selector.

## Troubleshooting

**IGST on a sale inside your own state, or CGST and SGST on an inter-state sale.**
Check the customer's **State**, the invoice's **Place of supply**, and that the contact has no fiscal position on its
**Sales & Purchase** tab. Then check the company's state: saving it updates the Indian fiscal positions.

**No GST taxes to choose from.**
**Registered Under GST** isn't ticked, so the GST taxes are still archived.

**The HSN/SAC Code field is missing on products.**
Same cause: the field only shows for a company registered under GST.

**A banner on the invoice about HSN/SAC digits.**
The code is missing, isn't 4, 6 or 8 digits, or is shorter than your **HSN/SAC Validation** setting. Fix the product,
then the line on the draft invoice.

**"Invalid sequence as per GST rule 46(b)".**
The invoice number is over 16 characters or uses special characters other than hyphen and slash. Shorten the sales
journal's sequence.

**GSTR-1 flags "Invalid HSN Codes".**
Codes for goods must not start with 99, and codes for services must.

## Related setup

- [How to set up taxes and fiscal positions in Odoo](/blog/2026/09/22/how-to-set-up-taxes-fiscal-positions-odoo/)
- [How to set up a chart of accounts in Odoo](/blog/2026/09/22/how-to-set-up-chart-of-accounts-odoo/)
- [Customer invoicing in Odoo](/blog/2026/08/21/customer-invoicing-in-odoo/)
- [Odoo 20 in India: availability and GST](/blog/2026/09/05/odoo-20-in-india-availability-and-gst/)
- Moving an Indian business onto Odoo, or fixing GST on a live database? See
  [Odoo implementation](/services/odoo-implementation/).

## Official references

- Odoo 19 documentation: [India (fiscal localisation)](https://www.odoo.com/documentation/19.0/applications/finance/fiscal_localizations/india.html)
- Odoo 19 documentation: [Fiscal localizations](https://www.odoo.com/documentation/19.0/applications/finance/fiscal_localizations.html)
- Odoo 19 documentation: [Taxes](https://www.odoo.com/documentation/19.0/applications/finance/accounting/taxes.html)
- Odoo 19 documentation: [Fiscal positions](https://www.odoo.com/documentation/19.0/applications/finance/accounting/taxes/fiscal_positions.html)
- Government of India: [GST portal](https://www.gst.gov.in/), for rates, HSN codes and filing rules

*How this guide was checked: menu paths, field names and Enterprise-only status were checked against the Odoo 19
documentation and the Indian localisation code in Odoo 19 (the tax, fiscal position, company, contact and invoice
logic) in October 2026. The worked example is illustrative and wasn't run on a live database, so there are no
screenshots; labels can vary slightly with your installed apps and language.*
