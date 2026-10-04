---
layout: case-study
status: anonymised
order: 4
title: "Fixing Odoo and WooCommerce Sync for a Skincare Manufacturer"
description: "How duplicate product references broke Odoo and WooCommerce sync for a Canadian skincare manufacturer, and how the data was fixed."
last_modified_at: 2026-10-05
summary: "A Canadian wholesale skincare and hair care manufacturer already ran Odoo, but product sync with its WooCommerce store kept failing. The cause was in the product data, not the connector."
industry: "Manufacturing: skincare and hair care"
location: "Canada"
platform: "Odoo with WooCommerce"
services: ["Odoo support", "Odoo upgrade", "WooCommerce integration"]
duration: "About six months for the upgrade and website launch, as described by the client"
problem: "The business makes private-label, bulk and ready-to-label skincare and hair care products for wholesale customers across North America, and sells online through WooCommerce. Products kept failing to sync between Odoo and the store, listings showed old or wrong information, and staff fixed data by hand. Client communication suffered too, because order updates and account details weren't kept in one reliable place."
existing_process: "Odoo was already in place but underperforming. Several products shared the same internal reference, so the integration couldn't tell them apart. Corrections were made on whichever side looked wrong, which set up the next mismatch."
requirements:
  - "Every product mapped to exactly one store listing."
  - "Product information kept up to date in both systems without manual fixes."
  - "Wholesale client accounts, order history and communication recorded consistently in Odoo."
  - "Someone to look after Odoo on an ongoing basis."
role: "I worked on this engagement as part of the Master Software Solutions team, on the functional side: auditing the product data, planning the clean-up and the account workflows, and working with the client's team through testing. Integration and development work was done by MSS developers."
solution: "Instead of patching the connector, we fixed the data it depends on. The whole product catalogue was audited for duplicate and conflicting internal references, each product was given a unique reference matching its WooCommerce SKU, and the integration was then reconfigured and tested. Client account workflows in Odoo were tidied at the same time, so order history, communication and account details are recorded the same way every time. The engagement also covered an Odoo upgrade and a website launch, and continued as ongoing Odoo support."
decisions:
  - "Treat the sync failures as a data problem first. Integrations like this match products on their reference, so duplicates cause failures however the connector is configured."
  - "Use the WooCommerce SKU as the one product reference on both sides, so there's a single key to check when something looks wrong."
  - "Keep looking after the system afterwards, so new duplicates are caught before they reach the store."
modules: ["Inventory and product catalogue", "Sales", "Contacts and customer accounts", "WooCommerce connector"]
integrations:
  - "WooCommerce: product and order sync, reconfigured and tested after the reference clean-up."
challenges:
  - "Finding every duplicate in a wide catalogue covering finished products, bulk bases, raw materials, fragrances and packaging."
  - "Correcting references without breaking existing orders or the live store."
results:
  - "Duplicate internal references removed; every product maps to the right store listing."
  - "Sync failures and stale listings stopped, and manual corrections fell away."
  - "More consistent communication with wholesale clients, with account history in one place."
  - "The upgrade and website launch were completed in about six months, according to the client."
cta_title: "Is your Odoo integration fighting your data?"
cta_text: "If your store and Odoo keep disagreeing, tell me which systems are involved and what goes wrong. The fix is often in the data, not the connector."
---
## What I'd tell a similar business

- If a sync keeps failing, check whether two products share a reference before anyone touches the connector.
- Decide which system owns product data, and make the other one follow it.
- A rescue is a good moment to agree ongoing support. Most data problems come back when nobody is watching for them.

Related guide: [eCommerce meets inventory: one connected store in Odoo](/blog/2026/08/26/odoo-ecommerce-inventory-connected/).
