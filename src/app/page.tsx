import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import Link from "next/link";
import { LinkButton } from "@/components/ui/LinkButton";
import { company } from "@/content/company";
import { divisions } from "@/content/divisions";
import { site } from "@/config/site";
import { pageMetadata } from "@/config/metadata";
import s from "@/components/home/Home.module.scss";
export const metadata = pageMetadata(
  "Your Vision. Our Creativity. Your Future.",
  "Discover FATU.E.D in Mdantsane, East London: General Trading, custom fashion and a future vision for sewing skills development.",
  "/",
);
export default function Home() {
  return (
    <>
      <section className={s.hero} aria-labelledby="home-heading">
        <div className={s.heroGrid}>
          <div className={s.heroCopy}>
            <span className={s.eyebrow}>
              A South African enterprise · Est. 2003
            </span>
            <h1 id="home-heading">FATU.E.D</h1>
            <p className={s.disciplines}>
              General Trading | Fashion &amp; Design | Empowerment &amp;
              Development
            </p>
            <p className={s.tagline}>
              Your Vision. Our Creativity.
              <br />
              Your Future.
            </p>
            <div className={s.actions}>
              <LinkButton href="#businesses">Explore Our Businesses</LinkButton>
              <LinkButton href="/contact" variant="secondary">
                Contact Us
              </LinkButton>
            </div>
          </div>
          <div
            className={s.heroArt}
            aria-label="Creativity, craftsmanship and possibility"
          >
            <span className={s.artSmall}>
              Many strengths. One shared vision.
            </span>
            <div className={s.artWords}>
              <span>Creativity.</span>
              <span>Craftsmanship.</span>
              <span>Possibility.</span>
            </div>
            <div className={s.artLine} />
            <span className={s.artSmall}>
              Rooted in experience. Made with purpose.
            </span>
          </div>
        </div>
        <div className={s.heroBottom}>
          <span>Mdantsane · East London · South Africa</span>
          <Link href="#welcome">Discover our story</Link>
        </div>
      </section>
      <section id="welcome" className={s.welcome}>
        <div>
          <span className={s.eyebrow}>Our roots. Our purpose.</span>
          <h2>Welcome to FATU.E.D</h2>
          <LinkButton variant="text" className={s.textLink} href="/about">
            The story behind our business
          </LinkButton>
        </div>
        <div className={s.welcomeText}>
          {company.welcome.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </section>
      <section id="businesses" className={s.businesses}>
        <div className={s.container}>
          <div className={s.sectionHeading}>
            <div>
              <span className={s.eyebrow}>Three divisions. One identity.</span>
              <h2>Discover our businesses</h2>
            </div>
            <p>
              Bringing together reliable service, creative craftsmanship and a
              vision for empowerment.
            </p>
          </div>
          <div className={s.divisionGrid}>
            {divisions.map((d) => (
              <article className={s.division} key={d.id}>
                <div
                  className={`${s.divisionArt} ${s[d.tone]}`}
                  aria-hidden="true"
                >
                  <span>{d.label}</span>
                  <b>{d.id}</b>
                  <span>{d.short}</span>
                </div>
                <div className={s.divisionBody}>
                  {"future" in d && (
                    <span className={s.badge}>Future initiative · Not operating</span>
                  )}
                  <h3>{d.name}</h3>
                  <p>{d.description}</p>
                  {"supporting" in d && <p>{d.supporting}</p>}
                  <p className={s.slogan}>{d.slogan}</p>
                  <LinkButton href={d.href}>{d.cta}</LinkButton>
                </div>
              </article>
            ))}
          </div>
          <p className={s.divisionNote}>General Trading and Designs welcome enquiries. The academy is a future initiative, not operating, accredited or accepting enrolments.</p>
        </div>
      </section>
      <section className={s.reasons}>
        <div>
          <span className={s.eyebrow}>The care behind the work</span>
          <h2>
            Why choose
            <br />
            FATU.E.D?
          </h2>
          <p>
            Experience shapes our craft.
            <br />
            Our values guide everything we do.
          </p>
        </div>
        <ul>
          {company.reasons.map((r, i) => (
            <li key={r}>
              <span aria-hidden="true">0{i + 1}</span>
              {r}
            </li>
          ))}
        </ul>
      </section>
      <section className={s.vision}>
        <div className={s.container}>
          <span className={s.eyebrow}>Our vision</span>
          <blockquote>“{company.homeVision}”</blockquote>
        </div>
      </section>
      <section className={s.founder}>
        <MediaPlaceholder label="Fatima Mugaro · Founder portrait" />
        <div className={s.founderCopy}>
          <span className={s.eyebrow}>The woman behind the vision</span>
          <h2>{company.founder}</h2>
          <p className={s.titles}>{company.titles}</p>
          <blockquote>“{company.quote}”</blockquote>
          <p className={s.mantra}>Dream. Design. Create. Sew. Grow.</p>
          <LinkButton variant="text" className={s.textLink} href="/about">
            Meet our founder
          </LinkButton>
        </div>
      </section>
      <section className={s.connect}>
        <div className={s.container}>
          <div>
            <span className={s.eyebrow}>A conversation is a beginning</span>
            <h2>Let’s connect</h2>
          </div>
          <div>
            <p>
              Whether you are looking for a custom design, business products or
              information about our future training programmes, we would love to
              hear from you.
            </p>
            <div className={s.actions}>
              <LinkButton href={site.contact.whatsapp}>WhatsApp Us</LinkButton>
              <LinkButton href="/contact" variant="secondary">
                Contact Us
              </LinkButton>
            </div>
            <LinkButton
              variant="text"
              className={s.textLink}
              href="#businesses"
            >
              Explore Our Businesses
            </LinkButton>
          </div>
        </div>
      </section>
    </>
  );
}
