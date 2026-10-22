---
layout: post
title: "Odoo Documents Sharing: Review Links, Copies and Permissions"
date: 2026-11-21 08:00:00 +0530
tags: [Odoo, Odoo 19, ERP, Best Practices, Customer Management, Business Automation, Setup, ERP Implementation]
hub: admin
description: "Review Odoo Documents sharing permissions, external links and copied files so collaborators receive the intended access to the correct document."
faqs:
  - q: "Does pasting a document link behave like attaching a copy?"
    a: "No. Odoo documents a distinction between adding the raw file and pasting a link that preserves the document access rights. Choose the method deliberately."
  - q: "Is a document hidden from browsing necessarily inaccessible?"
    a: "Do not assume so. Review access through link, named recipients and permissions separately from whether an item is discoverable."
---

**Short answer:** Before sharing an Odoo document, confirm the recipient, the permission and whether you are sending a managed link or a separate file copy. Those choices have different consequences. I review the exact document and its access settings rather than assuming that copying a link is a harmless final step.

## Applies to

Odoo 19 Enterprise Documents. The corresponding Odoo 20 documentation was reviewed and describes the same sharing choices, file versions and distinction between raw attachments and links. This article recommends an access review process; the business remains responsible for deciding who should receive each document.

## What does the recipient need to do?

Start with the purpose of sharing. A customer reviewing an offer may need to read a document, while a collaborator maintaining a working file may need to edit it. Giving edit access simply because it is available creates a broader capability than the task may require.

Odoo Documents supports permissions for named recipients and general access, including access through a link. Review those paths together. Restricting one named person does not necessarily explain the result if a broader link setting still permits access.

Also decide whether the recipient should access one file or a folder containing several files. A folder link is convenient for a project handover, but its contents need review. The share should reflect the intended collaboration, not the administrator's existing filing structure by accident.

## How are links different from copies?

The documentation distinguishes adding a raw file to a record from pasting a link that preserves the document's access rights. A managed link points back to the controlled document. A downloaded or attached copy has a separate life once it has been distributed.

This matters for revisions and withdrawal. Changing access to the source cannot recall a file somebody has already downloaded. Likewise, updating the managed document does not update every copy previously sent by email. Choose the method according to whether the recipient needs a fixed issued version or access to maintained content.

Record the version that supports a business decision. If a customer accepted a particular proposal, a later update to the working file should not obscure what they reviewed. Use the application's version tools and the organisation's document process to keep that relationship understandable.

## Why are visibility and permission different?

A document can be discoverable through browsing or accessible through a particular sharing path. The setting that determines whether someone can find it in a folder is not the same question as whether they can open a link they already possess.

Review internal user access, external recipients and access through link. If access is intended to end after a period, use the supported expiry option where appropriate and assign someone to review the remaining sharing paths. Do not describe an expiry on one invitation as proof that every distributed copy has disappeared.

Keep sensitive context out of broadly shared folders. A customer project folder may contain both final deliverables and internal working notes. Separate the intended external material or restrict individual items according to the collaboration design, then review the result as the recipient would encounter it.

## Worked example: sharing a project handover pack

Imagine an illustrative consultancy preparing a customer handover. The internal folder includes operating instructions, a signed scope document and notes about unresolved commercial questions. Only the approved customer material belongs in the external pack.

The delivery owner reviews the files and the intended versions before sharing. The customer receives the permissions needed to read the pack. Internal notes remain under the appropriate restrictions rather than being included because they happened to sit beside the final instructions.

When an instruction is updated later, the team decides whether to issue a new fixed version or maintain access through the original controlled link. They tell the customer which version is current and retain the record of what was delivered at handover. The sharing method supports that decision instead of making it ambiguous.

## When it fits and when it doesn't

This approach fits customer handovers, supplier collaboration and internal document distribution. It is especially helpful where staff alternate between sending attachments and sharing live links without discussing the difference.

It does not make downloaded information revocable or replace a specialist document governance requirement. If the business requires particular retention, approval or evidence controls, define those separately. Standard sharing features are useful only when their scope matches the collaboration being promised.

## Common mistakes

**Granting edit access for a reading task.** Choose the permission the recipient actually needs.

**Treating a copy as a managed link.** Understand which access and revision controls remain effective after distribution.

**Assuming hidden means inaccessible.** Review link access and named permissions directly.

**Sharing an internal folder without reviewing contents.** Confirm every externally available item belongs in the handover.

## What should a periodic sharing review cover?

Review externally shared folders after a project ends or a customer contact changes. Identify the current owner, the continuing business purpose and any access that should be revised. Include files shared individually, not only the parent folder.

Keep the outcome practical: the intended people can open the intended material, the version is clear and an accountable owner can maintain the sharing arrangement. That is a stronger result than a list of links whose recipients and permissions nobody can explain.

## Related

Read [Odoo Customer Portal: Review Access Before Inviting Users](/blog/2026/11/15/odoo-customer-portal-access-review/) for the connected workflow.

## Official references

1. [Documents](https://www.odoo.com/documentation/19.0/applications/productivity/documents.html)

*How this article was checked: official Odoo 19 documentation was reviewed in October 2026. Odoo 20 references were also checked; material differences or moved pages are identified above. Examples are illustrative business scenarios, not client results or tests on a live database.*

If you need help translating these decisions into your own workflow, see my [Odoo consulting services](/services/odoo-consulting/).
