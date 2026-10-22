# Odoo 19 Documentation Series: content plan and queue

Goal: an original, plain-English guide series covering the Odoo 19 documentation
(https://www.odoo.com/documentation/19.0/), publishing 2-5 posts per day.

## Rules (important)
- **Original writing only.** Explain the concept in our own words. Do NOT copy Odoo's docs
  (copyright + Google penalises duplicate content). Cite and link the relevant official doc
  page at the end of every post: this is what gives authority and "valid context".
- Earlier overview posts used 450 to 700 words. New decision and workflow explainers use 900 to 1400 words,
  with practical examples, version boundaries, FAQs and official references. No em or en dashes.
- Front matter tag every series post with `Odoo 19` plus the app tag (e.g. `Inventory`).
- End every post with: *Based on the official [Odoo 19 <App> documentation](URL). A plain-English
  guide, not a replacement for the docs.*

## Publishing mechanism
- `future: false` in _config.yml + `.github/workflows/pages.yml` daily cron (05:00 UTC / 10:30 IST).
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
- Batch 16: "Odoo Setup / How-To" pt.3, 9 posts, dated 09-27 to 09-29 (3/day, morning).
  Work orders/shop floor, quality control, timesheets, helpdesk, time off, appointments, events,
  marketing automation, multi-company. Each cross-links a verified doc + service CTA.
- Batch 17: "Odoo Setup / How-To" pt.4, 9 posts, dated 09-30 to 10-02 (3/day, morning).
  Website builder, documents, sign, field service, planning, attendances, surveys, knowledge, fleet.
  Each cross-links a verified doc + service CTA.
- Batch 18: "Odoo Setup / How-To" pt.5, 9 posts, dated 10-03 to 10-05 (3/day, morning).
  Email marketing, SMS marketing, social marketing, live chat, discuss, appraisals, referrals,
  maintenance, studio. Each cross-links a verified doc + service CTA.
  How-To angle now = 45 posts (batches 14-18). NOTE: how-to well is now largely exhausted; nearly
  every major app is covered. Strongly consider off-site (LinkedIn/backlinks), real case studies,
  or Odoo 20 posts over yet more how-to batches.

Ideas for future Round 2 batches:
- Remaining new modules: Members (no dedicated 19.0 doc), Approvals, Appraisal goals, digest emails.
- Remaining how-to guides (thin pickings): spreadsheet/dashboards, IoT setup, barcode setup,
  repairs, rental, PLM, POS restaurant, elearning, frontdesk, lunch, data cleaning, VoIP, calendar.
- "Odoo tips & tricks" shorter posts (fresh angle if continuing on-site).
- PRIORITY: off-site distribution (LinkedIn drafts), real case studies, Odoo 20 features (late Sep launch).
- Odoo 20 feature deep-dives once confirmed at Odoo Experience (late Sep 2026).
- More industries + case studies.
- Odoo 20: feature deep-dives as they are confirmed at Odoo Experience 2026 (late Sep).
- More industries (retail, hospitality, healthcare, education) and more case studies.

## ROUND 3 - topic-gap batches (decided 2026-10-05)
Topic research across established Odoo blogs found 60 subjects this blog doesn't cover yet (topics only:
every post is original writing from the official Odoo documentation, never a rewrite of another article).
Same production rules: 9 posts per batch, 3/day at 08:00/09:00/10:00 +0530, one `hub:` each, 8 tags,
verified 19.0 doc URLs (and the 20.0 page checked), service CTA, no em dashes.

- Batch 19: India and finance essentials, dated 10-10 to 10-12 (re-dated from 10-06 to 10-08 before first push).
  GST setup (HSN, CGST/SGST/IGST, returns); GST e-invoicing and e-way bills; Odoo vs Tally; TDS and TCS;
  migrating from Tally to Odoo; online payments in India (Razorpay, UPI); multi-currency for importers and
  exporters; customer credit limits; Odoo implementation cost in India.
- Batch 20: inventory and sales operations, dated 10-13 to 10-15.
  Backorders; sales returns and RMAs; returnable crates, bottles and deposits; B2B dealer ordering portal;
  van sales and route sales; scrap and wastage; inter-warehouse resupply; batch, wave and cluster picking;
  quotation templates.
- Batch 21: manufacturing, costing and stock models, dated 10-16 to 10-18.
  Master production schedule; how Odoo costs a manufactured product; batch and process manufacturing
  (recipes, yields); catch weight; demand forecasting; consignment stock; cross-docking; customs duty and
  import costs; sales commissions.
