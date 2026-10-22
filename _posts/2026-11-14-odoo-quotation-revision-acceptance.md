---
layout: post
title: "Odoo Quotations: Keep Revisions and Acceptance Clear"
date: 2026-11-14 09:00:00 +0530
tags: [Odoo, Odoo 19, ERP, Best Practices, CRM, Customer Management, Invoicing, ERP Implementation]
hub: sales
description: "Manage Odoo quotation revisions with clear scope, current documents and acceptance evidence before sales commitments become delivery work."
faqs:
  - q: "Does editing a quotation create a formal revision workflow?"
    a: "Do not assume it does. Define how versions, superseded offers and customer acceptance will be recorded for your sales process."
  - q: "What should be checked before confirming an order?"
    a: "Check the buyer, current scope, quantities, commercial terms and acceptance evidence. Review any existing delivery or invoice activity before changing a confirmed order."
---

**Short answer:** Keep a clear record of which Odoo quotation the customer is accepting and what changed since the previous offer. Review scope and terms before confirming an order. I would not rely on an email saying “approved” when several different proposals are still in circulation.

## Applies to

Odoo 19 Sales in Community or Enterprise, with optional online signature or payment features according to configuration. Odoo 20 quotation documentation was reviewed; layouts and available fields can differ. The revision register and acceptance review below are recommended controls, not a universal built in document versioning feature.

## What creates ambiguity between revisions?

A quotation can change in several ways: a quantity is reduced, installation is added, delivery is split or the payment schedule changes. The total may remain similar while the business commitment changes substantially. That is why a price comparison alone is not an adequate revision review.

Ambiguity often starts outside Odoo. A salesperson downloads a PDF, sends it by email and later edits the quotation. The customer may still be reading the earlier attachment. Another employee might open the current record and assume it matches the document in the customer's reply.

Define how the team identifies the current offer. That might involve a revision reference, a concise change note and retaining the document actually sent. The exact implementation depends on the organisation, but the question must always be answerable: which scope and terms did this customer accept?

## What should a revision note contain?

Describe the changes that affect the buyer or delivery team. For example, “installation excluded, delivery to two sites, quantities reduced” is more useful than “updated quotation”. Identify any assumptions that remain open, such as access arrangements or confirmation of a site address.

Record whether the earlier offer has been superseded and tell the customer clearly. Keep the communication attached to the relevant business record where the team can find it. Avoid creating multiple equally plausible current quotations without a relationship or explanation.

A formal numbering or approval requirement may need configuration or customisation. Do not describe a manually entered reference as a system enforced control. If staff can bypass the convention, a review step is still needed before confirmation.

## What does acceptance need to establish?

Acceptance should identify the customer, the offer and the agreed scope. Odoo supports quotation confirmation and configured online confirmation options, but business readiness still depends on the information behind the action.

Check the invoice and delivery addresses, requested quantities, payment terms and validity. If a sales order is already confirmed, changing it may affect connected work. Review deliveries, procurement and invoicing with the responsible colleagues instead of treating the record as a standalone document.

For a complex service, distinguish agreement to proceed from approval of every deliverable. A customer may accept discovery work while implementation scope remains open. Describe the actual authorised work so the delivery team does not interpret a broad opportunity title as permission for everything discussed.

## Worked example: revising a clinic equipment offer

Imagine an illustrative supplier preparing equipment for a clinic. The first offer includes delivery and installation. The buyer later asks to remove installation and add a second delivery destination. The commercial total changes only slightly because additional transport offsets the removed service.

The salesperson records the changes and sends the current quotation with an explicit reference. The customer's purchasing contact replies with approval but attaches the original PDF. The team pauses confirmation long enough to clarify which arrangement is accepted.

Once the buyer confirms the revised scope, the accepted document and conversation are retained together. The delivery owner sees two destinations and no installation commitment. Without this review, the warehouse might ship to one address while the customer still expects an engineer to attend.

## When it fits and when it doesn't

This approach fits project sales, configurable products and any sale with repeated negotiation. It is also useful for smaller orders where different employees handle quoting and fulfilment.

It does not require an elaborate approval process for every simple repeat order. Match the review to the risk of misunderstanding. Where contracts require particular legal formalities, have the appropriate adviser define them; the operational record should support that process rather than claim to replace it.

## Common mistakes

**Keeping several offers labelled current.** Make the superseded status understandable to both customer and staff.

**Reviewing only the total.** Compare scope, locations, dates and responsibilities as well as price.

**Treating a vague email as complete acceptance.** Link the response to the specific offer being accepted.

**Editing confirmed work without coordination.** Review connected delivery and billing records before implementing a change.

## What should delivery receive?

Give the delivery owner the accepted scope, the relevant quotation reference and a list of unresolved assumptions. The handover should identify what is included, what is excluded and who will answer any remaining question.

Ask the receiving team to highlight anything they cannot execute as written. That conversation is a useful final check on the commercial promise. A clearly accepted quotation is most valuable when the warehouse, service team and finance department can all act on the same understanding.

## Related

Read [Odoo Pricelist Validity: Review Promotions and Existing Quotes](/blog/2026/11/11/odoo-pricelist-validity-customer-quotes/) for the connected workflow.

## Official references

1. [Create quotations](https://www.odoo.com/documentation/19.0/applications/sales/sales/sales_quotations/create_quotations.html)
1. [Contacts](https://www.odoo.com/documentation/19.0/applications/essentials/contacts.html)

*How this article was checked: official Odoo 19 documentation was reviewed in October 2026. Odoo 20 references were also checked; material differences or moved pages are identified above. Examples are illustrative business scenarios, not client results or tests on a live database.*

If you need help translating these decisions into your own workflow, see my [Odoo consulting services](/services/odoo-consulting/).
