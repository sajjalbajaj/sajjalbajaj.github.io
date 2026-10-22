---
layout: post
title: "Odoo Pricelist Validity: Review Promotions and Existing Quotes"
date: 2026-11-11 09:00:00 +0530
tags: [Odoo, Odoo 19, ERP, Best Practices, Sales, eCommerce, CRM, Finance]
hub: sales
description: "Control Odoo price changes with clear validity periods, quantity conditions and customer quote reviews before launching or ending a promotion."
faqs:
  - q: "Does a promotion ending automatically settle every open quotation?"
    a: "No. Review the accepted commercial terms and actual behaviour of existing quotations separately from prices used for new transactions."
  - q: "Is the displayed discount enough to verify a price?"
    a: "No. Confirm the final unit price, quantity condition, currency and applicable rule using representative customer scenarios."
---

**Short answer:** a pricelist change needs a defined scope, effective period and decision about existing quotations. Odoo can apply configured pricing rules, but the business must establish which customers and transactions should receive them. Review the final price and the commercial commitment, not only a visible discount or start date.

## Applies to

Odoo 19 Sales pricelists, with eCommerce where relevant. Odoo 20 expands and reorganises pricing rules, including packaging selection within a rule. This article does not assume that later field layout exists in Odoo 19. The corresponding Odoo 20 references were reviewed in October 2026; use the documentation for your installed release when configuring screens and fields.

## Which transactions should the price affect?

Identify the products, variants, customers or channels included in the change. State whether the price is a general revision, a negotiated customer arrangement or a temporary promotion. Each can have different expectations about visibility and duration.

Odoo's pricing documentation includes quantity conditions and validity periods for rules. Those settings need to match the intended offer. A promotion described as applying to a particular pack size should not be configured using an unexplained quantity threshold in another unit.

I would keep the approved price brief with the implementation decision. It should explain the final customer outcome, including relevant exclusions. Staff can then review configuration against a business statement rather than inferring intent from several overlapping rules.

## How should rule interactions be reviewed?

Choose representative customers and quantities that distinguish the possible rules. Include a product with a variant or an existing negotiated arrangement where those exist. A simple general customer example may not reveal a competing rule.

Inspect the resulting unit price and total, including the relevant currency and rounding basis. A displayed percentage can be correct while the base price is wrong. Finance or the commercial owner should confirm the interpretation before the offer is made available.

Keep the design understandable. Excessive overlapping rules can make later changes difficult to reason about. If a special case is necessary, document its purpose and review trigger so that it does not remain active indefinitely after the business need ends.

## What happens to open quotations?

Distinguish a new price calculation from an existing commercial offer. A quotation already sent may have terms that the business intends to honour. Decide whether it should retain its price, be revised with customer agreement or expire under the approved process.

Do not assume that changing a pricelist automatically updates every existing document in the desired way. Review the actual behaviour for draft quotations, sent quotations and confirmed orders. Customisations or manual prices can introduce further differences.

Record authorised changes to a customer offer. A salesperson should be able to explain why a revised quotation differs from the one the customer received. Quietly replacing a price without context can create disputes even when the new master data is correct.

## Worked example: a seasonal pet supply promotion

Imagine a retailer planning a temporary offer on selected products. Wholesale customers already have negotiated prices, while online retail customers use a different arrangement. The commercial brief defines which group should receive the promotion and which products are excluded.

The team reviews representative quotations before launch, including a small quantity, a qualifying quantity and a wholesale customer. It checks the final price rather than relying on the promotion's title. A conflicting rule is resolved before customers see the offer.

At the end of the period, the team reviews open quotations and customer enquiries under the agreed policy. It does not assume that removing the promotion automatically cancels commitments already made. The recorded decision keeps new pricing and existing offers consistent with the business's intent.

## How should online and assisted sales stay aligned?

Compare the customer journey through the website with a quotation prepared by a salesperson. They may intentionally use different arrangements, but the difference should be understood. An unexplained mismatch can lead staff to override prices repeatedly.

Review messages and promotional content at the same time as the rules. A banner promising a condition that checkout no longer applies creates an avoidable support issue. Assign an owner to both the commercial communication and the underlying pricing configuration.

Check stored carts and returning customers where relevant. A customer may revisit an earlier selection after the effective period changes. The business needs a clear explanation of the current price and any accepted exception rather than relying on an old screenshot as the policy.

## When does a structured price review fit?

It fits promotions, customer specific terms and broader price revisions, particularly where several channels share product data. The review can be proportionate: a small change may need a few representative scenarios rather than an elaborate project.

It is less useful to add complex pricing rules when the actual commercial policy is unsettled. Resolve who qualifies, what they receive and when the offer applies first. Technical flexibility does not replace an agreed offer.

Maintain an owner and review date for exceptions. A one time negotiated price should not become a permanent general rule accidentally. The record should make it possible to identify which arrangements still have an active business reason.

## Common mistakes

Common mistakes include checking only the percentage, overlooking quantity units and assuming all open quotations should adopt the new rate. Another is updating the website promotion without reviewing the price calculated for the intended customer.

Before launch and closure, inspect the accepted scenarios and record the final customer outcomes. The team should explain the applicable rule, effective period and treatment of existing offers. That evidence makes pricing changes manageable even when several commercial arrangements coexist.

## Related

Read [Odoo Vendor Price Updates: Avoid Duplicate and Incorrect Rates](/blog/2026/11/06/odoo-vendor-price-import-revisions/) for the connected workflow.

## Official references

1. [Pricelists](https://www.odoo.com/documentation/19.0/applications/sales/sales/products_prices/prices/pricing.html)
1. [Order handling](https://www.odoo.com/documentation/19.0/applications/websites/ecommerce/order_handling.html)

*How this article was checked: official Odoo 19 documentation and the corresponding Odoo 20 pages were reviewed in October 2026. The examples are illustrative, not client results or tests on a live database.*

For help designing this workflow, see my [Odoo consulting services](/services/odoo-consulting/).
