---
layout: post
title: "Multi-Currency in Odoo 19 for Importers and Exporters"
date: 2026-10-12 08:00:00 +0530
tags: [Odoo, Odoo 19, Accounting, Finance, Invoicing, India, Trading, Setup]
hub: accounting
description: "Set up multi-currency in Odoo 19 for imports and exports: USD and EUR, exchange rates, foreign bills and invoices, and exchange gains and losses."
faqs:
  - q: "Which exchange rate does Odoo use on a foreign-currency invoice or bill?"
    a: "The latest rate on or before the invoice date. While the document is a draft you can overwrite the rate shown under the currency, and the refresh icon puts it back to the rate for that date."
  - q: "Where does Odoo book exchange gains and losses?"
    a: "When a payment is matched with an invoice or bill at a different rate, Odoo posts the difference in the exchange difference journal, to the Gain or Loss account set in the Accounting settings. With the Indian chart of accounts these are Foreign Exchange Profit and Foreign Exchange Loss."
  - q: "Does Odoo Community update exchange rates automatically?"
    a: "No. Automatic Currency Rates is an Enterprise feature, so in Community you add rates by hand on each currency's Rates tab. The rest of this guide works in both editions, apart from the Unrealized Currencies report."
---

**Short answer:** in Odoo 19, activate each foreign currency in **Accounting ‣ Configuration ‣ Currencies**, keep its
rates up to date (by hand, or with **Automatic Currency Rates** in Enterprise), and choose the currency on each bill,
invoice, purchase order or pricelist. Odoo books every foreign document in rupees at the rate for its date. When the
payment arrives at a different rate, it posts the realised gain or loss for you. Revaluing open balances at month end,
the unrealised side, is Enterprise only.

If journals and ledger accounts are new to you, start with my explainer on
[chart of accounts and journals in Odoo](/blog/2026/08/22/chart-of-accounts-and-journals-in-odoo/).

## Applies to

- **Odoo version:** Odoo 19. I compared the Odoo 20 documentation on multi-currency, foreign-currency bank accounts and
  sales currencies: it reads the same as Odoo 19, and the exchange difference settings are unchanged in the Odoo 20
  code.
- **Edition:** Community and Enterprise for currencies, foreign-currency documents, payments, bank journals and realised
  differences. **Automatic Currency Rates** and the **Unrealized Currencies** report are Enterprise only.
- **Apps:** Invoicing or Accounting, with Purchase and Sales for orders and pricelists. In Community the app is called
  Invoicing, so read **Invoicing** where the menu paths below say **Accounting**.

## Before you start

1. **The Indian chart of accounts is installed.** It sets the exchange difference journal to **Exchange Difference**,
   the gain account to **Foreign Exchange Profit** and the loss account to **Foreign Exchange Loss**. You'll confirm
   them in step 3.
2. **Your reference rate is agreed.** Decide with your accountant whose rates the books follow, for example your
   bank's, and how often they're updated.
3. **You know which currencies you need**, for example USD for imports and EUR for exports.
4. **You have the details of any foreign-currency bank account** you hold, such as an EEFC account.

## Step by step

1. **Activate currencies.** Go to **Accounting ‣ Configuration ‣ Currencies** and switch on **Active** for USD and EUR.
   Your main currency comes from the company's country and is shown under **Accounting ‣ Configuration ‣ Settings ‣
   Currencies ‣ Main Currency**.
2. **Enter rates.** Open a currency and, on the **Rates** tab, click **Add a line**. Fill in the **Date** and either
   **Unit per INR** or **INR per Unit**; the second is the familiar "rupees for one dollar" figure. In Enterprise you
   can tick **Automatic Currency Rates** in the **Currencies** section of the settings instead, choose a **Service** and
   an **Interval** (**Manually**, **Daily**, **Weekly** or **Monthly**), and click the refresh icon to fetch rates now.
   The documentation names the European Central Bank as the default service and doesn't list an Indian one, so check
   the **Service** list in your own database and compare its rates with your reference before relying on it.
3. **Check the exchange difference accounts.** In **Accounting ‣ Configuration ‣ Settings ‣ Default Accounts**, under
   **Exchange difference entries**, check the **Journal**, **Gain** and **Loss**. This section only appears for users
   with full accounting rights.
4. **Give vendors their currency.** On a US supplier's contact, **Sales & Purchase** tab, set **Supplier Currency** to
   USD. New purchase orders, and the bills created from them, then default to USD.
5. **Open a foreign-currency bank journal.** In **Accounting ‣ Configuration ‣ Journals**, click **New**, choose the
   **Bank** type and set **Currency** to EUR. In **Bank Account**, type the account name, click **Create and edit** and
   save. Odoo's documentation recommends leaving **Currency** blank on that ledger account, because the journal's
   currency already limits it.
6. **Price exports in EUR.** Tick **Pricelists** under **Sales ‣ Configuration ‣ Settings ‣ Pricing**. In **Sales ‣
   Products ‣ Pricelists**, create "Export EUR" with **Currency** set to EUR. To fix EUR prices instead of converting
   your INR price at each day's rate, open a product's **Extra Prices** smart button and add a rule for that pricelist
   with a **Min. Quantity** and **Price**. Then choose the pricelist in the **Pricelist** field on each export
   customer's **Sales & Purchase** tab.
7. **Raise documents in the currency.** On a draft bill or invoice, pick the **Currency**. Below it, Odoo shows the
   conversion, in the form 1 INR = x USD. You can overwrite that rate while the document is a draft; the refresh icon
   resets it to the rate for the invoice date.
