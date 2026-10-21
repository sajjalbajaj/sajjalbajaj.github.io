---
layout: post
title: "Odoo Change Requests: Control Scope Without Blocking Useful Work"
date: 2026-10-30 10:00:00 +0530
tags: [Odoo, Odoo 19, ERP, Implementation, Project, Best Practices, SME, Digital Transformation]
hub: planning
description: "Assess Odoo change requests through business need, alternatives, dependencies and acceptance criteria while keeping delivery scope and decisions visible."
faqs:
  - q: "Is every new request extra development?"
    a: "No. A requirement may fit standard configuration, training or a process decision. Assess the need before selecting custom code."
  - q: "Can an urgent change bypass review?"
    a: "Use a proportionate emergency process with an authorised owner, recovery plan and recorded followup. Urgency should shorten the path without erasing accountability."
---

**Short answer:** a useful Odoo change process explains why a request matters, how it could be solved and what it changes in the delivery plan. Keep the approval proportionate to the impact. The aim is to make decisions visible so that necessary improvements can proceed without quietly consuming the time and budget assigned to other work.

## Applies to

Odoo 19 implementation governance. Project tasks, milestones and updates can organise delivery; the approval method described here is a recommended business process. The corresponding Odoo 20 documentation was checked in October 2026. This article targets Odoo 19; confirm your installed version before following any screen labels.

## What information should a request contain?

Start with the business problem and an example. Identify the user, the current outcome and the desired outcome. A request for a new field may actually be a need for approval evidence, reporting or integration mapping. Understanding that need prevents the team from implementing a narrow solution that creates another problem later.

Record the consequence of leaving the process unchanged. Is trading blocked, is staff time being wasted or is the request mainly a preference? Describe the evidence without inflating every item into a critical issue. A shared understanding of impact makes prioritisation easier.

Identify the affected process owner. The person suggesting an improvement may not have authority to change accounting treatment, warehouse policy or customer commitments. Bring the right owner into the decision before the technical team begins detailed design.

## How should alternatives be assessed?

I would first check standard behaviour and configuration. Training or a clearer business policy may resolve the problem. If an extension is needed, compare a maintained application, an integration and custom development against the actual requirement.

Consider the whole workflow. A convenient sales change might affect invoicing, reporting or stock reservation. Identify the records created and the teams that depend on them. The smallest visible screen change is not always the smallest operational change.

Include future maintenance in the comparison. Custom code needs ownership, documentation and compatibility review during upgrades. This does not make customisation inherently unsuitable. It makes the ongoing responsibility part of the decision instead of a surprise after launch.

## What should an estimate explain?

An estimate should identify deliverables, assumptions, dependencies and acceptance criteria. Separate investigation from confirmed implementation work when important questions remain unanswered. A precise number without a clear basis can create false confidence.

Show the effect on the existing plan. Adding work may require a later date, more capacity or removal of another item. If the team claims there is no impact, ask which available capacity or simplification makes that possible. The tradeoff should be explicit rather than hidden in overtime or reduced review.

Record external dependencies such as supplier access, sample files and business decisions. A request can have a small development effort but a long waiting period. Distinguish those factors so that the promised delivery date reflects more than coding time.

## Worked example: a new delivery approval rule

Imagine a distributor asking for an additional approval before dispatching certain orders. The initial request is to add a button. Discussion reveals that the real need concerns orders exceeding an agreed commercial exposure, while warehouse staff must still see which orders are available to prepare.

The team reviews existing controls and defines the conditions requiring approval, the authorised role and the treatment of changed orders. Finance and warehouse owners agree the expected outcome. The design also considers what happens when an approver is absent.

The approved request includes normal, rejected and amended order scenarios. Delivery impact is assessed before work begins, and the release notes explain the new responsibility. This produces an accountable process rather than a button whose meaning different departments interpret differently.

## Which approval path fits the change?

A small configuration correction can use a lightweight review when its consequences are understood. A change affecting financial records, external communications or several companies needs broader review. Define these categories with the business so that the process is predictable.

For urgent operational fixes, identify who can authorise an emergency release and what recovery evidence is required. Record the action and complete a followup review. An emergency path should remain exceptional and explainable, not become the normal route for unplanned preferences.

Keep approved, rejected, deferred and withdrawn requests distinguishable. A deferred request needs a reason and a review trigger. Otherwise the backlog becomes a collection of promises that different people assume have already been accepted.

## How do you close a change properly?

Link the delivered work to the approved scenarios and obtain the relevant business acceptance. Include documentation and training where responsibilities changed. A technical completion status alone does not establish that users understand the new process.

Update the baseline after acceptance. Odoo Project updates and milestones can help communicate the delivery position, but the supporting decision record still matters. Future reviewers should be able to tell why a change exists and which alternatives were considered.

Common mistakes include estimating before understanding the need, accepting requests through private messages and allowing a small enhancement to expand without a new decision. Another is treating rejected requests as forgotten requests, which encourages the same debate to restart repeatedly.

A practical change register does not need elaborate administration. It needs a stable reference, clear ownership, a reasoned decision and evidence that the result matches the agreement. That discipline helps the business keep improving Odoo while preserving a realistic view of what the team can deliver next.

## Related

For the original scope baseline, see [Odoo discovery decisions](/blog/2026/10/28/odoo-discovery-phase-deliverables/).

## Official references

1. [Project dashboards and updates](https://www.odoo.com/documentation/19.0/applications/services/project/project_management/project_dashboard.html)
1. [Customisation and upgrade preparation](https://www.odoo.com/documentation/19.0/administration/upgrade.html)

*How this article was checked: the official Odoo 19 references and their Odoo 20 counterparts were reviewed in October 2026. Examples are illustrative planning exercises, not client results or tests on a live database.*

For help applying this to your business, see my [Odoo consulting services](/services/odoo-consulting/).
