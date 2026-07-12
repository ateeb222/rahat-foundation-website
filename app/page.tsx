import Image from 'next/image';
import Link from 'next/link';

import { donationConfig } from '@/lib/donation-config';

const trustSignals = [
  'Official donation path through /donate',
  'Domestic donations only at present',
  'Verified progress after reconciliation',
];

const programs = [
  'Mobility & Patient Access',
  'Hospital Support Infrastructure',
  'Digital Health Transformation',
  'Patient Support & Navigation',
  'Community Healthcare Outreach',
];

const primaryLink =
  'inline-flex min-h-[52px] w-full items-center justify-center rounded-full border border-[#D9A441] bg-[#07361F] px-6 py-3 text-lg font-bold text-white shadow-[0_12px_28px_rgba(7,54,31,0.24)] transition hover:-translate-y-0.5 hover:bg-[#25472D] hover:shadow-[0_16px_32px_rgba(7,54,31,0.3)] focus:outline-none focus:ring-2 focus:ring-[#D9A441] focus:ring-offset-2 active:translate-y-0 active:bg-[#07361F] sm:w-auto';
const secondaryLink =
  'inline-flex min-h-[52px] w-full items-center justify-center rounded-full border-2 border-[#07361F] bg-white px-6 py-3 text-lg font-bold text-[#07361F] shadow-sm transition hover:-translate-y-0.5 hover:border-[#D9A441] hover:bg-[#F8F5EC] focus:outline-none focus:ring-2 focus:ring-[#D9A441] focus:ring-offset-2 active:translate-y-0 sm:w-auto';
const surfaceCard =
  'rounded-[1.25rem] border border-[#D9A441]/30 bg-white p-5 shadow-[0_14px_36px_rgba(7,54,31,0.08)] sm:p-6';

