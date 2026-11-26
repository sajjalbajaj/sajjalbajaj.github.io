---
layout: post
title: "Odoo 20 Offline Mode: What Works and What to Test"
date: 2026-11-02 07:00:00 +0530
last_modified_at: 2026-11-27
tags: [Odoo, Odoo 20, ERP, Best Practices, Business Automation, Operations, Mobile, Implementation]
hub: services
description: "What Odoo 20 can do offline, which records need caching, what cannot be uploaded, and how to test the queue after reconnection."
faqs:
  - q: "Can Odoo 20 work offline for an entire day?"
    a: "Odoo describes offline mode as support for short interruptions, not full or long-term offline operation. Test the specific records and views needed for the work; an offline screen does not establish that every downstream action can run."
  - q: "Can a user create any record while offline?"
    a: "The documentation requires a record of the same type to have been created while online first. Editing, deleting, archiving or unarchiving requires the record to have been opened online."
  - q: "Can users upload attachments offline?"
    a: "Odoo's offline documentation says attachments and images can be opened offline, but cannot be uploaded or deleted. Plan a separate step to add required evidence after connectivity returns."
---

**Short answer:** Odoo 20 offline mode supports short interruptions for logged-in users working with previously available data. Record creation and changes have preparation requirements, and changes wait in a local queue for synchronisation. Decide what staff can safely record offline and verify the server result after reconnection.

## What is available offline in Odoo 20?

Odoo's [offline mode reference](https://www.odoo.com/documentation/20.0/applications/general/offline_mode.html) distinguishes previously opened records, new records and attachments. It does not describe a disconnected copy of every business process.

| Task | Documented prerequisite or limit |
|---|---|
| Reopen a view or record | Open it while online first |
| Create a record | Previously create a record of that type while online |
| Edit, delete, archive or unarchive | Previously open that record while online |
| Repeat a search | Perform the search online first |
| Add or remove an attachment | Not available offline |

This guidance concerns the general Odoo 20 web client. Point of Sale has its own offline behaviour and must be assessed separately. Custom modules also need their own compatibility checks.

## How should a field team prepare before losing connectivity?

I would choose the exact visit records and searches the team needs, then prepare those while connected. A technician should know which information is available locally and which evidence must wait. A visit photograph, for example, cannot be treated as uploaded just because the visit note was saved locally.

Offline records also create a device-handling responsibility. Agree what happens on shared equipment, when a device is lost, or when the person ends the shift with work still pending. Do not treat browser storage as the team's archive.

## What should happen when the connection returns?

Odoo documents a temporary local queue and automatic synchronisation when connectivity returns. While disconnected, the **Working offline** control lists pending changes and lets users review or discard them.

For acceptance, I would compare the pending list with the resulting server records. A disappearing queue is one observation; the correct customer, quantities and notes on the server are the business evidence. Repeat the check from a second authorised session after synchronisation.

## Which tests should an implementation include?

These are proposed acceptance tests, not results from a live database:

| Scenario | Evidence to inspect |
|---|---|
| Edit a prepared visit note offline | Pending change followed by the intended server value |
| Try a record never opened online | The actual availability restriction and the user's fallback |
| Attempt to add a photograph | A clear instruction to upload it when connected |
| Two people change the same record | Observed conflict behaviour in the installed build |
| Lose connectivity again during synchronisation | Whether every intended change reaches the server once |

Do not assume a particular conflict-resolution rule. Record what the installed build does and decide whether that is acceptable for the workflow.

## What can remove locally available data?

The documentation warns that a hard refresh removes locally stored data and describes a maximum offline allocation of 2 GB, with older data removed as needed. Do not use a hard refresh as a routine troubleshooting step while valuable work is pending. Ask support to establish the queue state first.

For views where stale data is unsuitable, the documented developer-mode action can disable **Data caching**. Review that choice with the implementer; it changes what users can access offline.

## When is offline mode the wrong operating model?

A team that needs long periods without connectivity, guaranteed access to unprepared records or immediate external confirmation needs a broader design. Examples include a payment that must be authorised by a provider or a delivery decision requiring current stock from another location.

Use the [ERP acceptance evidence worksheet](/resources/erp-acceptance-evidence/) to capture the tested scope. For upgrade planning, read the [Odoo migration guide](/blog/2026/08/10/upgrading-to-odoo-20-migration-guide/).

## Source and review

Official reference: [Odoo 20 offline mode](https://www.odoo.com/documentation/20.0/applications/general/offline_mode.html). Documentation checked on 27 November 2026. The acceptance tests above are my proposed review method; I have not presented them as completed tests or client results.

For help defining the disconnected workflow and its acceptance evidence, see my [Odoo consulting services](/services/odoo-consulting/).
