import type { Metadata } from 'next';
import Link from 'next/link';

import { EventPhotoCarousel } from '@/components/impact/EventPhotoCarousel';
import { WheelchairPhase2Campaign } from '@/components/impact/WheelchairPhase2Campaign';
import { MediaClippingGallery } from '@/components/media/MediaClippingGallery';
import { SocialLink } from '@/components/social/SocialLink';
import { donationConfig } from '@/lib/donation-config';
import { jnmcWheelchairHandoverPhotos } from '@/lib/jnmc-handover-media';
import { mediaClippings, onlineCoverage } from '@/lib/media-coverage';
import { organization } from '@/lib/organization';

const primary = 'inline-flex min-h-[50px] w-full items-center justify-center rounded-full bg-[#07361F] px-5 py-3 text-base font-bold text-white shadow-lg transition hover:bg-[#1A4D2E] sm:w-auto';
const secondary = 'inline-flex min-h-[50px] w-full items-center justify-center rounded-full border border-[#07361F] bg-white px-5 py-3 text-base font-bold text-[#07361F] transition hover:border-[#C8951A] hover:bg-[#F8F5EF] sm:w-auto';
const featuredEventPhoto = jnmcWheelchairHandoverPhotos[0];

export const metadata: Metadata = {
  title: 'Healthcare Access and Patient Mobility Support',
  description:
    'Rahat Social Impact Foundation is a healthcare NGO in India supporting verified patient mobility, hospital equipment and healthcare-access initiatives.',
  openGraph: {
    title: '80 Wheelchairs Delivered to JNMC Hospital',
    description:
      'See the completed patient-mobility initiative, formal institutional handover and documented healthcare work of Rahat Social Impact Foundation.',
    url: '/',
    images: featuredEventPhoto
      ? [{ url: featuredEventPhoto.src, width: featuredEventPhoto.width, height: featuredEventPhoto.height, alt: featuredEventPhoto.alt }]
      : [],
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F8F5EF] pb-24 text-[#1F2937] sm:pb-16">
      <section className="bg-[radial-gradient(circle_at_top_left,rgba(119,166,37,0.18),transparent_32%),linear-gradient(135deg,#F8F5EF_0%,#FFFFFF_52%,#EAF3E2_100%)]">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-9 sm:px-6 sm:py-14 lg:grid-cols-[1fr_0.82fr] lg:items-center lg:gap-x-7">
          <div className="lg:col-start-1 lg:row-start-1">
            <p className="inline-flex rounded-full border border-[#77A625]/45 bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#25472D]">
              Completed · Formal handover 14 August 2026
            </p>
            <h1 className="mt-4 max-w-3xl text-[34px] font-bold leading-[1.08] text-[#07361F] min-[390px]:text-[36px] sm:text-5xl lg:text-[56px]">
              80 wheelchairs delivered to JNMC Hospital.
            </h1>
            <p className="mt-4 max-w-2xl text-lg font-semibold leading-7 text-[#25472D] sm:text-xl sm:leading-8">
              Rahat Foundation formally handed over 80 wheelchairs on 14 August 2026 to {donationConfig.campaign.recipient}.
            </p>
          </div>

          <div className="min-w-0 lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <EventPhotoCarousel
              photos={jnmcWheelchairHandoverPhotos}
              ariaLabel="JNMC wheelchair handover highlights"
              autoplayIntervalMs={6500}
              imageSizes="(min-width: 1024px) 520px, (min-width: 640px) calc(100vw - 48px), calc(100vw - 32px)"
            />
          </div>

          <div className="lg:col-start-1 lg:row-start-2">
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-700 sm:text-lg">
              Join Rahat Foundation&apos;s community-powered healthcare work through secure Sadaqah and voluntary support. UPI and bank transfer remain available as optional alternatives.
            </p>
            <div className="mt-5 grid gap-2 border-y border-[#C8951A]/35 py-4 text-sm font-semibold leading-6 text-[#25472D] sm:grid-cols-2">
              <p>Registered Section 8 nonprofit company</p>
              <p>CIN {organization.cin}</p>
              <p>{donationConfig.campaign.totalDelivered} wheelchairs delivered · {donationConfig.campaign.status}</p>
              <p>Support: {organization.phoneDisplay}</p>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href="/donate" className={primary}>Support Rahat Foundation&apos;s healthcare work</Link>
              <Link href="/wheelchair" className={secondary}>View campaign</Link>
              <Link href="/sadaqah" className={secondary}>Monthly Sadaqah</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#D9A441]/25 bg-white">
        <div className="mx-auto grid max-w-7xl gap-3 px-4 py-5 sm:px-6 sm:grid-cols-3">
          <div className="rounded-2xl bg-[#F8F5EF] p-4"><p className="text-xs font-bold uppercase tracking-wide text-slate-500">Delivered</p><p className="mt-1 text-3xl font-bold text-[#07361F]">{donationConfig.campaign.totalDelivered}</p><p className="mt-1 text-sm text-slate-600">wheelchairs</p></div>
          <div className="rounded-2xl bg-[#F8F5EF] p-4"><p className="text-xs font-bold uppercase tracking-wide text-slate-500">Status</p><p className="mt-1 text-3xl font-bold text-[#07361F]">{donationConfig.campaign.status}</p><p className="mt-1 text-sm text-slate-600">Formal handover: {donationConfig.campaign.handoverDate}</p></div>
          <div className="rounded-2xl bg-[#F8F5EF] p-4"><p className="text-xs font-bold uppercase tracking-wide text-slate-500">Recipient</p><p className="mt-1 text-xl font-bold text-[#07361F]">JNMC Hospital</p><p className="mt-1 text-sm text-slate-600">Aligarh Muslim University, Aligarh</p></div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12" aria-label="Active Phase 2 wheelchair campaign">
        <WheelchairPhase2Campaign />
      </section>

      <section className="border-b border-[#D9A441]/25 bg-[#EAF3E2]" aria-labelledby="healthcare-partner-heading">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 py-8 sm:px-6 sm:py-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#3B635D]">Future healthcare support</p>
            <h2 id="healthcare-partner-heading" className="mt-2 text-2xl font-bold leading-tight text-[#07361F] sm:text-3xl">
              Looking to support wheelchairs or hospital equipment?
            </h2>
            <p className="mt-3 text-base leading-7 text-slate-700">
              Rahat Social Impact Foundation works on verified healthcare-access and patient-mobility needs. Individuals, institutions and organisations interested in donating wheelchairs, patient-mobility equipment or supporting hospital healthcare initiatives in India can connect with Rahat Foundation.
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Partnership enquiries may cover wheelchair donation, medical equipment support and future government-hospital patient mobility needs.
            </p>
          </div>
          <Link href="/contact" className={primary}>Partner with Rahat Foundation</Link>
        </div>
      </section>

      <section className="border-b border-[#D9A441]/25 bg-white" aria-labelledby="home-media-heading">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#3B635D]">Media &amp; institutional coverage</p>
            <h2 id="home-media-heading" className="mt-3 text-2xl font-bold leading-tight text-[#07361F] sm:text-4xl">
              Impact recognised beyond our website.
            </h2>
            <p className="mt-3 text-base leading-7 text-slate-700">
              The completed JNMC wheelchair handover appears in institutional, online, social, and newspaper coverage. Coverage is archived as a public record and does not imply endorsement.
            </p>
          </div>

          <div className="mt-5 flex flex-wrap gap-2" aria-label="Online coverage sources">
            {onlineCoverage.map((item) => (
              <span key={item.url} className="rounded-full border border-[#2A7A45]/30 bg-[#F1F7EE] px-3 py-1.5 text-sm font-semibold text-[#07361F]">
                {item.source}
              </span>
            ))}
          </div>

          <div className="mt-7">
            <MediaClippingGallery items={mediaClippings.slice(0, 3)} />
          </div>

          <Link href="/media" className={`${primary} mt-6`}>
            View all media coverage
          </Link>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-4 py-10 sm:px-6 lg:grid-cols-2">
        <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#3B635D]">Verified giving</p>
          <h2 className="mt-3 text-2xl font-bold leading-tight text-[#07361F] sm:text-3xl">Official channels, clear records and transparent reporting.</h2>
          <p className="mt-4 text-base leading-7 text-slate-700">Rahat Foundation publishes statutory status, payment policies and campaign updates for donor review.</p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Link href="/transparency" className={secondary}>View transparency</Link>
            <Link href="/donate" className={primary}>Open donation page</Link>
          </div>
        </article>

        <article className="rounded-3xl border border-[#C8951A] bg-[#07361F] p-5 text-white shadow-sm sm:p-7">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#D9A441]">Monthly Sadaqah</p>
          <h2 className="mt-3 text-2xl font-bold leading-tight sm:text-3xl">Join monthly Sadaqah from ₹3 a day.</h2>
          <p className="mt-4 text-base leading-7 text-white/85">₹100/month is about ₹3 a day. ₹300/month is about ₹10 a day. Approve secure AutoPay once and cancel future debits whenever required.</p>
          <Link href="/sadaqah" className="mt-5 inline-flex min-h-[50px] w-full items-center justify-center rounded-full border border-[#D9A441] bg-white px-5 py-3 text-base font-bold text-[#07361F] sm:w-auto">Start Monthly Sadaqah</Link>
        </article>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <div className="grid gap-6 border-y border-[#C8951A]/30 bg-white px-5 py-7 sm:px-7 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#3B635D]">Follow the work</p>
            <h2 className="mt-2 text-2xl font-bold leading-tight text-[#07361F] sm:text-3xl">Campaign progress, documented in public.</h2>
            <p className="mt-3 max-w-3xl text-base leading-7 text-slate-700">Follow completed campaign milestones and Rahat Foundation&apos;s continuing healthcare work through the official social channels.</p>
          </div>
          <div className="flex flex-col gap-3 min-[460px]:flex-row">
            <SocialLink platform="instagram" href={organization.instagram} label="Official Instagram" className={primary} />
            <SocialLink platform="linkedin" href={organization.linkedin} className={secondary} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
        <div className="rounded-3xl border border-[#D9A441]/35 bg-white p-5 shadow-sm sm:p-7">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#3B635D]">Current focus</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {['Patient mobility', 'Hospital support', 'Digital health', 'Community healthcare'].map((item) => (
              <div key={item} className="rounded-2xl bg-[#F8F5EF] p-4 text-base font-bold text-[#07361F]">{item}</div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
