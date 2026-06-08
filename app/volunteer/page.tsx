import type { Metadata } from 'next';

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

const modes = ['On-ground', 'Remote', 'Hybrid'];

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
              <p className="mt-4 text-sm leading-6 text-slate-700">
                This form structure is ready for secure handling when backend submission is connected.
              </p>
            </div>

            <form className="grid gap-4" aria-label="Volunteer interest form">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-semibold text-slate-800">
                  Name
                  <input className="min-h-[48px] rounded-xl border border-slate-300 bg-white px-4 text-base font-normal" name="name" required />
                </label>
                <label className="grid gap-2 text-sm font-semibold text-slate-800">
                  Mobile
                  <input className="min-h-[48px] rounded-xl border border-slate-300 bg-white px-4 text-base font-normal" name="mobile" type="tel" required />
                </label>
              </div>
              <label className="grid gap-2 text-sm font-semibold text-slate-800">
                Email
                <input className="min-h-[48px] rounded-xl border border-slate-300 bg-white px-4 text-base font-normal" name="email" type="email" required />
              </label>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-semibold text-slate-800">
                  Availability
                  <input className="min-h-[48px] rounded-xl border border-slate-300 bg-white px-4 text-base font-normal" name="availability" placeholder="Weekends, evenings, weekdays..." />
                </label>
                <label className="grid gap-2 text-sm font-semibold text-slate-800">
                  Mode
                  <select className="min-h-[48px] rounded-xl border border-slate-300 bg-white px-4 text-base font-normal" name="mode" defaultValue="Hybrid">
                    {modes.map((mode) => (
                      <option key={mode}>{mode}</option>
                    ))}
                  </select>
                </label>
              </div>
              <label className="grid gap-2 text-sm font-semibold text-slate-800">
                Skills
                <textarea className="min-h-28 rounded-xl border border-slate-300 bg-white px-4 py-3 text-base font-normal" name="skills" placeholder="Outreach, coordination, design, healthcare operations, content, data..." />
              </label>
              <button type="button" className="min-h-[48px] rounded-full bg-[#1A4D2E] px-5 py-3 text-sm font-semibold text-white opacity-75" aria-disabled="true">
                Submission backend pending
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
