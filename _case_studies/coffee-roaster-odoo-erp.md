---
layout: case-study
status: anonymised
order: 5
title: "Odoo for a Specialty Coffee Roaster: Task Ownership and Helpdesk"
description: "A Canadian specialty coffee roaster replaced a 20-year-old system with Odoo so every task and customer query has a named owner."
last_modified_at: 2026-10-05
summary: "A multi-channel specialty coffee business in Canada moved off a 20-year-old system onto Odoo, so every task and customer query now has an owner, a deadline and a history."
industry: "Food and beverage: specialty coffee"
location: "Canada"
platform: "Odoo"
services: ["Odoo implementation", "Helpdesk", "Process design"]
metrics:
  - value: "85%"
    label: "fewer missed or untracked employee tasks"
  - value: "3x"
    label: "faster helpdesk query resolution"
  - value: "60%"
    label: "less time on manual admin and workarounds"
  - value: "70%"
    label: "faster onboarding of new team members"
metrics_note: "Figures published by Master Software Solutions for this project, not my own measurements."
problem: "The business sells through many channels at once: whole bean and single-cup coffee, subscriptions, office coffee programmes, café and restaurant supply, wholesale and private-label blends. Work passed between people all day, but nothing recorded who owned a task, whether it was finished, or what had happened to a customer's question."
existing_process: "The company ran on a platform about 20 years old. It had no task ownership, no audit trail and few modern integrations or reports, so staff had built their own workarounds. Customer queries came in by phone and email and were followed up informally, and each department had its own way of doing things."
requirements:
  - "Every operational task assigned to a named person, with a due date and a record of completion."
  - "One place for customer queries from every channel, with response targets."
  - "Standard, repeatable processes across departments instead of personal workarounds."
  - "Screens simple enough for staff who are not technical."
role: "I worked on this project as part of the Master Software Solutions team, on the business analysis and functional side: understanding how the business ran, turning that into Odoo requirements and design, and working with the client's team through testing and go-live. Custom development was done by MSS developers."
solution: "We replaced the legacy platform with Odoo and organised day-to-day work around two things: activities and tasks for internal work, and the Helpdesk app for customer queries. Recurring work was automated so it lands on the right person's list without anyone having to remember it, and workflows were set up per sales channel so each team sees what it needs and nothing more."
decisions:
  - "Design around ownership first. Work without an owner and a deadline was the real problem, so every workflow ends in an activity assigned to a named person."
  - "Route every customer query into Helpdesk, whatever channel it arrives through, instead of leaving email as the record."
  - "Keep the interface task-driven and simple for non-technical staff, even where Odoo offers more options."
  - "Roll out in phases, so each team was comfortable with the new way of working before the next one moved over."
modules: ["Helpdesk", "Activities and task tracking", "Workflow automation"]
implementation: "A discovery phase mapped how each channel and department worked. The rollout was phased, and training focused on making the system easy to adopt for staff without a technical background."
challenges:
  - "Twenty years of habits and workarounds. People needed to see that the new process was easier than their workaround, not just more controlled."
  - "Many channels with different rhythms, from one-off retail orders to recurring office, café and wholesale accounts."
results:
  - "Every operational activity is now tracked against a named employee."
  - "90% of customer queries are resolved within the agreed response window (published figure)."
  - "Open, overdue and completed work is visible across the business without chasing people."
cta_title: "Running on an old system and workarounds?"
cta_text: "If tasks and customer queries fall through the gaps in your business, tell me how work moves today and I'll suggest where Odoo would help first."
---
## What I'd tell a similar business

- Before choosing apps, ask who owns each piece of work today. If the honest answer is "whoever notices", fix that first.
- Moving customer queries out of personal inboxes is often the quickest visible win for a growing business.
- Replacing an old system is as much about retiring workarounds as moving data. List the workarounds during discovery: each one is a requirement in disguise.

Related guides: [How to set up a helpdesk in Odoo](/blog/2026/09/28/how-to-set-up-helpdesk-odoo/) and
[common mistakes in Odoo Helpdesk](/blog/2026/09/20/odoo-helpdesk-mistakes/).
