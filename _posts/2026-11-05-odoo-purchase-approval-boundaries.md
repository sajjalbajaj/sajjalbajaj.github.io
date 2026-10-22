---
layout: post
title: "Odoo Purchase Approvals: Define Authority Before Adding Steps"
date: 2026-11-05 10:00:00 +0530
tags: [Odoo, Odoo 19, ERP, Best Practices, Purchase, Procurement, Security, ERP Implementation]
hub: purchase
description: "Design Odoo purchase approval boundaries around spending authority, exceptions, delegation and changed orders with evidence of who approved what."
faqs:
  - q: "Does every approval design require Studio?"
    a: "No. Assess the available standard workflow first. Studio approval rules are one Enterprise option for button actions; complex requirements may need a separately assessed extension."
  - q: "Does an approved order remain approved after every change?"
    a: "Do not assume that. Define which changes require renewed review and demonstrate the actual configuration for edits, imports and integrations."
---

**Short answer:** purchase approval should establish who may commit the business, under which conditions and with what evidence. Define that authority before adding workflow steps. Odoo can support approval mechanisms, but a chain of buttons will not resolve unclear spending policy or prove that every route to a purchase follows the intended control.

## Applies to

Odoo 19 Purchase and access management. The optional Studio approval mechanism discussed here requires Enterprise Studio; it should not be confused with every standard purchase approval feature. The corresponding Odoo 20 references were reviewed in October 2026; use the documentation for your installed release when configuring screens and fields.

## Which decision needs approval?

Separate the need to buy from supplier selection and final order commitment. A department may approve the business need while procurement selects a supplier and finance reviews an exceptional payment term. These are related decisions with different evidence and owners.

I would write the policy using representative purchases. Include ordinary replenishment, an urgent replacement, a service order and a change to an existing commitment. If the policy produces contradictory answers for those examples, resolve the business rule before configuring the system.

Define the amount basis carefully. Taxes, currency, freight and aggregated demand can affect the decision. A threshold is only meaningful when users agree what is being compared and what happens when the transaction crosses it after an amendment.

## Which Odoo mechanism fits the requirement?

Review the standard Purchase workflow and the permissions available in the installed system first. Avoid assuming that a complex matrix is necessary when a clear standard responsibility split meets the business need. Equally, do not promise standard behaviour without demonstrating the relevant conditions.

Odoo Studio documents approval rules for button actions, including conditions, approvers, approval order and an exclusive approval option. This can support selected designs in Enterprise. It is a specific mechanism whose coverage needs review, not a universal purchasing policy engine.

Keep custom development visible where required. If the business needs aggregate limits, unusual delegation or controls across external interfaces, identify those requirements explicitly. The proposal should explain how the design will be maintained and reviewed during upgrades.

## What should the approver see?

Present the business reason, supplier, products or services, amount basis, required date and exceptions. Link supporting quotations or specifications through the approved document process. The approver should be able to make a decision without requesting the same missing information every time.

Highlight material changes from an earlier approval. An added line, changed supplier or revised payment arrangement can alter the decision even when the total remains similar. A simple approved label can hide that distinction unless the process preserves the reviewed state.

Avoid making approval a substitute for receipt or invoice review. Authorising a purchase does not establish that the goods arrived or that a later supplier bill is correct. Keep those downstream controls assigned to their own owners.

## Worked example: an urgent maintenance purchase

Imagine a factory needing a replacement component urgently. The requester explains the operating consequence and provides the required specification. Procurement identifies an available supplier, but the delivery arrangement differs from the usual terms.

The authorised approver reviews both the need and the exception. If the primary approver is absent, the business uses its documented delegation route. The resulting order retains the reason, decision and supplier confirmation so that urgency does not erase accountability.

Later, the supplier proposes a different component. The team recognises this as a material change and obtains the required technical and commercial review. It does not assume that the original approval covers any substitute offered under the same order number.

## How should delegation and absence cover work?

Define who may delegate, the scope and the expiry of that authority. Odoo Studio's documented delegation options should be configured deliberately; an open ended assignment can remain active longer than intended. Maintain a review process for temporary access.

Consider separation of responsibilities. Where the policy requires different people to review separate steps, assess the exclusive approval behaviour and the user's other permissions. Multiple displayed steps do not prove that independent people made the decisions.

Keep an emergency route proportionate and documented. It should identify the person authorising the exception and the followup evidence required. If emergency approval becomes the normal path, investigate why the ordinary process cannot support the business.

## When does a layered approval fit?

Several steps fit when they represent genuinely different authority or specialist review. They are less useful when each person repeats the same check without responsibility for the outcome. Extra steps can delay purchasing while adding little evidence.

For a smaller organisation, a clear responsibility matrix and a limited exception route may be more practical. Match the workflow to available roles and ensure absence cover exists. A control depending on an unavailable person can encourage staff to bypass the system.

## Common mistakes

Common mistakes include approving an unclear amount basis, leaving delegation permanent and failing to review changes after approval. Another is checking only the user interface while imports or integrations follow a different path to the same business action.

Before relying on the design, demonstrate ordinary orders, boundary amounts, amendments and absent approvers using representative roles. Retain the observed outcomes and accepted limitations. The useful result is an explainable authority boundary that staff can follow, with clear evidence of the commitment the business actually approved.

## Related

Read [Odoo Change Requests: Control Scope Without Blocking Useful Work](/blog/2026/10/30/odoo-change-request-control/) for the connected workflow.

## Official references

1. [Approval rules](https://www.odoo.com/documentation/19.0/applications/studio/approval_rules.html)
1. [Access rights](https://www.odoo.com/documentation/19.0/applications/general/users/access_rights.html)
1. [Requests for quotation](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/purchase/manage_deals/rfq.html)

*How this article was checked: official Odoo 19 documentation and the corresponding Odoo 20 pages were reviewed in October 2026. The examples are illustrative, not client results or tests on a live database.*

For help designing this workflow, see my [Odoo consulting services](/services/odoo-consulting/).
