---
layout: post
title: "Odoo eCommerce: Separate Abandoned Carts from Unpaid Orders"
date: 2026-11-11 08:00:00 +0530
tags: [Odoo, Odoo 19, ERP, Best Practices, eCommerce, Sales, Customer Support, Accounting]
hub: website
description: "Review Odoo online orders by checkout and payment state so abandoned cart followups do not conflict with pending payments or fulfilment decisions."
faqs:
  - q: "Is every unconfirmed website order an abandoned cart?"
    a: "No. A customer may have completed checkout while payment remains unconfirmed. Review the transaction and configured payment method before selecting a followup."
  - q: "Does a bank transfer automatically confirm the online order?"
    a: "The reviewed Odoo 19 documentation describes manual confirmation after receipt of a wire transfer. Confirm the process for the configured method and installation."
---

**Short answer:** distinguish a cart that was left before checkout from an order whose payment is still pending or uncertain. They need different followups. Review the order and payment evidence before sending reminders, cancelling demand or releasing goods so that the customer does not receive contradictory instructions.

## Applies to

Odoo 19 Website and eCommerce with Sales and configured payment providers. Odoo 20 expands order dashboard guidance, so the state review here does not depend on its newer filter buttons. The corresponding Odoo 20 references were reviewed in October 2026; use the documentation for your installed release when configuring screens and fields.

## Which stage has the customer reached?

Odoo's eCommerce documentation distinguishes a quotation associated with a cart, a completed checkout awaiting payment confirmation and a confirmed sales order in the ordinary online payment flow. The configured payment method can affect the practical confirmation process.

Use those states as the beginning of the review, not the complete explanation. A payment interruption, manual method or custom integration can create an exception. Identify the customer's actual action and the relevant transaction before deciding that they simply abandoned the purchase.

I would make the distinction clear to customer support. A person asking about a pending payment needs help confirming the outcome, while someone who left a cart may need no operational intervention at all. Sending the same message to both can create confusion or duplicate payment attempts.

## What should an abandoned cart followup consider?

Confirm that the record genuinely represents an incomplete purchase and that the communication follows the business's current preferences and policies. A cart can be created without a completed customer identity, so do not assume every record supports a useful personalised message.

Review the content of any reminder. Prices, stock and delivery terms may have changed since the cart was created. The message should not promise an old condition unless the business has deliberately decided to honour it and the checkout supports that decision.

Avoid interpreting every abandoned cart as a lost committed sale. Customers compare products, check delivery options or return later through another route. Use the information to improve the purchase experience without overstating what the record proves about customer intent.

## How should unpaid orders be investigated?

Identify the payment method and transaction state. A provider based payment, wire transfer and payment on collection can have different operating expectations. The reviewed documentation specifically describes manual confirmation after receipt of a wire transfer.

Check whether the customer may already have paid through another attempt or reference. Do not request another payment while the previous result is uncertain. Use the authorised provider or finance review to establish the outcome and preserve the transaction reference.

Keep the fulfilment decision separate. An unpaid label does not automatically tell the warehouse whether the business has authorised release under agreed terms. Define that policy and confirm the actual configuration rather than leaving individual employees to infer permission from an order screen.

## Worked example: checkout finishes but payment is pending

Imagine a customer completing checkout and selecting a manual payment method. The order remains unconfirmed while finance waits for the payment evidence. An indiscriminate cart reminder would incorrectly suggest that the customer never finished the purchase.

The support team reviews the method and gives the customer the relevant payment instructions or status update. Finance matches the received payment to the correct order and follows the approved confirmation process. The warehouse receives the resulting fulfilment instruction.

If the customer decides not to proceed, the team records the accepted cancellation through the appropriate workflow. It does not leave several competing attempts open or silently cancel an order while a payment is being reconciled.

## What should cancellation and stock review include?

Before cancelling, check related payments, reservations and external commitments. The consequences depend on the actual configuration. An online order may already have initiated work elsewhere, so a change should be coordinated with the owners of those records.

Define how long unresolved orders remain in review and who escalates them. Use an agreed policy rather than an arbitrary technical cleanup that removes important evidence. Some records may need investigation rather than automatic closure.

Review duplicate customer attempts. A customer who retries checkout can create several records for one intended purchase. Identify the accepted order and explain the treatment of the others, keeping payment and fulfilment aligned with that decision.

## When does a segmented review fit?

It fits stores using several payment methods or seeing meaningful volumes of incomplete and pending orders. Separating states helps staff choose useful actions and avoids treating marketing followup as payment investigation.

A small store may use a simple daily review instead of elaborate automation. The important point is that the categories correspond to real customer and payment outcomes. Automating an unclear classification can multiply mistakes faster than a manual process.

Odoo 20 adds dashboard guidance and filters beyond the Odoo 19 page reviewed here. Use the installed release when documenting navigation, and keep the underlying business definitions stable enough that staff understand the meaning behind a label.

## Common mistakes

Common mistakes include calling every unconfirmed order abandoned, sending payment reminders during an unresolved provider incident and releasing goods without an agreed authorisation rule. Another is cancelling duplicate attempts without checking which one contains the successful payment.

Review a cart, a pending manual payment, a failed provider attempt and a completed order together. Support, finance and fulfilment should identify the correct next action for each. That shared understanding is more useful than a single dashboard count of incomplete purchases.

## Related

Read [Odoo Subscription Payment Failures: Check Before Retrying](/blog/2026/11/10/odoo-subscription-payment-failure-review/) for the connected workflow.

## Official references

1. [Order handling](https://www.odoo.com/documentation/19.0/applications/websites/ecommerce/order_handling.html)
1. [Online payments](https://www.odoo.com/documentation/19.0/applications/finance/payment_providers.html)

*How this article was checked: official Odoo 19 documentation and the corresponding Odoo 20 pages were reviewed in October 2026. The examples are illustrative, not client results or tests on a live database.*

For help designing this workflow, see my [Odoo consulting services](/services/odoo-consulting/).
