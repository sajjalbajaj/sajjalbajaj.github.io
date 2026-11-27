---
layout: post
title: "Catch Weight in Odoo: Sell by the Piece, Invoice by the Kilo"
date: 2026-10-17 08:00:00 +0530
last_modified_at: 2026-11-27
tags: [Odoo, Odoo 19, Inventory, Inventory Management, Stock Control, Invoicing, Food and Beverage, Distribution]
hub: inventory
description: "Handle catch weight in Odoo: actual kilo invoicing, piece counts, partial returns and credit notes, with a worked example and dual-unit design checks."
faqs:
  - q: "Can Odoo track pieces and actual kilograms together?"
    a: "Standard unit conversions use a fixed ratio. They do not independently maintain a variable piece count and measured weight for each transaction. Stocking and invoicing in kg can cover weight-priced sales; a piece count in the description is informational. Operational stock balances in both units require an assessed extension or custom design."
  - q: "Should I close a backorder when the measured weight is below the estimate?"
    a: "Only after confirming the customer has received the agreed goods and no balance is still due. A lower weight can mean normal variation, a missing piece or a genuine short delivery. Check the count and commercial instruction before choosing whether to retain the outstanding demand."
  - q: "How should a partial catch weight return be credited?"
    a: "Measure the actual returned weight and link the stock return to the original delivery. If the original invoice is already posted, review a separate credit note against that invoice. Use the agreed credit basis; do not infer the returned kilograms from the original average weight per piece."
---

**Short answer:** Odoo can stock goods in kilograms and invoice the measured delivered quantity. That works when weight determines the price and piece count is informational. A fixed unit conversion does not provide independent balances for pieces and variable kilograms. When both matter, assess a dual-unit extension across dispatch, returns and invoicing. For partial returns, weigh what actually comes back and reconcile the stock return and any credit note separately.

## What does catch weight mean in practice?

A customer orders ten cheese wheels, but pays for their actual weight. Ten wheels might weigh 46.8 kg on one delivery and 44.6 kg on another. The count tells the picker what to handle; the kilograms determine the charge.

This differs from a sealed carton that always contains 12 kg. A fixed conversion is appropriate for that carton. Defining one wheel as 4.5 kg only records an estimate. It cannot establish the actual weight of the next wheel or preserve an independent piece balance.

The standard [Odoo 19 units of measure documentation](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/product_management/configure/uom.html) describes inventory units, sales packagings and reference-unit conversions. It does not document a complete variable dual-quantity ledger. An installed industry module may add one; assess its actual behaviour rather than assuming every Odoo database has the same capabilities.

## Which setup fits your business?

| Requirement | Starting point | Limitation to resolve |
| --- | --- | --- |
| Charge for actual kg; count is a picking note | Inventory and price in kg; invoice delivered quantities | The note does not maintain stock in pieces |
| Buy and sell a genuinely fixed-weight pack | Configure its fixed unit conversion | Confirm the pack is consistently that weight |
| Check available pieces and kg independently | Assess dual-unit functionality | Both quantities must survive every movement |
| Weigh products at the till | Point of Sale with a supported scale setup | A POS connection does not automatically weigh warehouse deliveries |
| Credit selected returned pieces by their actual weight | Linked stock return plus invoice review | Original average piece weight is insufficient |

This guide uses the Odoo 19 Sales and Inventory workflow. Relevant Odoo 20 differences are noted below. Scale connections, Barcode processing and additional industry features depend on installed apps and supported hardware.

## How do you invoice the actual delivered kilograms?

Use a representative test product before changing an established live stock unit.

1. Set the product's inventory unit to **kg**, and verify that its selling price is a price per kg. In Odoo 19 the inventory unit appears beside the product's Sales Price and Cost.
2. On the product, select **Delivered quantities** as the invoicing policy. Changing the Sales default does not update every existing product automatically.
3. Enter the estimated kilograms on the order. If useful, add the requested piece count to the description, clearly identifying it as a handling instruction.
4. At dispatch, record the measured net kilograms on the delivery. Keep the weighing record and count available to the person checking the transaction.
5. Review any difference from the order. Confirm whether it is ordinary weight variation or goods still owed before deciding on a backorder.
6. Validate the actual delivery, then create and check the invoice. Reconcile its quantity, price basis, discounts and taxes before posting.

