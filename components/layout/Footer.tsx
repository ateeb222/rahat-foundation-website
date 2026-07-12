import Link from 'next/link';

const footerLinks = [
  { label: 'Home', href: '/' },
  { label: 'Wheelchair Campaign', href: '/wheelchair' },
  { label: 'About', href: '/about' },
  { label: 'Programs', href: '/programs' },
  { label: 'Impact', href: '/impact' },
  { label: 'Transparency', href: '/transparency' },
  { label: 'Donate', href: '/donate' },
  { label: 'Monthly Sadaqah', href: '/sadaqah' },
  { label: 'Volunteer', href: '/volunteer' },
  { label: 'Contact Us', href: '/contact' },
];

const policyLinks = [
  { label: 'Terms and Conditions', href: '/terms-and-conditions' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Cancellation and Refund', href: '/cancellation-and-refund' },
  { label: 'Shipping and Exchange', href: '/shipping-and-exchange' },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-[#F8F5EF] text-[#1F2937]">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[0.9fr_1.1fr_1fr]">
          <div>
            <p className="text-base font-bold text-[#1A4D2E]">Rahat Social Impact Foundation</p>
            <p className="mt-2 max-w-sm text-sm leading-6 text-slate-600">Healthcare impact through trust and transparency.</p>
            <p className="mt-3 text-xs leading-5 text-slate-500">Section 8 company · CIN U86909DL2026NPL466630</p>
          </div>

          <nav aria-label="Footer navigation">
            <p className="font-bold text-[#1A4D2E]">Explore</p>
            <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-3 text-sm text-slate-700">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="inline-flex min-h-[32px] items-center hover:text-[#1A4D2E] hover:underline hover:underline-offset-4">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Legal and payment policies">
            <p className="font-bold text-[#1A4D2E]">Legal &amp; payment policies</p>
            <ul className="mt-3 grid gap-2 text-sm text-slate-700">
              {policyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="inline-flex min-h-[36px] items-center hover:text-[#1A4D2E] hover:underline hover:underline-offset-4">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-8 border-t border-slate-200 pt-6">
          <p className="text-xs leading-5 text-slate-500">Copyright 2026 Rahat Social Impact Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
