---
layout: post
title: "Odoo WhatsApp: Handle Failed Messages and Missed Replies"
date: 2026-11-03 09:00:00 +0530
tags: [Odoo, Odoo 19, WhatsApp, Integration, Support, Helpdesk, ERP, Best Practices]
hub: integrations
description: "Build an Odoo WhatsApp exception process for failed messages, template problems and missed replies with clear ownership and controlled retry decisions."
faqs:
  - q: "Does a sent message prove the customer acted on it?"
    a: "No. Sending, delivery and a business response are different events. Define which evidence completes the workflow and how unresolved conversations are reviewed."
  - q: "Does WhatsApp automatically create a Helpdesk SLA workflow?"
    a: "Do not assume that. Odoo documents WhatsApp conversations and Helpdesk SLA policies separately. A ticket handoff needs an agreed manual process or a verified integration."
---

**Short answer:** give failed WhatsApp messages and unanswered conversations an owner, an evidence trail and a defined next action. Odoo can record messaging activity and expose failure information, but the business still needs to decide when to retry, use another approved contact route or escalate to support. A message appearing in a list is not proof that the intended work happened.

## Applies to

Odoo 19 Enterprise WhatsApp with a WhatsApp Business Platform account. Personal accounts and the standalone WhatsApp Business App are not the documented integration target. The corresponding Odoo 20 documentation was checked in October 2026. This article targets Odoo 19; confirm your installed version before following any screen labels.

## Which business outcome is the message supporting?

Define the purpose before automating communication. A quotation followup, collection notice and service update have different urgency and completion criteria. Identify whether the required outcome is simply sending information, obtaining a reply or completing another business action.

I would keep that outcome linked to the relevant business record. A conversation without an order, invoice or service reference can become difficult to route when another employee takes over. The link should help authorised staff understand the issue without adding unnecessary personal information to the message.

Respect the customer's recorded communication preferences and the applicable platform and business policies. A failed message is not permission to contact every available number. Keep consent and policy review with the responsible owner, and recheck current requirements when designing campaigns or new message categories.

## What evidence helps explain a failure?

The Odoo documentation identifies Failure Type and Failure Reason columns in WhatsApp message records. Use the recorded error and relevant configuration context to investigate rather than repeatedly pressing send. Preserve the business reference and the time of the attempt.

Distinguish account or connection problems from template and recipient problems. An issue affecting every message needs a different response from one rejected template or an incorrect contact detail. Group related failures so that staff do not investigate the same underlying incident separately for every customer.

Escalate technical details through the appropriate support route without exposing credentials. Tokens and account secrets belong in protected administration, not ordinary ticket comments or screenshots. Provide the error evidence needed for investigation while limiting access to sensitive configuration.

## How should template problems be handled?

Odoo's documented workflow includes submitting templates for Meta approval and synchronising approved templates back into the database. A template in a pending or rejected state should not be treated as ready for production simply because its text exists in Odoo.

Review the intended category, language and variable mapping. A technically accepted message can still contain the wrong customer reference if placeholders are mapped incorrectly. Use representative examples and have the business owner review the rendered content before enabling routine use.

When a template changes, identify which workflows rely on it. Keep an approved fallback process for time sensitive communication. Do not bypass a rejected template with improvised messages without checking the applicable platform rules and the business's communication policy.

## Worked example: a dispatch update fails

Imagine a distributor sending a customer an update linked to a dispatch. The message fails, and the responsible employee records the failure reason rather than immediately creating several retries. The order remains visible as requiring communication followup.

The team finds that the template used for the update is not ready in the connected account. The template owner resolves the approval or synchronisation issue, while operations decides whether an authorised alternative contact route is needed for that particular customer.

Before retrying, the employee checks whether another team member has already communicated the update. The final record explains the original failure, the chosen action and the outcome. This avoids duplicate or contradictory messages without claiming that the platform guarantees exactly one delivery.

## Who owns replies and handoffs?

Odoo documents account notification settings and conversations in Discuss. Review who receives new conversations and how participation affects later notifications. A general team notification is useful only if somebody takes responsibility for the customer's next step.

Define absence cover and handoff rules. When a reply requires warehouse, finance or specialist support, identify the recipient and the expected action. Do not assume that adding several people to a conversation establishes a single accountable owner.

If the process creates a Helpdesk ticket, make the relationship explicit. Helpdesk SLAs measure configured ticket criteria and stages; they do not automatically measure every WhatsApp conversation. A manual handoff or custom integration should preserve the reference and avoid creating duplicate tickets for repeated messages.

## When should the exception queue be reviewed?

Choose a review frequency based on the business consequence. A delayed service update may need faster attention than a routine marketing response. Assign a person to unresolved failures and unanswered conversations rather than relying on notifications remaining visible indefinitely.

Common mistakes include retrying without reading errors, treating template approval as correct variable mapping and assuming a message was acted on because it was sent. Another is leaving handoffs in a group conversation with no named owner.

Rehearse a rejected template, an invalid contact, an interrupted connection and a reply received while the owner is absent. Record the expected escalation and completion evidence. The process is useful when the team can explain what happened to an important message and what remains to be done, even after the original sender has left the conversation.

## Related

For support ownership, read [response and resolution responsibilities](/blog/2026/10/29/odoo-support-contract-sla/).

## Official references

1. [WhatsApp configuration, templates and troubleshooting](https://www.odoo.com/documentation/19.0/applications/productivity/whatsapp.html)
1. [Helpdesk SLA policies](https://www.odoo.com/documentation/19.0/applications/services/helpdesk/overview/sla.html)

*How this article was checked: the official Odoo 19 references and their Odoo 20 counterparts were reviewed in October 2026. Examples are illustrative planning exercises, not client results or tests on a live database.*

For help applying this to your business, see my [Odoo consulting services](/services/odoo-consulting/).
