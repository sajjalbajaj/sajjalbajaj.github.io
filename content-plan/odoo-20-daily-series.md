# Odoo 20 daily blog series

Planned and drafted 1 November 2026 from the official Odoo 20 documentation and the confirmed September
2026 release notes. All 30 articles are prepared for scheduled publication.

## Publishing model

* Pilot period: 30 days, from 2 November through 1 December 2026.
* Frequency: one Odoo 20 article every day.
* Front matter time: 07:00:00 +0530, before the existing daily GitHub Pages rebuild.
* Target length: 1,100 to 1,500 body words.
* Evidence: official Odoo 20 documentation plus the official Odoo 20 release notes.
* Positioning: confirmed Odoo 20 workflows, changes and implementation decisions.
* Exclusions: no speculative roadmap claims, invented customer results, copied release note text or
  unsupported performance claims.

The website already has nine broad Odoo 20 preview, release and migration articles. This series should
not create another general article about release dates, new features, availability, India availability,
agentic AI or whether to upgrade. Those existing pages should be refreshed separately so that prelaunch
language is clearly distinguished from confirmed Odoo 20 behaviour.

## Daily schedule

| Date | Planned article | Primary official source |
| --- | --- | --- |
| 2 Nov | Odoo 20 Offline Mode: What Works and What to Test | `applications/general/offline_mode.html` |
| 3 Nov | Odoo 20 Access Rights: Review the Simplified Security Model | `applications/general/users/access_rights.html` |
| 4 Nov | Odoo 20 AI Agents: Define Scope, Tools and Human Review | `applications/productivity/ai/agents.html` |
| 5 Nov | Odoo 20 MCP Server: Connect External AI Tools Safely | `applications/productivity/ai/mcp_server.html` |
| 6 Nov | Odoo 20 AI Server Actions: Control Automated Record Changes | `applications/productivity/ai/server-actions.html` |
| 7 Nov | Odoo 20 AI Document Sorting: Route Business Files for Review | `applications/productivity/ai/document_sort.html` |
| 8 Nov | Odoo 20 Accounting AI: Ask Better Questions About Finance Data | Odoo 20 release notes, Accounting |
| 9 Nov | Odoo 20 Bill Line Prediction: Review Suggestions Before Posting | Odoo 20 release notes, Accounting |
| 10 Nov | Odoo 20 Bank Consistency and the New Payment Statuses | `applications/finance/accounting/bank/reconciliation.html` |
| 11 Nov | Odoo 20 Currency Translation Adjustments: What Finance Must Review | `applications/finance/accounting/get_started/multi_currency.html` |
| 12 Nov | Odoo 20 Continuous Production: Keep Manufacturing Flow Visible | `applications/inventory_and_mrp/manufacturing/workflows/continuous_production.html` |
| 13 Nov | Odoo 20 Production Overview: Review Orders, Components and Delays | `applications/inventory_and_mrp/manufacturing/reporting/production_overview.html` |
| 14 Nov | Odoo 20 Quality Rate: Measure Checks Without Hiding Exceptions | `applications/inventory_and_mrp/quality/quality_management/quality_rate.html` |
| 15 Nov | Odoo 20 Detailed Stock Report: Explain Quantity by Location | `applications/inventory_and_mrp/inventory/warehouses_storage/reporting/detailed_stock.html` |
| 16 Nov | Odoo 20 Allocation Report: Review Reserved and Expected Stock | `applications/inventory_and_mrp/inventory/warehouses_storage/reporting/allocation_report.html` |
| 17 Nov | Odoo 20 ShipStation Integration: Orders, Labels and Ownership | `applications/inventory_and_mrp/inventory/shipping_receiving/setup_configuration/shipstation.html` |
| 18 Nov | Odoo 20 Field Service Planning: Match Visits with Capacity | `applications/services/planning/field_service.html` |
| 19 Nov | Odoo 20 Timesheet Assistant: ActivityWatch, Privacy and Review | `applications/services/timesheets/timesheet_assistant.html` |
| 20 Nov | Odoo 20 Appointment Types: Control Availability and Resources | `applications/productivity/appointments/appointment_types.html` |
| 21 Nov | Odoo 20 Phone Call Flows: Route Business Calls Deliberately | `applications/productivity/phone/configuration/call_flows.html` |
| 22 Nov | Odoo 20 Subscription Loyalty: Define Rewards and Boundaries | `applications/sales/subscriptions/subscriptions_loyalty.html` |
| 23 Nov | Odoo 20 Social Marketing: Personal LinkedIn and Platform Scheduling | `applications/marketing/social_marketing/social_posts.html` |
| 24 Nov | Odoo 20 Website llms.txt: What It Does and What It Does Not Do | Odoo 20 release notes, Website |
| 25 Nov | Odoo 20 AI Website Assistant: Build Pages with Review Controls | Odoo 20 release notes, Website |
| 26 Nov | Odoo 20 Website SEO: Structured Data, Sitemaps and Duplicate Pages | `applications/websites/website.html` |
| 27 Nov | Odoo 20 WhatsApp: Interactive Templates and Number Blocking | `applications/productivity/whatsapp.html` |
| 28 Nov | Odoo 20 Sign: Update Records and Track Every Signer | `applications/productivity/sign.html` |
| 29 Nov | Odoo 20 Spreadsheet Analysis: New Charts, Filters and Controls | `applications/productivity/spreadsheet.html` |
| 30 Nov | Odoo 20 Time Off: Calendar Days, Working Days and Minimum Requests | `applications/hr/time_off.html` |
| 1 Dec | Odoo 20 BioTime Attendance Integration: Ownership and Validation | `applications/hr/attendances/biotime_integration.html` |

