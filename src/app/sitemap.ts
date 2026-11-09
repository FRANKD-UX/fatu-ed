import type { MetadataRoute } from "next";
import { siteUrl, pageUrl } from "@/config/site";
import { navigation } from "@/content/navigation";
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return siteUrl ? navigation.map((n) => ({ url: pageUrl(n.href)!.href })) : [];
}
