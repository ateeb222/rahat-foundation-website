import type { Metadata } from 'next';
import Link from 'next/link';

import { DonationPurposeAndForm } from '@/components/donation/DonationPurposeAndForm';

export const metadata: Metadata = {
  title: 'Submit Donor Details',
  description:
    'Submit donation acknowledgement details to Rahat Social Impact Foundation after a UPI, bank transfer, or other completed donation.',
};

export default function DonorDetailsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F8F5EF] pb-16 text-[#1F2937]">
      <section className="border-b border-[#D9A441]/25 bg-[#07361F] text-white">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#E7C76D] sm:text-sm">Donor acknowledgement</p>
          <h1 className="mt-3 text-3xl font-bold leading-tight sm:text-5xl">Donation details and reconciliation</h1>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-white/85 sm:text-lg sm:leading-8">
            Use this form after completing a donation. It does not process payments.
          </p>
          <Link href="/donate" className="mt-5 inline-flex min-h-[48px] items-center font-bold text-white underline decoration-[#E7C76D] underline-offset-4">
            Return to donation options
          </Link>
        </div>
      </section>

      <DonationPurposeAndForm />
    </main>
  );
}
