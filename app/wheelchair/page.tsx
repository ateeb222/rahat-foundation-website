import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { donationConfig } from '@/lib/donation-config';

export const metadata: Metadata = {
  title: '80 Wheelchairs for JNMC Hospital | Rahat Social Impact Foundation',
  description:
    'Support Rahat Social Impact Foundation’s 80-wheelchair patient mobility initiative for JNMC Hospital. Secure online donation, UPI and bank transfer options are available.',
  openGraph: {
    title: '80 Wheelchairs for JNMC Hospital',
    description:
      'Verified Phase 1 patient mobility campaign by Rahat Social Impact Foundation.',
    url: '/wheelchair',
    siteName: 'Rahat Social Impact Foundation',
    images: ['/images/wheelchair/factory-visit.jpeg'],
    type: 'website',
  },
};

const remaining = donationConfig.campaign.totalGoal - donationConfig.campaign.verifiedSponsored;

const buttonPrimary =
  'inline-flex min-h-[50px] w-full items-center justify-center rounded-full bg-[#07361F] px-5 py-3 text-base font-bold text-white shadow-lg transition hover:bg-[#1A4D2E] focus:outline-none focus:ring-2 focus:ring-[#C8951A] focus:ring-offset-2 sm:w-auto';
const buttonSecondary =
  'inline-flex min-h-[50px] w-full items-center justify-center rounded-full border border-[#07361F] bg-white px-5 py-3 text-base font-bold text-[#07361F] transition hover:border-[#C8951A] hover:bg-[#F8F5EF] focus:outline-none focus:ring-2 focus:ring-[#C8951A] focus:ring-offset-2 sm:w-auto';

export default function WheelchairPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F8F5EF] pb-24 text-[#1F2937] sm:pb-16">
      <section className="border-b border-[#D9A441]/25 bg-[linear-gradient(145deg,#07361F_0%,#145B37_100%)] text-white">
        <div className="mx-auto grid max-w-7xl gap-7 px-4 py-9 sm:px-6 sm:py-14 lg:grid-cols-[1fr_0.82fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#E7C76D] sm:text-sm sm:tracking-[0.2em]">
              Phase 1 · Patient Mobility Initiative
            </p>
            <h1 className="mt-3 max-w-3xl text-[34px] font-bold leading-[1.08] sm:text-5xl lg:text-6xl">
              80 wheelchairs for JNMC Hospital.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/88 sm:text-lg sm:leading-8">
              Rahat is arranging wheelchairs to improve safer, dignified movement for patients across the JNMC Hospital care environment.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href="/donate" className="inline-flex min-h-[52px] w-full items-center justify-center rounded-full border border-[#D9A441] bg-white px-6 py-3 text-base font-bold text-[#07361F] shadow-lg sm:w-auto sm:text-lg">
                Sponsor a wheelchair · ₹5,800
              </Link>
              <Link href="/donate" className="inline-flex min-h-[52px] w-full items-center justify-center rounded-full border border-white/45 px-6 py-3 text-base font-bold text-white sm:w-auto sm:text-lg">
                Donate another amount
              </Link>
            </div>
            <p className="mt-3 text-xs leading-5 text-white/75 sm:text-sm">
              Razorpay online checkout, UPI and bank transfer are available on the official donation page.
            </p>
          </div>

          <figure className="overflow-hidden rounded-[1.35rem] border border-white/20 bg-white/10 p-2 shadow-2xl">
            <div className="relative aspect-[3/4] overflow-hidden rounded-[1rem] bg-[#EAF3E2] sm:aspect-[4/5]">
              <Image
                src="/images/wheelchair/factory-visit.jpeg"
                alt="Rahat representative reviewing prepared wheelchairs at the supplier facility"
                fill
                priority
                sizes="(min-width: 1024px) 480px, 92vw"
                className="object-cover"
              />
            </div>
            <figcaption className="px-3 py-3 text-sm leading-6 text-white/85">
              Factory visit and physical review of wheelchairs prepared for the patient mobility initiative.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10">
        <div className="grid gap-3 sm:grid-cols-3">
          <article className="rounded-2xl border border-[#D9A441]/30 bg-white p-5 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-wide text-slate-500">Campaign goal</p>
            <p className="mt-2 text-4xl font-bold text-[#07361F]">{donationConfig.campaign.totalGoal}</p>
            <p className="mt-1 text-sm text-slate-600">wheelchairs for JNMC Hospital</p>
          </article>
          <article className="rounded-2xl border border-[#D9A441]/30 bg-white p-5 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-wide text-slate-500">Verified sponsored</p>
            <p className="mt-2 text-4xl font-bold text-[#07361F]">{donationConfig.campaign.verifiedSponsored}</p>
            <p className="mt-1 text-sm text-slate-600">{remaining} remaining</p>
          </article>
          <article className="rounded-2xl border border-[#D9A441]/30 bg-white p-5 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-wide text-slate-500">One sponsorship</p>
            <p className="mt-2 text-4xl font-bold text-[#07361F]">₹5,800</p>
            <p className="mt-1 text-sm text-slate-600">including campaign procurement support</p>
          </article>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-4 py-8 sm:px-6 lg:grid-cols-2">
        <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#3B635D]">What happens next</p>
          <h2 className="mt-3 text-2xl font-bold leading-tight text-[#07361F] sm:text-3xl">Procure, identify, record and hand over.</h2>
          <div className="mt-5 grid gap-3 text-sm leading-6 text-slate-700">
            <p className="rounded-2xl bg-[#F8F5EF] p-4">Wheelchairs are physically reviewed and recorded before handover.</p>
            <p className="rounded-2xl bg-[#F8F5EF] p-4">Rahat identification and donor-recognition instructions are applied where applicable.</p>
            <p className="rounded-2xl bg-[#F8F5EF] p-4">Verified progress is updated after payment matching and internal reconciliation.</p>
          </div>
        </article>

        <article className="rounded-3xl border border-[#C8951A] bg-white p-5 shadow-sm sm:p-7">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#3B635D]">Donor recognition</p>
          <h2 className="mt-3 text-2xl font-bold leading-tight text-[#07361F] sm:text-3xl">Choose the acknowledgement that is right for you.</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {['Anonymous', 'Donor name', 'In honour or memory of a loved one'].map((item) => (
              <div key={item} className="rounded-2xl border border-[#D9A441]/30 bg-[#FFF8E6] p-4 text-sm font-bold leading-6 text-[#5F4A12]">
                {item}
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/donate" className={buttonPrimary}>Open official donation page</Link>
            <Link href="/transparency" className={buttonSecondary}>Verify Rahat</Link>
          </div>
        </article>
      </section>

      <Link href="/donate" className="fixed inset-x-4 bottom-4 z-50 rounded-full border border-[#D9A441] bg-[#07361F] px-5 py-4 text-center text-base font-bold text-white shadow-[0_16px_34px_rgba(7,54,31,0.3)] sm:hidden">
        Sponsor a wheelchair · ₹5,800
      </Link>
    </main>
  );
}
