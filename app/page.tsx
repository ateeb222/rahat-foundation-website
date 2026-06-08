import Image from 'next/image';
import Link from 'next/link';

const trustSignals = [
  'Section 8 healthcare-focused NGO',
  'JNMC Hospital patient mobility campaign',
  'Transparent campaign reporting planned',
];

const programs = [
  'Mobility & Patient Access',
  'Hospital Support Infrastructure',
  'Digital Health Transformation',
  'Patient Support & Navigation',
  'Community Healthcare Outreach',
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F8F5EF] pb-20 text-[#1F2937]">
      <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-[#2A7A45] bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#1A4D2E]">
              Community-powered healthcare
            </p>
            <h1 className="mt-5 max-w-3xl text-3xl font-semibold leading-tight text-[#1A4D2E] sm:text-4xl lg:text-5xl">
              Building trusted healthcare access for patients and hospital teams.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-700 sm:text-lg">
              Rahat Social Impact Foundation strengthens patient mobility, hospital infrastructure, and healthcare support systems through accountable community participation.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/wheelchair"
                className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full bg-[#1A4D2E] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#16402a] focus:outline-none focus:ring-2 focus:ring-[#2A7A45] focus:ring-offset-2 focus:ring-offset-[#F8F5EF] sm:w-auto"
              >
                Sponsor a wheelchair
              </Link>
              <Link
                href="/transparency"
                className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full border border-[#1A4D2E] bg-white px-5 py-3 text-sm font-semibold text-[#1A4D2E] transition hover:bg-[#E8F4E8] focus:outline-none focus:ring-2 focus:ring-[#2A7A45] focus:ring-offset-2 focus:ring-offset-[#F8F5EF] sm:w-auto"
              >
                View transparency
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="relative h-[280px] overflow-hidden rounded-2xl bg-[#F8F5EF] sm:h-[340px]">
              <Image
                src="/images/hero/hero.png"
                alt="Rahat Social Impact Foundation healthcare impact visual"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-3 px-4 py-5 sm:px-6 md:grid-cols-3">
          {trustSignals.map((item) => (
            <div key={item} className="rounded-2xl bg-[#F8F5EF] px-4 py-3 text-sm font-semibold text-[#1A4D2E]">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1A4D2E]">Current campaign</p>
            <h2 className="mt-3 text-2xl font-semibold leading-tight text-[#1A4D2E] sm:text-3xl">
              Phase 1: JNMC Hospital Patient Mobility Initiative
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-700">
              Rahat is raising support for 80 wheelchairs that will be permanently transferred to JNMC Hospital. Each wheelchair may include Rahat branding, a unique identification number, website details, and official contact information.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/wheelchair"
                className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#1A4D2E] px-5 py-3 text-sm font-semibold text-white"
              >
                Open campaign page
              </Link>
              <Link
                href="/donate"
                className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-[#1A4D2E] bg-white px-5 py-3 text-sm font-semibold text-[#1A4D2E]"
              >
                Donate securely
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Wheelchair target</p>
              <p className="mt-3 text-3xl font-semibold text-[#1A4D2E]">80</p>
              <p className="mt-3 text-sm leading-6 text-slate-700">Verified sponsorship progress will be published after payment activation and reconciliation.</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Sponsorship</p>
              <p className="mt-3 text-3xl font-semibold text-[#1A4D2E]">Rs. 5,800</p>
              <p className="mt-3 text-sm leading-6 text-slate-700">Recognition can be anonymous, in the donor name, or in the name of a loved one.</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:col-span-2 sm:p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Official-channel safety</p>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                Donate only through official Rahat channels. Avoid unofficial QR codes or payment links shared on social media.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6">
        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1A4D2E]">Programs</p>
          <h2 className="mt-3 max-w-3xl text-2xl font-semibold leading-tight text-[#1A4D2E] sm:text-3xl">
            Healthcare support designed for dignity, access, and institutional accountability.
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {programs.map((program) => (
              <div key={program} className="rounded-2xl border border-slate-200 bg-[#F8F5EF] p-5">
                <h3 className="text-base font-semibold text-[#1A4D2E]">{program}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-4 lg:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Transparency</p>
            <p className="mt-3 text-sm leading-6 text-slate-700">Registration, governance, policies, and reports are organized for donor review as documents become available.</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Roadmap</p>
            <p className="mt-3 text-sm leading-6 text-slate-700">Phase 2 will focus on stretcher support. Digital healthcare transformation remains a future vision and is not an active fundraising ask.</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Updates</p>
            <p className="mt-3 text-sm leading-6 text-slate-700">Factory visit media, campaign updates, and verified implementation evidence will be added as official assets are ready.</p>
          </div>
        </div>
      </section>

      <Link
        href="/wheelchair"
        className="fixed inset-x-4 bottom-4 z-50 rounded-full bg-[#1A4D2E] px-5 py-4 text-center text-sm font-semibold text-white shadow-xl sm:hidden"
      >
        Sponsor a wheelchair
      </Link>
    </main>
  );
}
