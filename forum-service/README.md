# Community forums

The current hosted deployment is documented in [Supabase backend setup](../supabase/README.md).

This service provides independent Sajjal and Ankush discussions using one implementation. The web application stores private identities in SQLite and uploaded files on a persistent volume. Public API responses select public fields explicitly. A separate persistent worker processes guide answers and SMTP notifications.

## Start the service

1. Copy `.env.example` to `.env`. Generate a long random `FORUM_SECRET` and separate owner keys. Fill in the HTTPS service origin, SMTP credentials, and the two verified sender addresses. Store these values outside Git.
2. Run `docker compose up --build -d` behind an HTTPS reverse proxy on port 8000. Keep the database and uploads on the supplied persistent volume. Back it up using SQLite's backup API and back up the uploads directory. Run exactly one worker instance.
3. Visit `/sajjal/` and `/ankush/` on the service origin. These are complete standalone forum pages. Each links back to its owner's website. Email links return to these service pages.
4. Set `forum_api: "https://YOUR-SERVICE-ORIGIN"` in Sajjal's `_config.yml` to connect the `/forum/` page. Merge the forum page, assets, navigation link, guide index, and post-layout link together through the normal GitHub Pages workflow.
5. Ankush's accessible repository has a compiled website on `gh-pages` and no application source on `main`. Use the supplied `web/ankush.html` as the starting forum page in the actual source project, copy `forum.css` and `forum.js` to its assets, and set `data-api` to the service origin. Alternatively link the site's Discussions navigation directly to the standalone `/ankush/` page. Add an “Ask about this guide” link with `?guide=ENCODED_ARTICLE_URL&title=ENCODED_TITLE`.
6. Verify both email senders and complete a real email verification, upload, reply, subscription, and accepted-answer journey before opening the forum to visitors.

## Guide answers

Sajjal's Jekyll `forum-guide-index.json` exports published posts and their existing `faqs` front matter. Jekyll's existing `future: false` setting excludes unpublished posts. The worker uses structured owner-written FAQ answers, a near-identical question match, matching explicit version numbers, and same-owner HTTPS source URLs. It checks queued questions after one minute, on a 15-second loop. It skips automatic answers when a community reply already exists. Follow-ups are checked only when the contributor marks them as a question.

Only supported matches receive an automated answer under the owner's name, visibly labeled with a source link. General free-form AI synthesis and interpreting screenshots or videos are not implemented. The ten-minute target depends on a running worker and reachable guide index. A guide service failure leaves the job pending for retry. SMTP delivery has retries and an owner-visible failure queue. An SMTP server accepting a message immediately before a worker crash can result in a repeated email, using the same Message-ID.

Ankush's index must be generated from his actual published blog source using this structure. An empty list is valid until FAQ content is available.

```json
[{"title":"Guide title","url":"https://www.ankushkaura.in/blog/example/","faqs":[{"q":"The complete question?","a":"The owner-written answer."}]}]
```

## Participation and moderation

Private name and email are required to ask a question or reply by name. Phone is optional. Verification emails create a single-use, 30-minute sign-in link. Verified browser sessions last 30 days. The question author remains anonymous across the thread. Other contributors choose a public name or a guest label. Guests can reply without email and can verify an email to receive updates. Subscribers choose all updates, direct replies, or no email. Each email has a signed unsubscribe link. Named replies and follow-up questions retain their exact parent and permanent URL. Dates include the year, time, and IST zone.

Owner tools accept the relevant site's key in browser memory, show report and mail queue counts, enable owner replies and hiding posts. The authenticated API also supports removing a specific attachment with `POST /api/{site}/moderate` and `{ "post": "POST_ID", "attachment": "FILE_ID", "hidden": false }`. Accepted answers and discussion resolution are available to the question author. Owners can resolve through the same endpoint using their owner key. Keep keys out of public page source.

Files are limited to five per post and 25 MB each. Images are re-encoded to remove metadata. PDF, MP4, and UTF-8 logs download as attachments with `nosniff`. Only published, visible attachments are accessible. Malware scanning and video transcoding are not included. Configure an upload scanning service before accepting untrusted production files if your hosting policy requires it. Server-side rate limits use the direct connection address. Configure a trusted proxy address strategy for your reverse proxy before a public launch so visitors do not share a single rate bucket.

## Checks

```sh
python -m pip install -r requirements.txt
python -m unittest -v
node --check web/forum.js
```

The focused tests exercise public-field privacy, tenant isolation, anonymous guests, impersonation protection, email queue recipients, parent integrity, token purposes and single-use links, uploads and moderation, unsubscribe, guide idempotency, and duplicate-answer suppression. A real SMTP round trip, production deployment, Jekyll build, and integration with Ankush's original application source require their corresponding environment and access.
