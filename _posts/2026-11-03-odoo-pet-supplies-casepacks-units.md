---
layout: post
title: "Odoo Pet Supplies: Keep Cases, Packs and Individual Units Consistent"
date: 2026-11-03 08:00:00 +0530
tags: [Odoo, Odoo 19, Inventory, Purchase, Retail, Pet Supplies, ERP, Best Practices]
hub: inventory
description: "Keep pet supply purchasing and sales consistent in Odoo with clear inventory units, case conversions, pack identities and lot tracking decisions."
faqs:
  - q: "Is a case always a separate product?"
    a: "No. A case can represent a fixed quantity of the same product. A distinct assortment, labelled item or transformation may require a different product model."
  - q: "Can a bag count be converted directly into weight?"
    a: "Only with an appropriate product and measurement design. A count of sealed bags and a measured loose weight are different inventory questions; do not assume an arbitrary conversion is valid."
---

**Short answer:** choose one understandable inventory unit for each pet supply product and define how supplier cases and customer packs relate to it. Keep genuinely different products and transformations separate. Most quantity errors become easier to prevent when purchasing, receiving, sales and counting use the same documented conversion model.

## Applies to

Odoo 19 Inventory, Purchase and Sales unit configuration, with optional lot tracking. Product modelling should be rehearsed using representative supplier and customer documents. The corresponding Odoo 20 documentation was checked in October 2026. This article targets Odoo 19; confirm your installed version before following any screen labels.

## What does one unit represent?

Start with the item that staff actually count. A sealed pouch, a bag, a toy and a measured quantity of loose material are different inventory concepts. Define the product identity and inventory unit before adding supplier prices or sales pack sizes.

I would write the definition in plain language beside representative packaging. For example, the inventory unit may be one sealed pouch of a specified product, while a supplier case contains a fixed number of those pouches. The case conversion should not silently apply to every item sold under a similar brand.

Distinguish product weight from the stock counting unit. A sealed bag may have a stated weight while still being counted as one bag. Selling material by measured weight introduces different receiving, loss and traceability questions that deserve an explicit design.

## How do Odoo 19 units and packagings fit?

The Odoo 19 documentation describes enabling Units of Measure & Packagings, defining the inventory unit and configuring sales packagings and supplier purchase units. Purchase units must belong to the same category as the default unit for the documented conversion behaviour.

The inventory unit is used for internal stock movements. A purchase or sales document using another supported unit can therefore produce a warehouse quantity expressed in the inventory unit. Staff should understand that conversion rather than assuming the number on every document must be identical.

Use the Odoo 19 instructions for the actual fields. Older guides can describe a different product form. In the reviewed documentation, the inventory unit is associated with the Sales Price and Cost unit fields, while supplier units are defined through the vendor information.

## When should a pack be a separate product?

A fixed case of identical items may be a packaging or unit relationship. An assortment with different contents, a separately labelled bundle or a repacked item may require another product and workflow. The decision affects stock, pricing, barcodes and traceability.

Ask whether opening the pack changes what the business owns or sells. If the pack is merely a container holding identical saleable units, a conversion may be sufficient. If staff create a new saleable item, record the transformation through an appropriate process rather than changing quantities informally.

Keep barcode meaning clear. A case barcode and an individual item barcode should resolve to the intended quantity and product in the configured workflow. Demonstrate this with the actual receiving and sales devices before relying on it during busy operations.

## Worked example: pouches bought in cases

Imagine a pet supplies wholesaler buying sealed pouches in cases of twelve and selling both individual pouches and full cases. The chosen inventory unit is one pouch. A purchase of ten cases should therefore be understood as one hundred and twenty pouches in the receiving and stock records.

The team rehearses a partial receipt, an individual sale and a customer case order. It checks that warehouse demand and the commercial document agree after conversion. Prices are reviewed in their own unit so that a case price is not accidentally applied to a single pouch.

A later supplier offers a different case size. The team updates the supplier arrangement through an approved review and checks outstanding orders. It does not change a shared conversion casually and assume historical documents or other suppliers will remain understandable.

## How should lots and returns be handled?

Where lot tracking is required by the operating model, preserve the identity through receipt and dispatch. A case can contain units from a particular lot, and breaking the case should not erase that relationship. Confirm how staff capture the lot on the actual transaction.

Returns need both a quantity decision and a condition decision. An unopened case, several individual items and damaged packaging should be recorded in the correct unit and disposition. Do not use a quantity conversion to imply that an item is suitable for resale.

For repacking or loose sales, assess whether the standard design captures the necessary consumption, output and loss records. If it does not, identify the additional process or extension explicitly. Avoid claiming that a packaging field alone provides complete transformation traceability.

## What should the product master review include?

Review inventory unit, supplier unit, conversion quantity, sales packagings, barcode references and tracking requirements together. Have purchasing, warehouse and sales staff examine the same sample documents. Each team sees a different part of the quantity chain.

A structured model fits businesses selling the same item through several pack sizes. It needs more design when assortments, repacking or variable weight are involved. Keep those exceptions visible rather than forcing every product into a convenient fixed ratio.

Common mistakes include using case as an undefined unit, mixing bag weight with bag count and changing conversions without reviewing open transactions. Another is checking quantities while overlooking whether prices are expressed per case or per individual item.

Before release, reconcile a small complete cycle from purchase through receipt, sale, return and stock count. The accepted result should be understandable to someone holding the physical goods. When the product model matches that reality, users can explain differences without relying on mental arithmetic or private conversion spreadsheets.

## Related

For distribution traceability, see [the food recall drill](/blog/2026/11/01/odoo-food-recall-traceability-drill/).

## Official references

1. [Units of measure and packagings](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/product_management/configure/uom.html)
1. [Lot tracking](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/product_management/product_tracking/lots.html)

*How this article was checked: the official Odoo 19 references and their Odoo 20 counterparts were reviewed in October 2026. Examples are illustrative planning exercises, not client results or tests on a live database.*

For help applying this to your business, see my [Odoo consulting services](/services/odoo-consulting/).
