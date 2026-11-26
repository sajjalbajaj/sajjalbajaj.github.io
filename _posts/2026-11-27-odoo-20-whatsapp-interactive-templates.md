---
layout: post
title: "Odoo 20 WhatsApp: Interactive Templates and Number Blocking"
date: 2026-11-27 07:00:00 +0530
tags: [Odoo, Odoo 20, ERP, Best Practices, WhatsApp, Integration, Customer Management, Support]
hub: integrations
description: "Plan Odoo 20 WhatsApp interactive templates, named parameters and number blocking with approval, recipient and reply handling checks."
faqs:
  - q: "Which WhatsApp changes are confirmed in Odoo 20?"
    a: "The release notes identify interactive templates, named parameters, default recipients, direct number blocking and simplified authentication."
  - q: "Does a customer pressing a button automatically update an ERP transaction?"
    a: "Do not assume that. Define and demonstrate how the response reaches the relevant business record and who handles exceptions."
  - q: "Are templates ready to use as soon as they are created?"
    a: "No. The WhatsApp documentation requires Meta approval and synchronisation before approved templates can be used."
---

**Short answer:** Odoo 20 adds WhatsApp interactive templates, named parameters, default recipients and direct number blocking. Use those controls to support a clear customer purpose. Verify approval, the actual recipient, populated values and the business handling of replies before enabling a message flow.

## What is confirmed for this version?

The [Odoo 20 release notes](https://www.odoo.com/odoo-20-release-notes) confirm the new capabilities. The broader [WhatsApp documentation](https://www.odoo.com/documentation/20.0/applications/productivity/whatsapp.html) explains account setup, template categories, variables, buttons, approval and synchronisation.

The general guide still includes positional placeholder examples, so do not treat those examples as a full specification of the new named parameter interface. Inspect the template fields in the actual Odoo 20 database.

## How should an interactive message be designed?

Consider an illustrative appointment reminder offering a response or a contact route. Keep the message tied to the specific appointment and avoid including unnecessary sensitive details.

Define what each available button means operationally. A website link, a phone call action and a reply are different outcomes. A customer tapping a response does not by itself prove that an appointment or order has changed in the ERP.

If a reply is meant to update a transaction, demonstrate the record change and the exception route. Otherwise describe it as a conversation requiring review.

## Why do parameters and recipients need separate tests?

Map each parameter to the intended business field and inspect a realistic preview. Test missing values, a changed contact number and a record linked to more than one contact.

Default recipients can save time but can also preserve an unsuitable selection. Before sending, confirm who is actually addressed and whether the message content is appropriate for that person.

| Proposed test | Result to inspect |
| --- | --- |
| Correct customer and record | Intended number and contextual values |
| Missing parameter | Safe handling instead of misleading text |
| Changed phone number | Current recipient is used as intended |
| Customer reply | Named owner and correct record context |
| Rejected template | Visible failure and approval follow up |

## What remains subject to Meta approval?

The documentation requires a template approval process and synchronisation of approved templates into Odoo. Select the category that matches the purpose and inspect the approval result before considering the template usable.

Check current provider requirements and commercial terms for the account. This guide does not promise a fixed message price, approval time or availability in every market.

## How should number blocking fit the support process?

Blocking is a communication control, not evidence that an order, complaint or appointment is closed. Restrict its use to the intended staff and define how a genuine customer can reach another support route.

Do not delete required transaction history simply because a number is blocked. Review an accidental block and its supported recovery procedure during acceptance testing.

The [failed message escalation guide](/blog/2026/11/03/odoo-whatsapp-failed-messages-escalation/) covers exception ownership. Use the [ERP acceptance evidence worksheet](/resources/erp-acceptance-evidence/) to record the proposed template and reply checks.

*Sources reviewed on 27 November 2026. Scenarios are proposed acceptance cases, not reported customer results. Confirm edition, installed modules and provider requirements for your database.*
