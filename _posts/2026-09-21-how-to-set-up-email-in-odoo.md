---
layout: post
title: "How to Set Up Email in Odoo"
date: 2026-09-21 10:00:00 +0530
tags: [Odoo, Odoo 19, Setup, Email, ERP, Documents, Document Management, How To]
description: "A plain-English guide to configuring outgoing and incoming email in Odoo, so quotations, invoices and notifications actually reach people reliably."
---

Odoo sends a lot of email: quotations, invoices, order confirmations, notifications. For all of that to work, email has
to be set up properly, and it is an area where a little care prevents a lot of "did they get it?" confusion. Continuing
this series of practical Odoo how-to guides, here is email.

## Outgoing versus incoming email

There are two sides to email in Odoo. Outgoing email is what Odoo sends: your quotes, invoices and notifications.
Incoming email is what Odoo receives, such as replies that should attach to the right record or messages that create
leads or tickets. Most businesses need outgoing working well first, then incoming where it adds value.

## Setting up outgoing email

To send email reliably, Odoo needs an outgoing mail server. On Odoo Online this is often handled for you, but for full
control, or on other hosting, you configure your own mail server with the details from your email provider. Getting this
right is what makes sure your documents actually land in customers' inboxes.

## Use a proper sending domain

Email from a proper business domain, with the right sending records in place, is far more likely to reach the inbox
rather than the spam folder. Sending as your real domain, correctly authenticated, protects your deliverability. This is
worth getting right, because an invoice in a spam folder might as well not have been sent.

## Setting up incoming email

If you want replies to attach to their records, or emails to create leads or support tickets automatically, you set up
incoming mail. This connects a mailbox to Odoo so messages flow into the right place. It is powerful for sales and
support, turning email into part of your connected system rather than a separate inbox.

## Test before you rely on it

Before trusting email for real customer documents, send test messages and confirm they arrive and look right. Check a
quotation and an invoice actually reach an inbox, not a spam folder. A few minutes of testing saves the embarrassment of
discovering later that customers never received what you sent.

## Practical tips

- Get outgoing email working first; it carries your customer documents.
- Configure a proper outgoing mail server for reliable sending.
- Send from an authenticated business domain to stay out of spam.
- Set up incoming email where replies, leads or tickets should flow in.
- Always test with real documents before relying on it.

## My take

Email setup is easy to overlook and quietly important, because so much of what Odoo does ends in an email someone needs
to receive. Reliable outgoing mail from a proper domain, incoming mail where it adds value, and a quick test before you
rely on it are what keep your communication landing where it should. Get it right and email just works.

Next in this series: how to set up your chart of accounts.

*Based on the official [Odoo 19 email communication documentation](https://www.odoo.com/documentation/19.0/applications/general/email_communication.html). Want your Odoo email set up right? [Get in touch](/services/odoo-implementation/).*
