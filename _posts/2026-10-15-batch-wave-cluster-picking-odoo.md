---
layout: post
title: "Batch, Wave and Cluster Picking in Odoo 19 (Step by Step)"
date: 2026-10-15 09:00:00 +0530
last_modified_at: 2026-11-27
tags: [Odoo, Odoo 19, Setup, Inventory, Warehouse Management, Logistics, Distribution, Barcode]
hub: inventory
description: "Choose and set up batch, wave or cluster picking in Odoo 19, compare Odoo 20 changes, and diagnose missing lines, tote errors and incomplete deliveries."
faqs:
  - q: "What is the difference between batch, wave and cluster picking?"
    a: "A batch groups transfers for shared picking. A wave groups selected lines after splitting transfers. Cluster picking separates orders into their own packages during the pick. Choose according to product overlap, available containers and the handoff to packing, rather than order count alone."
  - q: "Why are products missing from the batch's detailed operations?"
    a: "Compare the complete demand with reserved stock first. The Odoo 19 batch guide explains that unavailable products can remain in Operations without appearing in Detailed Operations. Check the linked transfer, reservation and source location before reducing demand or validating the batch."
  - q: "Does completing a pick batch mean the customer order has shipped?"
    a: "Only if that operation is the final outgoing delivery in your configured flow. In a two-step warehouse, completing Pick moves goods towards dispatch; the Delivery Orders operation still needs processing. Follow the sales order through all linked transfers and outstanding quantities."
---

**Short answer:** Use a batch to pick several transfers together, a wave to group selected lines from transfers, and cluster picking to place each order into its own package while picking. In Odoo 19, enable Batch, Wave & Cluster Transfers in Inventory settings; cluster picking also needs Packages. Start with a small manual batch, confirm reservation and order separation, then assess automation. Validate the final delivery separately when your warehouse has more than one outgoing step.

## Which picking method solves your bottleneck?

Order count alone does not identify the best method. Check where time and mistakes occur: travel between shelves, sorting at packing, bulky items or waiting for incomplete orders.

| Method | Useful situation | Work that remains |
| --- | --- | --- |
| Individual transfer | Large, unusual or priority order | Plan its route and keep its dispatch deadline visible |
| Batch | Several orders share frequently picked items | Sort collected items into the correct orders |
| Cluster | Orders fit separate totes on one cart | Maintain the order-to-tote mapping and check completeness |
| Wave | Selected products or zones need a separate picking task | Reunite split work with the correct orders before dispatch |

These are operational choices, not guaranteed performance results. Compare actual picking time, sorting time and errors before and after a controlled trial.

The [batch reference](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/shipping_receiving/picking_methods/batch.html), [wave reference](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/shipping_receiving/picking_methods/wave.html) and [cluster reference](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/shipping_receiving/picking_methods/cluster.html) describe the underlying workflows. This guide applies those distinctions to release, packing and quantity checks.

## Prepare the warehouse flow first

In **Inventory ‣ Configuration ‣ Settings**, enable **Batch, Wave & Cluster Transfers**. The documented pick-step setup also uses **Storage Locations** and **Multi-Step Routes**. Enable **Packages** for cluster picking, then save.

Confirm whether outgoing shipments use one, two or three steps. Cluster batches can work with each, but the operation you group changes. In two-step delivery, distinguish **Pick** from **Delivery Orders**. A completed internal pick does not prove goods have left the warehouse.

Give locations recognisable names and verify that products are physically where the system expects them. Agree who releases work, who owns exceptions and when the batch is handed to packing. Grouping by a common source location is not, by itself, evidence of an optimised walking route or a carrier schedule.

## Create and process a manual batch

1. From Inventory Overview, open the operation card's menu and choose **Prepare Batch**. Select the appropriate operation type, responsible person and scheduled date.
2. Add the intended transfers. Alternatively, select transfers in their list and use **Actions ‣ Add to batch**. Use a description that makes the picking and handoff instruction clear.
3. Confirm the batch. Compare demand with reserved quantities before releasing it to the picker.
4. Record what was actually picked. In the Odoo 19 documentation, the detailed view uses **Done** and **Reserved** quantities; the Operations view retains the wider demand picture.
5. Review shortages, packages and linked transfers, then validate. If a backorder decision appears, check which quantity remains due before choosing an option.

Labels can vary with installed modules. Use the record's quantity and state to confirm its meaning rather than assuming a similarly named column represents demand, reservation and completion at once.

## Use waves for selected lines

Choose **Prepare Wave** from the operation card, select the relevant product lines and use **Add to Wave**. The documented workflow groups lines from the same operation type and splits transfers before grouping their selected parts.

For example, a separate team might handle bulky water containers while another picks shelf items. Plan the split before releasing competing tasks. After creating the wave, inspect the resulting transfer references, reservations and remaining lines. Do not assume a later wave will seamlessly extract work from a batch that someone is already processing.

