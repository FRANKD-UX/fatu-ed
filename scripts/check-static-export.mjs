import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
assert(
  process.env.NEXT_PUBLIC_SITE_URL,
  "Set NEXT_PUBLIC_SITE_URL for the export check.",
);
const siteRoot = new URL(
  `${process.env.NEXT_PUBLIC_SITE_URL.replace(/\/+$/, "")}/`,
);
const routes = [
  "",
  "about",
  "general-trading",
  "designs",
  "academy",
  "contact",
];
const pages = new Map();
const attributes = (html, expression) =>
  [...html.matchAll(expression)].map((match) =>
    match[1].replaceAll("&amp;", "&"),
  );
const normalized = (path) => `${path.replace(/\/+$/, "")}/`;
const exportedPathExists = (pathname) =>
  pathname.startsWith(`${basePath}/`) &&
  existsSync(join("out", decodeURIComponent(pathname.slice(basePath.length + 1))));

for (const route of routes) {
  const filename = join("out", route, "index.html");
  assert(existsSync(filename), `Missing exported route: ${filename}`);
  const html = readFileSync(filename, "utf8");
  const ids = new Set(attributes(html, /\bid="([^"]*)"/g));
  const links = attributes(html, /<a\b[^>]*\bhref="([^"]*)"/g);
  const assets = attributes(html, /<(?:script|img)\b[^>]*\bsrc="([^"]*)"/g);
  assets.push(
    ...attributes(
      html,
      /<link\b[^>]*\brel="(?:stylesheet|preload|modulepreload|icon|apple-touch-icon)"[^>]*\bhref="([^"]*)"/g,
    ),
  );
  const canonicals = attributes(
    html,
    /<link\b[^>]*\brel="canonical"[^>]*\bhref="([^"]*)"/g,
  );
  assert.equal(canonicals.length, 1, `${route}: expected one canonical`);
  assert.equal(
    normalized(canonicals[0]),
    normalized(new URL(route, siteRoot).href),
    `${route}: incorrect canonical`,
  );
  for (const asset of assets) {
    if (!asset.startsWith("/") || asset.startsWith("//")) continue;
    const pathname = new URL(asset, siteRoot).pathname;
    assert(
      pathname.startsWith(`${basePath}/`),
      `Asset outside basePath: ${asset}`,
    );
    assert(
      exportedPathExists(pathname),
      `Missing asset: ${asset}`,
    );
  }
  assert.equal(
    (html.match(/<h1\b/g) || []).length,
    1,
    `${route}: expected one H1`,
  );
  assert(!/[↗→↓←]/.test(html), `${route}: decorative arrow found`);
  pages.set(normalized(`${basePath}/${route}`), { links, ids });
  console.log(`PASS /${route}: exported page, canonical, heading and assets`);
}

for (const [route, { links, ids }] of pages) {
  for (const link of links) {
    if (link.startsWith("#")) {
      assert(
        ids.has(decodeURIComponent(link.slice(1))),
        `${route}: missing anchor ${link}`,
      );
    } else if (link.startsWith("/") && !link.startsWith("//")) {
      const url = new URL(link, siteRoot);
      const target = pages.get(normalized(url.pathname));
      if (!target) {
        assert(
          exportedPathExists(url.pathname),
          `${route}: unknown internal destination ${link}`,
        );
        continue;
      }
      if (url.hash)
        assert(
          target.ids.has(decodeURIComponent(url.hash.slice(1))),
          `${route}: missing target anchor ${link}`,
        );
    }
  }
}
assert(existsSync("out/404.html"), "Missing GitHub Pages 404 page");
const sitemap = readFileSync("out/sitemap.xml", "utf8");
assert.equal((sitemap.match(/<url>/g) || []).length, routes.length);
for (const route of routes)
  assert(
    sitemap.includes(new URL(route, siteRoot).href),
    `Missing sitemap URL: ${route}`,
  );
assert(
  readFileSync("out/robots.txt", "utf8").includes(
    new URL("sitemap.xml", siteRoot).href,
  ),
);
console.log("PASS: internal routes/anchors, sitemap, robots and 404 page");
