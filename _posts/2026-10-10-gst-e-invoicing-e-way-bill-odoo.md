---
layout: post
title: "GST E-Invoicing and E-Way Bills in Odoo 19: Setup and Daily Use"
date: 2026-10-10 09:00:00 +0530
tags: [Odoo, Odoo 19, India, GST, Invoicing, Compliance, Logistics, Setup]
hub: accounting
description: "Set up GST e-invoicing and e-way bills in Odoo 19: NIC API users, IRN and QR codes, cancelling, transport details and fixing rejected submissions."
faqs:
  - q: "Which invoices does Odoo send for GST e-invoicing?"
    a: "Posted invoices in a sales journal whose lines fall in the B2B, export, SEZ or deemed export sections of GSTR-1, plus credit and debit notes on them. Invoices to consumers are not sent. Whether your business must e-invoice at all depends on the turnover limit in force, so check the official e-invoice portal."
  - q: "Does e-invoicing in Odoo cost anything?"
    a: "The Indian e-invoice, e-way bill and GSTIN status services use Odoo In-App Purchase (IAP) credits. In Odoo 19 the tooltip on the Buy credits link says each transaction costs one credit."
  - q: "Can I cancel an e-invoice from Odoo?"
    a: "Yes. Click Request Cancel on the invoice, choose a reason and add remarks. The portal only accepts cancellations within its own time window; if it refuses, Odoo offers Force Cancel, which cancels the invoice in Odoo only."
---

**Short answer:** in Odoo 19, create an API user for the BVM IT Consulting GSP on the NIC e-invoice and e-way bill
portals, then tick **E-Invoicing** and **E-Way bill** in **Accounting ‣ Configuration ‣ Settings** and enter those
credentials. After you post a B2B invoice, **Send** it with **E-invoicing** ticked: Odoo gets the IRN, acknowledgement
and signed QR code from the portal and prints them on the invoice. Then click **Create e-Waybill**, add the transport
details and click **Generate e-Waybill**. Each call uses Odoo IAP credits.

This guide assumes GST itself already works. If it doesn't, start with
[how to set up GST in Odoo](/blog/2026/10/10/how-to-set-up-gst-odoo/).

## Applies to

- **Odoo version:** Odoo 19. The Odoo 20 India documentation currently reads the same as the Odoo 19 page. In the Odoo
  20 code, the **E-Invoicing** setting is hidden when the company's GST registration type is Composition.
- **Edition:** Community and Enterprise. The **Indian E-invoicing**, **Indian E-waybill** and **Indian E-waybill Stock**
  modules are in Odoo's open-source code. **Fetch Vendor E-Invoiced Document**, which drafts bills from your
  suppliers' e-invoices, is Enterprise only. All of these services need IAP credits.
- **Apps:** Invoicing or Accounting, plus Inventory for e-way bills from deliveries and receipts.

## Who must e-invoice, and what are the IRN and QR code?

