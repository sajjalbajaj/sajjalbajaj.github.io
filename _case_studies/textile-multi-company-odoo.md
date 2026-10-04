---
layout: case-study
status: anonymised
order: 2
title: "Multi-Company Odoo for a Textile Group: From Paper to One System"
description: "A multi-company silk textile group moved from paper and a standalone CRM to one Odoo database with automatic intercompany transactions."
last_modified_at: 2026-10-05
summary: "A silk textile business made up of several companies replaced paper records, spreadsheets and a standalone CRM with one multi-company Odoo database, with intercompany transactions created automatically."
industry: "Manufacturing: textiles (silk)"
platform: "Odoo"
services: ["Odoo implementation", "Multi-company setup", "Data migration"]
problem: "The group runs several companies that buy from, sell to and move stock between each other. Stock existed only on paper, so nobody knew what was available. Every intercompany sale was keyed in twice, finance reconciled the companies by hand, and there was no way to see the group as a whole."
existing_process: "Paper records in every department, spreadsheets, and a CRM used only for taking orders, with no connection to stock, production or accounts. Textile details such as fabric type, roll quantities, colour codes and weave specifications were recorded inconsistently."
requirements:
  - "One digital system replacing paper across all the companies."
  - "Each company kept separate, with its own accounts and access, in the same database."
  - "Intercompany purchases, stock transfers and invoices created automatically."
  - "Real-time stock across the group, with textile attributes recorded consistently."
  - "Invoices generated from confirmed and delivered orders, and consolidated reporting for the group."
role: "I delivered this project at Master Software Solutions as consultant, tech lead, project manager and delivery manager: mapping each company's processes and designing the multi-company setup, leading the MSS developers who built the custom parts, planning and running all six stages from discovery to hypercare, and owning delivery through go-live."
solution: "One Odoo database with a company for each entity, each with its own chart of accounts and role-based access. Sales and CRM, inventory, manufacturing and accounting were configured together, so an order flows from the salesperson through stock and production to an invoice. When one company sells to another, the matching purchase order, stock transfer and accounting entries are created on the other side automatically."
decisions:
  - "Several companies in one database rather than separate databases, so intercompany flows can be automated and the group reported on as a whole."
  - "Textile attributes (fabric type, roll quantity, colour code, weave) as structured fields, not free text, so stock can be searched and reported reliably."
  - "Multi-step warehouse routes (goods in, quality check, storage, picking, packing and dispatch) so stock is controlled at every stage."
  - "Reordering rules and minimum stock levels from day one, now that stock was finally visible."
modules: ["Sales and CRM", "Inventory and warehouse", "Manufacturing", "Accounting"]
customizations:
  - "Product fields for fabric type, roll quantities, colour codes and weave specifications."
  - "Textile product categories and units of measure."
implementation: "Six stages: discovery and process mapping with each team; solution design; configuration and customisation; data migration, with old CRM data and paper records cleaned, mapped and checked against the source; user acceptance testing with the client's team; and go-live with hands-on support through the first weeks."
challenges:
  - "Migrating from paper. Records had to be cleaned and validated before anyone could trust them in a new system."
  - "Keeping each company's data separate while automating the flows between them."
results:
  - "Paper-based processes eliminated."
  - "No manual intercompany data entry; entries are created automatically on both sides."
  - "Real-time stock visibility across the group, with automatic stock valuation."
  - "Invoices created automatically from orders, and consolidated reporting across all the companies for the first time."
cta_title: "Running several companies that trade with each other?"
cta_text: "Tell me how your companies buy from and sell to each other today, and I'll explain how a multi-company Odoo setup would handle it."
---
## What I'd tell a similar business

- If your companies trade with each other, decide early whether they belong in one database. Automated intercompany flows depend on it.
- Agree your product attributes before migration. Free-text fields become unreportable very quickly.
- Paper records need cleaning before they're migrated, not after. Budget time for it.

Related guides: [how to set up multi-company in Odoo](/blog/2026/09/29/how-to-set-up-multi-company-odoo/),
[common multi-company mistakes](/blog/2026/09/20/odoo-multicompany-access-mistakes/) and
[how to set up reordering rules](/blog/2026/09/23/how-to-set-up-reordering-rules-odoo/).
