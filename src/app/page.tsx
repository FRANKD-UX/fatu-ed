import Image from "next/image";
import Link from "next/link";
import { LinkButton } from "@/components/ui/LinkButton";
import { company } from "@/content/company";
import { divisions } from "@/content/divisions";
import { site } from "@/config/site";
import { pageMetadata } from "@/config/metadata";
import { withBasePath } from "@/config/paths";
import { FashionMark } from "@/components/layout/FashionMark";
import s from "@/components/home/Home.module.scss";

export const metadata = pageMetadata(
  "Your Vision. Our Creativity. Your Future.",
  "Discover FATU.E.D in Mdantsane, East London: elegant churchwear, occasionwear, custom fashion and millinery, alongside General Trading and a future sewing academy vision.",
  "/",
);

// These captions describe visible clothing, without assigning an unverified
// cultural origin or identifying the photographed group as a church choir.
const collections = [
  {
    title: "Churchwear",
    detail: "Elegant dresses and coordinated hats for Sunday gatherings and your personal style.",
    src: "/images/designs/design-09.jpeg",
    alt: "Pink dress with decorative sleeves, a blue hat and matching blue shoes",
    width: 960,
    height: 1280,
    caption: "Pink dress & blue accessories",
    href: "/designs",
  },
  {
    title: "Choir uniforms",
    detail: "Discuss coordinated uniforms around your church choir’s colours and design ideas.",
    src: "/images/designs/design-02.jpeg",
    alt: "Women wearing coordinated crimson dresses and dark wide-brimmed hats outdoors",
    width: 2992,
    height: 2992,
    caption: "Coordinated dress inspiration",
    href: "/contact?topic=designs#enquiry",
  },
  {
    title: "Traditional attire",
    detail: "Bring your cultural references, colours and garment ideas into the design conversation.",
    src: "/images/designs/design-11.jpeg",
    alt: "Blue patterned dress with flared sleeves, worn with a colourful beaded headpiece",
    width: 1066,
    height: 1600,
    caption: "Blue print & a beaded headpiece",
    href: "/contact?topic=designs#enquiry",
  },
  {
    title: "Occasionwear",
    detail: "Colour, character and personal style for celebrations and special occasions.",
    src: "/images/designs/design-17.jpeg",
    alt: "Colourful patterned bodice with puff sleeves, a full turquoise skirt and a blue hat",
    width: 1200,
    height: 1600,
    caption: "A full skirt & expressive colour",
    href: "/designs",
  },
  {
    title: "Millinery & statement hats",
    detail: "Discuss church hats and millinery to complete your look with a personal touch.",
    src: "/images/designs/design-03.jpeg",
    alt: "Two women wearing crimson satin dresses and decorative wide-brimmed hats",
    width: 960,
    height: 1280,
    caption: "Wide brims & coordinated dresses",
    href: "/designs#finishing-touches",
  },
] as const;

