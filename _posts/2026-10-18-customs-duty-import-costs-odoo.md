---
layout: post
title: "Customs Duty and Import Costs in Odoo: Landed Cost by Shipment"
date: 2026-10-18 09:00:00 +0530
tags: [Odoo, Odoo 19, Purchase, Procurement, Accounting, Inventory Management, India, Trading]
hub: purchase
description: "Add freight, insurance, clearing charges and customs duty to imported stock in Odoo 19 with landed costs: split methods, timing, IGST, FIFO and AVCO."
faqs:
  - q: "Should IGST paid on imports go into landed costs?"
    a: "Usually not. A GST-registered business normally claims IGST paid at customs as input tax credit, so it isn't part of the stock cost. Odoo's India documentation doesn't cover imports, so agree the entry with your tax adviser."
  - q: "Can I add landed costs after some of the goods are sold?"
    a: "Yes, a landed cost can be applied to any validated receipt. Odoo adds the full share to that receipt's value, but only the part for units still in stock stays in stock value. With Perpetual valuation, the share for units already sold stays in the expense account the bill was posted to."
  - q: "Which split method should I use for customs duty?"
    a: "By Current Cost spreads duty in proportion to value, which matches the bill of entry only when every item carries the same duty rate. If rates differ, click Compute, then overwrite each product's Additional Landed Cost with the bill of entry figures, keeping the total unchanged."
---

**Short answer:** in Odoo 19, make each import charge a service product with **Is a Landed Cost** ticked (sea freight,
insurance, clearing charges, customs duty) and give it a default split method. When each bill arrives, add those
products to it, click **Create Landed Costs**, choose the receipts of that shipment, then **Compute** and **Validate**.
Odoo adds the charges to the value of those goods, so their FIFO or AVCO cost includes them. Landed costs only work on
products whose category uses FIFO or AVCO, and recoverable IGST stays out.

This is the practical import workflow. For the concepts behind it, start with my explainer on
[inventory valuation and landed costs in Odoo](/blog/2026/08/14/inventory-valuation-and-landed-costs-in-odoo/).

## Applies to

- **Odoo version:** Odoo 19. The Odoo 20 landed costs and valuation documentation reads the same as Odoo 19's. The
  Odoo 20 code adds two things: an **Apply On** field on landed cost products, to limit a charge to certain products,
  and receipts pre-filled from the bill's purchase orders when you click **Create Landed Costs**.
- **Edition:** Community and Enterprise. Landed costs are part of the standard Inventory app. The company-wide
  valuation settings live in **Accounting ‣ Configuration ‣ Settings**, which needs the Accounting app (Enterprise);
  in Community, set the costing method and valuation on each product category instead.
- **Apps:** Inventory, Purchase, and Invoicing or Accounting. In Community, read **Invoicing** where a menu path says
  **Accounting**. The bill of entry fields come from the Indian localisation.

## Before you start

1. **FIFO or AVCO.** In **Inventory ‣ Configuration ‣ Product Categories**, the imported products' category needs
   **Costing Method** set to **First In First Out (FIFO)** or **Average Cost (AVCO)**. Products on **Standard Price**
   are skipped.
2. **Know your valuation mode.** The same category has **Inventory Valuation**: **Periodic (at closing)** or
   **Perpetual (at invoicing)**. With Perpetual, validating a landed cost posts a journal entry. With Periodic, Odoo
   raises the stock value without an entry and your accounts catch up at the periodic closing. Choose with your
   accountant.
3. **Weights and volumes.** To split freight by weight or volume, fill in **Weight** and **Volume** on each product's
   **Inventory** tab. If they're empty, Odoo quietly splits that charge equally instead.
4. **Foreign currency is set up.** If the supplier bills in USD, follow
   [multi-currency in Odoo for importers and exporters](/blog/2026/10/12/multi-currency-odoo-import-export/) first.
5. **Agree what's a cost.** Customs duty, freight, insurance and the clearing agent's fees are normally costs.
   IGST at customs and GST on the agent's own fee are normally recoverable. Confirm both with your tax adviser.

## Step by step

