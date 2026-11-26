---
layout: post
title: "Odoo 20 Quality Rate: Measure Checks Without Hiding Exceptions"
date: 2026-11-14 07:00:00 +0530
tags: [Odoo, Odoo 20, ERP, Best Practices, Quality, Manufacturing, Reporting, Compliance]
hub: manufacturing
description: "Understand Odoo 20 supplier quality rate, receipt quality control points, passed check percentages and the limits of a vendor score."
last_modified_at: 2026-11-27
faqs:
  - q: "What does Odoo 20 quality rate measure?"
    a: "It measures the percentage of passed quality checks on incoming vendor transfers. It is not automatically a measure of manufacturing yield or units accepted."
  - q: "Which configuration is needed for supplier quality rate?"
    a: "The documentation requires Quality and Purchase, appropriate Quality access and a quality control point with Receipts as its operation."
  - q: "Can a high quality rate close a supplier complaint?"
    a: "No. Review the relevant failed checks, sampling coverage and corrective action evidence separately from the headline percentage."
---

**Short answer:** Odoo 20 quality rate reports the percentage of quality checks passed on incoming vendor transfers. Configure receipt quality control points and inspect the checks behind the percentage. A supplier's high rate does not establish that every delivered unit was inspected, or that a recurring defect has been resolved.

## What is the scope of this metric?

The [quality rate documentation](https://www.odoo.com/documentation/20.0/applications/inventory_and_mrp/quality/quality_management/quality_rate.html) places the feature in supplier receipt quality monitoring. This scope matters because a vendor check rate, production yield and customer complaint rate describe different populations.

In a simple illustrative set of five completed receipt checks, four passes and one failure produce an 80 percent pass rate. That does not mean 80 percent of the physical units passed individual inspection. The checks may cover different receipt sizes or sampling arrangements.

## What configuration makes the report meaningful?

The documented prerequisites include Quality and Purchase, with at least the relevant Quality user access. Configure a quality control point whose operation is Receipts, then complete the checks generated for the selected scope.

The vendor contact provides a quality rate smart button, and supplier links are also available from the control point. A completed check is needed for the button to appear. An empty report is therefore a reason to inspect the setup and recorded checks, rather than assign the supplier a perfect score.

## How should a buyer read the analysis?

The default vendor analysis groups check results by product over the last twelve months. Check the active dates, supplier and product grouping before comparing vendors.

Ask whether the checks cover comparable risks. One supplier may deliver a high volume with a narrow sampling plan, while another has frequent targeted checks following a problem. Without that context, the percentage can reward reduced inspection rather than improved performance.

| Review item | Why it changes interpretation |
| --- | --- |
| Check count | A tiny sample makes a percentage unstable |
| Products covered | A good result for one item does not clear another |
| Inspection scope | Different sampling plans are not directly comparable |
| Failure detail | Repeated defects can matter more than the overall average |

## What would a useful pilot look like?

Prepare receipt cases for a pass, a failure and a receipt outside the control point's scope. Confirm which cases generate checks and which appear in the analysis. Trace each counted result to its receipt and product.

Then change the date filter and confirm that the displayed population changes as expected. Record whether a failed inspection creates a separate follow up in your configured process; do not assume that viewing the rate creates or closes a corrective action.

## How should this inform supplier decisions?

Use the rate to locate patterns and support a supplier discussion. Retain the failed check, defect description, affected receipt and agreed follow up alongside the summary. Purchasing and quality should agree what action a recurring failure triggers.

The [ERP acceptance evidence worksheet](/resources/erp-acceptance-evidence/) can hold the proposed report checks and unresolved inspection questions. For production context, see the [manufacturing flow guide](/blog/2026/11/12/odoo-20-continuous-production/).

*Sources reviewed on 27 November 2026. Scenarios are proposed acceptance cases, not reported customer results. Confirm edition, installed modules and provider requirements for your database.*
