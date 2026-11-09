import { PageHero, ContentSection } from "@/components/divisions/PageShell";
import { LinkButton } from "@/components/ui/LinkButton";
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
        <LinkButton href="/">Back to Home</LinkButton>
      </ContentSection>
    </>
  );
}
