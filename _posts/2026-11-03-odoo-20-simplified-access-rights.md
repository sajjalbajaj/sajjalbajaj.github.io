---
layout: post
title: "Odoo 20 Access Rights: Review the Simplified Security Model"
date: 2026-11-03 07:00:00 +0530
last_modified_at: 2026-11-27
tags: [Odoo, Odoo 20, ERP, Best Practices, Security, Compliance, Implementation, Business Automation]
hub: services
description: "Review Odoo 20 roles, inherited groups and record access with a practical permission matrix and tests for allowed and refused actions."
faqs:
  - q: "Does a simpler Odoo 20 role screen prove access is correct?"
    a: "No. Review the permissions inherited through groups and test actual records and actions with ordinary user accounts. A role label alone does not prove that company or document boundaries are enforced."
  - q: "Should portal users have the same access as internal users?"
    a: "No. Odoo describes the Portal role for external users accessing their own information. Test portal journeys separately from internal roles."
  - q: "Can adding permissions affect a Light user?"
    a: "The Odoo 20 documentation says a Light user is automatically upgraded to User if granted access beyond the reduced permission set. Review access and pricing implications before expanding permissions."
---

**Short answer:** Review Odoo 20 access through roles, groups, inherited permissions and the records each user can actually reach. Use a permission matrix that includes actions the role must be refused. A simpler role screen does not by itself establish least privilege or safe migration of custom security.

## What does the Odoo 20 documentation describe?

The current [access rights reference](https://www.odoo.com/documentation/20.0/applications/general/users/access_rights.html) describes internal **User**, **Administrator** and **Light** roles, together with a **Portal** role for external users. Groups define the detailed permissions associated with a role.

The page also distinguishes selected groups from groups added automatically through inheritance. Removing one visible selection is therefore not a complete account of the permissions a person receives.

The release description of simplified access is a starting point for an upgrade review. It is not enough evidence to mechanically replace security definitions in a custom module.

## Which permission matrix is useful before an upgrade?

Start with work that a person must perform and information they must not access. This illustrative matrix defines requirements, not Odoo's default behaviour:

| Role | Must be able to do | Must be refused |
|---|---|---|
| Sales representative | Read assigned opportunities and prepare quotations | Read another team's restricted commercial records |
| Warehouse operator | Process authorised stock operations | Change accounting configuration |
| Expense approver | Review the assigned team's expenses | Approve unrelated teams without authority |
| Customer portal user | Read their permitted documents | Read another customer's documents |

Add company, branch or ownership conditions where the business requires them. A restriction in the written matrix must be demonstrated in the installed application.

## How should inherited permissions be reviewed?

Odoo's documentation shows how selected permissions can imply others. Record each test user's role, selected groups and inherited groups before comparing results. Test the combination actually assigned to the user rather than each group in isolation.

A useful investigation starts with the record that should be hidden. Establish its owner and company, reproduce the access with the affected account and then trace the permissions that account receives. Hiding a menu is not a sufficient test of whether the underlying record can be reached.

## What should be tested beyond opening the app?

I would include reading, creating, changing and deleting representative records where those operations exist. Also exercise permitted exports, linked documents and direct links to records. These are test scenarios, not a claim that every application exposes identical controls.

For an illustrative sales restriction, save a direct link to an opportunity outside the representative's allowed scope. Open it with that representative's account and record the result. Repeat with the authorised manager. This distinguishes a working restriction from a screen that simply omits the opportunity from one list.

Use the [acceptance evidence worksheet](/resources/erp-acceptance-evidence/) to record the role and outcome without copying sensitive record content into the report.

## Which changes need particular care?

The documentation warns that incorrect access changes can leave nobody able to administer permissions. Plan a recovery route before changing administrative access. Run exploratory changes in a test database and avoid making the only administrator account the experimental account.

Light users also deserve a licensing check. Odoo says granting access beyond the Light permission set automatically upgrades the role to User. Review the [current pricing terms](https://www.odoo.com/pricing-plan) when assessing a proposed expansion.

## When is the access review complete?

The proposed role is ready only when the expected allowed and refused actions are evidenced, unresolved exceptions have an owner, and support understands how to investigate future access requests. An administrator's successful test does not prove an ordinary user's experience.

For the earlier setup context, see [users and access rights in Odoo](/blog/2026/09/21/how-to-set-up-odoo-users-access-rights/).

## Source and review

Official reference: [Odoo 20 access rights](https://www.odoo.com/documentation/20.0/applications/general/users/access_rights.html), checked on 27 November 2026. The matrix and scenarios are implementation recommendations, not verified outcomes for your database.

For a requirements and permission review, see my [Odoo consulting services](/services/odoo-consulting/).