export default function Home() {
  return (
    <div className={s.home}>
      <div className={s.heritageBorder} aria-hidden="true" />
      <section className={s.hero} aria-labelledby="home-heading">
        <div className={s.heroGrid}>
          <div className={s.heroCopy}>
            <span className={s.eyebrow}>FATU.E.D / Fashion, craft & individuality</span>
            <h1 id="home-heading"><em>Elegance rooted</em><br /><span>in heritage</span></h1>
            <p className={s.heroIntro}>From Sunday best to a special celebration. Discover expressive dresses, coordinated churchwear and statement hats, and share the details that make a design your own.</p>
            <div className={s.actions}>
              <LinkButton href="/contact?topic=designs#enquiry" className={s.primaryButton}>Request a Custom Design<span className={s.heroArrow} aria-hidden="true" /></LinkButton>
              <LinkButton href="/designs" variant="secondary" className={s.outlineButton}>Explore Our Designs<span className={s.heroArrow} aria-hidden="true" /></LinkButton>
            </div>
            <p className={s.location}>Made personal, in Mdantsane, East London.</p>
          </div>
          <div className={s.heroEditorial}>
            <figure className={s.heroPhoto}>
              <div className={s.curvedFrame}>
                <Image src={withBasePath("/images/designs/design-09.jpeg")} alt="Pink occasion dress styled with a blue hat, blue shoes and a white handbag" width={960} height={1280} sizes="(max-width: 599px) 57vw, (max-width: 899px) 49vw, 31vw" preload />
              </div>
              <figcaption>Sunday best. <em>Entirely you.</em></figcaption>
            </figure>
            <div className={s.companions}>
              <figure>
                <div className={s.diamondFrame}><Image src={withBasePath("/images/designs/design-11.jpeg")} alt="Blue patterned dress with flared sleeves, worn with a colourful beaded headpiece" width={1066} height={1600} sizes="(max-width: 599px) 25vw, (max-width: 899px) 23vw, 15vw" /></div>
                <figcaption>Print & personal expression</figcaption>
              </figure>
              <figure>
                <div className={s.diamondFrame}><Image src={withBasePath("/images/designs/design-03.jpeg")} alt="Crimson satin dresses paired with decorative wide-brimmed hats" width={960} height={1280} sizes="(max-width: 599px) 25vw, (max-width: 899px) 23vw, 15vw" /></div>
                <figcaption>Colour in harmony</figcaption>
              </figure>
            </div>
          </div>
        </div>
        <div className={s.heritageBorder} aria-hidden="true" />
      </section>

      <section className={s.collections} aria-labelledby="collections-heading">
        <div className={s.sectionHeading}>
          <div><h2 id="collections-heading">Our Fashion Collections</h2><span className={s.eyebrow}>For church, celebrations and special occasions</span></div>
          <Link href="/designs#portfolio" className={s.textLink}>Explore the full portfolio</Link>
        </div>
        <div className={s.collectionGrid}>
          {[collections[0], collections[2], collections[1], collections[3], collections[4]].map((collection, index) => (
            <article className={`${s.collection} ${index < 2 ? s.featuredCollection : ""}`} key={collection.title}>
              <Link href={collection.href} className={s.collectionLink}>
                <figure>
                  <div className={s.collectionImage}>
                    <Image src={withBasePath(collection.src)} alt={collection.alt} width={collection.width} height={collection.height} sizes="(max-width: 599px) 42vw, (max-width: 1099px) 25vw, 24vw" loading="lazy" />
                  </div>
                  <figcaption>{collection.caption}</figcaption>
                </figure>
                <div className={s.collectionCopy}>
                  <h3>{collection.title}</h3>
                  <p>{collection.detail}</p>
                  <span className={s.collectionCta}>Explore Collection <span aria-hidden="true" /></span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section id="businesses" className={s.businesses} aria-labelledby="businesses-heading">
        <div className={s.container}>
          <div className={s.sectionHeading}>
            <div><h2 id="businesses-heading">Discover Our Businesses</h2><span className={s.eyebrow}>The FATU.E.D family of businesses</span></div>
            <p>Creative craftsmanship, reliable service and a future vision for sharing practical skills.</p>
          </div>
          <div className={s.divisionGrid}>
            {divisions.map((division) => (
              <article className={`${s.division} ${s[division.tone]}`} key={division.id}>
                {division.tone === "designs" ? (
                  <Link href={division.href} className={s.divisionPhoto} aria-label="Explore FATU.E.D Designs">
                    <Image src={withBasePath("/images/designs/design-18.jpeg")} alt="Tailored pink skirt suit with textured sleeves and a coordinated wide-brimmed hat" width={829} height={1600} sizes="(max-width: 599px) 29vw, (max-width: 1099px) 25vw, 11vw" loading="lazy" />
                  </Link>
                ) : (
                  <div className={s.divisionIntro}>
                    {division.tone === "trading" ? <FashionMark className={s.businessIcon} /> : (
                      <svg className={s.businessIcon} viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" aria-hidden="true" focusable="false">
                        <path d="m10 22 28-12 32 12-28 12zM10 22v12l32 12 28-12M10 38v12l32 12 28-12M10 54v12l32 12 28-12M42 34v12m0 16v16M10 38l13-5m-13 21 13-5M70 22v12m0 16v-9m0 25v-9" />
                      </svg>
                    )}
                  </div>
                )}
                <div className={s.divisionBody}>
                  {"future" in division && <span className={s.badge}>Future initiative</span>}
                  <h3>{division.name}</h3>
                  <p>{division.description}</p>
                  {"future" in division && <p className={s.academyStatus}>Not operating, accredited or accepting enrolments.</p>}
                  <p className={s.slogan}>{division.slogan}</p>
                  <LinkButton href={division.href} variant="secondary" className={s.businessButton}>{division.cta}</LinkButton>
                </div>
              </article>
            ))}
          </div>
          <p className={s.divisionNote}>General Trading and Designs welcome enquiries. F.E.D Old School Academy remains a future initiative.</p>
        </div>
      </section>

      <section id="welcome" className={s.story} aria-labelledby="story-heading">
        <div className={s.storyBrand}>
          <span className={s.eyebrow}>Our roots. Your individuality.</span>
          <p className={s.wordmark}>FATU.E.D</p>
          <p className={s.brandSlogan}>{site.tagline}</p>
        </div>
        <div>
          <h2 id="story-heading">Crafted with care.<br /><em>Worn with meaning.</em></h2>
          <p>FATU.E.D began with a passion for sewing and garment production. Today, that practical craft is a starting point for personal style: your colours, your references and the details that matter to you.</p>
          <p>Whether your inspiration is a Sunday gathering, a celebration or an expression of your heritage, bring your ideas into the design conversation.</p>
          <Link href="/about" className={s.textLink}>The story behind our craft</Link>
        </div>
      </section>

      <section className={s.founder} aria-labelledby="founder-heading">
        <figure className={s.founderPortrait}>
          <Image src={withBasePath("/images/founder/fatima.jpeg")} alt="Fatima Mugaro, founder of FATU.E.D" width={480} height={600} sizes="(max-width: 599px) 85vw, 32vw" loading="lazy" />
          <figcaption>Dream. Design. Create. Sew. Grow.</figcaption>
        </figure>
        <div className={s.founderCopy}>
          <span className={s.eyebrow}>The woman behind the vision</span>
          <h2 id="founder-heading">{company.founder}</h2>
          <p className={s.titles}>{company.titles}</p>
          <blockquote>“{company.quote}”</blockquote>
          <p>With {company.experience}, Fatima’s work is grounded in the craft of making garments.</p>
          <Link href="/about" className={s.textLink}>Meet our founder</Link>
        </div>
      </section>

      <section className={s.connect} aria-labelledby="connect-heading">
        <div className={s.heritageBorder} aria-hidden="true" />
        <div className={s.container}>
          <span className={s.eyebrow}>A conversation is a beginning</span>
          <h2 id="connect-heading">Bring your vision.<br /><em>Let’s create together.</em></h2>
          <p>Tell us about the garment, the occasion and the details you have in mind.</p>
          <div className={s.actions}>
            <LinkButton href={site.contact.whatsapp} className={s.primaryButton}>WhatsApp Us</LinkButton>
            <LinkButton href="/contact?topic=designs#enquiry" variant="secondary" className={s.outlineButton}>Request a Custom Design</LinkButton>
          </div>
          <Link href="/contact" className={s.textLink}>Contact us about any of our businesses</Link>
        </div>
      </section>
    </div>
  );
}
