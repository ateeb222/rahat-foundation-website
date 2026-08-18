import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { EventPhotoCarousel } from '@/components/impact/EventPhotoCarousel';
import { donationConfig } from '@/lib/donation-config';
import { jnmcWheelchairHandoverPhotos } from '@/lib/jnmc-handover-media';

const featuredEventPhoto = jnmcWheelchairHandoverPhotos[0];

export const metadata: Metadata = {
  title: '80 Wheelchairs Delivered to JNMC Hospital',
  description:
    'Rahat Social Impact Foundation completed the JNMC Hospital Patient Mobility Initiative with the formal handover of 80 wheelchairs on 14 August 2026.',
  openGraph: {
    title: '80 Wheelchairs Delivered to JNMC Hospital',
    description:
      'Completed patient mobility initiative with formal handover on 14 August 2026.',
    url: '/wheelchair',
    siteName: 'Rahat Social Impact Foundation',
    images: featuredEventPhoto
      ? [{ url: featuredEventPhoto.src, width: featuredEventPhoto.width, height: featuredEventPhoto.height, alt: featuredEventPhoto.alt }]
      : [],
    type: 'website',
  },
};

const buttonPrimary =
  'inline-flex min-h-[50px] w-full items-center justify-center rounded-full bg-[#07361F] px-5 py-3 text-base font-bold text-white shadow-lg transition hover:bg-[#1A4D2E] focus:outline-none focus:ring-2 focus:ring-[#C8951A] focus:ring-offset-2 sm:w-auto';
const buttonSecondary =
  'inline-flex min-h-[50px] w-full items-center justify-center rounded-full border border-[#07361F] bg-white px-5 py-3 text-base font-bold text-[#07361F] transition hover:border-[#C8951A] hover:bg-[#F8F5EF] focus:outline-none focus:ring-2 focus:ring-[#C8951A] focus:ring-offset-2 sm:w-auto';