- Batch 22 (complete): integrations and comparisons, 10-19 to 10-21. Expanded into detailed, practical guides
  with version/hosting limits, data ownership, rollout or evaluation steps, FAQs and official references.
  Shopify; WooCommerce; Amazon and marketplaces; courier integrations; Odoo and Power BI; connecting Odoo to
  AI assistants through MCP; Community vs Enterprise; Odoo vs Zoho; Odoo vs ERPNext.
- Batch 23 (complete): requested vertical and workflow guides, 10-22 to 10-25.
  WhatsApp Business workflows; healthcare clinic operations; dental practice administration; car rentals;
  delivery dispatch and route planning; vertical Helpdesk workflows; skincare and cosmetics manufacturing;
  veterinary clinic operations; pet supplies retail and wholesale; food supply distribution; food retail POS.
  These guides distinguish standard Odoo business workflows from clinical systems, sector compliance and
  specialist route optimization. Existing generic WhatsApp, Rental, Helpdesk and POS posts remain the overviews;
  these are deeper use cases for specific operating models.
- Batch 24 (queued): finance and implementation planning, 2026-10-26 to 2026-10-28.
  Down payments; payment follow-ups and aged receivables; month-end and year-end closing; budgets; opening
  balances at go-live; which Odoo versions are supported; what an upgrade costs; the discovery phase;
  rescuing a stalled implementation.
- Batch 25 (queued): support, ownership and implementation decisions, 2026-10-29 to 2026-10-31.
  Support contracts and SLA definitions; data ownership and exit planning; total cost of ownership;
  hosting responsibilities; user acceptance scenarios; change requests; backup and recovery readiness;
  implementation handover; rollout across branches.
- Batch 26 (queued): operational exceptions and controls, 2026-11-01 to 2026-11-03.
  Food traceability and recall drills; skincare formula and label revisions; car rental return inspections;
  Helpdesk warranty claims and repairs; POS refunds and settlement; clinic reception access;
  pet supply cases and units; WhatsApp failures and handoffs; cold chain receiving exceptions.
- Batch 27 (written locally): purchasing exceptions and supplier decisions, 2026-11-04 to 2026-11-06.
  Blanket order call offs; alternative RFQ comparisons; supplier lead times and promises; vendor bill
  matching exceptions; supplier returns and credits; purchase approval boundaries; vendor price updates;
  dropship delivery exceptions; subcontractor component shortages.
- Batch 28 (written locally): warehouse and manufacturing decisions, 2026-11-07 to 2026-11-09.
  Expiry dates and customer shelf life; barcode receipt discrepancies; inventory count variance review;
  putaway capacity and overflow; packages versus product packaging; recovered components from unbuilds;
  usable byproducts versus waste; alternative work centre readiness; partial manufacturing completion.
- Batch 29 (written locally): revenue and integration workflows, 2026-11-10 to 2026-11-12.
  Milestone acceptance and billing; timesheet billing caps; subscription payment failure recovery;
  abandoned carts versus unpaid orders; pricelist validity and open quotations; provider settlement
  reconciliation; integration retries and duplicate actions; API key rotation; scheduled job monitoring.
- Reserve: Odoo vs SAP Business One; Odoo vs NetSuite; post-dated cheques.

### Batches 24 to 26 publication status

Requested as three batches of nine detailed posts. All 27 posts are queued for publication, with three posts per
calendar day at 08:00, 09:00 and 10:00 +0530 from October 26 through November 3, 2026. The existing daily
Pages workflow and future-date filtering determine when each day's articles appear.

Each post has one guide hub, eight existing tags, two FAQs, an original worked example and official
Odoo 19 references. Corresponding Odoo 20 documentation was reviewed, with relevant differences called
out for permissions, POS, PLM, Quality and multi company workflows. Examples are illustrative and make
no claims of client results or live database testing. The website layout and styling are unchanged.


### Batches 27 to 29 publication schedule

The user requested another three batches of nine detailed posts. All 27 are queued for publication, dated
November 4 through November 12, 2026, with three posts per day at 08:00, 09:00 and 10:00 +0530.
The daily Pages workflow and future date filtering control when they appear. They extend the existing topic coverage with
specific operational decisions rather than repeating the application overviews.

Each article contains an illustrative worked example, fit considerations, common mistakes, two FAQs,
one guide hub, eight existing tags and official Odoo references. Body lengths range from 923 to 1057
words, excluding front matter and link destinations. Odoo 19 and corresponding Odoo 20 documentation
were reviewed, with relevant version boundaries identified. The current website design is unchanged.
