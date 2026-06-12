'use client';

import { FormEvent, useState } from 'react';

import { submitWebsiteForm, type SubmissionState } from '@/components/forms/submission';

const donationMethods = ['UPI', 'Bank Transfer', 'Razorpay', 'Other'];
const ribaPurpose = 'Bank interest / impermissible income disposal';
const donationPurposes = ['Wheelchair Sadaqah', 'General Sadaqah', ribaPurpose, 'Stretcher Support'];
const recognitionPreferences = ['Anonymous', 'Display my name', 'In memory / honor of loved one'];

const inputClass =
  'min-h-[52px] w-full rounded-xl border border-slate-300 bg-white px-4 text-[17px] font-normal text-slate-900 transition focus:border-[#2A7A45] focus:outline-none focus:ring-2 focus:ring-[#2A7A45]';
const labelClass = 'grid gap-2 text-base font-semibold text-slate-800';

type DonationAcknowledgementFormProps = {
  purpose?: string;
  onPurposeChange?: (purpose: string) => void;
};

export function DonationAcknowledgementForm({
  purpose = donationPurposes[0],
  onPurposeChange,
}: DonationAcknowledgementFormProps) {
  const [status, setStatus] = useState<SubmissionState>('idle');
  const [error, setError] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus('submitting');
    setError('');

    try {
      await submitWebsiteForm('donation', {
        fullName: String(formData.get('fullName') || ''),
        mobile: String(formData.get('mobile') || ''),
        email: String(formData.get('email') || ''),
        amount: String(formData.get('amount') || ''),
        method: String(formData.get('method') || ''),
        transactionId: String(formData.get('transactionId') || ''),
        purpose,
        recognition: String(formData.get('recognition') || ''),
        recognitionName: String(formData.get('recognitionName') || ''),
        volunteerInterest: formData.get('volunteerInterest') === 'on',
        domesticDeclaration: formData.get('domesticDeclaration') === 'on',
        ribaDeclaration: formData.get('ribaDeclaration') === 'on',
        message: String(formData.get('message') || ''),
      });

      form.reset();
      onPurposeChange?.(donationPurposes[0]);
      setStatus('success');
    } catch (submissionError) {
      setError(submissionError instanceof Error ? submissionError.message : 'Submission failed. Please try again.');
      setStatus('error');
    }
  }

  return (
    <form className="grid gap-5" aria-label="Donation acknowledgement form" onSubmit={handleSubmit}>
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
          <select
            className={inputClass}
            name="purpose"
            value={purpose}
            onChange={(event) => onPurposeChange?.(event.target.value)}
          >
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
          className="min-h-32 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-[17px] font-normal text-slate-900 transition focus:border-[#2A7A45] focus:outline-none focus:ring-2 focus:ring-[#2A7A45]"
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

      {status === 'success' ? (
        <div className="rounded-2xl border border-[#2A7A45] bg-[#EDF7EF] p-4 text-base font-semibold leading-6 text-[#1A4D2E]" role="status">
          Thank you. Your acknowledgement details have been received.
        </div>
      ) : null}

      {status === 'error' ? (
        <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-base font-semibold leading-6 text-red-700" role="alert">
          {error}
        </div>
      ) : null}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="min-h-[56px] rounded-full bg-[#1A4D2E] px-5 py-3 text-lg font-bold text-white shadow-[0_12px_28px_rgba(26,77,46,0.22)] transition hover:-translate-y-0.5 hover:bg-[#07361F] focus:outline-none focus:ring-2 focus:ring-[#C8951A] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === 'submitting' ? 'Submitting...' : 'Submit acknowledgement'}
      </button>
    </form>
  );
}
