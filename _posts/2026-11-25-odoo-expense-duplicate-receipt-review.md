---
layout: post
title: "Odoo Expenses: Detect Duplicate Claims Before Reimbursement"
date: 2026-11-25 10:00:00 +0530
last_modified_at: 2026-11-27
tags: [Odoo, Odoo 19, ERP, Best Practices, Accounting, Finance, Business Automation, Compliance]
hub: accounting
description: "Review Odoo 19 expenses for duplicate receipts, company card overlap and prior payment before approving or reimbursing an employee."
faqs:
  - q: "Does the same receipt amount prove an expense is a duplicate?"
    a: "No. Compare employee, merchant, date, currency, payment source and receipt reference. Repeated legitimate purchases can share an amount, while a duplicate can appear with a different filename or currency conversion."
  - q: "Should a company-paid expense reimburse the employee?"
    a: "The Paid By field distinguishes Employee (to reimburse) from Company. Establish who actually paid and whether a reimbursement already occurred before selecting a payment route."
  - q: "Is an approved expense ready for payment through a payslip?"
    a: "Odoo 19 documentation says payslip reimbursement requires an expense to be both Approved and Posted, with the reimbursement option configured. Approval alone is not evidence of payment."
---

**Short answer:** Before approving an Odoo expense, compare the receipt with existing claims, company-card transactions and prior reimbursements. Establish who paid and which single payment route should settle it. Approval, journal posting and payment are different outcomes.

## What should count as a possible duplicate?

An identical merchant and amount is a reason to investigate, not an automatic refusal. A person can buy the same item twice. Conversely, the same purchase can appear as a photograph, emailed receipt and company-card transaction with different descriptions.

I would compare these fields together:

| Evidence | What it helps establish |
|---|---|
| Employee and merchant | Whether the transaction belongs to this claim |
| Purchase date and receipt reference | Whether two copies describe one purchase |
| Original currency and amount | Whether conversion explains a difference |
| Employee or company payment source | Who funded the purchase |
| Existing claim and payment reference | Whether it has already been recorded or settled |

Treat this as a proposed reconciliation process. It is not a claim that standard Odoo automatically matches every one of these sources or prevents all duplicates.

## Where does Odoo record who paid?

The [Odoo 19 expense logging guide](https://www.odoo.com/documentation/19.0/applications/finance/expenses/log_expenses.html) describes **Paid By**, with **Employee (to reimburse)** and **Company** options. The field's availability can depend on the selected expense category.

If a company card paid the purchase, the employee's receipt can support the business record without creating a personal reimbursement entitlement. Compare the actual payment source before deciding which option describes the transaction.

## How should an approver investigate a suspicious claim?

Odoo's [expense processing documentation](https://www.odoo.com/documentation/19.0/applications/finance/expenses/approve_expenses.html) describes review by authorised users and approval or refusal. I recommend checking the suspicious claim individually before using bulk approval.

1. Find the matching receipt, claim or card transaction.
2. Ask whether the employee paid personally, used company funds, or has already been repaid.
3. Retain the linked record references and the explanation for any amount difference.
4. Approve the supported claim, request missing evidence, or refuse the duplicate with a reason.
5. Recheck the selected reimbursement route before payment.

A receipt image can show what was bought without proving who ultimately funded it.

## What happens after approval?

The [reimbursement reference](https://www.odoo.com/documentation/19.0/applications/finance/expenses/reimburse.html) separates journal posting from repayment. It says payslip reimbursement requires **Approved** and **Posted** expenses with the relevant option enabled. Available payment choices depend on configuration and localisation.

Track one intended settlement route. If an expense was marked for the next payslip and is paid another way, the documentation describes removing it from the payslip before that payslip is processed. Review the actual records rather than assuming an approval or a button click proves the employee received funds.

## What does an illustrative duplicate review look like?

An employee uploads a hotel receipt for 4,800 in the original currency. The same stay appears in the company-card statement. The approver checks the booking and payment evidence, confirms the company funded the purchase and prevents it entering a personal reimbursement batch.

In a different case, two 4,800 receipts relate to separate stays with different dates and references. Both may be legitimate. The distinction comes from the underlying transaction, not the amount alone. These examples are illustrative, not client results.

## What should be tested before release?

Demonstrate an employee-paid purchase, a company-paid purchase, the same receipt submitted twice and a claim selected for payroll but paid through another route. The expected result is a traceable decision and one appropriate settlement, not simply a clean approval dashboard.

Use the [acceptance evidence worksheet](/resources/erp-acceptance-evidence/) to retain the references. For configuration, read [expense management setup](/blog/2026/09/26/how-to-set-up-expense-management-odoo/).

## Sources and review

Official Odoo 19 references: [log expenses](https://www.odoo.com/documentation/19.0/applications/finance/expenses/log_expenses.html), [process expenses](https://www.odoo.com/documentation/19.0/applications/finance/expenses/approve_expenses.html) and [reimburse employees](https://www.odoo.com/documentation/19.0/applications/finance/expenses/reimburse.html), checked on 27 November 2026. The duplicate-review method is my recommendation; it has not been represented as an automated product guarantee.

For help mapping expense and payment controls, see my [Odoo consulting services](/services/odoo-consulting/).
