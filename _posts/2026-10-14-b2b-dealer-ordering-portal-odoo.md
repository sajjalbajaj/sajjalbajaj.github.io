---
layout: post
title: "A B2B Ordering Portal for Dealers and Distributors in Odoo"
date: 2026-10-14 08:00:00 +0530
tags: [Odoo, Odoo 19, Setup, Sales, eCommerce, Customer Management, Distribution, Website]
hub: sales
description: "Build a B2B ordering portal for dealers in Odoo 19: invite-only eCommerce, dealer pricelists, payment terms, prices before tax, reorders and custom work."
faqs:
  - q: "Can I hide my Odoo shop from the public and show it only to dealers?"
    a: "Yes. In Website ‣ Configuration ‣ Settings, set Ecommerce Access to Logged in users and Customer Account to On invitation. Visitors who aren't signed in can't see the shop, products or cart, and only contacts you invite get an account."
  - q: "How do dealers see their own prices in Odoo eCommerce?"
    a: "Set a pricelist on the dealer's contact, on the Sales & Purchase tab, and assign that pricelist to the website on its Ecommerce tab. A signed-in dealer then sees that pricelist by default; if it isn't assigned to the website, the website's default pricelist applies instead."
  - q: "Can dealers order on credit without paying online in Odoo 19?"
    a: "There's no dedicated option. The usual approach is a copy of the Wire Transfer payment method, renamed for dealers: the order arrives as a quotation and your team confirms it. The Odoo 20 documentation adds a Pay on Invoice method for this."
---

**Short answer:** in Odoo 19 a dealer portal is the eCommerce app locked to signed-in customers, plus the standard
customer portal. Set **Ecommerce Access** to **Logged in users** and **Customer Account** to **On invitation**, show
prices **Tax Excluded**, give each dealer a pricelist and payment terms on its contact, and invite dealers with
**Grant portal access**. Dealers then order at their own prices, reorder past orders, and see their quotations,
orders and invoices. Minimum order rules and a credit hold at checkout aren't standard and need customisation.

If you're new to Odoo's online shop, start with my explainer on
[setting up Odoo eCommerce](/blog/2026/08/25/odoo-ecommerce-online-store/).

## Applies to

- **Odoo version:** Odoo 19. I also checked the Odoo 20 documentation for the same pages. The settings below read the
  same, with one useful addition: the Odoo 20 B2B page mentions a **Pay on Invoice** payment method that lets customers
  order without paying upfront and pay once they get the invoice. Odoo 19 has no such method.
- **Edition:** Community and Enterprise. Website, eCommerce, the customer portal, pricelists and payment terms are in
  both.
- **Apps:** Website with eCommerce, Sales, Invoicing (or Accounting) and Contacts.

## Before you start

1. **One company contact per dealer**, with its address and tax details, and a person under it for each buyer who
   will log in. Every buyer needs an email address.
2. **Pricing agreed by tier.** Decide how many dealer pricelists you need before building them. Fewer tiers are
   easier to maintain than one pricelist per dealer.
3. **Payment rules.** Which dealers pay online at checkout, and which buy on credit terms.
4. **A separate website if you also sell to consumers.** Odoo's documentation strongly recommends one website for B2B
   and another for B2C, since these settings are per website.

## Step by step

1. **Lock the shop.** Go to **Website ‣ Configuration ‣ Settings**, choose the dealer website and, in the
   **eCommerce** section, set **Ecommerce Access** to **Logged in users**. Visitors who aren't signed in can't see the
   shop, products, cart or wishlist.
2. **Require an account at checkout.** Set **Sign in/up at checkout** to **Mandatory**.
3. **Stop free sign-ups.** In the **General** section, set **Customer Account** to **On invitation** and save. Then reopen the settings and check
   it again: in the Odoo 19 code, switching **Sign in/up at checkout** to Optional or Mandatory also switches Customer
   Account to Free sign up.
4. **Show prices before tax.** Under **Display Product Prices**, choose **Tax Excluded**. Tax is then added at the
   order summary step.
