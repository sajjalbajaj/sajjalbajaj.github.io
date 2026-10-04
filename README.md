# Sajjal Bajaj: personal site (www.sajjalbajaj.in)

A Jekyll site published to GitHub Pages by the "Build and deploy site" GitHub Action (on push to `main`
and daily, so future-dated posts publish on their date). Light/dark theme, scroll reveals, count-up stats,
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
- Case studies in `_case_studies/` need `status: documented` (approved real project) or
  `status: representative` (illustration, labelled on the page). See `TEMPLATE.md`.
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
The blog is powered by **Jekyll**, which GitHub Pages builds automatically, you don't
need Ruby or any local tools to publish.

1. Create a file in `_posts/` named `YYYY-MM-DD-title-with-dashes.md`.
2. Start it with this header, then write in Markdown:
   ```markdown
   ---
   layout: post
   title: "Your post title"
   date: 2026-07-24 09:00:00 +0530
   tags: [ERP, Power BI]
   description: "One-line summary used for SEO and social link previews."
   ---

   Your **Markdown** content here…
   ```
3. Commit and push:
   ```bash
   git add . && git commit -m "post: your title" && git push
   ```

GitHub rebuilds and publishes within a minute or two. The post appears on the **Blog**
page (`/blog/`) with its date, reading time and tags, and is added to the **RSS feed**
(`/feed.xml`) and `sitemap.xml` automatically.

Tips:
- Reuse the same tag spelling so the tag filter groups posts correctly.
- The first paragraph becomes the card excerpt.
- SEO / Open-Graph meta tags are generated per post for good Google + LinkedIn/X previews.
