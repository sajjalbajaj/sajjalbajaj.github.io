---
layout: post
title: "How to Set Up Customer Credit Limits in Odoo 19"
date: 2026-10-12 09:00:00 +0530
tags: [Odoo, Odoo 19, Setup, Sales, Accounting, Customer Management, Finance, Trading]
hub: sales
description: "Set up customer credit limits in Odoo 19: the Sales Credit Limit setting, what counts towards a customer's credit, the warning, and adding a hard stop."
faqs:
  - q: "Does Odoo block a sales order when the customer is over the credit limit?"
    a: "No. Odoo 19 shows a yellow warning on the quotation and on the draft invoice, but anyone who can confirm or post still can. A hard stop needs an approval step on the Confirm button (Studio, Enterprise) or custom code."
  - q: "What does Odoo count towards a customer's credit limit?"
    a: "What the customer owes on posted invoices (Total Receivable), plus, with Sales installed, the tax-inclusive value of confirmed sales orders not yet invoiced, plus the quotation or draft invoice you're looking at. Other quotations and draft invoices don't count."
  - q: "Can I set a different credit limit for each customer?"
    a: "Yes. The Default Credit Limit in the settings applies to every customer without its own limit. For a specific customer, tick Partner Limit in the Credit Limits section of its Accounting tab and enter the amount. A limit of 0 means no check for that customer."
---

**Short answer:** in Odoo 19, tick **Sales Credit Limit** in **Accounting ‣ Configuration ‣ Settings** (in the
**Customer Invoices** section), optionally with a **Default Credit Limit**, and give individual customers their own
limit with **Partner Limit** on the contact's **Accounting** tab. Odoo then adds what the customer owes, confirmed
orders not yet invoiced and the current document, and shows a warning on quotations and draft invoices when the total
goes over the limit. It's a warning, not a block: nothing stops anyone confirming the order or posting the invoice.

For the wider picture of getting paid on time, start with my explainer on
[customer invoicing in Odoo](/blog/2026/08/21/customer-invoicing-in-odoo/).

## Applies to

- **Odoo version:** Odoo 19. Neither the Odoo 19 nor the Odoo 20 documentation has a page on credit limits, so this
  guide is based on the Odoo 19 code of the Invoicing and Sales apps. In the Odoo 20 code the setting, fields and
  warning are the same, with one change: a sales order marked **Manually Closed For Invoicing** no longer counts
  towards the customer's credit.
- **Edition:** Community and Enterprise. Payment follow-up levels and Studio approval rules, mentioned below, are
  Enterprise only.
- **Apps:** Invoicing or Accounting, plus Sales for the warning on quotations and for counting open orders.

## Before you start

1. **Decide the policy:** a default limit for everyone or none, specific limits for key accounts, and who signs off
   exceptions.
2. **Keep receivables clean.** Match payments to invoices and reconcile the bank regularly. If your payment methods
   have no outstanding accounts, a registered payment only reduces what the customer owes once the bank transaction
   is reconciled.
3. **Check access.** Changing the setting needs administrator rights, and the credit fields on a contact are only
   visible to users with Invoicing access or higher.
4. **Payment terms exist** for the terms you give, under **Accounting ‣ Configuration ‣ Payment Terms**.

## Step by step

1. Go to **Accounting ‣ Configuration ‣ Settings**, find **Sales Credit Limit** in the **Customer Invoices** section,
   tick it and save. The setting applies per company.
2. Optionally fill in **Default Credit Limit**, which appears once the box is ticked. It applies to every customer
   without a limit of its own. Leave it at 0 if only selected customers should have limits.
3. Open the customer from **Accounting ‣ Customers ‣ Customers** and go to the **Accounting** tab (labelled
   **Invoicing** in Community). Open the company itself, not one of its contact persons, which only link to the parent.
4. In the **Credit Limits** section you'll see **Total Receivable** and **Days Sales Outstanding (DSO)**. Tick
   **Partner Limit** and enter the limit in your company currency. Unticking it puts the customer back on the default.
5. On the **Sales & Purchase** tab, set the customer's **Payment Terms**, so orders and invoices carry the agreed due
   dates.
6. **For a hard stop (Enterprise, with Studio):** open a sales order in Studio, select the **Confirm** button and click
   **Add an approval step**. Choose **Approvers** or an **Approver Group**, such as your credit controller, and use the
   filter icon to apply the step only to some orders, for example customers with a "Credit hold" tag that finance
   maintains. A filter can't compare each customer's running total with its own limit, so a fully automatic block
   needs a small custom module.
7. **In Accounting (Enterprise),** set up **Accounting ‣ Configuration ‣ Follow-up Levels** so overdue invoices are
   chased on a schedule. Collecting on time is what brings customers back under their limits.

## How Odoo works out the total

With the setting on, Odoo adds three amounts for the customer's company, converted to your company currency. All its
addresses and contact persons count together.

- **Total Receivable:** posted customer invoices not yet paid, net of credit notes and any payments already recorded
  against the receivable.
- **Confirmed sales orders not fully invoiced** (with Sales installed): the value, including tax, of ordered
  quantities not yet on a posted invoice. Ordered quantities count whether or not they've been delivered, and orders in
  another currency are converted at today's rate.
- **The document you're on:** the quotation's total, or the draft invoice's total less any part already counted
  through its sales order.

