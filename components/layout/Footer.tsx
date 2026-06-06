import Link from 'next/link';

const footerLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Programs', href: '/programs' },
  { label: 'Impact', href: '/impact' },
  { label: 'Transparency', href: '/transparency' },
  { label: 'Donate', href: '/donate' },
  { label: 'Volunteer', href: '/volunteer' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-[#F8F5EF] text-[#1F2937] border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div>
            <p className="text-sm font-semibold text-[#1A4D2E]">Rahat Social Impact Foundation</p>
            <p className="mt-2 text-xs text-slate-600">Healthcare impact through trust and transparency</p>
          </div>

          <nav className="sm:col-span-1">
            <ul className="grid grid-cols-2 gap-2 text-sm text-slate-700">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-[#1A4D2E]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="text-sm text-slate-700">
            <p className="font-semibold text-[#1A4D2E]">Support & Transparency</p>
            <p className="mt-2 text-xs text-slate-600">View financials, governance, and registration information.</p>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-100 pt-6">
          <p className="text-xs text-slate-500">© 2026 Rahat Social Impact Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
