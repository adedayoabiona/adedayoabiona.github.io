# adedayo abiona / portfolio

Personal site for Adedayo Abiona, Data Engineer. Vite + React + TypeScript + Tailwind v4,
deployed to GitHub Pages.

## Develop

```bash
npm install && npm run dev
```

`npm run build` type-checks with `tsc -b` before bundling, so a type error fails the build
(and therefore the deploy). `npm run lint` runs oxlint.

## Where the content lives

All copy is data, not markup. Edit these rather than the components:

| File | Contents |
| --- | --- |
| `src/data/profile.ts` | Name, role, tagline, contact links, summary, hero stat strip |
| `src/data/experience.ts` | Roles, bullets, per-role tech stack |
| `src/data/skills.ts` | Skill groups, certifications, awards, education |
| `src/data/products.ts` | Stears products (problem / what I built / launch post, or a `status` if pre-launch) |
| `src/data/projects.ts` | Curated public GitHub repos, plus nanodegree coursework |
| `src/data/research.ts` | The MIRNet paper: authors, journal, abstract |
| `src/data/interests.ts` | Running and football ("away from the stack", section 07) |

`src/components/PipelineDiagram.tsx` is the animated hero SVG. Its layout is a fixed
five-column grid in SVG user units (`COL_X`, `ROW_Y`, and friends at the top of the file);
change those constants rather than individual coordinates.

## Deploying

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds and publishes to Pages.
One-time setup: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

The site is built for a GitHub **user** site, repo named `Adedayo19.github.io`, served from
the domain root, so `base` is `/` in `vite.config.ts`. If you host it in a normal project repo
instead, set `base: '/<repo-name>/'` or the CSS and JS will 404.

## House rules for content

- **No em dashes or en dashes anywhere.** Use commas, colons, parentheses or a full stop.
- **Strictly monochrome.** Every colour token in `src/index.css` has `R == G == B`. Don't reach
  for Tailwind's `zinc`/`slate`/`gray` scales, they are subtly blue-tinted. Hierarchy comes from
  lightness, weight and underlines, never hue.

## Accessibility and motion notes

- Scroll-reveal is a progressive enhancement. The hiding CSS is gated behind a `.js-reveal`
  class that `useReveal` adds at runtime, and the hook drops the gate if the
  IntersectionObserver never fires, so the page can't render blank.
- `prefers-reduced-motion` disables the reveal, the marching pipeline dashes and the caret blink.
- The pipeline diagram scrolls inside its own container on narrow screens; the page itself
  never scrolls horizontally.
