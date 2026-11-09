import { PageHero, ContentSection } from "@/components/divisions/PageShell";
import { LinkButton } from "@/components/ui/LinkButton";
import { site, whatsappEnquiry } from "@/config/site";
import { pageMetadata } from "@/config/metadata";
import s from "@/components/divisions/Pages.module.scss";
export const metadata = pageMetadata(
  "Contact Us",
  "Contact FATU.E.D in Mdantsane, East London by WhatsApp, telephone or email for design, trading and future academy enquiries.",
  "/contact",
);
const pathways = [
  {
    title: "FATU.E.D Designs",
    description: "Custom clothing, alterations, uniforms and millinery.",
    message:
      "Hello FATU.E.D Designs, I would like to discuss a design enquiry.",
  },
  {
    title: "FATU.E.D General Trading",
    description: "Product enquiries, quotations and business opportunities.",
    message:
      "Hello FATU.E.D General Trading, I would like to discuss an enquiry.",
  },
  {
    title: "F.E.D Old School Academy",
    description:
      "Future programme questions and expressions of interest. Not enrolment.",
    message:
      "Hello, I would like to express interest in future F.E.D Old School Academy programmes. I understand the academy is not accepting enrolments.",
  },
  {
    title: "General Enquiry",
    description: "For everything else, start a conversation with us.",
    message: "Hello FATU.E.D, I have a general enquiry.",
  },
];
export default function Contact() {
  return (
    <>
      <PageHero eyebrow="We would love to hear from you" title="Let’s connect">
        <p>
          Whether you are looking for a custom design, business products or
          information about our future training programmes, we would love to
          hear from you.
        </p>
      </PageHero>
      <ContentSection
        label="Contact details"
        title="A conversation starts here"
      >
        <dl className={s.contactDetails}>
          <div>
            <dt>Telephone</dt>
            <dd>
              <a href={site.contact.telephone}>{site.contact.phone}</a>
            </dd>
          </div>
          <div>
            <dt>Email</dt>
            <dd>
              <a href={site.contact.emailUri}>{site.contact.email}</a>
            </dd>
          </div>
          <div>
            <dt>WhatsApp</dt>
            <dd>
              <a href={site.contact.whatsapp}>Message FATU.E.D on WhatsApp</a>
            </dd>
          </div>
          <div>
            <dt>Business hours</dt>
            <dd>{site.contact.hours}</dd>
          </div>
        </dl>
      </ContentSection>
      <ContentSection
        label="Business location"
        title="Rooted in the Eastern Cape"
      >
        <p>{site.contact.location}.</p>
        <p>
          Please contact us to arrange a meeting and confirm directions before
          visiting.
        </p>
      </ContentSection>
      <ContentSection label="Choose your conversation" title="How can we help?">
        <p>Select a division to start a WhatsApp enquiry.</p>
        <div className={s.pathways}>
          {pathways.map((p) => (
            <a key={p.title} href={whatsappEnquiry(p.message)}>
              <span>
                {p.title}
                <small>{p.description}</small>
              </span>
            </a>
          ))}
        </div>
      </ContentSection>
      <ContentSection
        label="Enquiry form · Future phase"
        title="For now, reach us directly"
      >
        <p>
          A website enquiry form is planned for a future phase. Please send your
          enquiry by email or WhatsApp, or call us using the details above.
        </p>
        <div className={s.actions}>
          <LinkButton href={site.contact.emailUri}>Email Us</LinkButton>
          <LinkButton href={site.contact.whatsapp} variant="secondary">
            WhatsApp Us
          </LinkButton>
        </div>
      </ContentSection>
    </>
  );
}
