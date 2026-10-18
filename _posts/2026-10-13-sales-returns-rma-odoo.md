---
layout: post
title: "Sales Returns in Odoo: Return Stock and Credit Note Together"
date: 2026-10-13 09:00:00 +0530
tags: [Odoo, Odoo 19, Setup, Sales, Invoicing, Inventory Management, Customer Management, After Sales]
hub: sales
description: "Handle sales returns in Odoo 19 step by step: return the delivery, send goods to stock or inspection, and issue the credit note so stock and books agree."
faqs:
  - q: "Does validating a return in Odoo create the credit note automatically?"
    a: "No. Validating the return only lowers the Delivered quantity on the sales order. You still create the credit note, either with the Credit Note button on the invoice or, for products invoiced on delivered quantities, with Create Invoice on the order, which turns the negative quantity into a credit note."
  - q: "Can returned goods go to a separate location for inspection?"
    a: "Yes. Create a Receipt-type operation type whose destination is a returns location, then set it as the Returns Type on your Delivery Orders operation type. Returns created from deliveries then land in that location instead of sellable stock."
  - q: "Does Odoo 19 have RMA numbers or return reasons?"
    a: "Not as standard. Odoo 19 has no RMA document or return-reason field, so most teams use the return transfer's reference as the RMA number and put the reason on the credit note. Odoo 20 adds configurable return reasons for returns requested through the customer portal."
---

**Short answer:** in Odoo 19 a sales return is two linked documents. Open the validated delivery from the sales order,
click **Return**, enter the quantities coming back and validate the return when the goods arrive: Odoo lowers the
order's **Delivered** quantity. Then issue the credit note, either with **Credit Note** on the invoice or, for products
invoiced on delivered quantities, with **Create Invoice** on the order, which turns the negative quantity into a credit
note. Stock and accounting only agree once both halves are done.

This is the hands-on setup guide. For how credit notes fit into billing in general, start with my explainer on
[customer invoicing in Odoo](/blog/2026/08/21/customer-invoicing-in-odoo/).

## Applies to

- **Odoo version:** Odoo 19. I also checked the Odoo 20 documentation. The return and credit note steps read the same,
  but Odoo 20 adds customer-initiated returns: an **Allow Spontaneous Returns** setting in Inventory with a return
  window in days, configurable **Return Reasons**, and a **Request a return** pop-up in the customer portal. None of
  that exists in Odoo 19.
- **Edition:** Community and Enterprise for returns, credit notes and the Repairs app. Returns, refunds and repairs
  started from a Helpdesk ticket are Enterprise only, because Helpdesk is an Enterprise app.
- **Apps:** Sales, Inventory and Invoicing (or Accounting). Optional: Repairs and Helpdesk.

## Before you start

1. **Choose the invoicing policy for returnable products.** On the product form, **Invoicing Policy** is **Ordered
   quantities** or **Delivered quantities**. With Delivered quantities, a validated return pushes the order line's
   quantity to invoice below zero, so Odoo can raise the credit note from the order. With Ordered quantities it can't,
   because the ordered quantity doesn't change. More in
   [invoicing policies in Odoo Sales](/blog/2026/08/19/invoicing-policies-in-odoo-sales/).
2. **Decide where returned goods go.** By default, a return from a delivery comes back through the warehouse's
   **Receipts** operation type into its destination: `WH/Stock` in a one-step warehouse, where the goods are sellable
   straight away. If returns need checking first, set up a returns location (Part A below).
3. **Storage Locations is ticked** in **Inventory ‣ Configuration ‣ Settings**, if you want that separate location.
4. **Agree the refund rule:** money back, or credit against the next invoice.

## Step by step

### Part A: a returns location for inspection (once)

1. Go to **Inventory ‣ Configuration ‣ Locations**, click **New** and create an internal location, for example
   `WH/Returns`. Set its **Parent Location** to the warehouse itself (`WH`), not to `WH/Stock`. Deliveries reserve
   from `WH/Stock` and the locations below it, so goods in a sibling location aren't picked for customers.