1. **Switch it on.** In **Inventory ‣ Configuration ‣ Settings**, under **Valuation**, tick **Landed Costs** and
   click **Save**. Then choose the **Default Journal** for landed cost entries.
2. **Create the landed cost products.** In **Inventory ‣ Products ‣ Products**, click **New** for each charge. Set
   **Product Type** to **Service**. On the **Purchase** tab, in **Vendor Bills**, tick **Is a Landed Cost** and choose
   a **Default Split Method**:

   | Split method | How Odoo divides the charge | Good for |
   |---|---|---|
   | **Equal** | The same amount for each product line on the receipt, whatever the quantity | Fixed fees per item line |
   | **By Quantity** | Per unit received | Handling of similar-sized units |
   | **By Current Cost** | In proportion to each line's value | Insurance; duty when every item has the same rate |
   | **By Weight** | In proportion to weight | Freight charged by weight |
   | **By Volume** | In proportion to volume | Freight charged by cubic metre |

3. **Buy and receive.** Confirm the foreign-currency purchase order and validate the receipt when the goods arrive.
   Landed costs can only be applied to validated transfers, so the receipt comes first.
4. **Record the bill of entry.** On the overseas supplier's bill, with **GST Treatment** set to **Overseas**, the
   **Other Info** tab shows an **Import India** group. Fill in **Bill of Entry Number**, **Bill of Entry Date** and
   **Port code**.
5. **Freight forwarder's bill.** In **Accounting ‣ Vendors ‣ Bills**, click **New**, choose the forwarder and add your
   **Sea Freight** product. Save, then click **Create Landed Costs**. Odoo takes each line's untaxed amount, so GST on
   the forwarder's fee isn't added to stock. A USD line is converted to rupees at the bill's exchange rate.
6. **Pick the shipment.** On the landed cost, choose the receipt in **Transfers**. If one container covered two
   purchase orders, select both receipts. Click **Compute** and check the **Valuation Adjustments** tab: **Original
   Value**, **Additional Landed Cost** and **New Value** per product. Then click **Validate**.
7. **Clearing agent's bill.** Repeat with **Clearing Charges** and **Customs Duty** lines. This bill often reaches you
   after the goods are on the shelf, sometimes after some are sold; Odoo still accepts it (see the timing point
   below). Record any IGST the agent passes on the way your tax adviser specifies, never as a landed cost line.
8. **Different duty rates.** After **Compute**, the **Additional Landed Cost** column stays editable while the landed
   cost is a draft. Overwrite each product's duty with the bill of entry figure. Each charge must still add up to its
   total, or Odoo refuses to validate.
9. **Duty paid straight to customs.** If you pay through ICEGATE rather than through an agent, record the payment as
   usual, then create the landed cost from **Inventory ‣ Operations ‣ Landed Costs** with **New**. Set each line's
   **Account** to the account the payment went to, so that with Perpetual valuation the entry moves the amount into
   stock value. Agree that account with your accountant.

## Worked example: bicycle parts from Taiwan

A Ludhiana importer buys 500 freewheels (0.4 kg each) and 200 crank sets (1.5 kg each) from a Taiwanese supplier in
USD. At an illustrative ₹84 to the dollar, the receipt is valued at ₹2,52,000 for the freewheels and ₹3,02,400 for the
crank sets. Three bills follow. All amounts are illustrative; the duty is a total from the bill of entry, not a rate.

| Charge | Split | Total | Freewheels | Crank sets |
|---|---|---|---|---|
| Sea freight | By Weight | ₹50,000 | ₹20,000 | ₹30,000 |
| Marine insurance | By Current Cost | ₹5,544 | ₹2,520 | ₹3,024 |
| Clearing charges | Equal | ₹14,000 | ₹7,000 | ₹7,000 |
| Customs duty | By Current Cost | ₹97,350 | ₹44,250 | ₹53,100 |
| **Total** | | **₹1,66,894** | **₹73,770** | **₹93,124** |

- **New unit cost:** freewheels ₹3,25,770 ÷ 500 = **₹651.54**; crank sets ₹3,95,524 ÷ 200 = **₹1,977.62**.
- **Why By Weight:** the 200 kg of freewheels carry 40% of the freight. **By Quantity** would load them with 500 of
  700 units, about ₹35,714, although they're the lighter consignment.
