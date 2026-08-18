import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Provisional Registration under Section 332(8)',
  description: 'Verified details of Rahat Social Impact Foundation provisional Income Tax registration.',
};

export default function RegistrationOrderPage() {
  return (
    <main className="min-h-screen bg-[#F8F5EF] px-4 py-10 text-[#1F2937] sm:px-6 sm:py-14">
      <article className="mx-auto max-w-4xl rounded-3xl border border-[#D9A441]/40 bg-white p-5 shadow-sm sm:p-8">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#1A4D2E]">Verified statutory record</p>
        <h1 className="mt-3 text-3xl font-bold leading-tight text-[#07361F] sm:text-4xl">Provisional Income Tax Registration</h1>
        <p className="mt-4 text-base leading-7 text-slate-700">Form No. 106 order granting provisional registration to Rahat Social Impact Foundation for charitable activities.</p>
        <dl className="mt-6 grid gap-4 rounded-2xl bg-[#F8F5EF] p-5 sm:grid-cols-2">
          <div><dt className="text-sm font-bold text-slate-500">Section</dt><dd className="mt-1 font-bold">332(8)</dd></div>
          <div><dt className="text-sm font-bold text-slate-500">Status</dt><dd className="mt-1 font-bold">Active — Provisional</dd></div>
          <div><dt className="text-sm font-bold text-slate-500">Date</dt><dd className="mt-1 font-bold">18 June 2026</dd></div>
          <div><dt className="text-sm font-bold text-slate-500">Validity</dt><dd className="mt-1 font-bold">TY 2026–27 to TY 2028–29</dd></div>
          <div className="sm:col-span-2"><dt className="text-sm font-bold text-slate-500">Unique Registration Number</dt><dd className="mt-1 break-all font-bold">AAPCR8950CE20261</dd></div>
          <div className="sm:col-span-2"><dt className="text-sm font-bold text-slate-500">Issuing authority</dt><dd className="mt-1 font-bold">Principal Director of Income Tax</dd></div>
        </dl>
        <p className="mt-6 rounded-2xl border border-[#D9A441]/40 bg-[#FFF8E6] p-4 text-sm leading-6 text-[#6A5518]">The original order is digitally signed and retained by Rahat Foundation. A copy may be requested through the official contact page. This webpage is a verified summary and is not a replacement for the original signed order.</p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link href="/transparency" className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#07361F] px-5 py-3 font-bold text-white">Back to Transparency</Link>
          <Link href="/contact" className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-[#07361F] px-5 py-3 font-bold text-[#07361F]">Request Original Copy</Link>
        </div>
      </article>
    </main>
  );
}
