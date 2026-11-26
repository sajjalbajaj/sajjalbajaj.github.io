---
layout: post
title: "Odoo 20 Spreadsheet Analysis: New Charts, Filters and Controls"
date: 2026-11-29 07:00:00 +0530
tags: [Odoo, Odoo 20, ERP, Best Practices, Spreadsheet, Reporting, Analytics, Business Automation]
hub: services
description: "Use Odoo 20 spreadsheet filters, calculated columns and sheet locks while checking source mappings, formula recalculation and report scope."
faqs:
  - q: "Do global filters only hide visible spreadsheet rows?"
    a: "No. The documentation says they act on underlying Odoo data sources. Field matching determines which source fields receive each filter."
  - q: "Does locking a sheet replace access control?"
    a: "No. It helps prevent modifications, but data visibility and who may access or edit the spreadsheet still require review."
  - q: "Does pressing F9 refresh every source record?"
    a: "The release notes describe F9 for manual formula recalculation when automatic recalculation is disabled. Do not equate that with independently verifying source freshness."
---

**Short answer:** Odoo 20 adds spreadsheet analysis features including calculated columns, named ranges, sheet locks and expanded chart options. The most useful control is still a report that can be explained: identify its sources, map filters correctly, verify calculations and preserve the scope used for each published conclusion.

## Which new features deserve an implementation decision?

The [Spreadsheet release notes](https://www.odoo.com/odoo-20-release-notes) identify calculated columns in dynamic lists, sheet locking and manual formula recalculation. These can improve a reporting workflow, but they solve different problems.

A calculated column expresses logic. A sheet lock reduces accidental editing. Manual recalculation changes when formulas are recomputed. None alone establishes that the source data is complete or that the calculation answers the intended business question.

## How do global filters affect the data?

The [global filter documentation](https://www.odoo.com/documentation/20.0/applications/productivity/spreadsheet/work_with_data/global_filters.html) explains that filters act on underlying Odoo data sources, rather than only hiding displayed rows.

Field matching matters when one workbook combines several sources. A date filter mapped to order date in one source and invoice date in another can create a plausible but misleading comparison.

Document the intended meaning of each filter. Do not label a result simply as monthly sales if one chart uses orders and another uses posted invoices without making that distinction visible.

## How would a finance dashboard be reviewed?

Consider an illustrative workbook with a revenue pivot and an invoice detail list. Finance wants both to show the same company and accounting period.

First inspect the source domains and field matching. Then select a small known set of invoices and reconcile the displayed total to that set. Change the period and confirm both sources respond correctly.

| Proposed check | Evidence to retain |
| --- | --- |
| Company filter | Consistent company scope across sources |
| Date filter | Correct date field and boundary records |
| Calculated column | Formula and independently checked examples |
| Locked calculation sheet | Intended editing restriction |
| Exported report | Visible scope, units and reporting date |

## What changes when automatic recalculation is disabled?

The release notes describe disabling automatic formula recalculation and using F9 to recalculate manually. This can be useful, but the operating procedure must make the calculation state clear.

Do not assume a displayed formula result has updated just because an underlying record changed. Also distinguish formula recalculation from the separate question of whether the source data is current. Verify both before distributing a report.

## How should charts and permissions be assessed?

Choose a chart that fits the question, and label its units and period. An attractive bubble or calendar chart can still conceal an unsuitable denominator or missing population.

Review access to the workbook and source records using the intended user role. A locked sheet is not a substitute for controlling who may see the data.

The [spreadsheet overview](/blog/2026/09/07/odoo-spreadsheet/) covers the wider application. Use the [ERP acceptance evidence worksheet](/resources/erp-acceptance-evidence/) for the proposed filter and calculation checks.

*Sources reviewed on 27 November 2026. Scenarios are proposed acceptance cases, not reported customer results. Confirm edition, installed modules and provider requirements for your database.*
