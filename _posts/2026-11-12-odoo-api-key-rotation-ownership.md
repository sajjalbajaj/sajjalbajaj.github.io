---
layout: post
title: "Odoo API Keys: Rotate Access Without Losing Integration Ownership"
date: 2026-11-12 09:00:00 +0530
tags: [Odoo, Odoo 19, ERP, Best Practices, Security, Integration, Setup, ERP Implementation]
hub: admin
description: "Plan Odoo API key rotation with dedicated integration users, limited permissions, expiry ownership and a controlled switch to replacement credentials."
faqs:
  - q: "Does an API key bypass the user permission model?"
    a: "No. Odoo documents JSON-2 operations as subject to the associated user access rights, record rules and field access."
  - q: "Can a lost key be retrieved later from the same screen?"
    a: "The reviewed documentation says the key value is shown only at creation. Follow the supported replacement and revocation process rather than expecting recovery of the old value."
---

**Short answer:** manage an integration key as an owned, limited and replaceable credential. Record which service uses it, who maintains it and when replacement is due. Rotation should establish that the new credential works for the intended operation and that the old one is retired through a controlled process, without leaving access tied to an employee's personal account.

## Applies to

Odoo 19 JSON-2 API credentials and user access. Confirm commercial API access eligibility. Odoo 20 changes parts of the user role documentation, so review permissions for the installed release. The corresponding Odoo 20 references were reviewed in October 2026; use the documentation for your installed release when configuring screens and fields.

## Who should own the integration identity?

Odoo's JSON-2 documentation recommends dedicated bot users for ongoing automated integration. This helps separate the service's permissions and activity from an individual employee. The organisation still needs named people responsible for maintaining that identity.

I would identify both a technical owner and an operational contact. The technical owner changes the credential and investigates authentication failures. The operational contact understands which business work stops if the service loses access and can coordinate a response.

Avoid one shared key for unrelated integrations where separate credentials are practical. Independent keys make it easier to revoke a particular service without interrupting every connection. Keep the inventory focused on purpose and ownership rather than storing secret values in the same document.

## Which permissions are actually required?

List the records and actions the integration needs. Read only reporting has a different requirement from creating orders or updating customer information. Grant the appropriate access through the supported user model and review the complete role.

The official API documentation states that JSON-2 follows Odoo's access rights, record rules and field access. A successful authentication therefore does not establish that every required operation will succeed. Representative authorised actions need review as part of the integration design.

Do not solve a permission error by permanently assigning broad administrator access without assessment. Identify the missing operation and its business justification. Excess access can remain unnoticed after a temporary investigation unless someone owns the cleanup.

## How should expiry and rotation be planned?

The reviewed documentation requires a description and duration for a new key and describes a maximum lifetime. Use the current rules for the installed release and maintain a replacement schedule that leaves time to resolve problems. Do not assume an integration credential lasts indefinitely.

Record the service, environment, owner and planned review or expiry information in an appropriate inventory. Keep the actual key in the authorised secret storage mechanism. Logs, ordinary project documents and screenshots should not become alternative credential stores.

Consider every consumer of the key. A scheduled worker, reporting service and deployment environment may use different configurations. The rotation plan should identify the real consumers so that updating one application does not leave another silently using the old value.

## Worked example: a reporting connection needs a new key

Imagine a reporting service reading selected Odoo records through a dedicated integration user. Its key approaches expiry. The owner confirms the required permissions and prepares a replacement through the supported key management process.

The service configuration is updated using the approved secret mechanism. The owner checks an ordinary read and the reporting result, while ensuring the service still lacks actions outside its purpose. The old credential is then retired according to the accepted transition plan.

The operational owner confirms that reporting has resumed with the expected freshness. The inventory records the completed rotation and next responsibility. The handover does not contain the key itself, and a future employee can identify the service without borrowing the original administrator's account.

## What if a key is exposed or lost?

Treat an exposed credential as a separate incident requiring timely revocation and replacement. The reviewed documentation explains that the key is displayed only once and cannot be retrieved later. Recreating access is the appropriate route when the value is unavailable.

Assess the affected service and its permissions. A narrow dedicated identity helps identify the scope, while a broadly shared credential makes investigation and recovery harder. Coordinate the business interruption with the operational owner rather than revoking access without understanding the dependent work.

Preserve relevant evidence without reproducing the secret. The team needs to know when the issue was identified, which service was affected and which corrective actions occurred. Avoid spreading a screenshot of the exposed value while trying to document the incident.

## When does a formal key inventory fit?

It fits any ongoing integration, with detail proportionate to the number and importance of services. Even a small installation benefits from knowing which key belongs to which connection and who can replace it. The inventory need not be an elaborate application.

Temporary interactive access can use a shorter and simpler arrangement under the applicable policy. Keep it distinguishable from a production service so that expiry or removal does not surprise an operating team. Temporary credentials should not quietly become permanent dependencies.

Review ownership after staff or supplier changes. A working connector is not evidence that its access arrangement remains appropriate. Confirm recovery access and remove obsolete credentials through the supported process.

## Common mistakes

Common mistakes include using personal administrator credentials, sharing one key across unrelated services and storing secrets in ordinary notes. Another is checking only that the replacement authenticates while ignoring whether the actual business operation still works.

A completed rotation should leave a known service identity, accepted permissions, current ownership and clear evidence that the intended connection works. That makes credential maintenance a routine operating responsibility rather than an emergency discovered when a business process stops.

## Related

Read [Odoo Implementation Handover: Give the Operating Team What It Needs](/blog/2026/10/31/odoo-implementation-handover/) for the connected workflow.

## Official references

1. [External JSON-2 API](https://www.odoo.com/documentation/19.0/developer/reference/external_api.html)
1. [Access rights](https://www.odoo.com/documentation/19.0/applications/general/users/access_rights.html)

*How this article was checked: official Odoo 19 documentation and the corresponding Odoo 20 pages were reviewed in October 2026. The examples are illustrative, not client results or tests on a live database.*

For help designing this workflow, see my [Odoo consulting services](/services/odoo-consulting/).
