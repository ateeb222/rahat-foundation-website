import Link from 'next/link';
import type { ReactNode } from 'react';
import { organization } from '@/lib/organization';

export function PolicyPage({
  eyebrow,
  title,
  summary,
  children,
}: {
  eyebrow: string;
  title: string;
  summary: string;
  children: ReactNode;
}) {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F8F5EF] text-[#1F2937]">
      <section className="border-b border-[#D9A441]/25 bg-[linear-gradient(145deg,#07361F_0%,#145B37_100%)] text-white">
        <div className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 sm:py-14 lg:py-16">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#E7C76D] sm:text-sm sm:tracking-[0.2em]">
            {eyebrow}
          </p>
          <h1 className="mt-3 max-w-4xl text-3xl font-bold leading-tight sm:mt-4 sm:text-5xl">{title}</h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-white/88 sm:text-lg sm:leading-8">{summary}</p>
          <p className="mt-4 text-sm text-white/70">Effective date: {organization.policyEffectiveDate}</p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 sm:py-12">
        <article className="policy-content rounded-2xl border border-[#D9A441]/30 bg-white p-5 shadow-[0_14px_36px_rgba(7,54,31,0.07)] sm:p-8 lg:p-10">
          {children}
        </article>

        <div className="mt-6 grid gap-3 rounded-2xl border border-[#D9A441]/35 bg-[#FFF8E6] p-4 text-sm leading-6 text-[#5F4A12] sm:grid-cols-[1fr_auto] sm:items-center sm:p-5">
          <p>
            Questions about this policy may be sent to{' '}
            <a className="font-bold underline underline-offset-4" href={`mailto:${organization.email}`}>
              {organization.email}
            </a>{' '}
            or raised through our official contact page.
          </p>
          <Link
            href="/contact"
            className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full bg-[#07361F] px-5 py-3 font-bold text-white sm:w-auto"
          >
            Contact Rahat Foundation
          </Link>
        </div>
      </section>
    </main>
  );
}
