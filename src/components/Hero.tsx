'use client';

import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';

const slides = [
  { src: '/outside4.jpg', alt: 'PROJECT NAME 1' },
  { src: '/outside3.jpg', alt: 'PROJECT NAME 2' },
  { src: '/outside2.jpg', alt: 'PROJECT NAME 3' },
  { src: '/outside1.jpg', alt: 'PROJECT NAME 4' },
];

const quickProjects = [
  { name: 'The Atrium House', code: 'PRJ-028', href: '#projects' },
  { name: 'Stone & Glass Extension', code: 'PRJ-025', href: '#projects' },
  { name: 'Courtyard New Build', code: 'PRJ-020', href: '#projects' },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  const total = slides.length;
  const active = useMemo(() => slides[index], [index]);

  useEffect(() => {
    const t = setInterval(() => setIndex((v) => (v + 1) % total), 7500);
    return () => clearInterval(t);
  }, [total]);

  return (
    <section className="relative overflow-hidden">
      {/* Slideshow background */}
      <div className="absolute inset-0">
        {slides.map((s, i) => (
          <div
            key={s.src}
            className={`absolute inset-0 transition-opacity duration-[1400ms] ${
              i === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={s.src}
              alt={s.alt}
              fill
              priority={i === 0}
              className="object-cover"
            />
          </div>
        ))}

        {/* Readability overlays (luxury, not “dark mode”) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/30 to-transparent" />
        {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/90" /> */}
      </div>

      <div className="relative mx-auto max-w-6xl px-4 pt-16 pb-10 md:pt-24 md:pb-16">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <p className="text-xs tracking-[0.3em] uppercase text-white/85">
              Luxury residential construction
            </p>

            <h1 className="h-display mt-4 text-4xl leading-[1.05] md:text-6xl text-white">
              Built with care.
              <br />
              Finished properly.
            </h1>

            <p className="mt-5 max-w-xl text-white/85 leading-relaxed">
              Design-led delivery for new builds, major renovations, and
              architectural extensions — handled end to end by one accountable
              team.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-full bg-white text-black px-5 py-3 text-sm font-medium hover:bg-white/90 transition"
              >
                Request a consultation
              </a>
              <a
                href="#projects"
                className="rounded-full border border-white/35 px-5 py-3 text-sm text-white hover:border-white/55 transition"
              >
                View projects
              </a>
            </div>

            <div className="mt-6 text-xs text-white/70 tracking-[0.22em] uppercase">
              Now showing: <span className="text-white/90">{active.alt}</span>
            </div>
          </div>

          {/* <div className="md:col-span-5">
            <div className="rounded-2xl border border-white/25 bg-black/35 backdrop-blur p-5">
              <div className="flex items-center justify-between">
                <p className="text-xs tracking-[0.28em] uppercase text-white/85">
                  Featured
                </p>
                <p className="text-xs text-white/60">Updated weekly</p>
              </div>

              <div className="mt-4 space-y-3">
                {quickProjects.map((p) => (
                  <a
                    key={p.code}
                    href={p.href}
                    className="group block rounded-xl border border-white/15 bg-white/10 px-4 py-3 hover:bg-white/15 transition"
                  >
                    <div className="flex items-baseline justify-between">
                      <p className="text-white/95">{p.name}</p>
                      <span className="text-xs text-white/70">{p.code}</span>
                    </div>
                    <p className="mt-1 text-sm text-white/75 group-hover:text-white">
                      Discover project →
                    </p>
                  </a>
                ))}
              </div>

              <div className="mt-5 border-t border-white/15 pt-4 text-sm text-white/80">
                <span className="text-white/95">
                  Design • Develop • Deliver
                </span>{' '}
                — clarity in every step, detail in every finish.
              </div>
            </div>
          </div> */}
        </div>

        <div id="studio" className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            { k: '10+', v: 'Years delivering bespoke homes' },
            { k: '1', v: 'One accountable team' },
            { k: '4', v: 'Core disciplines, in-house' },
          ].map((x) => (
            <div
              key={x.k}
              className="rounded-2xl border border-white/20 bg-black/15 backdrop-blur p-5"
            >
              <div className="h-display text-3xl text-white">{x.k}</div>
              <div className="mt-1 text-sm text-white/80">{x.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
