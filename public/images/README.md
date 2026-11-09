# Client media — Phase 2 audit

No image, logo, photograph or brand file is present in `public/` or the project source. The local `src.zip` archive contains source code only. No assets were downloaded, generated or substituted.

## Material still needed

- Approved original company logo and branding files; the existing header remains a typographic business name.
- A confirmed photograph of founder Fatima Mugaro.
- Approved clothing and millinery photographs, identified by service: custom clothing, ladies’ fashion, church choir uniforms, alterations/repairs, garment production, and church hats/millinery. Include permission to publish, meaningful descriptions and any captions.
- General Trading product/service details and relevant genuine product, supply or operational photographs. No named product ranges or customer sectors are currently documented.
- Genuine workshop or proposed academy environment photographs, if available. Captions must make their actual context clear and must never imply that an operational academy or current class exists.

## Adding photographs

Preserve originals, filenames, watermarks and copyright notices where practical. Inspect photographs before assigning categories. Review branding for outdated contact details. Do not recreate the logo or present stock imagery as company work.

Add approved local gallery records in `src/content/galleries.ts`. Each `GalleryImage` needs a `/images/` path, verified positive intrinsic width and height, descriptive alt text, an accurate category, and an optional verified caption. Categories render in order of first appearance, and images retain their supplied order within each category.

The shared gallery renders consistent 4:5 frames with `object-fit: contain`, preserving the full image. It uses lazy Next.js Image loading and normal keyboard-accessible links to original photographs. Empty/incomplete records produce an intentional text state; image-load failures remove the original-image link and show a readable fallback. No imaginary projects or blank portfolio cards are published.
