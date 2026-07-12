import type { Metadata } from 'next';
import Link from 'next/link';
import { MonthlySadaqahCheckout } from '@/components/donation/MonthlySadaqahCheckout';

export const metadata: Metadata = { title: 'Monthly Sadaqah', description: 'Make Sadaqah a monthly habit through secure Razorpay AutoPay for Rahat healthcare initiatives.' };

export default function SadaqahPage() {
  return (
    <main className="min-h-screen bg-[#F8F5EF] pb-24 text-[#1F2937] sm:pb-16">
      <section className="border-b border-[#D9A441]/25 bg-[linear-gradient(145deg,#07361F_0%,#145B37_100%)] text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 sm:py-16 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div><p className="text-sm font-bold uppercase tracking-[0.2em] text-[#E7C76D]">Monthly Sadaqah</p><h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">Make Sadaqah a monthly habit.</h1><p className="mt-4 max-w-2xl text-lg leading-8 text-white/90">From about ₹3.30 a day, your monthly contribution can create dependable support for patient mobility and public healthcare. Choose an amount comfortable for you and approve secure AutoPay once.</p><a href="#start" className="mt-6 inline-flex min-h-[54px] w-full items-center justify-center rounded-full border border-[#D9A441] bg-white px-6 py-3 text-lg font-bold text-[#07361F] shadow-lg sm:w-auto">Start Monthly Sadaqah</a><p className="mt-3 text-sm text-white/75">Cancel anytime · Transparent donor records · Domestic Indian donations only</p></div>
          <div className="grid grid-cols-3 gap-3"><div className="rounded-2xl border border-white/15 bg-white/10 p-4"><p className="text-2xl font-bold">₹100</p><p className="mt-1 text-xs text-white/75">about ₹3.30/day</p></div><div className="rounded-2xl border border-[#D9A441] bg-white p-4 text-[#07361F]"><p className="text-xs font-bold uppercase text-[#6A5518]">Recommended</p><p className="mt-1 text-2xl font-bold">₹300</p><p className="mt-1 text-xs">about ₹10/day</p></div><div className="rounded-2xl border border-white/15 bg-white/10 p-4"><p className="text-2xl font-bold">₹600</p><p className="mt-1 text-xs text-white/75">about ₹20/day</p></div></div>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:px-6 sm:py-12 lg:grid-cols-[0.72fr_1.28fr]">
        <aside className="space-y-4"><div className="rounded-2xl border border-[#D9A441]/30 bg-white p-5"><p className="font-bold text-[#07361F]">How it works</p><ol className="mt-3 grid gap-3 text-sm leading-6 text-slate-700"><li>1. Choose a comfortable monthly amount.</li><li>2. Approve the mandate securely through Razorpay.</li><li>3. Razorpay processes future debits on the billing schedule.</li><li>4. You may cancel future debits at any time.</li></ol></div><div className="rounded-2xl border border-[#D9A441]/30 bg-[#FFF8E6] p-5 text-sm leading-6 text-[#5F4A12]"><p className="font-bold">Clear giving guidance</p><p className="mt-2">This facility is for voluntary Sadaqah and healthcare support. It is not presently offered for Zakat or foreign contributions.</p></div><Link href="/donate" className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full border border-[#1A4D2E] bg-white px-5 py-3 font-bold text-[#07361F]">Prefer a one-time donation?</Link></aside>
        <div className="rounded-[1.25rem] border border-[#D9A441]/35 bg-white p-4 shadow-[0_18px_50px_rgba(7,54,31,0.1)] sm:p-7"><MonthlySadaqahCheckout /></div>
      </section>
    </main>
  );
}
