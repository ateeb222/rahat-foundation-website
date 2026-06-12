"use client";

import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Wheelchair', href: '/wheelchair' },
  { label: 'About', href: '/about' },
  { label: 'Programs', href: '/programs' },
  { label: 'Impact', href: '/impact' },
  { label: 'Transparency', href: '/transparency' },
  { label: 'Volunteer', href: '/volunteer' },
  { label: 'Contact', href: '/contact' },
];

const donateButtonClass =
  'inline-flex min-h-[48px] items-center justify-center rounded-full border border-[#D9A441] bg-[#07361F] px-5 py-3 text-base font-bold text-white shadow-[0_10px_22px_rgba(7,54,31,0.22)] transition hover:-translate-y-0.5 hover:bg-[#25472D] focus:outline-none focus:ring-2 focus:ring-[#D9A441] focus:ring-offset-2 focus:ring-offset-[#F8F5EC] active:translate-y-0';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  if (pathname === '/donate') {
    return (
      <header className="border-b border-[#D9A441]/20 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <div className="min-w-0">
            <p className="text-base font-bold leading-5 text-[#07361F]">Rahat Social Impact Foundation</p>
            <p className="mt-0.5 text-sm font-semibold text-[#2A7A45]">Official donation page</p>
          </div>
          <p className="shrink-0 rounded-full border border-[#D9A441]/35 bg-[#F8F5EF] px-3 py-1.5 text-xs font-bold text-[#07361F]">
            rahatsocialimpact.com
          </p>
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-40 border-b border-[#D9A441]/25 bg-[#F8F5EC]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 md:px-6">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-full bg-white sm:h-16 sm:w-16">
              <Image
                src="/images/LOGO/hero.jpg"
                alt="Rahat Social Impact Foundation logo"
                fill
                sizes="64px"
                className="object-cover"
              />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold leading-5 text-[#07361F] sm:text-base">Rahat Social Impact Foundation</p>
              <p className="text-[11px] leading-4 text-slate-600 sm:text-xs">Healthcare impact through trust and transparency</p>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="inline-flex min-h-[48px] min-w-[48px] items-center justify-center rounded-md border border-[#D9A441]/40 bg-white p-2 text-[#07361F] shadow-sm transition hover:bg-[#F8F5EC] focus:outline-none focus:ring-2 focus:ring-[#D9A441] lg:hidden"
          aria-controls="mobile-menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span className="sr-only">Toggle navigation menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M3 6h14M3 10h14M3 14h14" />
          </svg>
        </button>

        <nav className="hidden flex-1 justify-center lg:flex" aria-label="Primary navigation">
          <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-slate-700 xl:gap-x-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-semibold transition hover:text-[#07361F] focus:outline-none focus:ring-2 focus:ring-[#D9A441] focus:ring-offset-2 focus:ring-offset-[#F8F5EC]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:flex lg:items-center lg:gap-4">
          <Link
            href="/donate"
            className={donateButtonClass}
          >
            Donate
          </Link>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`${menuOpen ? 'block' : 'hidden'} border-t border-[#D9A441]/25 bg-[#F8F5EC] lg:hidden`}
      >
        <nav className="px-4 py-4" aria-label="Mobile primary navigation">
          <ul className="space-y-2 text-base text-slate-700">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-lg px-3 py-2 font-semibold transition hover:bg-white hover:text-[#07361F] focus:outline-none focus:ring-2 focus:ring-[#D9A441] focus:ring-offset-2 focus:ring-offset-[#F8F5EC]"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <Link
              href="/donate"
              className={`${donateButtonClass} w-full`}
              onClick={() => setMenuOpen(false)}
            >
              Donate
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
