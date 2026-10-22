---
layout: post
title: "Odoo Unit Conversion: Explain Quantity Differences First"
date: 2026-11-20 08:00:00 +0530
tags: [Odoo, Odoo 19, ERP, Best Practices, Inventory Management, Procurement, Supply Chain, Setup]
hub: inventory
description: "Investigate Odoo unit conversion differences across purchases, receipts and sales before changing stock, prices or the product measurement model."
faqs:
  - q: "Can a purchase order and receipt show different quantities?"
    a: "Yes. When their units differ, Odoo converts the purchase quantity into the inventory unit for warehouse documents. Compare the units and conversion, not just the numbers."
  - q: "Can a fixed conversion represent variable product weight?"
    a: "A fixed conversion represents a fixed relationship. Products whose weight varies by piece require a suitable process for recording that variability rather than an assumed constant ratio."
---

**Short answer:** When quantities differ between an Odoo order and a warehouse document, compare their units and conversion relationship before changing stock. Different numbers can describe the same physical amount. I establish the measurement behind each figure before deciding whether there is a genuine discrepancy.

## Applies to

Odoo 19 Inventory, Purchase and Sales across editions. The corresponding Odoo 20 units of measure documentation was reviewed and describes the same conversion concepts. The cited Odoo 19 page uses Units of Measure & Packagings terminology. This is a discrepancy review, not a prescription for changing units on products with transaction history.

## Which unit belongs to each business event?

A supplier may sell a product in one unit while the warehouse tracks it in another. Sales can use a different commercial unit again. Odoo documents conversions between purchase or sales quantities and the inventory unit used on warehouse documents.

This means a purchase order quantity should not be compared with a receipt quantity in isolation. Read the unit beside each value and confirm that both refer to the same product. A receiving employee may otherwise report a shortage where the application is simply expressing the same goods differently.

Write the relationship in plain language for the team. For a fixed pack, state how many inventory units it contains. For a length conversion, state the reference measurement. The wording helps purchasing, warehouse and finance discuss the same physical amount even when their screens use different units.

## When does a conversion become unreliable?

A conversion is only useful when the underlying relationship is stable. If a supplier changes the contents of a pack, the old ratio no longer describes the new supply. The change needs a product and commercial review rather than repeated manual corrections on receipts.

Variable weight requires particular care. A piece and a kilogram do not have a universal fixed relationship when individual pieces differ. Using an average as though it were exact can hide shortages, distort billing and create confusing stock balances.

Also review whether staff are discussing a packaging quantity or a physical package. A carton may describe a fixed sales quantity, while a shipment package is a container holding particular goods. Those concepts can overlap in conversation without being the same record or control in the system.

## How should a discrepancy be investigated?

Start with the source document, the actual goods and the target warehouse document. Confirm the product reference, unit, quantity and intended conversion. Then compare the physical receipt or delivery with the converted expectation.

If the goods are genuinely short, record the actual quantity through the appropriate receipt or delivery workflow. Do not change the unit ratio to make one incorrect shipment appear complete. That would apply a local exception to future transactions that may be correct.

Review the price basis as well. A price per case and a price per individual unit can look dramatically different while representing the same rate. Finance should compare quantity and unit together when reviewing a supplier bill, rather than treating every numerical price difference as a commercial change.

## Worked example: a supplier changes its case size

Imagine an illustrative pet supplies distributor buying a product in cases. The supplier introduces a smaller case but retains a similar product description on its paperwork. The buyer creates an order using the old relationship, so the warehouse expects more individual units than arrive.

The receiving team identifies the changed case size before validating the receipt as complete. Purchasing confirms the new supplier offer and reviews how the product and purchase unit should be represented. Finance checks whether the quoted price was for the old or new case.

The team records the actual receipt and resolves the commercial difference. They do not invent extra stock or adjust the conversion silently to hide the first mismatch. Future orders use an agreed measurement model, while the original transaction retains an explanation of the exception.

## When it fits and when it doesn't

This review fits distributors, manufacturers and retailers buying and selling in different units. It is especially useful when staff see unexpected quantities after an import or a supplier catalogue update.

It does not replace a specialist catch weight process, calibrated measurement procedure or product redesign. If the physical relationship varies, the business needs a way to record that variation. More decimal places or a convenient average cannot make a variable relationship fixed.

## Common mistakes

**Comparing quantities without their units.** Read the measurement on both documents.

**Changing a conversion to hide one short shipment.** Record the actual exception and preserve the general rule.

**Ignoring the price unit.** Compare commercial rates on the same measurement basis.

**Changing an established product model casually.** Review stock history, open orders and integrations before altering the unit design.

## What should the team document afterwards?

Keep the approved measurement relationship and examples of common purchase and sales quantities. Make that explanation available to the people entering orders and receiving goods, not only the administrator who configured the product.

Review repeated discrepancies by supplier and product. They may reveal a changing pack size, a source file problem or inconsistent terminology. Fix the cause at the product or procurement level so the warehouse does not need to reinterpret the same unit on every delivery.

## Related

Read [Catch Weight in Odoo: Sell by the Piece, Invoice by the Kilo](/blog/2026/10/17/catch-weight-odoo/) for the connected workflow.

## Official references

1. [Units of measure](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/product_management/configure/uom.html)

*How this article was checked: official Odoo 19 documentation was reviewed in October 2026. Odoo 20 references were also checked; material differences or moved pages are identified above. Examples are illustrative business scenarios, not client results or tests on a live database.*

If you need help translating these decisions into your own workflow, see my [Odoo consulting services](/services/odoo-consulting/).
