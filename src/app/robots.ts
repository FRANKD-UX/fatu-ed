import type { MetadataRoute } from "next";
import { siteUrl, pageUrl } from "@/config/site";
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return siteUrl
    ? {
        rules: { userAgent: "*", allow: "/" },
        sitemap: pageUrl("/sitemap.xml")!.href,
      }
    : { rules: { userAgent: "*", disallow: "/" } };
}
