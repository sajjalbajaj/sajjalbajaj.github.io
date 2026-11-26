---
layout: post
title: "Odoo 20 MCP Server: Connect External AI Tools Safely"
date: 2026-11-05 07:00:00 +0530
tags: [Odoo, Odoo 20, ERP, Best Practices, AI, Integration, API, Security]
hub: integrations
description: "Configure Odoo 20 MCP access with scoped identities, exposed tools and revocation tests. Understand why a read-only tool label is not a security boundary."
last_modified_at: 2026-11-27
faqs:
  - q: "Does the Readonly Tool option enforce read-only access?"
    a: "No. Odoo describes it as advice to the client about invoking a tool without approval. Restrict the tools and permissions themselves; do not use the label as an access-control guarantee."
  - q: "How can an Odoo MCP connection be revoked?"
    a: "The documentation says OAuth and API-key connections appear in My Preferences under Security. Delete the corresponding key, then verify from the client that access has stopped."
  - q: "Should every MCP client be allowed to register?"
    a: "Odoo's dynamic client registration option allows any application to register and request access. Keep the approved-client list narrow unless there is a defined reason to broaden registration."
---

**Short answer:** Odoo 20 exposes an MCP endpoint through which an external AI client can call available tools under an Odoo identity. Control the identity, approved clients and exposed actions separately. A tool marked read-only is not automatically prevented from writing data, so verify its implementation before relying on that label.

## What must exist before connecting a client?

The [MCP reference](https://www.odoo.com/documentation/20.0/applications/productivity/ai/mcp_server.html) documents OAuth and API-key authentication, the database's `/mcp` endpoint and tool exposure through server actions. Confirm the installed version and plan support the intended integration before promising access.

Odoo recommends OAuth and limits that route to internal users; its documentation directs portal users to an API key. Whichever route is used, identify the actual account whose permissions govern the work. Sharing an administrator identity across unrelated assistants makes it difficult to reason about responsibility.

## How should client approval and tool exposure be separated?

A connection answers who is calling. Available tools determine what operations the client can request. The action's implementation and the user's permissions determine whether those requests should succeed.

1. Review approved client metadata in **Settings ‣ Integrations ‣ MCP OAuth** when using OAuth.
2. Connect the intended client to the database endpoint.
3. Review server actions in developer mode under **Settings ‣ Technical ‣ Server Actions**.
4. Inspect **Available in MCP** before exposing an additional action.
5. Test the resulting permissions with representative records.

Avoid enabling dynamic client registration merely to resolve one client's setup issue. The documented setting lets any application register and request access; it changes the approval boundary.

## What does the read-only label actually mean?

Odoo says **Readonly Tool** advises the client that an action can run without explicit user approval. It does not hide the tool or prove its code cannot modify data.

For a reporting pilot, I would inspect the allowed actions and attempt a refused write using synthetic records. An assistant saying it has read-only access is not the acceptance evidence. The test needs to show that the requested modification was prevented and that the authorised report still works.

## Which connection tests are worth keeping?

| Proposed test | Result to inspect |
|---|---|
| Read one permitted customer record | Correct data and no unrelated customer fields |
| Request a record outside the account's scope | Refusal or appropriately restricted output |
| Ask for an unexposed operation | No successful mutation through another available route |
| Revoke the connection and retry | The old credential can no longer access the database |

These are proposed acceptance cases, not completed tests. Start with non-sensitive synthetic data so a failed restriction does not expose real customer information.

## What happens when access expires or is revoked?

A client may cache its discovered tools for a session. Therefore, inspect the server result rather than treating a cached tool list as proof of continued access. Odoo documents deleting the relevant security key to revoke the connection. Verify the old client session after that action.

Record the connection owner, client, expiry and approved purpose in your internal inventory. Keep the credential itself in an appropriate secret store, not in the [acceptance evidence worksheet](/resources/erp-acceptance-evidence/).

For the separate architecture question, read [AI assistants and Odoo integrations](/blog/2026/10/20/odoo-ai-assistants-mcp/).

*Sources reviewed on 27 November 2026. Scenarios are proposed acceptance cases, not reported customer results. Confirm edition, installed modules and provider requirements for your database.*
