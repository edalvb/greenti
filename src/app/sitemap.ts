import { MetadataRoute } from 'next';
import { getPathname } from '@/core/config/i18n/navigation';
import { appConfig } from '@/core/config/appConfig';
import { routing } from '@/core/config/i18n/routing';

export const dynamic = 'force-static';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || appConfig.baseUrl;

export default function sitemap(): MetadataRoute.Sitemap {
  const mainRoutes: Parameters<typeof getPathname>[0]['href'][] = [
    '/',
  ];

  const sitemapEntries = mainRoutes.flatMap(route => 
    routing.locales.map(locale => ({
      url: `${BASE_URL}${getPathname({ locale, href: route })}`,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: 'monthly' as const,
      priority: route === '/' ? 1.0 : 0.8,
      alternates: {
        languages: routing.locales.reduce((acc, currentLocale) => {
          acc[currentLocale] = `${BASE_URL}${getPathname({ locale: currentLocale, href: route })}`;
          return acc;
        }, {} as Record<string, string>)
      }
    }))
  );

  return sitemapEntries;
}