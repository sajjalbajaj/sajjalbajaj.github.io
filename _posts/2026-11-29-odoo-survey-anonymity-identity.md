---
layout: post
title: "Odoo Surveys: Decide Whether Answers Should Be Anonymous"
date: 2026-11-29 08:00:00 +0530
tags: [Odoo, Odoo 19, ERP, Best Practices, Customer Management, Business Automation, Setup, Compliance]
hub: services
description: "Configure Odoo surveys with a clear identity and anonymity decision so invitations, scoring and follow up match what respondents were told."
faqs:
  - q: "Should every survey be anonymous?"
    a: "No. Choose based on purpose, and tell respondents clearly whether answers are attributed."
  - q: "Is removing the name field enough to guarantee anonymity?"
    a: "No. Invitations, metadata, small groups and exports may still identify a respondent."
---

**Short answer:** Decide before launch whether the business needs attributed answers or protected anonymity. Do not promise anonymity while collecting identifiers for follow up.

## Applies to

Odoo 19 Surveys. Privacy notices, retention and research ethics remain the organisation's responsibility.

## Start with the decision

What will the answers be used for, who needs to see identity, and what has the respondent been told?

## What Odoo records and what the business must decide

* Survey access and invitation choices affect who can respond.
* Scoring and certification can require identified participation.
* Anonymous feedback supports a different purpose from individual case follow up.

## A practical control design

1. **Write the purpose and identity treatment in the introduction.**
2. **Collect only fields needed for the purpose.**
3. **Separate anonymous trend analysis from personal case handling.**
4. **Test the respondent view before sending invitations.**

## Worked example

An employee climate survey promises anonymous trend reporting. The team removes name questions and avoids using unique invitation results for manager follow up. A separate support survey asks for contact details because the customer requests a response.

## When it fits

This fits feedback, assessments and research where the identity model is chosen deliberately.

## Limits and boundaries

It does not guarantee legal anonymity merely because a name field is absent. Review metadata, access and export handling.

## Common mistakes

**Promising anonymity while using identifiable invitations.** Review the underlying record and the next operational consequence before closing the exception.

**Collecting unnecessary contact fields.** Review the underlying record and the next operational consequence before closing the exception.

**Combining anonymous feedback with performance action.** Review the underlying record and the next operational consequence before closing the exception.

**Changing access rules after launch.** Review the underlying record and the next operational consequence before closing the exception.

## What the owner should review

Survey introductions, access settings, exported identifiers, small groups and users with result access.

The goal is not to remove every exception. It is to make each important exception visible, owned and traceable to a decision.

## Related

Use the [ERP acceptance evidence worksheet](/resources/erp-acceptance-evidence/) to record the outcome and supporting records.

Read [How to Set Up Surveys in Odoo](/blog/2026/10/02/how-to-set-up-surveys-odoo/) for the connected workflow.

## Official references

1. [Surveys](https://www.odoo.com/documentation/19.0/applications/marketing/surveys.html)

*How this article was checked: official Odoo 19 documentation was reviewed in November 2026. Confirm the corresponding documentation for the installed version before implementation. Examples are illustrative business scenarios, not client results or tests on a live database.*

If you need help translating these decisions into your own workflow, see my [Odoo consulting services](/services/odoo-consulting/).
