# Client media and placeholder inventory

The original Phase 2 audit found no image assets. Untracked founder and design photographs are now present in `public/images/founder/` and `public/images/designs/`. This implementation has not inspected, approved, renamed or referenced those files; photography remains postponed. No assets were downloaded, generated or substituted by this work.

Next.js copies all files under `public/` into build output, including unreferenced photographs. Do not include these untracked media files in a future publication until their approval and intended release scope are confirmed. The placeholder-only source can be committed separately from these files.

## Material still needed

- Approved original company logo and branding files; the existing header remains a typographic business name.
- A confirmed photograph of founder Fatima Mugaro.
- Approved clothing and millinery photographs, identified by service: custom clothing, ladies’ fashion, church choir uniforms, alterations/repairs, garment production, and church hats/millinery. Include permission to publish, meaningful descriptions and any captions.
- General Trading product/service details and relevant genuine product, supply or operational photographs. No named product ranges or customer sectors are currently documented.
- Genuine workshop or proposed academy environment photographs, if available. Captions must make their actual context clear and must never imply that an operational academy or current class exists.

## Adding photographs

Preserve originals, filenames, watermarks and copyright notices where practical. Inspect photographs before assigning categories. Review branding for outdated contact details. Do not recreate the logo or present stock imagery as company work.

Add approved local gallery records in `src/content/galleries.ts`. Each `GalleryImage` needs a `/images/` path, verified positive intrinsic width and height, descriptive alt text, an accurate category, and an optional verified caption. Without placeholder categories, categories render in order of first appearance. With placeholders, configured category labels come first, followed by any additional approved categories. Images retain their supplied order within each category.

The shared gallery renders consistent 4:5 frames with `object-fit: contain`, preserving the full image. It uses lazy Next.js Image loading and normal keyboard-accessible links to original photographs. Empty categories have clearly labelled, noninteractive placeholders; incomplete image records are excluded; image-load failures remove the original-image link and show a readable fallback. No imaginary projects or photographs are published.

## Reserved spaces

- Home and Our Story: one 4:5 founder portrait each. Replace `MediaPlaceholder` with an approved image and descriptive alt text when available.
- General Trading: one optional 3:2 business-media placeholder. Remove it or replace it with approved, accurately described business media.
- Designs: six 4:5 placeholders, using the exact labels from `designServices` in `src/content/divisions.ts`. An approved image record with a matching `category` replaces its category placeholder automatically. These labels represent services, not portfolio projects.
- Academy: two 4:5 placeholders labelled `Proposed classroom` and `Practical training space`. Use those exact categories for approved future-setting media. Captions and context must remain clear that the initiative is not operating and the media does not show current academy classes.

`MediaPlaceholder` is shared in `src/components/ui/` and supports label, aspect ratio and contextual text. It renders semantic figure/caption text with no image request, alt attribute, link or keyboard focus target. Imagery is deliberately postponed, with no stock or generated substitutes.
