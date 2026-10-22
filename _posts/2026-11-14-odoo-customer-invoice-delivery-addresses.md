---
layout: post
title: "Odoo Customer Addresses: Separate Billing and Delivery"
date: 2026-11-14 10:00:00 +0530
tags: [Odoo, Odoo 19, ERP, Best Practices, Customer Management, Invoicing, Distribution, Setup]
hub: sales
description: "Organise Odoo customer invoice and delivery addresses so quotations, warehouse instructions and billing records describe the right business locations."
faqs:
  - q: "Can one customer have separate invoice and delivery addresses?"
    a: "Yes. Odoo Contacts documents address types including Invoice and Delivery. Review the addresses selected on each transaction."
  - q: "Does changing a contact update every existing document?"
    a: "Do not assume existing quotations, deliveries or posted invoices all change together. Review affected documents according to their state and the applicable correction process."
---

**Short answer:** Model the customer who buys, the address that receives the invoice and the location that receives goods deliberately in Odoo. They may be different. I review those choices on the order before using them to drive warehouse work or customer billing.

## Applies to

Odoo 19 Contacts and Sales, with Inventory and Accounting where relevant. These core records exist across editions, while accounting features depend on installed applications. Odoo 20 changes contact form labels, including related contact creation. The operational distinction between billing and delivery remains the focus here.

## Why is one address often not enough?

A customer may have a head office, several receiving sites and a separate accounts team. Delivering stock to the billing office creates an operational problem even when the customer name is correct. Sending an invoice to a warehouse contact can delay payment because the person receiving it does not approve bills.

Odoo Contacts supports related contacts and address types, including Invoice and Delivery. These provide a structure for representing the relationship. They do not remove the need to choose the correct address for a particular transaction.

Start by distinguishing a location from a legal customer. Two branches of one buyer may share billing arrangements, while similarly named companies may be separate customers. Have finance confirm the commercial identity instead of asking a salesperson to infer it from a delivery instruction.

## What information should each address contain?

A delivery address should be usable by the fulfilment team. Include the actual receiving location and an appropriate contact, then handle delivery instructions in the workflow that staff and carriers will use. A descriptive nickname can help staff distinguish sites, but it should not replace the full address.

An invoice address should represent the agreed billing destination. Confirm who receives invoices and whether the purchase order identifies a particular billing entity. Tax identifiers and legal requirements should be reviewed by the finance owner; this article does not prescribe jurisdiction specific invoice treatment.

Avoid creating a new company record every time a customer opens another receiving location. That can fragment history and make it harder to recognise the same commercial relationship. Equally, do not place unrelated legal buyers under one account just because they share a brand or purchasing manager.

## What should happen when an address changes?

Establish whether the change applies to future business, an open order or documents already issued. Updating the contact record may be necessary, but it is not a substitute for reviewing each affected transaction.

For an open delivery, ask the warehouse whether picking, labels or transport arrangements have already been prepared. For an invoice already posted, use the finance team's correction process. Do not overwrite historical meaning merely to make today's contact details look consistent.

Keep the source of the instruction. A verified customer request is stronger evidence than a handwritten note forwarded through several people. If the new destination is unfamiliar, the account owner should confirm it through the organisation's normal customer communication process before fulfilment changes.

## Worked example: food deliveries to several outlets

Consider an illustrative food distributor supplying a restaurant business. Accounts are handled centrally, but goods go to three outlets. Each outlet has different receiving hours and a different local contact. The buyer also operates another company with a similar trading name.

The distributor keeps the commercial identities distinct and records the receiving locations under the appropriate customer. The salesperson selects the intended delivery address on the quotation, while finance confirms the invoice destination. Warehouse staff review the site before preparing the route paperwork.

One outlet relocates while an order is already being picked. The account owner confirms the new destination and alerts dispatch. The team reviews the open order and prepared transport documents instead of assuming the contact edit changed every downstream instruction. Existing billing history remains understandable.

## When it fits and when it doesn't

This approach fits distribution, equipment supply, service visits and businesses selling to customers with multiple locations. It is particularly helpful when sales, dispatch and accounts are separate teams.

It does not replace a specialist address validation service or a decision about legal entities. If the business requires carrier validation, territory rules or restricted delivery zones, those controls need to be designed separately. The contact hierarchy supplies structure, not proof that every address is deliverable.

## Common mistakes

**Using the warehouse as the billing contact.** Confirm who handles invoices and payment questions.

**Creating duplicate customers for every site.** Review the commercial relationship before adding another company record.

**Combining separate legal buyers.** Similar names or shared staff do not prove the same billing identity.

**Changing the master record and stopping there.** Review open transactions, printed documents and carrier instructions.

## How should the team maintain address quality?

Give one role responsibility for reviewing address changes and another, where appropriate, for confirming their billing implications. A small business may combine those roles, but the two questions still need answers.

Periodically review addresses that repeatedly cause delivery failures or invoice corrections. Look for missing site identifiers, old contacts and inconsistent naming. Correct the source record and the process that introduced the error. Repeatedly fixing the delivery note by hand leaves the next order exposed to the same problem.

## Related

Read [A B2B Ordering Portal for Dealers and Distributors in Odoo](/blog/2026/10/14/b2b-dealer-ordering-portal-odoo/) for the connected workflow.

## Official references

1. [Contacts](https://www.odoo.com/documentation/19.0/applications/essentials/contacts.html)
1. [Create quotations](https://www.odoo.com/documentation/19.0/applications/sales/sales/sales_quotations/create_quotations.html)

*How this article was checked: official Odoo 19 documentation was reviewed in October 2026. Odoo 20 references were also checked; material differences or moved pages are identified above. Examples are illustrative business scenarios, not client results or tests on a live database.*

If you need help translating these decisions into your own workflow, see my [Odoo consulting services](/services/odoo-consulting/).
