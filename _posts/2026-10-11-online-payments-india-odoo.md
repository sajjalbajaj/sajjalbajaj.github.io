---
layout: post
title: "Online Payments in India With Odoo: Razorpay, UPI and PayU"
date: 2026-10-11 10:00:00 +0530
tags: [Odoo, Odoo 19, India, Integration, eCommerce, Invoicing, Accounting, Setup]
hub: integrations
description: "Accept online payments in India with Odoo 19: set up Razorpay or PayU for UPI, cards and netbanking, payment links, refunds and reconciliation."
faqs:
  - q: "Can customers pay by UPI in Odoo?"
    a: "Yes, through the Razorpay or PayU payment provider. Both switch UPI on by default, alongside cards and netbanking. Odoo limits UPI to customers in India paying in rupees, so it doesn't appear on a USD or EUR invoice."
  - q: "Does Odoo have an official PhonePe, Paytm or Cashfree integration?"
    a: "Not in Odoo 19 or Odoo 20. The official providers for India are Razorpay and PayU. Third-party apps for other gateways are listed on the Odoo Apps store; if you use one, treat it as custom code that has to be retested at every upgrade."
  - q: "Can I refund a Razorpay payment from Odoo?"
    a: "Yes. Open the customer payment and click Refund; Razorpay supports full and partial refunds from Odoo. The refund doesn't create a credit note, so issue one from the invoice as well if the sale itself is being reversed."
---

**Short answer:** in Odoo 19, the two payment providers built for India are **Razorpay** and **PayU**. Open
**Accounting ‣ Configuration ‣ Payment Providers**, connect your Razorpay or PayU account and set the **State** to
**Enabled**. Cards, netbanking and UPI are switched on by default. Customers can then pay invoices from the portal or a
payment link, pay to confirm a quotation, and pay at your online shop's checkout. Each payment is recorded against the
invoice in the bank journal you choose.

This is the hands-on setup. For how payment fits into the shop's checkout, start with my explainer on
[payments and checkout in Odoo eCommerce](/blog/2026/08/25/odoo-ecommerce-payments-checkout/).

## Applies to

- **Odoo version:** Odoo 19. I also checked the Odoo 20 documentation and code: the same providers are offered, the
  Razorpay and PayU pages now list their supported payment methods, a provider's **Configuration** tab gains a
  **Minimum Amount** and a **Pricelists** filter beside **Maximum Amount**, and a **Pay on Invoice** method is listed.
- **Edition:** Community and Enterprise. The payment, Razorpay and PayU modules are all in Odoo's Community code.
- **Apps:** Invoicing or Accounting, plus Sales (pay to confirm quotations) and eCommerce (checkout) where you use them.

## Which providers work in India

A payment provider links Odoo to a payment gateway. Card and bank details stay with the gateway; Odoo keeps only a
reference, or a token if the customer saves a payment method. Customers can then pay in four places: **Pay Now** on
an invoice in the customer portal, **Accept & Pay** on an online quotation, a payment link you send, and the
eCommerce checkout.

Odoo 19's provider list has two built for India:

| | Razorpay | PayU |
|---|---|---|
| Setup | **Connect** button, or API keys and a webhook | **Connect** button |
| Test mode | Yes, with API keys | Not in the Connect flow |
| Customer pays | On your Odoo page | On PayU's site |
| On by default | Card, Netbanking, UPI | Card, Netbanking, UPI |
| Can be added | EMI, Pay Later, Wallets India | EMI, Pay Later, Wallets India |
| Saved payment methods | Yes | No |
| Refunds from Odoo | Full and partial | No |
| Currencies | INR and many others | INR only |

There's no official PhonePe, Paytm, Cashfree or CCAvenue provider in Odoo 19 or 20. Third-party apps for some of them
are listed on the Odoo Apps store; if you use one, treat it as custom code that needs testing at every upgrade.

