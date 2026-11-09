import {
  PageHero,
  ContentSection,
  ContactBand,
} from "@/components/divisions/PageShell";
import { DetailCards } from "@/components/divisions/DetailCards";
import { company } from "@/content/company";
import { pageMetadata } from "@/config/metadata";
import s from "@/components/divisions/Pages.module.scss";

export const metadata = pageMetadata(
  "Our Story",
  "Meet founder Fatima Mugaro and discover FATU.E.D’s journey from sewing skills to a trading and design business in Mdantsane, East London.",
  "/about",
);

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="Our roots. Our purpose."
        title="The story behind FATU.E.D"
      >
        <p>{company.profile.introduction}</p>
      </PageHero>
      <ContentSection
        label="Company background"
        title="Practical skills. An entrepreneurial vision."
      >
        {company.profile.background.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </ContentSection>
      <ContentSection label="Meet the founder" title={company.founder}>
        <p className={s.subheading}>{company.titles}</p>
        {company.profile.founderStory.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <blockquote className={s.founderQuote}>
          <p>“{company.quote}”</p>
          <cite>{company.founder}</cite>
        </blockquote>
      </ContentSection>
      <ContentSection
        label="Our business journey"
        title="Three milestones. One foundation."
      >
        <ol className={s.timeline}>
          {company.milestones.map((milestone) => (
            <li key={milestone.year}>
              <time dateTime={milestone.year}>{milestone.year}</time>
              <span>{milestone.text}</span>
            </li>
          ))}
        </ol>
      </ContentSection>
      <ContentSection label="Our direction" title="Mission & vision">
        <DetailCards
          items={[
            { title: "Our mission", description: company.mission },
            { title: "Our vision", description: company.vision },
          ]}
        />
      </ContentSection>
      <ContentSection label="What guides us" title="Our values">
        <ul className={s.values}>
          {company.values.map((value) => (
            <li key={value}>{value}</li>
          ))}
        </ul>
      </ContentSection>
      <ContentSection
        label="In her own words"
        title="A message from our founder"
      >
        <blockquote>
          {company.founderMessage.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </blockquote>
        <p>
          {company.founder}
          <br />
          Founder — FATU.E.D
        </p>
      </ContentSection>
      <ContactBand text="Talk to us about a trading enquiry, a garment you would like to create or the vision behind FATU.E.D." />
    </>
  );
}
