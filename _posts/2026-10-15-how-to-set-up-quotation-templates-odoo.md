---
layout: post
title: "How to Set Up Quotation Templates in Odoo 19 (Step by Step)"
date: 2026-10-15 10:00:00 +0530
tags: [Odoo, Odoo 19, Setup, Sales, Sales Management, Customer Management, Business Automation, How To]
hub: sales
description: "Set up quotation templates in Odoo 19 step by step: lines, optional products, validity, online signature and payment, terms, PDF headers and a default."
faqs:
  - q: "Do Odoo quotation templates store prices?"
    a: "No. Template lines hold products, quantities and descriptions only. Prices come from the pricelist on the quotation when you choose the template, so one template works for every customer and pricelist."
  - q: "Can I set a default quotation template per sales team in Odoo 19?"
    a: "No. Odoo 19 has one Default Template per company, set in the Sales settings. The Odoo 20 documentation adds a Share option and a Sales Team field so a template can be made available to specific teams."
  - q: "What happens to existing lines when I choose a quotation template?"
    a: "They're replaced. Choosing a template clears the quotation's lines and loads the template's sections, products and notes, so pick the template first and add extra lines afterwards."
---

**Short answer:** in Odoo 19, tick **Quotation Templates** in **Sales ‣ Configuration ‣ Settings**, then build each
template in **Sales ‣ Configuration ‣ Quotation Templates**: products, sections and notes on the **Lines** tab, optional
sections the customer can add from the portal, a validity in days, a confirmation email, online signature or payment,
and terms and conditions. On a new quotation, pick the template in the **Quotation Template** field; Odoo replaces the
lines and prices them from the quotation's pricelist. You can also set one company-wide **Default Template**.

This is the hands-on setup guide. For how a quotation becomes an order, start with my explainer on
[Odoo Sales from quotation to sales order](/blog/2026/08/18/odoo-sales-quotation-to-sales-order/).

## Applies to

- **Odoo version:** Odoo 19. I also checked the Odoo 20 documentation, which changes this screen quite a bit: the menu
  becomes **Sales ‣ Configuration ‣ Templates**, validity, signature, payment, confirmation email and journal move to a
  **Settings** tab, templates can be shared with chosen sales teams, there are reusable **section templates**, and a
  **Quote calculator** spreadsheet can sit on a template. Follow the Odoo 20 documentation on a 20 database.
- **Edition:** Community and Enterprise. Quotation templates, online signature and payment, and the PDF Quote Builder
  are all part of Odoo 19's open-source code.
- **Apps:** Sales. Online payment also needs a payment provider; the online signature is built into Sales and doesn't
  need the Sign app.

## Before you start

1. **Products are ready to sell:** **Sales** ticked on the product form, with a sales price or pricelist rules.
   Templates hold no prices, and combo products can't be added to a template.
2. **Your default terms exist.** A template's **Terms & Conditions** replace the default ones for quotations that use
   it, so decide which wording each template needs.
3. **A payment provider is published** if customers will pay online to confirm.
4. **You know which offers repeat.** A template earns its keep on a package you quote every week, not on one-offs.

## Step by step

1. **Switch it on.** Go to **Sales ‣ Configuration ‣ Settings**. In **Quotations & Orders**, tick **Quotation
   Templates** and save. The same block holds **Online Signature**, **Online Payment** (with a prepayment percentage),
   **Default Quotation Validity** and **PDF Quote builder**. The signature, payment and validity defaults are set per
   company.
2. **Create a template.** Go to **Sales ‣ Configuration ‣ Quotation Templates** and click **New**. Type the name in
   **Quotation Template**.
3. **Quotation Validity:** the number of days the quote stays open. Leave it at 0 to fall back on the **Default
   Quotation Validity** from the settings; if that's 0 too, quotes don't expire.
4. **Confirmation Mail:** the email template sent when the order is confirmed. When it's set, Odoo also sends it when
   you confirm the order yourself in the back end.
5. **Company and Invoicing Journal:** in a multi-company database, choose the company, or leave it empty so every
   company can use the template. Set **Invoicing Journal** if orders from this template should invoice in a specific
   sales journal.
6. **Online Signature and Online Payment:** tick either or both. With **Online Payment**, enter the percentage the
   customer pays to confirm. With both ticked, the customer must sign and pay. Their starting values come from the
   Sales settings.
7. **Lines tab:** click **Add a product** for each product and set the **Quantity**. Use **Add a section** for
   headings and **Add a note** for text the customer should read, and drag lines by the handle to order them. A
   description typed on a line replaces the product's own on quotations.
8. **Optional products:** add a section for extras, open its menu (the vertical dots) and choose **Set Optional**.
   Products in that section change colour and default to a quantity of 0, so they don't count in the total until the
   customer, in the portal, or a salesperson sets a quantity.
9. **Terms & Conditions tab:** write the terms for this offer.
10. **Quote Builder tab** (only with **PDF Quote builder** ticked, and once the template is saved): add or upload
    PDFs, such as a cover page or a datasheet. PDFs added here are only offered on quotes that use this template; your
    general ones live in **Sales ‣ Configuration ‣ Headers/Footers**.
11. **Set the default (optional).** Back in the settings, choose the template in **Default Template**. New quotations
    in that company start with it; orders created through eCommerce don't.
