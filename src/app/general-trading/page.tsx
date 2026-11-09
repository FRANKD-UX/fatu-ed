import {
  PageHero,
  ContentSection,
  ContactBand,
} from "@/components/divisions/PageShell";
import { DetailCards } from "@/components/divisions/DetailCards";
import { LinkButton } from "@/components/ui/LinkButton";
import { trading } from "@/content/divisions";
import { pageMetadata } from "@/config/metadata";
import s from "@/components/divisions/Pages.module.scss";

export const metadata = pageMetadata(
  "General Trading",
  "Discuss product and service requirements, quotations and business opportunities with FATU.E.D General Trading in Mdantsane, East London.",
  "/general-trading",
);

export default function Trading() {
  return (
    <>
      <PageHero
        eyebrow="FATU.E.D General Trading"
        title="Delivery in your time."
      >
        <p>{trading.introduction}</p>
      </PageHero>
      <ContentSection
        label="Our approach"
        title="Reliability. Quality. Service."
      >
        <p>
          A useful enquiry starts with a clear understanding of what you need.
          We place your requirements at the centre of the conversation, with
          products, services and arrangements confirmed directly with the
          business.
        </p>
        <p>{trading.availability}</p>
      </ContentSection>
      <ContentSection
        label="How we can help"
        title="Start with your requirements"
        wide
      >
        <DetailCards items={trading.enquiries} />
      </ContentSection>
      <ContentSection
        label="Prepare your enquiry"
        title="The details that help us respond"
      >
        <p>
          Send a short description of your requirements. Where relevant,
          include:
        </p>
        <ul className={s.checklist}>
          {trading.enquiryChecklist.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>
          A conversation allows us to review the request and discuss a
          quotation. Availability and any delivery arrangements need to be
          confirmed before you make plans around an order.
        </p>
        <LinkButton href="/contact">Make a trading enquiry</LinkButton>
      </ContentSection>
      <ContactBand
        title="Talk to General Trading"
        text="Start a product or service enquiry, discuss a quotation or introduce a business opportunity."
        whatsappMessage="Hello FATU.E.D General Trading, I would like to discuss a product or service enquiry."
      />
    </>
  );
}
