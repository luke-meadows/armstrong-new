'use client';

import { useState } from 'react';
import Image from 'next/image';

const nav = [
  { label: 'Studio', href: '#studio' },
  { label: 'Projects', href: '#projects' },
  { label: 'Design + Build', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Process', href: '#process' },
  { label: 'Journal', href: '#journal' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <a href="#" className="flex items-center gap-3">
          <Image
            src="/armstrong-build-logo.webp"
            alt="Armstrong Build"
            width={310}
            height={74}
            priority
            className="h-10 w-auto md:h-11"
          />
        </a>

        <nav className="hidden md:flex items-center gap-7 text-sm text-black/70">
          {nav.map((i) => (
            <a
              key={i.href}
              href={i.href}
              className="hover:text-black transition"
            >
              {i.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-black px-4 py-2 text-sm text-white hover:bg-black/90 transition"
          >
            Project Enquiry
          </a>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden rounded-full border border-black/15 px-3 py-2 text-sm text-black hover:border-black/30 transition"
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          Menu
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-black/10 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-4 space-y-3">
            {nav.map((i) => (
              <a
                key={i.href}
                href={i.href}
                className="block py-2 text-black/75 hover:text-black"
                onClick={() => setOpen(false)}
              >
                {i.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block rounded-xl bg-black px-4 py-3 text-center text-white hover:bg-black/90 transition"
              onClick={() => setOpen(false)}
            >
              Project Enquiry
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
