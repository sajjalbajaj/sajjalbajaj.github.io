---
layout: post
title: "Odoo Food Traceability: Run a Practical Recall Drill"
date: 2026-11-01 08:00:00 +0530
tags: [Odoo, Odoo 19, Inventory, Food and Beverage, Stock Control, Quality, ERP, Best Practices]
hub: inventory
description: "Plan a food traceability drill in Odoo using lot records, stock movements, customer deliveries and reconciled quantities to expose gaps before an incident."
faqs:
  - q: "Does lot tracking automatically complete a recall?"
    a: "No. It supports tracing recorded movements. Scope decisions, stock isolation, customer communication and regulatory obligations need a separate approved process."
  - q: "Should a mock recall send real customer messages?"
    a: "Only if the exercise explicitly includes authorised external communication. Normally keep rehearsal messages isolated and clearly identify the exercise."
---

**Short answer:** a food traceability drill should show where a selected lot came from, where it went and how much remains in each relevant state. Odoo's lot records and stock movements can support that investigation. The exercise also needs people responsible for scope, isolation, communication and reconciliation; a traceability report alone does not complete those decisions.

## Applies to

Odoo 19 Inventory lot tracking and optional Enterprise Quality workflows. This is an operational exercise, not food safety or regulatory advice. The corresponding Odoo 20 documentation was checked in October 2026. This article targets Odoo 19; confirm your installed version before following any screen labels.

## Which lot should the exercise use?

Choose a lot with a meaningful history, such as receipts, internal transfers, partial deliveries and a return. A lot that has never moved is easy to locate but reveals little about the operating process. Keep the exercise clearly identified so that staff do not mistake it for a confirmed safety incident.

I would define the question before opening reports. Is the team tracing a supplier ingredient into finished goods, locating a purchased product or identifying customers who received a particular batch? Those questions can require different records and different scope decisions.

Assign an exercise owner and identify who can interpret product and supplier information. A technical user can retrieve movements, but the responsible product or quality specialist determines which related materials or products belong in the investigation. Do not infer that scope solely from a similar product name.

## What records should the team follow?

Start with the product and lot identity, then follow recorded receipts, transfers, consumption and deliveries as applicable. Confirm that supplier references and internal identifiers can be related. A duplicated or inconsistently entered lot reference can divide the evidence across records.

For manufacturing, examine the recorded relationship between consumed materials and produced batches. For distribution, focus on incoming quantities, storage locations and customer deliveries. Include stock at external locations or in transit where the business model requires it.

Check attachments and supporting documents as well as quantities. Receiving records, supplier information and customer delivery evidence may explain a difference that the movement list alone cannot resolve. The drill should expose missing evidence while there is time to improve collection practices.

## How should quantities be reconciled?

Build a simple quantity bridge using the same unit of measure. Explain how the quantity received or produced relates to current stock, dispatched stock, returns, consumption and recorded losses. Avoid adding states that overlap, such as counting a returned item both as delivered and as current stock without showing the reversal.

Investigate differences rather than forcing the bridge to balance. A discrepancy may indicate an unrecorded movement, inconsistent unit conversion or an incorrectly assigned lot. Record the cause and the correction needed. A neat spreadsheet is not evidence if its balancing entry has no explanation.

Distinguish physical location from availability. Stock can remain physically present while being held for investigation. The approved isolation process must prevent unintended use or dispatch in the actual configuration; a note or tag should not be assumed to enforce that restriction.

## Worked example: a distributed food batch

Imagine a distributor selecting one batch for a mock recall. Some stock remains in the main warehouse, some moved to a local depot and several deliveries went to business customers. One customer returned an unopened case that was placed in a review area.

The team follows the lot movements and creates a customer delivery list. It then reconciles the remaining quantity, the depot stock and the returned case. A mismatch leads to a receipt entered using cases while the review worksheet assumed individual units.

After correcting the exercise's conversion logic, the team checks whether every intended customer contact can be identified. It prepares an internal communication draft without sending it. The useful result is a list of evidence gaps and process corrections, not a claim that the software has certified the recall procedure.

## Where do quality checks help?

Quality control points can request checks for selected operations and products. Measurement, pass or fail and photographic evidence can support receiving or production controls when appropriately configured. They do not replace the specialist decision about product suitability or incident scope.

Define the response to a failed or missing check. Identify where stock goes, who reviews it and how a release decision is recorded. Verify the actual operational behaviour rather than assuming a failed check automatically blocks every later route.

The Odoo 20 documentation changes some Quality configuration labels and product selection details. This article uses Odoo 19 as its baseline. Review the corresponding settings on the installed version before turning the exercise into a configuration procedure.

## Common mistakes and the drill report

Common mistakes include tracing only current stock, omitting returned goods and treating customer invoices as a complete substitute for delivery records. Another is using an exercise with no operational exceptions and concluding that all traceability is reliable.

The report should identify the selected lot, scope, records used, quantity bridge, missing information and responsible owners. Record how long the steps took if the business needs that measure, but do not turn one rehearsal into a general performance claim.

Repeat the relevant part after corrections. The exercise is useful when it improves the team's ability to explain product movements and act through an approved process. Keep statutory reporting, product disposition and external communication decisions with the people responsible for them.

## Related

For the wider operating model, see [food supply distribution in Odoo](/blog/2026/10/25/food-supplies-distribution-odoo/).

## Official references

1. [Lot tracking and traceability](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/product_management/product_tracking/lots.html)
1. [Quality control points](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/quality/quality_management/quality_control_points.html)

*How this article was checked: the official Odoo 19 references and their Odoo 20 counterparts were reviewed in October 2026. Examples are illustrative planning exercises, not client results or tests on a live database.*

For help applying this to your business, see my [Odoo consulting services](/services/odoo-consulting/).
