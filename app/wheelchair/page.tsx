import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sponsor Wheelchairs for JNMC Hospital',
  description:
    'Sponsor wheelchairs for the JNMC Hospital Patient Mobility Initiative by Rahat Social Impact Foundation.',
  openGraph: {
    title: 'Sponsor Wheelchairs for JNMC Hospital',
    description:
      'Phase 1 campaign by Rahat Social Impact Foundation: 80 wheelchairs for JNMC Hospital patient mobility.',
    url: '/wheelchair',
    siteName: 'Rahat Social Impact Foundation',
    type: 'website',
  },
};

const recognitionOptions = ['Anonymous', 'Donor name', 'Loved one name'];

const wheelchairDetails = [
  'Permanent transfer to JNMC Hospital after procurement and implementation',
  'Rahat branding and unique wheelchair identification number where applicable',
  'Official website and contact details to help identify verified campaign assets',
  'Optional donor recognition without pressure or public disclosure requirements',
];

const primaryLink =
  'inline-flex min-h-[52px] w-full items-center justify-center rounded-full border border-[#D9A441] bg-[#07361F] px-6 py-3 text-lg font-bold text-white shadow-[0_12px_28px_rgba(7,54,31,0.24)] transition hover:-translate-y-0.5 hover:bg-[#25472D] hover:shadow-[0_16px_32px_rgba(7,54,31,0.3)] focus:outline-none focus:ring-2 focus:ring-[#D9A441] focus:ring-offset-2 focus:ring-offset-[#F8F5EF] active:translate-y-0 sm:w-auto';
const secondaryLink =
  'inline-flex min-h-[52px] w-full items-center justify-center rounded-full border-2 border-[#07361F] bg-white px-6 py-3 text-lg font-bold text-[#07361F] shadow-sm transition hover:-translate-y-0.5 hover:border-[#D9A441] hover:bg-[#F8F5EC] focus:outline-none focus:ring-2 focus:ring-[#D9A441] focus:ring-offset-2 focus:ring-offset-[#F8F5EF] active:translate-y-0 sm:w-auto';

export default function WheelchairPage() {
  return (
    <main className="min-h-screen bg-[#F8F5EF] pb-20 text-[#1F2937]">
      <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-start">
          <div>
            <p className="inline-flex rounded-full border border-[#2A7A45] bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#1A4D2E]">
              Phase 1: JNMC Hospital Patient Mobility Initiative
            </p>
            <h1 className="mt-5 max-w-3xl text-3xl font-semibold leading-tight text-[#1A4D2E] sm:text-4xl lg:text-5xl">
              Sponsor wheelchairs for safer patient movement at JNMC Hospital.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-700 sm:text-lg">
              Rahat is raising support for 80 wheelchairs that will improve physical access for patients, attendants, and hospital teams across the JNMC Hospital care environment.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/donate"
                className={primaryLink}
              >
                Sponsor for Rs. 5,800
              </Link>
              <Link
                href="/donate"
                className={secondaryLink}
              >
                Donate another amount
              </Link>
            </div>
          </div>

          <aside className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1A4D2E]">Campaign snapshot</p>
            <div className="mt-5 grid gap-3">
              <div className="rounded-2xl bg-[#F8F5EF] p-4">
                <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Target</p>
                <p className="mt-2 text-3xl font-semibold text-[#1A4D2E]">80 wheelchairs</p>
              </div>
              <div className="rounded-2xl bg-[#F8F5EF] p-4">
                <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Sponsorship</p>
                <p className="mt-2 text-3xl font-semibold text-[#1A4D2E]">Rs. 5,800</p>
              </div>
              <div className="rounded-2xl bg-[#FFF8E6] p-4">
                <p className="text-sm font-semibold uppercase tracking-wide text-[#8A6511]">Payment status</p>
                <p className="mt-2 text-sm leading-6 text-slate-700">Razorpay activation is pending. Use the official UPI or bank transfer details on the donation page.</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6">
        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1A4D2E]">What each sponsorship supports</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {wheelchairDetails.map((detail) => (
              <div key={detail} className="rounded-2xl border border-slate-200 bg-[#F8F5EF] p-5">
                <p className="text-sm leading-6 text-slate-700">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-4 px-4 py-8 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1A4D2E]">Recognition is optional</p>
          <h2 className="mt-3 text-2xl font-semibold leading-tight text-[#1A4D2E]">Donors can choose how they are acknowledged.</h2>
          <div className="mt-5 grid gap-3">
            {recognitionOptions.map((option) => (
              <div key={option} className="rounded-2xl border border-slate-200 bg-[#F8F5EF] p-4 text-sm font-semibold text-slate-800">
                {option}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-[#C8951A] bg-white p-5 shadow-sm sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1A4D2E]">Official donation safety</p>
          <h2 className="mt-3 text-2xl font-semibold leading-tight text-[#1A4D2E]">Use only verified Rahat payment channels.</h2>
          <p className="mt-4 text-base leading-7 text-slate-700">
            Please do not donate through unofficial QR codes, screenshots, or payment links shared on social media. Rahat will keep the donation page updated with official UPI, bank transfer, and Razorpay status.
          </p>
          <Link
            href="/donate"
            className={`mt-6 ${primaryLink}`}
          >
            Go to official donate page
          </Link>
        </div>
      </section>

      <Link
        href="/donate"
        className="fixed inset-x-4 bottom-4 z-50 rounded-full border border-[#D9A441] bg-[#07361F] px-5 py-4 text-center text-lg font-bold text-white shadow-[0_16px_34px_rgba(7,54,31,0.3)] transition hover:bg-[#25472D] focus:outline-none focus:ring-2 focus:ring-[#D9A441] focus:ring-offset-2 sm:hidden"
      >
        Sponsor for Rs. 5,800
      </Link>
    </main>
  );
}
