import { designsGallery } from "@/content/galleries";
import s from "./Designs.module.scss";
import { LookbookGalleries } from "./LookbookGallery";
import { lookbookPreviews } from "./lookbook-previews";

// Descriptions are local to this portfolio; shared gallery content stays intact.
const descriptions = [
  ["White, lace & a wide brim", "White dress with lace detailing and a matching wide-brimmed hat"],
  ["Together in crimson", "Group wearing coordinated crimson dresses and dark hats outdoors"],
  ["Satin & statement hats", "Two women wearing crimson satin dresses and dark wide-brimmed hats"],
  ["Olive & gold", "Group in olive green occasionwear with gold decorative hats"],
  ["A coordinated celebration", "Gathering of women in matching olive green dresses and gold hats"],
  ["An evening in pink", "Original watermarked collage of a pink fitted evening gown with a flared hem"],
  ["Bold lines, full skirts", "Original watermarked collage of black, white and red dresses with contrasting bands"],
  ["Harmony in mint", "Two group photographs of coordinated mint dresses and matching hats"],
  ["Soft pink, blue accents", "Pink knee-length dress with lace sleeves, styled with a blue hat and shoes"],
  ["A tailored white silhouette", "White fitted skirt and peplum jacket worn with a white hat"],
  ["Print with presence", "Blue patterned dress with voluminous sleeves and a matching headpiece"],
  ["The detail in the neckline", "Close view of a pink satin outfit with lace at the neckline and a matching hat"],
  ["Colour in company", "Women in coordinated crimson dresses with puff sleeves and dark hats"],
  ["Gold meets deep green", "Two women in gold and deep green occasionwear with decorative hats"],
  ["Contrast in every panel", "Original watermarked three-view collage showing black, red and white panelled dresses"],
  ["Layers in blue", "Blue patterned sleeveless dress with a tiered skirt"],
  ["A joyful palette", "Colourful patterned bodice with puff sleeves and a full turquoise skirt, worn with a blue hat"],
  ["Pink from head to hem", "Pink skirt suit with textured jacket detailing and a wide-brimmed pink hat"],
  ["Fuchsia & sunshine", "Original watermarked photograph of a fuchsia dress with bow detailing and a yellow hat"],
  ["Dressed for the occasion", "Group portrait with green and gold skirt outfits, colourful hats and dark suits"],
];
const chapters = [
  { id: "together", title: "Beautiful together", description: "Coordinated dresses and hats. A shared sense of occasion.", numbers: [2, 3, 8, 4, 13, 5] },
  { id: "finishing-touches", title: "The finishing touch", description: "Lace, texture and millinery that complete the look.", numbers: [1, 18, 12, 19, 14, 10, 20] },
  { id: "individual-style", title: "Individual expression", description: "Occasion dresses, vivid prints and silhouettes with personality.", numbers: [9, 11, 16, 6, 17, 7, 15] },
];

export function DesignsPortfolio() {
  const lookbookChapters = chapters.map(({ numbers, ...chapter }) => ({
    ...chapter,
    photos: numbers.map((number) => {
      const image = designsGallery[number - 1];
      const [caption, alt] = descriptions[number - 1];
      return { number, src: image.src, width: image.width, height: image.height, caption, alt, previews: lookbookPreviews[number] };
    }),
  }));
  return (
    <section id="portfolio" className={s.portfolio} aria-labelledby="portfolio-title">
      <div className={s.portfolioIntro}>
        <div className={s.sectionHeading}><div><span className={s.eyebrow}>The design portfolio / 20 photographs</span><h2 id="portfolio-title">A world of <em>colour & craft.</em></h2></div><p>Real garments. Personal style.<br />Explore the work of FATU.E.D Designs.</p></div>
        <nav className={s.portfolioNav} aria-label="Portfolio collections">{chapters.map((chapter, index) => <a href={`#${chapter.id}`} key={chapter.id}><span>0{index + 1}</span>{chapter.title}</a>)}<span className={s.viewNote}>Select a photograph to view in full</span></nav>
      </div>
      <LookbookGalleries chapters={lookbookChapters} />
    </section>
  );
}
