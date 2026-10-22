---
layout: post
title: "Odoo Alternative RFQs: Compare the Offer Behind the Price"
date: 2026-11-04 09:00:00 +0530
tags: [Odoo, Odoo 19, ERP, Best Practices, Purchase, Procurement, Supply Chain, SME]
hub: purchase
description: "Compare alternative Odoo supplier quotations using consistent quantities, delivery promises, specification evidence and recorded award decisions."
faqs:
  - q: "Does the lowest quoted price identify the best supplier?"
    a: "Not by itself. Compare the same specification, unit, quantity, delivery requirement and commercial scope before selecting an offer."
  - q: "Can different products be awarded to different suppliers?"
    a: "The documented comparison supports selecting product lines from alternative RFQs. Review the remaining alternatives before confirming or cancelling them."
---

**Short answer:** alternative RFQs help organise competing supplier offers, but a fair comparison starts with equivalent requirements. Check quantities, units, specification and delivery scope before comparing prices. Record why the selected offer meets the need so that the decision remains understandable after the buyer or supplier contact changes.

## Applies to

Odoo 19 Purchase with purchase agreements enabled. Supplier qualification and the award method described here are business processes, not an automatic scoring engine. The corresponding Odoo 20 references were reviewed in October 2026; use the documentation for your installed release when configuring screens and fields.

## What makes quotations comparable?

Give suppliers a common requirement with an identifiable product or service specification. State the required quantity and delivery destination. If suppliers can propose alternatives, ask them to identify the differences rather than letting a substitute look like an exact match.

A case price cannot be compared directly with an individual unit price. Currency, freight, tax treatment and minimum order conditions can also change the comparison. Keep the assumptions visible and have the relevant business owner resolve any ambiguous commercial term.

I would distinguish confirmed information from estimates. A supplier's proposed arrival date is not the same as an internally calculated date based on a default lead time. Mark unanswered questions clearly so that the comparison does not reward an offer simply because its missing details were treated favourably.

## How do alternative RFQs help?

Odoo Purchase allows related alternative RFQs and a product line comparison. The documented creation process can copy products or leave a new alternative empty. Review the copied lines because vendor information on the product can influence the values carried into the quotation.

Use the comparison to inspect the relevant product lines and select the intended offers. It supports a structured buying decision, but it does not evaluate supplier quality, suitability or contractual risk for you. Keep those assessments with the responsible reviewers.

Be careful when clearing or choosing comparison lines. The documented workflow changes quantities on the affected quotations. Someone reviewing the source RFQ later should understand why a line is zero rather than assuming that the supplier offered free goods or that demand disappeared.

## Which criteria deserve separate evidence?

A useful review includes specification fit, arrival confidence, supply continuity and the practical cost of handling the order. The appropriate criteria depend on the purchase. A replacement component needed to restart equipment can justify a different tradeoff from replenishing routine office stock.

Avoid creating an elaborate score that nobody can explain. If a weighted comparison is useful, define the weights and evidence before selecting a preferred supplier. Otherwise the score can become a way to justify a choice already made for unrelated reasons.

Review dependencies with the receiving team. A supplier may offer a good price in a packaging format that the warehouse cannot handle efficiently. Another may require a receiving appointment or inspection evidence that changes the delivery plan. Include those consequences before the award.

## Worked example: choosing a packaging supplier

Imagine a skincare business requesting quotations for a packaging component. One supplier offers a lower unit price with a larger minimum quantity, while another offers smaller deliveries matching the production schedule. Both appear to meet the specification, but one has not confirmed the required finish.

The buyer normalises the unit basis and asks the product owner to resolve the specification question. Operations reviews storage and the proposed delivery pattern. Finance compares the actual commitment rather than multiplying every offer by an assumed quantity that no supplier has accepted.

The final decision records the selected quantity, arrival expectation and reason for choosing the supplier. If the order is split, each awarded line remains identifiable. The team then reviews the unused alternatives so that an old open quotation does not become an accidental second purchase.

## What happens after the award?

Odoo's documented confirmation flow offers a decision about keeping or cancelling alternatives. Make that choice deliberately. Keeping an alternative may be useful while another part of the requirement remains open, but it needs an owner and a clear purpose.

Communicate the actual award through the approved supplier process. An internal selection is not evidence that the supplier accepted the resulting quantity, price and date. Retain the supplier's confirmation with the order and escalate differences promptly.

Preserve the decision evidence. If the selected supplier later misses a commitment, the organisation should be able to distinguish what was promised from what was assumed. That record is more useful for improving future buying than a general statement that the supplier was unreliable.

## When does this approach fit?

Alternative RFQs fit a defined requirement with more than one credible source. They are particularly useful when a buyer needs to compare lines or consider a split award. They are less helpful when the requirement is still changing or the alternatives are not genuinely interchangeable.

For a specialised service, establish the expected deliverables and acceptance method first. A product line comparison can still organise offers, but the business needs enough detail to understand what each price includes. A short description should not hide a major scope difference.

## Common mistakes

Common mistakes include comparing unmatched pack sizes, using expected dates as supplier promises and leaving unused alternatives open without ownership. Another is selecting individual lines without checking whether the supplier's price depended on receiving the whole order.

Before confirmation, ask a second reviewer to explain the award from the records alone. They should identify the need, comparable offers, unresolved exceptions and authorised choice. If the explanation depends on an undocumented conversation, complete the record while the decision is still fresh.

## Related

Read [Odoo Blanket Orders: Control Each Supplier Call Off](/blog/2026/11/04/odoo-blanket-order-call-offs/) for the connected workflow.

## Official references

1. [Call for tenders](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/purchase/manage_deals/calls_for_tenders.html)
1. [Import vendor pricelist](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/purchase/products/pricelist.html)

*How this article was checked: official Odoo 19 documentation and the corresponding Odoo 20 pages were reviewed in October 2026. The examples are illustrative, not client results or tests on a live database.*

For help designing this workflow, see my [Odoo consulting services](/services/odoo-consulting/).
