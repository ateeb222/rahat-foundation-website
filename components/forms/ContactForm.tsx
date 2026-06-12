'use client';

import { FormEvent, useState } from 'react';

import { submitWebsiteForm, type SubmissionState } from '@/components/forms/submission';

const reasons = ['Donation enquiry', 'Volunteer enquiry', 'Healthcare support', 'Partnership / CSR', 'Other'];

const inputClass =
  'min-h-[52px] w-full rounded-xl border border-slate-300 bg-white px-4 text-[17px] font-normal text-slate-900 transition focus:border-[#2A7A45] focus:outline-none focus:ring-2 focus:ring-[#2A7A45]';
const labelClass = 'grid gap-2 text-base font-semibold text-slate-800';

export function ContactForm() {
  const [status, setStatus] = useState<SubmissionState>('idle');
  const [error, setError] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus('submitting');
    setError('');

    try {
      await submitWebsiteForm('contact', {
        name: String(formData.get('name') || ''),
        email: String(formData.get('email') || ''),
        mobile: String(formData.get('mobile') || ''),
        reason: String(formData.get('reason') || ''),
        message: String(formData.get('message') || ''),
      });

      form.reset();
      setStatus('success');
    } catch (submissionError) {
      setError(submissionError instanceof Error ? submissionError.message : 'Submission failed. Please try again.');
      setStatus('error');
    }
  }

  return (
    <form
      className="grid gap-4 rounded-[1.25rem] border border-slate-200 bg-white p-5 shadow-[0_14px_36px_rgba(7,54,31,0.08)] sm:p-8"
      aria-label="Contact form"
      onSubmit={handleSubmit}
    >
      <label className={labelClass}>
        Name
        <input className={inputClass} name="name" autoComplete="name" required />
      </label>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className={labelClass}>
          Email
          <input className={inputClass} name="email" type="email" autoComplete="email" required />
        </label>
        <label className={labelClass}>
          Mobile
          <input className={inputClass} name="mobile" type="tel" autoComplete="tel" />
        </label>
      </div>
      <label className={labelClass}>
        Reason
        <select className={inputClass} name="reason" defaultValue="Donation enquiry">
          {reasons.map((reason) => (
            <option key={reason}>{reason}</option>
          ))}
        </select>
      </label>
      <label className={labelClass}>
        Message
        <textarea
          className="min-h-32 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-[17px] font-normal text-slate-900 transition focus:border-[#2A7A45] focus:outline-none focus:ring-2 focus:ring-[#2A7A45]"
          name="message"
          required
        />
      </label>

      {status === 'success' ? (
        <div className="rounded-2xl border border-[#2A7A45] bg-[#EDF7EF] p-4 text-base font-semibold leading-6 text-[#1A4D2E]" role="status">
          Thank you. Your message has been received.
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
        {status === 'submitting' ? 'Submitting...' : 'Send message'}
      </button>
    </form>
  );
}
