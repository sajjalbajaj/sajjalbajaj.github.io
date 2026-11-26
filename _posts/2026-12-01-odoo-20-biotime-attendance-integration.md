---
layout: post
title: "Odoo 20 BioTime Attendance Integration: Ownership and Validation"
date: 2026-12-01 07:00:00 +0530
tags: [Odoo, Odoo 20, ERP, Best Practices, Attendances, Human Resources, Integration, Payroll]
hub: integrations
description: "Configure Odoo 20 BioTime Cloud attendance integration with employee ID mapping, fetch windows, punch processing and unmatched event review."
faqs:
  - q: "Does Odoo connect directly to ZKTeco terminals?"
    a: "The documented integration connects to BioTime Cloud software, not directly to the terminals. Device compatibility depends on BioTime."
  - q: "How often do transactions synchronise?"
    a: "The documentation states an automatic twelve hour sync, with a manual Fetch action available. Configure the fetch window to cover delayed runs."
  - q: "What happens when a checkout cannot find an open attendance?"
    a: "It remains unmatched when no eligible open attendance is found within the configured lookback. Inspect the Processing Note and source event before correcting it."
---

**Short answer:** Odoo 20's documented BioTime integration connects to BioTime Cloud and imports individual punches for processing into attendance records. It does not connect directly to ZKTeco terminals. Verify employee identifiers, fetch coverage and checkout matching before relying on the attendance output for downstream review.

## What is the supported connection?

The [BioTime integration guide](https://www.odoo.com/documentation/20.0/applications/hr/attendances/biotime_integration.html) explicitly limits this integration to BioTime Cloud. Hardware compatibility belongs to the BioTime environment and supported device list.

Install the Attendances ZKTeco BioTime module, then configure the company, server URL and authentication details in Attendances settings. Test the connection without putting credentials into acceptance screenshots or shared documents.

A successful connection proves access to the server. It does not prove that the correct employees, time periods or punch types are being imported.

## Why are fetched punches separate from attendances?

BioTime stores each check in or checkout as an individual event. Odoo attendance records combine the beginning and end of an attendance period. Imported transactions therefore need processing before the final attendance exists.

Employee matching uses the ZKTeco employee ID on the employee record. An unmatched identity produces a Processing Note. Inspect that warning rather than assigning the transaction to a person with a similar name.

The documented supported punch types are check in and checkout. Other values need investigation before processing.

## How should fetch and lookback windows be chosen?

The guide describes automatic synchronisation every twelve hours and a manual Fetch action. The Transaction Fetch Window should cover delays so a late run does not omit events.

Check-out Lookback controls how far back processing searches for an open check in. A checkout links to the earliest eligible open attendance within that period. This is especially important for overnight work and unresolved older attendances.

Do not increase either window blindly to hide an exception. Understand which events will be considered and review the actual employee history.

## Which proposed tests matter before payroll reliance?

| Proposed case | Result to inspect |
| --- | --- |
| Normal shift | Correct employee, times and linked attendance |
| Overnight shift | Appropriate date and time zone handling |
| Unknown employee ID | Clear warning with no false assignment |
| Existing open attendance | New check in is investigated |
| Checkout outside lookback | Unmatched event remains visible |
| Delayed or repeated fetch | Coverage and duplicate handling are verified |

These cases need execution against the configured systems. The guide is not evidence that duplicate behaviour has been tested in a particular installation.

## How should failures be corrected?

Inspect the Processing Note and the source punch. Use Process after correcting the identified issue. If source data is incomplete or wrong, the documented Re-Fetch action retrieves it again before processing.

Avoid deleting attendance simply to clear a transaction warning. Retain the reason, source reference and authorised correction. Successfully processed records show the linked attendance and BioTime mode.

The [attendance correction guide](/blog/2026/11/25/odoo-attendance-correction-approval/) covers review ownership. Capture the proposed integration checks in the [ERP acceptance evidence worksheet](/resources/erp-acceptance-evidence/).

*Sources reviewed on 27 November 2026. Scenarios are proposed acceptance cases, not reported customer results. Confirm edition, installed modules and provider requirements for your database.*
