import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import { CopyButton } from '@/components/donation/CopyButton';
import { DonationPurposeAndForm } from '@/components/donation/DonationPurposeAndForm';
import { DonationAmountSelector } from '@/components/donation/DonationAmountSelector';
import { RazorpayCheckout } from '@/components/donation/RazorpayCheckout';
import { donationConfig } from '@/lib/donation-config';

export const metadata: Metadata = {
  title: 'Official Donation Page',
  description:
    'Official Rahat Social Impact Foundation donation page for the JNMC Hospital Patient Mobility Initiative.',
};

const bankFields = [
  { label: 'Account Name', value: donationConfig.bank.accountName },
  { label: 'Account Number', value: donationConfig.bank.accountNumber },
  { label: 'IFSC', value: donationConfig.bank.ifsc },
  { label: 'Bank Name', value: donationConfig.bank.bankName },
  { label: 'Branch', value: donationConfig.bank.branch },
  { label: 'Account Type', value: donationConfig.bank.accountType },
];

const remainingWheelchairs =
  donationConfig.campaign.totalGoal - donationConfig.campaign.verifiedSponsored;
const donatePhoneDisplay = '+91 9625293030';

const primaryButton =
  'inline-flex min-h-[50px] w-full items-center justify-center rounded-full bg-[#07361F] px-5 py-3 text-base font-bold text-white shadow-[0_10px_24px_rgba(7,54,31,0.18)] transition hover:-translate-y-0.5 hover:bg-[#1A4D2E] focus:outline-none focus:ring-2 focus:ring-[#C8951A] focus:ring-offset-2 active:translate-y-0 sm:w-auto';
const secondaryButton =
  'inline-flex min-h-[50px] w-full items-center justify-center rounded-full border border-[#1A4D2E] bg-white px-5 py-3 text-base font-bold text-[#07361F] transition hover:-translate-y-0.5 hover:border-[#C8951A] hover:bg-[#F8F5EF] focus:outline-none focus:ring-2 focus:ring-[#C8951A] focus:ring-offset-2 active:translate-y-0 sm:w-auto';
const cardClass =
  'rounded-[1rem] border border-[#D9A441]/25 bg-white p-4 shadow-[0_10px_28px_rgba(7,54,31,0.06)] sm:p-6';

function StatChip({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="rounded-2xl border border-[#2A7A45]/20 bg-white px-4 py-3">
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#3B635D]">{label}</p>
      <p className="mt-1 text-2xl font-bold leading-none text-[#07361F]">{value}</p>
    </div>
  );
}

function VerificationRow({ label, value, href }: { label: string; value: string; href?: string }) {
  const content = href ? (
    <a className="break-words font-bold text-[#07361F] underline decoration-[#C8951A]/60 underline-offset-4" href={href}>
      {value}
    </a>
  ) : (
    <span className="break-words font-bold text-[#07361F]">{value}</span>
  );

  return (
    <div className="rounded-2xl border border-[#2A7A45]/15 bg-[#F8F5EF] px-4 py-3">
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#3B635D]">{label}</p>
      <p className="mt-1 text-base leading-6">{content}</p>
    </div>
  );
}

function AccordionCard({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <details className="rounded-[1rem] border border-[#D9A441]/25 bg-white p-4 shadow-[0_10px_28px_rgba(7,54,31,0.05)]">
      <summary className="cursor-pointer text-base font-bold text-[#07361F]">{title}</summary>
      <div className="mt-3 text-sm leading-6 text-slate-700">{children}</div>
    </details>
  );
}