Separately, the Indian localisation adds a **UPI Id** field to the company form. Fill it in, tick **QR Codes** under
**Accounting ‣ Configuration ‣ Settings ‣ Customer Payments**, and invoice PDFs carry a UPI QR code for the amount due.
That money goes straight to your bank, so Odoo only learns about it when you reconcile the bank transaction.

## Before you start

1. **An activated merchant account.** Finish Razorpay's or PayU's onboarding first. Razorpay's **Connect** flow is only
   offered to Indian companies, and PayU won't connect unless the company currency is INR.
2. **Invoicing or Accounting is installed**, with a **Bank** journal for gateway payments. Odoo uses the default Bank
   journal unless you choose another.
3. **The database has a public web address**, so Razorpay's webhook can reach it.
4. **A test database.** Odoo recommends testing on a duplicate or test database, because test payments can disturb
   invoice numbering.
5. **An agreed accounting treatment.** Gateways settle to your bank net of their charges, so agree with your
   accountant how settlements and charges are recorded.

## Step by step

1. Go to **Accounting ‣ Configuration ‣ Payment Providers** (the same list is under **Website** and **Sales**) and open
   **Razorpay**.
2. **Quickest route:** click **Connect**, sign in to Razorpay or create an account, enter the verification codes and
   click **Authorize**. If Razorpay has everything it needs, you return to Odoo with the provider **Enabled**. This
   route has no test mode.
3. **Manual route (needed to test first):** in the Razorpay Dashboard, open **Payments**, switch on **Test Mode**, then
   under **Account & Settings ‣ API Keys** copy the **Key Id** and **Secret Key**.
4. Under **Account & Settings ‣ Webhooks**, click **Add New Webhook**. Enter your database address followed by
   `/payment/razorpay/webhook`, type a **Secret** of your choice, tick `payment.authorized`, `payment.captured`,
   `payment.failed`, `refund.failed` and `refund.processed`, and click **Create Webhook**.
5. In Odoo, activate developer mode, open Razorpay and fill in **Key Id**, **Key Secret** and **Webhook Secret** on the
   **Credentials** tab.
6. Set **State** to **Test Mode** and take a few test payments. When you're ready for real payments, switch off
   Razorpay's **Test Mode**, repeat steps 3 to 5 with the live keys, and set **State** to **Enabled**.
7. On the **Configuration** tab, click **Enable Payment Methods** and switch on any extra methods your Razorpay account
   offers, such as **EMI**, **Pay Later** or **Wallets India**.
8. Still on **Configuration**: tick **Allow Saving Payment Methods** if customers may save a card or UPI for later,
   set a **Maximum Amount** if large payments should come by bank transfer, and choose the **Payment journal** (a
   Bank journal). Recurring payments for subscriptions also need Razorpay support to switch on that feature.
9. Switch on the places customers pay: **Invoice Online Payment** under **Accounting ‣ Configuration ‣ Settings ‣
   Customer Payments**, and **Online Payment** under **Sales ‣ Configuration ‣ Settings ‣ Quotations & Orders**. An
   enabled provider is published on your website automatically.
10. To send a payment link, open an invoice or sales order, click the gear icon and choose **Generate a Payment Link**.
    Change the **Amount** for a part payment if needed, then click **Generate and Copy Payment Link**.

For PayU, open **PayU**, click **Connect**, sign in or sign up, and click **Allow access to the account**. The
provider comes back **Enabled**, and steps 7, 9 and 10 apply in the same way.

## Worked example: a knitwear brand selling to retailers and online

A Ludhiana knitwear brand invoices retailers on 15-day terms and sells to consumers through Odoo eCommerce. It
connects Razorpay with **Connect**, keeps Card, Netbanking and UPI, and adds Wallets India later.

On the Bank journal's **Incoming Payments** tab, the Razorpay payment method gets its own **Outstanding Receipts**
account, "Razorpay clearing", so gateway money stays apart from other receipts until it settles.

- A retailer receives an invoice for ₹47,200 by email, opens it in the portal, clicks **Pay Now** and pays by UPI.
- Odoo records a payment in the Bank journal against "Razorpay clearing", matches it to the invoice, and the invoice
  shows **In payment**.