export default function WheelchairPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F8F5EF] pb-24 text-[#1F2937] sm:pb-16">
      <section className="border-b border-[#D9A441]/25 bg-[linear-gradient(145deg,#07361F_0%,#145B37_100%)] text-white">
        <div className="mx-auto grid max-w-7xl gap-7 px-4 py-9 sm:px-6 sm:py-14 lg:grid-cols-[1fr_0.82fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#E7C76D] sm:text-sm sm:tracking-[0.2em]">
              Completed · Formal handover 14 August 2026
            </p>
            <h1 className="mt-3 max-w-3xl text-[34px] font-bold leading-[1.08] sm:text-5xl lg:text-6xl">
              80 wheelchairs delivered to JNMC Hospital.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/88 sm:text-lg sm:leading-8">
              Rahat Foundation formally handed over 80 wheelchairs to {donationConfig.campaign.recipient} on 14 August 2026.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href="/donate" className="inline-flex min-h-[52px] w-full items-center justify-center rounded-full border border-[#D9A441] bg-white px-6 py-3 text-base font-bold text-[#07361F] shadow-lg sm:w-auto sm:text-lg">
                Support Rahat Foundation&apos;s healthcare work
              </Link>
              <Link href="/transparency" className="inline-flex min-h-[52px] w-full items-center justify-center rounded-full border border-white/45 px-6 py-3 text-base font-bold text-white sm:w-auto sm:text-lg">
                Verify Rahat Foundation
              </Link>
            </div>
            <p className="mt-3 text-xs leading-5 text-white/75 sm:text-sm">
              General support and Monthly Sadaqah remain available through Rahat Foundation&apos;s official donation channels.
            </p>
          </div>

          <figure className="overflow-hidden rounded-[1.35rem] border border-white/20 bg-white/10 p-2 shadow-2xl">
            <div className="relative aspect-[3/4] overflow-hidden rounded-[1rem] bg-[#EAF3E2] sm:aspect-[4/5]">
              <Image
                src="/images/wheelchair/factory-visit.jpeg"
                alt="Rahat Foundation representative reviewing prepared wheelchairs at the supplier facility"
                fill
                priority
                sizes="(min-width: 1024px) 480px, 92vw"
                className="object-cover"
              />
            </div>
            <figcaption className="px-3 py-3 text-sm leading-6 text-white/85">
              Preparation-stage factory visit before the completed formal handover.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10">
        <div className="grid gap-3 sm:grid-cols-3">
          <article className="rounded-2xl border border-[#D9A441]/30 bg-white p-5 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-wide text-slate-500">Delivered</p>
            <p className="mt-2 text-4xl font-bold text-[#07361F]">{donationConfig.campaign.totalDelivered}</p>
            <p className="mt-1 text-sm text-slate-600">wheelchairs</p>
          </article>
          <article className="rounded-2xl border border-[#D9A441]/30 bg-white p-5 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-wide text-slate-500">Status</p>
            <p className="mt-2 text-4xl font-bold text-[#07361F]">{donationConfig.campaign.status}</p>
            <p className="mt-1 text-sm text-slate-600">JNMC Hospital Patient Mobility Initiative</p>
          </article>
          <article className="rounded-2xl border border-[#D9A441]/30 bg-white p-5 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-wide text-slate-500">Formal handover</p>
            <p className="mt-2 text-2xl font-bold text-[#07361F]">{donationConfig.campaign.handoverDate}</p>
            <p className="mt-1 text-sm text-slate-600">Aligarh</p>
          </article>
        </div>
      </section>

      {jnmcWheelchairHandoverPhotos.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6" aria-labelledby="handover-photos-heading">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#3B635D]">Event photographs</p>
          <h2 id="handover-photos-heading" className="mt-3 text-2xl font-bold leading-tight text-[#07361F] sm:text-3xl">
            Formal handover at JNMC Hospital
          </h2>
          <div className="mt-6">
            <EventPhotoCarousel
              photos={jnmcWheelchairHandoverPhotos}
              ariaLabel="JNMC wheelchair handover photographs"
              imageSizes="(min-width: 1280px) 1152px, (min-width: 640px) calc(100vw - 48px), calc(100vw - 32px)"
            />
          </div>
        </section>
      )}

      <section className="mx-auto grid max-w-7xl gap-5 px-4 py-8 sm:px-6 lg:grid-cols-2">
        <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#3B635D]">Completed initiative</p>
          <h2 className="mt-3 text-2xl font-bold leading-tight text-[#07361F] sm:text-3xl">Formal handover completed.</h2>
          <div className="mt-5 grid gap-3 text-sm leading-6 text-slate-700">
            <p className="rounded-2xl bg-[#F8F5EF] p-4">80 wheelchairs were formally handed over on 14 August 2026.</p>
            <p className="rounded-2xl bg-[#F8F5EF] p-4">The recipient was Jawaharlal Nehru Medical College &amp; Hospital.</p>
            <p className="rounded-2xl bg-[#F8F5EF] p-4">The recipient institution is part of Aligarh Muslim University in Aligarh.</p>
          </div>
        </article>

        <article className="rounded-3xl border border-[#C8951A] bg-white p-5 shadow-sm sm:p-7">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#3B635D]">Campaign record</p>
          <h2 className="mt-3 text-2xl font-bold leading-tight text-[#07361F] sm:text-3xl">JNMC Hospital Patient Mobility Initiative.</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {['80 wheelchairs delivered', 'Completed', 'Formal handover: 14 August 2026'].map((item) => (
              <div key={item} className="rounded-2xl border border-[#D9A441]/30 bg-[#FFF8E6] p-4 text-sm font-bold leading-6 text-[#5F4A12]">
                {item}
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/impact" className={buttonPrimary}>View impact updates</Link>
            <Link href="/transparency" className={buttonSecondary}>Verify Rahat Foundation</Link>
          </div>
        </article>
      </section>

      <Link href="/impact" className="fixed inset-x-4 bottom-4 z-50 rounded-full border border-[#D9A441] bg-[#07361F] px-5 py-4 text-center text-base font-bold text-white shadow-[0_16px_34px_rgba(7,54,31,0.3)] sm:hidden">
        View completed initiative
      </Link>
    </main>
  );
}
