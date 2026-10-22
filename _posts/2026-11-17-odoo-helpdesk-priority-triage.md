---
layout: post
title: "Odoo Helpdesk Priority: Triage Impact Before Starting the Clock"
date: 2026-11-17 10:00:00 +0530
tags: [Odoo, Odoo 19, ERP, Best Practices, Customer Management, Business Automation, ERP Implementation, Setup]
hub: services
description: "Define Odoo Helpdesk priority using business impact, affected users and workarounds, then check how the chosen priority affects SLA policy matching."
faqs:
  - q: "Does an SLA with no priority selection apply to every ticket?"
    a: "The reviewed Odoo documentation says an empty priority criterion applies to low priority tickets with zero stars. Do not assume it is a wildcard."
  - q: "Should customer urgency alone determine ticket priority?"
    a: "Use the agreed support policy to assess impact, urgency and available workarounds. Record the reason for the chosen priority and review it when facts change."
---

**Short answer:** Assign Odoo Helpdesk priority from an agreed assessment of business impact and urgency. Then confirm which SLA policy matches that priority. I would not use the number of stars as a substitute for understanding what the customer cannot do and whether a workaround exists.

## Applies to

Odoo 19 Enterprise Helpdesk and its SLA policies. The corresponding Odoo 20 SLA reference was reviewed and describes the same priority matching behaviour. Impact categories and triage questions in this article are recommended operating definitions, not additional standard priority fields.

## What should the first support review establish?

A useful triage asks what is affected, who is affected, when the issue started and whether work can continue another way. A problem blocking all dispatch is different from a cosmetic issue on one user's screen, even if both messages arrive with “urgent” in the subject.

Record the facts without demanding a complete technical diagnosis from the customer. Support can establish impact before knowing the root cause. The first objective is to decide the response path and the next owner.

Also identify the relevant service agreement. A customer may have several services with different coverage. The person triaging should understand the policy that applies instead of selecting a priority solely to produce a convenient deadline.

## How does priority affect Odoo SLA matching?

Odoo SLA policies can use criteria including team, priority, tags, customers and, with the relevant configuration, services. The documentation says a priority based policy applies once the ticket priority matches the criterion.

A particularly important detail is the empty priority selection. The reviewed documentation says it applies to low priority tickets with zero stars. It should not be treated as “all priorities”. A team can unintentionally leave tickets outside the intended policy if this assumption is wrong.

Review representative tickets for each priority and customer category. Check which policy is attached and what deadline is calculated. The policy name alone does not prove the matching logic covers the situations described in the support contract.

## Who can change priority, and why?

Give the triage role a clear basis for changes. If new evidence shows a wider outage, raising priority is appropriate. If a workaround restores operations, a different response path may be justified under the agreement. Record the reason so the change is understandable later.

Avoid lowering priority simply because a deadline is approaching. That turns classification into a reporting tactic and weakens the support record. The customer impact and agreed policy should drive the decision.

Likewise, avoid letting every employee create their own urgency definition. The support lead should maintain examples of common cases and the expected classification. These examples help staff make consistent decisions without pretending that every incident is identical.

## Worked example: a warehouse cannot print labels

Imagine an illustrative customer reporting that labels will not print. Initial triage finds that one workstation is affected and another workstation can print the required labels. Dispatch can continue with inconvenience, so the support owner records the workaround and applies the agreed priority.

Later, the second workstation fails and dispatch stops. The owner updates the impact description and reviews the priority under the support policy. The change is based on new facts rather than the customer sending a second strongly worded email.

The team also checks that the correct SLA policy matches the updated priority. The ticket history explains both decisions. A manager reviewing performance can understand when the operational impact changed instead of seeing an unexplained sequence of stars.

## How should a handover preserve the triage decision?

When a ticket moves between teams, include the current impact, the available workaround and the reason for its priority. The receiving team should review new evidence without losing the original context. A technical specialist may change the diagnosis while the customer impact remains the same, so a new owner does not automatically justify a different priority.

## When it fits and when it doesn't

This approach fits Helpdesk teams with several customers, support levels or issue types. It is especially helpful when staff disagree about what “urgent” means.

It does not replace specialist incident response procedures where safety, security or regulated operations are involved. Those cases may require separate escalation routes. The Helpdesk priority can support coordination, but the organisation must define the specialist response and ownership.

## Common mistakes

**Treating an empty SLA priority as all priorities.** Check the documented matching behaviour.

**Classifying by the subject line alone.** Establish business impact and available workarounds.

**Changing priority to improve a report.** Record evidence based reasons for changes.

**Waiting for a full diagnosis before assigning an owner.** Triage should establish responsibility and the next response while investigation continues.

## What should the support lead review?

Review tickets that were repeatedly reprioritised, had no matching policy or received contradictory classifications from different staff. These are useful examples for improving the triage definitions.

Compare the recorded impact with the action taken. The aim is a consistent response to customer conditions, not a perfectly even distribution of priorities. When the team understands the classification and the SLA criteria, both customers and managers receive a clearer explanation of what will happen next.

## Related

Read [Odoo Support Contracts: Response, Resolution and Ownership](/blog/2026/10/29/odoo-support-contract-sla/) for the connected workflow.

## Official references

1. [Service level agreements (SLA)](https://www.odoo.com/documentation/19.0/applications/services/helpdesk/overview/sla.html)
1. [Close tickets](https://www.odoo.com/documentation/19.0/applications/services/helpdesk/advanced/close_tickets.html)

*How this article was checked: official Odoo 19 documentation was reviewed in October 2026. Odoo 20 references were also checked; material differences or moved pages are identified above. Examples are illustrative business scenarios, not client results or tests on a live database.*

If you need help translating these decisions into your own workflow, see my [Odoo consulting services](/services/odoo-consulting/).
