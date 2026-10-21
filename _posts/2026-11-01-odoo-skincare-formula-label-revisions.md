---
layout: post
title: "Odoo Skincare Production: Control Formula and Label Revisions"
date: 2026-11-01 09:00:00 +0530
tags: [Odoo, Odoo 19, Manufacturing, PLM, Quality, Skincare, ERP, Best Practices]
hub: manufacturing
description: "Manage skincare formula and label changes with Odoo revision records, approvals, effective dates and production evidence without losing batch context."
faqs:
  - q: "Does an engineering change automatically approve a cosmetic formula?"
    a: "No. PLM records changes and configured approvals. Product safety, claims and regulatory review remain specialist responsibilities outside a generic ERP approval."
  - q: "Does changing a bill of materials update every label and existing order?"
    a: "Do not assume so. Label assets, packaging stock, open manufacturing orders and integrations need an explicit impact review and verified transition process."
---

**Short answer:** control a skincare change as a coordinated revision of the formula, production instructions, packaging and label evidence. Odoo PLM can track engineering changes to products and bills of materials, but the business must define the approval and transition rules. A revised ingredient list does not automatically make every related label or open production order correct.

## Applies to

Odoo 19 Manufacturing with Enterprise PLM and optional Quality. Formula suitability and label compliance require the appropriate specialist review. The corresponding Odoo 20 documentation was checked in October 2026. This article targets Odoo 19; confirm your installed version before following any screen labels.

## What exactly is changing?

Identify whether the change affects ingredients, quantities, process instructions, packaging or customer facing claims. These may be linked, but they are separate objects with different reviewers. Give the change a clear reference so that each affected item can be connected to the same decision.

I would record the reason and the expected scope. A supplier substitution may require different review from a packaging artwork correction. Avoid describing every change as a minor update before the responsible product and quality specialists have assessed its consequences.

List affected products and variants carefully. Similar names or shared packaging do not prove that the same revision applies everywhere. Record which items are included and which are excluded, together with the evidence supporting that boundary.

## How can PLM support the revision?

Odoo engineering change orders can track proposed product or bill of materials changes and their revision history. The documented process distinguishes the proposed revision from the production version and provides an apply step after the required approvals.

Use that separation to keep investigation and approved production distinct. Define who prepares the change, who reviews it and who can apply it. A technical administrator's ability to edit a record should not be treated as product approval authority.

The effective setting and revision history help explain when a change is intended to become active. Confirm the actual effect on the chosen workflow, including existing manufacturing orders. Do not assume that applying a new bill of materials rewrites every order already in progress.

## What happens to labels and packaging stock?

Maintain an identifiable approved artwork or label reference and connect it to the relevant product revision through the agreed document process. PLM support for a bill of materials does not by itself establish a complete label management system.

Decide how existing printed packaging will be handled. It may need review, controlled consumption, segregation or another authorised disposition. The answer depends on the change and specialist requirements; it should not be invented by warehouse staff when they find mixed stock.

Review external touchpoints such as product listings, customer specifications and label printers. A production change can be correctly recorded in Odoo while an external template continues to print old information. Assign an owner to each affected output and retain evidence of the accepted version.

## Worked example: changing a cream's packaging component

Imagine a skincare manufacturer replacing a packaging component while retaining the same finished product range. The review identifies a related instruction and artwork change. The team creates a change record and lists the bill of materials, packing instructions and label asset as affected items.

Quality and product owners review the proposed material and text. Operations checks open manufacturing orders and existing packaging stock. The approved transition identifies which orders use the existing version and which use the new one, with exceptions recorded rather than decided informally on the shop floor.

During a rehearsal, the team produces the intended document set and checks that the label reference matches the selected production version. The exercise demonstrates coordination of records. It does not claim that the ERP has evaluated the product's safety or the legal acceptability of the label.

## How should batch evidence be retained?

Record the material lots and production information needed to explain what was actually made. An approved formula describes an intended process; consumption and production records describe execution. Keep those roles distinguishable when reviewing a finished batch.

Quality checks can collect configured evidence at relevant operations. Select the check type according to the question: an instruction acknowledgement, measurement or image answers different needs. Define who reviews failures and how the affected product is held pending a decision.

Keep historical revisions understandable. Overwriting an old attachment with a new file under the same name can make past production difficult to explain. Use a document convention that preserves the accepted version and makes the current approved material easy to identify.

## When does this approach fit?

A coordinated change process fits manufacturers with recurring formula, packaging or instruction revisions. The depth should reflect the operational and product consequences. A simple correction may need a smaller review than a change affecting several product variants and external documents.

The Odoo 20 PLM documentation expands change creation guidance, including Shop Floor related paths. The Odoo 19 process described here should not be presented as a complete guide to those later workflows. Use the installed version's documented process when configuring responsibilities.

Common mistakes include approving the formula while ignoring label outputs, mixing old and new packaging without a decision and assuming existing orders automatically adopt the new revision. Another is treating an ERP approval as a substitute for specialist review.

Close the change only when the affected records, outputs and operating instructions match the accepted transition. Keep the approval evidence and unresolved exceptions together. That makes the revision useful both for current production and for later questions about which materials and instructions belonged to a particular batch.

## Related

For the broader workflow, read [skincare and cosmetics manufacturing in Odoo](/blog/2026/10/24/skincare-cosmetics-odoo/).

## Official references

1. [Engineering change orders](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/plm/manage_changes/engineering_change_orders.html)
1. [Quality control points](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/quality/quality_management/quality_control_points.html)
1. [Lot traceability](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/product_management/product_tracking/lots.html)

*How this article was checked: the official Odoo 19 references and their Odoo 20 counterparts were reviewed in October 2026. Examples are illustrative planning exercises, not client results or tests on a live database.*

For help applying this to your business, see my [Odoo consulting services](/services/odoo-consulting/).
