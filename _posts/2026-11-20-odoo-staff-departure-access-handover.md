---
layout: post
title: "Odoo Staff Departures: Transfer Work and Review Access"
date: 2026-11-20 10:00:00 +0530
tags: [Odoo, Odoo 19, ERP, Best Practices, ERP Implementation, Business Automation, Integration, Setup]
hub: admin
description: "Plan Odoo staff departure handovers across open work, access rights, integration ownership and shared documents so responsibilities remain clear."
faqs:
  - q: "Does reassigning opportunities remove a former employee access?"
    a: "No. Work ownership and account access are different concerns. An authorised administrator should handle the account and permissions through the organisation departure process."
  - q: "Should integrations run under an employee personal account?"
    a: "A dedicated integration identity with an accountable owner is generally easier to maintain. Review the installed API and permission model before transferring credentials or automation."
---

**Short answer:** An Odoo staff departure needs both a work handover and an access review. Reassigning records does not remove access, and removing access does not tell the next employee what to do. I plan those actions together, with explicit owners for customer work, administration and integrations.

## Applies to

Odoo 19 user permissions and application ownership, with access changes performed by an authorised administrator. The Odoo 20 access documentation adds a Light internal role, which is not assumed for Odoo 19. Hosting, identity provider and connector controls can require separate actions outside Odoo.

## Which responsibilities must continue?

Start with active business work: opportunities, support tickets, planned activities, approvals and documents awaiting a decision. The receiving owner should understand the next action and the promise already made to the customer or colleague.

Do not assume that changing one salesperson field transfers every related responsibility. Activity types and plans can have default users, and different applications may store ownership separately. Review the places where the employee's role affects future work as well as the items currently assigned to them.

Agree the timing with the manager and administrator so the receiving owner is ready when responsibility changes. Preserve historical authorship. The aim is continuity of responsibility, not rewriting who performed earlier actions. A departure should leave past decisions understandable while directing future work to someone who can act on it.

## Who should handle the access changes?

Odoo permissions involve roles, groups and record rules. The official documentation reserves access changes for an appropriately authorised administrator and warns that careless changes can remove necessary administrative access.

Use the organisation's account departure process and the supported controls for the installed system. Do not share the departing employee's password with the replacement. The new owner should work under their own identity and receive the permissions appropriate to their role.

Review other access paths as well. A business may use an external identity provider, hosting console, email service or connector. The Odoo user record alone does not describe every system the employee could access. Assign those checks to the respective service owners rather than assuming one action closes every path.

## What automation might depend on the employee?

An integration may use a personal API key, a scheduled process may run under a particular identity, or a shared template may assign work to the departing employee. These dependencies can remain invisible until something fails after the account change.

Identify the actual owner and credential arrangement without copying secrets into the handover note. Record the service, purpose and responsible team, then use the approved secret handling process for any necessary rotation or replacement.

Where appropriate, move automation to a dedicated service identity with a named human owner. That is a design decision requiring a review of permissions and hosting capabilities. Do not simply grant administrator rights to make a failed connector work again.

## Worked example: a sales coordinator leaves

Imagine an illustrative distributor whose coordinator manages customer enquiries and maintains a small import connector. The visible pipeline is reassigned, but an activity plan still defaults to the coordinator and the connector uses credentials associated with their account.

The handover review identifies both dependencies. The sales manager updates responsibility for future activities and confirms the receiving employee can access the relevant customer work. The integration owner plans a credential and permission change through the approved process.

The administrator handles access removal at the agreed time while preserving the historical records. After the transition, the team checks whether new enquiries and imports reach their intended owners. The departure is complete when both access and operational continuity have been addressed, not merely when the employee disappears from an active user list.

## When it fits and when it doesn't

This approach fits resignations, role changes, contractor departures and internal transfers. It is particularly useful when a small team has allowed several responsibilities to accumulate under one person.

It does not replace an incident response process where access must be removed immediately. In urgent situations, the authorised team may need to act first and recover continuity afterwards. The ordinary handover checklist should support that judgement rather than delay a necessary access decision.

## Common mistakes

**Sharing the old account with the replacement.** Preserve individual identity and assign appropriate access.

**Reviewing only current tasks.** Check templates, default users and recurring automation too.

**Assuming one account change covers every service.** Include hosting, identity and integration owners where relevant.

**Removing all administrative capability accidentally.** Keep authorised administration available through a reviewed access change.

## What evidence should close the handover?

Record the receiving owners, the outstanding exceptions and the administrator responsible for access actions. Avoid putting credentials or unnecessary personal information into that record. The handover should explain responsibilities, not become a new secret store.

Review the first cycle of new work after the transition. Look for activities still assigned to the old owner, failed integrations and documents nobody can maintain. Resolving these remaining dependencies is more useful than declaring success based only on the number of records reassigned.

## Related

Read [Odoo API Keys: Rotate Access Without Losing Integration Ownership](/blog/2026/11/12/odoo-api-key-rotation-ownership/) for the connected workflow.

## Official references

1. [Access rights](https://www.odoo.com/documentation/19.0/applications/general/users/access_rights.html)
1. [CRM activities and activity plans](https://www.odoo.com/documentation/19.0/applications/sales/crm/optimize/utilize_activities.html)

*How this article was checked: official Odoo 19 documentation was reviewed in October 2026. Odoo 20 references were also checked; material differences or moved pages are identified above. Examples are illustrative business scenarios, not client results or tests on a live database.*

If you need help translating these decisions into your own workflow, see my [Odoo consulting services](/services/odoo-consulting/).
