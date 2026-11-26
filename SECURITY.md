# Reporting a security concern

Email sajjalbajaj@gmail.com with the subject "Website security report". Include the affected
page or endpoint, a description of the issue and the minimum steps needed to reproduce it.
Please keep reports private and avoid including passwords, tokens or visitor contact data.

This repository contains a static Jekyll website and forum backend source. Report issues
affecting either part through the same address. Test only with accounts and data you control.
Do not download other visitors' records or disrupt the website to demonstrate a finding.

## Maintaining the repository

GitHub Actions are pinned to commit hashes. Dependabot proposes updates for those pins,
Ruby gems and the legacy Python forum service. Review and test updates before merging.
CodeQL analyses JavaScript, TypeScript and Python on pull requests, main updates and weekly.

The Pages build checks tracked source and generated output for private files and common
credential formats before uploading the artifact. This guard cannot detect every secret or
replace review. GitHub secret scanning and push protection should remain enabled. Report
suspected credentials without copying their values into issues or build logs.

Build jobs have read access to repository contents. Only the deployment job receives Pages
write access and the deployment identity token. Pull requests build and validate the site
without uploading or deploying a Pages artifact. Git checkouts do not retain credentials.

## Controls managed outside the source code

Protect the main branch against deletion and force pushes, and require the build check before
merging. Review collaborators and GitHub Actions permissions. Use passkeys or two factor
authentication for GitHub, the domain registrar and Supabase, and retain recovery information
securely. Verify the custom domain in the GitHub account's Pages settings.

The static site is served by GitHub Pages. Custom HTTP response headers require a hosting or
proxy configuration that supports them. Do not assume an `_headers` file changes GitHub Pages
responses. Test a Content Security Policy in report-only mode before enforcing it, accounting
for analytics, fonts, the forum API and inline scripts. Apply HSTS only after validating HTTPS
on the hostnames it will cover.

Forum database tables and storage must remain inaccessible directly to browser database roles.
The Edge Function mediates public reads and authenticated mutations. Keep privileged keys in
server secrets. Review upload scanning, total storage limits, abuse controls and restoration
of backups separately; source analysis does not establish that these controls are configured.