At packing, confirm that both portions of each affected order have arrived. A finished wave only establishes the status of its selected work; it does not establish that every order included in it is complete.

## Keep each cluster tote tied to an order

In **Inventory ‣ Configuration ‣ Package Types**, create a tote type and set **Package Use** to **Reusable Box**. Create identifiable packages under **Inventory ‣ Products ‣ Packages** and use that type for the totes. Then assign the correct **Destination Package** to each order's lines. The [package configuration reference](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/product_management/configure/package.html) explains the package-type setting; enable Packages and Batch, Wave & Cluster Transfers if it is not visible.

Before the first pick, write down a simple mapping such as Order A to TOTE-01, Order B to TOTE-02. If one order needs two totes, identify both. A tote identifier without an order association does not prevent mixing.

The [Barcode batch workflow](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/barcode/operations/process_transfers.html) can support scanning products and assigned packages where that app is available. Check the package suggestion against the physical cart. Reusing a tote after packing requires a clear handoff so it is not still carrying another order's contents.

## Worked example: capacity is not the same as completed work

This is a proposed planning example, not a measured warehouse result. Assume **60 eligible orders**, one pick transfer per order, all satisfying the chosen grouping criteria. The cart can hold **eight single-order totes**, and none of the orders exceeds a tote's capacity.

| Question | Illustrative answer | Check before release |
| --- | --- | --- |
| How many groups of up to eight? | Seven groups of eight and one of four: eight groups | Eligibility and any line limits may create more groups |
| How many orders in a full cart? | Eight | Bulky or fragile items may require fewer |
| What identifies each order? | Its assigned tote and linked transfer | Confirm every line has the right destination |
| What if one order has a shortage? | Hold, split or partially fulfil under an agreed instruction | Record remaining demand and dispatch decision |
| What proves shipment in two-step delivery? | The final outgoing delivery record | Completing Pick alone is insufficient |

Eight groups does **not** establish eight walks instead of sixty. Replenishment trips, split locations, cart limits and packing work can change the total. For a trial, record release time, pick start and finish, packing finish, exceptions and final dispatch. Measure the entire flow so faster picking does not hide a longer packing queue.

## Automatic batching and Odoo 20 differences

In Odoo 19, open **Inventory ‣ Configuration ‣ Operation Types**, select the operation and enable **Automatic Batches**. Select the appropriate **Batch Grouping** criteria, which include contact, carrier, destination country, source location and destination location. Decide which business constraint each selected criterion serves. A common source location alone does not keep different carrier deadlines separate.

The [Odoo 20 batch documentation](https://www.odoo.com/documentation/20.0/applications/inventory_and_mrp/inventory/shipping_receiving/picking_methods/batch.html) uses **Batch Creation: Automatic** and documents limits by transfers, lines or kg, plus **Auto-confirm**. It also distinguishes general and product source locations and adds date-based grouping. Its processing instructions use **Reserve** where the older guide uses **Check Availability**.

Use the instructions matching the installed version. Test one grouping condition at a time before combining them. Confirm how new work joins a batch and how a supervisor freezes the released worklist; do not discover that behaviour while a picker is already travelling.

## Diagnose the exception before changing quantities

| Symptom | Evidence to inspect | Appropriate next action |
| --- | --- | --- |
| Batch is missing an expected transfer | Operation type, state, grouping values and configured limits | Resolve the mismatched condition; retain the order's demand |
| Detailed view omits a product | Operations demand, reservation and source stock | Check availability and the linked transfer before validation |
| Picked total is right but an order is wrong | Each order's lines and destination package | Reconcile contents per order, not only the batch total |
| Same goods appear in overlapping work | Wave split references and current batch assignments | Assign each remaining task once and confirm its reservation |
| Batch is done but dispatch is incomplete | Downstream delivery, packing and outstanding quantities | Finish the remaining operation or record the agreed partial delivery |
| Urgent order misses its deadline | Released worklist and carrier cutoff | Apply an explicit priority or separate release decision |

Do not use **No Backorder** simply to obtain a completed status. See [backorders and remaining demand](/blog/2026/10/13/backorders-odoo/) for the shipping and commercial consequences.

For prerequisites, read [warehouse locations](/blog/2026/09/23/how-to-set-up-warehouse-locations-odoo/), [shipping and receiving](/blog/2026/08/14/shipping-and-receiving-in-odoo/) and [Barcode](/blog/2026/09/10/odoo-barcode/). For help choosing and verifying a picking flow, see [Odoo implementation](/services/odoo-implementation/).

*Reviewed on 27 November 2026 against the linked Odoo 19 batch, wave, cluster, package and Barcode documentation, and the Odoo 20 picking references. The capacity example and trial checks are proposed, not results from a live warehouse or database. Installed modules can change labels and grouping behaviour.*
