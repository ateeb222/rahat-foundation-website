import type { Metadata } from 'next';

import { CopyButton } from '@/components/donation/CopyButton';
import { DonationAcknowledgementForm } from '@/components/donation/DonationAcknowledgementForm';
import { donationAmounts, donationConfig, recurringOptions } from '@/lib/donation-config';

export const metadata: Metadata = {
  title: 'Official Donation Page',
  description:
    'Donate through official Rahat Social Impact Foundation channels for the JNMC Hospital Patient Mobility Initiative.',
};

const bankFields = [
  { label: 'Account Name', value: donationConfig.bank.accountName },
  { label: 'Account Number', value: donationConfig.bank.accountNumber },
  { label: 'IFSC', value: donationConfig.bank.ifsc },
  { label: 'Bank Name', value: donationConfig.bank.bankName },
  { label: 'Branch', value: donationConfig.bank.branch },
  { label: 'Account Type', value: donationConfig.bank.accountType },
];

const progressPercent =
  (donationConfig.campaign.verifiedSponsored / donationConfig.campaign.totalGoal) * 100;

const primaryLink =
  'inline-flex min-h-[52px] w-full items-center justify-center rounded-full border border-[#D9A441] bg-[#07361F] px-6 py-3 text-lg font-bold text-white shadow-[0_12px_28px_rgba(7,54,31,0.24)] transition hover:-translate-y-0.5 hover:bg-[#25472D] hover:shadow-[0_16px_32px_rgba(7,54,31,0.3)] focus:outline-none focus:ring-2 focus:ring-[#D9A441] focus:ring-offset-2 active:translate-y-0 active:bg-[#07361F] sm:w-auto';
const secondaryLink =
  'inline-flex min-h-[52px] w-full items-center justify-center rounded-full border-2 border-[#07361F] bg-white px-6 py-3 text-lg font-bold text-[#07361F] shadow-sm transition hover:-translate-y-0.5 hover:border-[#D9A441] hover:bg-[#F8F5EC] focus:outline-none focus:ring-2 focus:ring-[#D9A441] focus:ring-offset-2 active:translate-y-0 sm:w-auto';
const surfaceCard =
  'rounded-[1.25rem] border border-[#D9A441]/35 bg-white p-5 shadow-[0_14px_36px_rgba(7,54,31,0.08)] sm:p-6';

function SectionIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#3B635D]">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold leading-tight text-[#07361F] sm:text-4xl">{title}</h2>
      {description ? <p className="mt-3 text-lg leading-8 text-[#1F2933]">{description}</p> : null}
    </div>
  );
}

