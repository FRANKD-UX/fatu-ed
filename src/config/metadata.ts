import type { Metadata } from "next";
import { siteUrl, pageUrl } from "./site";
export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  return {
    title,
    description,
    alternates: siteUrl ? { canonical: pageUrl(path)?.href } : undefined,
    openGraph: {
      title: `${title} | FATU.E.D`,
      description,
      type: "website",
      locale: "en_ZA",
      siteName: "FATU.E.D",
      ...(siteUrl ? { url: pageUrl(path) } : {}),
    },
  };
}
