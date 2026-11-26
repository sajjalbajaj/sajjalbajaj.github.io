---
layout: post
title: "Odoo Live Chat: Route Missed Conversations to Follow Up"
date: 2026-11-30 09:00:00 +0530
tags: [Odoo, Odoo 19, ERP, Best Practices, Customer Management, Business Automation, Support, Integration]
hub: services
description: "Design Odoo Live Chat availability, chatbot and follow up ownership so missed conversations become visible sales or support work."
faqs:
  - q: "Can a chatbot operate only when no operator is available?"
    a: "Yes. Odoo documents an option to enable the chatbot only when no operator is active."
  - q: "What should happen to an unresolved chat?"
    a: "Create an owned follow up in the appropriate sales or support process."
---

**Short answer:** Real time chat needs a fallback. Define what happens when no operator is available, when a chatbot cannot answer and when the visitor leaves before resolution.

## Applies to

Odoo 19 Live Chat with optional Helpdesk, CRM or chatbot workflows.

## Start with the decision

Which team owns the next action after the live conversation ends or never reaches an operator?

## What Odoo records and what the business must decide

* Channels determine operators, availability and website behaviour.
* Rules can vary by URL and country.
* Chatbots can be enabled when operators are unavailable.

## A practical control design

1. **Publish realistic operator hours.**
2. **Use page context to route high intent conversations.**
3. **Create a follow up record when the issue remains open.**
4. **Review abandoned and repeatedly transferred chats.**

## Worked example

A visitor asks a technical question after support hours. The chatbot captures the subject and email, creates the agreed follow up route, and tells the visitor when to expect a response. The morning team sees the open request.

## When it fits

This fits websites using chat for sales qualification or first line support.

## Limits and boundaries

It does not guarantee a response unless ownership, hours and escalation are staffed in practice.

## Common mistakes

**Showing chat as available without operators.** Review the underlying record and the next operational consequence before closing the exception.

**Ending the conversation without a follow up record.** Review the underlying record and the next operational consequence before closing the exception.

**Collecting contact details without explaining their use.** Review the underlying record and the next operational consequence before closing the exception.

**Sending every chat to the same team.** Review the underlying record and the next operational consequence before closing the exception.

## What the owner should review

Abandoned chats, unanswered messages, transfers, chatbot exits and conversations with no next action.

The goal is not to remove every exception. It is to make each important exception visible, owned and traceable to a decision.

## Related

Use the [ERP acceptance evidence worksheet](/resources/erp-acceptance-evidence/) to record the outcome and supporting records.

Read [How to Set Up Live Chat in Odoo](/blog/2026/10/04/how-to-set-up-live-chat-odoo/) for the connected workflow.

## Official references

1. [Live Chat](https://www.odoo.com/documentation/19.0/applications/websites/livechat.html)

*How this article was checked: official Odoo 19 documentation was reviewed in November 2026. Confirm the corresponding documentation for the installed version before implementation. Examples are illustrative business scenarios, not client results or tests on a live database.*

If you need help translating these decisions into your own workflow, see my [Odoo consulting services](/services/odoo-consulting/).
