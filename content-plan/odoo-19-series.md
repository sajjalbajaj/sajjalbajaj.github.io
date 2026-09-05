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

### Sales  [BATCH 3 - DONE]
- Quotation to sales order [done: 08-18], variants & optional products [done: 08-18],
  pricelists & discounts [done: 08-18], invoicing policies [done: 08-19],
  subscriptions [done: 08-19]
- TODO: rental, amazon/ebay connectors

### CRM  [BATCH 3 - DONE]
- Pipeline management [done: 08-19], lead generation & mining [done: 08-20],
  predictive lead scoring [done: 08-20], activities/forecasting/reporting [done: 08-20]

### Finance / Accounting  [BATCH 4 - DONE]
- Accounting overview [done: 08-21], customer invoicing [done: 08-21], vendor bills & payments [done: 08-21],
  taxes & fiscal positions [done: 08-22], bank reconciliation [done: 08-22], chart of accounts & journals [done: 08-22],
  analytic accounting [done: 08-23], financial reporting [done: 08-23], assets & deferrals [done: 08-23]
- TODO: expenses, spreadsheet/dashboards, sign, documents (finance-adjacent apps)

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
- Batch 3: Sales + CRM, 9 posts, dated 08-18 to 08-20 (3/day).
- Batch 4: Accounting/Finance, 9 posts, dated 08-21 to 08-23 (3/day).
- Batch 5: Website + eCommerce, 9 posts, dated 08-24 to 08-26 (3/day, morning slot).
- Batch 6: HR & People, 9 posts, dated 08-28 to 08-30 (3/day, morning slot).
  Covers Employees, Recruitment, Time Off, Attendances, Appraisals, Payroll, Expenses, Fleet, Referrals.
- Batch 7: Marketing, 9 posts, dated 08-31 to 09-02 (3/day, morning slot).
  Covers Email, SMS, Social, Marketing Automation, Events, Surveys, plus audience/segmentation,
  marketing-to-CRM and measuring marketing.
- Batch 8: Services & Project, 9 posts, dated 09-03 to 09-05 (3/day, morning slot).
  Covers Project, Timesheets, Planning, Helpdesk, Field Service, Appointments, plus billing,
  project profitability and running a services business on Odoo.
- Batch 9: Productivity, 9 posts, dated 09-06 to 09-08 (3/day, morning slot).
  Covers Discuss, Knowledge, Documents, Sign, Spreadsheet, Studio, WhatsApp, Users/Companies/Access,
  plus a series wrap-up post ("One Connected Business").

## SERIES COMPLETE
The Odoo 19 documentation series is finished: 9 batches, 81 posts, dated 08-12 to 09-08.
All original, plain-English guides citing the official Odoo 19 docs. Covered: Inventory,
Manufacturing/Purchase/Quality, Sales/CRM, Accounting, Website/eCommerce, HR, Marketing,
Services/Project, Productivity.
Possible future extensions (not yet written): Lunch, Data Cleaning, VoIP, developer/API topics.

## ROUND 2 - fresh angles / new modules (decided 2026-08-27)
Strategy chosen with the user: NO rewording of existing posts (duplicate-content / cannibalization risk).
Instead, write GENUINELY NEW content: modules not yet covered, new angles (how-to/setup, common mistakes,
tips, advanced), and Odoo 20 feature posts once confirmed (Odoo 20 launches late Sep 2026).
Production: MANUAL batches when the user asks (no automated agent).

- Batch 10: New modules, 9 posts, dated 09-09 to 09-11 (3/day, morning slot).
  Covers Point of Sale, Rental, Maintenance, Repairs, Barcode, PLM, eLearning, IoT, Frontdesk.
- Batch 11: More new modules + essentials, 9 posts, dated 09-12 to 09-14 (3/day, morning slot).
  Covers Lunch, Data Cleaning, VoIP, Calendar, To-do, Contacts, In-App Purchases, Activities,
  and data import/export. All doc URLs verified 200.
- Batch 12: ANGLE SERIES "Common Odoo Mistakes" pt.1, 9 posts, dated 09-15 to 09-17 (3/day, morning).
  Original experience-based posts (not doc-derived): Implementation, Inventory, Accounting,
  Manufacturing, CRM/Sales, Purchase, Data import/migration, Over-customisation, Go-live.
  Each cross-links a relevant official doc + a service page CTA. Fresh angle, strong search intent.
- Batch 13: "Common Odoo Mistakes" pt.2, 9 posts, dated 09-18 to 09-20 (3/day, morning).
  Website/eCommerce, HR, Payroll, Project, Marketing, Point of Sale, Helpdesk, Reporting/Dashboards,
  Multi-company/Access rights. Same format (doc + service CTA). Mistakes angle now covers all major areas.
- Batch 14: "Odoo Setup / How-To" pt.1, 9 posts, dated 09-21 to 09-23 (3/day, morning).
  Company basics, users & access rights, email, chart of accounts, taxes & fiscal positions, products,
  warehouse & locations, reordering rules, sales workflow (quote to invoice). Verified doc + service CTA.
- Batch 15: "Odoo Setup / How-To" pt.2, 9 posts, dated 09-24 to 09-26 (3/day, morning).
  Bill of materials, CRM pipeline, project, online store/eCommerce, point of sale, subscriptions,
  bank reconciliation, expense management, recruitment. Each cross-links a verified doc + service CTA.

Ideas for future Round 2 batches:
- Remaining new modules: Members (no dedicated 19.0 doc), Approvals, Appraisal goals, digest emails,
  reporting/search essentials, WhatsApp deep-dive.
- More how-to guides: work centers/work orders, quality control, timesheets, helpdesk, email marketing,
  events, appointments, time off, fleet, documents/sign, multi-company setup.
- "Odoo tips & tricks" shorter posts.
- Odoo 20 feature deep-dives once confirmed at Odoo Experience (late Sep 2026).
- More industries + case studies.
- Odoo 20: feature deep-dives as they are confirmed at Odoo Experience 2026 (late Sep).
- More industries (retail, hospitality, healthcare, education) and more case studies.
