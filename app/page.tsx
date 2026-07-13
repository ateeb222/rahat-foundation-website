import Image from 'next/image';
import Link from 'next/link';

import { donationConfig } from '@/lib/donation-config';
import { organization } from '@/lib/organization';

const primary = 'inline-flex min-h-[50px] w-full items-center justify-center rounded-full bg-[#07361F] px-5 py-3 text-base font-bold text-white shadow-lg transition hover:bg-[#1A4D2E] sm:w-auto';
const secondary = 'inline-flex min-h-[50px] w-full items-center justify-center rounded-full border border-[#07361F] bg-white px-5 py-3 text-base font-bold text-[#07361F] transition hover:border-[#C8951A] hover:bg-[#F8F5EF] sm:w-auto';

export default function HomePage() {
  const remaining = donationConfig.campaign.totalGoal - donationConfig.campaign.verifiedSponsored;

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F8F5EF] pb-24 text-[#1F2937] sm:pb-16">
      <section className="bg-[radial-gradient(circle_at_top_left,rgba(119,166,37,0.18),transparent_32%),linear-gradient(135deg,#F8F5EF_0%,#FFFFFF_52%,#EAF3E2_100%)]">
        <div className="mx-auto grid max-w-7xl gap-7 px-4 py-9 sm:px-6 sm:py-14 lg:grid-cols-[1fr_0.82fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-[#77A625]/45 bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#25472D]">
              JNMC Hospital Patient Mobility Initiative
            </p>
            <h1 className="mt-4 max-w-3xl text-[34px] font-bold leading-[1.08] text-[#07361F] min-[390px]:text-[36px] sm:text-5xl lg:text-[56px]">
              Help patients move with dignity.
            </h1>
            <p className="mt-4 max-w-2xl text-lg font-semibold leading-7 text-[#25472D] sm:text-xl sm:leading-8">
              ₹5,800 helps sponsor one wheelchair for Rahat&apos;s Phase 1 campaign at JNMC Hospital.
            </p>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-700 sm:text-lg">
              Join Rahat&apos;s community-powered healthcare work through secure Sadaqah and voluntary support. UPI and bank transfer remain available as optional alternatives.
            </p>
            <div className="mt-5 grid gap-2 border-y border-[#C8951A]/35 py-4 text-sm font-semibold leading-6 text-[#25472D] sm:grid-cols-2">
              <p>Registered Section 8 nonprofit company</p>
              <p>CIN {organization.cin}</p>
              <p>{donationConfig.campaign.verifiedSponsored} of {donationConfig.campaign.totalGoal} wheelchairs sponsored</p>
              <p>Support: {organization.phoneDisplay}</p>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href="/donate" className={primary}>Donate securely</Link>
              <Link href="/wheelchair" className={secondary}>View campaign</Link>
              <Link href="/sadaqah" className={secondary}>Monthly Sadaqah</Link>
            </div>
          </div>

          <figure className="overflow-hidden rounded-[1.4rem] border border-[#D9A441]/35 bg-white p-2 shadow-[0_20px_55px_rgba(7,54,31,0.13)]">
            <div className="relative aspect-[3/4] overflow-hidden rounded-[1.05rem] bg-[#EAF3E2] sm:aspect-[4/5]">
              <Image
                src="/images/wheelchair/factory-visit.jpeg"
                alt="Rahat representative reviewing wheelchairs at the supplier facility"
                fill
                priority
                unoptimized
                sizes="(min-width: 1024px) 460px, 92vw"
                className="object-cover"
              />
            </div>
            <figcaption className="px-3 py-3 text-sm leading-6 text-slate-600">
              Physical review of wheelchairs prepared for Rahat&apos;s patient mobility initiative.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="border-y border-[#D9A441]/25 bg-white">
        <div className="mx-auto grid max-w-7xl gap-3 px-4 py-5 sm:px-6 sm:grid-cols-3">
          <div className="rounded-2xl bg-[#F8F5EF] p-4"><p className="text-xs font-bold uppercase tracking-wide text-slate-500">Goal</p><p className="mt-1 text-3xl font-bold text-[#07361F]">80</p></div>
          <div className="rounded-2xl bg-[#F8F5EF] p-4"><p className="text-xs font-bold uppercase tracking-wide text-slate-500">Verified sponsored</p><p className="mt-1 text-3xl font-bold text-[#07361F]">{donationConfig.campaign.verifiedSponsored}</p><p className="mt-1 text-sm text-slate-600">{remaining} remaining</p></div>
          <div className="rounded-2xl bg-[#F8F5EF] p-4"><p className="text-xs font-bold uppercase tracking-wide text-slate-500">One wheelchair</p><p className="mt-1 text-3xl font-bold text-[#07361F]">₹5,800</p></div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-4 py-10 sm:px-6 lg:grid-cols-2">
        <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#3B635D]">Verified giving</p>
          <h2 className="mt-3 text-2xl font-bold leading-tight text-[#07361F] sm:text-3xl">Official channels, clear records and transparent reporting.</h2>
          <p className="mt-4 text-base leading-7 text-slate-700">Rahat publishes statutory status, payment policies and campaign updates for donor review.</p>
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
            <p className="mt-3 max-w-3xl text-base leading-7 text-slate-700">Follow procurement updates, field activity and campaign milestones through Rahat’s official social channels.</p>
          </div>
          <div className="flex flex-col gap-3 min-[460px]:flex-row">
            <a href={organization.instagram} target="_blank" rel="noreferrer" className={primary}>Official Instagram</a>
            <a href={organization.linkedin} target="_blank" rel="noreferrer" className={secondary}>LinkedIn</a>
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

      <Link href="/donate" className="fixed inset-x-4 bottom-4 z-50 rounded-full border border-[#D9A441] bg-[#07361F] px-5 py-4 text-center text-base font-bold text-white shadow-[0_16px_34px_rgba(7,54,31,0.3)] sm:hidden">
        Donate securely
      </Link>
    </main>
  );
}
