'use client';

import { useState } from 'react';

import { donationAmounts } from '@/lib/donation-config';

export function DonationAmountSelector({ initialAmount = 1000 }: { initialAmount?: number }) {
  const [selectedAmount, setSelectedAmount] = useState<number | undefined>(initialAmount);

  function selectAmount(amount?: number, purpose?: string) {
    setSelectedAmount(amount);
    window.dispatchEvent(new CustomEvent('rahat:donation-amount', { detail: { amount, purpose } }));
    document.getElementById('razorpay-checkout')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <fieldset>
      <legend className="text-lg font-bold text-[#07361F]">Choose a one-time amount</legend>
      <div className="mt-3 grid grid-cols-2 gap-2 sm:gap-3">
        {donationAmounts.map((item) => {
          const amount = item.amount;
          const selected = selectedAmount === amount;
          const isCustom = amount === undefined;
          const isWheelchair = amount === 5800;

          return (
            <button
              key={item.displayAmount}
              type="button"
              aria-pressed={selected}
              onClick={() => selectAmount(amount, 'purpose' in item ? item.purpose : undefined)}
              className={`${isCustom ? 'col-span-2' : ''} relative min-h-[84px] rounded-lg border px-3 py-3 text-center transition focus:outline-none focus:ring-2 focus:ring-[#C8951A] focus:ring-offset-2 sm:min-h-[92px] sm:px-4 ${
                selected
                  ? 'border-[#C8951A] bg-[#07361F] text-white shadow-md'
                  : isWheelchair
                    ? 'border-[#C8951A] bg-[#FFF8E6] text-[#07361F] hover:border-[#8A6817]'
                    : 'border-[#D9A441]/30 bg-white text-[#07361F] hover:border-[#C8951A]'
              }`}
            >
              {'badge' in item ? (
                <span className={`absolute right-2 top-2 rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide ${selected ? 'bg-white/15 text-[#E7C76D]' : 'bg-[#07361F] text-white'}`}>
                  {item.badge}
                </span>
              ) : null}
              <span className="block text-xl font-bold sm:text-2xl">{item.displayAmount}</span>
              <span className={`mt-1 block text-xs font-semibold leading-5 sm:text-sm ${selected ? 'text-white/80' : 'text-slate-600'}`}>
                {item.label}
              </span>
              {'description' in item ? (
                <span className={`mt-1 block text-[11px] font-medium leading-4 ${selected ? 'text-white/75' : 'text-slate-500'}`}>
                  {item.description}
                </span>
              ) : null}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}
