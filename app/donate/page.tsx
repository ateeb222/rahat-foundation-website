import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Donate | Rahat Social Impact Foundation',
  description:
    'Support the JNMC Hospital Mobility Initiative by contributing to wheelchairs, stretchers, and patient mobility support through Rahat Social Impact Foundation.',
};

const donationAmounts = [
  {
    amount: '₹500',
    label: 'Support patient mobility',
    description: 'Contributes to mobility access and patient support needs at the hospital.',
  },
  {
    amount: '₹1,000',
    label: 'Strengthen hospital access',
    description: 'Helps Rahat coordinate equipment-led support for patients and attendants.',
  },
  {
    amount: '₹2,500',
    label: 'Back mobility equipment',
    description: 'Supports wheelchairs, stretchers, and related patient movement assistance.',
  },
  {
    amount: '₹5,500',
    label: 'Sponsor One Wheelchair',
    description: 'A focused contribution toward one wheelchair for the JNMC mobility campaign.',
    featured: true,
  },
  {
    amount: '₹15,000',
    label: 'Sponsor One Stainless Steel Stretcher',
    description: 'Supports one stainless steel stretcher for safer patient movement at the hospital.',
    featured: true,
  },
];

const givingOptions = [
  {
    title: 'One-Time',
    description: 'Make a single contribution toward the current JNMC Hospital Mobility Initiative.',
  },
  {
    title: 'Weekly Support',
    description: 'Set aside regular support for ongoing patient mobility and hospital access needs.',
  },
  {
    title: 'Monthly Support',
    description: 'Help sustain healthcare support programs with predictable monthly contributions.',
  },
];

const impactItems = [
  {
    title: 'Wheelchairs',
    description:
      'Funding supports wheelchair access for patients who need safer movement through hospital spaces.',
  },
  {
    title: 'Stretchers',
    description:
      'Contributions help strengthen patient transport infrastructure for hospital teams and attendants.',
  },
  {
    title: 'Patient mobility support',
    description:
      'Rahat coordinates community-powered support that improves how patients move through care pathways.',
  },
];

const trustItems = [
  {
    title: 'Section 8 NGO',
    description:
      'Rahat Social Impact Foundation operates with an institutional healthcare focus and accountability-led governance.',
  },
  {
    title: 'Transparency commitment',
    description:
      'Campaign goals, governance information, and implementation updates are shared to support donor confidence.',
  },
  {
    title: 'Secure payments via Razorpay',
    description:
      'Razorpay approval is pending. The payment area below is prepared for secure checkout integration after activation.',
  },
  {
    title: 'Contact information',
    description:
      'For donation assistance, use the Contact page while dedicated donor support details are being finalized.',
  },
];

const faqs = [
  {
    question: 'What does my donation support?',
    answer:
      'Donations support the JNMC Hospital Mobility Initiative, including wheelchairs, stretchers, and patient mobility support.',
  },
  {
    question: 'Can I sponsor a wheelchair?',
    answer:
      'Yes. The ₹5,500 preset is marked for one wheelchair sponsorship within the current mobility initiative.',
  },
  {
    question: 'Can I sponsor a stretcher?',
    answer:
      'Yes. The ₹15,000 preset is marked for one stainless steel stretcher sponsorship for patient mobility support.',
  },
  {
    question: 'Can I give regularly?',
    answer:
      'Yes. Weekly and monthly support options are included so supporters who practice regular charitable giving can sustain healthcare access work over time.',
  },
  {
    question: 'Is online payment active now?',
    answer:
      'Razorpay approval has been submitted and is pending. The checkout area will be connected once payment gateway approval is complete.',
  },
  {
    question: 'Will campaign progress be updated?',
    answer:
      'Yes. Rahat will publish campaign progress and implementation updates as donations and equipment deployment are verified.',
  },
];