E-invoicing means registering each qualifying invoice on a government Invoice Registration Portal (IRP), which
validates and signs it. Whether you must do it depends on your turnover against a limit set by government
notification. Check the current position on the official [e-invoice portal](https://einvoice1.gst.gov.in/) or with
your tax adviser, not in a blog post.

When the IRP accepts an invoice, it returns an **IRN** (Invoice Reference Number, unique to that invoice), an
acknowledgement number and date, and a digitally signed QR code. Odoo prints all of them on the invoice PDF.

In Odoo 19, an invoice is eligible when it's in a sales journal and its lines fall in the B2B, export, SEZ or
deemed-export sections of GSTR-1, including credit and debit notes on those. Invoices to consumers aren't sent.

An **e-way bill** is a separate document for moving goods, generated on the NIC e-way bill portal. Odoo creates it from
an invoice or bill, or from a delivery or receipt with the **E-waybill Stock** module.

## Before you start

1. **GST is set up:** GSTIN on the company, HSN/SAC codes on products and a GST tax on every invoice line.
2. **Addresses are complete.** Before sending, Odoo checks that the company, customer and delivery addresses have a
   street and city of 3 to 100 characters, a state with a two-digit GST state code, and a six-digit PIN code.
3. **Invoice numbers have 16 characters or fewer.** Odoo blocks longer ones.
4. **You can log in** to the NIC e-invoice and e-way bill portals for your GSTIN.

## Step by step

### Connect Odoo to the portals

1. **E-invoice API user.** On the NIC e-invoice portal, go to **API Registration ‣ User Credentials ‣ Create API
   User** and verify the OTP sent to your registered mobile. Choose **Through GSP**, select **BVM IT Consulting
   Services India Private Limited**, set an API username and password, and click **Submit**.
2. **E-way bill API user.** On the NIC e-way bill portal, go to **Registration ‣ For GSP**, click **Send OTP**, then
   **Verify OTP**. If BVM is already on your GSP list, reuse your portal login. Otherwise click **Add/New**, choose BVM,
   create a username and password, and click **Add**.
3. **GSP in Odoo.** In **Accounting ‣ Configuration ‣ Settings**, under **Indian Integration**, set **GSP** to **BVM IT
   Consulting**. The other option, Tera, is marked deprecated.
4. **Switch the features on.** Tick **E-Invoicing** and **E-Way bill**, save, and come back to the page. Enter each
   **Username** and **Password**, then click **Verify Username and Password**.
5. **Production or test.** The **Production Environment** checkbox only shows in developer mode, and in Odoo 19's code
   it starts ticked. Untick it only while you test against the government sandbox.
6. **Credits.** With production on, a **Buy credits** link appears. Its tooltip says each transaction costs one credit.

### Generate or cancel an e-invoice

7. **Post the invoice.** Its **India E-Invoice Status** shows **To Send**.
8. **Send it.** Click **Send**, tick **E-invoicing** and click **Generate**. Odoo checks the data first and shows any
   problem as an alert. On success the status becomes **Sent**, and the chatter holds the request and the signed
   response as JSON files.
9. **Discount lines.** The portal rejects negative lines, so Odoo turns a negative discount line into a discount on the
   positive line with the same HSN code and GST rate.
10. **Cancel if needed.** Click **Request Cancel**, choose a **Cancel Reason** (Duplicate, Data Entry Mistake, Order
    Cancelled or Others), add **Cancel Remarks** and confirm. The e-invoice status and the invoice both become
    **Cancelled**. The Odoo documentation doesn't give a time limit, but the portal only accepts cancellations within
    its own window, so check the current rule there.

### Generate an e-way bill

11. On the posted invoice or bill, click **Create e-Waybill** and complete:
    - **Document Type**, for example **Tax Invoice**.
    - **Address Details**: **Bill From**, **Bill To**, **Dispatch From** and **Ship To**, pre-filled from the invoice.
    - **Transporter**, if a transport company moves the goods.
    - **Transportation Details (Part B)**: **Transportation Mode** (By Road, Rail, Air, or Ship or Ship Cum Road/Rail),
      **Vehicle Type** and **Vehicle Number** for road, **Distance** in km, and the transport document number and date
      (labelled RR No, Airway Bill or Bill of lading No for the other modes).
12. Click **Generate e-Waybill**. Odoo fills in **e-Waybill Number**, **e-Waybill Date** and **e-Waybill Valid Upto**.
    If the invoice already has an IRN, Odoo generates the e-way bill through the IRN (except for credit and debit
    notes).
13. **From Inventory:** with **Indian E-waybill Stock** installed, open **Inventory ‣ Operations ‣ Deliveries** or
    **Receipts** and click **Create E-waybill/Challan**. A delivery must be **Done**; a receipt **Ready** or **Done**.
    **Use as Challan** prints a delivery challan without sending anything to the portal.
14. **Cancel:** click the **e-Waybill** smart button, then **Cancel e-Waybill**, and give a reason and remarks. Odoo's
    e-way bill module includes the portal's error for late requests: "You can cancel the ewaybill within 24 hours from
    Part B entry".

## Worked example: an inter-state delivery from Ludhiana

The Ludhiana distributor from the GST guide invoices a registered dealer in Panchkula, Haryana, for ₹50,000 plus IGST,
and sends the goods on its contracted truck.

- The invoice posts as **INV/2026/00042**, which is 14 characters. Status: **To Send**.
- **Send** with **E-invoicing** ticked returns the IRN, acknowledgement and QR code. Status: **Sent**.
- **Create e-Waybill:** **Tax Invoice**, **By Road**, **Regular** vehicle, the truck's registration number, and
  **Distance** left at 0. If the portal works the distance out from the two PIN codes, Odoo copies it into the field.
- Because the invoice has an IRN, **Generate e-Waybill** goes through the IRN. The e-way bill number and validity date
  then appear on the invoice PDF.
- A delivery to a customer with the same PIN code as the warehouse is different: Odoo asks for a distance before sending.

## What you should see

- On the invoice: **India E-Invoice Status** and an **e-Waybill** smart button. The invoice list has an optional
  e-invoice status column.
- On the PDF: the IRN, acknowledgement number and date, the QR code, and the e-way bill number and validity date.
- To prove an invoice is signed, download its JSON from the chatter and upload it on the NIC e-invoice portal under
  **Search ‣ Verify Signed Invoice**.

## Troubleshooting

**E-invoicing isn't offered in the Send window.**
The invoice isn't eligible (a consumer sale, or not a sales journal) or was already sent. Check **GST Treatment** and
the customer's GSTIN.

**"Partners should have a complete address" or "ZIP code required 6 digits".**
Fix the contact or company address, then send again.

**"Missing or invalid HSN/SAC code" or "Set an appropriate GST tax on invoice lines".**
Every line needs a 4, 6 or 8-digit code and a GST, nil-rated, exempt or non-GST tax.

**"Incorrect username or password, or the GST number on company does not match."**
Recheck the API user you created and the company's GSTIN.

**Error 2150, duplicate IRN.**
Usually a request that timed out but reached the portal. Odoo fetches the existing IRN and posts a note; verify it on
the portal.

**A message about buying credits.**
The IAP balance is empty. Top it up and send again.

**The portal refuses a cancellation.**
The error shows in a red banner with a **Force Cancel** link. That cancels the invoice in Odoo only; the IRN stays live
on the portal, so agree the correction, often a credit note, with your adviser.

**"Transporter ... does not have a valid GST Number".**
Add the transporter's GSTIN, or for road transport enter the vehicle number.

**Wrong details on a generated e-way bill.**
It can't be edited. Cancel it, click **Reset to Pending**, correct the details and generate again.

## Related setup

- [How to set up GST in Odoo 19](/blog/2026/10/10/how-to-set-up-gst-odoo/)
- [Customer invoicing in Odoo](/blog/2026/08/21/customer-invoicing-in-odoo/)
- [How to set up taxes and fiscal positions in Odoo](/blog/2026/09/22/how-to-set-up-taxes-fiscal-positions-odoo/)
- Want e-invoicing and e-way bills checked before your first live invoice? See
  [Odoo consulting](/services/odoo-consulting/).

## Official references

- Odoo 19 documentation: [India (fiscal localisation)](https://www.odoo.com/documentation/19.0/applications/finance/fiscal_localizations/india.html)
- Odoo 19 documentation: [In-app purchase (IAP)](https://www.odoo.com/documentation/19.0/applications/essentials/in_app_purchase.html)
- Government of India: [NIC e-invoice portal](https://einvoice1.gst.gov.in/)
- Government of India: [NIC e-way bill portal](https://ewaybillgst.gov.in/)

*How this guide was checked: portal steps, menu paths and field names were checked against the Odoo 19 documentation
and the Indian e-invoicing and e-way bill modules in Odoo 19 (settings, validations, error messages and the e-way bill
form) in October 2026. The worked example is illustrative and wasn't run on a live database or portal, so there are no
screenshots; labels can vary slightly with your installed apps and language.*
