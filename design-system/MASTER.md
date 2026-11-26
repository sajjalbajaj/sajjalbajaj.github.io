# myPage design system

Minimal canonical spec for sajjalbajaj.github.io. **Code tokens live in `styles.css` `:root`**; this file explains them. Change both together. Scaled to a personal site: no component library.

## Audience and direction
Prospective clients and employers evaluating an Odoo/ERP and software consultant. Warm, credible, readable: warm-neutral surfaces, one amber accent, generous radii, soft shadows.

## Colour roles (light / dark)
| Role | Token | Light | Dark | Use |
| --- | --- | --- | --- | --- |
| Page background | `--bg` / `--bg-2` | #FBF7F0 / #F5EEE1 | #16130E / #1C1811 | Body, alternating bands |
| Surface | `--surface` | #FFFFFF | #221D16 | Cards |
| Accent | `--accent` (`-strong`, `-soft`) | #F2A81D | #F7B733 | Highlights, primary buttons. **Not for text on light** |
| Link text | `--link` | #8A5600 (6:1 on white) | #FFC960 | All inline links |
| Text / muted / faint | `--text` `--muted` `--faint` | #3A342E / #7A736A / #A99F92 | #F2EBDD / #B6AB98 / #857B6B | `--faint` only for decorative or large text |
| Hairline | `--hairline` | #ECE4D7 | #332C22 | Borders, dividers |
Contrast: body text ≥ 4.5:1, large text and UI ≥ 3:1. Verify any new pairing before use.

## Typography
- Headings `--font-head` Poppins; body `--font-body` Inter; system fallbacks.
- Display sizes use `clamp()` (hero name 2.1–3.6 rem; stats 1.8–5 rem); body ~1 rem; small labels ≥ .82 rem.

## Space, size, layout
- Max content width `--content-max` 1120px; nav height `--nav-h` 66px.
- Breakpoints (max-width): 1024 (navigation), 860, 720, 560, 480, 420 px. Mobile-first content, no horizontal scroll.

## Shape and depth
- Radii: `--radius` 22px (cards), `--radius-sm` 14px (controls), `--radius-pill` 999px (chips, buttons).
- Elevation: `--shadow-sm` (resting cards), `--shadow` (raised), `--shadow-lg` (hero/modal); stronger values in dark mode.

## Components (existing classes)
Nav (`.nav`, theme toggle), hero (`.hero`), service cards (`.service-card`, `.svc`), blog cards (`.blog-card`), post (`.post`, `.prose`, `.share`, `.related`), timeline (`.timeline`, `.exp-group`), FAQ (`.faq`), CTA (`.talk`, `.wa`), footer. States to keep for interactive elements: default, hover, `:focus-visible`, active, disabled.

## Motion
- Easing `--ease` cubic-bezier(.22, 1, .36, 1). Animate transform and opacity only.
- `prefers-reduced-motion: reduce` disables animation in CSS (`styles.css` line ~518) and in `script.js`. Every new animation must respect both.

## Accessibility and responsive rules
Visible focus on every control; descriptive link text; alt text on content images; touch targets ≥ 44px; theme toggle keeps its accessible name in both themes.

## Assets
Icons are inline SVG; images optimised before commit. Licensed assets only, with their source recorded in the post front matter.
