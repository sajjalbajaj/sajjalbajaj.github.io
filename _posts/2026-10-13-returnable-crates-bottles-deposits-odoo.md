---
layout: post
title: "Returnable Crates, Bottles and Deposits in Odoo"
date: 2026-10-13 10:00:00 +0530
tags: [Odoo, Odoo 19, Inventory, Inventory Management, Dairy, Food and Beverage, Distribution, Sales]
hub: inventory
description: "Returnable crates, bottles and deposits in Odoo 19: standard pieces for tracking containers, charging and refunding deposits, and what needs custom work."
faqs:
  - q: "Does Odoo have a built-in deposit feature for crates and bottles?"
    a: "Not as one feature in Odoo 19. You combine standard pieces: the container as a tracked product, the deposit charged as a price or a separate product line, empties recorded as returns, and refunds through a credit note or a deduction on the next invoice."
  - q: "How can I see how many crates a customer is holding?"
    a: "Out of the box, Moves History can list every crate movement for that customer, with a custom filter, but not as a running balance. If you give a customer its own customer-type location as its Customer Location, the Locations report shows what sits there. A balance on the contact or order needs a small customisation."
  - q: "Should a crate deposit be booked as income?"
    a: "That is a question for your accountant. Deposits are usually refundable, so some businesses record them as money owed back to the customer. Odoo 19 lets the deposit product's Income Account point at a liability account if that's what your accountant wants."
---

**Short answer:** Odoo 19 has no single "returnable deposit" feature, but its standard apps cover most of the job.
Set up the crate or bottle as a tracked product so Odoo counts it, charge the deposit either as that product's price
or as a separate deposit line, record empties coming back as returns, and refund through a credit note or a deduction
on the next invoice. What usually needs a small customisation is a running deposit balance per customer and adding
deposit lines automatically.

Returnable containers come up in my industry posts on [water and beverage](/blog/2026/08/24/erp-for-water-and-beverage/)
and [dairy and milk](/blog/2026/08/25/erp-for-dairy-milk-business/) businesses. This post shows how the pieces fit.

## Applies to

- **Odoo version:** Odoo 19. I also checked the Odoo 20 documentation. On the product form, Odoo 20 replaces the
  **Track Inventory** checkbox with a **Tracking** field (By Quantity, By Lots or By Unique Serial Number), and its
  Rental deposits page adds quotation templates as another way to include the deposit line.
- **Edition:** Community and Enterprise. The deposit pattern below comes from the Rental documentation, and Rental
  is Enterprise only, but the same steps work in Sales without it.
- **Apps:** Inventory, Sales, Invoicing or Accounting; Point of Sale or eCommerce if you sell there.

## Is there a native deposit feature in Odoo?

No. In the Odoo 19 documentation, deposits mostly mean a rental security deposit or money paid into a Point of Sale
customer account, and neither follows a container out and back. What Odoo does have is the building blocks: tracked
products, customer locations, return transfers, credit notes, optional products and negative quantities.

## How do you track the crates and bottles themselves?

Create the container as its own product: **Product Type** set to **Goods**, **Track Inventory** ticked, tracked
**By Quantity**. Crates in your yard are then counted like any stock, and every delivery takes them out.

- **Kegs or gas cylinders:** track **By Unique Serial Number** to know which cylinder is with which customer (see
  [lot and serial numbers](/blog/2026/08/12/lot-and-serial-number-tracking-in-odoo/)).
- **Not packagings:** in Odoo 19 a packaging is a disposable unit, such as a case of 24, for ordering in multiples.
  It has no stock of its own.
- **Not packages:** a package records what's inside a container and where it is, but you can't price or invoice it.
- **Someone else's crates:** the **Consignment** setting puts an owner on stock, and stock owned by others stays out
  of your valuation.

## How do you know what each customer is holding?

A validated delivery moves goods to a customer-type location, out of your stock. Two ways to see what's out:

1. **No setup:** **Inventory ‣ Reporting ‣ Moves History**, filtered by the crate product plus a custom filter on
   the transfer's contact, lists every movement both ways. You do the adding up.
2. **A location per customer:** every contact has a **Customer Location** field (**Sales & Purchase** tab,
   **Inventory** section). Create a customer-type location for a key account and select it there. Odoo keeps a
   quantity for every location a tracked product moves into, so **Inventory ‣ Reporting ‣ Locations**, with the
   **Internal Locations** filter removed, shows the crates at that customer (filter by product, because everything
   delivered lands there). For hundreds of customers, automate creating these locations.

## How do you charge and refund the deposit?

There are two clean patterns:

- **Price the container.** Give the crate product a sales price equal to the deposit and the invoicing policy
  **Delivered quantities**. One order line moves the crates and charges for them, following what actually left.
- **A separate deposit product.** The Odoo 19 Rental documentation handles security deposits this way: a **Service**
  product, **Delivered quantities**, the deposit as its **Sales Price**, your choice of sales taxes, and listed in
  the main product's **Optional Products** so it's offered with it. To refund, issue a credit note from the deposit
  invoice and set the line's delivered quantity back to 0. The container stays at zero price, for stock only.

Refunds use the **Credit Note** button on the posted invoice, or a negative line on the next invoice. Whether a
deposit attracts tax, or counts as income, is for your tax adviser and accountant; Odoo applies the taxes and
accounts on the product.

