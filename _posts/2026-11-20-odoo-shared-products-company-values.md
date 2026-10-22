---
layout: post
title: "Odoo Shared Products: Review Company Specific Values"
date: 2026-11-20 09:00:00 +0530
tags: [Odoo, Odoo 19, ERP, Best Practices, Multi-Company, Inventory Management, Accounting, Setup]
hub: admin
description: "Review Odoo shared product and contact records alongside company specific values, active company selection and ownership of master data changes."
faqs:
  - q: "Does a shared product have identical values in every company?"
    a: "Not necessarily. Odoo documents shared fields such as reference and sales price alongside company specific values such as cost."
  - q: "Does a blank Company field always mean incomplete setup?"
    a: "For records such as products and contacts, a blank Company field can mean the record is shared. Review the intended sharing model before filling it in."
---

**Short answer:** A shared Odoo product or contact can still contain values that depend on the active company. Review the field's scope and the company context before correcting a difference. I define who owns shared data separately from who maintains each company's operational or financial values.

## Applies to

Odoo 19 multi company records, with installed apps determining the fields available. Core company separation exists across editions; hosted plan requirements and automated intercompany features need separate review. Odoo 20 adds intercompany clearing documentation, which is not assumed here. This article focuses on shared master data and company context.

## What does shared actually mean?

Odoo allows some records, including products and contacts, to be shared between companies. The documentation explains that leaving the Company field blank can make these records shared, while assigning a company restricts their intended company scope.

That does not mean every field behaves identically across entities. The documented example includes common product reference and sales price values alongside a company specific cost. A user switching companies can therefore see a difference that is intentional rather than a data error.

Start by agreeing why the record is shared. A common catalogue may simplify intercompany activity and avoid duplicate identities. A record used by only one entity may need a different scope. Choose based on the business relationship and application requirements, not a rule that every blank field must be filled.

## Why does the active company matter?

A user can have access to several companies while one is the current active environment. The company selector is therefore part of the context for reviewing and creating records. Being authorised for a company is not the same as currently working in it.

Before correcting an unexpected value, ask which company the user has selected and which company the transaction belongs to. A screenshot without that context can lead an administrator to reproduce the wrong situation.

Company specific transactions such as quotations, invoices and vendor bills also carry their own company relationship. Sharing a product does not make those transactions a single combined business record. Keep the distinction clear when staff compare activity across entities.

## Who should own changes to shared data?

A shared description or reference may affect several teams at once. Assign a master data owner who can review the cross company consequences of those changes. Local staff should know which values they can maintain for their entity and which require coordination.

Document examples rather than relying on abstract permission language. A warehouse manager may understand that a shared product reference should remain stable even while a local cost or replenishment decision differs. The administrator can then configure access around a process the business understands.

Review imports with the same care. A file prepared for one company may include shared fields that affect the wider catalogue. Stable identifiers and a deliberately limited set of columns help prevent a local correction from becoming an unintended group wide change.

## Worked example: two entities share a catalogue

Consider an illustrative distribution group with separate companies supplying different markets. Both use the same product reference so that purchasing and internal trade recognise the item consistently. Their cost structures differ because their procurement arrangements are different.

A new employee sees different costs while switching companies and reports a duplicate data problem. The master data owner confirms that the product identity is shared and the cost difference is expected. They explain which company should be active when reviewing the relevant transaction.

Later, one entity wants to rename the product for a local campaign. The team reviews whether a shared name change is appropriate or whether the requirement belongs in a local commercial presentation. The decision preserves a stable shared identity while accommodating the actual selling need.

## When it fits and when it doesn't

This approach fits groups using one database for several entities and teams importing or maintaining common catalogues. It helps when staff repeatedly report values changing as they switch companies.

It does not decide whether a business should create another company, branch or warehouse in the first place. That architecture needs its own review. Nor does it replace accounting consolidation or automated intercompany configuration. Shared master data supports those workflows but is not the whole solution.

## Common mistakes

**Filling every blank Company field.** Establish whether the record is deliberately shared.

**Comparing values without company context.** Confirm the active entity and the transaction's company.

**Giving local edits no group owner.** Coordinate changes to shared references and descriptions.

**Importing broad files for narrow corrections.** Separate shared changes from company specific maintenance.

## What should the administrator review periodically?

Review records that unexpectedly became restricted or shared, especially after imports and changes in responsibility. Confirm that the current scope still matches how the entities operate.

Keep a small set of examples showing shared fields, company specific fields and company specific transactions. Use those examples in onboarding and support. The goal is not to make every company look identical. It is to ensure differences are deliberate, understandable and maintained by the right people.

## Related

Read [Common Mistakes with Odoo Multi-Company and Access Rights](/blog/2026/09/20/odoo-multicompany-access-mistakes/) for the connected workflow.

## Official references

1. [Multi-company](https://www.odoo.com/documentation/19.0/applications/general/companies/multi_company.html)
1. [Access rights](https://www.odoo.com/documentation/19.0/applications/general/users/access_rights.html)

*How this article was checked: official Odoo 19 documentation was reviewed in October 2026. Odoo 20 references were also checked; material differences or moved pages are identified above. Examples are illustrative business scenarios, not client results or tests on a live database.*

If you need help translating these decisions into your own workflow, see my [Odoo consulting services](/services/odoo-consulting/).
