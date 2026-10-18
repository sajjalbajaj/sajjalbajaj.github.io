---
layout: post
title: "How to Set Up Sales Commissions in Odoo 19: Plans and Targets"
date: 2026-10-18 10:00:00 +0530
tags: [Odoo, Odoo 19, Sales, Sales Management, Setup, Payroll, Finance, Business Automation]
hub: sales
description: "Set up sales commissions in Odoo 19: enable Commissions, build target or achievement plans, pick what counts, assign salespeople and pay the results."
faqs:
  - q: "Is the Commissions feature in Odoo Community?"
    a: "No. The Commissions module isn't part of Odoo's Community source code and Community's Sales settings have no Commissions option, so you need Odoo Enterprise. In Community, commissions are usually worked out from sales or invoice reports, or built as a custom module."
  - q: "Can Odoo pay commission only when the customer pays?"
    a: "Not out of the box, as far as the documentation goes. Odoo 19 lists amount sold, amount invoiced, quantity sold, quantity invoiced, margin and new MRR as achievements, with nothing based on payments received. Paying only on collected cash needs a manual check or a customisation."
  - q: "Can I change an approved commission plan?"
    a: "Not directly. Approved plans can't be edited. Click Reset to Draft, make the change, then approve the plan again."
---

**Short answer:** Odoo 19 Enterprise has a **Commissions** feature in the Sales app. Tick **Commissions** in **Sales ‣
Configuration ‣ Settings**, then create a plan in **Sales ‣ Commissions ‣ Commission Plans**. Choose **Targets** or
**Achievements**, per salesperson or per sales team, the effective period and target frequency, what counts (amount
sold, amount invoiced, quantities, margin or MRR) and who is on the plan. Approve it, and Odoo calculates commission as
orders and invoices come in. Paying it is a separate step, in Payroll or your own payroll.

Achievements built on invoices follow your invoicing policy, so if that's unfamiliar, read my explainer on
[invoicing policies in Odoo Sales](/blog/2026/08/19/invoicing-policies-in-odoo-sales/) first.

## Applies to

- **Odoo version:** Odoo 19. I also checked the Odoo 20 Commissions and Payroll commission pages, which read the same
  as Odoo 19's.
- **Edition:** **Enterprise only.** The Commissions module isn't in Odoo's Community source code, and Community's
  Sales settings have no Commissions option. The Payroll app and Subscriptions, needed for the MRR measure, are
  Enterprise too.
- **Apps:** Sales, with Invoicing or Accounting for the invoiced measures. Subscriptions for MRR, and Payroll if you
  pay commissions through Odoo.

## Before you start

1. **Write the scheme down in plain words first.** Who is paid (each salesperson or a whole team), on what (orders
   booked or invoices raised), how often (monthly, quarterly or yearly), and how (a flat percentage or a payout for
   hitting a target).
2. **Clean up the salesperson data.** Achievements are counted per salesperson or sales team, so check the
   **Salesperson** and **Sales Team** on open orders and invoices before the plan starts.
3. **Check product costs if you pay on margin.** Margin is selling price minus cost price, so wrong costs mean wrong
   commission.
4. **Agree the targets per period**, for example a rupee figure for each quarter and each person.
5. **Decide how you'll pay**, through Odoo Payroll or your existing payroll provider.

## Step by step

1. Go to **Sales ‣ Configuration ‣ Settings**. In the **Invoicing** section, tick **Commissions** and click **Save**.
   A **Commissions** menu appears in the Sales menu bar.
2. Open **Sales ‣ Commissions ‣ Commission Plans** and click **New**. Give the plan a name.
3. **Based on:** choose **Targets** (a payout for reaching a goal) or **Achievements** (a percentage of what's
   achieved). Next to it, choose **per** **Salesperson** or **Sales Team**.
4. Set the **Effective Period** (start and end dates) and the **Target Frequency**: **Monthly**, **Quarterly** or
   **Yearly**.
5. **For target plans:** enter the **On Target Commission**, the payout for reaching 100% of the target. On the
   **Targets** tab, Odoo lists one line per **Period**; enter each **Target**.
6. **Levels (target plans):** on the **Commissions** tab, add levels of **Target completion (%)** and the
   **Commission** at that level. Levels can start at 0% and go above 100%. Without a level above 100%, nobody earns
   more than the stated commission.
7. **Achievements:** on the **Achievements** tab, click **Add a new achievement**. Choose what's measured and, if you
   want, limit it to a product or a product category. For achievement plans, enter the rate, for example 5% of the
   amount invoiced. The documentation notes that every plan needs both achievements and targets, whichever it's based
   on.
8. **People:** on the **Sales People** tab, click **Add a new Sales Person**, or **Add Multiple Salespersons**, which
   only appears in developer mode.
9. Click **Approve**. The plan moves from **Draft** to **Approved**, and Odoo starts tracking performance. Approved
   plans can't be edited; use **Reset to Draft** to change one.
10. **Pay the commission.** The Payroll documentation pays commissions as separate *warrant payslips*: in **Payroll ‣
    Payslips ‣ Batches**, click **Generate Warrant Payslips**, set the **Period** and **Department**, enter each
    employee's **Commission Amount**, then click **Generate Payslips** or **Export**. You type the amount in, so take
    it from the plan's results for that period. If that button isn't in your database, or payroll runs outside Odoo,
    pay through your usual payroll.

## Which achievement to choose

