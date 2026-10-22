---
layout: post
title: "Odoo Sign Evidence: Keep the Signed File and Completion Record"
date: 2026-11-21 09:00:00 +0530
tags: [Odoo, Odoo 19, ERP, Best Practices, Customer Management, Business Automation, Setup, ERP Implementation]
hub: admin
description: "Review Odoo Sign completion evidence, signer authentication and document versions so the business can explain what was signed and by whom."
faqs:
  - q: "When is a certificate of completion produced?"
    a: "The reviewed documentation says it is generated when the document or envelope is fully signed by all signers. Retain it with the completed documents."
  - q: "Does selecting extra authentication guarantee it occurred?"
    a: "Check the actual completion evidence. The documentation warns that credit based authentication can be skipped if credits are unavailable, so configuration alone is not sufficient evidence."
---

**Short answer:** Keep the completed Odoo Sign document together with its certificate of completion and the relevant business reference. Review the actual signing evidence, not only the appearance of a signature on a PDF. I also distinguish the person's identity from their authority to approve the underlying business commitment.

## Applies to

Odoo 19 Enterprise Sign. The corresponding Odoo 20 security and authentication documentation was reviewed and describes the same completion certificate and authentication concepts. This is an operational evidence guide, not a conclusion about legal enforceability for any jurisdiction or document type.

## What question should the evidence answer?

A later reviewer may need to know which document was signed, who participated, when the process completed and which verification method was used. A screenshot of the final page rarely answers all those questions.

Odoo documents a certificate of completion generated when all signers have completed a document or envelope. It includes document details, participant information and signing event records. Retaining that certificate alongside the signed files makes the process easier to explain than relying on a manually renamed attachment.

Link the completed package to the appropriate order, project or other business record. The signing event and the commercial context should remain connected. A correctly signed document stored in an unrelated folder can still be difficult for the delivery or finance team to interpret.

## How do you know the right version was signed?

Before sending a request, confirm the scope and document version with the business owner. A technically successful signature process does not correct an outdated price, missing schedule or wrong customer entity in the file.

After completion, retain the signed output as the evidence of that particular agreement. Do not replace it with an edited working copy that happens to have the same filename. If the agreement changes, follow the organisation's process for documenting the new decision.

The Odoo documentation describes a signatory hash connecting the signing operation with the document content. That supports integrity evidence, but the business still needs a clear record of what the document was intended to authorise. Technical integrity and commercial completeness are related but different questions.

## What does authentication establish?

The default email process provides a unique link sent to the signer's email address. Additional methods can be configured where supported. Choose the method according to the business requirement and review its availability in the installed version and service arrangement.

An important documented limitation is that credit based authentication may be skipped when credits are unavailable. A selected setting should therefore not be treated as conclusive evidence that the additional check happened. Review the completion record and keep responsibility for the necessary service credits or configuration.

Authentication also does not by itself establish authority to sign for an organisation. The commercial owner should confirm that the recipient is the intended person for the agreement. Do not infer purchasing authority solely because someone can access the email address used in the request.

## Worked example: accepting a service scope

Consider an illustrative consultancy sending a service scope to a customer. The delivery manager confirms the current version and the commercial owner confirms the intended signatory before the request is issued.

When the process completes, the team retains the signed document and completion certificate with the project reference. They review the participant information and the method recorded, rather than filing only a PDF with a visible signature image. The delivery team can identify the scope that was accepted.

Later, the customer adds another workstream. The team records a new commercial decision through its agreed process and preserves the original evidence. It does not edit the signed scope to make it appear that the additional work was part of the earlier agreement.

## When it fits and when it doesn't

This approach fits service agreements, customer approvals and internal signing workflows where the organisation needs a clear operational record. It is useful when staff currently save only the signed PDF and lose the associated completion details.

It does not determine which signature method satisfies a particular law, regulated process or contract requirement. Have the appropriate adviser define those requirements. Then configure and review the signing workflow against that defined need, without treating a software feature list as a legal opinion.

## Common mistakes

**Retaining only a signature screenshot.** Keep the completed files and certificate together.

**Sending the wrong revision.** Review the actual document before requesting signatures.

**Assuming configured authentication always occurred.** Inspect the evidence and the documented service limitations.

**Equating identity with authority.** Confirm the person's role in the business decision as well as their signing participation.

## What should the process owner review periodically?

Review a sample of completed requests for document references, participant information and the availability of completion certificates. Check whether the intended authentication method is actually represented in the evidence.

Also review who can prepare templates and initiate requests. A maintained template can improve consistency, but an outdated template can repeat the same error across many agreements. Assign ownership for changes and ensure the team can explain which version is currently approved for use.

The useful outcome is a complete, accessible record of a specific agreement. Anyone responsible for delivery should be able to find it and understand its scope without reconstructing the signing process from separate mailboxes.

## Related

Read [Odoo Quotations: Keep Revisions and Acceptance Clear](/blog/2026/11/14/odoo-quotation-revision-acceptance/) for the connected workflow.

## Official references

1. [Security and authentication](https://www.odoo.com/documentation/19.0/applications/productivity/sign/security_authentication.html)
1. [Sign](https://www.odoo.com/documentation/19.0/applications/productivity/sign.html)

*How this article was checked: official Odoo 19 documentation was reviewed in October 2026. Odoo 20 references were also checked; material differences or moved pages are identified above. Examples are illustrative business scenarios, not client results or tests on a live database.*

If you need help translating these decisions into your own workflow, see my [Odoo consulting services](/services/odoo-consulting/).
