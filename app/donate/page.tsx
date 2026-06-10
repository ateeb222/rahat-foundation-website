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
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1A4D2E]">{eyebrow}</p>
      <h2 className="mt-3 text-2xl font-semibold leading-tight text-[#1A4D2E] sm:text-3xl">{title}</h2>
      {description ? <p className="mt-3 text-[17px] leading-7 text-slate-700">{description}</p> : null}
    </div>
  );
}

export default function DonatePage() {
  return (
    <main className="min-h-screen bg-[#F8F5EF] pb-16 text-[#1F2937]">
      <section className="border-b border-[#C8951A]/40 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6">
          <p className="text-2xl font-semibold text-[#1A4D2E] sm:text-3xl">Official Donation Page</p>
          <p className="mt-2 text-[17px] leading-7 text-slate-700">
            Donate only through the official Rahat Social Impact Foundation channels shown on this page.
          </p>
          <p className="mt-3 rounded-2xl border border-[#C8951A] bg-[#FFF8E6] px-4 py-3 text-base font-semibold leading-6 text-[#6F520F]">
            Beware of fake QR codes, unofficial UPI IDs, and impersonation. Always verify the payee name before payment.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:py-14">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.78fr] lg:items-start">
          <div>
            <p className="inline-flex rounded-full border border-[#2A7A45] bg-white px-4 py-2 text-sm font-semibold uppercase tracking-[0.14em] text-[#1A4D2E]">
              {donationConfig.campaign.phase}: {donationConfig.campaign.name}
            </p>
            <h1 className="mt-5 max-w-3xl text-[38px] font-semibold leading-[1.05] text-[#1A4D2E] sm:text-5xl lg:text-6xl">
              Help Patients Move With Dignity
            </h1>
            <p className="mt-5 max-w-2xl text-xl leading-8 text-slate-700">
              ₹5,800 helps sponsor one wheelchair for the JNMC Hospital Patient Mobility Initiative.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Goal</p>
                <p className="mt-1 text-2xl font-semibold text-[#1A4D2E]">80 wheelchairs</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Verified sponsored</p>
                <p className="mt-1 text-2xl font-semibold text-[#1A4D2E]">0 / 80</p>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <CopyButton
                value={donationConfig.upi.id}
                label="Copy UPI ID"
                className="w-full bg-[#1A4D2E] text-lg text-white hover:bg-[#16402a] sm:w-auto"
              />
              <a
                href="#bank-details"
                className="inline-flex min-h-[52px] w-full items-center justify-center rounded-full border border-[#1A4D2E] bg-white px-5 py-3 text-lg font-semibold text-[#1A4D2E] transition hover:bg-[#E8F4E8] focus:outline-none focus:ring-2 focus:ring-[#2A7A45] focus:ring-offset-2 sm:w-auto"
              >
                View Bank Details
              </a>
              <a
                href="#donor-details"
                className="inline-flex min-h-[52px] w-full items-center justify-center rounded-full px-5 py-3 text-lg font-semibold text-[#1A4D2E] underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-[#2A7A45] focus:ring-offset-2 sm:w-auto"
              >
                Submit Donation Details
              </a>
            </div>

            <p className="mt-5 rounded-2xl border border-[#C8951A] bg-[#FFF8E6] px-4 py-3 text-base font-semibold leading-6 text-[#6F520F]">
              {donationConfig.domesticWarning.short}
            </p>
          </div>

          <aside className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1A4D2E]">Goal tracker</p>
            <div className="mt-5">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="text-base font-semibold text-slate-600">Verified sponsored</p>
                  <p className="mt-1 text-4xl font-semibold text-[#1A4D2E]">
                    {donationConfig.campaign.verifiedSponsored} / {donationConfig.campaign.totalGoal}
                  </p>
                </div>
                <p className="text-right text-base font-semibold text-[#8A6511]">₹5,800 each</p>
              </div>
              <div className="mt-5 h-4 overflow-hidden rounded-full bg-[#E8F4E8]" aria-hidden="true">
                <div className="h-full rounded-full bg-[#2A7A45]" style={{ width: `${progressPercent}%` }} />
              </div>
              <p className="mt-4 text-base leading-7 text-slate-700">
                Progress is updated only after payment confirmation and internal reconciliation.
              </p>
              <p className="mt-2 text-sm font-semibold text-slate-500">Last updated: {donationConfig.campaign.lastUpdated}</p>
            </div>
          </aside>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6" aria-labelledby="amounts-title">
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
              className={`rounded-2xl border p-5 transition focus:outline-none focus:ring-2 focus:ring-[#2A7A45] focus:ring-offset-2 ${
                item.featured ? 'border-[#C8951A] bg-[#FFF8E6]' : 'border-slate-200 bg-white hover:border-[#2A7A45]'
              }`}
            >
              <span className="block text-3xl font-semibold text-[#1A4D2E]">{item.amount}</span>
              <span className="mt-2 block text-lg font-semibold leading-7 text-slate-800">{item.label}</span>
            </a>
          ))}
        </div>
      </section>

      <section id="payment-methods" className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6">
        <SectionIntro
          eyebrow="Payment methods"
          title="Use official UPI or bank transfer until Razorpay is live"
          description="Please verify the payee name before payment. On mobile, copy the UPI ID first because scanning a QR from the same phone can be difficult inside Instagram."
        />

        <div className="mt-6 grid gap-5 lg:grid-cols-3">
          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <p className="text-xl font-semibold text-[#1A4D2E]">Secure Online Donation</p>
            <p className="mt-4 text-[17px] leading-7 text-slate-700">{donationConfig.razorpay.message}</p>
            <p className="mt-5 inline-flex rounded-full bg-[#FFF8E6] px-4 py-2 text-base font-semibold text-[#6F520F]">
              Coming after approval
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <p className="text-xl font-semibold text-[#1A4D2E]">UPI / QR Donation</p>
            <div className="mt-5 rounded-2xl border border-[#2A7A45] bg-[#F8F5EF] p-4">
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">UPI ID</p>
              <p className="mt-2 break-all text-2xl font-semibold leading-tight text-[#1A4D2E]">
                {donationConfig.upi.id}
              </p>
              <CopyButton value={donationConfig.upi.id} label="Copy UPI ID" className="mt-4 w-full text-lg" />
            </div>
            <p className="mt-5 text-base font-semibold text-slate-800">Payee name</p>
            <p className="mt-1 text-lg font-semibold leading-7 text-[#1A4D2E]">{donationConfig.upi.payeeName}</p>
            <p className="mt-4 rounded-2xl border border-[#C8951A] bg-[#FFF8E6] px-4 py-3 text-base font-semibold leading-6 text-[#6F520F]">
              Verify payee name before payment.
            </p>
            <div className="mt-5 flex justify-center rounded-2xl border border-slate-200 bg-white p-4">
              <img
                src={donationConfig.upi.qrPath}
                alt={donationConfig.upi.qrAlt}
                className="h-auto w-full max-w-[260px]"
              />
            </div>
          </article>

          <article id="bank-details" className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <p className="text-xl font-semibold text-[#1A4D2E]">Direct Bank Transfer</p>
            <div className="mt-5 grid gap-3">
              {bankFields.map((field) => (
                <div key={field.label} className="rounded-2xl border border-slate-200 bg-[#F8F5EF] p-4">
                  <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">{field.label}</p>
                  <p className="mt-2 break-words text-lg font-semibold leading-7 text-slate-900">{field.value}</p>
                  <CopyButton value={field.value} label="Copy" className="mt-3 w-full" />
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6">
        <div className="rounded-2xl border border-[#C8951A] bg-white p-5 shadow-sm sm:p-8">
          <h2 className="text-2xl font-semibold text-[#1A4D2E]">{donationConfig.domesticWarning.title}</h2>
          <div className="mt-4 grid gap-4 text-[17px] leading-8 text-slate-700">
            {donationConfig.domesticWarning.body.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6">
        <SectionIntro
          eyebrow="Donation purpose"
          title="I want to give for:"
          description="Please choose the correct giving type. Zakat and foreign donations are not accepted through this account at present."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {donationConfig.religiousGiving.accepted.map((item) => (
            <article key={item} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-xl font-semibold text-[#1A4D2E]">{item}</h3>
              {item === 'Interest / Riba Disposal' ? (
                <p className="mt-3 text-base leading-7 text-slate-700">
                  For donors who wish to dispose of bank interest or impermissible income. This is not Zakat.
                </p>
              ) : null}
            </article>
          ))}
        </div>
        <div className="mt-5 grid gap-4 lg:grid-cols-2">
          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h3 className="text-xl font-semibold text-[#1A4D2E]">Interest / Riba Disposal</h3>
            <p className="mt-3 text-[17px] leading-8 text-slate-700">{donationConfig.religiousGiving.riba}</p>
          </article>
          <article className="rounded-2xl border border-[#C8951A] bg-[#FFF8E6] p-5 shadow-sm sm:p-6">
            <h3 className="text-xl font-semibold text-[#1A4D2E]">Zakat Not Accepted Here</h3>
            <p className="mt-3 text-[17px] leading-8 text-slate-700">{donationConfig.religiousGiving.zakat}</p>
            <p className="mt-4 text-base font-semibold text-[#6F520F]">Please do not send Zakat to this account at present.</p>
          </article>
        </div>
      </section>

      <section id="donor-details" className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionIntro
              eyebrow="Acknowledgement"
              title="Already donated? Share your details for acknowledgement."
              description="This form is ready for donor acknowledgement details, but backend submission is not connected yet."
            />
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <DonationAcknowledgementForm />
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6">
        <SectionIntro
          eyebrow="Coming soon"
          title="Join Recurring Sadaqah"
          description="Soon, donors will be able to support patient mobility weekly, monthly, or yearly through secure recurring payment options."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {Object.entries(recurringOptions).map(([frequency, options]) => (
            <article key={frequency} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-[#1A4D2E]">{frequency}</h3>
                <span className="rounded-full bg-[#FFF8E6] px-3 py-1 text-sm font-semibold text-[#6F520F]">Coming Soon</span>
              </div>
              <ul className="mt-4 grid gap-3 text-[17px] leading-7 text-slate-700">
                {options.map((option) => (
                  <li key={option} className="rounded-xl bg-[#F8F5EF] px-4 py-3">
                    {option}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-5 px-4 py-8 sm:px-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h2 className="text-2xl font-semibold text-[#1A4D2E]">Need help?</h2>
          <p className="mt-3 text-[17px] leading-7 text-slate-700">{donationConfig.contact.note}</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {['WhatsApp', 'Call', 'Email'].map((item) => (
              <a
                key={item}
                href="/contact"
                className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-[#1A4D2E] px-5 py-3 text-lg font-semibold text-[#1A4D2E] hover:bg-[#E8F4E8] focus:outline-none focus:ring-2 focus:ring-[#2A7A45] focus:ring-offset-2"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h2 className="text-2xl font-semibold text-[#1A4D2E]">Follow Rahat updates</h2>
          <p className="mt-3 text-[17px] leading-7 text-slate-700">{donationConfig.social.note}</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {['Instagram', 'LinkedIn', 'YouTube', 'WhatsApp updates'].map((item) => (
              <a
                key={item}
                href="/contact"
                className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-slate-300 px-4 py-3 text-base font-semibold text-slate-700 hover:border-[#1A4D2E] hover:text-[#1A4D2E] focus:outline-none focus:ring-2 focus:ring-[#2A7A45] focus:ring-offset-2"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
