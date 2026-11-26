---
layout: post
title: "Odoo 20 Allocation Report: Review Reserved and Expected Stock"
date: 2026-11-16 07:00:00 +0530
tags: [Odoo, Odoo 20, ERP, Best Practices, Inventory Management, Warehouse, Sales, Reporting]
hub: inventory
description: "Use the Odoo 20 allocation report to assign incoming supply to confirmed demand while keeping reservations separate from physical receipt."
last_modified_at: 2026-11-27
faqs:
  - q: "Does allocating incoming stock make it immediately pickable?"
    a: "No. Allocation does not move inventory. The incoming receipt or manufacturing completion still needs validation before the goods are physically available for picking."
  - q: "Where is the allocation report enabled?"
    a: "Enable Show Allocation on the relevant Inventory operation type. Optional allocation by location also requires Storage Locations."
  - q: "Does the report allocate stock already reserved for another order?"
    a: "The documentation describes allocating the unreserved remaining demand. Review existing reservations before changing order priorities."
---

**Short answer:** Odoo 20's allocation report assigns incoming purchased or manufactured supply to confirmed demand. It helps establish which order should receive a quantity, but allocation itself does not move stock. Verify existing reservations, receipt completion and the authority to change priorities before promising a dispatch date.

## What does the report connect?

The [allocation report documentation](https://www.odoo.com/documentation/20.0/applications/inventory_and_mrp/inventory/warehouses_storage/reporting/allocation_report.html) describes incoming supply from purchase or manufacturing against confirmed sales or manufacturing demand. The Allocation button can be available on the incoming receipt or manufacturing order.

Enable Show Allocation on the relevant operation type. If allocation must be restricted by location, review that additional setting and enable Storage Locations as required. Test the actual operation types in use, rather than assuming one setting covers every warehouse flow.

## Why is allocation different from receipt?

A buyer can know which customer order needs an incoming item before that item reaches the warehouse. Allocation records that relationship. It does not validate the receipt, perform a warehouse movement or establish that quality release is complete.

The documentation explicitly separates allocation from movement. If the receipt has not been validated, the assigned quantity is not automatically ready to pick. Keep the commercial promise tied to the remaining physical steps.

## How should competing customer orders be handled?

Suppose an illustrative incoming shipment contains 40 units while two confirmed orders still require 25 and 30 units. Inspect any stock already reserved against those orders first. The report concerns remaining unreserved demand, so adding the gross order quantities can overstate the shortage.

Agree which demand has priority and why. If a later order receives a quantity ahead of an earlier commitment, record the authorised exception and tell the affected commercial owner. The report cannot choose the company's service policy.

## What happens when the expected receipt changes?

Revisit allocations when the supplier reduces the quantity, the expected date changes or a customer order is cancelled. Trace the affected orders before updating a promise.

| Proposed test | Question to resolve |
| --- | --- |
| Partial incoming quantity | Which demand remains unallocated? |
| Existing reservation | Is that quantity excluded from the remaining need? |
| Late receipt | Which promised deliveries require review? |
| Cancelled demand | Who reviews any now unnecessary allocation? |
| Receipt awaiting validation | Does the team understand why picking is still blocked? |

These cases should be demonstrated in the configured database. They are not claims that every reprioritisation or cancellation is handled automatically.

## What evidence supports warehouse acceptance?

Capture the incoming order and receipt, outgoing demand, quantity allocated, remaining requirement and validation state. Have a warehouse user demonstrate when the goods become available for the next operation.

Use the [backorder guide](/blog/2026/10/13/backorders-odoo/) for the outstanding delivery decision, and the [ERP acceptance evidence worksheet](/resources/erp-acceptance-evidence/) to record who accepted the allocation behaviour and which exceptions remain open.

*Sources reviewed on 27 November 2026. Scenarios are proposed acceptance cases, not reported customer results. Confirm edition, installed modules and provider requirements for your database.*
