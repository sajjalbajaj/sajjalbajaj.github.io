---
layout: post
title: "Backorders in Odoo 19: Partial Deliveries and Receipts"
date: 2026-10-13 08:00:00 +0530
tags: [Odoo, Odoo 19, Setup, Inventory, Inventory Management, Warehouse Management, Logistics, Distribution]
hub: inventory
description: "Understand Odoo 19 backorder choices, partial delivery and receipt quantities, cancellation consequences and invoice checks, with a review worksheet."
last_modified_at: 2026-11-27
faqs:
  - q: "What does No Backorder cancel?"
    a: "It closes the remaining demand on that transfer while validating the quantities actually processed. It does not automatically rewrite the original order quantity or settle the commercial difference."
  - q: "Why is no backorder question displayed?"
    a: "Check Create Backorder on the relevant operation type. Always creates the remaining transfer without asking; Never cancels the remainder without asking."
  - q: "Can Fully Delivered appear when the original ordered quantity was not all shipped?"
    a: "Yes. The reviewed Odoo 19 sales delivery-status logic can show Fully Delivered when related transfers are done or cancelled. Inspect delivered quantities and the commercial decision as well as the label."
---

**Short answer:** In Odoo 19, a partial delivery or receipt can create a backorder for the remaining quantity, or cancel that remainder on the transfer. Shipping policy controls when goods are released, while invoicing and bill-control policies determine the quantities proposed financially. Check all three decisions before closing a shortage.

For the overall warehouse flow, see [shipping and receiving](/blog/2026/08/14/shipping-and-receiving-in-odoo/). [Download the blank partial-delivery review worksheet](/assets/downloads/partial-delivery-review.csv) to record the physical, commercial and billing decisions together.

## Which settings answer different questions?

