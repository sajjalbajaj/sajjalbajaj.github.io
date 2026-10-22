---
layout: post
title: "Odoo Putaway Capacity: Plan for Full and Unsuitable Locations"
date: 2026-11-08 08:00:00 +0530
tags: [Odoo, Odoo 19, ERP, Best Practices, Inventory, Warehouse Management, Stock Control, Logistics]
hub: inventory
description: "Use Odoo storage categories and putaway rules with accurate capacities and a clear overflow process when recommended locations cannot accept goods."
faqs:
  - q: "Will Odoo automatically split every oversized receipt across locations?"
    a: "No. The reviewed storage category documentation explicitly says quantities are not automatically split across multiple locations in that situation."
  - q: "Does assigning a cold storage category verify temperature?"
    a: "No. A category describes the configured location criteria. Physical suitability, monitoring and authorised release need their own operating controls."
---

**Short answer:** putaway recommendations are useful when location capacities and product information reflect the warehouse, but staff still need an authorised response to overflow or unsuitable space. Odoo storage categories support location selection. They should not be treated as a guarantee that every incoming quantity will be automatically divided into a physically workable storage plan.

## Applies to

Odoo 19 Inventory with storage locations, routes and storage categories. Package capacity also requires the relevant package configuration. The corresponding Odoo 20 references were reviewed in October 2026; use the documentation for your installed release when configuring screens and fields.

## What does a storage category represent?

A storage category defines characteristics and capacity conditions used with putaway rules. The documented configuration can consider weight, products and package types. The business must decide which measures accurately represent the way the location is used.

A pallet position, a shelf holding individual units and a mixed storage bay need different assumptions. Record the basis of the limit and identify who maintains it. A capacity figure copied from a building plan can become misleading after equipment or packaging changes.

I would distinguish physical suitability from the category label. Assigning a location to a temperature related category does not measure its current condition. The responsible operations team still needs evidence that the area is appropriate for the product being placed there.

## Which master data affects the recommendation?

Product weights, package types, location structure and the applicable putaway rule all influence the design. Inaccurate or missing values can undermine a capacity calculation. Review a representative incoming unit as staff actually handle it, including its container.

Odoo's documentation describes parent and child location relationships for storage categories and putaway. Make the structure understandable to warehouse users. A technically valid hierarchy is not enough if staff cannot identify the recommended physical position.

Decide how mixed products are handled. A location reserved for one product behaves differently from an area allowed to contain several products. Keep that policy aligned with identification, access and handling requirements instead of selecting the broadest option for convenience.

## What happens when the receipt is too large?

The reviewed Odoo documentation explicitly warns that quantities are not automatically split across several locations when the recommended location exceeds capacity. This is an important boundary for receiving procedures. Do not promise automatic warehouse balancing from the storage category setting alone.

Define an overflow process with authorised alternate locations or a reviewed split of the movement. Staff need to know who can change the recommendation and how the resulting records reflect the physical placement. An informal pile beside the suggested bay should not become invisible stock.

Consider arrival patterns. Several receipts processed close together can create practical congestion even when an individual movement appears manageable. The receiving team needs visibility of what is already staged and what still requires putaway.

## Worked example: several pallets arrive together

Imagine a distributor receiving several pallets of a product. The preferred location has room for only part of the arrival. The system recommends a location according to the configured rule, but the warehouse must review the complete incoming quantity against the actual space.

The supervisor uses the approved overflow process and divides the physical placement into identifiable movements. Staff confirm the resulting locations and package identities. The next picker can find the stock without knowing the informal conversation that occurred at receiving.

Afterwards, the team reviews whether the capacity data was wrong or whether the arrival simply exceeded the normal pattern. Those findings lead to different improvements. It does not assume that the system failed merely because a human decision was required outside the documented automation boundary.

## How should exceptions be recorded?

Record the reason for overriding a recommendation when it matters to future handling. Full space, damaged racking, access restrictions and product incompatibility are different causes. Clear reasons help identify whether the remedy belongs in master data, maintenance or receiving planning.

Keep temporary storage identifiable and review it. An overflow location can become permanent by habit while the system still presents it as an exceptional holding area. Assign responsibility for moving goods onward or approving a lasting change in the storage plan.

Review downstream picking and replenishment. An acceptable receiving location may create inefficient or unsafe access later. The putaway decision should consider the complete movement cycle rather than optimising only the moment goods leave the receiving dock.

## When does category based putaway fit?

It fits warehouses with repeatable storage patterns and maintained capacity data. It can make recommendations more consistent and reduce unnecessary choice during routine receiving. It needs a practical exception process for arrivals that do not fit the normal assumptions.

It may be excessive for a small warehouse with simple, stable locations. Conversely, highly dynamic space optimisation may require a more specialised design than standard categories provide. Evaluate the actual requirement before describing the configuration as a complete warehouse optimisation solution.

## Common mistakes

Common mistakes include assuming automatic splitting, using incomplete weights and treating a category label as proof of physical conditions. Another is overriding a location without recording where the goods actually went.

Rehearse an ordinary receipt, a full preferred location, an oversized arrival and a temporarily unavailable area. Inspect the physical plan and resulting records together. A useful putaway process gives staff a reliable recommendation and a clear next action when reality does not fit it.

## Related

Read [Odoo Cold Chain Receiving: Record and Resolve Delivery Exceptions](/blog/2026/11/03/odoo-cold-chain-receiving-exceptions/) for the connected workflow.

## Official references

1. [Storage categories](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/shipping_receiving/daily_operations/storage_category.html)
1. [Packages](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/product_management/configure/package.html)

*How this article was checked: official Odoo 19 documentation and the corresponding Odoo 20 pages were reviewed in October 2026. The examples are illustrative, not client results or tests on a live database.*

For help designing this workflow, see my [Odoo consulting services](/services/odoo-consulting/).
