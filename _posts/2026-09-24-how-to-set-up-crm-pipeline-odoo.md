---
layout: post
title: "Odoo CRM Pipeline: Stages, Activities and Follow Ups"
date: 2026-09-24 09:00:00 +0530
last_modified_at: 2026-11-17
tags: [Odoo, Odoo 20, Odoo 19, Setup, CRM, Sales, Sales Management, Lead Management]
hub: sales
description: "Set up an Odoo 20 CRM pipeline with clear stages, opportunity owners, next activities, activity plans, lost reasons and useful sales reviews."
faqs:
  - q: "What stages should an Odoo CRM pipeline have?"
    a: "Use a small number of stages that represent real sales decisions, such as New, Qualified, Proposal and Negotiation. Won and Lost should record the final outcome."
  - q: "How do I stop opportunities from going cold in Odoo CRM?"
    a: "Give every active opportunity an owner and a dated next activity. Mark completed activities done and schedule the next meaningful action."
  - q: "Should leads and opportunities use the same process?"
    a: "Leads can be enabled as a qualification step before an opportunity. Use them only when the business needs that additional review rather than adding an unnecessary stage."
---

**Short answer:** an effective Odoo CRM pipeline uses a few decision based stages, assigns every opportunity to a
responsible salesperson and gives each active deal a dated next activity. In Odoo 20, activities can be calls, emails,
meetings, tasks or document requests, while activity plans can schedule a repeatable sequence for a particular sales
process. The pipeline becomes useful when it shows what must happen next, not just where a card was last moved.

This article focuses on pipeline design and operating discipline. For the wider CRM structure, start with
[Odoo CRM: managing your sales pipeline](/blog/2026/08/19/odoo-crm-managing-your-pipeline/).

## Applies to

This guide follows Odoo 20 CRM stages, activities and activity plans. The main principles also apply to Odoo 19.
Confirm the screens in the installed edition before training users or documenting acceptance criteria.

## Define your stages

The heart of the pipeline is its stages, the steps a deal passes through from first contact to won. Set these to reflect
your real sales process: something like new, qualified, proposal, negotiation, won. Keep them few and meaningful. A
pipeline with a dozen fuzzy stages nobody keeps updated is worse than a simple one that stays current.

Each stage should have an entry condition that salespeople can explain. For example, an opportunity should enter
**Qualified** only after the business has confirmed the need, contact and realistic next step. Avoid stages that only
describe internal effort, such as *Working on it*, because they do not show what has been established about the deal.

Fold only true closing stages. Odoo treats cards in a permanently folded stage as closed, which affects reporting.

## Capture leads and opportunities

Decide how deals enter your pipeline. They might come from a website form, be entered by your team, or be imported.
However they arrive, the goal is that every real opportunity lands in the pipeline so nothing is worked in someone's
head or lost in an inbox. A pipeline only helps if everything is actually in it.

## Assign owners

Every opportunity should have an owner, the person responsible for moving it forward. Without clear ownership, deals
drift and everyone assumes someone else is handling it. Assigning an owner is what turns a list of opportunities into
accountable, worked deals. It is a small habit with a big effect on close rates.

## Schedule the next activity

The single most valuable habit in any CRM is scheduling the next step. For every open opportunity, set the next
activity, a call, an email, a meeting, with a date. This is what stops deals going cold, and Odoo makes it easy. A
pipeline where every deal has a next action is a pipeline that keeps moving.

Mark an activity done when the interaction is complete, then schedule the next meaningful action. Leaving old calls
or meetings overdue makes the activity colours unreliable. For repeated motions, such as qualifying a high value
lead or preparing a proposal, create an activity plan that schedules the required sequence and assigns ownership.

## Record why opportunities are won or lost

Do not use a vague closing stage as the only outcome. Mark successful opportunities won and record a consistent lost
reason for unsuccessful ones. A short controlled list such as price, timing, product fit or no decision creates more
useful analysis than free text alone. Keep the note for context, but use the reason for reporting.

## Use the pipeline to manage, not just record

Once set up, actually use the pipeline: review it regularly, watch where deals stall, see your pipeline value and
forecast. A pipeline is a management tool, not just a place deals sit. Looking at it and acting on what it shows is what
turns the CRM from a contact list into something that helps you sell more.

Review opportunities with no next activity, overdue activities, expected closing dates in the past and deals that
have remained in one stage too long. Use **CRM ‣ Reporting ‣ Pipeline** to compare volume and expected revenue, but
do not mistake an entered probability or expected value for a committed result.

## Practical tips

- Set few, meaningful stages that match how you really sell.
- Make sure every real opportunity enters the pipeline.
- Give each opportunity a clear owner.
- Schedule the next activity on every open deal.
- Review the pipeline regularly and act on what it shows.

## My take

A well-set-up pipeline is the difference between a CRM that helps you sell and an expensive contact list. Meaningful
stages, clear ownership and a scheduled next step on every deal are what keep opportunities moving. The setup is quick;
the payoff comes from the habits it supports. Build those in from the start and the pipeline earns its place fast.

## Related guides

Read [getting your team to use the CRM](/blog/2026/08/09/getting-your-team-to-use-the-crm/) for adoption controls and
[activities, forecasting and reporting in Odoo CRM](/blog/2026/08/20/activities-forecasting-and-reporting-in-odoo-crm/)
for the reporting layer. For implementation support, see [Odoo consulting](/services/odoo-consulting/).

## Official references

1. [Odoo 20 stages](https://www.odoo.com/documentation/20.0/applications/essentials/stages.html)
2. [Odoo 20 CRM activities and activity plans](https://www.odoo.com/documentation/20.0/applications/sales/crm/optimize/utilize_activities.html)
3. [Odoo 20 convert leads into opportunities](https://www.odoo.com/documentation/20.0/applications/sales/crm/acquire_leads/convert.html)
4. [Odoo 20 expected revenue report](https://www.odoo.com/documentation/20.0/applications/sales/crm/performance/expected_revenue_report.html)

*Updated on 17 November 2026 using the official Odoo 20 CRM documentation. The stage examples are illustrative and
should be adapted to the sales decisions the business actually makes.*
