---
layout: post
title: "Odoo Customer Portal: Review Access Before Inviting Users"
date: 2026-11-15 09:00:00 +0530
tags: [Odoo, Odoo 19, ERP, Best Practices, Customer Management, Setup, ERP Implementation, Integration]
hub: admin
description: "Review Odoo customer portal access, contact relationships and document visibility before inviting buyers, suppliers or external service contacts."
faqs:
  - q: "Is portal access the same as an internal user account?"
    a: "No. Portal users interact with supported external workflows and their permitted information. They do not receive general back office access."
  - q: "Can a customer use a document link without a portal login?"
    a: "Some application links support specific external actions without a portal account. Review the particular link and application rather than assuming all links behave alike."
---

**Short answer:** Invite an external user to the Odoo portal only after confirming their contact identity and intended document access. Portal access supports customer and supplier self service, but it is not a general internal account. I review representative documents from the external user's perspective before treating an invitation as complete.

## Applies to

Odoo 19 user portals and Contacts across editions, with additional portal features determined by installed apps. The Odoo 20 portal reference was checked. Contact form labels differ in Odoo 20, and application specific sharing can add permissions beyond the general portal overview.

## What is the portal supposed to help this person do?

Start with the business task. A buyer may need to view quotations and invoices, a supplier may need access to relevant documents, and a service contact may need to follow a ticket. These are different needs even when they belong to the same customer organisation.

The general Odoo portal documentation describes supported interactions such as following orders, viewing or paying invoices and managing certain account information. Installed applications determine which experiences are available. Do not promise every external user the same set of functions because a portal login exists.

Write down what the user should see and what should remain outside their scope. That description is more useful than saying “give the customer access”. It provides a basis for checking the contact relationship and the application's sharing configuration.

## Why does the contact structure matter?

External identity starts with the correct person and organisation. A generic purchasing mailbox, a named employee and a branch contact are not interchangeable. If several employees share one mailbox, the business should understand that the login does not distinguish those individuals.

Review related contacts before inviting users. An old employee may still appear under the customer, or the same email address may be attached to more than one record. Resolve the intended identity instead of sending invitations until one happens to work.

For a company with several locations, decide whether the person should act for the overall commercial relationship or a narrower service context. Do not infer access boundaries from a delivery address alone. The relevant app's record relationships and sharing rules need to support the intended outcome.

## How are portal accounts different from document links?

A portal account and an emailed document link are different access mechanisms. Some Odoo workflows allow a recipient to view or act on a specific record through a link. The Helpdesk documentation, for example, describes ticket links that do not require a portal account for viewing or responding.

That distinction matters when troubleshooting. A customer who can open one ticket link may still be unable to see a ticket list after logging in. Conversely, changing an account does not necessarily explain the behaviour of a previously shared link.

Review the exact workflow and link type. Avoid forwarding a working link to unrelated people as a workaround for an identity problem. If broader collaboration is needed, define the intended participants and configure the supported sharing approach for that application.

## Worked example: a purchasing contact leaves

Consider an illustrative distributor whose customer replaces its purchasing coordinator. The outgoing coordinator had portal access and received quotations at a named email address. The new coordinator asks the supplier to forward the old login details.

The supplier creates or verifies the new person's contact and confirms the intended relationship with the customer. An authorised administrator handles the outgoing account according to the organisation's access process. The new coordinator receives their own invitation instead of inheriting another person's credentials.

The account owner reviews a representative quotation and invoice with the new access arrangement. They also check whether separate document links were shared with other contacts. This review prevents the team from assuming that replacing one login automatically resolved every external access path.

## When it fits and when it doesn't

This approach fits customer onboarding, staff changes at a buyer and expansion of supplier self service. It is especially useful when several customer contacts need different kinds of information.

It does not turn the standard portal into a fully customised dealer application. Special approval hierarchies, restricted catalogues or organisation specific dashboards may require additional design. Establish the standard workflow first, then identify the precise gap instead of giving external people internal permissions to bypass it.

## Common mistakes

**Sharing an employee's login with a replacement.** Use an identity that reflects the person who now needs access.

**Assuming all customer contacts have identical responsibilities.** Review the business need for each role.

**Using one successful link as the whole check.** Distinguish portal navigation from record specific links.

**Granting internal access to solve a portal issue.** Investigate the contact relationship and application workflow first.

## What should be reviewed after onboarding?

Ask whether the user can complete the intended task and whether the visible documents match the agreed scope. Record the outcome so future staff changes have a clear starting point.

Keep an owner for external access requests. Sales may recognise the contact, while administration controls the account and the application owner understands sharing. Bringing those responsibilities together makes portal access a maintained business service rather than a collection of forgotten invitations.

## Related

Read [A B2B Ordering Portal for Dealers and Distributors in Odoo](/blog/2026/10/14/b2b-dealer-ordering-portal-odoo/) for the connected workflow.

## Official references

1. [User portals](https://www.odoo.com/documentation/19.0/applications/general/users/user_portals.html)
1. [Contacts](https://www.odoo.com/documentation/19.0/applications/essentials/contacts.html)
1. [Close tickets](https://www.odoo.com/documentation/19.0/applications/services/helpdesk/advanced/close_tickets.html)

*How this article was checked: official Odoo 19 documentation was reviewed in October 2026. Odoo 20 references were also checked; material differences or moved pages are identified above. Examples are illustrative business scenarios, not client results or tests on a live database.*

If you need help translating these decisions into your own workflow, see my [Odoo consulting services](/services/odoo-consulting/).
