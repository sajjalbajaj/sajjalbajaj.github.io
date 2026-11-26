# Hosted forum backend

The production forum API is the Supabase Edge Function named `forum` in the existing Sajjalbajaj.in project. `_config.yml` connects `/forum/` to its HTTPS endpoint. The API supports both site identities and keeps participant contact fields server-side.

## Deployment

Deploy the files in `functions/forum/` together, explicitly setting the entrypoint to `index.ts` and the import-map path to `deno.json`. Platform JWT verification is disabled because public reads and anonymous guest replies are supported. The function validates its own expiring HMAC session tokens for every identity-bearing request, validates the site scope, authenticates owner actions, and authenticates the scheduled worker separately.

`forum.sql` records the additions to the existing forum tables. The original tables are preserved. Database operations use backend-only functions with caller privileges and transaction boundaries. Browser database roles are denied access to private tables and cannot execute the mutation functions. `scheduler.sql` configures the queue invocation once per minute. Reapplying the policy statement in that file requires checking whether the policy already exists.

Signing and worker secrets are generated inside the database and stored in `forum_settings`, with RLS and privileges denying browser access. They are never embedded in frontend code. Supabase's privileged API key is read from the function environment. Email provider credentials are read only from function secrets.

## Complete email delivery

In the Supabase dashboard, open Edge Functions → Secrets and configure these values.

| Secret | Value |
| --- | --- |
| `BREVO_API_KEY` | A transactional API key from the owner's Brevo account |
| `MAIL_FROM_SAJJAL` | A verified sender address for Sajjal's forum |
| `MAIL_FROM_ANKUSH` | A verified sender address for Ankush's forum, when launching that site |

The public `/api/sajjal/config` response reports `email_ready` as a boolean. Until the values are configured, verification requests return an explicit setup message and do not save the submitted contact details. Queued notifications are retained and do not consume retries while neither email sender is ready. Each forum requires its own configured sender. The scheduled processor sends queued verification messages and reply notifications once configured.

Private name and email are required for new questions and named replies. The guest option supports replies without an email. People who want email notifications can verify an address before posting as a guest. The original question author always keeps the public label “Question author”. Named contributors choose a separate public display name. Author, contributor, and guest sessions are scoped to their site.

For owner moderation, verify the configured owner email and open Owner tools with the access-key field empty. Sajjal's default owner address is the public contact address already present in the website source. Set `FORUM_OWNER_EMAIL_SAJJAL` or `FORUM_OWNER_EMAIL_ANKUSH` in function secrets to configure another owner address. An existing `FORUM_ADMIN_SAJJAL` or `FORUM_ADMIN_ANKUSH` key also works. The function never accepts a public display name as proof of ownership.

## Storage and processing

Attachments use the private `forum-attachments` bucket. Downloads pass through the API, which checks the publication, visibility, and site of the owning post. JPEG EXIF/IPTC/comment metadata and PNG text metadata are stripped. The browser converts WebP images to JPEG before upload. PDF, MP4, and text attachments download with `nosniff`. Maximum file size remains 25 MB and a post accepts five attachments. Unattached uploads remain private and expire after 24 hours. The queue worker removes expired uploads to reclaim the free storage allowance. Malware scanning and video transcoding are not included.

The scheduled worker checks supported FAQ answers from each site's published guide index. It preserves source links and owner attribution, suppresses a guide reply when the community already answered the parent, and uses an idempotency key to prevent duplicate posts. General AI generation and interpreting attached images or videos require a separate model integration.

Notifications are queued transactionally with replies. Each verified subscriber receives an individual email, according to the subscription mode. The contributor who just posted is excluded. Messages include direct reply links and a signed unsubscribe link. Worker leases prevent normal concurrent delivery. As with SMTP-style delivery, a crash after the provider accepts an email can cause a retry. Keep this in mind before bulk retrying a failed queue.

## Verification

Tests against the deployed API cover question and reply retries, private-field projection, site isolation, guest participation, owner impersonation, accepted answers, subscription changes, origin checks, and storage visibility. Test identities and discussions are removed after verification. Real email verification and delivery must be checked after the provider configuration is complete.

Ankush's website still requires write access and its actual application source for source-level integration. His endpoint can be used from his website once those are available. His published guide index must be added separately.
