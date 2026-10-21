---
layout: post
title: "Odoo Cold Chain Receiving: Record and Resolve Delivery Exceptions"
date: 2026-11-03 10:00:00 +0530
tags: [Odoo, Odoo 19, Inventory, Quality, Food and Beverage, Stock Control, ERP, Best Practices]
hub: inventory
description: "Plan cold chain receiving in Odoo with lot identity, inspection evidence, exception ownership and verified stock holds before goods are released."
faqs:
  - q: "Does a recorded temperature prove a delivery is acceptable?"
    a: "No. Suitability depends on the approved product criteria and specialist assessment. A measurement is evidence for that decision, not the decision itself."
  - q: "Does a failed Odoo quality check block every stock movement?"
    a: "Do not assume universal blocking. Confirm the configured operation, locations and permissions, and demonstrate the intended hold and release behaviour."
---

**Short answer:** cold chain receiving needs a clear relationship between the delivery, product lot, inspection evidence and the decision to hold or release goods. Odoo Quality can request configured checks, while Inventory records movements and traceability. The business must define acceptable criteria and prove that an unresolved exception cannot quietly enter the normal fulfilment process.

## Applies to

Odoo 19 Inventory with Enterprise Quality for configured checks. Product thresholds and disposition decisions must come from the responsible quality specialists. The corresponding Odoo 20 documentation was checked in October 2026. This article targets Odoo 19; confirm your installed version before following any screen labels.

## What should receiving identify first?

Match the delivery to the expected supplier, products and quantities. Capture lot information according to the tracking design and preserve the supplier references needed for later investigation. A measurement without an identifiable delivery and lot is difficult to use when a question arises afterwards.

I would also record the context required by the approved receiving procedure. That may include packaging condition, relevant transport evidence and the responsible receiving employee. Keep the procedure specific enough that staff know what to capture without improvising a new checklist for every delivery.

Separate quantity acceptance from quality disposition. Goods can be physically received while their suitability remains under review. The stock design should explain that intermediate state so that staff do not equate a completed unloading activity with permission to sell or consume the goods.

## How can quality control points help?

Odoo Quality control points can request checks for configured products and operations. The documentation describes several check types, including pass or fail, measurement and photographs. Choose the type according to the evidence needed rather than using an instruction acknowledgement for every question.

Measurement checks can compare an entered value with a configured norm and tolerance. The product specialist must provide the correct criteria and measurement procedure. This article intentionally supplies no universal temperature threshold because different products and operating requirements need different decisions.

Review the check frequency. A sampled or periodic configuration answers a different question from a check required for every relevant operation. Confirm that the chosen setting matches the approved receiving policy and does not leave an unnoticed gap in the intended coverage.

## What should happen when evidence is missing or unacceptable?

Define who receives the exception and what happens to the goods while it is assessed. Missing evidence can require review even when no recorded value is outside tolerance. Staff need a route for incomplete supplier information or an unavailable measuring device.

Use the configured failure instructions to explain the next action, then verify the stock controls separately. A warning message, quality alert or note should not be assumed to prevent all reservations or movements. Demonstrate the intended hold using the relevant user roles and routes.

Preserve the original observation. If a later measurement or review changes the decision, record that new evidence and the authorised conclusion. Replacing an inconvenient value with a new one without context makes the delivery history harder to explain.

## Worked example: a chilled delivery needs review

Imagine a food distributor receiving a chilled delivery with a damaged transport indicator and incomplete supporting information. The receiving employee identifies the product lots, records the observation and places the goods into the approved hold process.

The quality owner reviews the available evidence and requests the missing information from the supplier. Warehouse staff can identify the goods but cannot treat them as ordinary available stock through the agreed operating procedure. Customer orders remain separate from the unresolved disposition decision.

After review, the authorised owner records the outcome and any quantity split. The team processes the approved release, supplier return or other disposition through the appropriate records. The example demonstrates ownership and evidence flow without asserting that a particular delivery would be safe or legally acceptable.

## How should instruments and integrations be treated?

A sensor or measuring device needs an approved method, suitable maintenance and an identifiable relationship to the observation. The responsible specialists determine the required calibration and use procedures. An ERP field does not establish that a measurement was taken correctly.

If readings arrive through an integration, review timestamps, units, product references and failure handling. A missing reading should not silently become a passing result. Repeated transmissions should not create confusing duplicate evidence that different staff interpret as separate inspections.

Confirm which behaviour is standard and which requires an extension. The existence of a device field in Quality documentation does not prove compatibility with every sensor or logging platform. Ask for evidence using the actual proposed device and supported connection.

## When is the receiving process ready?

This approach fits operations where receiving conditions influence the decision to release goods. The level of detail should follow the product and quality requirements, with specialist ownership of criteria. Routine office supply receiving may not need the same controls.

The Odoo 20 Quality documentation changes parts of the product selection configuration. This article uses Odoo 19 behaviour as its baseline. Check the installed version when translating the operating procedure into control point settings.

Common mistakes include recording a value without its lot context, using sampling when the policy expects every delivery and assuming a failed check enforces a universal stock hold. Another is allowing urgency from customer orders to bypass the authorised disposition decision.

Before release, rehearse an acceptable delivery, an out of criteria observation, missing evidence and a partial release. Follow each case through stock availability and the final decision record. The process is ready when staff can explain where the goods are, why they are held or released and which authorised evidence supports that outcome.

## Related

Follow the evidence through distribution with [the food traceability drill](/blog/2026/11/01/odoo-food-recall-traceability-drill/).

## Official references

1. [Quality control points and measurement checks](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/quality/quality_management/quality_control_points.html)
1. [Lot records and traceability](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/product_management/product_tracking/lots.html)

*How this article was checked: the official Odoo 19 references and their Odoo 20 counterparts were reviewed in October 2026. Examples are illustrative planning exercises, not client results or tests on a live database.*

For help applying this to your business, see my [Odoo consulting services](/services/odoo-consulting/).
