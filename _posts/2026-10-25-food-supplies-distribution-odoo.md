---
layout: post
title: "Odoo for Food Supply Distribution: Lots, Expiry and Delivery Control"
date: 2026-10-25 08:00:00 +0530
tags: [Odoo, Odoo 19, Food Distribution, Inventory, Supply Chain, Expiration Dates, Logistics, India]
hub: industries
description: "How food distributors can use Odoo for supplier receipts, lot traceability, expiry rotation, customer orders and delivery planning."
faqs:
  - q: "Can Odoo track food lots from supplier to customer?"
    a: "Odoo Inventory supports lot tracking and traceability reports. The business must capture lot numbers on receipts and deliveries consistently for the record to be useful."
  - q: "Can Odoo pick food by earliest expiry?"
    a: "Odoo supports FEFO removal when lot tracking, expiration dates and a removal strategy are configured. Test the rule with the warehouse's actual locations and product categories."
  - q: "Does Odoo replace food safety processes?"
    a: "No. ERP traceability can support operational records, but it does not replace food safety controls, required inspections, regulatory reporting or staff training."
---

Food distributors manage supplier lots, different shelf lives, customer delivery commitments and the cost of stock that expires before it sells. Odoo Inventory can support lot traceability, expiration dates and FEFO picking. The quality of the result depends on the receipt and picking process, along with accurate product and date data.

## Capture the lot at receiving

For tracked products, staff should record the supplier lot during the receipt process. Where relevant, capture expiry, best-before, removal and alert dates. Odoo can calculate dates from product settings or allow staff to enter them for a particular lot. If one product arrives in multiple lots, keep each lot distinct instead of combining it into a single undifferentiated quantity.

Use barcode scanning or a controlled receipt checklist to reduce transcription errors. Record supplier, purchase order, quantity, lot and storage location. Define who handles a delivery when a supplier lot or expiry date is missing or unreadable. Do not validate an exception by guessing the date.

## Rotate stock with FEFO

FEFO means First Expired, First Out. In Odoo, configure expiration dates and set a FEFO removal strategy on the appropriate location or product category. When stock is reserved for a delivery, Odoo can select lots with the earliest removal date first. Test what happens when a single order needs more than one lot and when the earlier lot does not have enough quantity.

FEFO does not decide whether a product is safe to sell. Define your own hold, release, damage and disposal processes. Staff need to know how to handle stock that is expired, recalled, temperature affected or otherwise blocked. Use separate locations or inventory statuses where appropriate, and limit who can release held stock.

## Keep traceability through delivery

The lot should stay linked to stock movements as goods move from receiving to storage, picking and delivery. Odoo's traceability report can help show where a lot came from and where it went. If customer delivery slips need the lot number, enable the relevant display option and verify the printed document. Run a mock recall: select a lot and identify remaining quantity, warehouse locations, open transfers and customers who received it.

Customer data must be accurate for this exercise to work. Maintain delivery addresses, contacts and account ownership. If the business sells through a distributor, record the direct customer relationship and the onward distribution limits the organization can actually see. Do not assume an ERP can identify end consumers beyond the recorded supply chain.

## Plan supply and delivery

Set reorder points using demand, supplier lead times, minimum order quantities and remaining shelf life. Buying more to avoid a stockout can increase expiry losses. Review aged stock and forecasted demand by warehouse. Use inventory routes and delivery methods that match the actual fulfillment path. Vehicle capacity and dispatch tools can help organize loads, but temperature control and product segregation need their own process and validation.

Measure write-offs, short-dated receipts, picking accuracy, rejected deliveries and order fill rate. Review the cause of each issue with purchasing and warehouse teams. A supplier scorecard may reveal recurring short-dated deliveries, while a picking report may reveal that FEFO is configured on the wrong location.

Start with one product family and warehouse. Test receipt, split lot, transfer, sale, partial pick, return and recall. Then expand once staff can follow the process consistently.

For help designing traceable warehouse workflows, see [Odoo implementation services](/services/odoo-implementation/).

Based on the official [Odoo 19 expiration dates documentation](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/product_management/product_tracking/expiration_dates.html), [FEFO documentation](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/shipping_receiving/removal_strategies/fefo.html), and [product tracking documentation](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/management/lots_serial_numbers.html). Local food safety requirements must be confirmed with qualified advisors.
