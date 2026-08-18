import type { Metadata } from 'next';
import Link from 'next/link';
import { CampaignUpdates } from '@/components/campaign/CampaignUpdates';

export const metadata: Metadata = {
  title: 'Impact',
  description: 'Verified campaign impact reporting, including Rahat Social Impact Foundation’s completed delivery of 80 wheelchairs to JNMC Hospital.',
};

export default function ImpactPage() {
  return (
    <main className="min-h-screen bg-[#F8F5EF] text-[#1F2937]">
      <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:py-16">
        <div className="max-w-3xl">
          <p className="inline-flex rounded-full border border-[#2A7A45] bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#1A4D2E]">
            Impact reporting
          </p>
          <h1 className="mt-5 text-3xl font-semibold leading-tight text-[#1A4D2E] sm:text-4xl lg:text-5xl">
            Verified healthcare impact, reported after completion.
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-700 sm:text-lg">
            Rahat Foundation completed the JNMC Hospital Patient Mobility Initiative with the formal handover of 80 wheelchairs on 14 August 2026.
          </p>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-4 px-4 py-8 sm:px-6 md:grid-cols-3">
        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Delivered</p>
          <p className="mt-3 text-3xl font-semibold text-[#1A4D2E]">80</p>
          <p className="mt-3 text-sm leading-6 text-slate-700">Wheelchairs formally handed over to JNMC Hospital.</p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Status</p>
          <p className="mt-3 text-3xl font-semibold text-[#1A4D2E]">Completed</p>
          <p className="mt-3 text-sm leading-6 text-slate-700">JNMC Hospital Patient Mobility Initiative.</p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Formal handover</p>
          <p className="mt-3 text-2xl font-semibold text-[#1A4D2E]">14 August 2026</p>
          <p className="mt-3 text-sm leading-6 text-slate-700">Jawaharlal Nehru Medical College &amp; Hospital, Aligarh Muslim University, Aligarh.</p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6">
        <div className="rounded-3xl border border-[#C8951A] bg-white p-5 shadow-sm sm:p-8">
          <h2 className="text-2xl font-semibold text-[#1A4D2E]">Completed campaign record</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-700">
            The current campaign record includes the preparation-stage factory visit and the confirmed formal handover completed on 14 August 2026.
          </p>
          <Link href="/wheelchair" className="mt-6 inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#1A4D2E] px-5 py-3 text-sm font-semibold text-white">
            View wheelchair campaign
          </Link>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-14" aria-labelledby="updates-heading">
        <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#3B635D]">Dated field updates</p>
        <h2 id="updates-heading" className="mt-3 text-2xl font-bold text-[#07361F] sm:text-3xl">See the dated campaign record.</h2>
        <p className="mt-3 max-w-3xl text-base leading-7 text-slate-700">Updates distinguish preparation-stage material from the completed formal handover recorded on 14 August 2026.</p>
        <div className="mt-7"><CampaignUpdates /></div>
      </section>
    </main>
  );
}
