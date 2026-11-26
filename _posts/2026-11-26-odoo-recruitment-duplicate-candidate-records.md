---
layout: post
title: "Odoo Recruitment: Review Duplicate Candidate Records"
date: 2026-11-26 09:00:00 +0530
last_modified_at: 2026-11-27
tags: [Odoo, Odoo 19, ERP, Best Practices, Customer Management, Business Automation, Setup, Data Import]
hub: services
description: "Distinguish duplicate Odoo 19 applications from a candidate applying to different jobs, and review refusal messages before closing records."
faqs:
  - q: "Should applications with the same email always be merged?"
    a: "No. The same person may apply for different vacancies. Establish the person, job and application journey before combining, refusing or deleting records."
  - q: "What does Odoo document for duplicate applications to one job?"
    a: "Odoo 19 describes a Refuse Duplicate Applications option in the refusal flow when applicable. It can refuse the listed duplicates for the job and send one email; inspect the affected applications before confirming."
  - q: "Does refusing an application delete it?"
    a: "No. The refusal documentation says refused application cards are hidden by default and can be viewed again. Refusal is different from deleting the record or satisfying a personal-data deletion request."
---

**Short answer:** In Odoo Recruitment, the same contact details do not prove two applications are duplicates. First establish the candidate, vacancy and application history. Handle repeated applications to one job separately from a person's legitimate applications to different jobs, and review outgoing messages before taking a bulk action.

## Which records need to be distinguished?

A candidate represents a person. An application represents their interest in a particular role and its hiring journey. A data cleanup that preserves the person but loses the vacancy history can create a misleading recruitment record.

| Situation | Proposed decision |
|---|---|
| Same person, same job, repeated submission | Investigate whether one application is redundant |
| Same person, different jobs | Preserve each relevant application journey |
| Similar names, different contact evidence | Do not assume they are the same person |
| Import creates an extra copy | Compare source identifiers and history before cleanup |

These are review principles. They do not establish that a particular merge operation is available or appropriate in every installation.

## What does Odoo 19 document for duplicate refusal?

The official [refusal guide](https://www.odoo.com/documentation/19.0/applications/hr/recruitment/refuse_applicant.html) describes **Refuse Duplicate Applications** for candidates applying repeatedly to the same job. When the option appears, the dialog lists the duplicate applications affected. The documented flow sends one email and marks the relevant applications for that job as refused.

Read that list before confirming. The business decision to stop processing a redundant submission must be distinguished from rejecting the person for every vacancy.

## How should a recruiter review a possible duplicate?

I would begin with the application that needs a decision, then compare:

1. The job position and date of submission.
2. Contact information and any identifiers from the import or recruitment channel.
3. Interview stages, activities and correspondence.
4. Attached documents and whether they are new versions.
5. Messages or actions that would be triggered by refusal or another change.

Do not copy sensitive candidate information into a general spreadsheet just to compare it. Use references to the authorised recruitment records and apply the organisation's retention arrangements.

## What should happen to candidate communication?

Odoo's refusal flow includes a **Send Email** choice. Review the refusal reason, message and recipients before confirming an action. The documentation says email can be disabled for cases where no message should be sent, such as spam.

For an import duplicate that does not represent a real new application, another rejection email may confuse the candidate. For a legitimate application, suppressing an expected update may also be wrong. Decide the communication outcome along with the record outcome.

## What does a worked example show?

A person applies for a finance vacancy and an operations vacancy with the same email. Each has its own interview history. A later import creates another copy of the finance application.

In this illustrative scenario, the recruiter preserves the two genuine journeys, identifies the extra finance record from its import reference and reviews what will happen to its activities and notifications. A shared email address alone would not justify closing all three records.

## Is refusal the same as deletion?

No. Odoo documents that refused cards are hidden by default and can be viewed again. That matters when a team thinks a record has disappeared: it may be excluded by the current view rather than removed.

A request to delete personal information is a separate privacy process. The authorised owner must assess what must be removed, retained or restricted under applicable requirements. Do not use the refusal status as evidence that data has been erased.

## What should the acceptance test establish?

Test a repeat submission to one job, two legitimate vacancies for one candidate, and an import duplicate with existing correspondence. Observe both the affected records and the actual communication outcome. Use synthetic candidate data for the test.

Record the result using the [ERP acceptance evidence worksheet](/resources/erp-acceptance-evidence/). For initial setup, see [recruitment configuration](/blog/2026/09/26/how-to-set-up-recruitment-odoo/).

## Source and review

Official reference: [Odoo 19 refusal and duplicate application handling](https://www.odoo.com/documentation/19.0/applications/hr/recruitment/refuse_applicant.html), checked on 27 November 2026. The examples and comparison process are recommendations, not live tests or hiring decisions.

For help defining the application workflow and its acceptance tests, see my [Odoo consulting services](/services/odoo-consulting/).
