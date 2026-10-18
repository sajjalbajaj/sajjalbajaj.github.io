---
layout: post
title: "Connecting Odoo to AI Assistants with MCP: Architecture and Guardrails"
date: 2026-10-20 10:00:00 +0530
tags: [Odoo, Odoo 19, AI, MCP, Integration, Automation, Security, ERP]
hub: integrations
description: "A practical architecture for connecting an AI assistant to Odoo through MCP, with read-only tools first, scoped API access, approval gates and audit logs."
faqs:
  - q: "Does Odoo include an MCP server?"
    a: "Odoo's standard Odoo 19 documentation describes an external JSON-2 API, not a built-in MCP server. An MCP server that connects to Odoo would be an additional adapter or integration that you build or select."
  - q: "Can an AI assistant safely update Odoo records through MCP?"
    a: "It can be designed to call approved write actions, but MCP does not make an action safe by itself. Use narrow tools, minimum permissions, validation, an approval step for consequential changes, and an audit trail."
  - q: "What should an Odoo AI integration do first?"
    a: "Start with a read-only question such as checking order status or summarizing stock for a named warehouse. Verify access rights, record rules, answer accuracy and logs before considering any record-changing action."
---

An AI assistant that can answer “Which customer orders are waiting for stock?” is useful only if it reads the right records and respects the same access rules as the people using Odoo. If it can also change quantities, confirm orders or create payments, the design needs stronger controls.

The Model Context Protocol (MCP) is a standard way for an AI application to discover and call tools exposed by a server. It does not connect itself to Odoo. Odoo 19 documents an external JSON-2 API, so an Odoo integration can place a small MCP server between the assistant and that API:

`AI assistant → MCP client → controlled MCP server → Odoo JSON-2 API`

The MCP server acts as a boundary. It decides which business questions and actions are available, translates them into specific Odoo model calls, and returns only the information needed for the task.

## Start with read-only business tools

Avoid exposing the full Odoo model API as a giant collection of generic search and update functions. That gives the model too many choices and makes access difficult to review. Create named tools that match a real task, such as:

- `find_sales_order` using an exact order reference.
- `list_open_deliveries` for a permitted warehouse.
- `summarize_available_stock` for a product and location.
- `get_customer_invoice_status` for an authorized customer account.

Each tool should accept a small, validated input schema and return a limited result. For a stock question, the server might return product, location, available quantity and the timestamp used. It should not return unrelated customer or employee data.

Read-only access is a good first release because it lets a team test retrieval accuracy and permission behavior without changing live business records. It still needs privacy and security review: reading the wrong customer or price data can cause harm even without a write operation.

## Give the integration its own identity

Odoo's JSON-2 API uses API keys and applies normal access rights, record rules and field access. Create a dedicated bot user for the integration, grant only the required models and operations, and generate a key specifically for this service. Odoo recommends dedicated keys and short expiration periods for exposed or higher-privilege integrations.

Store the API key on the server, never in the assistant prompt, browser, source code or user-visible tool response. Keep secrets out of logs. Rotate credentials, monitor failed authentication and revoke the key when the service is retired. If an assistant is available to many employees, do not let one broadly privileged bot account silently bypass the access scope that a user should have.

For user-specific records, the integration needs a clear identity and authorization model. It may use separate bot accounts, pass verified user context through a trusted service, or restrict the assistant to a specific dataset. Do not trust an email address or company name typed into a chat as proof of authorization.

## Add write actions only as narrow workflows

If a user asks the assistant to create a quotation, expose a tool such as `create_draft_quotation` that requires a customer, products, quantities and a currency. Validate every reference against Odoo, check the caller's authority, create the quotation in draft, and return the record number. Keep confirmation, invoicing, payment registration, inventory adjustment and payroll actions behind a separate review or approval step.

The tool should not let the assistant choose arbitrary model names or call arbitrary methods. Use allowlisted actions and validate inputs server-side. Check whether the request is a repeat before creating a record so retries cannot produce duplicate orders. Define what happens if Odoo times out after accepting a request but before the assistant receives the response.

An approval screen should show the exact business action, company, record, values and side effects. A vague “Are you sure?” is not enough. The person approving should be able to inspect the proposed values in Odoo and cancel the action.

## Treat retrieved text as data, not instructions

Odoo records can contain user-entered notes, email text, attachments and descriptions. A malicious or accidental instruction in one of those fields must not expand what the assistant is allowed to do. Keep system instructions and tool permission logic outside retrieved content. Limit which fields are sent to the model, remove unnecessary personal data, and make the assistant cite the Odoo record or timestamp behind its answer where possible.

## Build a traceable pilot

Test with a duplicate or non-production database. Start with a handful of read-only tools and representative users. Check that the assistant cannot see another company's records, hidden fields or restricted financial details. Test ambiguous names, duplicate customers, invalid IDs, large result sets, prompt injection in notes, expired credentials and API timeouts.

Record the authenticated user, tool name, inputs, target record IDs, decision result and any approval. Store only the minimum detail needed for audit, and apply a retention policy. Monitor response accuracy and tool failures alongside normal Odoo access logs.

MCP defines the communication pattern; your application still owns authentication, authorization, confirmation and business controls. If you need an integration designed for your workflows, see [Odoo consulting](/services/odoo-consulting/) or [custom software development](/services/custom-development/).

Based on the official [MCP architecture overview](https://modelcontextprotocol.io/docs/learn/architecture), [MCP tools specification](https://modelcontextprotocol.io/specification/2025-06-18/server/tools), and [Odoo 19 External JSON-2 API documentation](https://www.odoo.com/documentation/19.0/developer/reference/external_api.html). A plain-English guide, not a replacement for the docs.
