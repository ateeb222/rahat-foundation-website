import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.rahatsocialimpact.com'),
  title: {
    default: 'Rahat Social Impact Foundation',
    template: '%s | Rahat Social Impact Foundation',
  },
  description:
    'Rahat Social Impact Foundation is a healthcare-focused Section 8 NGO supporting patient mobility, hospital infrastructure, and community-powered healthcare access.',
  openGraph: {
    title: 'Rahat Social Impact Foundation',
    description:
      'Healthcare-focused NGO supporting patient mobility, hospital infrastructure, and community-powered healthcare access.',
    url: 'https://www.rahatsocialimpact.com',
    siteName: 'Rahat Social Impact Foundation',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
