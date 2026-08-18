import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Transparency',
  description:
    'Verified registration, Income Tax approvals, policies, governance, and campaign reporting for Rahat Social Impact Foundation.',
};

const taxApprovals = [
  {
    title: 'Provisional Income Tax Registration',
    section: 'Section 332(8)',
    urn: 'AAPCR8950CE20261',
    date: '18 June 2026',
    validity: 'Tax Years 2026–27 to 2028–29',
    href: '/documents/provisional-registration-section-332',
    description:
      'Digitally signed Income Tax Department order granting provisional registration for charitable activities.',
  },
  {
    title: 'Provisional Donor-Deduction Approval',
    section: 'Section 354(4)',
    urn: 'AAPCR8950CF20261',
    date: '18 June 2026',
    validity: 'Tax Years 2026–27 to 2028–29',
    href: '/documents/provisional-approval-section-354',
    description:
      'Digitally signed Income Tax Department order granting provisional approval, subject to the order and applicable law.',
  },
];

const documentGroups = [
  {
    title: 'Section 8 incorporation',
    status: 'Verified organisation',
    description: 'Rahat Social Impact Foundation is incorporated as a Section 8 company. CIN: U86909DL2026NPL466630.',
  },
  {
    title: 'Governance',
    status: 'Disclosure in progress',
    description: 'Leadership, board, and governance disclosures will be added as approved public documents become available.',
  },
  {
    title: 'Policies',
    status: 'Published',
    description: 'Donation, privacy, cancellation and refund, and other operational policies are available through the website footer.',
  },
  {
    title: 'Financial reports',
    status: 'Future reporting',
    description: 'Campaign financial summaries and annual reporting will be published after reconciliation and statutory completion.',
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
            Verified records for accountable healthcare support.
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-700 sm:text-lg">
            Rahat Foundation publishes verified statutory information so donors, institutions, and payment partners can review the organisation&apos;s current status directly.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6">
        <div className="rounded-3xl border border-[#C8951A] bg-white p-5 shadow-[0_14px_38px_rgba(7,54,31,0.08)] sm:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#1A4D2E]">Income Tax registrations and approvals</p>
          <h2 className="mt-3 text-2xl font-bold leading-tight text-[#07361F] sm:text-3xl">
            Provisional registration and approval granted on 18 June 2026
          </h2>
          <p className="mt-4 max-w-4xl text-sm leading-6 text-slate-700 sm:text-base sm:leading-7">
            The approvals are provisional and valid for the period stated in the respective digitally signed orders. Verified order details are published below; copies of the original signed orders may be requested through Rahat Foundation&apos;s official contact page.
          </p>

          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {taxApprovals.map((approval) => (
              <article key={approval.urn} className="rounded-2xl border border-[#2A7A45]/20 bg-[#F8F5EF] p-5 sm:p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="rounded-full bg-[#E8F3E6] px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#1A4D2E]">
                    Active · Provisional
                  </p>
                  <p className="text-xs font-bold text-slate-500">{approval.section}</p>
                </div>
                <h3 className="mt-4 text-xl font-bold text-[#07361F]">{approval.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-700">{approval.description}</p>
                <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
                  <div>
                    <dt className="font-bold text-slate-500">Date</dt>
                    <dd className="mt-1 font-semibold text-[#1F2937]">{approval.date}</dd>
                  </div>
                  <div>
                    <dt className="font-bold text-slate-500">Validity</dt>
                    <dd className="mt-1 font-semibold text-[#1F2937]">{approval.validity}</dd>
                  </div>
                  <div className="sm:col-span-2">
                    <dt className="font-bold text-slate-500">Unique Registration Number</dt>
                    <dd className="mt-1 break-all font-semibold text-[#1F2937]">{approval.urn}</dd>
                  </div>
                </dl>
                <a
                  href={approval.href}
                  className="mt-5 inline-flex min-h-[48px] w-full items-center justify-center rounded-full bg-[#07361F] px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-[#1A4D2E] sm:w-auto"
                >
                  View Verified Order Details
                </a>
              </article>
            ))}
          </div>

          <p className="mt-5 rounded-2xl border border-[#D9A441]/40 bg-[#FFF8E6] px-4 py-3 text-xs font-semibold leading-5 text-[#6A5518] sm:text-sm sm:leading-6">
            Donor eligibility and any tax deduction depend on applicable law, the donor&apos;s circumstances, permitted payment mode, and completion of statutory reporting and certificate requirements. These approvals are not represented as permanent or unconditional.
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
            Verified progress is published only after reconciliation.
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-700">
            Rahat Foundation avoids unverified sponsorship claims. Wheelchair and stretcher progress is updated only when donations, procurement, transfer, and implementation details are confirmed.
          </p>
        </div>
      </section>
    </main>
  );
}
