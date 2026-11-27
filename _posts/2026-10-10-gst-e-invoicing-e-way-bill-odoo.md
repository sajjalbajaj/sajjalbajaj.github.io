---
layout: post
title: "GST E-Invoicing and E-Way Bills in Odoo 19: Setup and Daily Use"
date: 2026-10-10 09:00:00 +0530
tags: [Odoo, Odoo 19, India, GST, Invoicing, Compliance, Logistics, Setup]
hub: accounting
description: "Set up Odoo 19 GST e-invoicing and e-way bills, verify portal results, and diagnose credential errors, duplicate IRNs and cancellation mismatches."
last_modified_at: 2026-11-27
faqs:
  - q: "Does a timeout mean the e-invoice was not registered?"
    a: "No. The request may have reached the portal. Check the document reference, response and any existing IRN before retrying or creating another invoice."
  - q: "Does Force Cancel cancel an IRN on the government portal?"
    a: "No. In the reviewed Odoo 19 implementation, the force-cancel route changes the local invoice without performing the normal portal cancellation request. Verify the portal status separately."
  - q: "Is every e-invoicing action charged a fixed number of credits?"
    a: "Do not assume a fixed charge from this guide. Check the current service balance, displayed terms and applicable provider pricing. The reviewed code can report insufficient credits."
---

**Short answer:** In Odoo 19, configure the Indian localisation, the documented GSP and separate e-invoice and e-way bill API credentials. Submit an eligible posted document, then verify the portal response and resulting references. A local status, timeout or cancellation action alone does not establish what happened on the government portal.

Start with [GST setup](/blog/2026/10/10/how-to-set-up-gst-odoo/) if company and tax configuration are not ready. This guide concerns the software workflow; the responsible tax specialist must establish which obligations apply.

## Which version and applications does this cover?

