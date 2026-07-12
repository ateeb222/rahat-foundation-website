'use client';

import Link from 'next/link';
import Script from 'next/script';
import { FormEvent, useState } from 'react';
import { submitWebsiteForm } from '@/components/forms/submission';
import { sadaqahPlans } from '@/lib/sadaqah-plans';

declare global {
  interface Window {
    Razorpay?: new (options: Record<string, unknown>) => {
      open: () => void;
      on: (event: string, callback: (response: { error?: { description?: string } }) => void) => void;
    };
  }
}

const inputClass =
  'min-h-[50px] w-full rounded-xl border border-slate-300 bg-white px-4 text-base text-slate-900 focus:border-[#2A7A45] focus:outline-none focus:ring-2 focus:ring-[#2A7A45]';

export function MonthlySadaqahCheckout() {
  const [planId, setPlanId] = useState('plan_TCX7z3N8FrlsRy');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const selected = sadaqahPlans.find((plan) => plan.planId === planId) || sadaqahPlans[1];
  const primary = sadaqahPlans.filter((plan) => !('secondary' in plan));
  const additional = sadaqahPlans.filter((plan) => 'secondary' in plan && plan.secondary);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const Razorpay = window.Razorpay;
    if (!Razorpay) {
      setStatus('error');
      setMessage('Secure AutoPay checkout did not load. Please refresh.');
      return;
    }
    const form = event.currentTarget;
    const data = new FormData(form);
    const fullName = String(data.get('fullName') || '').trim();
    const mobile = String(data.get('mobile') || '').trim();
    const email = String(data.get('email') || '').trim();
    const idType = String(data.get('idType') || 'Not provided');
    const idNumber = String(data.get('idNumber') || '').trim().toUpperCase();
    const address = String(data.get('address') || '').trim();
    const startDay = String(data.get('startDay') || 'immediate');
    setStatus('loading');
    setMessage('Preparing your secure monthly mandate…');
    try {
      const response = await fetch('/api/razorpay/subscription', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ planId, startDay }),
      });
      const subscription = await response.json();
      if (!response.ok) throw new Error(subscription.error || 'Unable to start AutoPay.');
      const checkout = new Razorpay({
        key: subscription.keyId,
        subscription_id: subscription.subscriptionId,
        name: 'Rahat Social Impact Foundation',
        description: `Monthly Sadaqah — ₹${selected.amount.toLocaleString('en-IN')}`,
        prefill: { name: fullName, contact: mobile, email },
        theme: { color: '#1A4D2E' },
        handler: async (result: Record<string, string>) => {
          try {
            const verificationResponse = await fetch('/api/razorpay/subscription/verify', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(result),
            });
            const verified = await verificationResponse.json();
            if (!verificationResponse.ok || !verified.success) {
              throw new Error(verified.error || 'Mandate verification failed.');
            }
            await submitWebsiteForm('donation', {
              fullName,
              mobile,
              email,
              amount: '0',
              method: 'Razorpay AutoPay Mandate',
              transactionId: verified.paymentId,
              purpose: 'Monthly Sadaqah',
              recognition: 'Not specified',
              recognitionName: '',
              volunteerInterest: false,
              domesticDeclaration: true,
              ribaDeclaration: false,
              message: `Mandate created; Monthly amount: ₹${selected.amount}; Plan ID: ${planId}; Subscription ID: ${verified.subscriptionId}; Preferred date: ${startDay}; ID type: ${idType}; ID number: ${idNumber || 'Pending phone follow-up'}; Address: ${address || 'Pending phone follow-up'}. Authorisation payment is not recorded as a donation.`,
            });
            setStatus('success');
            setMessage(`Monthly Sadaqah mandate verified. Subscription ID: ${verified.subscriptionId}`);
          } catch (error) {
            setStatus('error');
            setMessage(error instanceof Error ? error.message : 'Verification failed. Contact Rahat with your Subscription ID.');
          }
        },
      });
      checkout.on('payment.failed', (result) => {
        setStatus('error');
        setMessage(result.error?.description || 'Mandate authorisation failed.');
      });
      checkout.open();
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'Unable to start AutoPay.');
    }
  }

  return (
    <section id="start" className="scroll-mt-4">
      <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="afterInteractive" />
      <form className="grid gap-5" onSubmit={submit}>
        <fieldset>
          <legend className="text-lg font-bold text-[#07361F]">Choose your monthly Sadaqah</legend>
          <div className="mt-3 grid grid-cols-1 gap-3 min-[440px]:grid-cols-2">
            {primary.map((plan) => {
              const recommended = 'recommended' in plan && plan.recommended;
              const active = planId === plan.planId;
              return (
                <button
                  key={plan.planId}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setPlanId(plan.planId)}
                  className={`min-h-[118px] overflow-hidden rounded-2xl border p-4 text-left transition focus:outline-none focus:ring-2 focus:ring-[#C8951A] ${
                    active
                      ? 'border-[#C8951A] bg-[#07361F] text-white shadow-lg'
                      : 'border-[#D9A441]/30 bg-white text-[#07361F]'
                  }`}
                >
                  {recommended && (
                    <span className={`mb-2 inline-flex rounded-full px-2 py-1 text-[10px] font-bold uppercase tracking-wide ${active ? 'bg-[#D9A441] text-[#07361F]' : 'bg-[#FFF3C4] text-[#6A5518]'}`}>
                      Recommended
                    </span>
                  )}
                  <span className="block text-xl font-bold leading-tight sm:text-2xl">
                    ₹{plan.amount.toLocaleString('en-IN')}
                    <span className="ml-1 text-sm font-semibold">/month</span>
                  </span>
                  <span className="mt-2 block text-xs font-semibold opacity-80">{plan.daily}</span>
                  <span className="mt-1 block text-sm font-bold leading-5">{plan.name}</span>
                </button>
              );
            })}
          </div>

          <details className="mt-3 rounded-2xl border border-[#D9A441]/30 bg-white p-4">
            <summary className="cursor-pointer font-bold text-[#07361F]">Looking to contribute more?</summary>
            <div className="mt-3 grid gap-2 sm:grid-cols-3">
              {additional.map((plan) => (
                <button
                  key={plan.planId}
                  type="button"
                  aria-pressed={planId === plan.planId}
                  onClick={() => setPlanId(plan.planId)}
                  className={`rounded-xl border p-3 text-left ${
                    planId === plan.planId
                      ? 'border-[#C8951A] bg-[#07361F] text-white'
                      : 'border-slate-200 bg-[#F8F5EF] text-[#07361F]'
                  }`}
                >
                  <span className="block text-lg font-bold">₹{plan.amount.toLocaleString('en-IN')}/month</span>
                  <span className="text-xs font-semibold leading-5">{plan.daily} · {plan.name}</span>
                </button>
              ))}
            </div>
          </details>
        </fieldset>

        <div className="grid gap-3 sm:grid-cols-2">
          <label className="grid gap-2 text-sm font-bold">
            Full name
            <input className={inputClass} name="fullName" autoComplete="name" required />
          </label>
          <label className="grid gap-2 text-sm font-bold">
            Mobile number
            <input className={inputClass} name="mobile" type="tel" inputMode="tel" autoComplete="tel" required />
          </label>
        </div>
        <label className="grid gap-2 text-sm font-bold">
          Email
          <input className={inputClass} name="email" type="email" inputMode="email" autoComplete="email" required />
        </label>
        <label className="grid gap-2 text-sm font-bold">
          Preferred monthly debit date
          <select className={inputClass} name="startDay">
            <option value="immediate">Start immediately (recommended)</option>
            <option value="1">1st of every month</option>
            <option value="5">5th of every month</option>
            <option value="10">10th of every month</option>
            <option value="15">15th of every month</option>
          </select>
        </label>

        <div className="rounded-2xl border border-slate-200 bg-white p-4">
          <p className="text-sm font-bold text-[#07361F]">Identification for donor records (optional)</p>
          <p className="mt-2 text-xs leading-5 text-slate-600">Voter ID, passport, or PAN can be used for records where applicable. You may proceed without an ID; Rahat may contact you later if documentation is required.</p>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-bold">
              ID type
              <select className={inputClass} name="idType" defaultValue="Not provided">
                <option value="Not provided">Provide later if needed</option>
                <option>Voter ID</option>
                <option>Indian Passport</option>
                <option>PAN</option>
              </select>
            </label>
            <label className="grid gap-2 text-sm font-bold">
              ID number
              <input className={inputClass} name="idNumber" />
            </label>
          </div>
          <label className="mt-3 grid gap-2 text-sm font-bold">
            Residential address (optional)
            <input className={inputClass} name="address" autoComplete="street-address" />
          </label>
        </div>

        <label className="flex items-start gap-3 rounded-2xl border border-[#D9A441]/40 bg-[#FFF8E6] p-4 text-sm font-semibold leading-6 text-[#5F4A12]">
          <input className="mt-1 h-5 w-5 shrink-0" type="checkbox" required />
          <span>
            I am an Indian citizen contributing from my own funds through an eligible Indian domestic payment source. I authorise ₹{selected.amount.toLocaleString('en-IN')} monthly through Razorpay AutoPay until cancellation or completion. I agree to the{' '}
            <Link className="font-bold underline underline-offset-4" href="/terms-and-conditions">Terms and Conditions</Link>,{' '}
            <Link className="font-bold underline underline-offset-4" href="/privacy-policy">Privacy Policy</Link>, and{' '}
            <Link className="font-bold underline underline-offset-4" href="/cancellation-and-refund">Cancellation and Refund Policy</Link>.
          </span>
        </label>

        <button
          className="min-h-[56px] rounded-full bg-[#07361F] px-5 py-4 text-base font-bold leading-6 text-white shadow-lg transition hover:bg-[#1A4D2E] disabled:opacity-60 sm:px-6 sm:text-lg"
          disabled={status === 'loading'}
        >
          {status === 'loading' ? 'Opening secure AutoPay…' : `Start ₹${selected.amount.toLocaleString('en-IN')} Monthly Sadaqah`}
        </button>
        <p className="text-center text-xs leading-5 text-slate-600">Secure Razorpay AutoPay · Cancel anytime · Not Zakat · Domestic Indian donations only</p>
        {message && (
          <p role="status" className={`rounded-xl p-3 text-sm font-bold ${status === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-700'}`}>
            {message}
          </p>
        )}
      </form>
    </section>
  );
}
