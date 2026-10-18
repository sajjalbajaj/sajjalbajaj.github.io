---
layout: post
title: "WhatsApp Business Workflows in Odoo 19: Orders, Appointments and Support"
date: 2026-10-22 08:00:00 +0530
tags: [Odoo, Odoo 19, WhatsApp, CRM, Sales, Customer Service, Automation, India]
hub: integrations
description: "A practical guide to using Odoo 19 with WhatsApp Business for sales, appointments and service updates, including setup requirements and workflow limits."
faqs:
  - q: "Can I connect the regular WhatsApp Business app to Odoo?"
    a: "No. Odoo 19's integration uses the WhatsApp Business Platform API. Personal WhatsApp accounts and the WhatsApp Business mobile app are not compatible with this integration."
  - q: "Does Odoo send WhatsApp messages automatically?"
    a: "Users can send approved templates from supported records. Studio automated actions can also send a WhatsApp template when a record condition is met, if the relevant apps, template and account are configured."
  - q: "Is WhatsApp in Odoo Community?"
    a: "Odoo's documentation lists the WhatsApp app as Enterprise only. Confirm edition and hosting requirements for your database before planning a rollout."
---

WhatsApp often becomes the unofficial system for order questions, appointment reminders and delivery updates. Odoo 19 can connect business conversations to sales and service records, but the integration has specific account, template and edition requirements. A useful rollout starts by choosing a few expected messages and tying each one to a real Odoo workflow.

For a short introduction, see [WhatsApp in Odoo](/blog/2026/09/08/odoo-whatsapp/). This guide focuses on designing and testing the workflows.

## What the Odoo integration does

Odoo connects to a WhatsApp Business Platform account through Meta's API. Users can send and receive messages from Odoo. The documentation describes approved templates with dynamic values for records such as sales quotations, Point of Sale receipts and invoices, and event tickets. A customer can also start a conversation by messaging the company's public number.

The distinction between the WhatsApp Business Platform and the WhatsApp Business mobile app matters. The regular personal account and the mobile app are not compatible with this Odoo integration. Odoo also lists the WhatsApp app as an Enterprise feature. Check these constraints before promising a particular setup to a team.

## Choose workflows before templates

Start with a short list of messages that solve a real service problem:

1. **Sales:** send a quotation link after a salesperson confirms the contact and products.
2. **Appointments:** send a booking confirmation or a reminder with the date, time and location.
3. **Order status:** share a dispatch or pickup update when the order reaches the right stage.
4. **Support:** let customers ask a question, then route the conversation to a responsible operator.
5. **Retail:** send a receipt or invoice when a customer has asked to receive it digitally.

Each workflow needs an owner, a trigger, a message template and a fallback. For example, an incorrect phone number should create a clear follow-up task instead of silently leaving a customer uninformed.

## Prepare Meta and Odoo

Odoo's setup process uses a Meta business account and developer account, a configured WhatsApp product, and a tested API connection. After that connection is established, users can send and receive messages through Odoo's communication tools. Templates need approval and should use variables that map to dependable record fields.

Before go-live, test a complete path with an internal number. Check the customer name, phone number format, template language, variable values, links, replies and the record where the conversation is visible. Test a cancelled or changed order too. A message that was correct when an order was first confirmed may become misleading after the order changes.

## Automate carefully

Odoo Studio automated actions can send WhatsApp messages using an existing template. This can be useful for a well-defined trigger, such as a record reaching a stage. Begin with one action and a small test group. Make sure the trigger cannot fire repeatedly when the same record is edited several times.

Avoid sending every internal status change to a customer. Select events that are useful from the customer's point of view, and give staff a way to correct an error or take over a conversation. Marketing messages also need the right consent and channel practices. Keep service notices separate from promotional campaigns so customers understand why they are hearing from you.

## Set team rules

Decide which team owns incoming messages, who covers holidays, when an unanswered chat becomes a task, and how staff record an issue that needs a phone call. For different departments, separate WhatsApp accounts or channels can help keep conversations with the right team. Limit access to customer messages according to the team's role.

Track operational measures such as first response time, unanswered conversations, appointment no-shows and order questions per shipment. The goal is fewer missed handoffs, not simply a larger message count.

For help connecting messaging to your sales and service workflow, see [Odoo implementation services](/services/odoo-implementation/).

Based on the official [Odoo 19 WhatsApp documentation](https://www.odoo.com/documentation/19.0/applications/productivity/whatsapp.html) and [automated actions documentation](https://www.odoo.com/documentation/19.0/applications/productivity/studio/automated_actions.html). Meta account policies and message charges should be checked with Meta before launch.
