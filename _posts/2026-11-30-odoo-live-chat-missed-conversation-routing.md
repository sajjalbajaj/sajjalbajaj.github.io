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

The configuration should follow that decision. It should not become the place where an unresolved policy choice is hidden. Write down the expected outcome, the owner and the evidence that will show the step is complete. This gives administrators a testable rule and gives reviewers a reason for each exception.

## What Odoo records and what the business must decide

* Channels determine operators, availability and website behaviour.
* Rules can vary by URL and country.
* Chatbots can be enabled when operators are unavailable.

These records make the workflow visible, but they do not judge the commercial, legal or operational meaning on their own. The process owner must decide which source is authoritative, who may correct it and what happens when two records disagree.

## A practical control design

1. **Publish realistic operator hours.**
2. **Use page context to route high intent conversations.**
3. **Create a follow up record when the issue remains open.**
4. **Review abandoned and repeatedly transferred chats.**

Keep the exception route as clear as the normal route. Staff should know where to place an item that cannot yet be completed, who reviews it and which deadline or business event should bring it back for attention. A dashboard with only completed records can look healthy while unresolved work remains outside the system.

## How to introduce the control

Start with a small set of representative records: one normal transaction, one incomplete record, one correction and one case near a reporting or operational cutoff. Walk each example through the proposed workflow with the people who create, review and use the result. This exposes differences in language and responsibility before they become configuration problems.

Configure the minimum fields and stages needed to express the agreed decision. Add automation only after the team can explain the manual path. An automated action should have a narrow trigger, a visible result and an exception route. If users cannot tell why a record moved or changed, the automation will make investigation slower even when it saves keystrokes.

Before release, compare permissions with actual responsibilities. The person who enters a record may not be the person authorised to approve a correction or financial outcome. Test the workflow with ordinary users as well as administrators, and include a record that should be refused or returned for more information.

## Evidence to keep with the decision

Keep the source reference, responsible person, relevant date, reason for any correction and the final linked record. Where a decision depends on an external document, bank movement, customer message or manager confirmation, retain the reference according to the organisation's document and privacy policy. Avoid copying sensitive material into several places merely to make it visible.

A useful audit trail lets a reviewer reconstruct the sequence without relying on a private inbox or someone's memory. It should show what was known at the time, what exception was found, who resolved it and which downstream record was affected. That is more valuable than a long activity history with no clear outcome.

## Worked example

A visitor asks a technical question after support hours. The chatbot captures the subject and email, creates the agreed follow up route, and tells the visitor when to expect a response. The morning team sees the open request.

The example is illustrative. The useful point is the sequence: confirm the business event, compare it with the Odoo record, resolve the difference with an accountable owner and retain enough context for the next person to understand the result.

## When it fits

This fits websites using chat for sales qualification or first line support.

## Limits and boundaries

It does not guarantee a response unless ownership, hours and escalation are staffed in practice.

Where local law, tax, employment, privacy or regulated practice matters, have the appropriate specialist define the requirement. Then test whether the configured workflow produces the required record. A software screen is not evidence that the policy itself is correct.

## Common mistakes

**Showing chat as available without operators.** Review the underlying record and the next operational consequence before closing the exception.

**Ending the conversation without a follow up record.** Review the underlying record and the next operational consequence before closing the exception.

**Collecting contact details without explaining their use.** Review the underlying record and the next operational consequence before closing the exception.

**Sending every chat to the same team.** Review the underlying record and the next operational consequence before closing the exception.

## What the owner should review

Abandoned chats, unanswered messages, transfers, chatbot exits and conversations with no next action.

Review a small sample as well as totals. Sampling shows whether the reason, source document and next action are understandable, while totals reveal ageing and recurring patterns. Repeated manual corrections usually indicate a rule, data source or ownership problem worth fixing upstream.

The goal is not to remove every exception. It is to make each important exception visible, owned and traceable to a decision.

## Related

Read [How to Set Up Live Chat in Odoo](/blog/2026/10/04/how-to-set-up-live-chat-odoo/) for the connected workflow.

## Official references

1. [Live Chat](https://www.odoo.com/documentation/19.0/applications/websites/livechat.html)

*How this article was checked: official Odoo 19 documentation was reviewed in November 2026. Confirm the corresponding documentation for the installed version before implementation. Examples are illustrative business scenarios, not client results or tests on a live database.*

If you need help translating these decisions into your own workflow, see my [Odoo consulting services](/services/odoo-consulting/).
