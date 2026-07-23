# Sajjal Bajaj — Portfolio

A single-page, interactive personal portfolio. **Plain HTML, CSS & JavaScript — no build step,
no frameworks, no dependencies.** Warm-minimal design with a light/dark theme, animated hero,
scroll reveals, count-up stats, and a canned "Ask my portfolio" Q&A.

## Files
```
myPage/
├─ index.html        # all content & structure
├─ styles.css        # design tokens (light + dark), layout, components, animations, print
├─ script.js         # theme toggle, scroll reveal, count-up, nav, avatar fallback, Ask Q&A
├─ README.md
└─ assets/
   ├─ favicon.svg
   └─ profile.gif     # (optional) your avatar — see below
```

## View it
Just open `index.html` in any browser (double-click it). No server needed.
For a nicer local dev experience you can optionally run any static server, e.g.:
```
npx serve .
# or
python -m http.server
```

## Save / print as PDF
Click **“Save PDF”** in the hero (or press `Ctrl/Cmd + P`). A print stylesheet lays the page out
cleanly on A4, hides the nav / animations / “Ask” section, and drops shadows and background.

## Add your avatar (photo or animated GIF)
The hero avatar is **wired to `assets/sajjalbajaj.png`** and is animated with a spinning ring,
a gentle float, a slow Ken-Burns zoom, and a light shine sweep. If the file is missing it falls back
to the “SB” monogram automatically.

1. To swap it, replace `assets/sajjalbajaj.png` (or change the `src` of `avatar__img` in
   `index.html` to your file) and reload the page.
2. To fine-tune the crop, tweak `object-position` on `.avatar__img` in `styles.css`.
3. Want a moving **GIF/MP4** avatar (a “live portrait”)? Save it into `assets/` and point the
   `src` of `avatar__img` in `index.html` at it (e.g. `assets/profile.gif`).

> Note: a **true motion GIF** like the reference (where the person subtly moves) is AI *video*
> generation and can't be produced here. Make one from your photo with an image-to-video /
> live-portrait tool (e.g. **Runway, Pika, Kling, Hedra, or LivePortrait / D-ID**), export a GIF or
> short MP4, and drop it in per step 3.

## Editing content
Everything is straightforward HTML in `index.html`:
- **Hero / headline** — the `.hero` section.
- **Experience** — the `.exp-group` blocks (one per company; roles are `<li class="timeline__item">`).
- **Skills** — the `.skillgroup` lists. Shown as tag pills (LinkedIn doesn't expose numeric
  proficiency, so no percentages were invented — add/remove tags freely).
- **Certifications** — the `.certgrid` list (expiration dates intentionally omitted).
- **“Ask my portfolio” Q&A** — edit the `QA` array near the bottom of `script.js`.
- **Contact links** — the phone is a `tel:` link and the email a `mailto:` link (Contact section
  + footer); the nav has a LinkedIn icon.
- **WhatsApp button** — the floating green button (bottom-right) opens
  `https://wa.me/919914089472?text=…`. To change the number or the prefilled message, search
  `index.html` for `wa.me`.

## Customise the look
Open `styles.css` and tweak the tokens under `:root` (light) and `:root[data-theme="dark"]` (dark) —
colors, radius, fonts. The accent is amber (`--accent: #F2A81D`); change it in both blocks.

## Accessibility & performance
- Semantic landmarks, keyboard focus styles, `aria-live` on the Q&A answer.
- Full `prefers-reduced-motion` support (animations, typing, and count-up all disable).
- Theme preference persists via `localStorage` and respects your OS setting on first visit.
- No external JS/CSS except Google Fonts.

## Possible next steps
- A **live** AI-powered “Ask my portfolio” (needs a small backend + API key — a follow-up).
- A **⌘K command palette** for quick section jumps.
- A **Projects / case-studies** section, or a **Writing/blog** section.
- Deploy free on GitHub Pages, Netlify, or Vercel (drag-and-drop the folder).