5. **Turn on pricelists.** Tick **Pricelists** in the same section (it's shared with the Sales app) and save.
6. **Build the dealer pricelists.** In **Website ‣ eCommerce ‣ Pricelists**, create one per tier, with price rules
   for discounts and, where you give volume prices, a **Min. Quantity**. On each pricelist's **Ecommerce** tab, set
   **Website** to the dealer website and leave **Selectable** unticked, so dealers can't switch to another tier.
   Keep your general pricelist at the top of the list: the first pricelist on the website without a country group is
   the default.
7. **Set up each dealer.** On the dealer's company contact, open **Sales & Purchase** and set **Pricelist** and
   **Payment Terms**. In the Odoo 19 code both pass down to the buyers under the company, and new orders take them
   from the contact.
8. **Credit limits (optional).** Follow my guide to
   [customer credit limits in Odoo](/blog/2026/10/12/customer-credit-limits-odoo/). Odoo 19 shows the credit warning
   on quotations in the back office only; the eCommerce checkout doesn't check credit, so an online order isn't
   stopped.
9. **Payment at checkout.** For dealers who pay upfront, publish a payment provider (see
   [online payments in India with Odoo](/blog/2026/10/11/online-payments-india-odoo/)). For dealers on terms, the
   documentation notes that the **Wire Transfer** method can serve as a template for manually processed methods:
   duplicate it, rename it (for example "Pay on account"), then enable and publish the copy, which starts disabled.
   An order placed this way stays a quotation, and its stock isn't reserved, until your team confirms it.
10. **Invite the dealers.** In **Website ‣ eCommerce ‣ Customers** (or Contacts), switch to the list view, select the
    buyers, click the gear (**Actions**) and choose **Grant portal access**. In the **Portal Access Management**
    window, click **Grant Access** for each one. Each buyer gets an email to set a password.
11. **Optional: an access request page.** For new dealers, build a website form whose **Action** is **Create a
    Customer**. Requests appear in **Website ‣ eCommerce ‣ Customers**; vet them, assign a pricelist and grant access.

## What dealers can do once invited

- **Order** from the shop at their pricelist, with prices before tax.
- **Reorder:** **Order Again** on a past order in the portal puts all its products in the cart, and **Quick reorder**
  at the order summary step lists previously ordered products.
- **Review quotations** your team sends, and accept them online with a signature or payment if you require it.
- **See orders, deliveries and invoices.** The order page shows the latest delivery orders and any returns; invoices
  can be downloaded and, with a payment provider, paid online.
- **See colleagues' orders.** In the Odoo 19 code, a portal user sees every quotation and order of their company, so
  a dealer's buyers share one order history. If branches mustn't see each other's orders, make each branch its own
  company contact.

## What usually needs customisation

Odoo 19 has no standard setting for these, so plan them as custom work:

- **Minimum order quantity or value.** A pricelist's **Min. Quantity** only sets the price for larger quantities, and
  a discount program's minimum purchase only controls the reward. Nothing blocks a smaller order.
- **A credit hold at checkout**, stopping a dealer who is over the limit or has overdue invoices.
- **A different catalogue per dealer.** Products are published per website, not per customer.
- **Scheme rules beyond pricelists and discount programs**, such as discounts that depend on a dealer's quarterly
  volume.

## Worked example: a manufacturer with 150 dealers

A pump manufacturer (illustrative) sells to about 150 dealers in three tiers and also sells spares to consumers.

- **Two websites:** the consumer shop stays public; the dealer site gets **Logged in users**, **Mandatory** sign-in,
  **On invitation** and **Tax Excluded** prices.
- **Three pricelists:** Gold, Silver and Standard, each with discount rules and **Min. Quantity** breaks for full
  pallets, all assigned to the dealer website and not selectable.
- **Dealer contacts:** each dealer company carries its tier pricelist and agreed payment terms. Its buyers inherit
  both.
- **Payment:** a "Pay on account" copy of Wire Transfer for dealers on terms, and an online provider for the rest.
- **Rollout:** the sales team tags dealer companies by region and grants portal access region by region from the list
  view, so support questions arrive in manageable batches.
- **Daily flow:** "Pay on account" orders arrive as quotations under **Unpaid Orders**. The sales coordinator checks
  the credit warning on each one and confirms it; delivery and invoicing then run as for any sales order, and the
  dealer sees the invoice in the portal.

The manufacturer also wants a minimum order value per dealer. That's the one item here that needs custom code.

## What you should see

- A signed-out visitor on the dealer site can't open the shop.
- A signed-in Gold dealer sees Gold prices before tax, and the order in **Website ‣ eCommerce ‣ Orders** carries the
  Gold pricelist and the dealer's payment terms.
- "Pay on account" orders wait as quotations in **Website ‣ eCommerce ‣ Unpaid Orders** until someone confirms them.
- In the portal, the dealer's orders, quotations and invoices are listed, with **Order Again** on confirmed orders.

## Troubleshooting

**A dealer sees standard prices, not their tier.**
Their pricelist isn't assigned to this website on its **Ecommerce** tab, or it has **Country Groups** set: leave that
empty on dealer pricelists. Check the dealer's company contact too, because buyers follow the company's pricelist.

**Strangers can create accounts.**
**Customer Account** went back to **Free sign up** after the checkout setting changed. Set **On invitation** again
and save.

**Dealers see a pricelist selector.**
One of the dealer pricelists is **Selectable**. Untick it.

**An invited buyer never got the email.**
The contact has no email address, or outgoing email isn't working. Fix it and grant access again.

**An order came in without the dealer's payment terms.**
The terms are missing on the dealer's company contact. Set them there; existing orders keep the terms they were
created with.

## Related setup

- [Pricelists and discounts in Odoo Sales](/blog/2026/08/18/pricelists-and-discounts-in-odoo-sales/)
- [How to build a website in Odoo](/blog/2026/09/30/how-to-build-a-website-odoo/)
- [Sales returns in Odoo: return stock and credit note together](/blog/2026/10/13/sales-returns-rma-odoo/)
- [ERP for trading and distribution](/blog/2026/08/26/erp-for-trading-and-distribution/)
- Planning a dealer portal, including the custom pieces? See [Odoo implementation](/services/odoo-implementation/).

## Official references

- Odoo 19 documentation: [B2B and B2C](https://www.odoo.com/documentation/19.0/applications/websites/ecommerce/configuration/b2b_b2c.html)
- Odoo 19 documentation: [Customer accounts](https://www.odoo.com/documentation/19.0/applications/websites/ecommerce/configuration/customer_accounts.html)
- Odoo 19 documentation: [eCommerce prices](https://www.odoo.com/documentation/19.0/applications/websites/ecommerce/configuration/prices.html)
- Odoo 19 documentation: [Pricelists](https://www.odoo.com/documentation/19.0/applications/sales/sales/products_prices/prices/pricing.html)
- Odoo 19 documentation: [Payment terms](https://www.odoo.com/documentation/19.0/applications/finance/accounting/customer_invoices/payment_terms.html)
- Odoo 19 documentation: [Granting portal access](https://www.odoo.com/documentation/19.0/applications/general/users/user_portals/portal_access.html)
- Odoo 19 documentation: [Checkout](https://www.odoo.com/documentation/19.0/applications/websites/ecommerce/checkout.html)
- Odoo 19 documentation: [Order handling](https://www.odoo.com/documentation/19.0/applications/websites/ecommerce/order_handling.html)
- Odoo 19 documentation: [Bank payments (Wire Transfer)](https://www.odoo.com/documentation/19.0/applications/finance/payment_providers/bank_payments.html)

*How this guide was checked: settings, menu paths and field names were checked against the Odoo 19 documentation and
the Odoo 19 eCommerce, portal, sales and pricelist code in October 2026, including the checkout setting that resets
Customer Account, the portal rules for company orders and the absence of credit checks at checkout. The worked example
is illustrative and wasn't run on a live database, so there are no screenshots; labels can vary slightly with your
installed apps and language.*