- Razorpay's settlement reaches the bank as one credit covering several payments, less its charges. In bank
  reconciliation, the accountant matches that line to the Razorpay payments and books the shortfall to a gateway
  charges account, treating any GST on the charges as the accountant advises. The invoices move to **Paid** and
  "Razorpay clearing" returns to zero.
- An online customer returns a jacket. The team clicks **Refund** on the payment for the jacket's amount only, then
  issues a credit note.

## What you should see

- The provider card shows **Enabled**, or **Test Mode** while you test.
- In the portal and at checkout, Razorpay offers UPI, netbanking and cards to a customer in India paying in INR.
- After a payment, the invoice shows **In payment**, and the payment's memo carries Odoo's transaction reference and
  the gateway's reference. A quotation paid with **Accept & Pay** becomes a sales order.
- After bank reconciliation, the invoice shows **Paid**.

## Troubleshooting

**Razorpay doesn't appear for customers.**
In **Test Mode** the provider is unpublished by default. Otherwise check its **Currencies**, **Countries** and **Maximum
Amount**. In developer mode, the bug icon next to **Choose a payment method** on the payment form explains why each
provider or method is unavailable.

**Cards show, but UPI and Netbanking don't.**
Odoo limits UPI, Netbanking, EMI, Pay Later and Wallets India to customers in India paying in INR. A USD invoice, or
a customer address abroad, hides them.

**"Razorpay credentials are missing" when you enable it.**
Use **Connect**, or enter **Key Id** and **Key Secret** in developer mode first.

**The customer paid, but the invoice still looks unpaid.**
First check the webhook: the URL ends in `/payment/razorpay/webhook`, its secret matches **Webhook Secret**, the five events
are ticked, and the database is reachable from the internet.

**You can't tick Capture Amount Manually.**
Odoo names the payment methods to switch off first, and UPI is one, because it doesn't support manual capture.
Razorpay also can't void a payment from Odoo, and payments left uncaptured for more than five days are voided
automatically.

**PayU says it isn't available in your country.**
The company currency isn't INR.

**Invoices stay "In payment".**
Expected until the settlement is reconciled with the bank transaction.

## Related setup

- [How to set up an online store in Odoo](/blog/2026/09/25/how-to-set-up-online-store-odoo/)
- [How to set up bank reconciliation in Odoo](/blog/2026/09/26/how-to-set-up-bank-reconciliation-odoo/)
- [How to set up your sales workflow in Odoo](/blog/2026/09/23/how-to-set-up-sales-workflow-odoo/)
- [Customer invoicing in Odoo](/blog/2026/08/21/customer-invoicing-in-odoo/)
- Want payments, invoicing and reconciliation set up as one flow from the start? See
  [Odoo implementation](/services/odoo-implementation/).

## Official references

- Odoo 19 documentation: [Online payments](https://www.odoo.com/documentation/19.0/applications/finance/payment_providers.html)
- Odoo 19 documentation: [Razorpay](https://www.odoo.com/documentation/19.0/applications/finance/payment_providers/razorpay.html)
- Odoo 19 documentation: [PayU](https://www.odoo.com/documentation/19.0/applications/finance/payment_providers/payu.html)
- Odoo 19 documentation: [Payments](https://www.odoo.com/documentation/19.0/applications/finance/accounting/payments.html)
- Odoo 19 documentation: [Online payment order confirmation](https://www.odoo.com/documentation/19.0/applications/sales/sales/sales_quotations/get_paid_to_validate.html)

*How this guide was checked: menu paths, field names and behaviour were checked against the Odoo 19 documentation and
the Odoo 19 code for the payment, Razorpay, PayU and Indian localisation modules in October 2026. Gateway charges,
settlement timing and onboarding rules are set by Razorpay and PayU and aren't covered here. The worked example is
illustrative and wasn't run on a live database, so there are no screenshots; labels can vary slightly with your
installed apps and language.*
