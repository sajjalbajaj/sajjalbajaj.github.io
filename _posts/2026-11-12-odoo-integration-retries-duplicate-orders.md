---
layout: post
title: "Odoo Integration Retries: Prevent Duplicate Business Actions"
date: 2026-11-12 08:00:00 +0530
tags: [Odoo, Odoo 19, ERP, Best Practices, Integration, Sales, Data Import, Security]
hub: integrations
description: "Design Odoo integration retries around stable references, uncertain outcomes and recovery so repeated requests do not duplicate business actions."
faqs:
  - q: "Does an API timeout prove that Odoo made no change?"
    a: "No. The server may have completed work before the caller lost the response. Confirm the outcome using the integration reference before repeating a consequential action."
  - q: "Does JSON-2 make several requests one transaction?"
    a: "No. Odoo documents each JSON-2 call as a separate SQL transaction. Multi step business operations need an appropriately designed method or recovery process."
---

**Short answer:** make retries safe by giving each business request a stable identity and checking whether its intended action already happened. A timeout is an uncertain outcome, not proof that nothing changed. The integration needs a deliberate duplicate prevention and recovery design so that repeating communication does not repeat orders, payments or shipments.

## Applies to

Odoo 19 JSON-2 integration design. The official documentation limits external API access on Odoo commercial plans to Custom; confirm the applicable hosting and subscription arrangement. The corresponding Odoo 20 references were reviewed in October 2026; use the documentation for your installed release when configuring screens and fields.

## What exactly is being retried?

Distinguish reading information from creating or confirming a business record. Repeating a read usually has different consequences from confirming an order or requesting an external payment. Classify the operation before choosing a retry policy.

I would define the business event in ordinary language, such as import this marketplace order once. Then identify the source reference that represents that event. A fresh random request identifier on every retry cannot by itself reveal that several attempts concern the same intended order.

Keep the source system, company and object type in the identity design where needed. Two systems can use the same visible order number. The identifier must remain unambiguous within the scope where duplicate prevention is required.

## Why is a timeout ambiguous?

A request can reach the server, complete its work and lose the response before the caller receives it. Alternatively, it may fail before any business action occurs. The caller needs evidence to distinguish these cases rather than treating both as permission to create another record.

Odoo documents each JSON-2 call as its own database transaction. Several calls do not automatically form one transaction, and other activity can occur between them. A sequence that reads availability and later acts on it needs careful design under concurrency.

Do not assume a generic create call guarantees idempotency, meaning that repeating the same request has no additional business effect. That property must come from the selected method, identifiers and constraints in the integration design. State custom requirements explicitly in the scope.

## How should duplicate prevention be designed?

Preserve the source business reference and define what a repeated request should return. A repeated import might return the existing record rather than create a second one. An amended source order may need a separate update path with its own rules.

Review concurrency. Two workers can both check that no record exists and then attempt creation at the same time. A simple search before creation is not sufficient evidence of protection under that race. The implementer should select an appropriate atomic method or uniqueness mechanism.

Separate duplicate prevention from data comparison. A source reference can identify the same event while the payload has changed. Define whether the later content is an authorised update, a conflict requiring review or a duplicate that should leave the accepted record unchanged.

## Worked example: a marketplace order response is lost

Imagine a connector sending a new order to Odoo. The order is created, but the connector does not receive the response and marks the attempt uncertain. A naive retry would create another order for the same customer request.

The designed recovery uses the stable marketplace reference to inspect the accepted outcome. It locates the existing record and returns or records that result. If the new payload differs, the connector follows the agreed update or conflict process instead of silently overwriting the order.

Operations sees one business order with a traceable history of attempts. If an external shipment action is also involved, that action has its own reference and outcome review. Preventing a duplicate Odoo order does not automatically protect every downstream service.

## What should retry controls include?

Use bounded retries appropriate to the failure and avoid immediate repeated attempts during a wider outage. Distinguish temporary unavailability from invalid data or missing permission. Repeating a request with the same invalid input does not make it more likely to become correct.

Retain attempt time, source reference, outcome classification and the evidence needed for support. Protect sensitive payloads and credentials. A useful operational log explains what happened without exposing information that the reviewer does not need.

Give unresolved cases an owner. A message that remains in an error queue should lead to a specific investigation or correction. Define how a corrected request is resumed without losing its identity or bypassing the original duplicate prevention design.

## When does this design matter most?

It matters when integrations create consequential records or trigger external effects. Orders, invoices, stock movements and payments deserve deliberate outcome handling. Even modest transaction volume can produce serious confusion if a retry duplicates the wrong action.

For simple reporting reads, the required controls may be lighter. Still define freshness and incomplete result handling so that downstream users know whether the data is current. Match the design to the consequence instead of applying one retry rule to every endpoint.

Assess existing connectors from evidence. Ask how they handle an accepted request with a lost response, two simultaneous deliveries and a changed payload. A statement that retries are supported does not answer those questions.

## Common mistakes

Common mistakes include generating a new business identity on retry, assuming search then create is race safe and treating several API calls as one transaction. Another is correcting the queue by manually creating records without reconciling the original attempts.

Rehearse uncertain responses and repeated events in an isolated environment before relying on the integration. The accepted result should show one intended business action with explainable attempts and recovery. That is a stronger operating guarantee than a successful ordinary request alone.

## Related

Read [Odoo WhatsApp: Handle Failed Messages and Missed Replies](/blog/2026/11/03/odoo-whatsapp-failed-messages-escalation/) for the connected workflow.

## Official references

1. [External JSON-2 API](https://www.odoo.com/documentation/19.0/developer/reference/external_api.html)
1. [Export and import data](https://www.odoo.com/documentation/19.0/applications/essentials/export_import_data.html)

*How this article was checked: official Odoo 19 documentation and the corresponding Odoo 20 pages were reviewed in October 2026. The examples are illustrative, not client results or tests on a live database.*

For help designing this workflow, see my [Odoo consulting services](/services/odoo-consulting/).
