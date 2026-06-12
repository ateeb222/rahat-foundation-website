'use client';

import { useState } from 'react';

import { DonationAcknowledgementForm } from '@/components/donation/DonationAcknowledgementForm';
import { donationConfig } from '@/lib/donation-config';

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

export function DonationPurposeAndForm() {
  const [purpose, setPurpose] = useState<string>(donationConfig.religiousGiving.accepted[0]);

  return (
    <>
      <section className="mx-auto w-full max-w-7xl px-4 py-9 sm:px-6">
        <SectionIntro
          eyebrow="Donation purpose"
          title="I want to give for:"
          description="Choose the correct giving type. Zakat and foreign donations are not accepted through this account at present."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {donationConfig.religiousGiving.accepted.map((item) => {
            const selected = item === purpose;

            return (
              <button
                key={item}
                type="button"
                aria-pressed={selected}
                onClick={() => setPurpose(item)}
                className={`rounded-[1.25rem] border p-5 text-left shadow-[0_12px_28px_rgba(7,54,31,0.07)] transition hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#D9A441] focus:ring-offset-2 ${
                  selected
                    ? 'border-[#D9A441] bg-[#07361F] text-white'
                    : 'border-[#D9A441]/30 bg-white text-[#1F2933] hover:border-[#77A625]'
                }`}
              >
                <span className={`block text-2xl font-bold ${selected ? 'text-white' : 'text-[#07361F]'}`}>
                  {item}
                </span>
                {item === 'Interest / Riba Disposal' ? (
                  <span className={`mt-3 block text-lg leading-8 ${selected ? 'text-white/88' : 'text-[#1F2933]'}`}>
                    {donationConfig.religiousGiving.riba}
                  </span>
                ) : null}
              </button>
            );
          })}
        </div>

        <div className="mt-5 rounded-[1.25rem] border border-[#D9A441] bg-[#FFF7DF] p-5 shadow-[0_12px_28px_rgba(7,54,31,0.07)] sm:p-6">
          <h3 className="text-2xl font-bold text-[#07361F]">Giving Guidance</h3>
          <ul className="mt-4 grid gap-3 text-lg leading-8 text-[#1F2933]">
            <li>Sadaqah and voluntary support are accepted.</li>
            <li>{donationConfig.religiousGiving.riba}</li>
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
              description="Submit your payment details so Rahat can reconcile and acknowledge the donation through official records."
            />
          </div>
          <div className={surfaceCard}>
            <DonationAcknowledgementForm purpose={purpose} onPurposeChange={setPurpose} />
          </div>
        </div>
      </section>
    </>
  );
}
