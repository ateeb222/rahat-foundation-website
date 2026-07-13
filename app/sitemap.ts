import type { MetadataRoute } from 'next';

const routes = [
  '',
  '/about',
  '/wheelchair',
  '/programs',
  '/impact',
  '/transparency',
  '/donate',
  '/sadaqah',
  '/volunteer',
  '/contact',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://www.rahatsocialimpact.com${route}`,
    lastModified: new Date('2026-07-13'),
    changeFrequency: route === '' || route === '/impact' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route === '/donate' || route === '/about' ? 0.9 : 0.7,
  }));
}
