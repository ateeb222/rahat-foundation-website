"use client";

import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

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

  return (
    <header className="border-b border-[#D9A441]/25 bg-[#F8F5EC]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-full bg-white">
              <Image
                src="/images/LOGO/hero.jpg"
                alt="Rahat Social Impact Foundation logo"
                width={64}
                height={64}
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#07361F]">Rahat Social Impact Foundation</p>
              <p className="text-[11px] text-slate-600">Healthcare impact through trust and transparency</p>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-md border border-[#D9A441]/40 bg-white p-2 text-[#07361F] shadow-sm transition hover:bg-[#F8F5EC] focus:outline-none focus:ring-2 focus:ring-[#D9A441] md:hidden"
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

        <nav className="hidden flex-1 justify-center md:flex" aria-label="Primary navigation">
          <ul className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-700">
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

        <div className="hidden md:flex md:items-center md:gap-4">
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
        className={`${menuOpen ? 'block' : 'hidden'} border-t border-[#D9A441]/25 bg-[#F8F5EC] md:hidden`}
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
