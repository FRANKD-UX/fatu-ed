const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
export const siteUrl = configuredUrl ? new URL(configuredUrl) : undefined;
if (siteUrl && !["http:", "https:"].includes(siteUrl.protocol))
  throw new Error("NEXT_PUBLIC_SITE_URL must be an HTTP(S) URL.");
// Resolve metadata within a project-site path as well as on a custom domain.
export function pageUrl(path: string): URL | undefined {
  if (!siteUrl) return undefined;
  const root = `${siteUrl.href.replace(/\/+$/, "")}/`;
  return new URL(path.replace(/^\/+/, ""), root);
}
export const site = {
  name: "FATU.E.D",
  tagline: "Your Vision. Our Creativity. Your Future.",
  contact: {
    phone: "073 300 4914",
    telephone: "tel:+27733004914",
    whatsapp: "https://wa.me/27733004914",
    email: "fatuedolie@gmail.com",
    emailUri: "mailto:fatuedolie@gmail.com",
    location: "338 NU 10, Mdantsane, East London, 5219, Eastern Cape, South Africa",
    hours: "By arrangement",
  },
  registration: "2014/107035/07",
} as const;
export function whatsappEnquiry(subject: string) {
  return `${site.contact.whatsapp}?text=${encodeURIComponent(subject)}`;
}
