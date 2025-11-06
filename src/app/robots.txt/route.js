// app/robots.txt/route.js

export async function GET() {
    const content = `
  User-agent: *
  Allow: /
  
  Sitemap: https://khm-logistics.vercel.app/
  `
  
    return new Response(content.trim(), {
      headers: {
        'Content-Type': 'text/plain',
      },
    })
  }
  