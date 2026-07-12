'use client';

import { donationAmounts } from '@/lib/donation-config';

const numericAmounts = [500, 1000, 5800, 15000] as const;

export function DonationAmountSelector() {
  function selectAmount(amount?: number) {
    window.dispatchEvent(new CustomEvent('rahat:donation-amount', { detail: { amount } }));
    document.getElementById('razorpay-checkout')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <div className="mt-5 grid gap-3 sm:grid-cols-2">
      {donationAmounts.map((item, index) => (
        <button
          key={item.amount}
          type="button"
          onClick={() => selectAmount(numericAmounts[index])}
          className={`rounded-2xl border px-4 py-3 text-left transition hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#C8951A] focus:ring-offset-2 ${
            item.featured
              ? 'border-[#D9A441] bg-[#07361F] text-white'
              : 'border-[#D9A441]/25 bg-white text-[#1F2937]'
          }`}
        >
          <span className={`block text-xl font-bold ${item.featured ? 'text-white' : 'text-[#07361F]'}`}>{item.amount}</span>
          <span className="mt-1 block text-sm font-semibold leading-5">{item.label}</span>
        </button>
      ))}
    </div>
  );
}
