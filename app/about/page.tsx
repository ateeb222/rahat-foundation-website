import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'About Rahat Social Impact Foundation and its healthcare-focused mission.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F8F5EF] text-[#1F2937]">
      <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:py-16">
        <div className="max-w-3xl">
          <p className="inline-flex rounded-full border border-[#2A7A45] bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#1A4D2E]">
            About Rahat
          </p>
          <h1 className="mt-5 text-3xl font-semibold leading-tight text-[#1A4D2E] sm:text-4xl lg:text-5xl">
            A healthcare-focused foundation built around dignity, access, and accountability.
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-700 sm:text-lg">
            Rahat Social Impact Foundation is a Section 8 NGO working to strengthen patient access, hospital support infrastructure, digital health transformation, patient navigation, and community healthcare outreach.
          </p>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-4 px-4 py-8 sm:px-6 md:grid-cols-3">
        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h2 className="text-xl font-semibold text-[#1A4D2E]">Vision</h2>
          <p className="mt-3 text-sm leading-6 text-slate-700">Accessible healthcare pathways supported by transparent community participation.</p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h2 className="text-xl font-semibold text-[#1A4D2E]">Mission</h2>
          <p className="mt-3 text-sm leading-6 text-slate-700">Improve patient mobility and hospital capacity through practical, accountable healthcare support programs.</p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h2 className="text-xl font-semibold text-[#1A4D2E]">Governance</h2>
          <p className="mt-3 text-sm leading-6 text-slate-700">Rahat is preparing public governance and reporting materials for its transparency center.</p>
        </div>
      </section>
    </main>
  );
}
