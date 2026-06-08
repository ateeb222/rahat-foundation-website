import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Rahat Social Impact Foundation for donations, volunteering, and healthcare support enquiries.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F8F5EF] text-[#1F2937]">
      <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:py-16">
        <div className="max-w-3xl">
          <p className="inline-flex rounded-full border border-[#2A7A45] bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#1A4D2E]">
            Contact Rahat
          </p>
          <h1 className="mt-5 text-3xl font-semibold leading-tight text-[#1A4D2E] sm:text-4xl lg:text-5xl">
            Donation, volunteer, and healthcare support enquiries.
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-700 sm:text-lg">
            Use this page for official Rahat communication. Verified email, phone, WhatsApp, and social links should be added here after final approval.
          </p>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-4 px-4 py-8 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-3xl border border-[#C8951A] bg-white p-5 shadow-sm sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1A4D2E]">Official-channel notice</p>
          <p className="mt-3 text-sm leading-6 text-slate-700">
            Do not donate through unofficial QR codes, screenshots, or social media payment links. Official payment details will be published only through verified Rahat channels.
          </p>
        </div>

        <form className="grid gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8" aria-label="Contact form">
          <label className="grid gap-2 text-sm font-semibold text-slate-800">
            Name
            <input className="min-h-[48px] rounded-xl border border-slate-300 bg-white px-4 text-base font-normal" name="name" required />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-slate-800">
            Email
            <input className="min-h-[48px] rounded-xl border border-slate-300 bg-white px-4 text-base font-normal" name="email" type="email" required />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-slate-800">
            Message
            <textarea className="min-h-32 rounded-xl border border-slate-300 bg-white px-4 py-3 text-base font-normal" name="message" required />
          </label>
          <button type="button" className="min-h-[48px] rounded-full bg-[#1A4D2E] px-5 py-3 text-sm font-semibold text-white opacity-75" aria-disabled="true">
            Submission backend pending
          </button>
        </form>
      </section>
    </main>
  );
}
