---
layout: post
title: "Catch Weight in Odoo: Sell by the Piece, Invoice by the Kilo"
date: 2026-10-17 08:00:00 +0530
tags: [Odoo, Odoo 19, Inventory, Inventory Management, Stock Control, Invoicing, Food and Beverage, Distribution]
hub: inventory
description: "Catch weight in Odoo 19: what works natively, from kilo pricing and weighed deliveries to POS scales, and what needs customising for pieces and kilos."
faqs:
  - q: "Does Odoo 19 have a catch weight feature?"
    a: "Not as a named feature. A sales order line, a stock move and an invoice line each hold one quantity in one unit, so Odoo can't record 10 pieces and 46.8 kg on the same line. Stocking and selling in kilos and invoicing delivered quantities gets you most of the way; tracking both units at once needs customisation."
  - q: "How do I invoice the weighed quantity instead of the ordered one?"
    a: "Sell the product in kg, set its Invoicing Policy to Delivered quantities, and have the warehouse enter the weighed kilos in the Quantity column of the delivery before validating. The invoice then uses what was delivered, not what was ordered."
  - q: "Can Odoo Point of Sale weigh products at the till?"
    a: "Yes. Tick To Weigh With Scale on the product's Point of Sale tab and connect a supported scale through an IoT box or Windows virtual IoT. The cashier puts the item on the scale and Point of Sale works out the price from the price per kilo."
---

**Short answer:** Odoo 19 has no catch-weight feature as such. Every sales order line, stock move and invoice line
carries one quantity in one unit, so "10 fish, 46.8 kg" can't live on a single line. The native route is to stock and
price the product in kilos, let the warehouse type the weighed kilos into the delivery, and invoice delivered
quantities. Counter sales can be weighed on a scale through Point of Sale. Keeping the piece count and the weight side
by side, in stock and on the invoice, needs customisation.

For the basics of units and packagings, start with my explainer on
[product types, units of measure and packaging in Odoo](/blog/2026/08/12/odoo-product-types-units-of-measure-packaging/).

## Applies to

- **Odoo version:** Odoo 19. I also checked the Odoo 20 documentation: the units of measure page is unchanged, and
  neither version documents a catch-weight feature. In Odoo 20 the Point of Sale scale page adds a direct USB
  connection that needs no IoT system, and the product option is renamed **To Weigh**.
- **Edition:** Community and Enterprise for units of measure, invoicing policies, deliveries and lot properties.
  Connecting a scale through the IoT app, and scanning weight barcodes with the Barcode app, are Enterprise only.
- **Apps:** Inventory, Sales and Invoicing; Point of Sale for counter sales.

## What is catch weight, and why is it awkward?

Catch weight applies to goods whose weight varies piece by piece: whole fish, a wheel of cheese, a leg of lamb, a crate
of chicken, a coil of steel. The customer orders a count ("ten whole fish"), you price by the kilo, and the real weight
is only known when someone puts the goods on a scale.

So each line needs two quantities: the count, for picking and handling, and the weight, for the price. Most ERPs, Odoo
included, hold one.

## What does Odoo 19 give you natively?

### Units with fixed conversions

Odoo 19 dropped unit categories. Each unit, under **Inventory ‣ Configuration ‣ Units & Packagings**, has a
**Quantity** and a **Reference Unit**, so a sealed case can be defined as 12 kg. The ratio is fixed. That's perfect for
the case and no use for a whole fish, whose weight changes every time.

### Stock and sell in kilos, invoice what was delivered

This is the setup I'd start with for most weight-priced goods:

1. Make **kg** the product's inventory unit (the unit next to **Sales Price** and **Cost**) and enter the price per
   kilo.
2. On the **General Information** tab, set **Invoicing Policy** to **Delivered quantities**. Odoo's own documentation
   gives food and materials sold in bulk as the typical case, because the delivered quantity differs from the order.
3. On the quotation, enter the estimated kilos and put the piece count in the line description.
4. At dispatch, the picker weighs the goods and types the actual kilos in the **Quantity** column of the delivery. A
   quantity above the **Demand** shows in red but can still be validated. A lower one opens the backorder question by
   default: choose **No Backorder** when the difference is only weight.
5. Create the invoice from the sales order. It uses the delivered kilos.

Buying works the same way in reverse. For goods, the **Control Policy** defaults to **On received quantities**, so
vendor bills follow the weighed receipt.

One setting to check: Odoo 19 rounds every unit to the same **Product Unit** decimal accuracy, two decimals by default.
To record grams on a kilo, raise it to three under **Settings ‣ Technical ‣ Database Structure ‣ Decimal Accuracy**
(developer mode). It affects all units, so agree it before go-live.

### A nominal-weight packaging, to order by the piece

If customers insist on ordering pieces, create a unit such as "Fish, about 4.5 kg" with **Quantity** 4.5 and
**Reference Unit** kg, and add it to **Packagings** on the product's **Sales** tab. An order for 10 pieces becomes a
delivery demand of 45 kg; the picker enters the real weight, and Odoo converts it back into the packaging. The invoice
is right in money terms but shows a fractional number of pieces, which customers find odd.

### Weighing at the counter

