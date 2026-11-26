---
layout: post
title: "Odoo 20 Sign: Update Records and Track Every Signer"
date: 2026-11-28 07:00:00 +0530
tags: [Odoo, Odoo 20, ERP, Best Practices, Sign, Compliance, Business Automation, Documents]
hub: services
description: "Review Odoo 20 Sign record updates, signer progress and template changes without assuming an undocumented update trigger or completion rule."
faqs:
  - q: "Can Odoo 20 Sign fields update a record?"
    a: "The release notes confirm updating the corresponding Odoo record field with information entered during signing."
  - q: "Do those updates always wait for every signer?"
    a: "The cited release note does not establish that timing. Test the configured update event, partial signing, refusal and incomplete requests explicitly."
  - q: "Does replacing a template PDF require no further review?"
    a: "No. Odoo preserves field positions, so inspect alignment and meaning against the new document before sending it."
---

**Short answer:** Odoo 20 Sign can update corresponding record fields from information entered during signing and makes multi signer progress easier to inspect. Define exactly which fields may change, then test update timing and incomplete requests. Do not assume every record update waits until all required signatures are complete.

## What do the official sources establish?

The [Sign release notes](https://www.odoo.com/odoo-20-release-notes) confirm record updates and improved tracking for requests with more than three signers. They also describe preserving field positions when replacing a template's underlying document.

The [Sign configuration guide](https://www.odoo.com/documentation/20.0/applications/productivity/sign/configuration.html) explains field types and linking fields for automatic completion. Reading an existing record value into a document and writing a signer's new value back to a record are distinct directions of data movement. Review both instead of treating them as the same setting.

## Which record fields should be allowed to change?

Start with a narrow approved field, such as an onboarding contact detail. Identify the related record, expected value and permitted signer role.

Avoid using the first test to change a high risk payment or contractual field. Those changes can require independent verification beyond possession of a signing link.

If the existing record already has a different value, define whether the submitted value should replace it or require review. Do not leave the conflict rule to an undocumented assumption.

## Why must update timing be demonstrated?

An illustrative onboarding form might require a customer and an internal approver. The business may want the new contact detail applied only after both finish, but the release note alone does not establish that event sequence.

Test the first signature, final signature, refusal and an abandoned request. Inspect the business record after each step. If the standard trigger differs from the intended approval condition, identify the required process or implementation change before rollout.

| Proposed case | Evidence |
| --- | --- |
| First signer completes | Actual record state and request status |
| All required signers complete | Final document and record value |
| Signer refuses | Request outcome and any already applied change |
| Existing value conflicts | Agreed review or replacement behaviour |
| Wrong signer role | Access and field assignment result |

## What should be reviewed after replacing a PDF?

Preserved positions can save template work, but a field that remains at the same coordinates may now sit over different text. Inspect every required field, signer role and page after replacing the document.

Send a controlled test request and review the completed output on desktop and mobile. A visually aligned signature should also refer to the intended statement and version.

## What evidence closes the signing workflow?

Retain the document version, signer progress, completion evidence and authorised record changes together. Select identity assurance and retention requirements for the actual jurisdiction and transaction; the existence of an electronic signature does not settle every legal question.

For completion review, see [Sign completion evidence](/blog/2026/11/21/odoo-sign-completion-evidence/). Record the proposed update tests in the [ERP acceptance evidence resource](/resources/erp-acceptance-evidence/).

*Sources reviewed on 27 November 2026. Scenarios are proposed acceptance cases, not reported customer results. Confirm edition, installed modules and provider requirements for your database.*
