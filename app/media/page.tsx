import type { Metadata } from 'next';

import { MediaClippingGallery } from '@/components/media/MediaClippingGallery';
import { SocialCoverageCards } from '@/components/media/SocialCoverageCards';
import { mediaClippings, onlineCoverage, socialCoverage } from '@/lib/media-coverage';

export const metadata: Metadata = {
  title: { absolute: 'Media & Coverage | Rahat Social Impact Foundation' },
  description:
    'Browse institutional, online, press, newspaper, and social coverage documenting Rahat Social Impact Foundation healthcare initiatives.',
  alternates: { canonical: '/media' },
  openGraph: {
    title: 'Media & Coverage | Rahat Social Impact Foundation',
    description:
      'A public archive of institutional, press, newspaper, and social coverage of Rahat Social Impact Foundation healthcare work.',
    url: '/media',
    siteName: 'Rahat Social Impact Foundation',
    type: 'website',
    images: [
      {
        url: '/images/impact/jnmc-wheelchair-handover-2026/event/rahat-foundation-jnmc-amu-handover-ceremony-2026.jpg',
        width: 2400,
        height: 1600,
        alt: 'Formal JNMC wheelchair handover ceremony',
      },
    ],
  },
};

export default function MediaPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F8F5EF] pb-16 text-[#1F2937]">
      <section className="border-b border-[#D9A441]/30 bg-[#07361F] text-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#E7C76D] sm:text-sm">Public trust archive</p>
          <h1 className="mt-3 text-3xl font-bold leading-tight sm:text-5xl">Media &amp; Coverage</h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
            This section archives institutional, press, newspaper, and social coverage of Rahat Social Impact Foundation&apos;s work. Inclusion records publication or sharing and does not imply endorsement.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14" aria-labelledby="online-coverage-heading">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#3B635D]">Source links</p>
          <h2 id="online-coverage-heading" className="mt-3 text-2xl font-bold text-[#07361F] sm:text-4xl">
            Institutional / Online Coverage
          </h2>
        </div>
        <div className="mt-7 grid gap-4 md:grid-cols-3">
          {onlineCoverage.map((item) => (
            <article key={item.url} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#3B635D]">{item.category}</p>
              <h3 className="mt-3 text-xl font-bold leading-7 text-[#07361F]">{item.source}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">{item.title}</p>
              <p className="mt-3 text-xs font-semibold text-slate-500">Published {item.date}</p>
              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex min-h-[48px] items-center font-bold text-[#07361F] underline decoration-[#C8951A] underline-offset-4"
              >
                View source
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-[#D9A441]/25 bg-white" aria-labelledby="press-coverage-heading">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#3B635D]">Media archive</p>
            <h2 id="press-coverage-heading" className="mt-3 text-2xl font-bold text-[#07361F] sm:text-4xl">
              Press &amp; Newspaper Clippings
            </h2>
            <p className="mt-3 text-base leading-7 text-slate-700">
              Select a clipping to inspect the original image at a readable size. Article text is not reproduced separately.
            </p>
          </div>
          <div className="mt-7">
            <MediaClippingGallery items={mediaClippings} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14" aria-labelledby="social-coverage-heading">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#3B635D]">Original posts</p>
          <h2 id="social-coverage-heading" className="mt-3 text-2xl font-bold text-[#07361F] sm:text-4xl">
            Social Coverage
          </h2>
          <p className="mt-3 text-base leading-7 text-slate-700">
            Social posts remain lightweight until opened. Instagram embeds load only after selection; Facebook share links open at their original source.
          </p>
        </div>
        <div className="mt-7">
          <SocialCoverageCards items={socialCoverage} />
        </div>
      </section>
    </main>
  );
}
