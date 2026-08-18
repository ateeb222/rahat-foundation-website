import type { MetadataRoute } from 'next';

import { jnmcWheelchairHandoverPhotos } from '@/lib/jnmc-handover-media';

const siteUrl = 'https://www.rahatsocialimpact.com';
const wheelchairImageUrls = jnmcWheelchairHandoverPhotos.map((photo) => `${siteUrl}${photo.src}`);

const routes = [
  '',
  '/about',
  '/wheelchair',
  '/programs',
  '/impact',
  '/media',
  '/transparency',
  '/donate',
  '/donor-details',
  '/sadaqah',
  '/volunteer',
  '/contact',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date('2026-08-18'),
    changeFrequency: route === '' || route === '/impact' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route === '/donate' || route === '/about' ? 0.9 : 0.7,
    images: route === '' || route === '/wheelchair' ? wheelchairImageUrls : undefined,
  }));
}
