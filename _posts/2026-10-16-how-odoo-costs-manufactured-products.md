---
layout: post
title: "Odoo Manufacturing Costs: Components, Operations and Real Cost"
seo_title: "Odoo 20 Manufacturing Costs: MO Cost vs Real Cost"
date: 2026-10-16 09:00:00 +0530
tags: [Odoo, Odoo 20, Odoo 19, Manufacturing, MRP, Accounting, Finance, Inventory Management]
hub: manufacturing
description: "Compare Odoo 20 MO Cost and Real Cost using a worked calculation. Download a blank worksheet to trace component quantities, time and cost differences."
last_modified_at: 2026-11-27
faqs:
  - q: "Why do MO Cost and Real Cost match after completion?"
    a: "Odoo's manufacturing-cost documentation says the MO Cost column updates to the Real Cost when the order is completed. Preserve the original estimate beforehand if you need a variance baseline."
  - q: "Is Compute Price from BoM a correction for every cost difference?"
    a: "No. It recalculates expected product cost from the BoM in the documented workflow. It does not explain incorrect consumption, operation time or financial valuation."
  - q: "Do manufacturing costs automatically create and reverse WIP entries?"
    a: "No. The reviewed WIP documentation describes manually posting entries for incurred costs, with reversal arrangements that must also be checked. An open manufacturing order is not itself a posted WIP journal."
---

**Short answer:** Odoo 20 manufacturing costs combine components and operations, with work centre and employee costs where configured. Explain a difference by comparing quantities, values, time and rates against a recorded baseline. Keep that production-cost explanation separate from the inventory valuation method and the accounting entries.

[Download the blank manufacturing cost review worksheet](/assets/downloads/manufacturing-cost-review.csv) to build a traceable explanation instead of changing a product cost merely to make two totals agree.

## What do MO Cost and Real Cost mean?