The operating steps below follow the [Odoo 19 India documentation](https://www.odoo.com/documentation/19.0/applications/finance/fiscal_localizations/india.html). The [Odoo 20 India reference](https://www.odoo.com/documentation/20.0/applications/finance/fiscal_localizations/india.html) was reviewed separately. It retains the main connection and submission concepts but contains additional localisation material, so the pages should not be described as identical.

The relevant modules include **Indian - Accounting**, **Indian E-invoicing** and **Indian E-waybill**. Creating an e-way bill from a stock operation additionally needs **Indian E-waybill Stock**. Verify the installed modules and permissions rather than inferring availability from the Accounting menu alone.

API credentials, provider access and any service charges are separate from installing a module. This article does not publish current statutory thresholds, portal cancellation deadlines or a universal transaction price.

## What should be checked before connecting the portals?

Confirm the intended company, address, PAN and GSTIN. Review the customer, delivery address, product classifications and applicable taxes with finance. Resolve master-data problems before attempting a production submission.

Keep the API credentials in the appropriate configuration fields. Do not copy passwords into a support ticket or the public evidence worksheet. Record the company, provider and environment without recording the secret itself.

Odoo documents a **Production Environment** choice. Inspect its actual state in the installed database and the credentials used. Do not assume a copied database or an unfamiliar default points to a safe test service.

## How is the documented connection configured?

1. In **Accounting ‣ Configuration ‣ Settings**, find the GSP configuration. The reviewed documentation specifies **BVM IT Consulting** for these integrations.
2. On the NIC e-invoice portal, follow **API Registration ‣ User Credentials ‣ Create API User**. Complete the portal's verification, select **Through GSP** and the documented provider, then create the API credentials.
3. Configure the e-way bill portal access separately through its documented **Registration ‣ For GSP** process. Check whether the provider is already registered before creating another entry.
4. Enable **E-Invoicing** and **E-Way bill** in Odoo's Indian integration settings and enter the corresponding credentials.
5. Verify the intended test or production environment and the connection using a controlled, authorised case.

The official India reference explains both portal routes. Confirm the interface shown for your account if labels differ; avoid repeatedly changing credentials to work around an unexplained response.

## How do you generate an e-invoice and prove the result?

Post the eligible invoice, select **Send**, choose **E-Invoicing** and use **Generate**. Inspect the returned status and the attachments recorded in the chatter.

On success, review the IRN, acknowledgement information and signed QR code on the output. Check that they relate to the intended document, customer and amount. A PDF containing a code should be checked against its source response, rather than accepted solely because it looks complete.

Odoo documents a verification route: download the relevant signed JSON from the invoice chatter and use **Search ‣ Verify Signed Invoice** on the [NIC e-invoice portal](https://einvoice1.gst.gov.in/). Keep the resulting evidence in the authorised project location.

## How is an e-way bill different?

An e-way bill supports the movement of goods and has its own reference and status. Successful e-invoice registration does not prove that an e-way bill was generated.

From the relevant posted invoice or bill, use **Create e-Waybill**, check the source and destination addresses, transport mode and required transport details, then generate it. Review the returned number and validity information.

For stock operations, the documented route is **Inventory ‣ Operations ‣ Deliveries** or **Receipts**, followed by **Create E-waybill/Challan**. The reference requires a delivery to be **Done**, and a receipt to be **Ready** or **Done**. A printed challan and a portal-generated e-way bill are different outputs.

## What should you do when submission fails?

Start with the exact response, document reference, company and environment. Use this diagnostic sequence before changing the invoice.

| Symptom | Evidence to inspect | Appropriate next step |
| --- | --- | --- |
| Feature absent from the send flow | Installed module, document eligibility, company and existing status | Resolve configuration or eligibility with the responsible owner |
| Address or classification validation error | Named field on the company, customer, delivery address or invoice line | Correct that field and review the resulting payload |
| Authentication failure | Intended GSTIN, provider, environment and API user | Verify the correct account through the supported configuration |
| Insufficient-credit message | Actual service account and balance | Confirm current service terms and arrange authorised replenishment |
| Timeout or duplicate IRN | Original document identity, portal lookup and returned signed details | Establish the existing result before a controlled retry |
| Cancellation refused | Portal response and current IRN or e-way bill status | Escalate the permitted correction; do not assume local cancellation is sufficient |

The reviewed [Odoo 19 e-invoice implementation](https://github.com/odoo/odoo/blob/19.0/addons/l10n_in_edi/models/account_move.py) attempts an IRN lookup when it receives duplicate error 2150. It also checks returned buyer and invoice-value details where available and can retain an error when they differ.

That behaviour supports investigation; it is not a guarantee that every timeout is recovered automatically. If the existing response belongs to different details, stop and resolve the discrepancy instead of changing the invoice number to force another submission.

## What should happen after a refused cancellation?

Use the documented **Request Cancel** route with the reason and remarks, then inspect the actual response. Check e-invoice and e-way bill cancellation independently where both exist.

The Odoo 19 source distinguishes the normal portal request from **Force Cancel**. The latter changes local records without making that normal cancellation request. A locally cancelled invoice can therefore require separate portal investigation.

Have the finance or tax owner determine the permitted correction. This guide does not prescribe a credit note, deletion or backdated change as a universal answer.

## What does a useful acceptance example look like?

Consider a proposed test using a fictional invoice reference, an approved customer and a taxable value of ₹50,000. Finance supplies the expected tax treatment; the example does not assume a statutory rate.

Run these cases in an appropriate controlled environment:

* Complete a valid submission and trace the returned reference to the document and output.
* Use an incomplete address and confirm the reported field can be identified and corrected.
* Investigate a simulated timeout by checking whether the portal already holds the document.
* Review a duplicate response and confirm mismatched buyer or value details reach a person.
* Review a refused cancellation without treating a local state change as portal acceptance.

Record expected and observed outcomes separately in the [ERP acceptance evidence worksheet](/resources/erp-acceptance-evidence/). These cases have not been executed on a customer database or portal for this article.

## Sources and review

Reviewed on 27 November 2026: the Odoo 19 and 20 India references linked above, the official Odoo 19 e-invoice source, and [Odoo's IAP explanation](https://www.odoo.com/documentation/19.0/applications/essentials/in_app_purchase.html). The [NIC e-way bill portal](https://ewaybillgst.gov.in/) remains the relevant government service for its current requirements.

This is a documentation and source-code review, not a statutory certification or live portal test. For help tracing configuration and transaction evidence, see [Odoo consulting](/services/odoo-consulting/).
