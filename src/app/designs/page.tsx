import Image from "next/image";
import Link from "next/link";
import { DivisionLogo } from "@/components/divisions/DivisionLogo";
import { LinkButton } from "@/components/ui/LinkButton";
import { designServices, divisions } from "@/content/divisions";
import { pageMetadata } from "@/config/metadata";
import { withBasePath } from "@/config/paths";
import { whatsappEnquiry } from "@/config/site";
import { DesignsPortfolio } from "./DesignsPortfolio";
import s from "./Designs.module.scss";

export const metadata = pageMetadata("FATU.E.D Designs", "Discover custom clothing, ladies’ fashion, choir uniforms and millinery in the FATU.E.D Designs portfolio, from Mdantsane, East London.", "/designs");

const designEnquiry = "Hello FATU.E.D Designs, I would like to discuss a custom design and share my ideas.";
const serviceMessages: Record<(typeof designServices)[number]["title"], string> = {
  "Custom-made clothing": "Hello FATU.E.D Designs, I would like to enquire about custom-made clothing.",
  [designServices[1].title]: "Hello FATU.E.D Designs, I would like to discuss a ladies' fashion design.",
  "Church choir uniforms": "Hello FATU.E.D Designs, I would like to request information about church choir uniforms.",
  "Alterations and repairs": "Hello FATU.E.D Designs, I would like to enquire about alterations or repairs.",
  "Garment production": "Hello FATU.E.D Designs, I would like to discuss garment production requirements.",
  "Church hats and millinery": "Hello FATU.E.D Designs, I would like to enquire about church hats and millinery.",
};
const designsJourney = [
  { title: "Enquire", description: "Tell us what type of garment or service you're looking for." },
  { title: "Share Your Design", description: "Share your design ideas, reference photographs, measurements, quantities, and preferred date." },
  { title: "Confirm Your Quotation", description: "We review your requirements and discuss your quotation and order details." },
  { title: "Production & Collection", description: "Once your order is confirmed, production and collection or delivery arrangements are agreed." },
];
const enquiryChecklist = [
  "Type of garment or service required",
  "Design ideas or reference photographs",
  "Measurements, if available",
  "Number of garments required",
  "Date the garments are needed",
  "Any additional design preferences",
];

export default function Designs() {
  return (
    <div className={s.designs}>
      <section className={s.hero} aria-labelledby="designs-title">
        <div className={s.heroCopy}>
          <DivisionLogo division="designs" variant="identity" />
          <span className={s.eyebrow}>FATU.E.D Designs / Sunday elegance</span>
          <h1 id="designs-title">Your vision.<br />Our <em>craft.</em></h1>
          <p className={s.heroMotto}>Dream. Design. Create. Sew. Grow.</p>
          <p className={s.heroIntro}>For Sunday best and life’s special occasions. Discover elegant dresses, tailored garments and coordinated hats, with the colour and detail that make them your own.</p>
          <div className={s.experience}><p><strong>26 Years</strong><span>of Sewing &amp; Garment Production Experience</span></p><span>Mdantsane, East London, Eastern Cape</span></div>
          <div className={`${s.actions} ${s.heroActions}`}><LinkButton href={whatsappEnquiry(designEnquiry)}>Request a Custom Design</LinkButton><LinkButton href="#portfolio" variant="secondary">Explore Our Portfolio</LinkButton><Link href="/contact?topic=designs#enquiry" className={s.textLink}>Prefer to prepare a design enquiry?</Link></div>
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
        <div className={s.serviceList}>{designServices.map((service, index) => <div className={s.service} key={service.title}><span className={s.number}>0{index + 1}</span><h3>{service.title}</h3><p>{service.description}</p><a className={s.serviceEnquiry} href={whatsappEnquiry(serviceMessages[service.title])} aria-label={`Enquire on WhatsApp about ${service.title}`}>Enquire on WhatsApp</a></div>)}</div>
      </section>
      <section className={s.process} aria-labelledby="process-title">
        <div className={s.processIntro}><div><span className={s.eyebrow}>A personal process / Four stages</span><h2 id="process-title">Let’s bring your<br /><em>idea to life.</em></h2><p>Share your inspiration, the occasion and the details that matter to you.</p></div><p className={s.promise}>{divisions[1].slogan}</p></div>
        <ol className={s.journey}>{designsJourney.map((step, index) => <li key={step.title}><span className={s.stepNumber} aria-hidden="true">0{index + 1}</span><h3>{step.title}</h3><p>{step.description}</p></li>)}</ol>
        <p className={s.processNote}>Design details, quotations, orders and payment arrangements are agreed directly with the business.</p>
      </section>
      <section className={s.contactFinish} aria-labelledby="design-contact-title">
        <span className={s.eyebrow}>A conversation is a beginning</span>
        <h2 id="design-contact-title">Your next design <em>starts here.</em></h2>
        <p>Start with an enquiry. Share your ideas so we can discuss your requirements, quotation and the next steps before an order is confirmed.</p>
        <div className={s.checklist} aria-labelledby="enquiry-checklist-title"><h3 id="enquiry-checklist-title">What to Include in Your Enquiry</h3><ul>{enquiryChecklist.map((item) => <li key={item}>{item}</li>)}</ul></div>
        <div className={s.actions}>
          <LinkButton href={whatsappEnquiry(designEnquiry)}>Discuss a Design on WhatsApp</LinkButton>
          <LinkButton href="/contact?topic=designs#enquiry" variant="secondary">Prepare a Design Enquiry</LinkButton>
        </div>
      </section>
    </div>
  );
}
