# Pontus Filén Portfolio

A simple static portfolio website hosted on Vercel. No build step, no
package manager, no framework — plain HTML/CSS/JS, deployed as-is.

## Design

"Refined warm-dark" theme: near-black background (`#0d0b09`), single
amber accent (`#f0a860`), Space Grotesk for body text and JetBrains Mono
for technical/label text. Single-page layout with sticky nav, animated
neural-field canvas hero, scroll-reveal animations, and a scroll progress
bar.

## Structure

- `index.html` — single-page site with sections: hero (`#top`), about
  (`#about`), education (`#education`), work (`#work`, project grid),
  contact (`#contact`). Sticky nav + mobile hamburger drawer. Includes a
  hidden full-screen project detail overlay at the bottom of the body.
- `style.css` — all styling, organized by section with CSS custom
  properties (`:root`) for the color palette. Includes `.tag`/`.mono`
  helper classes, `[data-reveal]` scroll-reveal styles, and responsive
  rules (mobile breakpoint at 760px).
- `script.js` — all interactivity:
  - `projects` object: data for each of the 6 project cards (category,
    title, overview, tags, screenshots, role, github/pdf links, etc.)
  - mobile menu toggle, scroll progress bar, scroll-down hint fade
  - `IntersectionObserver` for `[data-reveal]` scroll animations
  - project overlay open/close — populates the overlay DOM from the
    `projects` data when a `.project-card[data-pid]` is clicked
  - canvas neural-field animation (drifting nodes that connect to cursor)
- `assets/` — images, screenshots, and PDFs. Note: some filenames are
  mixed-case (e.g. `kex_level.PNG`, `movieline.PNG`) and must match
  exactly since Vercel's filesystem is case-sensitive.
- `projectpages/*.html` — legacy per-project pages from the old design,
  no longer linked from `index.html` (project details now use the in-page
  overlay). Left in place but unused.

## Conventions

- Adding a new project = add a `.project-card[data-pid="..."]` to the
  `projects-grid` in `index.html` (with thumbnail, category, title, desc,
  tags), and add a matching entry to the `projects` object in `script.js`
  with the full case details (overview, screens, features, role,
  github/pdf links, inProgress/status).
- Tags use `<span class="tag mono">` elements.
- In-progress projects get `inProgress: true` + a `status` string in
  `script.js`, which renders the amber status pill in the overlay, and a
  `.project-badge` ("IN PROGRESS") on the card.
- No JS framework — keep edits plain HTML/CSS/vanilla JS.
- Deployment is automatic via Vercel on push — no build/test commands.
