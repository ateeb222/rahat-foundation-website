"use client";

import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Programs', href: '/programs' },
  { label: 'Impact', href: '/impact' },
  { label: 'Transparency', href: '/transparency' },
  { label: 'Volunteer', href: '/volunteer' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#F8F5EF] border-b border-slate-200">
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
              <p className="text-sm font-semibold text-[#1A4D2E]">Rahat Social Impact Foundation</p>
              <p className="text-[11px] text-slate-600">Healthcare impact through trust and transparency</p>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white p-2 text-slate-700 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-[#2A7A45] md:hidden"
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
                  className="transition hover:text-[#1A4D2E] focus:outline-none focus:ring-2 focus:ring-[#2A7A45] focus:ring-offset-2 focus:ring-offset-[#F8F5EF]"
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
            className="inline-flex items-center rounded-full bg-[#1A4D2E] px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-[#16402a] focus:outline-none focus:ring-2 focus:ring-[#2A7A45] focus:ring-offset-2 focus:ring-offset-[#F8F5EF]"
          >
            Donate
          </Link>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`${menuOpen ? 'block' : 'hidden'} border-t border-slate-200 bg-[#F8F5EF] md:hidden`}
      >
        <nav className="px-4 py-4" aria-label="Mobile primary navigation">
          <ul className="space-y-2 text-base text-slate-700">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-lg px-3 py-2 transition hover:bg-[#E8F4E8] hover:text-[#1A4D2E] focus:outline-none focus:ring-2 focus:ring-[#2A7A45] focus:ring-offset-2 focus:ring-offset-[#F8F5EF]"
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
              className="block rounded-full bg-[#1A4D2E] px-4 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-[#16402a] focus:outline-none focus:ring-2 focus:ring-[#2A7A45] focus:ring-offset-2 focus:ring-offset-[#F8F5EF]"
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
