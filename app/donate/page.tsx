import type { Metadata } from 'next';
import Link from 'next/link';

import { CopyButton } from '@/components/donation/CopyButton';
import { DonationPathwaySelector } from '@/components/donation/DonationPathwaySelector';
import { donationConfig } from '@/lib/donation-config';

export const metadata: Metadata = {
  title: 'Donate Securely',
  description:
    'Support Rahat Social Impact Foundation through secure monthly Razorpay AutoPay, one-time Razorpay checkout, UPI, or bank transfer.',
};

const phoneDisplay = '+91 9625293030';

const bankFields = [
  { label: 'Account Name', value: donationConfig.bank.accountName },
  { label: 'Account Number', value: donationConfig.bank.accountNumber },
  { label: 'IFSC', value: donationConfig.bank.ifsc },
  { label: 'Bank Name', value: donationConfig.bank.bankName },
  { label: 'Branch', value: donationConfig.bank.branch },
  { label: 'Account Type', value: donationConfig.bank.accountType },
];

type DonatePageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function DonatePage({ searchParams }: DonatePageProps) {
  const query = await searchParams;
  const isPhase2Prefill =
    query.type === 'one-time' && query.amount === '5800' && query.purpose === 'wheelchair-phase-2';

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F8F5EF] pb-16 text-[#1F2937]">
      <section className="border-b border-[#D9A441]/25 bg-[linear-gradient(145deg,#07361F_0%,#145B37_100%)] text-white">
        <div className="mx-auto max-w-5xl px-4 py-7 text-center sm:px-6 sm:py-10">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#E7C76D] sm:text-sm">Official donation page</p>
          <h1 className="mt-2 text-3xl font-bold leading-tight sm:text-5xl">Support healthcare securely.</h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-white/85 sm:text-lg sm:leading-8">
            Choose monthly AutoPay or make a one-time domestic donation through Razorpay.
          </p>
        </div>
      </section>

      <DonationPathwaySelector
        initialPathway={isPhase2Prefill ? 'one-time' : 'monthly'}
        initialAmount={isPhase2Prefill ? 5800 : 1000}
        initialPurpose={isPhase2Prefill ? 'Wheelchair Sadaqah' : 'General Sadaqah'}
      />

      <section className="border-y border-[#D9A441]/25 bg-white" aria-label="Donation trust information">
        <div className="mx-auto grid max-w-5xl gap-5 px-4 py-6 sm:px-6 md:grid-cols-3 md:py-8">
          <div>
            <p className="font-bold text-[#07361F]">Secure Razorpay payments</p>
            <p className="mt-1 text-sm leading-6 text-slate-600">Monthly mandates and one-time payments open in Razorpay&apos;s secure checkout.</p>
          </div>
          <div>
            <p className="font-bold text-[#07361F]">Verified provisional tax status</p>
            <p className="mt-1 text-sm leading-6 text-slate-600">Provisional registration under section 332(8) and provisional approval under section 354(4), valid for TY 2026–27 to 2028–29.</p>
            <Link href="/transparency" className="mt-2 inline-flex text-sm font-bold text-[#07361F] underline decoration-[#C8951A] underline-offset-4">
              View verified details
            </Link>
          </div>
          <div>
            <p className="font-bold text-[#07361F]">Domestic donations only</p>
            <p className="mt-1 text-sm leading-6 text-slate-600">Foreign contributions cannot currently be accepted without FCRA registration or prior permission.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-6 sm:px-6 sm:py-8">
        <details className="group rounded-lg border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
          <summary className="flex min-h-[48px] cursor-pointer items-center justify-between gap-4 text-lg font-bold text-[#07361F]">
            <span>Other ways to donate</span>
            <span aria-hidden="true" className="text-2xl transition group-open:rotate-45">+</span>
          </summary>
          <p className="mt-2 text-sm leading-6 text-slate-600">Use the official UPI or domestic bank details below when Razorpay is not suitable.</p>

          <div className="mt-4 border-t border-slate-200">
            <details className="group/upi border-b border-slate-200 py-3">
              <summary className="flex min-h-[44px] cursor-pointer items-center justify-between gap-3 font-bold text-[#07361F]">
                <span>UPI details</span>
                <span aria-hidden="true" className="text-xl transition group-open/upi:rotate-45">+</span>
              </summary>
              <div className="pb-3 pt-2">
                <p className="text-xs font-bold uppercase tracking-wide text-slate-500">Official UPI ID</p>
                <p className="mt-2 break-all text-base font-bold leading-6 text-[#07361F]">{donationConfig.upi.id}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">Payee: {donationConfig.upi.payeeName}</p>
                <CopyButton value={donationConfig.upi.id} label="Copy UPI ID" ariaLabel="Copy official Rahat Foundation UPI ID" className="mt-4 w-full sm:w-auto" />
                <details className="mt-4 border-t border-slate-200 pt-3">
                  <summary className="min-h-[44px] cursor-pointer py-2 text-sm font-bold text-[#07361F]">Show official QR code</summary>
                  <div className="mt-3 flex justify-center">
                    <img src={donationConfig.upi.qrPath} alt={donationConfig.upi.qrAlt} className="h-auto w-full max-w-[220px]" />
                  </div>
                </details>
              </div>
            </details>

            <details className="group/bank py-3">
              <summary className="flex min-h-[44px] cursor-pointer items-center justify-between gap-3 font-bold text-[#07361F]">
                <span>Bank transfer details</span>
                <span aria-hidden="true" className="text-xl transition group-open/bank:rotate-45">+</span>
              </summary>
              <div className="grid gap-3 pb-3 pt-2 sm:grid-cols-2">
                {bankFields.map((field) => (
                  <div key={field.label} className="border-t border-slate-200 pt-3">
                    <p className="text-xs font-bold uppercase tracking-wide text-slate-500">{field.label}</p>
                    <p className="mt-1 break-words text-sm font-bold leading-6 text-[#07361F]">{field.value}</p>
                    <CopyButton value={field.value} label="Copy" ariaLabel={`Copy ${field.label}`} className="mt-3 w-full" />
                  </div>
                ))}
              </div>
            </details>
          </div>
        </details>
      </section>

      <section className="mx-auto grid max-w-5xl gap-4 px-4 py-4 sm:px-6 md:grid-cols-2">
        <Link href="/donor-details" className="flex min-h-[108px] flex-col justify-center rounded-lg border border-[#D9A441]/40 bg-white p-5 shadow-sm transition hover:border-[#C8951A] focus:outline-none focus:ring-2 focus:ring-[#C8951A] focus:ring-offset-2">
          <span className="text-sm font-semibold text-slate-600">Already donated through UPI or bank transfer?</span>
          <span className="mt-2 font-bold text-[#07361F] underline decoration-[#C8951A] underline-offset-4">Submit donor details</span>
        </Link>
        <Link href="/volunteer" className="flex min-h-[108px] flex-col justify-center rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:border-[#2A7A45] focus:outline-none focus:ring-2 focus:ring-[#2A7A45] focus:ring-offset-2">
          <span className="text-sm font-semibold text-slate-600">Prefer to contribute your time?</span>
          <span className="mt-2 font-bold text-[#07361F] underline decoration-[#C8951A] underline-offset-4">Volunteer with Rahat Foundation</span>
        </Link>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-7 sm:px-6">
        <div className="border-t border-slate-300 pt-6">
          <h2 className="text-lg font-bold text-[#07361F]">Need help with a donation?</h2>
          <div className="mt-3 flex flex-col gap-3 text-sm font-bold sm:flex-row sm:flex-wrap">
            <a href={donationConfig.contact.whatsapp} className="min-h-[44px] py-2 underline underline-offset-4">WhatsApp {phoneDisplay}</a>
            <a href={donationConfig.contact.phone} className="min-h-[44px] py-2 underline underline-offset-4">Call {phoneDisplay}</a>
            <a href={donationConfig.contact.email} className="min-h-[44px] py-2 underline underline-offset-4">{donationConfig.contact.displayEmail}</a>
          </div>
        </div>
      </section>
    </main>
  );
}
