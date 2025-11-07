export const runtime = "nodejs";

import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const baseUrl = "https://khmlogistics.com"; // No trailing slash
    const appDir = path.join(process.cwd(), "src", "app");
    const today = new Date().toISOString().split("T")[0];

    const staticRoutes = getAllPages(appDir);

    const allUrls = staticRoutes.map((route) => ({
      loc: `${baseUrl}${route}`,
      lastmod: today,
      priority: route === "/" ? "1.0" : "0.7",
    }));

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
  .map(
    ({ loc, lastmod, priority }) => `<url>
  <loc>${loc}</loc>
  <lastmod>${lastmod}</lastmod>
  <priority>${priority}</priority>
</url>`
  )
  .join("\n")}
</urlset>`;

    return new Response(sitemap, {
      headers: {
        "Content-Type": "application/xml",
      },
    });
  } catch (error) {
    console.error("❌ Sitemap generation error:", error);
    return new Response("Sitemap generation failed", { status: 500 });
  }
}

function getAllPages(dir, routePrefix = "") {
  if (!fs.existsSync(dir)) return [];

  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let routes = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      routes = routes.concat(
        getAllPages(fullPath, `${routePrefix}/${entry.name}`)
      );
    } else if (
      ["page.js", "page.jsx", "page.ts", "page.tsx"].includes(entry.name)
    ) {
      const route = routePrefix === "" ? "/" : routePrefix;
      if (!route.includes("[")) {
        routes.push(route);
      }
    }
  }

  return routes;
}
