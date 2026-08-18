'use client';

import { useState } from 'react';

import { DonationAmountSelector } from '@/components/donation/DonationAmountSelector';
import { MonthlySadaqahCheckout } from '@/components/donation/MonthlySadaqahCheckout';
import { RazorpayCheckout } from '@/components/donation/RazorpayCheckout';

type DonationPathway = 'monthly' | 'one-time';

const pathways = [
  {
    id: 'monthly' as const,
    label: 'Monthly Support',
    description: 'Razorpay AutoPay',
    recommended: true,
  },
  {
    id: 'one-time' as const,
    label: 'One-Time Donation',
    description: 'Secure Razorpay checkout',
    recommended: false,
  },
];

export function DonationPathwaySelector() {
  const [pathway, setPathway] = useState<DonationPathway>('monthly');

  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-6 sm:px-6 sm:py-10" aria-labelledby="support-pathway-heading">
      <div className="text-center">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#3B635D]">Choose your giving method</p>
        <h2 id="support-pathway-heading" className="mt-2 text-2xl font-bold leading-tight text-[#07361F] sm:text-4xl">
          How would you like to support?
        </h2>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-2 sm:gap-4" role="tablist" aria-label="Donation frequency">
        {pathways.map((option) => {
          const selected = pathway === option.id;

          return (
            <button
              key={option.id}
              type="button"
              role="tab"
              id={`${option.id}-donation-tab`}
              aria-selected={selected}
              aria-controls="donation-pathway-panel"
              onClick={() => setPathway(option.id)}
              className={`flex min-h-[96px] flex-col items-center justify-center border px-2 py-3 text-center transition focus:outline-none focus:ring-2 focus:ring-[#C8951A] focus:ring-offset-2 sm:min-h-[112px] sm:rounded-lg sm:px-5 ${
                selected
                  ? 'border-[#C8951A] bg-[#07361F] text-white shadow-md'
                  : 'border-[#D9A441]/40 bg-white text-[#07361F] hover:border-[#C8951A]'
              }`}
            >
              <span className={`mb-1 min-h-4 text-[9px] font-bold uppercase tracking-wide sm:text-[10px] ${option.recommended ? (selected ? 'text-[#E7C76D]' : 'text-[#8A6817]') : 'invisible'}`}>
                Recommended
              </span>
              <span className="text-sm font-bold leading-5 min-[390px]:text-base sm:text-xl">{option.label}</span>
              <span className={`mt-1 text-[11px] leading-4 sm:text-sm ${selected ? 'text-white/75' : 'text-slate-600'}`}>
                {option.description}
              </span>
            </button>
          );
        })}
      </div>

      <div
        id="donation-pathway-panel"
        role="tabpanel"
        aria-labelledby={`${pathway}-donation-tab`}
        className="mt-4 border border-[#D9A441]/35 bg-white p-4 shadow-[0_14px_38px_rgba(7,54,31,0.08)] sm:mt-6 sm:rounded-lg sm:p-7"
      >
        {pathway === 'monthly' ? (
          <MonthlySadaqahCheckout />
        ) : (
          <div>
            <DonationAmountSelector />
            <div className="mt-6 border-t border-slate-200 pt-6">
              <RazorpayCheckout />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