export default function DonatePage() {
  return (
    <main className="min-h-screen bg-[#F8F5EF] pb-10 text-[#1F2937]">
      <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="inline-flex rounded-full border border-[#2A7A45] bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#1A4D2E]">
              JNMC Hospital Mobility Initiative
            </p>
            <h1 className="mt-5 max-w-3xl text-3xl font-semibold leading-tight text-[#1A4D2E] sm:text-4xl lg:text-5xl">
              Support Healthcare Access
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-700 sm:text-lg">
              Help Rahat Social Impact Foundation improve patient movement and hospital access through wheelchairs, stretchers, and mobility support at JNMC Hospital.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Campaign Goal</p>
                <p className="mt-2 text-2xl font-semibold text-[#1A4D2E]">80 Wheelchairs</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Campaign Goal</p>
                <p className="mt-2 text-2xl font-semibold text-[#1A4D2E]">25 Stretchers</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Gateway Status</p>
                <p className="mt-2 text-2xl font-semibold text-[#1A4D2E]">Razorpay Pending</p>
              </div>
            </div>
          </div>

          <aside className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1A4D2E]">Choose an amount</p>
            <div className="mt-5 grid gap-3">
              {donationAmounts.map((item) => (
                <a
                  key={item.amount}
                  href="#razorpay-integration"
                  className={`block rounded-2xl border p-4 transition focus:outline-none focus:ring-2 focus:ring-[#2A7A45] focus:ring-offset-2 focus:ring-offset-white ${
                    item.featured
                      ? 'border-[#C8951A] bg-[#FFF8E6] shadow-sm'
                      : 'border-slate-200 bg-[#F8F5EF] hover:border-[#2A7A45]'
                  }`}
                >
                  <span className="flex items-start justify-between gap-4">
                    <span>
                      <span className="block text-2xl font-semibold text-[#1A4D2E]">{item.amount}</span>
                      <span className="mt-1 block text-sm font-semibold text-slate-800">{item.label}</span>
                    </span>
                    {item.featured ? (
                      <span className="rounded-full bg-[#C8951A] px-3 py-1 text-xs font-semibold text-white">
                        Priority
                      </span>
                    ) : null}
                  </span>
                  <span className="mt-3 block text-sm leading-6 text-slate-600">{item.description}</span>
                </a>
              ))}
              <a
                href="#razorpay-integration"
                className="block rounded-2xl border border-dashed border-[#2A7A45] bg-white p-4 transition hover:bg-[#E8F4E8] focus:outline-none focus:ring-2 focus:ring-[#2A7A45] focus:ring-offset-2 focus:ring-offset-white"
              >
                <span className="block text-2xl font-semibold text-[#1A4D2E]">Custom Amount</span>
                <span className="mt-2 block text-sm leading-6 text-slate-600">
                  Choose an amount that matches your giving preference.
                </span>
              </a>
            </div>

            <div className="mt-6 border-t border-slate-200 pt-5">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1A4D2E]">Support frequency</p>
              <div className="mt-4 grid gap-3">
                {givingOptions.map((option) => (
                  <a
                    key={option.title}
                    href="#razorpay-integration"
                    className={`block rounded-2xl border p-4 transition focus:outline-none focus:ring-2 focus:ring-[#2A7A45] focus:ring-offset-2 focus:ring-offset-white ${
                      option.title === 'One-Time'
                        ? 'border-[#1A4D2E] bg-[#E8F4E8]'
                        : 'border-slate-200 bg-white hover:border-[#2A7A45]'
                    }`}
                  >
                    <span className="block text-base font-semibold text-[#1A4D2E]">{option.title}</span>
                    <span className="mt-2 block text-sm leading-6 text-slate-600">{option.description}</span>
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6">
        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1A4D2E]">Recurring support</p>
              <h2 className="mt-3 text-2xl font-semibold leading-tight text-[#1A4D2E] sm:text-3xl">
                Regular giving helps Rahat plan patient support with more stability.
              </h2>
            </div>
            <div className="space-y-4 text-base leading-7 text-slate-700">
              <p>
                Many supporters prefer to give regularly as part of their personal commitment to community welfare, healthcare access, and service. Weekly or monthly support helps Rahat prepare for recurring mobility needs instead of responding only when equipment gaps become urgent.
              </p>
              <p>
                Predictable contributions can help sustain wheelchair support, stretcher support, patient mobility coordination, and future healthcare access programs across hospital and community settings.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6">
        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1A4D2E]">What donations support</p>
            <h2 className="mt-3 text-2xl font-semibold leading-tight text-[#1A4D2E] sm:text-3xl">
              Practical healthcare access for patients and hospital teams.
            </h2>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {impactItems.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-200 bg-[#F8F5EF] p-5">
                <h3 className="text-lg font-semibold text-[#1A4D2E]">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6">
        <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1A4D2E]">Donation progress</p>
            <h2 className="mt-3 text-2xl font-semibold text-[#1A4D2E]">Current campaign targets</h2>
            <div className="mt-6 space-y-5">
              <div>
                <div className="flex items-center justify-between gap-4 text-sm font-semibold text-slate-700">
                  <span>Wheelchairs</span>
                  <span>Goal: 80</span>
                </div>
                <div className="mt-3 rounded-full bg-slate-200 px-1 py-1">
                  <div className="h-3 w-0 rounded-full bg-[#1A4D2E]" aria-label="Wheelchair sponsorship progress pending verification" />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between gap-4 text-sm font-semibold text-slate-700">
                  <span>Stretchers</span>
                  <span>Goal: 25</span>
                </div>
                <div className="mt-3 rounded-full bg-slate-200 px-1 py-1">
                  <div className="h-3 w-0 rounded-full bg-[#1A4D2E]" aria-label="Stretcher sponsorship progress pending verification" />
                </div>
              </div>
            </div>
            <p className="mt-5 text-sm leading-6 text-slate-600">
              Verified sponsorship counts will be published after Razorpay activation and campaign reconciliation.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1A4D2E]">Trust and transparency</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {trustItems.map((item) => (
                <div key={item.title} className="rounded-2xl border border-slate-200 bg-[#F8F5EF] p-5">
                  <h3 className="text-base font-semibold text-[#1A4D2E]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-700">{item.description}</p>
                </div>
              ))}
            </div>
            <a
              href="/contact"
              className="mt-6 inline-flex min-h-[48px] w-full items-center justify-center rounded-full border border-[#1A4D2E] bg-white px-5 py-3 text-sm font-semibold text-[#1A4D2E] transition hover:bg-[#E8F4E8] focus:outline-none focus:ring-2 focus:ring-[#2A7A45] focus:ring-offset-2 focus:ring-offset-white sm:w-auto"
            >
              Contact Rahat
            </a>
          </div>
        </div>
      </section>

      <section id="razorpay-integration" className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6">
        <div className="rounded-3xl border border-[#C8951A] bg-white p-5 shadow-sm sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1A4D2E]">Razorpay integration area</p>
              <h2 className="mt-3 text-2xl font-semibold leading-tight text-[#1A4D2E] sm:text-3xl">
                Secure online donation checkout will appear here.
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-700">
                Rahat has submitted the Razorpay application. Once approval is complete, this section will connect preset amounts, custom amounts, support frequency, payment confirmation, and donor acknowledgement.
              </p>
            </div>
            <div className="rounded-2xl bg-[#F8F5EF] p-5">
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Payment Status</p>
              <p className="mt-3 text-xl font-semibold text-[#1A4D2E]">Integration prepared</p>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                Checkout remains inactive until Razorpay approval and production credentials are available.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6">
        <div className="grid gap-4 lg:grid-cols-[1fr_0.85fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1A4D2E]">FAQ</p>
            <div className="mt-5 space-y-4">
              {faqs.map((item) => (
                <details key={item.question} className="rounded-2xl border border-slate-200 bg-[#F8F5EF] p-5">
                  <summary className="cursor-pointer text-base font-semibold text-[#1A4D2E]">
                    {item.question}
                  </summary>
                  <p className="mt-3 text-sm leading-6 text-slate-700">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-[#1A4D2E] p-5 text-white shadow-sm sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#F8F5EF]">
              Thank you
            </p>
            <h2 className="mt-3 text-2xl font-semibold leading-tight sm:text-3xl">
              Every contribution helps build more accessible healthcare pathways.
            </h2>
            <p className="mt-4 text-sm leading-6 text-[#E8F4E8] sm:text-base">
              Rahat acknowledges every donor who supports the JNMC Hospital Mobility Initiative. Donor receipt and acknowledgement workflows will be connected with the payment gateway after Razorpay activation.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
