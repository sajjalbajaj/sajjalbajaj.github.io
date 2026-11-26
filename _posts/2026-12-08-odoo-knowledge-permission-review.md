---
layout: post
title: "Odoo Knowledge Access: Review Readers and Editors"
date: 2026-12-08 09:00:00 +0530
tags: [Odoo, Odoo 19, ERP, Best Practices, Business Automation, Compliance, Support, Project Management]
hub: services
description: "Review Odoo Knowledge access, article ownership, inherited permissions and links so guidance reaches the right people without exposing restricted content."
faqs:
  - q: "Should all readers be editors?"
    a: "No. Separate the audience that needs guidance from the smaller group responsible for maintaining it."
  - q: "Why review access after moving an article?"
    a: "Hierarchy or workspace context can change who can reach the content, so confirm the resulting permissions."
---

**Short answer:** Publishing an article answers what people should know. Permission review answers who may read, edit, share or reuse that information.

## Applies to

Odoo 19 Knowledge. Confidentiality classification and information security policy remain organisational responsibilities.

## The decision to make

Who needs the guidance, who may change it and does the article contain information that should not inherit broad access?

## What Odoo can show

* Articles can be organised in hierarchies with shared access context.
* Editing and reading are different responsibilities.
* Templates and copied content can spread outdated or restricted information.

## A practical control design

1. **Classify content before choosing its audience.**
2. **Give edit access only to responsible maintainers.**
3. **Review inherited access when moving articles.**
4. **Remove public or external sharing when the purpose ends.**

## Worked example

A support procedure moves under a broadly shared workspace and inherits wider access. The owner separates a confidential escalation appendix, restores the intended permissions and leaves the general troubleshooting guide available to agents.

## When this approach fits

This fits internal handbooks, operating procedures and support guidance maintained by several teams.

## Limits and boundaries

It does not replace a formal information security system or guarantee copied information remains controlled elsewhere.

## Common mistakes

**Giving every reader edit rights.** Investigate the source and downstream effect before closing the exception.

**Moving an article without checking inherited access.** Investigate the source and downstream effect before closing the exception.

**Copying confidential steps into a public template.** Investigate the source and downstream effect before closing the exception.

**Keeping departed staff as maintainers.** Investigate the source and downstream effect before closing the exception.

## What the owner should review

Externally shared articles, broad editor lists, ownerless content, moved articles, confidential keywords and access held by inactive users.

The goal is not to remove every exception. It is to make important exceptions visible, owned and traceable to a decision.

## Related

Use the [ERP acceptance evidence worksheet](/resources/erp-acceptance-evidence/) to record the outcome and supporting records.

Read [Odoo Knowledge: Keep Support Articles Accurate and Findable](/blog/2026/11/18/odoo-knowledge-support-article-review/) for the connected workflow.

## Official references

1. [Knowledge](https://www.odoo.com/documentation/19.0/applications/productivity/knowledge.html)

*Sources: official Odoo 19 documentation is listed above. Confirm the corresponding documentation for the installed version before implementation. Examples are illustrative business scenarios, not client results or tests on a live database.*

If you need help translating these decisions into your own workflow, see my [Odoo consulting services](/services/odoo-consulting/).