2. Go to **Inventory ‣ Configuration ‣ Operations Types**, click **New** and create a type called, say, **Customer
   Returns**: **Type of Operation** = **Receipt**, a **Sequence Prefix** such as `RET`, your warehouse, and `WH/Returns`
   as the **Destination Location**.
3. Open the **Delivery Orders** operation type and set **Returns Type** to **Customer Returns**. Every return created
   from a delivery now uses this type and lands in `WH/Returns`.

### Part B: receive the goods back

4. Open the sales order (**Sales ‣ Orders ‣ Orders**), click the **Delivery** smart button and open the validated
   delivery.
5. Click **Return**. The pop-up lists each delivered product. In Odoo 19 each line starts at 0: type the quantity
   coming back, or click **Return All** for everything not yet returned. Remove lines you don't need with the bin icon.
6. Click **Return**. Odoo creates the return transfer, with a **Source Document** reading "Return of WH/OUT/...". If
   the customer is shipping the goods, print the **Return slip** report from the transfer's gear menu to go in the
   parcel.
7. When the goods arrive, check the quantities and click **Validate**. The order's **Delivered** column drops by the
   returned quantity.

If the customer wants replacements rather than credit, click **Return for Exchange** in step 6 instead. Odoo creates
the return and a new delivery for the same quantity, so once both are done the Delivered quantity is back where it
was and no credit note is needed.

### Part C: the credit note

8. **Products on Delivered quantities:** the order now shows **To Invoice**. Click **Create Invoice**, keep **Regular
   invoice** and click **Create Draft**. Because the total is negative, Odoo creates a draft credit note for the
   returned units, at the order's prices and taxes, instead of an invoice. Check it and click **Confirm**.
9. **Products on Ordered quantities** (or if you prefer working from the invoice): open the invoice from the order's
   **Invoices** smart button and click **Credit Note**. Fill in **Reason displayed on Credit Note**, check **Journal**
   and **Reversal date**, and click **Reverse**. Edit the draft so it holds only the returned products and
   quantities, then **Confirm**.
10. Use step 8 or step 9 for a given return, never both, or the customer is credited twice.
11. **Refund or keep as credit.** A posted credit note is an outstanding credit on the customer. Click **Pay** on it
    to record money paid back, or leave it: the customer's next invoice shows a banner offering to allocate the
    outstanding credit.

### Recording why it came back (the "RMA" part)

Odoo 19 has no RMA document, RMA number or return-reason field. What works in practice:

- Use the return transfer's reference (`WH/RET/00001`, for example) as the RMA number you give the customer.
- Put the reason on the credit note so it prints as its reference: **Reason displayed on Credit Note** does this
  when you work from the invoice (step 9); after step 8, type it in **Customer Reference** on the credit note's
  **Other Info** tab. Note the details in the return's chatter too.
- With Helpdesk (Enterprise), open the team in **Helpdesk ‣ Configuration ‣ Helpdesk Teams** and tick **Returns**,
  **Refunds** and, if you need it, **Repairs** in its **After-Sales** section. The ticket then holds the whole case:
  its **Return** button creates the return with a **Return Location**, and **Refund** creates the credit note from
  the ticket.

## Worked example: a dealer returns damaged fans

A ceiling-fan manufacturer (illustrative) ships 20 fans to a dealer on one sales order. The fans are invoiced on
**Delivered quantities**, the invoice for 20 is posted, and the dealer reports 4 fans damaged in transit. Part A is
already set up.

| Step | Document | Order line after the step |
|---|---|---|
| Return 4 from the delivery | Return transfer, destination `WH/Returns` | Delivered 20, Invoiced 20 |
| Fans arrive, return validated | Return done | Delivered 16, Invoiced 20, **To Invoice** |
| Create Invoice on the order | Credit note for 4 fans, confirmed | Delivered 16, Invoiced 16, **Fully Invoiced** |

- The dealer stays on credit terms, so nobody clicks **Pay**: the credit note is allocated against the dealer's next
  invoice.
