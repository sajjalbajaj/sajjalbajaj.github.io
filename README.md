# Sajjal Bajaj: personal site (www.sajjalbajaj.in)

A Jekyll site published to GitHub Pages by the "Build and deploy site" GitHub Action (on push to `main`
and daily at 10:30 IST, so future-dated posts publish on their date). Light/dark theme, scroll reveals, count-up stats,
a canned Q&A and a canned chat assistant; no front-end framework.

## How the site is put together (Oct 2026)

- `_includes/seo.html` renders every page's title, description, canonical, robots, Open Graph/Twitter tags and
  one JSON-LD graph (Person + WebSite + one page entity). It replaces `{% seo %}`; don't add page-level
  BlogPosting/Article JSON-LD elsewhere. Useful front matter: `seo_title`, `description`, `schema_type`,
  `last_modified_at` (also drives sitemap `lastmod` and the "Updated" date on posts), `robots`, `about_event`.
- `_includes/analytics.html` + `assets/track.js`: GA4 and contact-click events, off until `analytics.ga4_id`
  is set in `_config.yml`.
- `_includes/service.html` renders `/services/*` pages from front matter (problems, suitable, scope,
  deliverables, process, dependencies, evidence, related, faqs).
- `/odoo/` groups posts by their `hub:` front-matter key (planning, industries, inventory, purchase,
  manufacturing, sales, accounting, website, marketing, services, hr, integrations, admin). Give every new
  Odoo post exactly one `hub`. Titles starting "How to Set Up" or "How to Build" get the "Setup guide" badge
  and are listed first.
- `/odoo/` search (`assets/odoo-search.js`) suggests subjects and guides as you type. It indexes the page's
  own lists (title, tags, description), so new posts are searchable automatically. Odoo shorthand lives in
  its `ABBREV` and `RELATED` maps.
- Case studies in `_case_studies/` need `status: anonymised` (real project, client name withheld),
  `status: documented` (client approved its name) or `status: representative` (illustration). Each status is
  labelled on the page; `order:` sets the position on /case-studies/. Write in your own words, with no client
  names or cities and no links to the MSS website. See `TEMPLATE.md`.
- `content-review/` is local-only and gitignored (the repository is public).

## Local preview

GitHub Pages builds the site itself; local preview is optional. With Ruby 3.3 and Bundler installed:

```
bundle install
JEKYLL_ENV=production bundle exec jekyll build   # output in _site/
bundle exec jekyll serve                         # http://localhost:4000
```

## Save / print as PDF
Click **“Save PDF”** in the hero (or press `Ctrl/Cmd + P`). A print stylesheet lays the page out
cleanly on A4, hides the nav / animations / “Ask” section, and drops shadows and background.

## Add your avatar (photo or animated GIF)
The hero avatar is **wired to `assets/sajjalbajaj.webp`** (with a `.jpg` fallback) and is animated with a spinning ring,
a gentle float, a slow Ken-Burns zoom, and a light shine sweep. If the file is missing it falls back
to the “SB” monogram automatically.

1. To swap it, replace `assets/sajjalbajaj.webp` and `.jpg` (or change the `src` of `avatar__img` in
   `index.html` to your file) and reload the page.
2. To fine-tune the crop, tweak `object-position` on `.avatar__img` in `styles.css`.
3. Want a moving **GIF/MP4** avatar (a “live portrait”)? Save it into `assets/` and point the
   `src` of `avatar__img` in `index.html` at it (e.g. `assets/profile.gif`).

> Note: a **true motion GIF** like the reference (where the person subtly moves) is AI *video*
> generation and can't be produced here. Make one from your photo with an image-to-video /
> live-portrait tool (e.g. **Runway, Pika, Kling, Hedra, or LivePortrait / D-ID**), export a GIF or
> short MP4, and drop it in per step 3.

## Editing content
The homepage is `index.html` (rendered through `_layouts/default.html`):
- **Hero / headline**: the `.hero` section.
- **Experience**: the `.exp-group` blocks (one per company; roles are `<li class="timeline__item">`).
- **Skills**: the `.skillgroup` lists. Shown as tag pills (LinkedIn doesn't expose numeric
  proficiency, so no percentages were invented; add/remove tags freely).
- **Certifications**: the `.certgrid` list (expiration dates intentionally omitted).
- **“Ask my portfolio” Q&A**: edit the `QA` array near the bottom of `script.js`.
- **Contact links**: the phone is a `tel:` link and the email a `mailto:` link (Contact section
  + footer); the nav has a LinkedIn icon.
- **WhatsApp button**: the floating green button (bottom-right) opens
  `https://wa.me/919914089472?text=…`. To change the number or the prefilled message, search
  `_layouts/default.html` (and the homepage contact section in `index.html`) for `wa.me`.

## Customise the look
Open `styles.css` and tweak the tokens under `:root` (light) and `:root[data-theme="dark"]` (dark):
colors, radius, fonts. The accent is amber (`--accent: #F2A81D`); change it in both blocks. Text links use
`--link` (darker amber in light mode for WCAG AA contrast).

## Accessibility & performance
- Semantic landmarks, keyboard focus styles, `aria-live` on the Q&A answer.
- Full `prefers-reduced-motion` support (animations, typing, and count-up all disable).
- Theme preference persists via `localStorage` and respects your OS setting on first visit.
- No external JS/CSS except Google Fonts (and Google Analytics, only if a GA4 ID is configured).

## Writing a new blog post (daily)
The blog uses Jekyll and GitHub Pages. Start each article from `blog-post-template.md`.

1. Create `_posts/YYYY-MM-DD-title-with-dashes.md`. Set the publication date and time,
   description, eight relevant existing tags, subject hub and two or three useful FAQs.
2. Open with `**Short answer:**` and answer the title directly. Explain version and
   edition limits, use natural question headings where useful, and include practical
   examples. Use British spelling and avoid em and en dashes.
3. Check technical claims against specific official sources. Verify internal links are
   published by the article's scheduled time. Clearly label historical previews and
   illustrative examples. Do not invent results, prices or product capabilities.
4. Run `ruby scripts/check_content.rb --strict _posts/YYYY-MM-DD-title-with-dashes.md`.
   Review the rendered article when a Jekyll environment is available. The checker
   validates structure; source accuracy and usefulness require editorial review.
5. Review the diff and commit only the intended files. Push when publication is authorised.
   Scheduled posts appear after a successful build that includes their publication time.

The content quality workflow checks all articles and applies the stricter standard to
new files. It reports separately from deployment. Use `ruby scripts/check_content.rb --json`
for the full editorial audit; missing FAQs or question headings in older posts are review
prompts, not instructions to add repetitive filler.

Jekyll adds published posts to the blog, RSS feed, sitemap and `llms.txt` directory. The
post layout renders visible FAQs and their matching structured data from the same fields.
Do not add duplicate schema blocks to article bodies. Clear answers and accurate sources
help readers and search systems, but do not guarantee rankings or AI citations.
