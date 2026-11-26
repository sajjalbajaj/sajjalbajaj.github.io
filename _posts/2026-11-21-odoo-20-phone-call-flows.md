---
layout: post
title: "Odoo 20 Phone Call Flows: Route Business Calls Deliberately"
date: 2026-11-21 07:00:00 +0530
tags: [Odoo, Odoo 20, ERP, Best Practices, Phone, Customer Management, Support, Integration]
hub: integrations
description: "Build Odoo 20 Phone call flows for open hours, queues and voicemail, with clear limits around the required Odoo Phone service number."
last_modified_at: 2026-11-27
faqs:
  - q: "Can Odoo 20 call flows be assigned to any external VoIP number?"
    a: "The cited documentation describes numbers purchased through the Odoo Phone service. Do not assume the same configuration works for every external provider."
  - q: "What should terminate a call flow branch?"
    a: "The guide requires branches to end with a Call, Voicemail or Hangup node. Review every branch, including closed hours and unavailable users."
  - q: "Does routing a call to voicemail create a helpdesk ticket?"
    a: "The call flow guide does not establish that outcome. Define and test any ticket creation or follow up integration separately."
---

**Short answer:** Odoo 20 Phone call flows route calls through conditions, menus, users, groups, queues and voicemail. The documented setup applies to a number purchased through the Odoo Phone service. Design the unanswered and closed hours paths first, then test every branch before assigning the flow to the business number.

## What is the prerequisite that teams can miss?

The [call flow documentation](https://www.odoo.com/documentation/20.0/applications/productivity/phone/configuration/call_flows.html) starts with a number purchased through Odoo Phone. It is not a general promise that the same flow can be attached to every existing external VoIP number.

Confirm the actual number, service and account before building the routing plan. If another provider is involved, investigate its supported integration rather than treating the Odoo Phone instructions as interchangeable.

## How is a flow assembled?

Create the flow under Phone configuration, add nodes and connect them. The documented nodes support time conditions, an interactive menu, calls and voicemail or hangup outcomes. Save the flow and assign it to the phone number.

Each branch must have a deliberate ending. Review the whole diagram, including options that a typical caller is unlikely to choose. A successful test of the main sales option does not establish that an invalid or unanswered branch is safe.

## What is the difference between calling a group and using a queue?

A group can ring several people together, while a queue lets the caller wait for availability. Calling a single user creates another distinct dependency.

Decide who actually covers the service and how long a caller should wait. Check the membership after configuration changes; the guide notes that saving and reopening can refresh displayed members.

Avoid assigning a group simply because its name looks correct. Confirm the people receiving the call and their responsibility for follow up.

## How should open and closed hours behave?

A Time Condition can separate business hours from the closed route. Check that open periods are actually configured: the documentation warns that no open period means the condition remains closed.

Use an illustrative support number with an open hours queue and an after hours voicemail. Test the exact boundary time as well as an ordinary daytime call. Include the time zone used by the configuration.

## Which tests should happen before switching the number?

| Proposed call | Evidence needed |
| --- | --- |
| Open hours with someone available | Correct destination answers |
| Everyone busy | Queue or fallback behaves as agreed |
| Closed hours | Correct message and voicemail route |
| Invalid menu input | Defined result rather than an abandoned branch |
| Voicemail left | Named person can retrieve and act on it |

A voicemail is not automatically a support ticket or a resolved request. If a separate system creates a ticket, test that integration and its failure path explicitly.

## What makes the flow operationally complete?

Approve the greeting, routing diagram, coverage and unanswered call owner together. Verify provider specific matters such as recording options separately; the routing guide does not settle legal or emergency calling requirements.

Record the configured number and test outcomes without exposing account credentials in the [ERP acceptance evidence resource](/resources/erp-acceptance-evidence/).

*Sources reviewed on 27 November 2026. Scenarios are proposed acceptance cases, not reported customer results. Confirm edition, installed modules and provider requirements for your database.*