The [Odoo 20 manufacturing-cost reference](https://www.odoo.com/documentation/20.0/applications/inventory_and_mrp/manufacturing/basic_setup/mo_costs.html) describes **MO Cost** as the expected cost from the BoM and **Real Cost** as the cost of recorded production. Different consumption, component values, operation durations or employee rates can create a difference.

Open **Manufacturing ‣ Operations ‣ Manufacturing Orders**, select the order and use **Overview**. Inspect the component and operation lines before interpreting the total.

The same broad distinction appears in the reviewed 19.0 reference. This guide follows the 20.0 documentation; it does not claim that every cost field was first introduced in version 20.

## Why must the original estimate be retained?

Odoo documents that, after completion with **Produce**, the MO Cost column updates to match Real Cost. Matching columns on the completed order therefore do not establish that the original plan was accurate.

If the business needs a plan-versus-outcome review, record the estimate, date, BoM reference and intended output before completion. Retain the relevant source report or approved snapshot. That is a recommended review method, rather than a claim that the screen preserves an unchanged original estimate.

Also keep the quantity basis. Comparing the planned cost of one table with the total cost of ten makes an apparent variance that is entirely a denominator error.

## Which inputs should be checked first?

| Input | Where to investigate | Why it can explain the difference |
| --- | --- | --- |
| Component quantity | BoM requirement and recorded consumption | Extra use, substitution, scrap or incorrect entry |
| Component value | Product cost and relevant valuation records | Changed values or an inappropriate comparison basis |
| Operation duration | Expected duration and recorded work | Additional work or missing time |
| Work centre rate | Work centre cost configuration | Zero, stale or incorrectly defined rates |
| Employee rate | Configured employee cost where applicable | Actual worker rate differs from the estimate |
| Output quantity | Completed good output, scrap and by-products | Unit cost cannot be compared on different output bases |

Check the installed applications and permissions for detailed employee and accounting functionality. Do not assume all cost fields are present simply because an overview is visible.

## How do work centre and employee costs differ?

Under **Manufacturing ‣ Configuration ‣ Work Centers**, the cost documentation describes hourly values for the work centre and for an employee estimate.

The **per employee** work centre value supports the expected MO cost. The documented real employee cost uses the relevant employee's **Hourly Cost** instead. Therefore, an order can show a labour difference even when actual hours match expected hours.

The [BoM reference](https://www.odoo.com/documentation/20.0/applications/inventory_and_mrp/manufacturing/basic_setup/bill_configuration.html) also distinguishes **Cost based on** from **Duration Computation**. Review whether an operation uses actual or theoretical cost, and whether its estimate is fixed or computed from previous work.

Those are separate settings. Do not describe every figure labelled real as an independent measurement without inspecting how time and cost were configured.

## What does an auditable cost bridge look like?

The following is an illustrative calculation, not a customer result or market-price quotation. It assumes ten good tables, one currency, the shown component values and operation rates, no separate employee-cost line, and no by-product allocation.

| Cost line for ten tables | Planned basis | Planned cost | Recorded basis | Recorded cost |
| --- | --- | ---: | --- | ---: |
| Panels | 10 at ₹6,000 | ₹60,000 | 10 at ₹6,000 | ₹60,000 |
| Legs | 40 at ₹500 | ₹20,000 | 41 at ₹500 | ₹20,500 |
| Hardware kits | 10 at ₹300 | ₹3,000 | 10 at ₹300 | ₹3,000 |
| Assembly | 15 hours at ₹600 | ₹9,000 | 17 hours at ₹600 | ₹10,200 |
| Polishing | 10 hours at ₹800 | ₹8,000 | 10 hours at ₹800 | ₹8,000 |
| **Total** | | **₹100,000** | | **₹101,700** |

The bridge is:

* Extra leg: **₹500**.
* Two additional assembly hours: **₹1,200**.
* Explained difference: **₹1,700**, agreeing with ₹101,700 minus ₹100,000.
* At the same ten-good-table output, the illustrative unit costs are **₹10,000 planned** and **₹10,170 recorded**.

If a line cannot be supported by a component move, work record or approved rate, leave that part unexplained and assign an owner. Do not invent an overhead entry to force agreement.

If output, currency, subcontracting or by-product treatment differs, revise the comparison basis first. This simple example is not a universal inventory-valuation formula.

## Why can the production cost differ from inventory value?

Production costing asks what the order consumed and incurred. Financial valuation also depends on the configured costing method, valuation method, category overrides and posting process.

The [Odoo 20 inventory valuation guide](https://www.odoo.com/documentation/20.0/applications/finance/accounting/get_started/inventory_valuation.html) documents company-level defaults under **Accounting ‣ Configuration ‣ Settings**, including inventory cost and valuation methods, with product-category overrides.

**Standard Price**, **FIFO** and **Average Cost** are different valuation bases. Do not expect changing an estimate on the BoM to make every stock or ledger figure equal to the MO total. Ask finance to reconcile the applicable valuation records and journal entries.

The same reference distinguishes operational stock valuation from accounting updates and closing. A correct quantity or MO overview is not, by itself, a reconciled balance sheet.

## What does Compute Price from BoM change?

The documented product-form action resets expected cost from components and operations on the BoM. It is useful for reviewing the planned cost basis, but it is not a substitute for investigating actual consumption or time.

Check component and sub-assembly values before recalculating a parent. Record the original value and reason for any authorised change.

The manufacturing-cost reference's averaging example should not be treated as a universal replacement for the separate valuation-method documentation. Verify the actual method and category settings before predicting how a future order affects product or stock value.

## How should by-products and WIP be reviewed?

The BoM documentation supports a **Cost Share** for by-products, with a total no greater than 100 percent. Check the intended output quantities and allocation before comparing the main product's cost with a calculation that assumes all cost belongs to it.

For unfinished work, the [Odoo 20 WIP reference](https://www.odoo.com/documentation/20.0/applications/inventory_and_mrp/manufacturing/basic_setup/work_in_progress.html) describes manually posting incurred costs through **Post WIP Accounting Entry**. Verify the journal, date, accounts and reversal arrangement with finance.

WIP entries reflect the costs at posting. They are not automatically tied to every subsequent change in manufacturing progress. Check the period-end balance and reversal rather than assuming the order state manages the entire accounting outcome.

## How should the review worksheet be completed?

Use one row per component or operation. Record the currency, unit, baseline date, planned quantity or hours, rate and amount, followed by the corresponding recorded figures and evidence.

Compute each line's difference as recorded amount minus planned amount. Sum the differences and compare that total with the order-level difference. Keep planned and actual output quantities so unit-cost calculations can be checked.

The download is blank, with no formulas or client records. It supports an explanation and review decision; it does not post accounting entries or select the correct costing policy.

For the input blueprint, see [BoM setup](/blog/2026/09/24/how-to-set-up-bill-of-materials-odoo/). Use the [ERP acceptance evidence method](/resources/erp-acceptance-evidence/) to distinguish proposed checks from observed results.

## Sources and review

Reviewed on 27 November 2026: the linked 20.0 manufacturing cost, BoM, valuation and WIP references, plus the [19.0 manufacturing-cost page](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/manufacturing/basic_setup/mo_costs.html) for version context. No live database, valuation or accounting test is claimed.

For help defining a production-cost review that finance and operations can both explain, see [Odoo implementation](/services/odoo-implementation/).
