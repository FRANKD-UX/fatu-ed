import type { NextConfig } from "next";

const staticExport = process.env.STATIC_EXPORT === "true";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: staticExport ? "export" : undefined,
  basePath,
  trailingSlash: staticExport,
  // GitHub Pages serves files only; there is no image-optimization server.
  images: { unoptimized: staticExport },
};

export default nextConfig;
