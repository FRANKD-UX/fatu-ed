# FATU.E.D — Structure, placeholders and enquiry handoff

Implementation and local verification: 9 November 2026. No commit, push or deployment was made for this work. The published preview remains on the previously approved version.

## Page changes

| Page | Implemented changes |
| --- | --- |
| Home | Retained identity, introduction, division descriptions and editorial graphics. Division destinations now use standard buttons. Added explicit academy status, improved tablet division layout, stacked narrow-screen CTAs and hero transitions, and reused the stable 4:5 founder placeholder. |
| Our Story | Added a two-column founder profile with a labelled 4:5 portrait placeholder, stacking on mobile. Preserved founder narrative, 1996/2003/2014 timeline, mission, vision, values and founder message. |
| General Trading | Added direct quotation-enquiry actions, preselected Trading composer links, a quotation-specific WhatsApp action and an optional 3:2 business-media placeholder. Existing enquiry activities, checklist and availability safeguards remain. No products, sectors or capabilities were added. |
| Designs | Preserved all six services and the order discussion steps. Added six labelled 4:5 service-category frames, a clear statement that placeholders are not completed work, a preselected Designs composer action and contextual WhatsApp action. |
| Academy | Strengthened the hero status and added a preselected expression-of-interest journey. Added clearly labelled proposed classroom/training placeholders. Preserved learning areas, the 20-learner future ambition, accreditation/college safeguards and closed-enrolment wording. |
| Contact | Grouped contact facts with clearer separators; retained configured phone, email, WhatsApp, location and hours. Replaced the future-form notice and repeated pathways with the four-topic client-side composer. Direct contact links remain available without JavaScript. |

## Reusable components and shared behavior

- `MediaPlaceholder`: semantic figure/caption, label, optional context and 4:5, 3:2 or 16:9 aspect ratio. No image requests, fake alt text, links or focus targets.
- `Gallery`: optional category placeholders; approved records with an exact matching category replace the relevant placeholder. Additional real categories remain visible. Existing record validation, lazy images, captions, original-image links, failure fallback and legacy empty state remain functional. `GalleryPhoto` is unchanged.
- `EnquiryComposer` and `enquiry.ts`: client form, validation, draft preview and encoded handoff URLs. No backend or new dependency.
- `ContactBand`: optional contextual contact destination and label, retaining direct WhatsApp behavior.
- Existing buttons and brand tokens are retained. Shared layouts allow grid content and footer addresses to shrink; narrow-screen CTA groups stack. Hero CTA contrast uses the existing dark-background tokens.
- Navigation retains active states, Escape, outside-click and focus-leaving closure. Selecting the current page returns focus to the mobile toggle; switching to desktop while the toggle is focused moves focus to the current navigation link. The main skip-link target is programmatically focusable. The 404 page now offers Home and Contact actions.

## Enquiry behavior and limitations

Visitors select General enquiry, Designs enquiry, General Trading enquiry or Academy expression of interest. Name and message are required (80 and 1,000 characters maximum); whitespace-only entries are rejected. Errors are linked to fields, marked with `aria-invalid`, announced through a status message and focus moves to the first invalid field.

A valid draft opens a review step with keyboard focus. Editing a field removes the old preview. The visitor can open a populated WhatsApp message or email draft, or copy the preview manually if their app does not open. The website does not send, store, track or confirm receipt of enquiries. The external app must be available and the visitor must send the message themselves. No successful-submission state is shown.

Academy messages include the explicit acknowledgement that the academy is not operating or accredited, enrolments are closed and no place is reserved. There are no fees, payments, applications or admissions confirmations.

Division CTA URLs preselect the relevant topic with `?topic=designs`, `?topic=trading` or `?topic=academy` and target `#enquiry`. Unknown topic values safely fall back to General enquiry. The client component is within Suspense for static export compatibility; direct contact links and a no-JavaScript explanation remain outside it.

## Placeholder inventory

Eleven rendered placeholders across five pages:

| Page | Count | Reserved media | Ratio |
| --- | ---: | --- | --- |
| Home | 1 | Fatima Mugaro founder portrait | 4:5 |
| Our Story | 1 | Same founder portrait | 4:5 |
| General Trading | 1 | Optional approved business media | 3:2 |
| Designs | 6 | Custom-made clothing; ladies’ fashion; church choir uniforms; alterations and repairs; garment production; church hats and millinery | 4:5 |
| Academy | 2 | Proposed classroom; practical training space | 4:5 |

No stock/generated imagery, image assets or portfolio records were added. Both approved gallery arrays remain empty. Existing Home graphic panels and the typographic wordmark are retained. See `public/images/README.md` for replacement instructions and exact category matching.

## Verification

- `npm run lint`: passed.
- `npm run typecheck`: passed.
- `npm run build`: passed; all six public pages prerendered, with no runtime API routes.
- GitHub Pages build with `STATIC_EXPORT=true`, `NEXT_PUBLIC_BASE_PATH=/fatu-ed` and `NEXT_PUBLIC_SITE_URL=https://frankd-ux.github.io/fatu-ed/`: passed.
- `npm run check:export` under the same environment: passed for all six pages, one H1, canonical URLs, exported assets, internal routes and anchors, sitemap, robots and 404 output; no decorative arrow characters.
- Supplemental local harness (`/tmp/fatu-qa.cjs`): passed all four enquiry topics, validation boundaries, whitespace rejection, invalid topic keys, Unicode/special-character URL round trips and the academy acknowledgement. Gallery server-render checks passed for six noninteractive placeholders, valid-photo replacement alongside remaining placeholders, lazy original-image links, invalid-record filtering and the legacy empty state. Synthetic image records were confined to this harness, not site content.
- Source preservation: company/division content, gallery records, site/metadata configuration, brand tokens, button implementation, Next configuration, dependency declarations and Pages workflow remain unchanged.
- Exported HTML audit: passed exact placeholder counts on all six pages, unique IDs, logical heading levels and zero image elements.
- `git diff --check`: passed.

Builds use execution permission outside the sandbox because Next.js compiler workers cannot complete normally inside it.

## Remaining release checks

No browser is exposed by the session (empty app/browser inventory). Rendered checks at 320, 390, 768, 1024 and 1440 pixels, actual keyboard/menu/focus behavior, horizontal overflow, reduced-motion behavior and external-app handoffs remain unverified. Complete those checks on a browser before release; no browser verification is claimed here.

Untracked files appeared under `public/images/designs/` (20 photographs) and `public/images/founder/` (one photograph) during the task. They were left untouched and are not referenced by any page or approved gallery record. Next.js copies `public/` wholesale, so these files must be excluded from a future publication or explicitly approved before release; do not blindly stage them with the source changes.

Photography and branding are deliberately deferred and do not prevent a clearly labelled placeholder preview. Real portfolio media still requires client approval; Trading catalogue/capability details remain undocumented. Real enquiry delivery requires a separate service if wanted later. Publishing this implementation requires explicit user approval.
