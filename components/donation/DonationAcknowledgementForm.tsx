'use client';

import { useState } from 'react';

const donationMethods = ['UPI', 'Bank Transfer', 'Razorpay', 'Other'];
const ribaPurpose = 'Bank interest / impermissible income disposal';
const donationPurposes = ['Wheelchair Sadaqah', 'General Sadaqah', ribaPurpose, 'Stretcher Support'];
const recognitionPreferences = ['Anonymous', 'Display my name', 'In memory / honor of loved one'];

const inputClass =
  'min-h-[52px] rounded-xl border border-slate-300 bg-white px-4 text-[17px] font-normal text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#2A7A45]';
const labelClass = 'grid gap-2 text-base font-semibold text-slate-800';

export function DonationAcknowledgementForm() {
  const [purpose, setPurpose] = useState(donationPurposes[0]);

  return (
    <form className="grid gap-5" aria-label="Donation acknowledgement form">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className={labelClass}>
          Full Name
          <input className={inputClass} name="fullName" autoComplete="name" required />
        </label>
        <label className={labelClass}>
          Mobile Number
          <input className={inputClass} name="mobile" type="tel" autoComplete="tel" required />
        </label>
      </div>

      <label className={labelClass}>
        Email
        <input className={inputClass} name="email" type="email" autoComplete="email" />
      </label>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className={labelClass}>
          Donation Amount
          <input className={inputClass} name="amount" inputMode="numeric" required />
        </label>
        <label className={labelClass}>
          Donation Method
          <select className={inputClass} name="method" defaultValue="UPI">
            {donationMethods.map((method) => (
              <option key={method}>{method}</option>
            ))}
          </select>
        </label>
      </div>

      <label className={labelClass}>
        Transaction ID / UTR
        <input className={inputClass} name="transactionId" required />
      </label>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className={labelClass}>
          Donation Purpose
          <select className={inputClass} name="purpose" value={purpose} onChange={(event) => setPurpose(event.target.value)}>
            {donationPurposes.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
        <label className={labelClass}>
          Recognition Preference
          <select className={inputClass} name="recognition" defaultValue="Anonymous">
            {recognitionPreferences.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
      </div>

      <label className={labelClass}>
        Recognition name / loved one name
        <input className={inputClass} name="recognitionName" />
      </label>

      <label className={labelClass}>
        Optional message
        <textarea
          className="min-h-32 rounded-xl border border-slate-300 bg-white px-4 py-3 text-[17px] font-normal text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#2A7A45]"
          name="message"
        />
      </label>

      <label className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-[#F8F5EF] p-4 text-base leading-6 text-slate-700">
        <input className="mt-1 h-5 w-5 flex-shrink-0" type="checkbox" name="volunteerInterest" />
        <span>I am also interested in volunteering with Rahat.</span>
      </label>

      <label className="flex items-start gap-3 rounded-2xl border border-[#C8951A] bg-[#FFF8E6] p-4 text-base leading-6 text-slate-800">
        <input className="mt-1 h-5 w-5 flex-shrink-0" type="checkbox" name="domesticDeclaration" required />
        <span>
          I confirm that this payment is from an Indian domestic bank account or eligible Indian domestic payment source
          and is not foreign contribution under FCRA.
        </span>
      </label>

      {purpose === ribaPurpose ? (
        <label className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-base leading-6 text-slate-700">
          <input className="mt-1 h-5 w-5 flex-shrink-0" type="checkbox" name="ribaDeclaration" required />
          <span>I understand this is not Zakat and may be used for public healthcare benefit.</span>
        </label>
      ) : null}

      <div className="rounded-2xl border border-slate-200 bg-[#F8F5EF] p-4 text-base leading-6 text-slate-700">
        Donor acknowledgement submission will be connected soon. Please keep your transaction ID / UTR after payment.
      </div>

      <button
        type="button"
        className="min-h-[52px] rounded-full bg-[#1A4D2E] px-5 py-3 text-lg font-semibold text-white opacity-75"
        aria-disabled="true"
      >
        Submission backend pending
      </button>
    </form>
  );
}
