import type { Metadata } from 'next';

import { ContactForm } from '@/components/forms/ContactForm';
import { donationConfig } from '@/lib/donation-config';

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
            Contact Rahat Foundation
          </p>
          <h1 className="mt-5 text-3xl font-semibold leading-tight text-[#1A4D2E] sm:text-4xl lg:text-5xl">
            Donation, volunteer, and healthcare support enquiries.
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-700 sm:text-lg">
            Use this page for official Rahat Foundation communication. You can also call, WhatsApp, or email the team directly.
          </p>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-4 px-4 py-8 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-3xl border border-[#C8951A] bg-white p-5 shadow-sm sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1A4D2E]">Official-channel notice</p>
          <p className="mt-3 text-sm leading-6 text-slate-700">
            Do not donate through unofficial QR codes, screenshots, or social media payment links. Official payment details will be published only through verified Rahat Foundation channels.
          </p>
          <div className="mt-5 grid gap-3">
            <a className="rounded-2xl border border-[#2A7A45]/30 bg-[#F8F5EF] px-4 py-3 text-base font-semibold text-[#1A4D2E]" href={donationConfig.contact.phone}>
              Call {donationConfig.contact.displayPhone}
            </a>
            <a className="rounded-2xl border border-[#2A7A45]/30 bg-[#F8F5EF] px-4 py-3 text-base font-semibold text-[#1A4D2E]" href={donationConfig.contact.whatsapp}>
              WhatsApp {donationConfig.contact.displayPhone}
            </a>
            <a className="rounded-2xl border border-[#2A7A45]/30 bg-[#F8F5EF] px-4 py-3 text-base font-semibold text-[#1A4D2E]" href={donationConfig.contact.email}>
              {donationConfig.contact.displayEmail}
            </a>
          </div>
        </div>

        <ContactForm />
      </section>
    </main>
  );
}
