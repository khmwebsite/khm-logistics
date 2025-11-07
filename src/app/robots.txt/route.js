export async function GET() {
  const content = `
User-agent: *
Allow: /

# Disallow internal Next.js folders
Disallow: /_next/
Disallow: /private/

# Your actual sitemap file
Sitemap: https://www.khmlogistics.com/sitemap.xml
  `;

  return new Response(content.trim(), {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