The warning appears only when the sum is *above* the limit; reaching it exactly doesn't trigger it. Other quotations,
draft invoices and cancelled orders don't count.

The warning is a yellow banner on quotations (draft or sent) and on draft customer invoices. Salespeople see it on
quotations even though they can't see the limit on the contact; on invoices only users with Invoicing rights see it.
Once the order is confirmed, or the invoice posted, the banner is gone.

## Worked example: a distributor with dealer limits

A Jalandhar distributor of sanitaryware sells to dealers on 30-day terms. Its rule: new dealers get ₹2,00,000 of
credit, established dealers get more, and nobody confirms an over-limit order without the accounts manager's say-so.
Dealers who repeatedly pay late get a "Credit hold" tag, and in Enterprise a Studio approval step on **Confirm**
enforces it.

- **Settings:** **Sales Credit Limit** on, **Default Credit Limit** ₹2,00,000.
- **Sharma Sanitary Store:** **Partner Limit** ₹5,00,000, **Payment Terms** 30 Days.

On Monday a salesperson prepares a quotation for Sharma worth ₹95,000 including GST. Odoo adds:

| | Amount |
|---|---|
| Total Receivable (two unpaid invoices) | ₹3,20,000 |
| Confirmed order, half delivered, nothing invoiced yet | ₹1,10,000 |
| This quotation | ₹95,000 |
| **Total** | **₹5,25,000** |

₹5,25,000 is above ₹5,00,000, so a banner on the quotation says Sharma Sanitary Store has reached its credit limit and
shows the total due, including sales orders and this document. The salesperson checks with the accounts manager
instead of confirming. Finance chases the older invoice, and once a ₹1,50,000 payment is recorded and matched, the
total falls to ₹3,75,000, the banner disappears and the order goes ahead.

## Who should be allowed to override

Because Odoo only warns, overriding is a decision about people rather than a setting:

- **Who sets limits:** keep **Partner Limit** with finance. Anyone with Invoicing access can change it, so don't give
  that access to the sales team just so they can see credit.
- **Who approves an over-limit order:** one named role, such as the accounts manager, set as the approver.
- **Leave a trail:** note the reason for approving in the order's chatter.
- **Review limits on a cycle:** look at **Days Sales Outstanding (DSO)** and payment history each quarter, rather than
  raising limits one order at a time.

## What you should see

- A **Credit Limits** section on each customer company's **Accounting** tab, with **Total Receivable**, **DSO** and
  **Partner Limit**.
- A yellow banner on over-limit quotations and draft invoices, naming the limit and the total due.
- No banner once the total is at or below the limit, or once the order is confirmed.

## Troubleshooting

**No banner although the customer is over the limit.**
Check that **Sales Credit Limit** is on for this company, the customer's limit isn't 0, and the document is a
quotation or a draft invoice. On invoices, users without Invoicing rights don't see the banner.

**The Credit Limits section is missing on the contact.**
The setting is off, your user lacks Invoicing rights, or you've opened a contact person rather than the company.

**The total looks too high.**
Payments may not be matched with invoices yet. Or confirmed orders still hold quantities that will never be delivered
or invoiced: they count until you reduce the quantity or cancel the order. In Odoo 20, marking an order **Manually
Closed For Invoicing** also stops it counting.

**Salespeople can change limits.**
They have Invoicing rights. Review their access in **Settings ‣ Users & Companies ‣ Users**.

**Orders are confirmed over the limit.**
That's standard behaviour: the warning doesn't block. Add an approval step or a custom check.

## Related setup

- [How to set up your sales workflow in Odoo](/blog/2026/09/23/how-to-set-up-sales-workflow-odoo/)
- [How to set up users and access rights in Odoo](/blog/2026/09/21/how-to-set-up-odoo-users-access-rights/)
- [How to set up Studio in Odoo](/blog/2026/10/05/how-to-set-up-studio-odoo/)
- [Online payments in India with Odoo](/blog/2026/10/11/online-payments-india-odoo/), for taking payment upfront
- [Slow invoicing hurting cash flow?](/blog/2026/08/16/business-problem-slow-invoicing-cash-flow-odoo/)
- Want credit control, approvals and follow-ups designed around how you actually sell? See
  [Odoo implementation](/services/odoo-implementation/).

## Official references

- Odoo 19 documentation: [Payment terms and installment plans](https://www.odoo.com/documentation/19.0/applications/finance/accounting/customer_invoices/payment_terms.html)
- Odoo 19 documentation: [Follow-up on invoices](https://www.odoo.com/documentation/19.0/applications/finance/accounting/payments/follow_up.html)
- Odoo 19 documentation: [Approval rules in Studio](https://www.odoo.com/documentation/19.0/applications/studio/approval_rules.html)
- Odoo 19 source code: [Invoicing (account) module](https://github.com/odoo/odoo/tree/19.0/addons/account) and
  [Sales (sale) module](https://github.com/odoo/odoo/tree/19.0/addons/sale)

*How this guide was checked: the Odoo 19 and 20 documentation has no page on credit limits, so the setting, fields,
calculation and warning were checked in the Odoo 19 source code of the account and sale modules, with the Odoo 20 code
compared, in October 2026. Payment terms, follow-ups and approval rules were checked against the Odoo 19
documentation. The worked example is illustrative and wasn't run on a live database, so there are no screenshots;
labels can vary slightly with your installed apps and language.*
