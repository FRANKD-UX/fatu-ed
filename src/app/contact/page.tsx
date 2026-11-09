import { PageHero, ContentSection } from "@/components/divisions/PageShell";
import { Suspense } from "react";
import { EnquiryComposer } from "@/components/contact/EnquiryComposer";
import { site } from "@/config/site";
import { pageMetadata } from "@/config/metadata";
import s from "@/components/divisions/Pages.module.scss";
export const metadata = pageMetadata(
  "Contact Us",
  "Contact FATU.E.D in Mdantsane, East London by WhatsApp, telephone or email for design, trading and future academy enquiries.",
  "/contact",
);
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
          <div><dt>Location</dt><dd>{site.contact.location}</dd></div>
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
      <ContentSection id="enquiry" label="Prepare your message" title="How can we help?">
        <p>Choose a topic, add your name and tell us what you have in mind. Review your draft, then open WhatsApp or email to send it yourself.</p>
        <Suspense fallback={<p>Loading the enquiry composer. You can also use the direct contact links above.</p>}>
          <EnquiryComposer />
        </Suspense>
        <noscript><p>The composer needs JavaScript. Please use the telephone, WhatsApp or email links above to contact us directly.</p></noscript>
      </ContentSection>
    </>
  );
}
