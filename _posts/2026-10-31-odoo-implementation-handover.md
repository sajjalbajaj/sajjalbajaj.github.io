---
layout: post
title: "Odoo Implementation Handover: Give the Operating Team What It Needs"
date: 2026-10-31 09:00:00 +0530
tags: [Odoo, Odoo 19, ERP, Implementation, Support, Project, Best Practices, SME]
hub: planning
description: "Prepare an Odoo handover with account ownership, process decisions, support routes, known limitations and practical evidence that the team can operate it."
faqs:
  - q: "Is training enough to complete handover?"
    a: "No. Training needs to be accompanied by access ownership, operational procedures, support responsibilities and documentation of important decisions and limitations."
  - q: "Should the implementation partner retain administrator access?"
    a: "Retain only access required by the agreed support arrangement, with named ownership and periodic review. Remove or adjust access that no longer has a business purpose."
---

**Short answer:** an Odoo handover is complete when the operating team can perform its work, find the reasons behind important decisions and obtain help through an agreed route. Deliver documentation, access ownership and known limitations alongside training. A final presentation or a shared folder alone does not establish that the business can run the system independently.

## Applies to

Odoo 19 implementation handover. Access management requires an authorised administrator; Project records can help organise delivery evidence. The corresponding Odoo 20 documentation was checked in October 2026. This article targets Odoo 19; confirm your installed version before following any screen labels.

## Who receives the handover?

Identify process owners, system administrators, support contacts and the sponsor responsible for unresolved decisions. Each needs different information. Warehouse supervisors need operating exceptions, while administrators need access and environment responsibilities. Finance needs reconciliations and the accepted opening position.

I would name an alternate for responsibilities that cannot wait for one person to return. Include account recovery and urgent incident escalation. Continuity is weak if the documentation is complete but only a departing project member can use the necessary accounts.

Make acceptance explicit. The recipient should confirm that the material is accessible and usable for their role. Sending a document is a delivery action; demonstrating that it supports the work is stronger evidence of handover.

## Which decisions should be documented?

Record the important configuration choices and their reasons. Examples include invoicing policies, warehouse routes, approval responsibilities and company boundaries. Future administrators need to know which settings reflect a business agreement before changing them.

Document custom modules and integrations separately. Identify their purpose, source, owner and supported deployment process. Include what happens when an external service fails and how someone recognises incomplete or duplicate processing. These details are often missing from ordinary user training.

Keep known limitations visible. Explain the business impact, approved workaround and review owner. A limitation does not become resolved because the implementation phase ends. Avoid leaving the support team to discover accepted compromises through frustrated user reports.

## What belongs in an operating runbook?

Describe routine checks and the action required when an exception appears. Include the evidence to collect, the person to contact and the boundary beyond which users should escalate. A runbook should help someone decide what to do, not merely describe where menus are located.

Cover periodic work as well as daily transactions. Month end, stock counts, user departures and planned changes may not occur during the first week after launch. Link to the approved procedure and identify the role responsible for maintaining it.

Keep environment and recovery information accessible. Identify production and rehearsal environments, backup ownership and the route for requesting restoration. Store credentials in the appropriate secure system rather than including passwords in the handover document.

## Worked example: a retail team takes ownership

Imagine a retailer completing an implementation across sales, stock and accounting. Cashiers have received training, but store supervisors are unsure who approves unusual refunds and finance does not know where to report a settlement discrepancy.

The handover review assigns those responsibilities and walks through a return, a payment mismatch and an unavailable device. The team identifies which issues it can resolve locally and which require application or payment provider support. The examples are recorded as short operating procedures.

Administrators then confirm account access and the support team reviews custom receipt changes. Finance accepts the reconciliation pack and records remaining limitations. The handover now connects actual operating roles with decisions and support routes, rather than relying on everyone remembering the training session.

## How should access change after delivery?

Review the accounts created during implementation. Temporary access may no longer be necessary, while the customer's permanent administrators need confirmed ownership. Use individual accounts and retain the permissions required by the agreed support arrangement.

Odoo's access documentation explains user permissions and warns that changes can affect database administration. Have an authorised administrator make reviewed changes and preserve a working administration route. Do not remove access casually while assuming another account can recover the situation.

Odoo 20 changes parts of the role model documented for Odoo 19, so use the instructions for the installed release when reviewing permissions. Handover should identify that release rather than presenting screenshots or role labels as permanently valid.

## When can the project close?

Project closure should reference accepted business scenarios, reconciled data, delivered documentation and an agreed list of outstanding work. Odoo Project milestones and updates can organise that information, but a closed milestone is not a substitute for the underlying acceptance.

Agree the transition from project support to ongoing support. Identify the reporting route, coverage and treatment of unresolved defects. Users should not need to understand a supplier's internal team structure to obtain help.

Common mistakes include transferring a large unindexed folder, leaving credentials with the implementation team and treating every unresolved issue as a future enhancement. Another is documenting only normal transactions while omitting the exceptions that generate the most support calls.

A practical final exercise is to ask the receiving team to handle several representative situations using the handover material. Record where they need undocumented help and close those gaps. The project can then finish with a clear operating owner and a useful body of knowledge that survives beyond the people who delivered it.

## Related

Prepare the longer term continuity pack using [data ownership and exit planning](/blog/2026/10/29/odoo-data-ownership-exit-plan/).

## Official references

1. [User access rights](https://www.odoo.com/documentation/19.0/applications/general/users/access_rights.html)
1. [Project updates and milestones](https://www.odoo.com/documentation/19.0/applications/services/project/project_management/project_dashboard.html)
1. [Database ownership management](https://www.odoo.com/documentation/19.0/administration/odoo_online.html)

*How this article was checked: the official Odoo 19 references and their Odoo 20 counterparts were reviewed in October 2026. Examples are illustrative planning exercises, not client results or tests on a live database.*

For help applying this to your business, see my [Odoo consulting services](/services/odoo-consulting/).
