import type { Metadata } from 'next';
import Image from 'next/image';
import { directors, organization } from '@/lib/organization';
import { SocialLink } from '@/components/social/SocialLink';

export const metadata: Metadata = {
  title: 'About',
  description: 'Meet the directors of Rahat Social Impact Foundation, a registered Section 8 nonprofit company supporting accountable healthcare action in India.',
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
            Rahat Social Impact Foundation is a registered Section 8 nonprofit company working to strengthen patient access, hospital support infrastructure, digital health transformation, patient navigation, and community healthcare outreach.
          </p>
          <p className="mt-4 text-sm font-semibold leading-6 text-[#25472D]">CIN {organization.cin} · Registered office: New Delhi, India</p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-14" aria-labelledby="leadership-heading">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#3B635D]">Leadership and accountability</p>
          <h2 id="leadership-heading" className="mt-3 text-2xl font-bold leading-tight text-[#07361F] sm:text-4xl">People responsible for Rahat’s work.</h2>
          <p className="mt-3 text-base leading-7 text-slate-700">Rahat’s directors combine public communication, healthcare-sector experience, policy understanding and ground-level execution.</p>
        </div>

        <div className="mt-7 grid gap-5 lg:grid-cols-2">
          {directors.map((director) => (
            <article key={director.name} className="grid overflow-hidden border border-slate-200 bg-white shadow-sm sm:grid-cols-[180px_1fr]">
              <div className="relative flex min-h-[220px] items-center justify-center bg-[#EAF3E2] sm:min-h-full">
                {director.image ? (
                  <Image src={director.image} alt={`${director.name}, director of Rahat Social Impact Foundation`} fill className="object-cover" sizes="(min-width: 640px) 180px, 100vw" />
                ) : (
                  <div className="flex h-24 w-24 items-center justify-center rounded-full border border-[#C8951A]/45 bg-white text-3xl font-bold text-[#07361F]" aria-label={`${director.name} photograph pending`}>{director.initials}</div>
                )}
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-2xl font-bold text-[#07361F]">{director.name}</h3>
                <p className="mt-2 text-sm font-bold leading-6 text-[#3B635D]">{director.role}</p>
                <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">{director.credentials}</p>
                <p className="mt-4 text-[15px] leading-7 text-slate-700">{director.description}</p>
                <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-sm font-bold text-[#07361F]">
                  {director.links.map((link) => (
                    <SocialLink
                      key={link.href}
                      platform={link.label.toLowerCase() as 'instagram' | 'linkedin' | 'youtube'}
                      href={link.href}
                      className="underline decoration-[#C8951A] underline-offset-4"
                    />
                  ))}
                </div>
              </div>
            </article>
          ))}
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
