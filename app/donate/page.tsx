import type { Metadata } from 'next';
import Link from 'next/link';

import { CopyButton } from '@/components/donation/CopyButton';
import { DonationPurposeAndForm } from '@/components/donation/DonationPurposeAndForm';
import { DonationAmountSelector } from '@/components/donation/DonationAmountSelector';
import { RazorpayCheckout } from '@/components/donation/RazorpayCheckout';
import { donationConfig } from '@/lib/donation-config';

export const metadata: Metadata = {
  title: 'Donate Securely',
  description:
    'Official Rahat Social Impact Foundation donation page with secure Razorpay checkout, optional UPI and bank transfer, and donor acknowledgement.',
};

const remaining = donationConfig.campaign.totalGoal - donationConfig.campaign.verifiedSponsored;
const phoneDisplay = '+91 9625293030';

const bankFields = [
  { label: 'Account Name', value: donationConfig.bank.accountName },
  { label: 'Account Number', value: donationConfig.bank.accountNumber },
  { label: 'IFSC', value: donationConfig.bank.ifsc },
  { label: 'Bank Name', value: donationConfig.bank.bankName },
  { label: 'Branch', value: donationConfig.bank.branch },
  { label: 'Account Type', value: donationConfig.bank.accountType },
];

export default function DonatePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F8F5EF] pb-16 text-[#1F2937]">
      <section className="border-b border-[#D9A441]/25 bg-[linear-gradient(145deg,#07361F_0%,#145B37_100%)] text-white">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#E7C76D] sm:text-sm">Official Donation Page</p>
          <h1 className="mt-3 max-w-4xl text-[34px] font-bold leading-[1.08] sm:text-5xl">Donate securely to Rahat.</h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-white/88 sm:text-lg sm:leading-8">
            Razorpay is the recommended and easiest method. UPI and bank transfer are available below only when you choose to open them.
          </p>
          <div className="mt-6 grid grid-cols-3 gap-2 sm:gap-3">
            <div className="rounded-xl bg-white/10 p-3 sm:rounded-2xl sm:p-4"><p className="text-[10px] font-bold uppercase leading-4 tracking-wide text-[#E7C76D] sm:text-xs">Goal</p><p className="mt-1 text-2xl font-bold sm:text-3xl">{donationConfig.campaign.totalGoal}</p></div>
            <div className="rounded-xl bg-white/10 p-3 sm:rounded-2xl sm:p-4"><p className="text-[10px] font-bold uppercase leading-4 tracking-wide text-[#E7C76D] sm:text-xs">Sponsored</p><p className="mt-1 text-2xl font-bold sm:text-3xl">{donationConfig.campaign.verifiedSponsored}</p><p className="mt-1 text-[11px] text-white/75 sm:text-sm">{remaining} left</p></div>
            <div className="rounded-xl bg-white/10 p-3 sm:rounded-2xl sm:p-4"><p className="text-[10px] font-bold uppercase leading-4 tracking-wide text-[#E7C76D] sm:text-xs">Wheelchair</p><p className="mt-1 text-xl font-bold sm:text-3xl">₹5,800</p></div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-4 py-6 sm:px-6 sm:py-8 lg:grid-cols-[0.72fr_1.28fr]">
        <aside className="hidden space-y-4 lg:block">
          <div className="rounded-2xl border border-[#D9A441]/30 bg-white p-5 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#3B635D]">Recommended flow</p>
            <ol className="mt-4 grid gap-3 text-sm font-semibold leading-6 text-slate-700">
              <li className="rounded-xl bg-[#F8F5EF] p-3">1. Select an amount.</li>
              <li className="rounded-xl bg-[#F8F5EF] p-3">2. Enter donor details.</li>
              <li className="rounded-xl bg-[#F8F5EF] p-3">3. Pay securely through Razorpay.</li>
            </ol>
          </div>
          <div className="rounded-2xl border border-[#D9A441]/40 bg-[#FFF8E6] p-5 text-sm leading-6 text-[#5F4A12]">
            <p className="font-bold">Verified tax status</p>
            <p className="mt-2">Provisional registration under section 332(8) and provisional approval under section 354(4), valid for TY 2026–27 to 2028–29.</p>
            <Link href="/transparency" className="mt-3 inline-flex font-bold underline underline-offset-4">View official details</Link>
          </div>
          <Link href="/sadaqah" className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full border border-[#07361F] bg-white px-5 py-3 text-center font-bold text-[#07361F]">Prefer monthly AutoPay?</Link>
        </aside>

        <div className="grid gap-5">
          <div className="border border-[#D9A441]/35 bg-white p-4 shadow-[0_10px_28px_rgba(7,54,31,0.07)] sm:rounded-2xl sm:p-6">
            <div className="mb-4 flex items-center justify-between gap-3 border-b border-slate-200 pb-4 lg:hidden">
              <div><p className="text-sm font-bold text-[#07361F]">Secure domestic donation</p><p className="mt-1 text-xs text-slate-600">Choose an amount and pay through Razorpay.</p></div>
              <Link href="/transparency" className="shrink-0 text-xs font-bold text-[#07361F] underline decoration-[#C8951A] underline-offset-4">Verify Rahat</Link>
            </div>
            <DonationAmountSelector />
            <div className="mt-5"><RazorpayCheckout /></div>
          </div>

          <section aria-labelledby="other-payment-methods" className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
            <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#3B635D]">Optional alternatives</p>
            <h2 id="other-payment-methods" className="mt-2 text-2xl font-bold text-[#07361F]">UPI or direct bank transfer</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">These details stay closed by default to keep the page short and easy to use.</p>

            <div className="mt-5 grid gap-3">
              <details className="group rounded-2xl border border-[#D9A441]/30 bg-[#F8F5EF] p-4">
                <summary className="flex min-h-[44px] cursor-pointer items-center justify-between gap-3 font-bold text-[#07361F]">
                  <span>Pay by UPI</span><span aria-hidden="true" className="text-xl group-open:rotate-45">+</span>
                </summary>
                <div className="mt-4 border-t border-[#D9A441]/25 pt-4">
                  <p className="text-xs font-bold uppercase tracking-wide text-slate-500">UPI ID</p>
                  <p className="mt-2 break-all text-base font-bold leading-6 text-[#07361F]">{donationConfig.upi.id}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">Payee: {donationConfig.upi.payeeName}</p>
                  <CopyButton value={donationConfig.upi.id} label="Copy UPI ID" ariaLabel="Copy official Rahat UPI ID" className="mt-4 w-full sm:w-auto" />
                  <details className="mt-4 rounded-xl border border-slate-200 bg-white p-3">
                    <summary className="cursor-pointer text-sm font-bold text-[#07361F]">Show QR code</summary>
                    <div className="mt-3 flex justify-center"><img src={donationConfig.upi.qrPath} alt={donationConfig.upi.qrAlt} className="h-auto w-full max-w-[220px]" /></div>
                  </details>
                </div>
              </details>

              <details className="group rounded-2xl border border-[#D9A441]/30 bg-[#F8F5EF] p-4">
                <summary className="flex min-h-[44px] cursor-pointer items-center justify-between gap-3 font-bold text-[#07361F]">
                  <span>View bank transfer details</span><span aria-hidden="true" className="text-xl group-open:rotate-45">+</span>
                </summary>
                <div className="mt-4 grid gap-3 border-t border-[#D9A441]/25 pt-4 sm:grid-cols-2">
                  {bankFields.map((field) => (
                    <div key={field.label} className="rounded-xl border border-slate-200 bg-white p-3">
                      <p className="text-xs font-bold uppercase tracking-wide text-slate-500">{field.label}</p>
                      <p className="mt-1 break-words text-sm font-bold leading-6 text-[#07361F]">{field.value}</p>
                      <CopyButton value={field.value} label="Copy" ariaLabel={`Copy ${field.label}`} className="mt-3 w-full" />
                    </div>
                  ))}
                </div>
              </details>
            </div>
          </section>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-5 sm:px-6">
        <details className="group border border-slate-200 bg-white p-4 sm:rounded-2xl sm:p-6">
          <summary className="flex min-h-[48px] cursor-pointer items-center justify-between gap-4 font-bold text-[#07361F]">
            <span>Already paid by UPI or bank transfer?</span>
            <span aria-hidden="true" className="text-xl transition group-open:rotate-45">+</span>
          </summary>
          <p className="mt-2 text-sm leading-6 text-slate-600">Open this only to submit payment details for acknowledgement and reconciliation.</p>
          <div className="mt-4 border-t border-slate-200 pt-2"><DonationPurposeAndForm /></div>
        </details>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <div className="rounded-2xl border border-[#D9A441]/30 bg-white p-5 shadow-sm sm:p-6">
          <h2 className="text-xl font-bold text-[#07361F]">Need help with a donation?</h2>
          <div className="mt-4 flex flex-col gap-3 text-sm font-bold sm:flex-row sm:flex-wrap">
            <a href={donationConfig.contact.whatsapp} className="underline underline-offset-4">WhatsApp {phoneDisplay}</a>
            <a href={donationConfig.contact.phone} className="underline underline-offset-4">Call {phoneDisplay}</a>
            <a href={donationConfig.contact.email} className="underline underline-offset-4">{donationConfig.contact.displayEmail}</a>
          </div>
        </div>
      </section>

    </main>
  );
}