For counter sales, tick **To Weigh With Scale** on the product's **Point of Sale** tab and connect a supported scale
through an IoT box or Windows virtual IoT. The cashier places the item on the scale and Point of Sale prices it from the
weight, with a **Tare** button for containers. Odoo's documentation says production use needs an IoT subscription, and
EU member states require a certified scale.

Goods weighed and labelled elsewhere can carry the weight in the barcode: the default nomenclature's **Weighted
Barcodes 3 Decimals** rule (prefix 21) is read by Point of Sale, and with GS1 nomenclature the Barcode app reads a net
weight in kilograms (application identifier 310) as the quantity.

### Recording each piece's weight

For lot-tracked goods you can add a property such as "Net weight" to lots for traceability. Odoo stores it but doesn't
use it for stock or pricing.

## What usually needs customisation?

When the count and the weight both matter, the standard data model runs out. Usual additions:

- **Two quantities per line** on sales orders, deliveries and invoices, with the price applied to the weight and the
  count printed alongside.
- **Stock in both units**, so the warehouse sees 40 wheels and 512 kg, reordering works on the count and valuation
  follows the weight.
- **An estimated weight per piece** on the order, replaced by the real weight when the delivery is validated.
- **Weighing stations in the warehouse** that write straight into the delivery, and labels printed with each piece's
  weight.

Done well, this is a contained module that adds a second quantity next to Odoo's own, leaving core quantities alone.

## When it fits and when it doesn't

- **Native is enough** when the customer pays for weight and the count is only for information: produce by the kilo,
  metal by the tonne, cheese cut to order.
- **Customise** when you must manage stock in pieces and kilos at the same time, show both on every invoice, or meet
  labelling rules that need each piece's weight.

## Worked example: a fish wholesaler supplying hotels

A Kochi wholesaler sells whole seer fish to hotels at a price per kilo. The product is stocked in **kg** with
**Delivered quantities** as its invoicing policy. The figures are illustrative.

| Step | What happens |
|---|---|
| Order | A hotel orders 10 fish. The salesperson enters **45 kg** (about 4.5 kg each) with "10 pcs" in the description. |
| Dispatch | The picker weighs the 10 fish at **46.8 kg** and enters that in **Quantity**. It shows in red, above the demand, and is validated. |
| Invoice | The sales order shows **46.8 kg** delivered, and the invoice charges 46.8 kg at the price per kilo. |

The next week only 9 fish are available, weighing 41.2 kg. The picker enters 41.2 and chooses **No Backorder**, because
the hotel doesn't want the tenth fish later. The invoice is for 41.2 kg.

## Common mistakes

- **Leaving Invoicing Policy on Ordered quantities**, so customers are billed the estimate.
- **Treating a nominal weight as exact**, for example valuing stock at 1.5 kg per chicken when no two weigh the same.
- **Losing grams to rounding** because the Product Unit decimal accuracy is still two.
- **Creating backorders for weight shortfalls**, which leaves tiny open deliveries behind.
- **Changing the inventory unit once stock exists**: Odoo converts one to one rather than recalculating.

## Related

- [How to set up products and units of measure in Odoo 19](/blog/2026/09/22/how-to-set-up-products-in-odoo/)
- [Invoicing policies in Odoo Sales: ordered vs delivered](/blog/2026/08/19/invoicing-policies-in-odoo-sales/)
- [How to set up Point of Sale in Odoo](/blog/2026/09/25/how-to-set-up-point-of-sale-odoo/)
- [IoT in Odoo: connecting hardware to your system](/blog/2026/09/11/odoo-iot/)
- [Backorders in Odoo 19: partial deliveries and receipts](/blog/2026/10/13/backorders-odoo/)
- [Process manufacturing in Odoo: recipes, yields and batches](/blog/2026/10/16/process-manufacturing-recipes-yields-odoo/)

## Official references

- Odoo 19 documentation: [Units of measure](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/product_management/configure/uom.html)
- Odoo 19 documentation: [Invoicing policies](https://www.odoo.com/documentation/19.0/applications/sales/sales/invoicing/invoicing_policy.html)
- Odoo 19 documentation: [Operation types](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/warehouses_storage/inventory_management/operation_type.html), for the Create Backorder option
- Odoo 19 documentation: [Point of Sale scale](https://www.odoo.com/documentation/19.0/applications/sales/point_of_sale/hardware_network/scale.html)
- Odoo 19 documentation: [Internet of Things (IoT)](https://www.odoo.com/documentation/19.0/applications/general/iot.html)
- Odoo 19 documentation: [Default barcode nomenclature](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/barcode/operations/barcode_nomenclature.html)
- Odoo 19 documentation: [GS1 barcode nomenclature](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/barcode/operations/gs1_nomenclature.html)
- Odoo 19 documentation: [Lot numbers](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/product_management/product_tracking/lots.html)

*How this article was checked: menu paths, field names and behaviour were checked against the Odoo 19 documentation
and the Odoo 19 code for units of measure, delivered quantities, deliveries, purchase control policies and Point of
Sale weighing in October 2026. The IoT and Barcode apps are Enterprise only, absent from Odoo 19 Community. The worked
example is illustrative and wasn't run on a live database, so there are no screenshots; labels can vary slightly with
your installed apps and language.*

Selling by weight and need pieces and kilos on the same line? See [Odoo implementation](/services/odoo-implementation/)
to work out how far the standard setup takes you before anything is customised.
