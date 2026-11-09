import { PageHero, ContentSection } from "@/components/divisions/PageShell";
import { LinkButton } from "@/components/ui/LinkButton";
import s from "@/components/divisions/Pages.module.scss";
export default function NotFound() {
  return (
    <>
      <PageHero eyebrow="404 · Page not found" title="Let’s find your way back">
        <p>The page you are looking for could not be found.</p>
      </PageHero>
      <ContentSection title="Explore FATU.E.D">
        <p>
          Visit our homepage to discover our businesses, or contact us for
          assistance.
        </p>
        <div className={s.actions}>
          <LinkButton href="/">Back to Home</LinkButton>
          <LinkButton href="/contact" variant="secondary">Contact FATU.E.D</LinkButton>
        </div>
      </ContentSection>
    </>
  );
}