The [operation type documentation](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/warehouses_storage/inventory_management/operation_type.html) and [invoicing policy reference](https://www.odoo.com/documentation/19.0/applications/sales/sales/invoicing/invoicing_policy.html) describe distinct controls.

| Control | Question it answers | What it does not establish |
| --- | --- | --- |
| Shipping policy | Ship available goods or wait for all products? | Whether the customer still wants the shortage |
| Create Backorder | Keep or cancel remaining transfer demand? | The final commercial order quantity |
| Sales invoicing policy | Invoice ordered or delivered quantities? | Whether the invoice amount has been agreed or paid |
| Purchase control policy | Draft the bill from ordered or received quantities? | Whether the vendor's disputed balance is resolved |

The main workflow uses Inventory with Sales or Purchase as relevant. Custom routes, connectors and approval rules can change the result.

## What is different when checking Odoo 20?

The [Odoo 20 operation type reference](https://www.odoo.com/documentation/20.0/applications/inventory_and_mrp/inventory/warehouses_storage/inventory_management/operation_type.html) retains Ask, Always and Never choices. The reviewed [20.0 transfer source](https://github.com/odoo/odoo/blob/20.0/addons/stock/models/stock_picking.py) labels the partial-shipment option **As soon as possible, with back orders**, compared with **As soon as possible** in 19.0.

The [20.0 lead-time reference](https://www.odoo.com/documentation/20.0/applications/inventory_and_mrp/inventory/warehouses_storage/replenishment/lead_times.html) also uses **Delivery Time**, where the 19.0 page uses **Customer Lead Time**. Check the actual build instead of assuming a changed label means a different commercial policy.

## How should backorder behaviour be configured?

Open **Inventory ‣ Configuration ‣ Operations Types**. Review each relevant warehouse's delivery and receipt operation types.

* **Ask:** the user decides at partial validation.
* **Always:** Odoo creates a backorder without that question.
* **Never:** Odoo cancels the remaining quantity without asking.

Choose the setting from the operation's agreed process. A habitual answer from one team is not sufficient reason to change every warehouse.

On the quotation's **Other Info** tab, review **Shipping Policy**. **As soon as possible** supports partial release; **When all products are ready** waits for the whole order. Inspect the applicable transfer policy as well, especially in a multi-step route.

## How do you process a partial delivery?

1. Open the delivery and confirm the source order, product and unit of measure.
2. Enter the quantity actually being shipped. Set unshipped lines to zero rather than leaving an assumed full quantity.
3. Review lots, packages and the actual reservation where relevant.
4. Click **Validate**.
5. If asked, choose **Create Backorder** when the remaining goods will follow, or **No Backorder** only when closing that remainder is authorised.
6. Open the resulting transfer and sales order to inspect delivered quantity, remaining demand and the invoice proposal.

The [documented partial shipment flow](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/shipping_receiving/setup_configuration/multipack.html) links the new backorder from the original transfer's chatter. Check that relationship rather than creating an unrelated manual delivery.

## Which choice fits the shortage?

| Situation | Transfer decision | Financial and commercial follow up |
| --- | --- | --- |
| Customer accepts available goods now and the rest later | Retain the remainder as a backorder | Confirm the later promise and invoicing basis |
| Customer accepts only what ships | Close remaining transfer demand with authorisation | Reconcile the order quantity and any existing invoice |
| Vendor sends part and promises the balance | Retain receipt backorder | Review the received quantity and bill-control policy |
| Vendor confirms the balance will never arrive | Authorise closing the receipt remainder | Review purchase commitment, bills and replenishment |
| Team cannot explain the difference | Pause the closure decision | Identify the cause and obtain the owner's decision |

A cancelled backorder is not proof that the customer agreed to a short delivery.

## What do the numbers look like?

This is an illustrative scenario, not a customer result. An order requires 100 boxes of fasteners and 40 hinges. Only 70 boxes and all 40 hinges are dispatched.

With a backorder, the first delivery records 70 boxes and 40 hinges; the outstanding transfer holds 30 boxes. Under **Delivered quantities**, the first invoice proposal follows those delivered amounts, subject to what has already been invoiced.

When the later 30 boxes are delivered, check the cumulative delivered and invoiced figures before creating the next invoice. Do not create another invoice for the original 100 just because that remains the order quantity.

If the customer instead accepts a final quantity of 70, closing the remaining transfer does not automatically change an **Ordered quantities** billing basis. Finance must review the commercial quantity and any posted invoice before correcting the amount.

For a purchase example, 150 units received against 200 ordered leaves 50 for the receipt decision. The [purchase control policy](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/purchase/manage_deals/control_bills.html) determines whether the draft bill follows ordered or received quantities. Inspect an edited draft bill separately; the control policy is not a guarantee that nobody can change it.

## Why can a status look complete when quantities differ?

The reviewed [Odoo 19 sales delivery-status code](https://github.com/odoo/odoo/blob/19.0/addons/sale_stock/models/sale_order.py) can show **Fully Delivered** when the related transfers are all done or cancelled.

That label describes the transfer situation. It does not prove every originally ordered unit physically arrived with the customer. Compare ordered, delivered, cancelled and invoiced quantities with the authorised customer decision.

## How should common exceptions be investigated?

| Symptom | First check | Next result to verify |
| --- | --- | --- |
| No backorder question | Operation type set to Always or Never | Correct remainder handling after validation |
| Waiting despite some stock | Shipping policy, reservations and upstream operations | Whether the intended quantity can actually be released |
| Invoice includes unshipped units | Product invoicing policy and prior invoices | Correct cumulative amount after approved correction |
| Receipt balance no longer expected | Vendor confirmation and open purchase demand | Authorised closure and updated supply expectation |
| Transfer appears after an order edit | Quantity changed relative to supplied quantity | Intended new demand, rather than an accidental duplicate |

Do not cancel and recreate transfers merely to remove a warning. For posted financial documents, use the approved correction process.

## How should the worksheet be used?

Use one row per product and decision. Record original demand, completed quantity and the remaining quantity in the same unit, then the customer or supplier instruction, selected option, resulting transfer and billing basis.

For the illustrative 100-box order, 100 minus 70 leaves 30. The decision field must say whether those 30 remain promised or have been commercially closed. An empty transfer list cannot answer that question.

Keep evidence references in their authorised location and record an owner for unresolved cases. The CSV is blank and contains no project data or automatic approval logic.

## Sources and review

Reviewed on 27 November 2026: the linked 19.0/20.0 documentation, transfer and backorder-wizard source, sales delivery-status logic and the [Odoo 19 lead-time guide](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/warehouses_storage/replenishment/lead_times.html). Proposed cases were not executed on a live database.

For help aligning warehouse decisions with billing, see [Odoo implementation](/services/odoo-implementation/).
