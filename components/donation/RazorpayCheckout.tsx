'use client';

import Link from 'next/link';
import Script from 'next/script';
import { FormEvent, useEffect, useRef, useState } from 'react';
import { submitWebsiteForm } from '@/components/forms/submission';

declare global {
  interface Window {
    Razorpay?: new (options: Record<string, unknown>) => { open: () => void; on: (event: string, callback: (response: { error?: { description?: string } }) => void) => void };
  }
}

const purposes = ['Wheelchair Sadaqah', 'General Sadaqah', 'Interest / Riba Disposal', 'Stretcher Support', 'Hospital Digitisation', 'Computer Support'];
const inputClass = 'min-h-[50px] w-full rounded-xl border border-slate-300 bg-white px-4 text-base text-slate-900 focus:border-[#2A7A45] focus:outline-none focus:ring-2 focus:ring-[#2A7A45]';
const labelClass = 'grid gap-2 text-sm font-bold text-slate-800';

export function RazorpayCheckout() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [amount, setAmount] = useState(5800);
  const amountInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function handleAmount(event: Event) {
      const selected = (event as CustomEvent<{ amount?: number }>).detail.amount;
      if (typeof selected === 'number') setAmount(selected);
      else requestAnimationFrame(() => amountInput.current?.focus());
    }
    window.addEventListener('rahat:donation-amount', handleAmount);
    return () => window.removeEventListener('rahat:donation-amount', handleAmount);
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const Razorpay = window.Razorpay;
    if (!Razorpay) {
      setStatus('error'); setMessage('Secure checkout did not load. Please refresh and try again.'); return;
    }

    const form = event.currentTarget;
    const data = new FormData(form);
    const amount = Number(data.get('amount'));
    const purpose = String(data.get('purpose') || '');
    const fullName = String(data.get('fullName') || '').trim();
    const mobile = String(data.get('mobile') || '').trim();
    const email = String(data.get('email') || '').trim();
    const idType = String(data.get('idType') || 'Not provided');
    const idNumber = String(data.get('idNumber') || '').trim().toUpperCase();
    const address = String(data.get('address') || '').trim();

    setStatus('loading'); setMessage('Creating secure payment order…');
    try {
      const orderResponse = await fetch('/api/razorpay/order', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ amount, purpose }) });
      const order = await orderResponse.json();
      if (!orderResponse.ok) throw new Error(order.error || 'Unable to start checkout.');

      const checkout = new Razorpay({
        key: order.keyId, amount: order.amount, currency: 'INR', order_id: order.orderId,
        name: 'Rahat Social Impact Foundation', description: purpose,
        prefill: { name: fullName, contact: mobile, email },
        theme: { color: '#1A4D2E' },
        notes: { purpose },
        handler: async (response: Record<string, string>) => {
          try {
            const verifyResponse = await fetch('/api/razorpay/verify', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(response) });
            const verified = await verifyResponse.json();
            if (!verifyResponse.ok || !verified.success) throw new Error(verified.error || 'Payment verification failed.');
            await submitWebsiteForm('donation', {
              fullName, mobile, email, amount: String(amount), method: 'Razorpay',
              transactionId: verified.paymentId, purpose, recognition: 'Not specified', recognitionName: '', volunteerInterest: false,
              domesticDeclaration: true, ribaDeclaration: purpose === 'Interest / Riba Disposal',
              message: `Razorpay Order: ${verified.orderId}; ID type: ${idType}; ID number: ${idNumber || 'Pending phone follow-up'}; Address: ${address}`,
            });
            setStatus('success'); setMessage(`Payment verified successfully. Payment ID: ${verified.paymentId}`); form.reset();
          } catch (error) { setStatus('error'); setMessage(error instanceof Error ? error.message : 'Payment verification failed. Contact Rahat with your payment ID.'); }
        },
        modal: { ondismiss: () => { setStatus('idle'); setMessage('Payment window closed. No confirmation was recorded.'); } },
      });
      checkout.on('payment.failed', (response) => { setStatus('error'); setMessage(response.error?.description || 'Payment failed. Please try again.'); });
      checkout.open();
    } catch (error) { setStatus('error'); setMessage(error instanceof Error ? error.message : 'Unable to start checkout.'); }
  }

  return (
    <article id="razorpay-checkout" className="scroll-mt-6 bg-white">
      <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="afterInteractive" />
      <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#3B635D]">Secure online donation</p>
      <h3 className="mt-2 text-2xl font-bold text-[#07361F]">Pay securely with Razorpay</h3>
      <p className="mt-2 text-sm leading-6 text-slate-700">One-time domestic donations in INR. UPI, cards and other available Indian payment methods appear in Razorpay Checkout.</p>
      <div className="mt-4 hidden rounded-xl border border-[#2A7A45]/25 bg-[#F1F7EE] p-4 text-sm leading-6 text-slate-700 sm:block">
        <p className="font-bold text-[#07361F]">Verified provisional Income Tax status</p>
        <p className="mt-1">Rahat holds provisional registration under section 332(8) and provisional approval under section 354(4), valid from TY 2026–27 to TY 2028–29.</p>
        <Link href="/transparency" className="mt-2 inline-flex font-bold text-[#07361F] underline decoration-[#C8951A] underline-offset-4">View verified registration details</Link>
      </div>
      <details className="group mt-4 rounded-xl border border-[#2A7A45]/25 bg-[#F1F7EE] p-3 text-sm sm:hidden">
        <summary className="flex cursor-pointer items-center justify-between gap-3 font-bold text-[#07361F]"><span>Verified provisional tax status</span><span aria-hidden="true" className="text-lg group-open:rotate-45">+</span></summary>
        <p className="mt-3 leading-6 text-slate-700">Provisional registration under section 332(8) and provisional approval under section 354(4), valid from TY 2026–27 to TY 2028–29.</p>
        <Link href="/transparency" className="mt-2 inline-flex font-bold text-[#07361F] underline decoration-[#C8951A] underline-offset-4">View verified details</Link>
      </details>
      <form className="mt-5 grid gap-4" onSubmit={handleSubmit}>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className={labelClass}>Full legal name<input className={inputClass} name="fullName" autoComplete="name" required /></label>
          <label className={labelClass}>Mobile number<input className={inputClass} name="mobile" type="tel" autoComplete="tel" pattern="[0-9+ -]{10,15}" required /></label>
        </div>
        <label className={labelClass}>Email<input className={inputClass} name="email" type="email" autoComplete="email" required /></label>
        <details className="group rounded-xl border border-slate-200 bg-slate-50 p-3">
          <summary className="flex min-h-[40px] cursor-pointer items-center justify-between gap-3 text-sm font-bold text-[#07361F]"><span>Add ID for donor records (optional)</span><span aria-hidden="true" className="text-lg group-open:rotate-45">+</span></summary>
          <div className="mt-3 grid gap-4 border-t border-slate-200 pt-4 sm:grid-cols-2">
            <label className={labelClass}>ID type<select className={inputClass} name="idType" defaultValue="Not provided"><option value="Not provided">Provide later if needed</option><option>Voter ID</option><option>Indian Passport</option><option>PAN</option></select></label>
            <label className={labelClass}>ID number<input className={inputClass} name="idNumber" placeholder="Voter ID, passport, or PAN" /></label>
          </div>
          <p className="mt-3 text-xs leading-5 text-slate-600">You may skip this now. Rahat can contact you later if documentation is required.</p>
        </details>
        <label className={labelClass}>Residential address<input className={inputClass} name="address" autoComplete="street-address" required /></label>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className={labelClass}>Amount (₹)<input ref={amountInput} className={inputClass} name="amount" type="number" inputMode="numeric" min="10" max="500000" value={amount} onChange={(event) => setAmount(Number(event.target.value))} required /></label>
          <label className={labelClass}>Purpose<select className={inputClass} name="purpose" defaultValue="Wheelchair Sadaqah">{purposes.map((purpose) => <option key={purpose}>{purpose}</option>)}</select></label>
        </div>
        <label className="flex items-start gap-3 rounded-xl border border-[#D9A441]/35 bg-[#FFF8E6] p-3 text-sm font-semibold leading-6 text-[#5F4A12]">
          <input className="mt-1 h-5 w-5" name="domestic" type="checkbox" required />
          <span>I am an Indian citizen donating from my own funds through an eligible Indian domestic payment source. I am not donating on behalf of a foreign source.</span>
        </label>
        <button className="min-h-[52px] rounded-full bg-[#07361F] px-6 py-3 text-base font-bold text-white transition hover:bg-[#1A4D2E] disabled:opacity-60" disabled={status === 'loading'} type="submit">
          {status === 'loading' ? 'Opening secure checkout…' : 'Donate securely with Razorpay'}
        </button>
      </form>
      {message && <p className={`mt-4 rounded-xl p-3 text-sm font-bold leading-6 ${status === 'success' ? 'bg-green-50 text-green-800' : status === 'error' ? 'bg-red-50 text-red-700' : 'bg-slate-50 text-slate-700'}`} role="status">{message}</p>}
    </article>
  );
}