12. **Use it.** Create a quotation (**Sales ‣ Orders ‣ Quotations ‣ New**), choose the customer, then pick the
    template in **Quotation Template**. Odoo clears any existing lines, loads the template's lines, and sets the
    expiration date, signature and payment options, terms and journal from the template. Prices come from the
    customer's pricelist. Click **Preview** to see the customer's view, then **Send**.

## Worked example: an equipment supplier's standard quote

A supplier of industrial air compressors (illustrative) quotes the same package most days: a compressor, a dryer and
installation, with filters and a maintenance contract as extras. It builds one template, **Standard compressor
package**.

| Setting | Value |
|---|---|
| Quotation Validity | 15 days |
| Online Signature | Ticked |
| Online Payment | Ticked, 30% |
| Confirmation Mail | "Order confirmed: site readiness checklist" |
| Terms & Conditions | Warranty, installation and site-access terms |
| Quote Builder | Company profile as header, compressor datasheet as footer |

**Lines tab:**

- Section **Compressor package**: screw air compressor (1), refrigerated air dryer (1), installation and commissioning
  service (1)
- Note: "Installation date is agreed after order confirmation."
- Section **Recommended extras**, set optional: spare filter kit (0), annual maintenance contract (0)

The salesperson creates a quotation for a factory customer and picks the template. The lines load and are priced from
the customer's pricelist, and the expiration date is today plus 15 days. They swap the compressor for the larger model
the customer asked about and click **Send**.

In the portal, the customer adds the maintenance contract to the order, signs and pays 30%. Because both conditions
are now met, Odoo confirms the order and sends the "site readiness checklist" email instead of the standard
confirmation.

## What you should see

- A **Quotation Template** field on new quotations, and **Sales ‣ Configuration ‣ Quotation Templates** in the menu.
- On a quotation using the template: the template's sections, products and notes; the **Expiration** date from the
  template's validity; its terms in the terms area; and its signature and payment options on the **Other Info** tab.
- In the customer's view (**Preview**): optional products listed with a quantity they can change, and an **Accept &
  Sign**, **Sign & Pay** or **Accept & Pay** button depending on the options.
- With PDF Quote builder: the template's headers and footers on the **Quote Builder** tab of the quotation.

## Troubleshooting

**There's no Quotation Template field on the quotation.**
The **Quotation Templates** setting isn't ticked. Tick it and save.

**Choosing the template wiped lines I'd already added.**
That's by design: the template replaces all lines. Pick the template first, then add extra lines.

**The template's prices are wrong.**
Templates hold no prices. Check the customer's pricelist and the product's sales price.

**The expiration date isn't what I set, or the quote never expires.**
**Quotation Validity** is 0 on the template, so the company's **Default Quotation Validity** applies; if that's also
0, there's no expiry.

**An online order didn't get the default template.**
By design: the default template isn't applied to orders created through eCommerce.

**A product can't be added to the template.**
Its **Sales** box isn't ticked, or it's a combo product.

**There's no Quote Builder tab on the template.**
Save the template first, and check that **PDF Quote builder** is ticked in the settings.

**The customer can't add the extras in the portal.**
The products aren't under a section set as optional. Use **Set Optional** on the section.

## Related setup

- [How to set up your sales workflow in Odoo](/blog/2026/09/23/how-to-set-up-sales-workflow-odoo/)
- [Product variants and optional products in Odoo Sales](/blog/2026/08/18/product-variants-and-optional-products-in-odoo-sales/)
- [Online payments in India with Odoo](/blog/2026/10/11/online-payments-india-odoo/)
- [A B2B ordering portal for dealers and distributors in Odoo](/blog/2026/10/14/b2b-dealer-ordering-portal-odoo/)
- Want your standard offers turned into templates that sales actually use? See
  [Odoo implementation](/services/odoo-implementation/).

## Official references

- Odoo 19 documentation: [Quotation templates](https://www.odoo.com/documentation/19.0/applications/sales/sales/sales_quotations/quote_template.html)
- Odoo 19 documentation: [Optional products](https://www.odoo.com/documentation/19.0/applications/sales/sales/sales_quotations/optional_products.html)
- Odoo 19 documentation: [Online signatures for order confirmations](https://www.odoo.com/documentation/19.0/applications/sales/sales/sales_quotations/get_signature_to_validate.html)
- Odoo 19 documentation: [Online payment order confirmation](https://www.odoo.com/documentation/19.0/applications/sales/sales/sales_quotations/get_paid_to_validate.html)
- Odoo 19 documentation: [PDF quote builder](https://www.odoo.com/documentation/19.0/applications/sales/sales/sales_quotations/pdf_quote_builder.html)
- Odoo 19 documentation: [Create quotations](https://www.odoo.com/documentation/19.0/applications/sales/sales/sales_quotations/create_quotations.html)

*How this guide was checked: menu paths, field names and behaviour were checked against the Odoo 19 documentation and
the Odoo 19 Sales code for quotation templates, template lines and the PDF Quote Builder in October 2026. The Odoo 19
documentation says a validity of 0 keeps the quote valid indefinitely; in the code, 0 falls back to the company's
Default Quotation Validity, so this guide follows the code. The worked example is illustrative and wasn't run on a live
database, so there are no screenshots; labels can vary slightly with your installed apps and language.*
