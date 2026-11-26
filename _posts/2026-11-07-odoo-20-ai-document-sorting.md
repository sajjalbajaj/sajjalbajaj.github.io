---
layout: post
title: "Odoo 20 AI Document Sorting: Route Business Files for Review"
date: 2026-11-07 07:00:00 +0530
tags: [Odoo, Odoo 20, ERP, Best Practices, AI, Documents, Business Automation, Compliance]
hub: services
description: "Set up Odoo 20 document auto-sorting around folder prompts and permitted actions, with a review route for bundled, ambiguous or sensitive files."
last_modified_at: 2026-11-27
faqs:
  - q: "Does Odoo 20 document sorting require the AI app?"
    a: "The documentation says the AI app is not required for document automation. Documents and the relevant business apps must be installed, and available actions depend on those apps."
  - q: "Does tagging a file for splitting split it automatically?"
    a: "No. The documented example adds a review tag to a file containing multiple documents. The tag identifies the manual task; it does not perform the split."
  - q: "Does correct folder placement prove an invoice is valid?"
    a: "No. Classification and routing do not establish authenticity, approval, accounting treatment or the absence of a duplicate bill."
---

**Short answer:** Odoo 20 AI document sorting evaluates files using folder-level prompts and selected actions. Design those actions around the document types you can identify and the exceptions that need a person. A correctly routed file has not necessarily been validated or approved for accounting.

## Where is sorting configured?

The [document-sort documentation](https://www.odoo.com/documentation/20.0/applications/productivity/ai/document_sort.html) describes **Documents**, the relevant installed business apps and the permissions on folders and files. It says the separate AI app is not required for this automation.

Select the folder, open its actions and choose **AI Auto-sort**. The prompt describes what should happen, while **What actions can the AI take?** limits the available operations. Review that list before writing a long classification prompt.

## Why does the folder boundary matter?

A file can move through several decision points. An inbox may distinguish supplier documents from customer documents; an accounts-payable folder may then support a narrower task. Applying every action to every incoming file makes an ambiguous document more consequential.

I would begin with routing and tagging before exposing record creation. That allows reviewers to compare the proposed classification with the file without first correcting unintended business records.

## How should a bundled attachment be handled?

The official example identifies a file containing several documents and tags it for splitting before continuing other processing. Its action does not split the file.

Consider an illustrative PDF containing an invoice and a separate insurance document. Routing the entire PDF as an invoice may send unrelated information to the wrong audience. The useful result is a review item that preserves the original file and identifies why processing stopped.

## What should the initial routing design specify?

| File condition | Proposed handling |
|---|---|
| One clearly identifiable supplier document | Route to the approved review folder |
| Several documents in one file | Mark for separation before further processing |
| Supplier or document type unclear | Leave in an owned exception queue |
| Sensitive employee or customer information | Use the authorised restricted route |
| Familiar invoice submitted again | Investigate duplication before record creation |

These are process recommendations, not descriptions of automatic controls that appear simply by enabling auto-sort. The configured actions must support the selected outcome.

## How do you validate a prompt without hiding mistakes?

Create a small synthetic document set that includes similar-looking categories, missing identifiers and a bundled file. Record the expected destination before running the sorter. Then inspect the actual folder, tags, access and any business record created.

Use the [acceptance evidence worksheet](/resources/erp-acceptance-evidence/) to link each test file to its result. Count misrouted and unresolved files separately. A folder with no visible exceptions may simply be moving uncertain files onward.

## When should record creation remain disabled?

Keep it disabled when the organisation has not established who reviews uncertain files, how duplicates are found or which data may be shared with the processing service. A document's appearance alone does not prove that a vendor bill should be posted.

The [Documents overview](/blog/2026/09/06/odoo-documents/) covers the broader repository. This guide concerns the narrower decision about automation at a folder boundary.

*Sources reviewed on 27 November 2026. Scenarios are proposed acceptance cases, not reported customer results. Confirm edition, installed modules and provider requirements for your database.*
