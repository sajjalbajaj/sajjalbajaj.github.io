---
layout: post
title: "AI-Based Route Planning at Odoo Experience India 2026"
date: 2026-10-04 10:00:00 +0530
tags: [Odoo, Odoo Experience, Events, Logistics, Delivery Planning, Fleet, Inventory Management, Distribution]
hub: inventory
description: "My recap of exhibiting for Master Software Solutions at Odoo Experience India 2026 and presenting its route planning module, with lessons on delivery data."
about_event:
  name: "Odoo Experience India 2026"
  start: "2026-09-11"
  end: "2026-09-12"
  venue: "Mahatma Mandir Convention Center"
  city: "Gandhinagar"
  region: "Gujarat"
  organizer: "Odoo"
  organizer_url: "https://www.odoo.com/"
  url: "https://www.odoo.com/event/odoo-experience-2026-india-10174/page/oxp26-india-introduction"
---

At Odoo Experience India 2026 I represented Master Software Solutions as an exhibitor and gave a presentation
on its AI-based Route Planning and Optimization module for Odoo: a tool that assigns delivery orders to drivers
and builds routes inside Odoo using Google Maps.
This is my account of what the module is for, what my part was, and the practical lessons that apply to any
business planning deliveries from its ERP.

## The event at a glance

- **Event:** Odoo Experience India 2026, organised by Odoo
- **Dates:** 11–12 September 2026
- **Venue:** Mahatma Mandir Convention Center, Gandhinagar, Gujarat
- **My role:** exhibitor and presenter on behalf of Master Software Solutions (MSS), which exhibited as an Odoo partner
- **Topic:** MSS's AI-based Route Planning and Optimization module for Odoo

The programme opened on 11 September with Odoo India's keynote introducing Odoo 20, and ran talks across
accounting, inventory, manufacturing, CRM, eCommerce and AI.

A note on ownership: the route-planning module is an MSS product, built by the MSS team. My role at the event
was exhibiting it on MSS's behalf, presenting it, and explaining how different kinds of businesses could use it.

## At the MSS booth

Exhibiting meant the conversations continued after the presentation. MSS's own coverage of the event lists the
subjects visitors raised at the booth: manufacturing and production, inventory and warehouse operations,
logistics and delivery, business automation, AI-powered workflows, sales and customer management, and connecting
separate business processes through Odoo. Very few of those conversations were about a single feature. Most were
about getting the underlying operations right first, which is also where the lessons below come from.

## The problem the module addresses

Many businesses that run their own delivery vehicles still plan routes the old way. Someone looks at the day's
orders, groups them by area from memory, assigns them to drivers and sends the list out. It works until volumes
grow. Then planning takes longer every morning, routes overlap, drivers cover more distance than they need to,
and nobody in the office can easily see which orders are on which vehicle.

The order, the stock and the customer address are already in Odoo, so planning the route somewhere else means
copying data out and losing visibility of what happens next.

## What the module does

Based on MSS's published description of the module, it:

- takes the delivery orders that are ready to go and assigns them to drivers automatically, based on proximity
  and vehicle capacity;
- calculates routes with what MSS describes as intelligent optimisation algorithms, using Google Maps for
  distances and route display;
- shows every route and stop on a map, and lets a dispatcher reassign orders manually when local knowledge
  says otherwise;
- works with Odoo's Contacts, Fleet, Inventory and Sales data, and keeps a history of routes for reporting.

The "AI" in the name refers to that automated optimisation of assignments and routes. MSS lists Odoo 16, 17 and
18, in both Community and Enterprise, as supported versions at the time of writing.

## Lessons for any business planning deliveries in Odoo

Exhibiting and presenting the module made a few things very clear. None of them depend on this particular tool;
they apply to any route planner you connect to an ERP.

**1. Address data decides whether a delivery can be planned at all.** The module needs map coordinates for every
stop, and a stop without them is dropped from optimisation. In practice, customer addresses in most databases
are inconsistent: missing pin codes, landmarks instead of street names, duplicates. Cleaning contact addresses
is the first job, before any optimisation.

**2. Route planning sits at the end of the order flow.** The module only plans deliveries that are in the ready
state and scheduled for today. That means stock reservation, picking and scheduling upstream have to be reliable,
or the planner simply sees fewer orders than the trucks are carrying. Delivery planning problems are often
inventory problems in disguise.

**3. Vehicles and drivers are master data too.** Each vehicle needs to be registered with a driver before it can
take a route. Treat the fleet like products and customers: complete, current and owned by someone.

**4. Keep a person in the loop.** Automatic assignment is a strong starting point, but dispatchers know things the
system doesn't, such as a customer who only accepts deliveries in the morning or a road closed for works. A
manual override is a feature to use, not a failure.

**5. Measure before you claim savings.** Route history makes it possible to compare distance and stops per route
before and after. If a business wants to talk about fuel or time saved, it should record a baseline first.

## What this means if you run deliveries from Odoo

If your team plans routes in a spreadsheet or on a whiteboard, the first step is not a new tool. It's checking
that the data the tool would rely on is in order: geocoded customer addresses, delivery orders that reach the
ready state on time, and a fleet register with drivers assigned. With that in place, whichever route planner
you choose has a fair chance of working.

If you'd like to talk through your delivery process in Odoo, or want an introduction to the MSS team behind the
module, [get in touch](/#contact). For the warehouse side of the flow, my guides on
[warehouses and locations](/blog/2026/09/23/how-to-set-up-warehouse-locations-odoo/) and
[reordering rules](/blog/2026/09/23/how-to-set-up-reordering-rules-odoo/) are a good place to start.

## Sources

- Odoo: [Odoo Experience 2026 India event page](https://www.odoo.com/event/odoo-experience-2026-india-10174/page/oxp26-india-introduction) (dates, venue and programme)
- Master Software Solutions: [coverage of Odoo Experience India 2026](https://www.mastersoftwaresolutions.com/news/odoo-experience-india-2026/) (external)
- Master Software Solutions: [Route Optimization Odoo plugin](https://www.mastersoftwaresolutions.com/route-optimization-odoo-plugin/) (module features, requirements and supported versions)
