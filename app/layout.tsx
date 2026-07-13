import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { directors, organization } from '@/lib/organization';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.rahatsocialimpact.com'),
  title: {
    default: 'Rahat Social Impact Foundation',
    template: '%s | Rahat Social Impact Foundation',
  },
  description:
    'Rahat Social Impact Foundation is a registered Section 8 nonprofit company supporting patient mobility, hospital infrastructure, digital health and community-powered healthcare access in India.',
  keywords: [
    'Rahat Social Impact Foundation',
    'Rahat Foundation',
    'Section 8 nonprofit India',
    'healthcare NGO Delhi',
    'patient mobility India',
    'wheelchair donation India',
    'Ramsha Sultan NGO',
    'Ateeb Sultan Khan Rahat',
  ],
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Rahat Social Impact Foundation',
    description:
      'Healthcare-focused NGO supporting patient mobility, hospital infrastructure, and community-powered healthcare access.',
    url: 'https://www.rahatsocialimpact.com',
    siteName: 'Rahat Social Impact Foundation',
    type: 'website',
    images: [{ url: '/images/hero/hero.png', alt: 'Rahat Social Impact Foundation healthcare support initiative' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rahat Social Impact Foundation',
    description: 'Registered Section 8 nonprofit company supporting accountable healthcare action in India.',
    images: ['/images/hero/hero.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'NGO',
    name: organization.displayName,
    legalName: organization.legalName,
    url: organization.website,
    email: organization.email,
    telephone: organization.phoneDisplay,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'G 66/7, First Floor, Shaheen Bagh, Abul Fazal Enclave Part 2, Jamia Nagar',
      addressLocality: 'New Delhi',
      postalCode: '110025',
      addressCountry: 'IN',
    },
    sameAs: [organization.instagram, organization.linkedin],
    founder: directors.map((director) => ({
      '@type': 'Person',
      name: director.name,
      jobTitle: director.role,
      sameAs: director.links.map((link) => link.href),
    })),
  };

  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
