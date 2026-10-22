---
layout: post
title: "Odoo Purchase Lead Times: Separate Plans from Supplier Promises"
date: 2026-11-04 10:00:00 +0530
tags: [Odoo, Odoo 19, ERP, Best Practices, Purchase, Inventory, Supply Chain, Logistics]
hub: purchase
description: "Use Odoo purchase lead times with supplier confirmations, receipt evidence and exception reviews so planned dates remain useful for operating decisions."
faqs:
  - q: "Does an expected arrival date prove the supplier confirmed it?"
    a: "No. An expected date can be calculated from configured lead times. Keep the supplier confirmation and later revisions identifiable."
  - q: "Should every late receipt change the vendor lead time?"
    a: "No. Investigate the cause first. An exceptional disruption, late internal approval and a recurring supplier delay require different responses."
---

**Short answer:** lead times are planning assumptions that need comparison with supplier confirmations and actual receipts. Odoo can calculate expected dates from configured values, but the business must decide whether those assumptions remain credible. Keep planned, promised and actual dates distinguishable so that a late delivery leads to the right corrective action.

## Applies to

Odoo 19 Purchase and Inventory replenishment planning. Odoo 20 changes some delivery lead time terminology; this article uses the Odoo 19 baseline. The corresponding Odoo 20 references were reviewed in October 2026; use the documentation for your installed release when configuring screens and fields.

## Which date answers which question?

The purchasing deadline, order confirmation, expected arrival and actual receipt represent different events. A warehouse also may have an inspection or putaway period before goods become usable. Agree which event a report measures before calling a supplier early or late.

Odoo's RFQ documentation distinguishes the order deadline from expected arrival, and describes asking the vendor to confirm the shipping date. Read the supplier's response carefully. A dispatch promise is not necessarily a promise that goods will be available in your warehouse on the same day.

I would retain the original expectation when recording a revision. Continually replacing a missed promise with a later date can make the current plan look reasonable while erasing the evidence needed to improve planning. Keep an understandable history through the approved record process.

## How should lead times be chosen?

Start with the supplier arrangement and the route the goods actually follow. Consider production, transport and the relevant receiving process. Confirm whether a quoted duration starts when the order is sent, accepted or paid. Those starting points can produce materially different arrival expectations.

Use representative historical evidence where it is available, and document gaps where it is not. Avoid pretending a small or inconsistent sample establishes a reliable average. Seasonal demand, different product families and exceptional orders may need separate consideration.

Keep safety time distinct from ordinary supplier time. A buffer expresses the business's planning choice; it should not conceal an inaccurate base assumption. If every order needs urgent intervention despite a buffer, investigate the underlying process instead of adding more days without explanation.

## Who should act when a promise changes?

Assign purchasing responsibility for obtaining and recording the revised supplier information. Then identify which downstream teams need it. Production, customer service and warehouse receiving may each need to adjust different commitments.

Review affected demand before making a new customer promise. An incoming quantity can be shared across several orders, and a later arrival may affect more than the most visible customer. Keep allocation decisions with the authorised owner rather than letting the loudest request automatically take priority.

Separate the cause from the response. A supplier delay may require expediting, an alternative source or rescheduling. A late internal approval needs a different improvement. Recording everything as supplier lateness prevents the organisation from seeing where its own process contributes to missed dates.

## Worked example: a component arrives after production starts

Consider a manufacturer planning a production run around an expected component receipt. The default supplier lead time produces an arrival date before the run, but the supplier's confirmation states a later dispatch date. The buyer records that difference rather than treating the calculated date as authoritative.

Production reviews the affected jobs and determines whether another approved component source exists. Customer service receives the revised delivery implications. The warehouse plans receiving and any required checks around the confirmed information, not the original optimistic assumption.

After the receipt, the team compares the timeline. It finds that part of the delay came from an internal approval held over a weekend, while another part came from the supplier. The resulting improvements address both causes rather than simply inflating the product's lead time.

## What should an exception review show?

Use a short list of orders requiring attention, with the affected quantity, current expectation, supplier evidence and next action. An overdue label is a starting point for investigation. It should lead to a decision or followup owned by a named person.

Include partial deliveries. The first receipt may satisfy an urgent job while the remaining quantity stays late. A single completed or late status can hide that distinction. Review the quantities the business actually needs and the remaining commitments separately.

Keep cancellations and substitutions visible. They can change whether a late order still matters. Closing an exception should mean the business consequence has been resolved or accepted, not merely that someone changed a date to remove it from the list.

## When does detailed date tracking fit?

It fits purchases that influence production, customer commitments or material stock levels. Routine low consequence purchases may need a simpler review. The amount of detail should follow the cost of making a wrong operating decision.

The method is less useful when nobody maintains the underlying product and supplier information. Begin with reliable ownership and representative records before building elaborate dashboards. A precise chart built from overwritten dates can still give a misleading picture.

## Common mistakes

Typical mistakes include confusing dispatch with arrival, hiding internal approval delays and treating a planning buffer as proof that a promise is safe. Another is measuring full order performance from the first partial receipt while ignoring the outstanding balance.

Review the date definitions with purchasing, warehouse and operations staff together. They should be able to follow one delayed order and agree what happened. Once that shared meaning is established, configured lead times become useful inputs to planning instead of unexplained numbers copied from an old spreadsheet.

## Related

Read [Odoo Alternative RFQs: Compare the Offer Behind the Price](/blog/2026/11/04/odoo-alternative-rfq-supplier-selection/) for the connected workflow.

## Official references

1. [Lead times](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/warehouses_storage/replenishment/lead_times.html)
1. [Requests for quotation](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/purchase/manage_deals/rfq.html)

*How this article was checked: official Odoo 19 documentation and the corresponding Odoo 20 pages were reviewed in October 2026. The examples are illustrative, not client results or tests on a live database.*

For help designing this workflow, see my [Odoo consulting services](/services/odoo-consulting/).
