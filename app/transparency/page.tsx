import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Transparency',
  description:
    'Registration, governance, policies, and campaign reporting commitments for Rahat Social Impact Foundation.',
};

const documentGroups = [
  {
    title: 'Registration documents',
    status: 'To be published after verification',
    description: 'Section 8 registration and related statutory records will be organized here for donor review.',
  },
  {
    title: 'Governance',
    status: 'Structure prepared',
    description: 'Leadership, board, and governance disclosures will be added as approved public documents.',
  },
  {
    title: 'Policies',
    status: 'Structure prepared',
    description: 'Donation, privacy, safeguarding, and operational policies will be listed as they are finalized.',
  },
  {
    title: 'Financial reports',
    status: 'Future reporting',
    description: 'Campaign financial summaries and annual reporting will be published after reconciliation.',
  },
];

export default function TransparencyPage() {
  return (
    <main className="min-h-screen bg-[#F8F5EF] text-[#1F2937]">
      <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:py-16">
        <div className="max-w-3xl">
          <p className="inline-flex rounded-full border border-[#2A7A45] bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#1A4D2E]">
            Trust and transparency
          </p>
          <h1 className="mt-5 text-3xl font-semibold leading-tight text-[#1A4D2E] sm:text-4xl lg:text-5xl">
            Clear records for accountable healthcare support.
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-700 sm:text-lg">
            Rahat is preparing a public document center for registration records, governance information, policies, financial reports, and campaign impact updates.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6">
        <div className="grid gap-4 md:grid-cols-2">
          {documentGroups.map((group) => (
            <article key={group.title} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">{group.status}</p>
              <h2 className="mt-3 text-xl font-semibold text-[#1A4D2E]">{group.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-700">{group.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6">
        <div className="rounded-3xl border border-[#C8951A] bg-white p-5 shadow-sm sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1A4D2E]">Campaign reporting commitment</p>
          <h2 className="mt-3 text-2xl font-semibold leading-tight text-[#1A4D2E] sm:text-3xl">
            Verified progress will be published after payment activation and implementation reconciliation.
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-700">
            Rahat will avoid unverified sponsorship claims. Wheelchair and stretcher progress should be updated only when donations, procurement, transfer, and implementation details are confirmed.
          </p>
        </div>
      </section>
    </main>
  );
}