## How do you record empties coming back?

- **Against the original delivery:** on the validated delivery, click **Return**, adjust the quantity and confirm.
  When the return is validated, the sales order's delivered quantity drops, so an order not yet invoiced bills only
  the crates the customer kept. If it was already invoiced, follow with a credit note.
- **On the next order:** Odoo 19 accepts a negative quantity on a sales order line. Reading the 19.0 code, confirming
  the order turns that line into a return transfer from the customer instead of a delivery, and once validated it
  counts as negative delivered, so it invoices as a deduction. The documentation doesn't cover this, so test it on a
  copy of your database first.

## What about Point of Sale and eCommerce?

In **Point of Sale**, add the deposit to the drink's **Optional Products** and tick **POS Optional Products**, so the
cashier is offered it. For empties, add the container with a negative quantity, or use a preset with **Return
mode**, which enters every item as negative. For a tracked container, Odoo 19 creates a return transfer for those
lines.

In **eCommerce**, optional products appear in a pop-up when the shopper adds the main product to the cart. The shopper
can leave the deposit out, so a compulsory web deposit needs custom work.

## What usually needs a small customisation?

- A running balance of crates and deposit money per customer, shown on the contact, order, delivery slip and invoice.
- Adding the deposit line automatically from the product (each 20-litre jar adds one jar deposit), rather than
  relying on an optional-product prompt.
- An "empties collected" field on the delivery, so the driver records returns on the same document.
- Rules for containers that never come back, such as converting the deposit after a set period.

## When it fits and when it doesn't

The standard pieces work when customers and container types are manageable in number. They get clumsy for
high-volume route delivery, where a driver collects empties at every stop: there, a customer balance and a quick way
for drivers to record empties are worth building. If you rent equipment by time, such as water dispensers, Odoo
Rental (Enterprise) fits better.

## Worked example: milk crates to retail shops

An illustrative dairy delivers milk to shops in plastic crates. The crate is a tracked product priced at the deposit,
invoiced on delivered quantities, and Sharma Dairy Store has its own customer location.

| Today | Order line | What Odoo creates |
|---|---|---|
| Crates out | Crate, quantity 40 | Delivery of 40 crates with the milk |
| Empties back | Crate, quantity -36 | Return transfer of 36 crates |

After the driver validates both, the store's location shows 4 more crates than yesterday, and the invoice charges
the deposit on 40 crates less 36, a net of 4. If those 4 never come back, the deposit already charged covers them.

## Common mistakes

- **Untracked containers:** with no stock figure, there is nothing to count or reconcile.
- **Ordered quantities on the deposit:** customers are charged for crates that never left the yard.
- **Fixing crate counts with inventory adjustments:** the movement loses its link to the customer and the deposit.
- **Booking deposits as sales without asking your accountant.**

## Related

- [Product types, units of measure and packaging in Odoo](/blog/2026/08/12/odoo-product-types-units-of-measure-packaging/)
- [Sales returns in Odoo: return stock and credit note together](/blog/2026/10/13/sales-returns-rma-odoo/)
- [Customer invoicing in Odoo](/blog/2026/08/21/customer-invoicing-in-odoo/)
- [Odoo Point of Sale](/blog/2026/09/09/odoo-point-of-sale/)
- Case studies: a [family dairy farm going direct to consumer](/case-studies/dairy-farm-erp-direct-to-consumer/),
  which launched glass bottle returns alongside home delivery, and an
  [organic dairy subscription brand](/case-studies/organic-dairy-subscription-erp/)

## Official references

- Odoo 19 documentation: [Product type](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/product_management/configure/type.html)
- Odoo 19 documentation: [Packages](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/product_management/configure/package.html)
- Odoo 19 documentation: [Consignment](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/shipping_receiving/daily_operations/owned_stock.html)
- Odoo 19 documentation: [Contacts](https://www.odoo.com/documentation/19.0/applications/essentials/contacts.html)
- Odoo 19 documentation: [Returns and refunds](https://www.odoo.com/documentation/19.0/applications/sales/sales/products_prices/returns.html)
- Odoo 19 documentation: [Credit notes](https://www.odoo.com/documentation/19.0/applications/finance/accounting/customer_invoices/credit_notes.html)
- Odoo 19 documentation: [Manage deposits (Rental)](https://www.odoo.com/documentation/19.0/applications/sales/rental/rental_orders/manage_deposits.html)
- Odoo 19 documentation: [Point of Sale: returns and refunds](https://www.odoo.com/documentation/19.0/applications/sales/point_of_sale/use.html)
- Odoo 19 documentation: [Optional products](https://www.odoo.com/documentation/19.0/applications/sales/sales/sales_quotations/optional_products.html)

*How this article was checked: features, menu paths and field names were checked against the Odoo 19 documentation
and the Odoo 19 source (stock moves and quants, sale and Point of Sale returns, the contact's customer location) in
October 2026. The worked example is illustrative and wasn't run on a live database, so there are no screenshots;
labels can vary slightly with your installed apps and language.*

If returnable containers and deposits are a daily headache in your business, I can help you design the setup and
the small customisations around it. See [Odoo implementation](/services/odoo-implementation/).
