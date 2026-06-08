import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Programs',
  description: 'Rahat healthcare programs across mobility, hospital infrastructure, digital health, navigation, and outreach.',
};

const programs = [
  {
    title: 'Mobility & Patient Access',
    description: 'Wheelchairs, mobility aids, and patient movement support that improve access inside healthcare settings.',
  },
  {
    title: 'Hospital Support Infrastructure',
    description: 'Stretchers, patient support equipment, facility upgrades, and infrastructure support for hospital teams.',
  },
  {
    title: 'Digital Health Transformation',
    description: 'A future vision for patient records, queue systems, payment workflows, computers, printers, and healthcare IT.',
  },
  {
    title: 'Patient Support & Navigation',
    description: 'Support that helps patients and families move through hospital services with clearer guidance.',
  },
  {
    title: 'Community Healthcare Outreach',
    description: 'Preventive, primary, and awareness-led healthcare support extended into local communities.',
  },
];

export default function ProgramsPage() {
  return (
    <main className="min-h-screen bg-[#F8F5EF] text-[#1F2937]">
      <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:py-16">
        <div className="max-w-3xl">
          <p className="inline-flex rounded-full border border-[#2A7A45] bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#1A4D2E]">
            Programs
          </p>
          <h1 className="mt-5 text-3xl font-semibold leading-tight text-[#1A4D2E] sm:text-4xl lg:text-5xl">
            Healthcare support programs with institutional clarity.
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-700 sm:text-lg">
            Rahat focuses on practical healthcare access and hospital support, beginning with the JNMC Hospital Patient Mobility Initiative.
          </p>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-4 px-4 py-8 sm:px-6 md:grid-cols-2">
        {programs.map((program) => (
          <article key={program.title} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-xl font-semibold text-[#1A4D2E]">{program.title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700">{program.description}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
