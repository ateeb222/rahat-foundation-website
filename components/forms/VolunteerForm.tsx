'use client';

import { FormEvent, useState } from 'react';

import { submitWebsiteForm, type SubmissionState } from '@/components/forms/submission';

const modes = ['On-ground', 'Remote', 'Hybrid'];

const inputClass =
  'min-h-[52px] w-full rounded-xl border border-slate-300 bg-white px-4 text-[17px] font-normal text-slate-900 transition focus:border-[#2A7A45] focus:outline-none focus:ring-2 focus:ring-[#2A7A45]';
const labelClass = 'grid gap-2 text-base font-semibold text-slate-800';

export function VolunteerForm() {
  const [status, setStatus] = useState<SubmissionState>('idle');
  const [error, setError] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus('submitting');
    setError('');

    try {
      await submitWebsiteForm('volunteer', {
        name: String(formData.get('name') || ''),
        mobile: String(formData.get('mobile') || ''),
        email: String(formData.get('email') || ''),
        availability: String(formData.get('availability') || ''),
        mode: String(formData.get('mode') || ''),
        skills: String(formData.get('skills') || ''),
      });

      form.reset();
      setStatus('success');
    } catch (submissionError) {
      setError(submissionError instanceof Error ? submissionError.message : 'Submission failed. Please try again.');
      setStatus('error');
    }
  }

  return (
    <form className="grid gap-4" aria-label="Volunteer interest form" onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className={labelClass}>
          Name
          <input className={inputClass} name="name" autoComplete="name" required />
        </label>
        <label className={labelClass}>
          Mobile
          <input className={inputClass} name="mobile" type="tel" autoComplete="tel" required />
        </label>
      </div>
      <label className={labelClass}>
        Email
        <input className={inputClass} name="email" type="email" autoComplete="email" required />
      </label>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className={labelClass}>
          Availability
          <input className={inputClass} name="availability" placeholder="Weekends, evenings, weekdays" />
        </label>
        <label className={labelClass}>
          Mode
          <select className={inputClass} name="mode" defaultValue="Hybrid">
            {modes.map((mode) => (
              <option key={mode}>{mode}</option>
            ))}
          </select>
        </label>
      </div>
      <label className={labelClass}>
        Skills
        <textarea
          className="min-h-28 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-[17px] font-normal text-slate-900 transition focus:border-[#2A7A45] focus:outline-none focus:ring-2 focus:ring-[#2A7A45]"
          name="skills"
          placeholder="Outreach, coordination, design, healthcare operations, content, data"
        />
      </label>

      {status === 'success' ? (
        <div className="rounded-2xl border border-[#2A7A45] bg-[#EDF7EF] p-4 text-base font-semibold leading-6 text-[#1A4D2E]" role="status">
          Thank you. Your volunteer application has been received.
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
        {status === 'submitting' ? 'Submitting...' : 'Submit volunteer interest'}
      </button>
    </form>
  );
}
