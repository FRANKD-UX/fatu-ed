# FATU.E.D — Website

A local Next.js App Router corporate website with strict TypeScript, React, SCSS Modules and ESLint. No Tailwind, UI framework, backend or external font requests.

## Local review

Node.js 22 LTS is recommended. Install the locked dependencies with `npm ci`, then run:

```sh
npm run dev
```

Open http://localhost:3000. To validate and preview a production build:

```sh
npm run lint
npm run typecheck
npm run build
npm start
```

## Source map

- `src/app/`: home, about, general-trading, designs, academy and contact routes; shared layout, 404, metadata routes.
- `src/components/`: shared layout/navigation, buttons, homepage styling, division page layouts and typed gallery.
- `src/config/site.ts`: authoritative business contact details and optional domain configuration.
- `src/content/`: company facts, navigation, divisions, services and approved gallery records.
- `src/styles/`: shared colour tokens, layout mixin, breakpoints and global accessibility styles.
- `public/images/`: reserved directories for approved original client media.

Most components render on the server. Navigation uses client-side state; individual gallery photographs use a small client component to handle image-load failures. Its mobile disclosure supports Escape, outside clicks, focus leaving the menu, and route selection. Active links use `aria-current`; pages include a skip link, semantic headings, visible focus and reduced-motion support.

## Content and media

The four Phase 2 pages develop the supplied company story, design services and proposed academy concept. General Trading is presented through documented enquiry activities; no product catalogue or named customer sectors have been supplied. The academy is consistently identified as a future initiative, with no current enrolments, accreditation, course fees or payments. Contact pathways open real email, telephone or WhatsApp links. The client-side enquiry composer validates a name and message, supports four topics and prepares an editable message preview. Visitors must open WhatsApp or an email app and send the draft themselves; the website never claims receipt.

Photography is deliberately postponed for this implementation. Untracked founder/design photograph files are now present locally, but are not reviewed, approved or referenced by the pages; retain placeholders for this work. The source archive audit in Phase 2 found no images. No stock or generated photographs have been substituted. The header retains its existing typographic business name. Home and Our Story share a labelled 4:5 founder portrait placeholder. Trading has an optional 3:2 media placeholder; Designs reserves a 4:5 frame for each of its six service categories; the proposed academy has two clearly labelled future-setting placeholders. No placeholder is interactive or represents a verified project or facility.

Add approved local media under `public/images/` and records in `src/content/galleries.ts` after inspection. Records require the original dimensions, descriptive alt text and an accurate category; optional captions must be verified. The gallery groups photographs by category and uses lazy, optimized Next.js images. Consistent 4:5 frames use `object-fit: contain` to retain complete photographs and watermarks. Native links open full originals in the same tab; the browser Back control returns to the portfolio. There is no modal or unnecessary category-filter interface. Missing image loads show a text fallback, and incomplete records are excluded. Empty galleries make no image requests. `Gallery` optionally accepts placeholder labels and contextual text. A valid image record whose category exactly matches a placeholder label replaces that category’s placeholder; unmatched real categories remain visible. The original empty-state behavior remains available when no placeholder categories are supplied. `MediaPlaceholder` accepts a label, contextual text and a 4:5, 3:2 or 16:9 aspect ratio.

Typography uses local Georgia and Arial/Helvetica fallbacks for fast, network-independent rendering. The design uses navy, royal blue, restrained gold, warm neutral backgrounds, fine borders and editorial spacing. Trading, Designs and Academy receive distinct tonal treatments within the shared system.

## Domain and SEO

Copy `.env.example` to `.env.local` only when a domain is confirmed. Set `NEXT_PUBLIC_SITE_URL` to that domain's HTTP(S) origin and rebuild. Page-specific descriptions, titles and Open Graph metadata are included. Canonicals and sitemap URLs appear only with a configured domain. Without one, robots disallows crawling and the sitemap contains no invented URLs. Set the domain before public release.

## Phase 2 handoff

See [PHASE2.md](PHASE2.md) for the page changes, file inventory, asset audit, verification results and remaining client dependencies. The report describes the original Phase 2 scope. See [UX-HANDOFF.md](UX-HANDOFF.md) for the subsequent layout, placeholder and enquiry-composer changes and current verification status. Verified business content, contact configuration and the existing gallery image behavior remain intact.

Outstanding client material: approved original logo and brand files, a founder portrait, identifiable design photographs with captions and permissions, General Trading product/service details and relevant photographs, and any genuine workshop or proposed academy imagery. The image galleries are implemented but cannot display actual company work until verified photographs are supplied.

A real enquiry delivery service remains a separate future phase. The current composer is entirely client-side, stores no enquiry on the website, and has no receipt tracking. Academy drafts include an explicit acknowledgement that the initiative is not operating or accredited, enrolments are closed and no place is reserved. No database, CMS, authentication or payments have been added.

Division CTAs use `/contact?topic=designs#enquiry`, `?topic=trading` or `?topic=academy`; unrecognised topics fall back to General enquiry. Without JavaScript the direct phone, email and WhatsApp contact links remain available. No server runtime or API route is required.

Do not commit, push or deploy without explicit approval.

## GitHub Pages publishing

The workflow in `.github/workflows/pages.yml` validates the site, exports static files and publishes `out/` to GitHub Pages when `main` is pushed. Pages must use **GitHub Actions** as its publishing source. GitHub supplies the site origin and repository subpath to the build; links, canonical URLs, sitemap entries and original-image paths preserve that subpath.

Local `npm run dev`, `npm run build` and `npm start` retain their normal Next.js server behavior. To reproduce the GitHub Pages export locally:

```sh
STATIC_EXPORT=true NEXT_PUBLIC_BASE_PATH=/fatu-ed NEXT_PUBLIC_SITE_URL=https://frankd-ux.github.io/fatu-ed/ npm run build
STATIC_EXPORT=true NEXT_PUBLIC_BASE_PATH=/fatu-ed NEXT_PUBLIC_SITE_URL=https://frankd-ux.github.io/fatu-ed/ npm run check:export
```

Serve `out/` with a static server mounted at `/fatu-ed/`; `next start` is for the normal server build, not a static export. GitHub Pages builds use trailing slashes so each route has an `index.html`, and disable server-side image optimization because Pages has no Node.js server. Approved images remain lazy-loaded with their original dimensions and aspect-ratio treatment.

Source archives, local environment files, tool credentials, dependencies and generated output are excluded from Git. Future form backends remain separate from this static hosting setup.
