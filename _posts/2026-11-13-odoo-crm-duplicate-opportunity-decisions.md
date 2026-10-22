---
layout: post
title: "Odoo CRM Duplicates: Decide What Should Actually Be Merged"
date: 2026-11-13 10:00:00 +0530
tags: [Odoo, Odoo 19, ERP, Best Practices, CRM, Customer Management, Data Import, Setup]
hub: sales
description: "Review similar Odoo CRM opportunities before merging, with checks for separate projects, customer identity, ownership and irreversible changes."
faqs:
  - q: "Does a similar contact mean two opportunities are duplicates?"
    a: "No. One customer can have several independent buying projects. Compare the requirement, buying decision and related documents before merging."
  - q: "Can an Odoo CRM merge be undone?"
    a: "Odoo documents lead and opportunity merging as irreversible. Review the selected records and intended owner before confirming."
---

**Short answer:** Merge Odoo CRM opportunities only when they represent the same buying decision. Similar contact details are a useful signal, not proof of duplication. I compare scope, ownership and customer commitments before using an irreversible merge.

## Applies to

Odoo 19 CRM in Community or Enterprise. The Odoo 20 documentation reviewed describes the same similarity and merge rules. Contact deduplication and CRM opportunity merging are different operations; this article addresses the latter.

## What makes two opportunities genuinely the same?

A customer identity and a buying project are different things. A hotel group may ask about equipment for two sites, with separate budgets and decision dates. The same procurement manager might appear on both opportunities. Combining them would remove a useful distinction even though the contact information matches.

A genuine duplicate might arise when the same website enquiry reaches two sales teams, or when an employee manually creates a record already received by email. Compare the requirement, location, expected purchase and conversation history. If the next customer decision is the same, merging may make sense.

Do not rely on the opportunity title alone. Salespeople often use a company name as the title, while automated records may use an email subject. Both can hide separate projects. A short review of the underlying enquiry is more reliable than a visual scan of the pipeline.

## How does Odoo identify similar records?

Odoo documents similarity detection using the associated contact's email address and phone number. A Similar Leads smart button can present candidates for review. It helps find records worth comparing; the documentation also gives examples where apparently similar opportunities should remain separate.

When records are merged, Odoo gives priority to the one created first. If a lead and an opportunity are combined, the result is an opportunity regardless of which was created first. The merge dialogue allows an assigned salesperson and sales team to be chosen.

These rules matter when the newer record contains the better business summary. Review the resulting fields and chatter after the operation instead of assuming the most recent narrative became the main description. The documentation says other information is retained in the chatter and information fields, but retained information still needs to be usable by the owner.

## What should happen before a merge?

Identify the salesperson who will own the result and inform colleagues already speaking to the customer. Two independent conversations can create contradictory commitments even when the database is eventually tidied.

Review attached quotations and pending activities. Decide which proposal remains current and which actions are still needed. A merged record does not replace a commercial decision about an obsolete quote or a meeting that has already happened. Keep those decisions explicit in the record.

Check whether one opportunity is lost. Merging a lost record with an active one returns the resulting opportunity to the active pipeline. If the lost record concerns a separate, abandoned requirement, it should not be revived merely to reduce the number of similar records.

## Worked example: a clinic group requests equipment

In an illustrative example, a clinic group sends an enquiry through a website and then emails the same request to a salesperson. Both records concern the same site, equipment list and purchasing decision. They have different titles but are genuine candidates for merging.

The salesperson also has an opportunity from the same procurement contact for another clinic opening later. That record has a different budget and delivery address. It remains separate, even if Odoo identifies all three records as similar.

Before merging the first two, the team identifies the current quotation, records which conversation contains the latest requirement and agrees one owner. Afterwards, the owner reviews the visible summary and open activities. The later clinic project retains its own expected timing, so the forecast still distinguishes the two purchases.

## When it fits and when it doesn't

Merging fits duplicate intake for the same requirement and accidental recreation of an existing opportunity. It is useful when duplication causes multiple employees to contact the same buyer about the same decision.

It does not fit separate projects, separate legal buyers or distinct opportunities that happen to use a shared email address. If your business sells repeatedly to a central purchasing team, similarity will be common and often legitimate.

## Common mistakes

**Merging by company name.** Compare the purchasing decision and project scope, not just the organisation.

**Letting cleanup choose ownership accidentally.** Name the receiving salesperson before confirming the action.

**Treating retained chatter as an organised summary.** Read the result and make the next customer action clear.

**Ignoring active and lost status.** Review whether the merge would bring an unrelated lost opportunity back into the forecast.

## How can you prevent the same duplicates returning?

Trace where the records originated. If a website form and a connector both create the same opportunity, a merge policy only treats the symptom. Give the integration owner examples with timestamps and references so the intake design can be corrected.

For manual intake, teach staff to search by the customer's contact details and requirement before creating a record. Keep the instruction practical: search, compare and create when the buying project is genuinely different. A blanket ban on multiple opportunities per customer would damage useful pipeline detail.

## Related

Read [Odoo Integration Retries: Prevent Duplicate Business Actions](/blog/2026/11/12/odoo-integration-retries-duplicate-orders/) for the connected workflow.

## Official references

1. [Merge similar leads and opportunities](https://www.odoo.com/documentation/19.0/applications/sales/crm/pipeline/merge_similar.html)
1. [Lost opportunities](https://www.odoo.com/documentation/19.0/applications/sales/crm/pipeline/lost_opportunities.html)

*How this article was checked: official Odoo 19 documentation was reviewed in October 2026. Odoo 20 references were also checked; material differences or moved pages are identified above. Examples are illustrative business scenarios, not client results or tests on a live database.*

If you need help translating these decisions into your own workflow, see my [Odoo consulting services](/services/odoo-consulting/).