8. **Register payments.** Click **Pay**, choose the **Journal** (the EUR bank or your INR bank) and the **Payment
   Date**, and select the currency in the **Amount** field.
9. **Month end (Enterprise).** Open **Accounting ‣ Review ‣ Unrealized Currencies**. Use **Exchange Rates** if your
   closing rate differs from Odoo's, then click **Adjustment Entry**, pick a **Journal**, an **Expense Account** and an
   **Income Account**, and set the **Date** and **Reversal Date**. Odoo posts the adjustment and reverses it on the
   reversal date.

## Worked example: importing in USD, exporting in EUR

A Rajkot maker of agricultural pump sets imports motor components from a US supplier in USD and exports finished pumps
to a distributor in Germany in EUR. It has an INR current account and a EUR account, each with its own bank journal.
The rates below are illustrative, not market rates.

| Date | 1 USD | 1 EUR |
|---|---|---|
| 2 June | ₹83.00 | ₹90.00 |
| 30 June | ₹83.60 | ₹91.00 |
| 2 July | ₹84.00 | ₹91.50 |

**The import.** A bill for USD 10,000 dated 2 June is booked at ₹8,30,000 owed to the supplier. On 2 July the company
pays USD 10,000 from its INR account, which at ₹84.00 costs ₹8,40,000. When the payment is matched with the bill, Odoo
posts ₹10,000 in the Exchange Difference journal to **Foreign Exchange Loss**. Customs duty and freight paid in rupees
are separate costs, which Odoo can add to the product cost through landed costs.

**The export.** An invoice for EUR 20,000 dated 2 June is booked at ₹18,00,000. On 30 June it's still unpaid, and the
**Unrealized Currencies** report shows an adjustment of ₹20,000, because EUR 20,000 at ₹91.00 is ₹18,20,000. The
accountant posts it dated 30 June with a reversal on 1 July, so June's balance sheet carries the receivable at the
month-end rate. On 2 July the distributor pays EUR 20,000 into the EUR account. At ₹91.50 that's ₹18,30,000, so Odoo
posts a realised gain of ₹30,000 to **Foreign Exchange Profit**. Because the June adjustment was reversed, the gain
isn't counted twice.

## What you should see

- Bills and invoices show amounts in USD or EUR, with the INR conversion under the currency. Their journal items carry
  both the **Amount in Currency** and the INR balance.
- After a payment at a different rate, an entry in the **Exchange Difference** journal. Find it in **Accounting ‣
  Review ‣ Journal Items**, filtered on that journal.
- In the EUR bank journal, each transaction is in EUR, and Odoo stores the INR value alongside it.
- Quotations for export customers show EUR prices from their pricelist.

## Troubleshooting

**A currency doesn't appear on the invoice or pricelist.**
It isn't active. Switch on **Active** in **Accounting ‣ Configuration ‣ Currencies**.

**The rate on a document looks out of date.**
There's no rate for that date, so Odoo used the latest earlier one. Add the rate, then click the refresh icon on the
draft.

**Automatic Currency Rates is shown as an upgrade.**
You're on Community, where rates are entered by hand.

**No exchange difference entry after a payment.**
The payment hasn't been matched with the invoice or bill yet. If the bank journal's payment methods have no
outstanding accounts, Odoo only posts the difference when the bank transaction is reconciled. Also check that **Gain**
and **Loss** are filled in.

**EUR prices change every day.**
The pricelist has no fixed EUR prices, so Odoo converts your INR price at the latest rate. Add **Extra Prices** rules.

**Default Accounts is missing from the settings.**
Your user doesn't have full accounting rights.

**The EUR journal won't take a USD transaction.**
A journal with a currency only handles that currency. Record it in the right journal.

## Related setup

- [How to set up your chart of accounts in Odoo](/blog/2026/09/22/how-to-set-up-chart-of-accounts-odoo/)
- [How to set up bank reconciliation in Odoo](/blog/2026/09/26/how-to-set-up-bank-reconciliation-odoo/)
- [Vendor bills and payments in Odoo Accounting](/blog/2026/08/21/vendor-bills-and-payments-in-odoo-accounting/)
- [Pricelists and discounts in Odoo Sales](/blog/2026/08/18/pricelists-and-discounts-in-odoo-sales/)
- [Inventory valuation and landed costs in Odoo](/blog/2026/08/14/inventory-valuation-and-landed-costs-in-odoo/)
- [How to set up GST in Odoo 19](/blog/2026/10/10/how-to-set-up-gst-odoo/)
- Trading across several currencies and want the accounts right from day one? See
  [Odoo implementation](/services/odoo-implementation/).

## Official references

- Odoo 19 documentation: [Multi-currency system](https://www.odoo.com/documentation/19.0/applications/finance/accounting/get_started/multi_currency.html)
- Odoo 19 documentation: [Manage a bank account in a foreign currency](https://www.odoo.com/documentation/19.0/applications/finance/accounting/bank/foreign_currency.html)
- Odoo 19 documentation: [Foreign currencies in Sales](https://www.odoo.com/documentation/19.0/applications/sales/sales/products_prices/prices/currencies.html)
- Odoo 19 documentation: [Payments](https://www.odoo.com/documentation/19.0/applications/finance/accounting/payments.html)

*How this guide was checked: menu paths, field names and Enterprise-only status were checked against the Odoo 19
documentation and the Odoo 19 code (accounting settings, invoice currency rates and the Indian chart of accounts) in
October 2026. The automatic rate services live in an Enterprise module whose code isn't public, so the service list
wasn't checked beyond the documentation. The exchange rates and worked example are illustrative and weren't run on a
live database, so there are no screenshots; labels can vary slightly with your installed apps and language.*
