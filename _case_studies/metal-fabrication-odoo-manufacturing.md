---
layout: case-study
status: anonymised
order: 1
title: "Odoo for a Metal Fabrication Job Shop: Order Tracking and Nesting"
description: "A Canadian metal fabricator replaced spreadsheets and separate tools with Odoo, adding automatic nesting batches linked to sales orders."
last_modified_at: 2026-10-05
summary: "A Canadian precision metal fabrication job shop replaced spreadsheets and separate quoting and planning tools with Odoo, and gained automatic production batching linked to every sales order."
industry: "Manufacturing: precision metal fabrication"
location: "Canada"
platform: "Odoo"
services: ["Odoo implementation", "Manufacturing", "Custom development"]
problem: "The shop does laser cutting, tube laser cutting, press brake bending and custom fabrication in steel, aluminium and structural sections, with more than a thousand projects behind it. Nobody could quickly answer where an order was, when it would be finished, or whether a delivery date was realistic. That put the business's 99% on-time delivery standard at risk."
existing_process: "Orders were tracked in Excel, quotes were produced in separate quoting software, cutting was planned in the laser machines' nesting software, and accounts were kept in QuickBooks. Each tool did its own job, but none of them talked to the others, so checking an order's status meant asking people and opening files."
requirements:
  - "Real-time status of every sales order across production stages."
  - "Quoting, production planning, inventory and delivery in one system."
  - "Production sequenced by delivery date, so promised dates are protected."
  - "Cutting work grouped sensibly for laser nesting, without manual sorting."
role: "I delivered this project at Master Software Solutions as consultant, tech lead, project manager and delivery manager: understanding how the shop and office worked and designing the Odoo solution, leading the MSS developers who built the nesting batches and the link to the nesting workflow, planning and running the project, and owning delivery through go-live and support."
solution: "Odoo became the single system for quotations, inventory, production planning, manufacturing and delivery tracking. The key piece of custom development was automatic batching for nesting: orders are grouped into batches and sub-batches by delivery date, product type, material thickness and material type, and each batch stays linked to the sales orders inside it. When a batch moves on, the progress of every order in it is visible immediately."
decisions:
  - "Batch by delivery date first, then product type, thickness and material. The date protects the promise to the customer; the other three keep the same material and gauge together for efficient nesting."
  - "Keep a link from every batch back to its sales orders, so grouping work for production never hides the status of an individual order."
  - "Bring quoting into Odoo, so an accepted quote flows into production without being typed again."
  - "Connect to the nesting software rather than replace it. Specialist machine software does its job well; the gap was the information around it."
modules: ["Sales and quotations", "Manufacturing", "Inventory", "Production planning", "Delivery"]
customizations:
  - "Automatic nesting batches and sub-batches, grouped by delivery date, product type, material thickness and material type."
  - "Batch-to-sales-order links for real-time order tracking through production."
integrations:
  - "The laser nesting workflow, so batches created in Odoo feed cutting optimisation."
implementation: "End to end: process analysis of the shop floor and office, configuration and custom development, go-live and ongoing support."
challenges:
  - "Job-shop work means almost every order is different, so the batching rules had to cover a wide mix of parts and materials."
  - "Moving from several separate tools without losing track of orders already in production."
results:
  - "Real-time visibility of every order across production stages."
  - "Production sequenced by delivery date, supporting the 99% on-time delivery standard."
  - "Less material waste through better-grouped nesting."
  - "No more manual status checks across spreadsheets and separate tools."
cta_title: "Running a job shop on spreadsheets?"
cta_text: "Tell me how orders move from quote to cutting to delivery in your shop, and I'll explain how Odoo could track them without slowing the floor down."
---
## What I'd tell a similar business

- In a job shop, the sales order is the thread everything hangs on. However you group work for production, keep the link back to the order.
- Write the batching rules down with the people who run the machines before anyone builds them.
- Don't try to replace specialist machine software. Connect to it, and put Odoo in charge of the information around it.

Related guides: [manufacturing orders in Odoo](/blog/2026/08/15/manufacturing-orders-production-workflow-in-odoo/),
[how to set up a bill of materials](/blog/2026/09/24/how-to-set-up-bill-of-materials-odoo/) and
[how to set up work centres and work orders](/blog/2026/09/27/how-to-set-up-work-orders-odoo/).