const remainingWheelchairs =
  donationConfig.campaign.totalGoal - donationConfig.campaign.verifiedSponsored;

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F8F5EC] pb-20 text-[#1F2933]">
      <section className="bg-[radial-gradient(circle_at_top_left,rgba(119,166,37,0.2),transparent_34%),linear-gradient(135deg,#F8F5EC_0%,#FFFFFF_50%,#EAF3E2_100%)]">
        <div className="mx-auto w-full max-w-7xl px-4 py-9 sm:px-6 sm:py-14 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
            <div>
              <p className="inline-flex rounded-full border border-[#77A625]/50 bg-white px-4 py-2 text-sm font-bold uppercase tracking-[0.16em] text-[#25472D] shadow-sm">
                JNMC Hospital Patient Mobility Initiative
              </p>
              <h1 className="mt-5 max-w-4xl text-[40px] font-bold leading-[1.02] text-[#07361F] sm:text-5xl lg:text-6xl">
                Help Patients Move With Dignity
              </h1>
              <p className="mt-5 max-w-2xl text-xl font-semibold leading-8 text-[#25472D]">
                ₹5,800 helps sponsor one wheelchair for Rahat&apos;s Phase 1 patient mobility campaign at JNMC Hospital.
              </p>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-[#1F2933]">
                Rahat is working toward an 80-wheelchair goal with verified reporting after payment confirmation,
                procurement, and internal reconciliation.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link href="/donate" className={primaryLink}>
                  Donate / Sponsor a Wheelchair
                </Link>
                <Link href="/wheelchair" className={secondaryLink}>
                  View Wheelchair Campaign
                </Link>
                <Link
                  href="/transparency"
                  className="inline-flex min-h-[52px] w-full items-center justify-center rounded-full px-5 py-3 text-lg font-bold text-[#07361F] underline decoration-[#D9A441] decoration-2 underline-offset-8 transition hover:text-[#25472D] focus:outline-none focus:ring-2 focus:ring-[#D9A441] focus:ring-offset-2 sm:w-auto"
                >
                  View Transparency
                </Link>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-[#D9A441]/35 bg-white/90 p-4 shadow-[0_20px_55px_rgba(7,54,31,0.12)] sm:p-5">
              <div className="relative h-[290px] overflow-hidden rounded-[1.1rem] bg-[#F8F5EC] sm:h-[360px]">
                <Image
                  src="/images/hero/hero.png"
                  alt="Rahat Social Impact Foundation healthcare impact visual"
                  fill
                  sizes="(min-width: 1024px) 560px, 100vw"
                  className="object-contain p-3"
                  priority
                />
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl bg-[#07361F] px-4 py-3 text-white">
                  <p className="text-sm font-bold uppercase tracking-wide text-[#D9A441]">Goal</p>
                  <p className="mt-1 text-2xl font-bold">80</p>
                </div>
                <div className="rounded-2xl bg-[#F8F5EC] px-4 py-3">
                  <p className="text-sm font-bold uppercase tracking-wide text-[#3B635D]">Sponsorship</p>
                  <p className="mt-1 text-2xl font-bold text-[#07361F]">₹5,800</p>
                </div>
                <div className="rounded-2xl bg-[#FFF7DF] px-4 py-3">
                  <p className="text-sm font-bold uppercase tracking-wide text-[#6A5518]">Reporting</p>
                  <p className="mt-1 text-base font-bold text-[#07361F]">
                    {donationConfig.campaign.verifiedSponsored} confirmed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#D9A441]/30 bg-white">
        <div className="mx-auto grid max-w-7xl gap-3 px-4 py-5 sm:px-6 md:grid-cols-3">
          {trustSignals.map((item) => (
            <div key={item} className="rounded-2xl border border-[#77A625]/25 bg-[#F8F5EC] px-4 py-4 text-base font-bold text-[#07361F]">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-12">
        <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <div className={surfaceCard}>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#3B635D]">Current campaign</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-[#07361F] sm:text-4xl">
              Phase 1: JNMC Hospital Patient Mobility Initiative
            </h2>
            <p className="mt-4 text-lg leading-8 text-[#1F2933]">
              Rahat is raising support for 80 wheelchairs that will be permanently transferred to JNMC Hospital.
              Donor recognition can remain anonymous, display the donor name, or honor a loved one.
            </p>
            <p className="mt-4 rounded-2xl border border-[#D9A441] bg-[#FFF7DF] px-4 py-3 text-base font-bold leading-6 text-[#6A5518]">
              Progress is published only after payment confirmation and internal reconciliation.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href="/donate" className={primaryLink}>
                Donate securely
              </Link>
              <Link href="/wheelchair" className={secondaryLink}>
                Open campaign page
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className={surfaceCard}>
              <p className="text-sm font-bold uppercase tracking-wide text-[#3B635D]">Wheelchair target</p>
              <p className="mt-3 text-5xl font-bold text-[#07361F]">80</p>
              <p className="mt-3 text-lg leading-8 text-[#1F2933]">
                {donationConfig.campaign.verifiedSponsored} confirmed, {remainingWheelchairs} remaining.
              </p>
            </div>
            <div className={surfaceCard}>
              <p className="text-sm font-bold uppercase tracking-wide text-[#3B635D]">One sponsorship</p>
              <p className="mt-3 text-5xl font-bold text-[#07361F]">₹5,800</p>
              <p className="mt-3 text-lg leading-8 text-[#1F2933]">Supports one wheelchair for patient mobility at JNMC Hospital.</p>
            </div>
            <div className="rounded-[1.25rem] border border-[#D9A441] bg-[#07361F] p-5 text-white shadow-[0_14px_36px_rgba(7,54,31,0.14)] sm:col-span-2 sm:p-6">
              <p className="text-sm font-bold uppercase tracking-wide text-[#D9A441]">Official-channel safety</p>
              <p className="mt-3 text-lg leading-8 text-white/90">
                Donate only through official Rahat channels. Avoid unofficial QR codes or payment links shared on social media.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-12">
        <div className={surfaceCard}>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#3B635D]">Programs</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-bold leading-tight text-[#07361F] sm:text-4xl">
            Healthcare support designed for dignity, access, and institutional accountability.
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {programs.map((program) => (
              <div key={program} className="rounded-2xl border border-[#D9A441]/25 bg-[#F8F5EC] p-5 shadow-sm">
                <h3 className="text-lg font-bold leading-7 text-[#07361F]">{program}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-12">
        <div className="grid gap-4 lg:grid-cols-3">
          <div className={surfaceCard}>
            <p className="text-sm font-bold uppercase tracking-wide text-[#3B635D]">Transparency</p>
            <p className="mt-3 text-lg leading-8 text-[#1F2933]">Registration, governance, policies, and reports are organized for donor review as documents become available.</p>
          </div>
          <div className={surfaceCard}>
            <p className="text-sm font-bold uppercase tracking-wide text-[#3B635D]">Roadmap</p>
            <p className="mt-3 text-lg leading-8 text-[#1F2933]">Phase 2 will focus on stretcher support. Digital healthcare transformation remains a future vision and is not an active fundraising ask.</p>
          </div>
          <div className={surfaceCard}>
            <p className="text-sm font-bold uppercase tracking-wide text-[#3B635D]">Updates</p>
            <p className="mt-3 text-sm font-bold uppercase tracking-[0.14em] text-[#6A5518]">Upcoming activity · 27 July 2026</p>
            <p className="mt-2 text-lg leading-8 text-[#1F2933]">
              Rahat will hand over the wheelchairs to JNMC Hospital, Aligarh Muslim University.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-12">
        <div className="rounded-[1.5rem] border border-[#D9A441] bg-[#07361F] p-6 text-white shadow-[0_20px_50px_rgba(7,54,31,0.2)] sm:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#D9A441]">Official donation path</p>
          <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">Support patient mobility through the official Rahat donation page.</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-white/88">
            The donation page includes official UPI, bank transfer details, domestic-only guidance, and acknowledgement information.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/donate" className="inline-flex min-h-[52px] w-full items-center justify-center rounded-full border border-[#D9A441] bg-white px-6 py-3 text-lg font-bold text-[#07361F] shadow-lg transition hover:-translate-y-0.5 hover:bg-[#FFF7DF] focus:outline-none focus:ring-2 focus:ring-[#D9A441] focus:ring-offset-2 focus:ring-offset-[#07361F] active:translate-y-0 sm:w-auto">
              Donate / Sponsor a Wheelchair
            </Link>
            <Link href="/transparency" className="inline-flex min-h-[52px] w-full items-center justify-center rounded-full border border-white/40 px-6 py-3 text-lg font-bold text-white transition hover:-translate-y-0.5 hover:border-[#D9A441] focus:outline-none focus:ring-2 focus:ring-[#D9A441] focus:ring-offset-2 focus:ring-offset-[#07361F] active:translate-y-0 sm:w-auto">
              View Transparency
            </Link>
          </div>
        </div>
      </section>

      <Link
        href="/donate"
        className="fixed inset-x-4 bottom-4 z-50 rounded-full border border-[#D9A441] bg-[#07361F] px-5 py-4 text-center text-lg font-bold text-white shadow-[0_16px_34px_rgba(7,54,31,0.3)] transition hover:bg-[#25472D] focus:outline-none focus:ring-2 focus:ring-[#D9A441] focus:ring-offset-2 sm:hidden"
      >
        Donate / Sponsor a Wheelchair
      </Link>
    </main>
  );
}
