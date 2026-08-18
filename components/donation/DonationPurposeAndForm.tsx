'use client';

import { useState } from 'react';

import { DonationAcknowledgementForm } from '@/components/donation/DonationAcknowledgementForm';
import { donationConfig } from '@/lib/donation-config';

const surfaceCard =
  'rounded-[1rem] border border-[#D9A441]/25 bg-white p-4 shadow-[0_10px_28px_rgba(7,54,31,0.06)] sm:p-6';

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

export function DonationPurposeAndForm() {
  const [purpose, setPurpose] = useState<string>(donationConfig.religiousGiving.accepted[0]);

  return (
    <>
      <section id="donor-details" className="mx-auto w-full max-w-7xl scroll-mt-6 px-4 py-8 sm:px-6 sm:py-10">
        <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <SectionIntro
              eyebrow="Acknowledgement"
              title="Submit donation details"
              description="After payment, submit details so Rahat Foundation can match and acknowledge your donation."
            />
            <div className="mt-5 grid gap-3">
              <p className="rounded-2xl border border-[#D9A441]/35 bg-[#FFF8E6] px-4 py-3 text-sm font-semibold leading-6 text-[#6A5518]">
                This form is for acknowledgement and reconciliation after payment. It is not a payment gateway.
              </p>
            </div>
          </div>

          <div className={surfaceCard}>
            <DonationAcknowledgementForm purpose={purpose} onPurposeChange={setPurpose} />
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-8 sm:px-6">
        <details className="rounded-[1rem] border border-[#D9A441]/25 bg-white p-4 shadow-[0_10px_28px_rgba(7,54,31,0.05)]">
          <summary className="cursor-pointer text-base font-bold text-[#07361F]">
            Choose donation purpose
          </summary>
          <p className="mt-3 text-sm leading-6 text-slate-700">
            Zakat and foreign donations are not accepted through this account at present.
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
          {donationConfig.religiousGiving.accepted.map((item) => {
            const selected = item === purpose;

            return (
              <button
                key={item}
                type="button"
                aria-pressed={selected}
                onClick={() => setPurpose(item)}
                className={`rounded-2xl border p-4 text-left transition hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#D9A441] focus:ring-offset-2 ${
                  selected
                    ? 'border-[#D9A441] bg-[#07361F] text-white'
                    : 'border-[#D9A441]/30 bg-white text-[#1F2933] hover:border-[#77A625]'
                }`}
              >
                <span className={`block text-base font-bold ${selected ? 'text-white' : 'text-[#07361F]'}`}>
                  {item}
                </span>
                {item === 'Interest / Riba Disposal' ? (
                  <span className={`mt-2 block text-sm leading-6 ${selected ? 'text-white/88' : 'text-[#1F2933]'}`}>
                    {donationConfig.religiousGiving.riba}
                  </span>
                ) : null}
              </button>
            );
          })}
          </div>
        </details>
      </section>
    </>
  );
}
