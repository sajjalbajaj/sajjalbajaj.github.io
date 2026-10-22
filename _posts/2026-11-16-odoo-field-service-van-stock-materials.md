---
layout: post
title: "Odoo Field Service Materials: Check the Van and the Invoice"
date: 2026-11-16 09:00:00 +0530
tags: [Odoo, Odoo 19, ERP, Best Practices, Inventory Management, Warehouse Management, Invoicing, Supply Chain]
hub: services
description: "Review Odoo Field Service materials against the technician warehouse, actual consumption and customer billing before marking service work complete."
faqs:
  - q: "Why does the technician default warehouse matter?"
    a: "Odoo 19 documents that materials on related field service sales orders use the configured default warehouse. An incorrect default can affect the stock source."
  - q: "Is every item carried to a visit consumed?"
    a: "No. Distinguish stock carried, products actually used, unused returns and billable materials. The business workflow must reflect those differences."
---

**Short answer:** Review Field Service materials against what the technician actually used and the warehouse that should supply them. Stock carried in a van is not automatically customer consumption. I reconcile the material selection, the stock source and the billing decision before the task is marked done.

## Applies to

Odoo 19 Enterprise Field Service with Sales and Inventory. The documented product catalogue uses Time and Material Invoicing; a user default warehouse requires storage locations and more than one warehouse. Odoo 20 redirects the old product management page to Planning field service, where interventions use shifts. This article describes the Odoo 19 task workflow.

## Which quantity are you recording?

A technician may collect parts before a visit, use only some of them and return the remainder. Those are different movements. Recording everything collected as products used on the task can overstate consumption and create an incorrect customer charge.

Define the event that staff are recording. Is it a transfer into a van, an item installed at the customer, an unused return or a damaged part? Each event should follow the appropriate stock and service workflow. A task's product selection should not become a shortcut for every movement involving that technician.

Also distinguish customer supplied materials. The technician may use an item that was never the service company's stock. Decide how to record that fact without creating a fictitious sale or stock issue. The standard product catalogue alone does not settle the ownership question.

## How does the Odoo 19 warehouse choice work?

Odoo 19 documents a default warehouse on the user's preferences for field service work. Materials on related sales orders are sourced from that warehouse, and stock is updated when the field service task is marked done in the documented flow.

This makes the default important when technicians use different vans or depots. A technician temporarily covering another route may still have the usual warehouse selected. Review the actual order and source rather than assuming the employee's assignment changed every stock setting.

The documented setup requires storage locations and more than one warehouse. Do not create a warehouse for every person automatically. Decide the inventory structure based on how the business controls and replenishes stock, then configure the service workflow to match that structure.

## When should a material become billable?

A used part may be billable, included in a service package or covered by an agreed warranty. Those are commercial decisions. Staff should know which rule applies before selecting products or adjusting prices.

The Odoo 19 product management documentation connects task materials to the related sale and invoice workflow. Review the resulting sales order lines and quantities before issuing an invoice, especially where a technician corrected a selection after the visit.

Do not apply the Odoo 20 Under Warranty behaviour to an Odoo 19 procedure without checking the installed system. The newer Planning based documentation describes different intervention controls. Version differences are material here because they affect how products are added and how the commercial result is produced.

## Worked example: two parts taken, one installed

Imagine an illustrative repair company whose technician takes two possible replacement components to a visit. Only one is needed. The other remains unused in the van and should still be available for later work.

The technician records the installed component on the task. The coordinator confirms the related sales order uses the intended stock source and that the charge matches the service agreement. The unused component remains in the inventory location where it physically sits, or follows a separate return transfer when taken back to the depot.

If both components had been entered as consumed, the customer could receive an incorrect charge while the van's stock record understated availability. A later stock count would reveal the difference but not necessarily explain it. Recording the actual event correctly avoids that confusion.

## When it fits and when it doesn't

This approach fits maintenance, installation and repair teams carrying parts to customers. It is particularly useful when technicians work from several depots or cover each other's routes.

It does not replace a complete van replenishment design or specialist custody tracking. Expensive tools, customer owned assets and consumable parts may need different controls. Model those differences deliberately instead of treating every physical object as a billable task product.

## Common mistakes

**Entering all collected stock as used.** Record actual consumption separately from movement into the van.

**Ignoring a temporary warehouse change.** Confirm the source on the related order when staff cover another depot.

**Assuming used means chargeable.** Apply the customer's commercial agreement before invoicing.

**Fixing discrepancies with unexplained adjustments.** Trace whether the issue came from a transfer, consumption or return.

## What should the service coordinator review?

For exception visits, compare the technician's account of the work with product lines, stock movements and the draft invoice. Focus on substitutions, returned parts and warranty decisions rather than manually rechecking every routine line forever.

Use repeated exceptions to improve the instructions given to technicians. If staff consistently confuse collected and consumed quantities, the problem is likely the workflow definition. A clear recording rule is more effective than a monthly correction exercise after customers have already been billed.

## Related

Read [Odoo Packages and Product Packaging: Keep the Identities Clear](/blog/2026/11/08/odoo-packages-vs-product-packaging/) for the connected workflow.

## Official references

1. [Product management](https://www.odoo.com/documentation/19.0/applications/services/field_service/product_management.html)
1. [Worksheets](https://www.odoo.com/documentation/19.0/applications/services/field_service/worksheets.html)

The replacement version reference is [Odoo 20 Field Service in Planning](https://www.odoo.com/documentation/20.0/applications/services/planning/field_service.html).

*How this article was checked: official Odoo 19 documentation was reviewed in October 2026. Odoo 20 references were also checked; material differences or moved pages are identified above. Examples are illustrative business scenarios, not client results or tests on a live database.*

If you need help translating these decisions into your own workflow, see my [Odoo consulting services](/services/odoo-consulting/).