export default function DonatePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F8F5EC] pb-16 text-[#1F2933]">
      <section className="border-b border-[#D9A441]/40 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6">
          <p className="text-2xl font-bold text-[#07361F] sm:text-3xl">Official Donation Page</p>
          <p className="mt-2 text-lg leading-8 text-[#1F2933]">
            Donate only through the official Rahat Social Impact Foundation channels shown on this page.
          </p>
          <p className="mt-3 rounded-2xl border border-[#D9A441] bg-[#FFF7DF] px-4 py-3 text-base font-bold leading-6 text-[#6A5518]">
            Beware of fake QR codes, unofficial UPI IDs, and impersonation. Always verify the payee name before payment.
          </p>
        </div>
      </section>

      <section className="bg-[radial-gradient(circle_at_top_left,rgba(119,166,37,0.18),transparent_36%),linear-gradient(135deg,#F8F5EC_0%,#FFFFFF_48%,#EEF5E7_100%)]">
        <div className="mx-auto w-full max-w-7xl px-4 py-9 sm:px-6 sm:py-14 lg:py-16">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.78fr] lg:items-stretch">
            <div className="rounded-[1.5rem] border border-[#D9A441]/40 bg-white/90 p-5 shadow-[0_20px_55px_rgba(7,54,31,0.1)] sm:p-8">
              <p className="inline-flex rounded-full border border-[#77A625]/50 bg-[#F8F5EC] px-4 py-2 text-sm font-bold uppercase tracking-[0.14em] text-[#25472D]">
                {donationConfig.campaign.phase}: {donationConfig.campaign.name}
              </p>
              <h1 className="mt-5 max-w-3xl text-[40px] font-bold leading-[1.02] text-[#07361F] sm:text-5xl lg:text-6xl">
                Help Patients Move With Dignity
              </h1>
              <p className="mt-5 max-w-2xl text-xl font-semibold leading-8 text-[#25472D]">
                ₹5,800 helps sponsor one wheelchair for the JNMC Hospital Patient Mobility Initiative.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-[#77A625]/35 bg-[#F8F5EC] p-4">
                  <p className="text-sm font-bold uppercase tracking-wide text-[#3B635D]">Goal</p>
                  <p className="mt-1 text-3xl font-bold text-[#07361F]">80 wheelchairs</p>
                </div>
                <div className="rounded-2xl border border-[#77A625]/35 bg-[#F8F5EC] p-4">
                  <p className="text-sm font-bold uppercase tracking-wide text-[#3B635D]">Verified sponsored</p>
                  <p className="mt-1 text-3xl font-bold text-[#07361F]">0 / 80</p>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <CopyButton
                  value={donationConfig.upi.id}
                  label="Copy UPI ID"
                  ariaLabel="Copy official Rahat UPI ID"
                  className="w-full text-lg sm:w-auto"
                />
                <a href="#bank-details" className={secondaryLink}>
                  View Bank Details
                </a>
                <a
                  href="#donor-details"
                  className="inline-flex min-h-[52px] w-full items-center justify-center rounded-full px-5 py-3 text-lg font-bold text-[#07361F] underline decoration-[#D9A441] decoration-2 underline-offset-8 transition hover:text-[#25472D] focus:outline-none focus:ring-2 focus:ring-[#D9A441] focus:ring-offset-2 sm:w-auto"
                >
                  Submit Donation Details
                </a>
              </div>

              <p className="mt-5 rounded-2xl border border-[#D9A441] bg-[#FFF7DF] px-4 py-3 text-base font-bold leading-6 text-[#6A5518]">
                {donationConfig.domesticWarning.short}
              </p>
            </div>

            <aside className="rounded-[1.5rem] border border-[#07361F]/15 bg-[#07361F] p-5 text-white shadow-[0_20px_50px_rgba(7,54,31,0.22)] sm:p-6">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#D9A441]">Goal tracker</p>
              <div className="mt-5">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-base font-semibold text-white/75">Verified sponsored</p>
                    <p className="mt-1 text-5xl font-bold text-white">
                      {donationConfig.campaign.verifiedSponsored} / {donationConfig.campaign.totalGoal}
                    </p>
                  </div>
                  <p className="text-right text-base font-bold text-[#D9A441]">₹5,800 each</p>
                </div>
                <div className="mt-6 h-4 overflow-hidden rounded-full bg-white/20" aria-hidden="true">
                  <div className="h-full rounded-full bg-[#D9A441]" style={{ width: `${progressPercent}%` }} />
                </div>
                <p className="mt-5 text-lg leading-8 text-white/88">
                  Progress is updated only after payment confirmation and internal reconciliation.
                </p>
                <p className="mt-3 rounded-2xl bg-white/10 px-4 py-3 text-sm font-semibold text-white/80">
                  Last updated: {donationConfig.campaign.lastUpdated}
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-9 sm:px-6" aria-labelledby="amounts-title">
        <SectionIntro
          eyebrow="Choose an amount"
          title="Quick donation amounts"
          description="Razorpay is pending, so these cards take you to official UPI and bank transfer details."
        />
        <div id="amounts-title" className="sr-only">
          Quick donation amounts
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {donationAmounts.map((item) => (
            <a
              key={item.amount}
              href="#payment-methods"
              className={`rounded-[1.25rem] border p-5 shadow-[0_12px_28px_rgba(7,54,31,0.07)] transition hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(7,54,31,0.12)] focus:outline-none focus:ring-2 focus:ring-[#D9A441] focus:ring-offset-2 ${
                item.featured
                  ? 'border-[#D9A441] bg-[#07361F] text-white'
                  : 'border-[#D9A441]/30 bg-white text-[#1F2933] hover:border-[#77A625]'
              }`}
            >
              <span className={`block text-3xl font-bold ${item.featured ? 'text-white' : 'text-[#07361F]'}`}>
                {item.amount}
              </span>
              <span className="mt-2 block text-lg font-bold leading-7">{item.label}</span>
            </a>
          ))}
        </div>
      </section>

      <section id="payment-methods" className="mx-auto w-full max-w-7xl px-4 py-9 sm:px-6">
        <SectionIntro
          eyebrow="Payment methods"
          title="Use official UPI or bank transfer until Razorpay is live"
          description="Please verify the payee name before payment. On mobile, copy the UPI ID first because scanning a QR from the same phone can be difficult inside Instagram."
        />

        <div className="mt-6 grid gap-5 lg:grid-cols-3">
          <article className={surfaceCard}>
            <p className="text-2xl font-bold text-[#07361F]">Secure Online Donation</p>
            <p className="mt-4 text-lg leading-8 text-[#1F2933]">{donationConfig.razorpay.message}</p>
            <p className="mt-5 inline-flex rounded-full border border-[#D9A441] bg-[#FFF7DF] px-4 py-2 text-base font-bold text-[#6A5518]">
              Coming after approval
            </p>
          </article>

          <article className={surfaceCard}>
            <p className="text-2xl font-bold text-[#07361F]">UPI / QR Donation</p>
            <div className="mt-5 rounded-2xl border-2 border-[#77A625]/45 bg-[#F8F5EC] p-4">
              <p className="text-sm font-bold uppercase tracking-wide text-[#3B635D]">UPI ID</p>
              <p className="mt-2 break-all text-2xl font-bold leading-tight text-[#07361F]">
                {donationConfig.upi.id}
              </p>
              <CopyButton
                value={donationConfig.upi.id}
                label="Copy UPI ID"
                ariaLabel="Copy official Rahat UPI ID"
                className="mt-4 w-full text-lg"
              />
            </div>
            <p className="mt-5 text-base font-bold text-[#1F2933]">Payee name</p>
            <p className="mt-1 text-lg font-bold leading-7 text-[#07361F]">{donationConfig.upi.payeeName}</p>
            <p className="mt-4 rounded-2xl border border-[#D9A441] bg-[#FFF7DF] px-4 py-3 text-base font-bold leading-6 text-[#6A5518]">
              Verify payee name before payment.
            </p>
            <div className="mt-5 flex justify-center rounded-2xl border border-[#D9A441]/25 bg-white p-4">
              <img
                src={donationConfig.upi.qrPath}
                alt={donationConfig.upi.qrAlt}
                className="h-auto w-full max-w-[260px]"
              />
            </div>
          </article>

          <article id="bank-details" className={surfaceCard}>
            <p className="text-2xl font-bold text-[#07361F]">Direct Bank Transfer</p>
            <div className="mt-5 grid gap-3">
              {bankFields.map((field) => (
                <div key={field.label} className="rounded-2xl border border-[#D9A441]/25 bg-[#F8F5EC] p-4">
                  <p className="text-sm font-bold uppercase tracking-wide text-[#3B635D]">{field.label}</p>
                  <p className="mt-2 break-words text-lg font-bold leading-7 text-[#1F2933]">{field.value}</p>
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
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-9 sm:px-6">
        <div className="rounded-[1.25rem] border border-[#D9A441] bg-white p-5 shadow-[0_14px_36px_rgba(7,54,31,0.08)] sm:p-8">
          <h2 className="text-3xl font-bold text-[#07361F]">{donationConfig.domesticWarning.title}</h2>
          <div className="mt-4 grid gap-4 text-lg leading-8 text-[#1F2933]">
            {donationConfig.domesticWarning.body.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-9 sm:px-6">
        <SectionIntro
          eyebrow="Donation purpose"
          title="I want to give for:"
          description="Please choose the correct giving type. Zakat and foreign donations are not accepted through this account at present."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {donationConfig.religiousGiving.accepted.map((item) => (
            <article key={item} className="rounded-[1.25rem] border border-[#D9A441]/30 bg-white p-5 shadow-[0_12px_28px_rgba(7,54,31,0.07)]">
              <h3 className="text-2xl font-bold text-[#07361F]">{item}</h3>
              {item === 'Interest / Riba Disposal' ? (
                <p className="mt-3 text-lg leading-8 text-[#1F2933]">
                  For disposing bank interest or impermissible income. This is not Zakat.
                </p>
              ) : null}
            </article>
          ))}
        </div>

        <div className="mt-5 rounded-[1.25rem] border border-[#D9A441] bg-[#FFF7DF] p-5 shadow-[0_12px_28px_rgba(7,54,31,0.07)] sm:p-6">
          <h3 className="text-2xl font-bold text-[#07361F]">Giving Guidance</h3>
          <ul className="mt-4 grid gap-3 text-lg leading-8 text-[#1F2933]">
            <li>Sadaqah and voluntary support are accepted.</li>
            <li>Bank interest or riba disposal may be used for public healthcare benefit. This is not Zakat.</li>
            <li>Zakat is not accepted through this account.</li>
            <li>Foreign donations are not accepted until FCRA registration or prior permission.</li>
          </ul>
        </div>
      </section>

      <section id="donor-details" className="mx-auto w-full max-w-7xl px-4 py-9 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionIntro
              eyebrow="Acknowledgement"
              title="Already donated? Share your details for acknowledgement."
              description="This form is ready for donor acknowledgement details, but backend submission is not connected yet."
            />
          </div>
          <div className={surfaceCard}>
            <DonationAcknowledgementForm />
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-9 sm:px-6">
        <SectionIntro
          eyebrow="Coming soon"
          title="Join Recurring Sadaqah"
          description="Soon, donors will be able to support patient mobility weekly, monthly, or yearly through secure recurring payment options."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {Object.entries(recurringOptions).map(([frequency, options]) => (
            <article key={frequency} className={surfaceCard}>
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-2xl font-bold text-[#07361F]">{frequency}</h3>
                <span className="rounded-full border border-[#D9A441] bg-[#FFF7DF] px-3 py-1 text-sm font-bold text-[#6A5518]">
                  Coming Soon
                </span>
              </div>
              <ul className="mt-4 grid gap-3 text-lg leading-8 text-[#1F2933]">
                {options.map((option) => (
                  <li key={option} className="rounded-xl border border-[#D9A441]/20 bg-[#F8F5EC] px-4 py-3">
                    {option}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-5 px-4 py-9 sm:px-6 lg:grid-cols-2">
        <div className={surfaceCard}>
          <h2 className="text-3xl font-bold text-[#07361F]">Need help?</h2>
          <p className="mt-3 text-lg leading-8 text-[#1F2933]">{donationConfig.contact.note}</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {['WhatsApp', 'Call', 'Email'].map((item) => (
              <a key={item} href="/contact" className={primaryLink}>
                {item}
              </a>
            ))}
          </div>
        </div>

        <div className={surfaceCard}>
          <h2 className="text-3xl font-bold text-[#07361F]">Follow Rahat updates</h2>
          <p className="mt-3 text-lg leading-8 text-[#1F2933]">{donationConfig.social.note}</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {['Instagram', 'LinkedIn', 'YouTube', 'WhatsApp updates'].map((item) => (
              <a key={item} href="/contact" className={secondaryLink}>
                {item}
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
