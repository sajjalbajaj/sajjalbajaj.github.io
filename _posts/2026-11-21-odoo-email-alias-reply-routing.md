---
layout: post
title: "Odoo Email Aliases: Separate New Requests from Replies"
date: 2026-11-21 10:00:00 +0530
tags: [Odoo, Odoo 19, ERP, Best Practices, Integration, Customer Management, Business Automation, Setup]
hub: integrations
description: "Review Odoo email alias routing, catchall replies and forwarded messages so new requests reach the right team and existing conversations stay connected."
faqs:
  - q: "Should new requests be sent directly to the catchall address?"
    a: "No. Odoo documents catchall as a reply route for messages previously sent from the database. Use an appropriate application alias for new requests."
  - q: "Does matching an email subject guarantee correct threading?"
    a: "No. Odoo documents routing replies using message identifiers. Review the original message headers and mail path rather than relying only on the visible subject."
---

**Short answer:** Use an Odoo application alias for new requests and preserve the reply path for existing conversations. The catchall address is a reply mechanism, not a general inbox for creating arbitrary new work. I trace one message through its actual route before changing routing settings across the database.

## Applies to

Odoo 19 inbound email and application aliases across editions, with Helpdesk available in Enterprise and other destinations depending on installed apps. The corresponding Odoo 20 inbound email documentation was reviewed and describes the same alias and catchall distinction. Hosting and mail provider configuration affect the delivery path.

## What should happen to a new message?

A new enquiry needs a defined destination and owner. Odoo documents application aliases for destinations such as sales teams, helpdesk teams and projects. Depending on the configured application, a direct message can create a new record in the relevant workflow.

Agree which public address serves which purpose. A sales enquiry and a support incident may require different records and response teams. If every published address forwards to several places, staff may receive duplicate work before anyone has considered the customer's request.

Keep the intake rule understandable. The person maintaining the mail service should know which address reaches Odoo, and the application owner should know which team receives the created record. Both sides are necessary because successful email delivery alone does not prove correct business routing.

## How should replies stay with the existing record?

Odoo documents matching replies using message identifiers so they can be posted to the appropriate chatter. The visible subject is helpful to people but is not a complete explanation of the routing mechanism.

An application alias can receive replies to messages sent from its records. Where an application does not have its own alias, Odoo uses the catchall reply address. The documentation states that a direct new email to catchall is not the intended workflow and can be rejected.

Teach staff to preserve the existing conversation when replying about the same issue. Copying a message into a fresh email, forwarding through a shared mailbox or stripping headers can change the information available for threading. Investigate the actual message path when the result differs from expectations.

## Why should alias changes be planned?

Previously sent emails retain the reply address they contained at the time. Changing an address today does not rewrite messages already sitting in customer inboxes. The Odoo documentation specifically cautions about changing catchall and bounce local parts because older replies can still target the previous values.

Plan a transition with the mail administrator when an address or domain changes. Review how older replies will be handled and which public contact points need updating. The exact arrangement depends on the hosting and mail provider, so do not assume one universal forwarding instruction fits every deployment.

Also avoid circular routes. A message that moves from a shared mailbox to Odoo and back through another rule can create confusing duplicates or repeated notifications. Document the intended direction and remove redundant forwarding only after understanding which business address each rule serves.

## Worked example: support messages create duplicate tickets

Imagine an illustrative service company publishing one support address. Its mail provider forwards messages to Odoo, while a second mailbox rule also forwards copies to the same team alias. Customers send one request, but staff sometimes find more than one record.

The administrator compares a representative original message, its headers and the forwarding configuration. They identify the duplicate route and coordinate the correction with the support owner. The review includes both a new request and a reply to an existing conversation, because those are different routing cases.

The team then documents the intended path. Staff no longer manually forward copies simply because they cannot immediately see a ticket. They use an agreed investigation process that checks delivery and record creation before producing another duplicate.

## When it fits and when it doesn't

This approach fits businesses using email to create leads, tasks or tickets and teams investigating replies appearing on the wrong record. It is particularly useful after changing mail providers or public contact addresses.

It does not replace a complete email deliverability review. Spam filtering, sender authentication and outbound delivery are related but separate concerns. First establish whether the issue is message delivery, record creation or conversation matching, then involve the owner of that part of the system.

## Common mistakes

**Publishing catchall for new enquiries.** Use the configured application intake address.

**Matching only by subject line.** Review message identifiers and the actual forwarding path.

**Changing addresses without considering old replies.** Plan how previously sent messages will continue to reach the intended records.

**Forwarding another copy before investigating.** Check whether the original already created work and avoid multiplying the problem.

## What should a routing handover include?

Keep a diagram or concise description of the public address, provider rules, Odoo destination and responsible team. Include ownership of domain and mail configuration without placing passwords or other secrets in the document.

Maintain representative examples of a new request and a reply, with any sensitive content removed from training material. These examples help future administrators distinguish normal behaviour from a failure. A clear route and a named owner make email intake maintainable long after the original configuration work is finished.

## Related

Read [Odoo Integration Retries: Prevent Duplicate Business Actions](/blog/2026/11/12/odoo-integration-retries-duplicate-orders/) for the connected workflow.

## Official references

1. [Manage inbound messages](https://www.odoo.com/documentation/19.0/applications/general/email_communication/email_servers_inbound.html)

*How this article was checked: official Odoo 19 documentation was reviewed in October 2026. Odoo 20 references were also checked; material differences or moved pages are identified above. Examples are illustrative business scenarios, not client results or tests on a live database.*

If you need help translating these decisions into your own workflow, see my [Odoo consulting services](/services/odoo-consulting/).