The [invoicing policy reference](https://www.odoo.com/documentation/19.0/applications/sales/sales/invoicing/invoicing_policy.html) explains why delivered-quantity billing suits bulk goods with quantities that differ from the order. It does not remove the need to agree the commercial tolerance with the customer.

If ten wheels were promised and only nine left the warehouse, a difference is not merely a rounding issue. Keep the remaining obligation visible or record the customer's agreement to close it. The [backorders guide](/blog/2026/10/13/backorders-odoo/) explains that decision separately from invoicing.

## Worked example: delivery followed by a partial return

These figures are illustrative arithmetic, not a customer case or a tested database result. Assume a price of **₹420 per kg**, no discount, and all amounts shown before tax. The rate is an arbitrary example.

| Record | Pieces, informational in the native kg setup | Measured kg | Amount at the assumed rate |
| --- | ---: | ---: | ---: |
| Order estimate | 10 | 45.0 | ₹18,900.00 |
| Actual dispatch and original invoice | 10 | 46.8 | ₹19,656.00 |
| Accepted partial return | 2 | 9.1 | ₹3,822.00 credit |
| Goods retained after that return | 8 | 37.7 | ₹15,834.00 net charge |

The returned two wheels do not necessarily weigh one fifth of the original delivery. Applying the original average would give **46.8 ÷ 10 × 2 = 9.36 kg**, producing a credit of **₹3,931.20**. That is **₹109.20** above the credit for the measured 9.1 kg.

The count helps confirm which goods returned. The actual net weight supports the quantity to credit under this example's agreement. If the commercial agreement uses a different return price or deduction, document that explicitly instead of silently reusing the dispatch rate.

## What changes when the customer has already been invoiced?

Odoo's [returns and refunds instructions](https://www.odoo.com/documentation/19.0/applications/sales/sales/products_prices/returns.html) distinguish a reverse stock transfer from a credit note.

- **Before invoicing:** create the return from the validated delivery, enter the returned quantity in the correct unit and validate receipt when the goods arrive. Check the resulting delivered balance before creating the invoice.
- **After a posted invoice:** process the stock return and review a credit note from the original invoice. A reverse transfer alone does not amend the posted invoice. Check the draft credit quantities and amounts before confirming it.

For the example, the proposed reconciliation is original delivery **46.8 kg**, received return **9.1 kg**, remaining delivered balance **37.7 kg**. The separate commercial reconciliation is original invoice **₹19,656**, approved credit **₹3,822**, net **₹15,834** before tax. Verify both chains rather than assuming one screen proves both.

Keep returned goods subject to the appropriate inspection and location process. Receiving them back does not itself establish that they are suitable for resale. See [sales returns and credit notes](/blog/2026/10/13/sales-returns-rma-odoo/) for the broader workflow.

## Scale connections and precision checks

The [Odoo 19 POS scale guide](https://www.odoo.com/documentation/19.0/applications/sales/point_of_sale/hardware_network/scale.html) uses an IoT connection and the **To Weigh With Scale** product option. The [Odoo 20 guide](https://www.odoo.com/documentation/20.0/applications/sales/point_of_sale/hardware_network/scale.html) also documents direct USB connection and calls the product option **To Weigh**. Confirm compatibility with the actual device before purchasing hardware.

Test zeroing and tare with the container you use. Verify that displayed, stored and printed weights retain the precision the business needs, including a small quantity such as 0.125 kg. Review database-wide precision changes before applying them. Hardware integration alone does not establish compliance with local commercial weighing requirements.

## Diagnose a weight or invoice mismatch

| Symptom | Evidence to compare | Next check |
| --- | --- | --- |
| Invoice uses estimated kg | Order, validated delivery and invoice quantity | Product invoicing policy and invoice creation sequence |
| Returned kg look too high | Actual return weight against original average | Replace an inferred quantity with verified measurement before posting |
| Small weights disappear | Scale reading, recorded quantity and printed document | Precision, unit and rounding configuration |
| Unexpected fractional pieces | Transaction unit against packaging conversion | Whether a nominal weight was treated as a fixed ratio |
| Stock returned but charge unchanged | Return receipt and original invoice references | Separate credit-note status and approved commercial treatment |
| Delivery closed with pieces still owed | Requested count, dispatched count and customer instruction | Outstanding-demand decision, not just the weight difference |

## What must a dual-unit extension demonstrate?

Ask for proposed acceptance cases covering receipts, split lots, partial dispatch, internal transfers, returns, credit notes, scrap and corrections. For each, define which quantity drives reservation, replenishment, pricing and valuation, and how the other quantity is maintained. Include exports, labels and integrations that currently assume one quantity.

A convincing demonstration traces both balances through a partial return and explains how an error is corrected without losing the original record. A second field visible on an order is not enough evidence of a complete dual-unit workflow.

For related setup, read [products and units of measure](/blog/2026/09/22/how-to-set-up-products-in-odoo/) and [ordered versus delivered invoicing](/blog/2026/08/19/invoicing-policies-in-odoo-sales/). If you need help defining the scope, see [Odoo implementation](/services/odoo-implementation/).

*Reviewed on 27 November 2026 against the linked Odoo 19 documentation and the corresponding Odoo 20 units, returns and scale pages. The calculation and acceptance cases are illustrative; no live database or commercial scale was tested. Installed extensions can change the workflow.*
