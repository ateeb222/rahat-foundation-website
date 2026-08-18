'use client';

import { useState } from 'react';

import { donationAmounts } from '@/lib/donation-config';

const numericAmounts = [500, 1000, 2500, undefined] as const;

export function DonationAmountSelector() {
  const [selectedAmount, setSelectedAmount] = useState<number | undefined>(1000);

  function selectAmount(amount?: number) {
    setSelectedAmount(amount);
    window.dispatchEvent(new CustomEvent('rahat:donation-amount', { detail: { amount } }));
    document.getElementById('razorpay-checkout')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <fieldset>
      <legend className="text-lg font-bold text-[#07361F]">Choose a one-time amount</legend>
      <div className="mt-3 grid grid-cols-2 gap-2 sm:gap-3">
        {donationAmounts.map((item, index) => {
          const amount = numericAmounts[index];
          const selected = selectedAmount === amount;

          return (
            <button
              key={item.amount}
              type="button"
              aria-pressed={selected}
              onClick={() => selectAmount(amount)}
              className={`min-h-[84px] rounded-lg border px-3 py-3 text-center transition focus:outline-none focus:ring-2 focus:ring-[#C8951A] focus:ring-offset-2 sm:min-h-[92px] sm:px-4 ${
                selected
                  ? 'border-[#C8951A] bg-[#07361F] text-white shadow-md'
                  : 'border-[#D9A441]/30 bg-white text-[#07361F] hover:border-[#C8951A]'
              }`}
            >
              <span className="block text-xl font-bold sm:text-2xl">{item.amount}</span>
              <span className={`mt-1 block text-xs font-semibold leading-5 sm:text-sm ${selected ? 'text-white/80' : 'text-slate-600'}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}
