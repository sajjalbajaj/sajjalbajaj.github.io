---
layout: post
title: "Odoo Packages and Product Packaging: Keep the Identities Clear"
date: 2026-11-08 09:00:00 +0530
tags: [Odoo, Odoo 19, ERP, Best Practices, Inventory, Barcode, Logistics, Warehouse Management]
hub: inventory
description: "Distinguish Odoo physical packages from product pack quantities so receiving, internal moves and shipping records describe what staff actually handle."
faqs:
  - q: "Is a six pack definition the same as a specific shipping box?"
    a: "No. A product packaging quantity describes a commercial or handling unit. A physical package identifies a container with actual contents."
  - q: "Does a reusable package setting manage customer deposits?"
    a: "Do not assume that. The documented reusable package use supports particular warehouse workflows; deposit accounting and return obligations require separate design."
---

**Short answer:** distinguish a product's pack quantity from a particular container holding stock. The first tells the system how many items a pack represents. The second helps identify and move actual contents. Using the concepts consistently makes scanning, storage and shipping records easier to reconcile with the warehouse floor.

## Applies to

Odoo 19 Inventory package records and product units or packagings. Carrier features and reusable container accounting depend on the wider configuration. The corresponding Odoo 20 references were reviewed in October 2026; use the documentation for your installed release when configuring screens and fields.

## Which question does each concept answer?

A product packaging definition can describe an item sold or purchased in a fixed quantity, such as a case of identical units. It does not necessarily identify one particular case that currently sits in a warehouse. Many physical cases may use the same definition.

A package represents a physical container holding one or more products. Odoo documents packages for moving grouped contents, storing goods and shipping. Its identity helps answer where those contents are and which container moved.

I would explain the distinction using the business's actual goods. Show staff a product label, a case quantity label and a package identifier. If they cannot tell which action each code should cause, review the design before introducing more scanners or automated routing.

## How should receiving use the distinction?

First establish the actual product quantity and tracking identity. Then decide whether the received goods should be associated with identifiable packages. The package record should reflect the contents the business intends to handle together.

A supplier's case barcode may add a configured number of items without uniquely identifying the physical case. Do not assume repeated scans of the same product packaging code establish separate container identities. Confirm the intended behaviour in the receiving workflow.

Keep partial contents understandable. If a case is opened or some items are moved out, the current package contents need to reflect that event. An unchanged package label does not prove that its original quantity remains inside.

## What does package type add?

Odoo documents package types as useful for shipping weight and container characteristics. The type describes the kind of container, while the package record identifies the particular grouping of stock. A type is not a substitute for accurate current contents.

Review container weight where it affects shipping calculations. Product weight and the container's own weight answer different questions. A correct item quantity can still produce an incorrect carrier charge if the packaging assumptions are wrong.

The documented Package Use setting includes a reusable option for cluster picking arrangements. Do not treat that setting as a complete reusable asset register or customer deposit ledger. Those business obligations need their own process and evidence.

## Worked example: mixed products packed for one customer

Imagine a pet supplies distributor preparing an order with several product lines. Some products are purchased in cases, but the customer orders individual quantities. The picker opens supplier cases and groups the selected items into a shipping box.

The product packaging definitions explain the original purchase units. The shipping package records the actual mixed contents being dispatched. The packing team checks the customer order against those contents and uses the appropriate container type for the shipment.

If one item is removed before dispatch, the package contents are updated through the supported workflow. The team does not change the product's general case definition merely because this particular box now contains a different quantity.

## What should happen during internal moves?

Decide whether staff move the whole package or selected contents. Odoo supports package related movement options, but the physical action must match the recorded action. Moving a container on paper while leaving some contents behind creates a location discrepancy.

Keep lot or serial identity within the contents where tracking applies. A package can make movement convenient without replacing the product's traceability requirements. A later investigation may need both the container reference and the individual product tracking records.

Review repacking and consolidation. Combining items from several containers should preserve an understandable history of the resulting stock. The operating procedure should tell staff when to create, update or stop using a package identity rather than reusing labels indefinitely.

## When do physical packages fit?

They fit workflows where identifiable containers are stored, moved or shipped as meaningful units. They can be valuable for mixed cartons, pallets and grouped picking. The benefit depends on maintaining contents as the physical grouping changes.

They may add unnecessary administration if stock is always handled individually and container identity has no operating value. Conversely, customer owned containers or deposit schemes can require more than ordinary package tracking. Model the actual obligation before selecting a convenient field.

## Common mistakes

Common mistakes include confusing a generic case barcode with a unique package identifier, keeping stale contents after repacking and expecting reusable package settings to manage commercial deposits. Another is recording a whole package move when only selected items physically moved.

Rehearse receiving a case, opening it, moving part of its contents and packing a mixed delivery. The records should explain every quantity and location without relying on someone's memory. That evidence shows whether the distinction between product packaging and physical packages is working in practice.

## Related

Read [Odoo Pet Supplies: Keep Cases, Packs and Individual Units Consistent](/blog/2026/11/03/odoo-pet-supplies-casepacks-units/) for the connected workflow.

## Official references

1. [Packages](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/product_management/configure/package.html)
1. [Units of measure](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/product_management/configure/uom.html)

*How this article was checked: official Odoo 19 documentation and the corresponding Odoo 20 pages were reviewed in October 2026. The examples are illustrative, not client results or tests on a live database.*

For help designing this workflow, see my [Odoo consulting services](/services/odoo-consulting/).