- **Why Equal is risky:** each line gets ₹7,000 whatever its quantity, so a freewheel carries ₹14 of clearing
  charges and a crank set ₹35.
- **Timing:** the clearing agent's bill arrives three weeks later, after 50 crank sets have been delivered, and the
  product uses FIFO with no older stock. Odoo adds the full ₹60,100 crank-set share (₹7,000 plus ₹53,100) to the
  receipt's value. With Perpetual valuation, the journal entry moves three quarters of it, ₹45,075, into stock; the
  remaining ₹15,025 stays in expense as part of the cost of what was already sold.

Under **AVCO**, each share raises the average cost of what's on hand; the AVCO documentation counts landed costs in
the purchase price. Under **FIFO**, the units left from that receipt carry the higher value into future cost of goods
sold. Either way, units delivered before the landed cost aren't revalued.

## What you should see

- **On the bill:** the landed cost lines flagged in the **Landed Costs** column (an optional column), a **Create Landed
  Costs** button, and afterwards a **Landed Costs** smart button.
- **On the landed cost:** the charges on **Additional Costs**, the split on **Valuation Adjustments**, and status
  **Posted** after validation.
- **With Perpetual valuation:** a journal entry in the landed costs journal, debiting stock valuation.
- **On the product:** a higher **Cost**.

## Troubleshooting

**"Landed costs can only be applied for products with FIFO or average costing method."**
The category uses Standard Price. Change the **Costing Method**, with your accountant's agreement.

**No Create Landed Costs button on the bill.**
The line's product isn't a service with **Is a Landed Cost** ticked, the bill already has landed costs (use the smart
button), or your user isn't an Inventory administrator.

**The receipt isn't in the Transfers list.**
It hasn't been validated yet.

**A By Weight split came out equal.**
The products have no **Weight**, so Odoo fell back to an equal split. Fill in weights, then **Compute** again.

**A validated landed cost is wrong.**
It can't be cancelled. Odoo's message suggests creating a negative landed cost to reverse it.

**No journal entry after validation.**
The category uses **Periodic (at closing)**, so the value flows into the closing entry instead.

## Related setup

- [Cross-docking in Odoo](/blog/2026/10/18/cross-docking-odoo/)
- [Vendor bills and three-way matching in Odoo](/blog/2026/08/17/vendor-bills-and-three-way-matching-in-odoo/)
- [How to set up GST in Odoo 19](/blog/2026/10/10/how-to-set-up-gst-odoo/)
- [How Odoo costs manufactured products](/blog/2026/10/16/how-odoo-costs-manufactured-products/)
- [Purchase in Odoo: from RFQ to purchase order](/blog/2026/08/16/odoo-purchase-from-rfq-to-purchase-order/)
- Importing regularly and want product costs you can trust? See [Odoo implementation](/services/odoo-implementation/).

## Official references

- Odoo 19 documentation: [Landed costs](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/inventory_valuation/landed_costs.html)
- Odoo 19 documentation: [Inventory valuation (Accounting)](https://www.odoo.com/documentation/19.0/applications/finance/accounting/get_started/inventory_valuation.html)
- Odoo 19 documentation: [Average cost valuation](https://www.odoo.com/documentation/19.0/applications/finance/accounting/get_started/avg_price_valuation.html)
- Odoo 19 documentation: [Multi-currency system](https://www.odoo.com/documentation/19.0/applications/finance/accounting/get_started/multi_currency.html)
- Odoo 19 documentation: [India (fiscal localisation)](https://www.odoo.com/documentation/19.0/applications/finance/fiscal_localizations/india.html)
- Government of India: [CBIC](https://www.cbic.gov.in/) and [ICEGATE](https://www.icegate.gov.in/), for duty rates
  and bill of entry rules

*How this guide was checked: menu paths, field names and behaviour were checked against the Odoo 19 documentation and
the Odoo 19 code (the landed costs module, stock valuation and the Indian localisation's bill fields) in October 2026.
The worked example is illustrative and wasn't run on a live database, so there are no screenshots; labels can vary
slightly with your installed apps and language.*
