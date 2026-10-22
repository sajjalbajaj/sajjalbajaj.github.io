---
layout: post
title: "Odoo Byproducts: Separate Reusable Output from Unusable Waste"
date: 2026-11-09 08:00:00 +0530
tags: [Odoo, Odoo 19, ERP, Best Practices, Manufacturing, Inventory, Quality, MRP]
hub: manufacturing
description: "Record Odoo manufacturing byproducts with product identity, actual output and disposition decisions before treating residual material as usable stock."
faqs:
  - q: "Is every leftover material a byproduct?"
    a: "Not necessarily. Identify whether it is a managed output with a defined use or material requiring a separate waste or scrap process."
  - q: "Does a byproduct quantity establish its accounting value?"
    a: "No. Quantity tracking and valuation are separate questions. Finance should assess the configured costing method and any cost allocation before relying on the result."
---

**Short answer:** record a manufacturing byproduct when the business needs to identify and manage an additional output, then decide whether the actual material is suitable for its intended use. Keep unusable waste and valuation decisions explicit. A planned byproduct on a bill of materials does not prove that the expected quantity or quality emerged from every production run.

## Applies to

Odoo 19 Manufacturing with byproducts enabled and Inventory for output movements. This article does not prescribe a universal byproduct valuation method. The corresponding Odoo 20 references were reviewed in October 2026; use the documentation for your installed release when configuring screens and fields.

## What makes residual material worth tracking?

Start with its intended use. A secondary output may be sold, reused in production or stored for a later decision. If it has no accepted use and requires disposal, the process may belong in a different scrap or waste workflow rather than ordinary available stock.

Define the product identity and inventory unit. Similar looking residuals can have different suitability or handling requirements. Combining them under one convenient description can make it difficult to explain what is available and which operation produced it.

I would ask operations and finance to agree the purpose of the record. Operations needs an accurate quantity and disposition. Finance needs an appropriate valuation approach. A useful stock code should support both without implying that the presence of a quantity automatically creates a particular financial value.

## How does Odoo represent the output?

Odoo documents byproducts on a bill of materials, with a quantity and an optional producing operation. Completing the manufacturing process records output movements alongside the main product. Review those movements to understand what the configuration actually creates.

The planned quantity is an expectation, not a substitute for production evidence. Establish how staff record differences through the supported workflow. A run producing less secondary material should not leave the warehouse with stock that exists only because the bill of materials predicted it.

Keep the product and location choices deliberate. Material requiring review may need a controlled destination before reuse. Do not assume that naming it a byproduct prevents it from being reserved, sold or consumed through ordinary stock processes.

## How should suitability be decided?

Use criteria supplied by the responsible product or quality specialist. Moisture, contamination, dimensions or other characteristics may matter in a particular operation, but this article does not define universal thresholds. The ERP records evidence and outcomes; it does not establish those criteria independently.

Quality checks can collect configured observations where the application is used. Decide what happens when a check fails or evidence is missing. The disposition owner should be able to hold, release or reject the material through an approved process.

Separate a reusable output from a loss. Otherwise a team can make production appear more efficient by recording all residue as useful stock that nobody ever consumes. Review whether recorded outputs actually leave through an accepted use or accumulate indefinitely.

## Worked example: offcuts from a manufacturing process

Imagine a workshop producing a finished item and generating offcuts. Some offcuts meet a defined specification for another internal operation, while others are unsuitable. The team creates a product identity only for the material it intends to manage as a reusable output.

Production records the actual output and routes it through the agreed review. Accepted material goes to its designated storage location; rejected material follows the approved disposition process. The next job consumes only the quantity established as available and suitable.

Finance examines the resulting movements and costing configuration separately. The workshop does not assign an arbitrary sale value simply because it can enter a quantity. The example keeps physical recovery, operational usefulness and financial treatment connected without treating them as the same decision.

## What should happen when output varies?

Record the difference and investigate recurring patterns. A variation can reflect the input material, process conditions, measurement method or an inaccurate planning assumption. Do not change the standard byproduct quantity after every isolated fluctuation without understanding the cause.

Review the impact on downstream plans. If another operation depends on the secondary output, its availability should follow actual accepted quantities. A forecast based entirely on an optimistic standard can create shortages even while the main product schedule looks healthy.

Keep approved changes to the bill of materials under control. If the process consistently produces a different output, review the planning basis with operations and finance. Preserve the reason for the revision so that historical results remain understandable.

## When does byproduct tracking fit?

It fits a repeatable additional output that has a defined identity and an operating reason to be managed. The depth of tracking should match the value, traceability and handling requirements. A simple material stream may need less detail than a separately sold product.

It is less useful when residual material has no stable identity or accepted use. Creating elaborate stock records for something immediately disposed of can add work without improving decisions. Assess the appropriate waste or scrap process instead.

For dismantling or recovery operations, compare the relevant manufacturing model with an unbuild process. The physical activity and origin of the product matter. Do not assume the same transaction is appropriate for every situation that produces reusable parts.

## Common mistakes

Common mistakes include recording planned output as actual, mixing accepted and rejected material and treating quantity as proof of valuation. Another is overlooking byproduct stock that accumulates without any demonstrated use.

Review one complete cycle from production through disposition or consumption. The team should explain the output quantity, its source, suitability decision and eventual destination. That evidence establishes whether byproduct tracking supports useful operating decisions rather than merely making production records look complete.

## Related

Read [Odoo Unbuild Orders: Review Components Before Returning Them to Use](/blog/2026/11/08/odoo-unbuild-recovered-components/) for the connected workflow.

## Official references

1. [By-Products](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/manufacturing/workflows/byproducts.html)
1. [Quality control points](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/quality/quality_management/quality_control_points.html)

*How this article was checked: official Odoo 19 documentation and the corresponding Odoo 20 pages were reviewed in October 2026. The examples are illustrative, not client results or tests on a live database.*

For help designing this workflow, see my [Odoo consulting services](/services/odoo-consulting/).
