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
- Manufacturing: BoM/kits/variants [done: 08-15], work centers & work orders [done: 08-15],
  manufacturing orders workflow [done: 08-15], subcontracting [done: 08-16]
- Quality control: control points & alerts [done: 08-16]
- Purchase: RFQ to PO [done: 08-16], vendor bills & 3-way match [done: 08-17],
  pricelists & agreements [done: 08-17], automated purchasing [done: 08-17]
- TODO: Maintenance, Barcode, PLM (smaller MRP apps)

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
- Batch 1: Inventory pillar, 9 posts, dated 08-12 to 08-14 (3/day). Cron publishes them.
- Batch 2: Manufacturing + Quality + Purchase, 9 posts, dated 08-15 to 08-17 (3/day).
- Next batches: Sales + CRM, then Accounting/Finance, then Website/eCommerce, HR, Marketing, Services, etc.
  Queue is filled through 08-17. Add the next batch before then to avoid a gap.
