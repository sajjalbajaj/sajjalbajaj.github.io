---
layout: post
title: "Odoo 20 Subscription Loyalty: Define Rewards and Boundaries"
date: 2026-11-22 07:00:00 +0530
tags: [Odoo, Odoo 20, ERP, Best Practices, Subscriptions, Sales, Customer Management, Pricing]
hub: sales
description: "Separate recurring subscription loyalty earning rules from recurring rewards in Odoo 20, and test renewals, failed payments and cancellations."
last_modified_at: 2026-11-27
faqs:
  - q: "Are recurring loyalty rules and recurring rewards the same setting?"
    a: "No. Odoo documents separate Recurring choices for earning rules and rewards. Decide whether eligibility, redemption or both should repeat."
  - q: "Do all programme types support both recurring choices?"
    a: "No. The guide distinguishes loyalty cards and next order coupons from programmes where recurring behaviour is available only for rewards."
  - q: "Does a recurring invoice prove a qualifying payment was collected?"
    a: "No. Define the commercial eligibility rule and test failed payments, drafts and cancellations before promising a paid renewal reward."
---

**Short answer:** Odoo 20 subscription loyalty separates recurring earning rules from recurring rewards. Decide what qualifies a subscriber, when a benefit is granted and whether it repeats. Test the supported programme type and the renewal payment outcome before describing a reward as earned through payment.

## Which configuration is documented?

The [subscription loyalty guide](https://www.odoo.com/documentation/20.0/applications/sales/subscriptions/subscriptions_loyalty.html) requires Subscriptions and the relevant discounts and loyalty functionality. It describes a Recurring choice on rules and a separate choice on rewards.

Those controls answer different questions. A recurring rule concerns earning eligibility across subscription periods. A recurring reward concerns applying the benefit across periods. Enabling one does not communicate the whole commercial promise.

## Why does the programme type matter?

The guide distinguishes loyalty cards and next order coupons, which support recurring rules and rewards, from programme types where recurring behaviour is available for rewards only.

Review the choices shown for the actual programme before designing an offer around them. The guide's wording is not a substitute for demonstrating the configured combination in the database.

| Commercial intention | Configuration question |
| --- | --- |
| Earn something each qualifying period | Does this programme support a recurring rule? |
| Reuse a benefit on later invoices | Is the reward recurring? |
| Give one introductory benefit | How is recurrence prevented? |
| Reward a collected renewal | What evidence establishes successful payment? |

## How could a renewal benefit go wrong?

Consider an illustrative subscription offer that promises a benefit after a paid renewal. A generated renewal invoice alone does not prove money was collected. The customer might have a failed payment, a credit note or a cancelled draft.

Define the eligibility event in ordinary business language before configuring the programme. Then demonstrate whether the standard rules implement that event. If additional controls are needed, identify them as implementation work rather than claiming the Recurring checkbox solves payment eligibility.

## Which cases should be tested with finance?

Run a normal renewal, a failed payment, a cancelled draft and a subscription that changes its product or price. Include an existing customer who already holds a benefit.

For each case, inspect the invoice lines, reward usage and remaining entitlement. Check what happens when a transaction is reversed. Do not assume cancellation automatically restores or removes a benefit in precisely the way the business intends.

Agree the accounting and tax treatment with the finance owner. The loyalty setting does not decide those policies.

## What should the customer wording explain?

State the qualifying event, value, expiry and any cancellation effect clearly. The support team should be able to explain why a particular subscriber did or did not receive the reward using the system records.

The [subscription payment failure guide](/blog/2026/11/10/odoo-subscription-payment-failure-review/) covers the collection exception. Record the proposed loyalty cases and any gap between the offer and configured behaviour in the [ERP acceptance evidence worksheet](/resources/erp-acceptance-evidence/).

*Sources reviewed on 27 November 2026. Scenarios are proposed acceptance cases, not reported customer results. Confirm edition, installed modules and provider requirements for your database.*
