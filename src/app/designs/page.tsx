import Image from "next/image";
import Link from "next/link";
import { LinkButton } from "@/components/ui/LinkButton";
import { designServices, orderSteps, divisions } from "@/content/divisions";
import { pageMetadata } from "@/config/metadata";
import { withBasePath } from "@/config/paths";
import { whatsappEnquiry } from "@/config/site";
import { DesignsPortfolio } from "./DesignsPortfolio";
import s from "./Designs.module.scss";

export const metadata = pageMetadata("FATU.E.D Designs", "Discover custom clothing, ladies’ fashion, choir uniforms and millinery in the FATU.E.D Designs portfolio, from Mdantsane, East London.", "/designs");

export default function Designs() {
  return (
    <div className={s.designs}>
      <section className={s.hero} aria-labelledby="designs-title">
        <div className={s.heroCopy}>
          <span className={s.eyebrow}>FATU.E.D Designs / Sunday elegance</span>
          <h1 id="designs-title">Your vision.<br />Our <em>craft.</em></h1>
          <p className={s.heroMotto}>Dream. Design. Create. Sew. Grow.</p>
          <p className={s.heroIntro}>For Sunday best and life’s special occasions. Discover elegant dresses, tailored garments and coordinated hats, with the colour and detail that make them your own.</p>
          <div className={s.actions}><LinkButton href="#portfolio">Explore the portfolio</LinkButton><Link href="/contact?topic=designs#enquiry" className={s.textLink}>Prepare a design enquiry</Link></div>
          <span className={s.heroFootnote}>Churchwear · Occasionwear · Choir uniforms · Millinery</span>
        </div>
        <figure className={s.heroPhoto}>
          <Image src={withBasePath("/images/designs/design-01.jpeg")} alt="White dress with lace detailing, styled with a white wide-brimmed hat" width={960} height={1280} sizes="(max-width: 760px) 100vw, 48vw" preload />
          <figcaption><span>A study in white</span><span>FATU.E.D Designs</span></figcaption>
        </figure>
      </section>
      <section className={s.introduction} aria-labelledby="craft-title">
        <span className={s.eyebrow}>Creativity in every stitch</span>
        <h2 id="craft-title">Made for the person.<br /><em>Made for the moment.</em></h2>
        <div><p>{divisions[1].supporting}</p><p>Expressive fabrics, thoughtful details and a personal brief. Every conversation begins with what you want to create.</p></div>
      </section>
      <DesignsPortfolio />
      <section className={s.services} aria-labelledby="services-title">
        <div className={s.sectionHeading}><div><span className={s.eyebrow}>The work behind the wardrobe</span><h2 id="services-title">Your idea. Our expertise.</h2></div><p>From the first reference to the finishing details, tell us what you have in mind.</p></div>
        <div className={s.serviceList}>{designServices.map((service, index) => <div className={s.service} key={service.title}><span className={s.number}>0{index + 1}</span><h3>{service.title}</h3><p>{service.description}</p></div>)}</div>
      </section>
      <section className={s.process} aria-labelledby="process-title">
        <div><span className={s.eyebrow}>A personal process</span><h2 id="process-title">Let’s bring your<br /><em>idea to life.</em></h2><p>Share your inspiration, the occasion and the details that matter to you.</p><p className={s.promise}>{divisions[1].slogan}</p></div>
        <div><ol>{orderSteps.map((step) => <li key={step}>{step}</li>)}</ol><p className={s.processNote}>Design details, quotations, orders and payment arrangements are agreed directly with the business.</p></div>
      </section>
      <section className={s.contactFinish} aria-labelledby="design-contact-title">
        <span className={s.eyebrow}>A conversation is a beginning</span>
        <h2 id="design-contact-title">Your next design <em>starts here.</em></h2>
        <p>Tell us about your custom clothing, uniform, alteration or millinery enquiry.</p>
        <div className={s.actions}>
          <LinkButton href={whatsappEnquiry("Hello FATU.E.D Designs, I would like to discuss a design enquiry.")}>Discuss a design on WhatsApp</LinkButton>
          <LinkButton href="/contact?topic=designs#enquiry" variant="secondary">Prepare a design enquiry</LinkButton>
        </div>
      </section>
    </div>
  );
}
