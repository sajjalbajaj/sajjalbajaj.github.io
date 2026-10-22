---
layout: post
title: "Odoo Expiry Dates: Separate Stock Rotation from Customer Shelf Life"
date: 2026-11-07 08:00:00 +0530
tags: [Odoo, Odoo 19, ERP, Best Practices, Inventory, Food and Beverage, Stock Control, Supply Chain]
hub: inventory
description: "Use Odoo lot dates and removal rules with customer shelf life requirements, receiving evidence and authorised exceptions before promising stock."
faqs:
  - q: "Does FEFO guarantee every customer receives enough shelf life?"
    a: "No. Stock rotation and a customer specific minimum remaining life are different requirements. Assess whether the chosen configuration enforces the customer rule."
  - q: "Should a calculated expiry date override the supplier label?"
    a: "No. Review the authoritative product evidence and approved data policy. A default date calculation should not silently replace a verified lot date."
---

**Short answer:** use lot dates to understand the product's recorded lifecycle and removal rules to guide stock rotation, then assess customer shelf life requirements separately. Selecting an earlier lot does not automatically make it suitable for every destination. The delivery decision needs accurate dates, transport assumptions and a clear rule for accepted exceptions.

## Applies to

Odoo 19 Inventory with lots or serial numbers and expiration dates. Product suitability and required shelf life criteria belong to the responsible specialists. The corresponding Odoo 20 references were reviewed in October 2026; use the documentation for your installed release when configuring screens and fields.

## Which dates are being managed?

Odoo documents expiration, best before, removal and alert information for tracked products. These fields represent different operating intentions. The organisation should define how each relates to the product evidence and its approved handling policy rather than treating all four as interchangeable expiry dates.

Defaults can calculate dates when stock enters the system. That is useful only when the calculation matches the product and supply model. Purchased goods may arrive with established manufacturer dates, so receiving staff need a clear process for reviewing the actual lot information.

I would identify the authoritative source and who may correct a date. A product specialist may approve the rule, while warehouse staff capture the label evidence. Changes should remain explainable because later allocation and customer decisions can depend on them.

## What does stock rotation decide?

A configured removal strategy helps determine which stock is selected for an operation. It addresses the order in which eligible stock is considered. It does not independently decide every commercial or product suitability condition that a customer agreement may impose.

Review the relevant locations and product categories rather than assuming one setting governs every route. An internal transfer, a reservation and a manually changed delivery can involve different practical decisions. Demonstrate the intended selection with representative lots and quantities.

Keep physical execution aligned with the selected lot. A correct reservation followed by picking another batch breaks the relationship between the plan and the delivered evidence. Scanning or other controlled identification should confirm what actually leaves the warehouse.

## How is customer shelf life different?

A customer may require a minimum remaining period at delivery, not merely an unexpired product at dispatch. Transport, receiving appointments and the customer's intended use can affect that calculation. Define the event at which the requirement applies.

Decide where the rule is recorded and how it is checked. If standard configuration does not enforce the specific customer condition, identify the manual control or extension required. Do not present FEFO as a complete substitute for that requirement.

Define exception authority. Sales staff should not quietly override a shelf life requirement to clear an urgent order. If the customer accepts a different condition, retain the agreement and ensure the warehouse receives the correct instruction for that particular delivery.

## Worked example: two customers need different remaining life

Imagine a food distributor holding two lots of the same product. A nearby retailer accepts a shorter remaining life, while a regional distributor requires more time because its own onward delivery takes longer. Both lots are within their recorded expiry period.

The team reviews the destination requirements before allocating stock. The earlier lot may fit the nearby retailer but fail the regional customer's condition. The warehouse confirms the actual lot and the delivery evidence preserves that identity.

If an urgent request creates a conflict, the authorised owner reviews alternatives or obtains a documented exception. The outcome is based on the customer condition and product evidence, not on the assumption that the first lot selected by a removal strategy must be appropriate.

## What should receiving and reporting reveal?

Receiving should identify lots with missing, unclear or unexpected dates. A default value that looks plausible can be more dangerous operationally than an obvious blank because users may assume it was checked. Give staff a route to hold the decision pending review.

Reporting should distinguish physically present stock from stock suitable for particular demand. An overall on hand total can overstate what can be promised to a customer with stricter requirements. Keep that limitation visible when using aggregate availability figures.

Review near date stock with a named owner and an approved response. The response may involve allocation, supplier discussion or a disposition decision. A dashboard alert is useful only if somebody acts on it within the operating process.

## When does this approach fit?

It fits food, skincare and other products whose usefulness or acceptance depends on dates and customer conditions. The criteria must come from the responsible product and commercial owners. This is not a universal rule for product safety or regulatory compliance.

It may be unnecessary to introduce customer specific logic when all customers use the same straightforward requirement. Begin with reliable lot data and rotation, then add complexity only where the actual agreements require it.

## Common mistakes

Common mistakes include using receipt date as a substitute for manufacturer evidence, treating removal order as customer approval and allowing manual lot substitutions without review. Another is measuring remaining life at dispatch when the agreement applies at customer receipt.

Review one delivery from supplier label through customer acceptance. The team should explain the dates, chosen lot, destination condition and any exception. That shared explanation makes the date settings useful controls rather than isolated fields that different departments interpret differently.

## Related

Read [Odoo Cold Chain Receiving: Record and Resolve Delivery Exceptions](/blog/2026/11/03/odoo-cold-chain-receiving-exceptions/) for the connected workflow.

## Official references

1. [Expiration dates](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/product_management/product_tracking/expiration_dates.html)
1. [Lot numbers](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/product_management/product_tracking/lots.html)

*How this article was checked: official Odoo 19 documentation and the corresponding Odoo 20 pages were reviewed in October 2026. The examples are illustrative, not client results or tests on a live database.*

For help designing this workflow, see my [Odoo consulting services](/services/odoo-consulting/).