- In `WH/Returns`, the storekeeper inspects the fans. Three are repairable: with the Repairs app installed, they open
  the validated return and use the gear (**Actions**) menu, **Create Repair**, which links the repair order to the
  return. The fourth is beyond repair and is scrapped from the same return (gear menu, **Scrap**), which takes it out of
  `WH/Returns`. No damaged fan ever sat in sellable stock.

Had the dealer wanted four new fans instead, **Return for Exchange** would have avoided the credit note altogether.

## What you should see

- **On the return:** **Source Document** "Return of WH/OUT/...", and destination `WH/Returns` (or `WH/Stock` without
  Part A).
- **On the sales order:** a lower **Delivered** quantity; with Delivered quantities, **To Invoice** until the credit
  note exists, then **Fully Invoiced**. The **Invoices** smart button counts the invoice and the credit note.
- **In the customer portal:** the order page lists the return under **Returns**, as "Awaiting arrival" and then
  "Received".

## Troubleshooting

**There's no Return button on the delivery.**
Only validated (done) transfers can be returned. If the goods never left, cancel or reduce the delivery instead.

**"No products to return".**
Everything on that delivery has already been returned.

**The Delivered quantity didn't drop.**
The return isn't validated yet, or someone unticked **Update quantities on SO/PO** on the return line. That column is
hidden and only appears in developer mode; it's ticked by default.

**Create Invoice made nothing, or the order never showed To Invoice.**
The product is invoiced on Ordered quantities. Use **Credit Note** on the invoice (step 9).

**After a credit note, the order shows To Invoice again (Ordered quantities).**
Odoo compares ordered with invoiced quantities, so the credited units look invoiceable. Lower the order line's
quantity to what the customer kept, or use Delivered quantities for returnable products.

**Returned goods went straight into sellable stock.**
The Delivery Orders operation type has no custom **Returns Type**, so the return used Receipts and `WH/Stock`. Set up
Part A, or change the **Destination Location** on the draft return before validating it.

**The customer was credited twice.**
Someone used both step 8 and step 9. Cancel the extra credit note (reset it to draft first if it's posted).

## Related setup

- [Backorders in Odoo 19: partial deliveries and receipts](/blog/2026/10/13/backorders-odoo/), for shortfalls that
  aren't returns
- [How to set up a warehouse and storage locations in Odoo 19](/blog/2026/09/23/how-to-set-up-warehouse-locations-odoo/)
- [Invoicing policies in Odoo Sales: ordered vs delivered](/blog/2026/08/19/invoicing-policies-in-odoo-sales/)
- [Odoo Repairs: managing repair jobs end to end](/blog/2026/09/10/odoo-repairs/)
- [How to set up a helpdesk in Odoo](/blog/2026/09/28/how-to-set-up-helpdesk-odoo/)
- Returns, dealer credit and inspection all landing at once? See [Odoo implementation](/services/odoo-implementation/).

## Official references

- Odoo 19 documentation: [Returns and refunds](https://www.odoo.com/documentation/19.0/applications/sales/sales/products_prices/returns.html)
- Odoo 19 documentation: [Credit notes and refunds](https://www.odoo.com/documentation/19.0/applications/finance/accounting/customer_invoices/credit_notes.html)
- Odoo 19 documentation: [Invoicing policy](https://www.odoo.com/documentation/19.0/applications/sales/sales/invoicing/invoicing_policy.html)
- Odoo 19 documentation: [Operation types](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/warehouses_storage/inventory_management/operation_type.html)
- Odoo 19 documentation: [Repair orders](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/repairs/repair_orders.html)
- Odoo 19 documentation: [After-Sales services (Helpdesk)](https://www.odoo.com/documentation/19.0/applications/services/helpdesk/advanced/after_sales.html)

*How this guide was checked: menu paths, field names and Enterprise-only status were checked against the Odoo 19
documentation and the Odoo 19 code for the return wizard, operation types, sales order invoicing and credit notes in
October 2026. The Odoo 19 returns page says return quantities default to the delivered quantities; in the Odoo 19 code
they start at 0, with a **Return All** button, so this guide follows the code. The worked example is illustrative and
wasn't run on a live database, so there are no screenshots; labels can vary slightly with your installed apps and
language.*
