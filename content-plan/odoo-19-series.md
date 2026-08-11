# Odoo 19 Documentation Series: content plan and queue

Goal: an original, plain-English guide series covering the Odoo 19 documentation
(https://www.odoo.com/documentation/19.0/), publishing 2-5 posts per day.

## Rules (important)
- **Original writing only.** Explain the concept in our own words. Do NOT copy Odoo's docs
  (copyright + Google penalises duplicate content). Cite and link the relevant official doc
  page at the end of every post: this is what gives authority and "valid context".
- Each post: ~450-700 words, practical, business-owner friendly, no em dashes.
- Front matter tag every series post with `Odoo 19` plus the app tag (e.g. `Inventory`).
- End every post with: *Based on the official [Odoo 19 <App> documentation](URL). A plain-English
  guide, not a replacement for the docs.*

## Publishing mechanism
- `future: false` in _config.yml + `.github/workflows/pages.yml` daily cron (04:00 UTC).
- Queue posts with future dates (2-5 per day). Each day's build publishes that day's posts.
- Keep the queue filled AHEAD of the calendar. If it empties, publishing pauses until refilled.

## Pillars and sub-topics (each pillar = 1 overview post + sub-posts)

### Inventory & MRP  [BATCH 1 - IN PROGRESS]
- Inventory (overview) [done: 08-12]
- Product types, units of measure, packaging [done: 08-12]
- Lot & serial number tracking [done: 08-12]
- Warehouses, locations, operation types [done: 08-13]
- Reordering rules & replenishment [done: 08-13]
- Inventory adjustments & cycle counts [done: 08-13]
- Shipping & receiving (inbound/outbound flows) [done: 08-14]
- Removal strategies: FIFO, LIFO, FEFO [done: 08-14]
- Inventory valuation & landed costs [done: 08-14]
- TODO: Manufacturing (BoM, work orders, routings), Purchase (RFQ, vendor bills, agreements),
  Quality, Maintenance, Barcode, PLM

### Sales
- Sales (overview), quotations to orders, pricelists & discounts, products & variants,
  invoicing policies, subscriptions, rental, amazon/ebay connectors

### CRM
- CRM (overview), pipeline & stages, lead mining & scoring, activities & follow-ups,
  reporting & forecasting

### Finance / Accounting
- Accounting (overview), customer invoicing, vendor bills, taxes & fiscal positions,
  bank reconciliation, payments, analytic accounting, reporting, assets & deferred

### Website / eCommerce
- Website builder, eCommerce (products, checkout, payments, delivery), blog, forum,
  eLearning, live chat, SEO in Odoo

### Human Resources
- Employees, Recruitment, Time Off, Appraisals, Payroll, Attendances, Fleet, Referrals

### Marketing
- Email Marketing, Marketing Automation, SMS, Events, Social Marketing, Surveys

### Services / Project
- Project, Timesheets, Field Service, Helpdesk, Planning, Appointments

### Productivity & General
- Discuss, Knowledge, Sign, Documents, Approvals, To-do, WhatsApp, Studio,
  general settings, users & companies, multi-company

## Batch log
- Batch 1 (this session): Inventory pillar, 9 posts, dated 08-12 to 08-14 (3/day). Cron publishes them.
- Next batches: continue with Manufacturing + Purchase, then Sales/CRM, then Accounting, etc.
