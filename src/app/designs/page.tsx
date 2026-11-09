import {
  PageHero,
  ContentSection,
  ContactBand,
} from "@/components/divisions/PageShell";
import { DetailCards } from "@/components/divisions/DetailCards";
import { Gallery } from "@/components/divisions/Gallery";
import { designsGallery } from "@/content/galleries";
import { designServices, orderSteps, divisions } from "@/content/divisions";
import { pageMetadata } from "@/config/metadata";
import s from "@/components/divisions/Pages.module.scss";

export const metadata = pageMetadata(
  "FATU.E.D Designs",
  "Explore custom clothing, ladies’ fashion, church choir uniforms, alterations, garment production and millinery from FATU.E.D Designs in East London.",
  "/designs",
);

export default function Designs() {
  return (
    <>
      <PageHero
        eyebrow="FATU.E.D Designs"
        title="Dream. Design. Create. Sew. Grow."
        tone="blue"
      >
        <p>
          Custom clothing, alterations, choir uniforms and millinery. Bring your
          ideas to FATU.E.D Designs and discuss the garment you would like to
          create.
        </p>
      </PageHero>
      <ContentSection
        label="The work behind the design"
        title="Creativity in every stitch"
      >
        <p>{divisions[1].supporting}</p>
        <p>
          From an individual garment to a coordinated church choir uniform, the
          starting point is your brief. Share the style, measurements and
          references that matter to you so we can discuss the work involved.
        </p>
        <p>
          Design details, quotations and production arrangements are agreed
          directly with the business.
        </p>
      </ContentSection>
      <ContentSection label="Our design services" title="Made with care" wide>
        <DetailCards items={designServices} />
      </ContentSection>
      <ContentSection
        id="portfolio"
        label="Design portfolio"
        title="Clothing, craft & detail"
        wide
      >
        <Gallery
          images={designsGallery}
          emptyTitle="Our work, in photographs"
          emptyDescription="Approved photographs of FATU.E.D clothing and millinery will be shared here. In the meantime, contact us to discuss your design ideas and ask about examples relevant to your enquiry."
        />
      </ContentSection>
      <ContentSection label="Our promise" title={divisions[1].slogan}>
        <p>
          Quality workmanship and attention to your requirements guide our
          approach. The conversation before production helps establish the
          design, fit and finishing you are looking for.
        </p>
        <p>
          Please discuss any changes to your brief with the business so that the
          work and arrangements can be reviewed together.
        </p>
      </ContentSection>
      <ContentSection
        label="A personal process"
        title="From your idea to an agreed order"
      >
        <ol className={s.steps}>
          {orderSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
        <p>
          Orders, quotations and any payment arrangements are handled directly
          with the business.
        </p>
      </ContentSection>
      <ContactBand
        title="Contact FATU.E.D Designs"
        text="Tell us about your custom clothing, uniform, alteration or millinery enquiry."
        whatsappMessage="Hello FATU.E.D Designs, I would like to discuss a design enquiry."
      />
    </>
  );
}
