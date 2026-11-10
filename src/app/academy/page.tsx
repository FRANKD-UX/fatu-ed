import { LinkButton } from "@/components/ui/LinkButton";
import { DivisionLogo } from "@/components/divisions/DivisionLogo";
import {
  PageHero,
  ContentSection,
  ContactBand,
} from "@/components/divisions/PageShell";
import { DetailCards } from "@/components/divisions/DetailCards";
import { Gallery } from "@/components/divisions/Gallery";
import { classroomGallery } from "@/content/galleries";
import { academy } from "@/content/divisions";
import { company } from "@/content/company";
import { pageMetadata } from "@/config/metadata";
import s from "@/components/divisions/Pages.module.scss";

export const metadata = pageMetadata(
  "F.E.D Old School Academy — Future Initiative",
  "Discover a proposed practical sewing and garment-making initiative from FATU.E.D. Old School Academy is not operating or accepting enrolments.",
  "/academy",
);

export default function Academy() {
  return (
    <>
      <PageHero
        eyebrow="Proposed initiative · Not open for enrolment"
        title="F.E.D Old School Academy"
        tone="warm"
      >
        <p>Fatu’s Empowerment and Development</p>
        <p>Learn the skill. Master the craft. Create your future.</p>
        <p className={s.heroStatus}>
          Future initiative · Not operating, accredited or accepting enrolments.
        </p>
        <LinkButton href="/contact?topic=academy#enquiry">Prepare an expression of interest</LinkButton>
      </PageHero>
      <ContentSection label="Concept & purpose" title="A vision taking shape">
        <div className={s.notice}>
          <strong>Future initiative · Not open for enrolment</strong>
          <p>{academy.notice}</p>
        </div>
        <DivisionLogo division="academy" />
        <p>{academy.purpose}</p>
        <p>
          The academy is envisioned as a place to learn through making:
          understanding a garment from its first measurements to its final
          fitting, with patient practice at each stage.
        </p>
      </ContentSection>
      <ContentSection label="The foundation" title="Knowledge worth sharing">
        <p>
          {company.founder} completed a sewing certificate at People’s College
          in Zimbabwe in 1996. Her practical sewing and garment-making
          background informs the proposed academy’s emphasis on skills transfer.
        </p>
        <p>
          Inspired by traditional, 1990s-era sewing education, the concept
          places hands-on practice at the centre of learning. Its ambition is to
          help future learners develop confidence, creativity and practical
          garment-making skills.
        </p>
      </ContentSection>
      <ContentSection
        label="Intended learning areas"
        title="Learn the process. Practise the craft."
        wide
      >
        <p className={s.sectionLead}>
          These areas describe the proposed curriculum. They are not currently
          available courses, and no applications or enrolments are open.
        </p>
        <DetailCards items={academy.learningAreas} />
      </ContentSection>
      <ContentSection label="Our direction" title="A purpose for the future">
        <DetailCards
          items={[
            { title: "Proposed mission", description: academy.mission },
            { title: "Future vision", description: academy.vision },
          ]}
        />
      </ContentSection>
      <ContentSection
        label="The ambition"
        title="A place to learn. A future to build."
      >
        <p>
          The initial goal is a training environment capable of accommodating 20
          learners. This is a future capacity ambition, not current enrolment or
          an existing operational facility.
        </p>
        <h3>The future FATU.E.D College vision</h3>
        <p>
          The long-term ambition is to establish FATU.E.D College. This remains
          a future vision; the academy is not currently operating, accredited or
          registered as a college. No recognised qualification is being offered.
        </p>
        <Gallery
          images={classroomGallery}
          placeholders={[
            { label: "Proposed classroom", context: "Future initiative placeholder. No existing academy facility is represented." },
            { label: "Practical training space", context: "Future initiative placeholder. No current classes or training facilities are represented." },
          ]}
          emptyTitle="A learning environment, envisioned"
          emptyDescription="The proposed setting would support practical sewing and garment-making. No photographs of an operational academy or current classes are presented here."
        />
      </ContentSection>
      <ContentSection
        label="General interest & enquiries"
        title="Interested in the vision?"
      >
        <p>
          You can contact FATU.E.D to ask about the academy’s development or
          express interest in future programmes. An expression of interest is
          not an application, an enrolment or a reservation of a place.
        </p>
        <p>
          Programme details and enrolment information will be announced when the
          academy is ready. There is no registration or payment process on this
          website.
        </p>
      </ContentSection>
      <ContactBand
        contactHref="/contact?topic=academy#enquiry"
        contactLabel="Prepare an expression of interest"
        title="Connect with our vision"
        text="Ask a question about the proposed academy or express general interest in its future development. Enrolment is not open."
        primaryLabel="Ask about the future academy"
        whatsappMessage="Hello, I would like to ask about the future F.E.D Old School Academy. I understand the academy is not operating or accepting enrolments and that this enquiry does not reserve a place."
      />
    </>
  );
}
