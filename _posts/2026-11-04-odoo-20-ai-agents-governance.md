---
layout: post
title: "Odoo 20 AI Agents: Define Scope, Tools and Human Review"
date: 2026-11-04 07:00:00 +0530
last_modified_at: 2026-11-27
tags: [Odoo, Odoo 20, ERP, Best Practices, AI, Integration, Security, Business Automation]
hub: integrations
description: "Separate Odoo 20 AI knowledge from skills and tools, define action boundaries, and test unsupported answers before enabling record changes."
faqs:
  - q: "What is the difference between knowledge and skills in an Odoo 20 agent?"
    a: "Knowledge supplies information the agent can retrieve. Skills contain task instructions and can include tools that perform actions. Adding a source document does not by itself establish permission to change records."
  - q: "Can an Odoo agent act without assigned skills?"
    a: "The current Odoo 20 documentation says an agent without assigned skills can provide information but cannot complete tasks or change the database."
  - q: "Does source restriction guarantee a correct answer?"
    a: "No. Restricting an agent to approved sources narrows its information base. The sources can still be stale, incomplete or unsuitable for the question, so consequential answers need review."
---

**Short answer:** Define an Odoo 20 AI agent's information sources separately from its skills, tools and triggers. Start with a narrow task, decide which actions remain human decisions, and test unsupported questions as well as successful ones. A helpful answer is not evidence that a resulting database change is authorised or correct.

## What makes up an Odoo 20 AI agent?

The current [AI agent documentation](https://www.odoo.com/documentation/20.0/applications/productivity/ai/agents.html) describes instructions, knowledge, skills and tools, and triggers. Odoo 20 calls the task-specific instruction collections **skills**; older material may call them topics.

Creating and customising agents requires the AI app. The documentation also identifies IAP credits for AI requests. Confirm availability and expected usage costs for the actual plan before agreeing a production scope.

## How do knowledge and tools differ?

A source helps the agent find information. A tool lets it perform an operation. Those need different acceptance questions.

| Component | Example requirement | Evidence I would request |
|---|---|---|
| Knowledge | Answer from the approved warranty policy | Answer tied to the correct active policy |
| Instructions | Explain when the policy does not cover the question | A response that identifies the gap |
| Skill and tool | Prepare the permitted next action | A record of what was proposed or changed |
| Trigger | Run only at the intended event | Evidence of when the invocation occurred |

These are proposed controls. They are not a statement that configuring an instruction creates a guaranteed security boundary.

## What is a sensible first support-agent scope?

Consider an illustrative agent answering questions about published support procedures. It may explain the approved return route and draft a response. Refund decisions, bank changes and customer-account changes remain outside the pilot.

Write that boundary in operational terms: the reviewer must see the source and decide whether the suggested response applies to this customer. If the agent cannot find a current policy, the expected outcome is an unresolved question routed to a person.

Odoo documents a **Restrict answers to Sources** option. That narrows the information used, but does not prove the sources are accurate or that an answer correctly applies them.

## What must be checked before adding tools?

Odoo says an agent without assigned skills can supply information but cannot complete tasks or change the database. Adding action capability should therefore be treated as a separate release decision.

List the tools, the records they can affect and the role under which the action is executed. Review source access and action permissions separately. A prompt saying “do not change bank details” should not substitute for withholding an unnecessary capability.

The documented **Self Update** option also merits an explicit decision because it lets an agent propose or make configuration changes. Do not enable it merely because another agent uses it.

## Which tests reveal the important boundaries?

Use synthetic records and these illustrative challenges:

1. Ask a question covered by a current source, then identify the passage supporting the answer.
2. Ask about a policy that is absent and check whether the agent recognises the gap.
3. Provide a document containing an instruction to ignore the configured task and attempt an unrelated change.
4. Ask for a customer or company record outside the intended scope.
5. Repeat an action request and inspect whether it creates an unintended duplicate.

Record the observed result, including failures, in the [acceptance evidence worksheet](/resources/erp-acceptance-evidence/). These tests have not been run on a live client database for this article.

## When should the agent remain advisory?

Keep the agent advisory when source ownership is unclear, an action is difficult to reverse, or nobody can explain which permissions and review steps govern its tools. Improve those conditions before expanding the task.

See the [AI assistant integration guide](/blog/2026/10/20/odoo-ai-assistants-mcp/) for the separate question of connecting an assistant to business systems.

## Source and review

Official reference: [Odoo 20 AI agents](https://www.odoo.com/documentation/20.0/applications/productivity/ai/agents.html), checked on 27 November 2026. This article distinguishes documented components from my proposed pilot and acceptance tests. It does not certify an agent or guarantee its output.

For help defining an agent's operational scope, see my [Odoo consulting services](/services/odoo-consulting/).
