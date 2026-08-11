---
layout: post
title: "Quality Control in Odoo: Checks and Control Points"
date: 2026-08-16 09:00:00 +0530
tags: [Odoo, Odoo 19, Manufacturing, Quality, ERP]
description: "How Odoo builds quality control into your operations with quality control points, check types and alerts, so quality is a step, not an afterthought."
---

Quality problems are expensive: rejected goods, unhappy customers, wasted materials. The best way to
avoid them is to build quality checks into your everyday operations rather than hoping people remember.
That is exactly what the Quality app in Odoo does. Here is how it works.

## The core idea: control points

The heart of Odoo Quality is the quality control point. A control point tells Odoo to trigger a quality
check at a specific moment in your process, for a specific product or operation.

For example, you might check goods when they are received from a supplier, inspect a product during
manufacturing, or verify an item before it is delivered to a customer. The control point makes the
check appear automatically at that step, so it is never skipped or forgotten.

## Types of checks

Not every quality check is the same, and Odoo supports different types:

- **Pass or fail:** a simple yes/no, does it meet the standard.
- **Measure:** record a value, like a length or weight, and check it falls within an allowed range.
- **Instructions:** show the operator a set of steps to follow or things to verify.
- **Take a picture:** capture a photo as evidence or record.

Matching the check type to what you actually need to verify keeps quality control practical rather than
bureaucratic.

## Quality alerts

When something does go wrong, Odoo lets you raise a quality alert: a record of the issue that can be
assigned, tracked and resolved. Instead of a problem living in someone's head or an email, it becomes a
visible item your team can act on and learn from.

Over time, these alerts become useful data: recurring issues, problem suppliers, weak points in a
process. That is how quality control turns into genuine quality improvement.

## Where it fits

Because control points attach to real operations, quality lives inside your existing flows, receiving,
manufacturing, delivery, rather than as a separate silo. The check is just part of doing the work,
which is exactly why it actually gets done.

## Practical tips

- Start with the few checks that matter most, at the points where problems actually occur.
- Use the simplest check type that does the job; do not over-engineer.
- Encourage your team to raise quality alerts, and actually review them.
- Watch for patterns in alerts and fix root causes, not just symptoms.

## My take

Quality control works best when it is built in, not bolted on. Odoo's control points put the right
check at the right moment, its check types keep it practical, and its alerts turn problems into
trackable, improvable data. Start small, focus on where quality really matters, and let the system make
good quality the default.

Next in the series: sourcing what you need, starting with the purchasing workflow.

*Based on the official [Odoo 19 Quality documentation](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/quality.html). A plain-English guide, not a replacement for the docs.*
