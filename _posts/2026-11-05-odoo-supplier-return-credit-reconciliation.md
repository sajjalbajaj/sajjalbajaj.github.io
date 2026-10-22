---
layout: post
title: "Odoo Supplier Returns: Follow the Goods Through to the Credit"
date: 2026-11-05 09:00:00 +0530
tags: [Odoo, Odoo 19, ERP, Best Practices, Purchase, Inventory, Accounting, Supply Chain]
hub: purchase
description: "Coordinate Odoo supplier returns with lot identity, dispatch evidence, replacement decisions and vendor credits so physical and financial records agree."
faqs:
  - q: "Does sending goods back automatically create a vendor credit?"
    a: "No. The physical return and the financial adjustment are separate processes. Record and reconcile the supplier credit or replacement outcome."
  - q: "Can a supplier replace goods instead of issuing a credit?"
    a: "That depends on the agreement. Record the accepted replacement and its receipt separately so the original return does not become an unexplained shortage."
---

**Short answer:** a supplier return is complete when the business can explain both where the goods went and how the supplier obligation was settled. Keep the original receipt, returned quantity and credit or replacement decision connected. A dispatched return does not by itself prove that the supplier accepted a claim or adjusted the account.

## Applies to

Odoo 19 Inventory, Purchase and vendor accounting. Return authorisation and disposition are business decisions; finance should approve the applicable credit treatment. The corresponding Odoo 20 references were reviewed in October 2026; use the documentation for your installed release when configuring screens and fields.

## What should be agreed before dispatch?

Identify the product, quantity, reason and original purchase or receipt reference. Where tracking applies, capture the relevant lot or serial identity. A supplier needs enough information to distinguish this return from another delivery of the same product.

Obtain the return instructions through the approved purchasing process. Confirm the destination, reference and expected commercial outcome. Sending goods to a general supplier address without an accepted return route can create a custody problem that neither the warehouse nor finance can resolve easily.

I would separate a suspected defect from a confirmed supplier acceptance. Record the observation and the decision status accurately. The business may need to hold goods for inspection while the supplier reviews the claim, rather than immediately treating them as a completed return.

## How should the stock movement be recorded?

Use the supported return process for the relevant receipt and configuration. Confirm the actual quantity leaving the business and preserve its relationship to the original transaction. Staff should be able to trace the movement without relying on a free text note as the only connection.

Review the location and availability of goods awaiting dispatch. They should not be treated as ordinary saleable stock if the approved process requires a hold. Demonstrate that the chosen operating route respects that decision instead of assuming a label alone controls availability.

Keep shipping or handover evidence. The supplier may dispute a quantity or report that the shipment did not arrive. A return movement in Odoo records the internal transaction; supporting carrier or receiving evidence helps establish what happened outside the system.

## What should finance expect?

Agree whether the outcome is a vendor credit, a replacement, a repair or another accepted adjustment. Those outcomes create different followup tasks. Finance should not assume a credit is due merely because a warehouse return exists, and purchasing should not assume an accepted credit has been recorded.

Odoo documents vendor refunds and credit notes through the vendor accounting workflow. Review the original bill, quantities and amounts with the responsible finance user. Physical movement and financial adjustment should remain separately identifiable even when they refer to the same incident.

If the supplier account is already settled, determine how the credit will be used or refunded. If it remains unpaid, reconcile the accepted adjustment with the outstanding balance. Keep tax and accounting decisions with the qualified owner rather than improvising entries from a stock report.

## Worked example: damaged packaging components

Consider a skincare manufacturer receiving packaging components with a confirmed defect. The warehouse identifies the affected lot and holds the quantity for review. Purchasing obtains a supplier reference and agreement to replace the accepted quantity.

The return is dispatched with evidence linked to the original receipt. Finance records that the expected outcome is replacement rather than assuming an immediate credit. The replacement arrival is checked for quantity, identity and condition before it becomes available to production.

If the supplier later changes the outcome to a credit for part of the quantity, the responsible owner records that decision. The team can then explain the original receipt, return, replacement and financial adjustment without counting the same quantity twice or leaving an unexplained open claim.

## How do partial outcomes change the review?

A supplier may accept only part of a claim or send replacements in stages. Keep accepted, disputed and outstanding quantities distinct. Closing the entire case after the first response can hide the remaining obligation.

Review whether the business still needs the replacement. Production plans may have changed or another supplier may already have filled the shortage. Purchasing should confirm the current need before accepting a later shipment that creates unnecessary stock.

Preserve the reason for any settlement difference. A negotiated adjustment, transport loss and counting correction are different events. Clear classification helps later reviews identify recurring supplier or internal problems without treating every difference as the same kind of defect.

## When does this process fit?

It fits operations where supplier returns affect stock, customer commitments or meaningful financial balances. A coordinated process is particularly useful when different teams manage goods, supplier conversations and payment. It can be simple as long as the references and responsibilities are clear.

It should be adapted for goods held on consignment, customer owned items or specialist regulated products. Ownership and disposition requirements can differ. Establish the applicable process before using a standard owned stock return as a template.

## Common mistakes

Common mistakes include shipping without a supplier reference, crediting quantities that never left and assuming replacement receipts settle every financial question. Another is hiding an unresolved claim by closing the purchase order without a separate followup owner.

Finish with a reconciliation of returned quantity, accepted outcome and remaining balance. The warehouse, buyer and finance reviewer should each recognise the same case from their own records. That shared explanation is the useful completion condition, rather than a single status marked done.

## Related

Read [Odoo Vendor Bill Matching: Resolve Receipt and Price Exceptions](/blog/2026/11/05/odoo-vendor-bill-matching-exceptions/) for the connected workflow.

## Official references

1. [Credit notes and refunds](https://www.odoo.com/documentation/19.0/applications/finance/accounting/customer_invoices/credit_notes.html)
1. [Manage vendor bills](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/purchase/manage_deals/manage.html)
1. [Lot numbers](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/product_management/product_tracking/lots.html)

*How this article was checked: official Odoo 19 documentation and the corresponding Odoo 20 pages were reviewed in October 2026. The examples are illustrative, not client results or tests on a live database.*

For help designing this workflow, see my [Odoo consulting services](/services/odoo-consulting/).
