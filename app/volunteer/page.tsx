import type { Metadata } from 'next';

import { VolunteerForm } from '@/components/forms/VolunteerForm';

export const metadata: Metadata = {
  title: 'Volunteer',
  description:
    'Volunteer with Rahat Social Impact Foundation through student, campus, professional, hospital, and remote support roles.',
};

const categories = [
  'Student Volunteers',
  'Campus Ambassadors',
  'Professional Volunteers',
  'Hospital Volunteers',
  'Remote Volunteers',
];

export default function VolunteerPage() {
  return (
    <main className="min-h-screen bg-[#F8F5EF] text-[#1F2937]">
      <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:py-16">
        <div className="max-w-3xl">
          <p className="inline-flex rounded-full border border-[#2A7A45] bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#1A4D2E]">
            Volunteer with Rahat
          </p>
          <h1 className="mt-5 text-3xl font-semibold leading-tight text-[#1A4D2E] sm:text-4xl lg:text-5xl">
            Support healthcare access with structured volunteer roles.
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-700 sm:text-lg">
            Rahat welcomes volunteers who can support patient mobility campaigns, campus outreach, professional coordination, hospital implementation, and remote operations.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {categories.map((category) => (
            <div key={category} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="text-base font-semibold text-[#1A4D2E]">{category}</h2>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6">
        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1A4D2E]">Volunteer interest form</p>
              <h2 className="mt-3 text-2xl font-semibold leading-tight text-[#1A4D2E] sm:text-3xl">
                Share your availability and skills.
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-700">
                Keep it short. Rahat will review your application and follow up through official contact channels.
              </p>
            </div>

            <VolunteerForm />
          </div>
        </div>
      </section>
    </main>
  );
}
