---
layout: post
title: "Odoo Field Service Worksheets: Define Useful Completion Evidence"
date: 2026-11-16 08:00:00 +0530
tags: [Odoo, Odoo 19, ERP, Best Practices, Business Automation, Quality, Customer Management, ERP Implementation]
hub: services
description: "Design Odoo Field Service worksheets that capture useful completion evidence, distinguish required checks and explain the Odoo 19 and 20 differences."
faqs:
  - q: "Does Worksheet Complete mean every check was answered?"
    a: "In the documented Odoo 19 workflow, saving changes the label even when optional fields are blank. Required fields must be completed before saving."
  - q: "Do Odoo 19 worksheets use Studio?"
    a: "Yes. Enabling the documented Odoo 19 worksheet feature installs Studio and can affect the subscription plan. Odoo 20 documents a different workflow under Planning."
---

**Short answer:** A Field Service worksheet should capture the evidence needed to understand the visit and the next decision. In Odoo 19, a saved worksheet can be labelled complete while optional fields remain blank. I define the required evidence first, then decide which fields must be filled before the technician can save.

## Applies to

Odoo 19 Enterprise Field Service, with Studio required for the documented worksheet template design. Odoo 20 documentation moves field service into Planning and describes shifts and property based worksheets. The old worksheet URL returns 404 for Odoo 20; its replacement is the official Planning field service page. Do not apply the Odoo 19 screens unchanged to Odoo 20.

## What should a worksheet prove?

Start with the business question. For an installation, the team may need to know what was installed, whether the agreed checks were performed and what remains unresolved. For a diagnostic visit, the useful outcome may be an observation and a recommendation rather than a completed repair.

A worksheet should not make every visit look successful by offering only a pass checkbox. Include a way to record that a check was not applicable, could not be performed or produced an exception. Those distinctions help the office decide whether to bill, arrange another visit or ask the customer for information.

Keep safety and specialist procedures under the ownership of qualified people. Odoo can record a checklist, but the presence of a digital form does not validate the technical procedure. The service manager should approve the content and determine which evidence the business needs.

## Why does the completion label need care?

The Odoo 19 documentation states that saving a worksheet changes the smart button label to Worksheet Complete even if some fields are blank. Fields marked Required must be filled to save. This is an important distinction between saving a form and proving every expected check happened.

Review each field according to its purpose. A required serial reference may identify the serviced asset, while a free text observation may only apply when a problem is found. Making every field compulsory can encourage meaningless entries. Leaving essential evidence optional creates a different problem.

Define what office staff should review before treating a visit as ready for the next step. A worksheet label is a useful signal, but it should not stand in for a judgement about a failed check, missing access or customer disagreement.

## How much detail should technicians enter?

Ask for information that someone will use. Repeating the customer address, task title and other existing data wastes attention when the record already provides them. Use the worksheet to capture what happened on site and what cannot be inferred from the planned task.

Choose clear labels. “Condition after work” is more useful than “status” if several statuses already exist elsewhere. Explain when photographs are needed and what they should show. Avoid capturing unrelated people, documents or private information in images.

Keep templates specific to the service type. A single form covering installation, repair and inspection often becomes long and confusing. Reuse a sensible structure, but allow each service to ask for its own meaningful evidence.

## Worked example: an equipment installation visit

Consider an illustrative technician installing a dispenser at a customer's premises. The worksheet asks for the equipment reference, the work performed, the outcome of the agreed operational check and any outstanding issue. A photograph is requested only where it explains the installation or an exception.

The technician records that installation is complete but the customer has not provided the connection needed for the final check. The form allows that outcome without forcing a false pass. The office can see that physical installation and final readiness are different facts.

The service coordinator arranges the remaining work with the customer. Billing follows the agreed commercial terms rather than the worksheet's saved label alone. The record gives the next technician enough context to avoid repeating the entire visit.

## When it fits and when it doesn't

Worksheets fit repeatable visits where structured evidence helps another person make a decision. They are useful when service staff rotate or when the customer expects a clear record of work.

They do not replace a specialist inspection system where regulated procedures require controls beyond the configured Odoo workflow. They also do not justify collecting every possible detail. A short form that staff complete accurately is more useful than a comprehensive form filled with placeholders.

## Common mistakes

**Equating saved with fully checked.** Review the documented Odoo 19 completion behaviour and the required fields.

**Using mandatory text boxes for every situation.** Provide meaningful exception outcomes instead of encouraging invented answers.

**Changing a template without reviewing its use.** Understand how current tasks and historical records will be affected in the installed version.

**Copying Odoo 20 instructions into an Odoo 19 procedure.** The application structure and worksheet design approach differ.

## What should a template review include?

Walk through a normal visit, a blocked visit and a visit requiring a return appointment. Ask the technician and coordinator whether each result is understandable. Remove fields nobody uses and clarify fields that produce inconsistent answers.

The review should end with an agreed definition of usable completion evidence. That definition belongs to the business process. Odoo's worksheet is the place to capture it consistently, so the office and the customer can understand what the visit actually achieved.

## Related

Read [How to Set Up Field Service in Odoo](/blog/2026/10/01/how-to-set-up-field-service-odoo/) for the connected workflow.

## Official references

1. [Worksheets](https://www.odoo.com/documentation/19.0/applications/services/field_service/worksheets.html)
1. [Product management](https://www.odoo.com/documentation/19.0/applications/services/field_service/product_management.html)

The replacement version reference is [Odoo 20 Field Service in Planning](https://www.odoo.com/documentation/20.0/applications/services/planning/field_service.html).

*How this article was checked: official Odoo 19 documentation was reviewed in October 2026. Odoo 20 references were also checked; material differences or moved pages are identified above. Examples are illustrative business scenarios, not client results or tests on a live database.*

If you need help translating these decisions into your own workflow, see my [Odoo consulting services](/services/odoo-consulting/).
