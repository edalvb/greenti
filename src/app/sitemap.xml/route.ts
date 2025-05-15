import { routing } from '@/core/config/i18n/routing';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://edalvb.github.io/greenti';

function generateSiteMap() {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  routing.locales.forEach(locale => {
    const langPath = locale === routing.defaultLocale ? '' : `/${locale}`;
    xml += `
      <url>
        <loc>${BASE_URL}${langPath}/</loc>
        <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
      </url>`;
  });

  xml += `
    </urlset>`;
  return xml;
}

export async function GET() {
  const body = generateSiteMap();
  return new Response(body, {
    status: 200,
    headers: {
      'Cache-control': 'public, s-maxage=86400, stale-while-revalidate',
      'content-type': 'application/xml',
    },
  });
}