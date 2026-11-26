---
layout: post
title: "Odoo 20: What's Getting Upgraded From Odoo 19"
date: 2026-09-05 11:00:00 +0530
last_modified_at: 2026-11-27
tags: [Odoo, Odoo 20, Upgrade, ERP, Migration, ERP Migration, Accounting, Finance]
hub: planning
description: "Review Odoo 19 to Odoo 20 workflow changes through payment statuses, stock reporting, planning and AI controls, with focused regression checks."
faqs:
  - q: "Should old operating instructions simply be relabelled Odoo 20?"
    a: "No. Compare labels, permissions, inputs and downstream outputs against the target version and update instructions only after validation."
  - q: "Which payment labels changed in Odoo 20?"
    a: "The release notes rename In Process to Paid and the former Paid label to Reconciled. Review how staff and integrations interpret those states."
  - q: "Do performance improvements remove the need for workload testing?"
    a: "No. Test representative data, custom modules and integrations. A general product improvement is not a benchmark for your environment."
---

**Short answer:** Moving from Odoo 19 to Odoo 20 can change how an existing workflow is interpreted, even when the business process remains familiar. Compare the actual states, permissions and outputs. Start regression testing with consequential differences such as payment meanings, stock availability and field service billing.

## How should a version comparison be built?

Use the [official release notes](https://www.odoo.com/odoo-20-release-notes) to identify candidate changes, then inspect the detailed reference and your configured workflow. Record the old behaviour, intended target behaviour and proposed test.

Avoid claims that an entire application is now simpler, smarter or compliant without specifying the change. Those descriptions cannot tell an operator what to do differently.

## Which accounting change can affect ordinary decisions?

The payment status renaming changes the meaning a reviewer may attach to a familiar label. In the release notes, In Process becomes Paid and the former Paid becomes Reconciled.

Review operating procedures, report filters and integrations that use these states. Check both the visible label and any underlying technical value used by custom code. They are not necessarily the same thing.

The [bank consistency guide](/blog/2026/11/10/odoo-20-bank-consistency-payment-status/) explains why a label should be supported by the relevant payment and bank matching evidence.

## What should warehouse and manufacturing teams compare?

Test quantity interpretation across operations. A report can show a reservation, an incoming allocation or partially completed work, but those are different stages.

| Area | Regression question |
| --- | --- |
| Detailed stock | Do locations and reservations explain the same physical position? |
| Allocation | Does incoming supply remain distinct from validated stock? |
| Continuous production | Can a partial quantity advance without overstating finished output? |
| Supplier quality rate | Is the metric interpreted as passed receipt checks? |

Use the [detailed stock guide](/blog/2026/11/15/odoo-20-detailed-stock-report/) and [continuous production guide](/blog/2026/11/12/odoo-20-continuous-production/) for proposed cases.

## Why does field service need commercial testing?

The [Odoo 20 field service documentation](https://www.odoo.com/documentation/20.0/applications/services/planning/field_service.html) describes interventions through Planning, including published shifts and warranty behaviour.

A useful comparison checks where products are added. Under Warranty affects products added from the shift differently from items entered directly on the sales order. Test the intended route with the service and finance owners instead of assuming the old training material still describes the price outcome.

## What should change in an AI workflow review?

Revisit the distinction between information and actions. An automatically invoked agent or tool needs explicit execution safeguards where business rules require them. Do not carry forward a generic instruction to keep a human involved without identifying the actual review point.

See [AI server actions](/blog/2026/11/06/odoo-20-ai-server-actions/) for that assessment.

## What makes the comparison complete?

Include a normal transaction, a refused operation and a correction for each critical changed workflow. Reconcile relevant reports and inspect downstream records. For performance concerns, use a representative workload; do not promise a speed increase solely from a major version number.

Keep the expected result, observed result and release decision together in the [ERP acceptance evidence worksheet](/resources/erp-acceptance-evidence/). The [migration execution guide](/blog/2026/08/10/upgrading-to-odoo-20-migration-guide/) covers the broader cutover project.

*Official references reviewed on 27 November 2026. Examples and test cases are illustrative proposals, not completed customer tests. Check the installed version, edition, hosting and provider requirements.*
