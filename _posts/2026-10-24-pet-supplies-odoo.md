---
layout: post
title: "Odoo for Pet Supplies: Retail, Wholesale and Replenishment"
date: 2026-10-24 10:00:00 +0530
tags: [Odoo, Odoo 19, Pet Supplies, Retail, Wholesale, Inventory, eCommerce, POS]
hub: industries
description: "A connected Odoo setup for pet food and accessory brands selling through shops, wholesale accounts and an online store."
faqs:
  - q: "Can Odoo track expiry dates for pet food?"
    a: "Yes. Odoo Inventory supports lot tracking and expiration dates. Enable tracking on the product, record lot details on receipt, and configure FEFO where stock should be picked by earliest removal date."
  - q: "Can the same Odoo products be sold at a shop and online?"
    a: "Odoo can connect Point of Sale, eCommerce, Sales and Inventory workflows. Configure product data, stock locations and channel rules, then test refunds, bundles and reservations across channels."
  - q: "How should wholesale pet food packs be configured?"
    a: "Use product specific packaging and units of measure so cases, bags and individual units are handled consistently in purchasing, stock and sales."
---

Pet supply businesses often sell the same products through a retail counter, an online store, marketplaces and wholesale accounts. Food also brings expiry dates and batch traceability, while accessories add sizes, colors and product variants. Odoo can connect these channels through shared product, stock and order records if the catalog is designed with care.

## Build a product catalog that staff can use

Standardize internal references, barcodes, brand, category, size, flavor and pack quantity. Use product variants when the options are genuinely variations of one item, such as a harness size or food flavor with the same product structure. Keep distinct items as separate products when they have different barcodes, supplier terms or tracking requirements.

Configure units and product specific packaging. A food product might be purchased in a case of twelve bags and sold as a case or a single bag. Check the conversion between the purchase and sales units. A pack size entered incorrectly can make stock appear available when the shelf is empty.

## Track food batches and expiration

For food with a shelf life, enable lot tracking and expiration dates on the relevant products. Record the supplier's lot and expiry information when stock is received. Odoo supports expiration, best-before, removal and alert dates for tracked products. FEFO can direct picking toward the lot with the earliest removal date when configured on a storage location or product category.

The process only works when staff scan or enter the right lot and date at receipt and pick from the suggested lots. Use a small pilot to test split lots, damaged bags, short-dated deliveries, returns and a product recall. Define what happens to a bag returned from a customer, since it may not be suitable to return to saleable stock.

## Connect retail, online and wholesale sales

Configure one stock location per store or warehouse, with replenishment rules between them if products move across locations. Point of Sale can handle counter orders and display stock information when inventory tracking is configured. eCommerce can publish product pages and take online orders from shared catalog data. Wholesale customers may need separate pricelists, minimum order quantities, case packaging or payment terms.

Set clear reservation rules. Decide when online orders reserve a unit, how long unpaid carts hold stock, and which location fulfills a click and collect order. Test a sale at the counter while an online order is being picked. Also test partial delivery, return, exchange and discount behavior so finance and stock remain aligned.

## Replenish without overbuying

Use purchase lead times and reorder points based on actual demand, seasonal changes, supplier minimums and shelf life. Fast moving food may need more frequent small orders, while bulky accessories may justify a different safety stock. Review forecasted stock by location, not only the company wide total.

Track margins by category and channel. Include freight, marketplace fees, promotions and shrinkage when reviewing profitability. Pet food can have high sales volume but a short date window, so revenue alone is not enough to measure performance.

Start with a narrow range, one shop and one online channel. Confirm that product scans, lot assignments, stock counts, customer returns and replenishment produce the expected result before importing the full catalog.

For help connecting retail and distribution workflows, see [Odoo implementation services](/services/odoo-implementation/).

Based on the official [Odoo 19 packaging documentation](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/product_management/configure/packaging.html), [expiration dates documentation](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/product_management/product_tracking/expiration_dates.html), and [Point of Sale documentation](https://www.odoo.com/documentation/19.0/applications/sales/point_of_sale.html).