export default function DonatePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F8F5EF] pb-32 text-[#1F2937] sm:pb-16">
      <section className="border-b border-[#D9A441]/20 bg-[#F8F5EF]">
        <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 sm:py-10 lg:py-12">
          <div className="grid gap-5 lg:grid-cols-[1fr_0.86fr] lg:items-center">
            <div className="max-w-3xl">
              <p className="inline-flex rounded-full border border-[#2A7A45]/25 bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#1A4D2E]">
                Official Donation Page
              </p>
              <h1 className="mt-4 text-[30px] font-bold leading-tight text-[#07361F] sm:text-4xl lg:text-[44px]">
                JNMC Hospital Patient Mobility Initiative
              </h1>
              <p className="mt-3 text-lg font-semibold leading-7 text-[#25472D] sm:text-xl">
                Sponsor one wheelchair for ₹5,800
              </p>

              <div className="mt-5 grid grid-cols-3 gap-2 sm:max-w-lg sm:gap-3">
                <StatChip label="Goal" value={donationConfig.campaign.totalGoal} />
                <StatChip label="Confirmed" value={donationConfig.campaign.verifiedSponsored} />
                <StatChip label="Remaining" value={remainingWheelchairs} />
              </div>

              <p className="mt-5 rounded-2xl border border-[#D9A441]/45 bg-white px-4 py-3 text-sm font-semibold leading-6 text-[#5F4A12]">
                Payee to verify before payment: {donationConfig.upi.payeeName}
              </p>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <a href="#official-verification" className={primaryButton}>
                  Verify & Donate
                </a>
                <a href="#bank-details" className={secondaryButton}>
                  View Bank Details
                </a>
              </div>
            </div>

            <aside className="rounded-[1rem] border border-[#2A7A45]/20 bg-white p-4 shadow-[0_12px_32px_rgba(7,54,31,0.06)] sm:p-6">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#3B635D]">
                Donation flow
              </p>
              <ol className="mt-4 grid gap-3 text-sm font-semibold leading-6 text-slate-700">
                <li className="rounded-2xl bg-[#F8F5EF] px-4 py-3">1. Confirm Rahat identity and payee name.</li>
                <li className="rounded-2xl bg-[#F8F5EF] px-4 py-3">2. Use official UPI or bank transfer details.</li>
                <li className="rounded-2xl bg-[#F8F5EF] px-4 py-3">3. Submit acknowledgement details after payment.</li>
              </ol>
            </aside>
          </div>
        </div>
      </section>

      <section id="official-verification" className="mx-auto w-full max-w-7xl scroll-mt-6 px-4 py-8 sm:px-6 sm:py-10">
        <div className="grid gap-5 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#3B635D]">Verification</p>
            <h2 className="mt-2 text-2xl font-bold leading-tight text-[#07361F] sm:text-3xl">
              Verify before you donate
            </h2>
            <p className="mt-3 max-w-xl text-base leading-7 text-slate-700">
              Please confirm the website, payee name, and official contact details before making any payment.
            </p>
          </div>

          <div className={cardClass}>
            <div className="grid gap-3 sm:grid-cols-2">
              <VerificationRow label="Website" value="rahatsocialimpact.com" />
              <VerificationRow label="Payee" value={donationConfig.upi.payeeName} />
              <VerificationRow label="Bank" value={`${donationConfig.bank.bankName} Current Account`} />
              <VerificationRow label="Email" value={donationConfig.contact.displayEmail} href={donationConfig.contact.email} />
              <VerificationRow label="Phone / WhatsApp" value={donatePhoneDisplay} href={donationConfig.contact.whatsapp} />
            </div>
            <p className="mt-4 rounded-2xl border border-[#D9A441]/50 bg-[#FFF8E6] px-4 py-3 text-sm font-bold leading-6 text-[#6A5518]">
              Please donate only after confirming the payee name. Rahat is not responsible for payments made to unofficial QR codes or accounts.
            </p>
          </div>
        </div>
      </section>

      <section id="official-payment" className="mx-auto w-full max-w-7xl scroll-mt-6 px-4 py-8 sm:px-6 sm:py-10">
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#3B635D]">Official payment</p>
            <h2 className="mt-2 text-2xl font-bold leading-tight text-[#07361F] sm:text-3xl">
              Donate securely online or use direct transfer
            </h2>
            <p className="mt-3 max-w-xl text-base leading-7 text-slate-700">
              Use the secure Razorpay checkout below, or the verified UPI and bank details on this page.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <a href="#bank-details" className={secondaryButton}>
                View Bank Details
              </a>
              <a href="#donor-details" className={primaryButton}>
                Submit Donation Details
              </a>
            </div>
            <DonationAmountSelector />
          </div>

          <div className="grid gap-4">
            <div id="razorpay-checkout" className="scroll-mt-6"><RazorpayCheckout /></div>
            <article className={cardClass}>
              <p className="text-lg font-bold text-[#07361F]">UPI / QR donation</p>
              <div className="mt-4 rounded-2xl border border-[#2A7A45]/20 bg-[#F8F5EF] p-4">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#3B635D]">UPI ID</p>
                <p className="mt-2 break-all text-base font-bold leading-6 text-[#07361F]">
                  {donationConfig.upi.id}
                </p>
                <CopyButton
                  value={donationConfig.upi.id}
                  label="Copy UPI ID"
                  ariaLabel="Copy official Rahat UPI ID"
                  className="mt-4 w-full"
                />
              </div>
              <div className="mt-4 flex justify-center rounded-2xl border border-[#D9A441]/20 bg-white p-3">
                <img
                  src={donationConfig.upi.qrPath}
                  alt={donationConfig.upi.qrAlt}
                  className="h-auto w-full max-w-[220px]"
                />
              </div>
            </article>

            <article id="bank-details" className={cardClass}>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-lg font-bold text-[#07361F]">Direct bank transfer</p>
                  <p className="mt-1 text-sm leading-6 text-slate-700">Use these details only after verification.</p>
                </div>
                <a href="#donor-details" className={secondaryButton}>
                  Submit Donation Details
                </a>
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {bankFields.map((field) => (
                  <div key={field.label} className="rounded-2xl border border-[#D9A441]/20 bg-[#F8F5EF] p-3">
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#3B635D]">{field.label}</p>
                    <p className="mt-1 break-words text-sm font-bold leading-6 text-[#1F2937]">{field.value}</p>
                    <CopyButton
                      value={field.value}
                      label="Copy"
                      ariaLabel={`Copy ${field.label}`}
                      className="mt-3 w-full"
                    />
                  </div>
                ))}
              </div>
            </article>

          </div>
        </div>
      </section>

      <DonationPurposeAndForm />

      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-10">
        <div className="grid gap-3 lg:grid-cols-2">
          <AccordionCard title="How this campaign works">
            <p>
              Wheelchairs will be procured, tagged, recorded, and handed over through hospital coordination. Updates will be published after payment confirmation, procurement, tagging, and deployment.
            </p>
          </AccordionCard>

          <AccordionCard title="After donation">
            <p>
              Keep your UTR or transaction ID. Submit the acknowledgement form so Rahat can match the payment and update internal records.
            </p>
            <p className="mt-2">Recurring Sadaqah remains coming soon.</p>
          </AccordionCard>

          <AccordionCard title="Zakat and FCRA guidance">
            <ul className="grid gap-2">
              <li>Zakat is not accepted through this account at present.</li>
              <li>Foreign donations are not accepted until FCRA registration or prior permission.</li>
              <li>{donationConfig.religiousGiving.riba}</li>
            </ul>
          </AccordionCard>

          <AccordionCard title="Contact Rahat">
            <div className="grid gap-2">
              <a className="font-bold text-[#07361F] underline decoration-[#C8951A]/60 underline-offset-4" href={donationConfig.contact.whatsapp}>
                WhatsApp {donatePhoneDisplay}
              </a>
              <a className="font-bold text-[#07361F] underline decoration-[#C8951A]/60 underline-offset-4" href={donationConfig.contact.phone}>
                Call {donatePhoneDisplay}
              </a>
              <a className="font-bold text-[#07361F] underline decoration-[#C8951A]/60 underline-offset-4" href={donationConfig.contact.email}>
                {donationConfig.contact.displayEmail}
              </a>
            </div>
          </AccordionCard>
        </div>
      </section>

      <nav
        className="fixed inset-x-0 bottom-0 z-50 border-t border-[#D9A441]/25 bg-white/96 px-4 py-3 shadow-[0_-12px_28px_rgba(7,54,31,0.12)] backdrop-blur sm:hidden"
        aria-label="Donation quick actions"
      >
        <div className="mx-auto grid max-w-md grid-cols-2 gap-3">
          <a href="#official-payment" className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#07361F] px-4 py-3 text-sm font-bold text-white">
            Sponsor ₹5,800
          </a>
          <a href="#official-verification" className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-[#1A4D2E] bg-white px-4 py-3 text-sm font-bold text-[#07361F]">
            Verify Details
          </a>
        </div>
      </nav>
    </main>
  );
}