All documentation paths use `https://www.odoo.com/documentation/20.0/` as the base. Release note topics
use `https://www.odoo.com/odoo-20-release-notes` as the primary confirmation source.

## Required article structure

Each article should answer one search intent and contain:

1. A direct short answer.
2. The exact Odoo 20 scope and relevant applications.
3. What is confirmed in Odoo 20.
4. What changed or needs fresh review when moving from Odoo 19.
5. The business decision behind the feature.
6. A practical configuration or rollout sequence.
7. Permissions, data ownership and exception handling.
8. One clearly labelled illustrative example.
9. Limits, edition, hosting, localization or compliance boundaries.
10. Common mistakes, owner review points and two useful FAQs.
11. Official Odoo 20 references and one relevant internal link.

## SEO rules

* Use one primary query per page and avoid broad titles such as "Odoo 20 new features".
* Keep titles specific enough to avoid competing with the existing Odoo 19 guides.
* Include `Odoo 20` in the title, description, first paragraph and tags without repeating it unnaturally.
* Use `Odoo`, `Odoo 20`, `ERP` and `Best Practices` as the common tags, followed by four topic tags.
* Use the existing guide hub that matches the application. Do not introduce an unsupported hub value.
* Link to the matching Odoo 19 guide only when the new article explains a real version difference.
* Do not reuse the Odoo 19 article with only version numbers changed.
* Add the series to the existing Odoo Guides page after the first articles are ready, using one Odoo 20
  section rather than creating dozens of navigation links.
* Review Search Console after the first 14 and 30 articles for indexing, impressions and query overlap.

## Quality gate before publication

Every draft must pass front matter validation, official source checks, internal link resolution, title
uniqueness, description length, future date checks and the existing no em dash or en dash rule. Screens,
labels and capabilities must be confirmed against Odoo 20 rather than inferred from Odoo 19. Any feature
available only in a particular edition, hosting plan, localization or external service must say so clearly.

## Draft completion

All 30 posts were drafted with one article per day from 2 November through 1 December 2026 at 07:00 IST.
The series contains 34,564 body words, with individual articles ranging from 1,133 to 1,176 words.
Validation confirmed dates, front matter, two FAQs, eight unique tags, internal related links, official
Odoo source domains, unique titles and the no em dash or en dash rule.