| Achievement | What it counts | Use it when |
|---|---|---|
| **Amount Sold** | Total value of sales orders | You reward bookings, before delivery or billing |
| **Amount Invoiced** | Total value of confirmed invoices | You reward billing; follows your invoicing policy |
| **Quantity Sold** | Units on sales orders | You push volume of a product line |
| **Quantity Invoiced** | Units invoiced | Volume, counted at billing |
| **Margin** | Selling price minus cost price | Discounting is a problem and costs are reliable |
| **MRR** | New monthly recurring revenue | You sell subscriptions (needs the Subscriptions app) |

There's no documented measure for payments received. If your policy is "commission on collected money", use **Amount
Invoiced** and hold back payouts for unpaid invoices by hand, or plan a customisation.

## Worked example: a fasteners distributor in Pune

An industrial fasteners distributor in Pune has three field salespeople and one inside-sales executive who looks after
anchor fasteners. The scheme runs for the second half of the financial year. All figures are illustrative.

**Plan 1, field sales (target plan):**

| Setting | Value |
|---|---|
| Based on / per | Targets, per Salesperson |
| Effective Period | 1 October 2026 to 31 March 2027 |
| Target Frequency | Quarterly |
| On Target Commission | ₹30,000 |
| Target, each quarter | ₹15,00,000 |
| Achievement | Amount Invoiced |
| Levels | 0% ₹0; 50% ₹0; 100% ₹30,000; 150% ₹55,000 |

- A salesperson who invoices exactly ₹15,00,000 in a quarter reaches 100% and earns **₹30,000**.
- One who invoices ₹22,50,000 reaches 150% and earns **₹55,000**. The documentation's sample chart is flat beyond its
  top level, so here 150% works as the cap.
- Below 50%, the levels pay nothing.
- The documentation doesn't spell out the maths between levels; its sample chart joins the levels with straight
  lines. Check an in-between figure on the plan before you announce the scheme.

**Plan 2, inside sales (achievement plan):** based on **Achievements**, per salesperson, same period and quarterly
frequency, with one achievement: **Amount Invoiced**, limited to the **Anchor fasteners** category, at 2%. If she
invoices ₹4,00,000 of anchors in a quarter, her commission is **₹8,000**. Her **Targets** tab is still filled in,
because every plan needs both.

At the end of each quarter, the accounts team reads each person's result and enters it as the **Commission Amount**
on warrant payslips, or sends it to the payroll provider.

## Commissions for referrers and resellers

Odoo's quotation documentation describes a **Referrer** field on quotations, for a contact who referred the customer.
Once it's filled in, a **Commission Plan** field appears, and the commission is rewarded to that referrer. The
documentation doesn't explain how that reward is calculated or paid, so test it before promising partners anything.
Commission paid to an Indian agent may also attract TDS; see
[TDS and TCS in Odoo](/blog/2026/10/11/tds-tcs-odoo/).

## What you should see

- A **Commissions** menu in Sales, with your plans under **Commission Plans**.
- On a plan: the **Draft**, **Approved** and **Done** stages at the top, one line per period on **Targets**, and on
  target plans, the levels next to a chart on **Commissions**.
- After approval, results that move as orders are confirmed or invoices are posted, depending on the achievement.

## Troubleshooting

**There's no Commissions option in the Sales settings.**
You're on Community, where the feature doesn't exist.

**You can't edit a plan.**
It's approved. Click **Reset to Draft**, edit it and approve it again.

**A salesperson shows nothing.**
Check the **Salesperson** on their orders and invoices, the plan's **Effective Period**, and any product or category
limit on the achievement. With **Amount Invoiced**, nothing counts until invoices are confirmed.

**MRR isn't in the achievement list.**
The Subscriptions app isn't installed.

**Margin-based commission looks wrong.**
Product costs are out of date. Fix the **Cost** on the products concerned.

**Nobody can earn above the on-target figure.**
There's no level above 100%. Add one on the **Commissions** tab.

**Add Multiple Salespersons is missing.**
Activate developer mode.

## Related setup

- [How to set up the sales workflow in Odoo 19](/blog/2026/09/23/how-to-set-up-sales-workflow-odoo/)
- [From quotation to sales order in Odoo](/blog/2026/08/18/odoo-sales-quotation-to-sales-order/)
- [How to set up subscriptions in Odoo](/blog/2026/09/25/how-to-set-up-subscriptions-odoo/)
- [Odoo Payroll overview](/blog/2026/08/29/odoo-payroll-overview/)
- [A B2B dealer ordering portal in Odoo](/blog/2026/10/14/b2b-dealer-ordering-portal-odoo/)
- Want a commission scheme your sales team trusts from the first payout? See
  [Odoo implementation](/services/odoo-implementation/).

## Official references

- Odoo 19 documentation: [Commissions (Sales)](https://www.odoo.com/documentation/19.0/applications/sales/sales/commissions.html)
- Odoo 19 documentation: [Commissions (Payroll)](https://www.odoo.com/documentation/19.0/applications/hr/payroll/commissions.html)
- Odoo 19 documentation: [Create quotations](https://www.odoo.com/documentation/19.0/applications/sales/sales/sales_quotations/create_quotations.html)

*How this guide was checked: menu paths, field names and Enterprise-only status were checked against the Odoo 19
documentation in October 2026, and against Odoo 19's public source code, which has no Commissions module. Commissions
is Enterprise code, so its behaviour beyond the documentation wasn't checked. The worked example is illustrative and
wasn't run on a live database, so there are no screenshots; labels can vary slightly with your installed apps and
language.*
