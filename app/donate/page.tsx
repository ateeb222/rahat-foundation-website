import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Donate',
  description:
    'Support the JNMC Hospital Patient Mobility Initiative through official Rahat Social Impact Foundation donation channels.',
};

const donationAmounts = [
  { amount: 'Rs. 500', label: 'General patient mobility support' },
  { amount: 'Rs. 1,000', label: 'Hospital access support' },
  { amount: 'Rs. 2,500', label: 'Mobility equipment support' },
  { amount: 'Rs. 5,800', label: 'Sponsor one wheelchair', featured: true },
  { amount: 'Rs. 15,000', label: 'Approximate stretcher sponsorship' },
];

const purposes = ['Wheelchair', 'Stretcher', 'General healthcare support'];
const recognition = ['Anonymous', 'Donor name', 'Loved one name'];

export default function DonatePage() {
  return (
    <main className="min-h-screen bg-[#F8F5EF] pb-10 text-[#1F2937]">
      <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div>
            <p className="inline-flex rounded-full border border-[#2A7A45] bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#1A4D2E]">
              Official donation page
            </p>
            <h1 className="mt-5 max-w-3xl text-3xl font-semibold leading-tight text-[#1A4D2E] sm:text-4xl lg:text-5xl">
              Support the JNMC Hospital Patient Mobility Initiative.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-700 sm:text-lg">
              Donate toward wheelchairs, stretcher support, or general healthcare access through Rahat Social Impact Foundation. Online checkout will activate after Razorpay approval.
            </p>
            <div className="mt-6 rounded-3xl border border-[#C8951A] bg-white p-5">
              <p className="text-sm font-semibold uppercase tracking-wide text-[#8A6511]">Security notice</p>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                Donations should only be made through official Rahat channels. Do not use unofficial QR codes, screenshots, or payment links circulated on social media.
              </p>
            </div>
          </div>

          <aside className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1A4D2E]">Choose an amount</p>
            <div className="mt-5 grid gap-3">
              {donationAmounts.map((item) => (
                <a
                  key={item.amount}
                  href="#donor-details"
                  className={`block rounded-2xl border p-4 transition focus:outline-none focus:ring-2 focus:ring-[#2A7A45] focus:ring-offset-2 focus:ring-offset-white ${
                    item.featured ? 'border-[#C8951A] bg-[#FFF8E6]' : 'border-slate-200 bg-[#F8F5EF] hover:border-[#2A7A45]'
                  }`}
                >
                  <span className="block text-2xl font-semibold text-[#1A4D2E]">{item.amount}</span>
                  <span className="mt-1 block text-sm font-semibold text-slate-800">{item.label}</span>
                </a>
              ))}
              <a
                href="#donor-details"
                className="block rounded-2xl border border-dashed border-[#2A7A45] bg-white p-4 transition hover:bg-[#E8F4E8] focus:outline-none focus:ring-2 focus:ring-[#2A7A45] focus:ring-offset-2 focus:ring-offset-white"
              >
                <span className="block text-2xl font-semibold text-[#1A4D2E]">Custom amount</span>
                <span className="mt-1 block text-sm leading-6 text-slate-600">Choose one-time, weekly, or monthly support.</span>
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section id="donor-details" className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6">
        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1A4D2E]">Donor details</p>
              <h2 className="mt-3 text-2xl font-semibold leading-tight text-[#1A4D2E] sm:text-3xl">
                Prepared for secure checkout and acknowledgement.
              </h2>
              <p className="mt-4 text-sm leading-6 text-slate-700">
                This accessible form defines the donor data Rahat needs before payment activation: contact details, donation purpose, recognition preference, optional message, and volunteer interest.
              </p>
            </div>

            <form className="grid gap-4" aria-label="Donation details form">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-semibold text-slate-800">
                  Name
                  <input className="min-h-[48px] rounded-xl border border-slate-300 bg-white px-4 text-base font-normal" name="name" required />
                </label>
                <label className="grid gap-2 text-sm font-semibold text-slate-800">
                  Mobile
                  <input className="min-h-[48px] rounded-xl border border-slate-300 bg-white px-4 text-base font-normal" name="mobile" type="tel" required />
                </label>
              </div>
              <label className="grid gap-2 text-sm font-semibold text-slate-800">
                Email
                <input className="min-h-[48px] rounded-xl border border-slate-300 bg-white px-4 text-base font-normal" name="email" type="email" required />
              </label>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-semibold text-slate-800">
                  Donation purpose
                  <select className="min-h-[48px] rounded-xl border border-slate-300 bg-white px-4 text-base font-normal" name="purpose" defaultValue="Wheelchair">
                    {purposes.map((purpose) => (
                      <option key={purpose}>{purpose}</option>
                    ))}
                  </select>
                </label>
                <label className="grid gap-2 text-sm font-semibold text-slate-800">
                  Recognition
                  <select className="min-h-[48px] rounded-xl border border-slate-300 bg-white px-4 text-base font-normal" name="recognition" defaultValue="Anonymous">
                    {recognition.map((item) => (
                      <option key={item}>{item}</option>
                    ))}
                  </select>
                </label>
              </div>
              <label className="grid gap-2 text-sm font-semibold text-slate-800">
                Optional message
                <textarea className="min-h-28 rounded-xl border border-slate-300 bg-white px-4 py-3 text-base font-normal" name="message" placeholder="In memory of... / Sponsored by..." />
              </label>
              <label className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-[#F8F5EF] p-4 text-sm text-slate-700">
                <input className="mt-1 h-4 w-4" type="checkbox" name="volunteerInterest" />
                I am also interested in volunteering with Rahat.
              </label>
              <button
                type="button"
                className="min-h-[48px] rounded-full bg-[#1A4D2E] px-5 py-3 text-sm font-semibold text-white opacity-75"
                aria-disabled="true"
              >
                Razorpay checkout pending approval
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-4 px-4 py-8 sm:px-6 lg:grid-cols-3">
        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Razorpay</p>
          <p className="mt-3 text-sm leading-6 text-slate-700">Application submitted. Production checkout will be connected after approval.</p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">UPI</p>
          <p className="mt-3 text-sm leading-6 text-slate-700">Official UPI details will be displayed here only after verification.</p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">QR code</p>
          <p className="mt-3 text-sm leading-6 text-slate-700">Desktop QR support is planned after official payment details are confirmed.</p>
        </div>
      </section>
    </main>
  );
}
