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
  { label: 'Media', href: '/media' },
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
            <p className="truncate text-sm font-bold leading-5 text-[#07361F] sm:text-base">Rahat Social Impact Foundation</p>
            <p className="mt-0.5 text-xs font-semibold text-[#2A7A45] sm:text-sm">Official donation page</p>
          </div>
          <p className="hidden shrink-0 rounded-full border border-[#D9A441]/35 bg-[#F8F5EF] px-3 py-1.5 text-xs font-bold text-[#07361F] min-[420px]:block">
            rahatsocialimpact.com
          </p>
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-40 border-b border-[#D9A441]/25 bg-[#F8F5EC]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-3 py-2.5 sm:gap-3 sm:px-4 sm:py-3 md:px-6">
        <Link href="/" className="flex min-w-0 items-center gap-2.5 sm:gap-3" aria-label="Rahat Social Impact Foundation home">
          <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-white sm:h-16 sm:w-16">
            <Image
              src="/images/LOGO/hero.jpg"
              alt="Rahat Social Impact Foundation logo"
              fill
              sizes="64px"
              className="object-contain"
            />
          </div>
          <div className="min-w-0">
            <p className="text-[12px] font-bold leading-4 text-[#07361F] min-[360px]:text-[13px] sm:text-base">Rahat Social Impact Foundation</p>
            <p className="mt-0.5 text-[9px] font-semibold leading-3 text-slate-600 min-[360px]:text-[10px] sm:text-xs sm:leading-4">Registered Section 8 nonprofit company</p>
          </div>
        </Link>

        <button
          type="button"
          className="inline-flex min-h-[46px] min-w-[46px] shrink-0 items-center justify-center rounded-md border border-[#D9A441]/40 bg-white p-2 text-[#07361F] shadow-sm transition hover:bg-[#F8F5EC] focus:outline-none focus:ring-2 focus:ring-[#D9A441] xl:hidden"
          aria-controls="mobile-menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span className="sr-only">Toggle navigation menu</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="h-5 w-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            {menuOpen ? <path d="M5 5l10 10M15 5L5 15" /> : <path d="M3 6h14M3 10h14M3 14h14" />}
          </svg>
        </button>

        <nav className="hidden flex-1 justify-center xl:flex" aria-label="Primary navigation">
          <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-slate-700 2xl:gap-x-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="font-semibold transition hover:text-[#07361F] focus:outline-none focus:ring-2 focus:ring-[#D9A441] focus:ring-offset-2 focus:ring-offset-[#F8F5EC]">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden xl:flex xl:items-center xl:gap-4">
          <Link href="/donate" className={donateButtonClass}>Donate</Link>
        </div>
      </div>

      <div id="mobile-menu" className={`${menuOpen ? 'block' : 'hidden'} max-h-[calc(100vh-68px)] overflow-y-auto border-t border-[#D9A441]/25 bg-[#F8F5EC] xl:hidden`}>
        <nav className="px-4 py-4" aria-label="Mobile primary navigation">
          <ul className="grid grid-cols-2 gap-2 text-base text-slate-700 min-[520px]:grid-cols-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="flex min-h-[46px] items-center rounded-lg px-3 py-2 font-semibold transition hover:bg-white hover:text-[#07361F] focus:outline-none focus:ring-2 focus:ring-[#D9A441] focus:ring-offset-2 focus:ring-offset-[#F8F5EC]"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 grid gap-2 min-[440px]:grid-cols-2">
            <Link href="/donate" className={`${donateButtonClass} w-full`} onClick={() => setMenuOpen(false)}>Donate</Link>
            <Link href="/sadaqah" className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full border border-[#07361F] bg-white px-5 py-3 text-base font-bold text-[#07361F]" onClick={() => setMenuOpen(false)}>Monthly Sadaqah</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
