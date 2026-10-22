---
layout: post
title: "Odoo Knowledge: Keep Support Articles Accurate and Findable"
date: 2026-11-18 10:00:00 +0530
tags: [Odoo, Odoo 19, ERP, Best Practices, Customer Management, Business Automation, ERP Implementation, Setup]
hub: services
description: "Maintain Odoo Knowledge support articles with clear ownership, version context, sharing boundaries and a review process for outdated instructions."
faqs:
  - q: "Does sharing a Knowledge article grant access to embedded records?"
    a: "No. The documentation says inserted views remain subject to access to their underlying content, even when the article itself is shared."
  - q: "Is hiding an article from the sidebar a security control?"
    a: "Visibility and access are separate. Review the article permissions and sharing configuration rather than relying only on where it appears in the sidebar."
---

**Short answer:** Give each important Odoo Knowledge support article a clear purpose, an owner and enough version context to prevent misuse. Sharing a page does not guarantee that its instructions are current or that readers can access embedded records. I treat support content as maintained operational guidance rather than a one time writing exercise.

## Applies to

Odoo 19 Enterprise Knowledge, with Website required for the documented Share to web feature. The corresponding Odoo 20 Knowledge page was reviewed and describes the same article sharing and version history concepts. Review dates and editorial ownership below are proposed operating practices, not an assumed automatic publication approval system.

## What question should one article answer?

A useful article starts with the situation the reader recognises: an invoice cannot be posted, a delivery is waiting or a customer needs an account update. Describe the expected outcome and the conditions under which the guidance applies.

Avoid combining every variation of a process into a single long page. A frontline employee should be able to identify whether the article applies before following instructions. Link related exceptions where they need separate decisions or permissions.

Use words staff actually search for. The internal name of a custom module may be less useful than the symptom shown on screen. Include relevant terminology naturally, but keep the title focused on the action or decision the article helps the reader complete.

## What version information matters?

State the relevant Odoo version, applications and custom process where they affect the steps. A menu location may change after an upgrade, while a custom approval rule may behave differently between databases on the same version.

Record an owner who can review the content when the workflow changes. That person may be a business process owner rather than the original author. The important point is that someone can decide whether the guidance remains valid.

A last reviewed date can help the reader, but it is not proof of accuracy by itself. The review should compare the instructions with the supported workflow and known exceptions. If the article is provisional, say what remains unresolved instead of making the page look final through formatting alone.

## How should sharing be reviewed?

Odoo Knowledge distinguishes article access, sidebar visibility and sharing. The documentation also explains that readers of an article cannot see inserted views unless they have access to the underlying content. A working page for an administrator may therefore look incomplete to its intended audience.

Review the article from the reader's role. If it links to a restricted invoice or customer record as an example, replace that with an appropriate explanation or controlled example. Do not grant broad business access simply to make a training screenshot or embedded view work.

Be deliberate with Share to web. Internal troubleshooting notes may contain customer details, credentials or infrastructure information that should not appear in public guidance. Review the actual page and its attachments before broadening access, and separate public instructions from internal operational detail where needed.

## Worked example: a support article survives an upgrade

Consider an illustrative company with an article explaining how staff request a customer address change. The process originally used a particular contact form and an internal approval convention. After an upgrade, the labels change and the team revises who approves billing details.

The article owner updates the instructions and records the new scope. They review links and screenshots with a normal staff account, then identify older pages that still point to the superseded process. Those references are corrected so search results do not present two competing answers.

The team uses Odoo's version history to understand the changes if a question arises. They retain a clear current article instead of circulating another disconnected PDF. Support staff can send the same maintained reference when the next address question arrives.

## When it fits and when it doesn't

This approach fits repeated support questions, internal procedures and onboarding material. It is valuable when staff frequently ask which instruction is current or when several departments maintain overlapping guidance.

It does not turn Knowledge into a specialist controlled document system without further design. If the organisation requires formal approvals, regulated retention or particular audit controls, assess those requirements separately. A readable article and a version history are useful features, but they should not be described as satisfying every governance requirement.

## Common mistakes

**Publishing without an owner.** Assign responsibility for reviewing the process after changes.

**Using sidebar visibility as the only privacy check.** Review permissions and sharing directly.

**Embedding records that readers cannot access.** Use suitable examples or explain the permission requirement.

**Leaving superseded instructions discoverable without context.** Redirect readers to the current process and archive obsolete material where appropriate.

## What should a content review prioritise?

Start with articles linked from frequent tickets, onboarding checklists and business critical workflows. Ask staff which pages they routinely ignore because the instructions no longer match their work.

Use support questions as evidence of gaps. If readers repeatedly misunderstand the same step, clarify that decision instead of adding more text everywhere. The aim is a reference that helps a person act correctly, recognise when the advice does not apply and know who to contact for the exception.

## Related

Read [How to Set Up Knowledge in Odoo](/blog/2026/10/02/how-to-set-up-knowledge-odoo/) for the connected workflow.

## Official references

1. [Knowledge](https://www.odoo.com/documentation/19.0/applications/productivity/knowledge.html)

*How this article was checked: official Odoo 19 documentation was reviewed in October 2026. Odoo 20 references were also checked; material differences or moved pages are identified above. Examples are illustrative business scenarios, not client results or tests on a live database.*

If you need help translating these decisions into your own workflow, see my [Odoo consulting services](/services/odoo-consulting/).
