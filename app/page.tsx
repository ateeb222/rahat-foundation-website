import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F8F5EF] text-[#1F2937]">
      <section className="mx-auto w-full max-w-7xl px-6 py-16">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          <div>
            <div className="mb-3 inline-flex rounded-full border border-[#2A7A45] bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[#1A4D2E]">
              Transforming Awareness into Action
            </div>

            <h1 className="text-3xl font-semibold leading-tight text-[#1A4D2E] sm:text-4xl">
              Mobile healthcare support for patients, families, and hospital teams.
            </h1>

            <p className="mt-4 max-w-xl text-base text-slate-700 sm:text-lg">
              Rahat strengthens patient pathways and hospital capacity with life-changing medical equipment and compassionate community support.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="/donate"
                className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full bg-[#1A4D2E] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#16402a] focus:outline-none focus:ring-2 focus:ring-[#2A7A45] focus:ring-offset-2 focus:ring-offset-[#F8F5EF] sm:w-auto"
              >
                Donate Now
              </a>

              <a
                href="/about"
                className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full border border-[#1A4D2E] bg-white px-5 py-3 text-sm font-semibold text-[#1A4D2E] transition hover:bg-[#E8F4E8] focus:outline-none focus:ring-2 focus:ring-[#2A7A45] focus:ring-offset-2 focus:ring-offset-[#F8F5EF] sm:w-auto"
              >
                Learn More
              </a>
            </div>

            <p className="mt-4 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
              Donors may optionally dedicate a wheelchair or stretcher in memory or honor of a loved one.
            </p>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full max-w-md rounded-3xl bg-white p-5 shadow-sm sm:p-6">
              <div className="relative h-[280px] max-h-[400px] overflow-hidden rounded-3xl border border-[#E6F2E9] bg-white sm:h-[320px] md:h-[360px] lg:h-[400px]">
                <Image
                  src="/images/hero/hero.png"
                  alt="Rahat Social Impact Foundation logo and healthcare impact illustration"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-16">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-[#F8F5EF] p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Wheelchairs</p>
              <p className="mt-4 text-3xl font-semibold text-[#1A4D2E]">80 Goal</p>
              <div className="mt-5 space-y-3 text-sm text-slate-600">
                <p>Sponsored: 30</p>
                <p>Remaining: 50</p>
                <p>Cost per wheelchair: ₹5,500</p>
              </div>
              <div className="mt-6 rounded-full bg-slate-200 px-1 py-1">
                <div className="h-3 rounded-full bg-[#1A4D2E] w-[37%]" />
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-[#F8F5EF] p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Stretchers</p>
              <p className="mt-4 text-3xl font-semibold text-[#1A4D2E]">25 Goal</p>
              <div className="mt-5 space-y-3 text-sm text-slate-600">
                <p>Sponsored: 8</p>
                <p>Remaining: 17</p>
                <p>Cost per stretcher: ₹15,000</p>
              </div>
              <div className="mt-6 rounded-full bg-slate-200 px-1 py-1">
                <div className="h-3 rounded-full bg-[#1A4D2E] w-[32%]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-16">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#1A4D2E]">Sponsor a Wheelchair</p>
            <h2 className="mt-4 text-2xl font-semibold leading-tight text-[#1A4D2E] sm:text-3xl">
              Help a patient move safely today.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-700 sm:text-lg">
              A single gift equips a wheelchair or stretcher, making hospital care more accessible for patients and attendants.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="/donate"
              className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full bg-[#1A4D2E] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#16402a] focus:outline-none focus:ring-2 focus:ring-[#2A7A45] focus:ring-offset-2 focus:ring-offset-[#F8F5EF] sm:w-auto"
            >
              Sponsor a Wheelchair - ₹5,500
            </a>
            <a
              href="/donate"
              className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full border border-[#1A4D2E] bg-white px-5 py-3 text-sm font-semibold text-[#1A4D2E] transition hover:bg-[#E8F4E8] focus:outline-none focus:ring-2 focus:ring-[#2A7A45] focus:ring-offset-2 focus:ring-offset-[#F8F5EF] sm:w-auto"
            >
              Donate Any Amount
            </a>
          </div>

          <p className="mt-5 max-w-2xl text-sm leading-6 text-slate-600">
            Donors may optionally dedicate a wheelchair or stretcher in memory or honor of a loved one.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-16">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="mx-auto max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#1A4D2E]">Launching Patient Mobility Support at JNMC</p>
            <h2 className="mt-4 text-2xl font-semibold leading-tight text-[#1A4D2E] sm:text-3xl">
              80 wheelchairs are being deployed at JNMC Hospital to improve patient mobility and accessibility.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-700 sm:text-lg">
              The next phase of Rahat’s mobility initiative brings on-site support for patients and attendants, ensuring safer movement across the hospital grounds and more accessible care pathways for everyone at JNMC Hospital.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-[#F8F5EF] p-5">
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">80 Wheelchairs</p>
              <p className="mt-3 text-xl font-semibold text-[#1A4D2E]">Phase 1 Initiative</p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-[#F8F5EF] p-5">
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">JNMC Hospital, AMU, Aligarh</p>
              <p className="mt-3 text-xl font-semibold text-[#1A4D2E]">Implementation Site</p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-[#F8F5EF] p-5">
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">4,000+ Daily Footfall</p>
              <p className="mt-3 text-xl font-semibold text-[#1A4D2E]">Patient and Attendant Reach</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-16">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="mx-auto max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#1A4D2E]">Campaign Videos & Photos</p>
            <h2 className="mt-4 text-2xl font-semibold leading-tight text-[#1A4D2E] sm:text-3xl">
              Real campaign stories for Instagram reels and YouTube viewers.
            </h2>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-black">
              <iframe
                className="h-52 w-full"
                src="https://www.youtube.com/embed/ysz5S6PUM-U"
                title="Rahat campaign highlight"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="p-5 bg-white">
                <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">YouTube Preview</p>
                <p className="mt-3 text-base font-semibold text-[#1A4D2E]">Hospital wheelchair rollout</p>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-[#F8F5EF] p-5">
              <div className="h-44 rounded-3xl bg-slate-200" />
              <p className="mt-5 text-sm font-semibold uppercase tracking-wide text-slate-500">Instagram Reel</p>
              <p className="mt-3 text-base font-semibold text-[#1A4D2E]">Wheelchair delivery highlights</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">Designed for quick social engagement with campaign proof and community support.</p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-[#F8F5EF] p-5">
              <div className="h-44 rounded-3xl bg-slate-200" />
              <p className="mt-5 text-sm font-semibold uppercase tracking-wide text-slate-500">Campaign Photo</p>
              <p className="mt-3 text-base font-semibold text-[#1A4D2E]">Patient support in action</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">A visual proof card ready for Instagram and visitor trust-building.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-16">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="mx-auto max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#1A4D2E]">Impact Numbers</p>
            <h2 className="mt-4 text-2xl font-semibold leading-tight text-[#1A4D2E] sm:text-3xl">
              Measurable hospital and patient support delivered so far.
            </h2>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-3xl border border-slate-200 bg-[#F8F5EF] p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Wheelchairs Deployed</p>
              <p className="mt-4 text-3xl font-semibold text-[#1A4D2E]">80</p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-[#F8F5EF] p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Patients Reached Daily</p>
              <p className="mt-4 text-3xl font-semibold text-[#1A4D2E]">4,000+</p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-[#F8F5EF] p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Hospital Partners</p>
              <p className="mt-4 text-3xl font-semibold text-[#1A4D2E]">1</p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-[#F8F5EF] p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Patient Journeys Supported</p>
              <p className="mt-4 text-3xl font-semibold text-[#1A4D2E]">Thousands</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-16">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="mx-auto max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#1A4D2E]">Our Roadmap for Healthcare Support</p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-2xl border border-slate-200 bg-[#F8F5EF] p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Phase 1</p>
              <h3 className="mt-3 text-xl font-semibold text-[#1A4D2E]">Patient Mobility Support</h3>
              <p className="mt-2 text-sm text-slate-600">80 Wheelchairs</p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-[#F8F5EF] p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Phase 2</p>
              <h3 className="mt-3 text-xl font-semibold text-[#1A4D2E]">Patient Transport Infrastructure</h3>
              <p className="mt-2 text-sm text-slate-600">Stretchers and mobility equipment</p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-[#F8F5EF] p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Phase 3</p>
              <h3 className="mt-3 text-xl font-semibold text-[#1A4D2E]">Hospital Support Systems</h3>
              <p className="mt-2 text-sm text-slate-600">Computers and printers</p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-[#F8F5EF] p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Phase 4</p>
              <h3 className="mt-3 text-xl font-semibold text-[#1A4D2E]">Digital Healthcare Transformation</h3>
              <p className="mt-2 text-sm text-slate-600">Software and process digitization</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-16">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="mx-auto max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#1A4D2E]">Transparency & Governance</p>
            <h2 className="mt-4 text-2xl font-semibold leading-tight text-[#1A4D2E] sm:text-3xl">
              Documents and reporting for accountability and trust.
            </h2>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-3xl border border-slate-200 bg-[#F8F5EF] p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Registration Documents</p>
              <p className="mt-4 text-base leading-7 text-slate-700">Available after project implementation</p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-[#F8F5EF] p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Annual Reports</p>
              <p className="mt-4 text-base leading-7 text-slate-700">Available after project implementation</p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-[#F8F5EF] p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Governance Information</p>
              <p className="mt-4 text-base leading-7 text-slate-700">Available after project implementation</p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-[#F8F5EF] p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Project Updates</p>
              <p className="mt-4 text-base leading-7 text-slate-700">Available after project implementation</p>
            </div>
          </div>
        </div>
      </section>

      <a
        href="/donate"
        className="fixed inset-x-4 bottom-4 z-50 rounded-full bg-[#1A4D2E] px-5 py-4 text-center text-sm font-semibold text-white shadow-xl sm:hidden"
      >
        Donate Now
      </a>
    </main>
  );
}
