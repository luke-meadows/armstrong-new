'use client';

import { useMemo } from 'react';

export default function Hero() {
  const active = useMemo(() => ({ alt: 'Featured project film' }), []);

  return (
    <section className="relative overflow-hidden min-h-[80vh] md:min-h-[90vh]">
      {/* Video background */}
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/hero.jpg" // optional fallback image
        >
          {/* <source src="/hero.mp4" type="video/mp4" /> */}
        </video>

        {/* Readability overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/30 to-transparent" />
      </div>

      {/* Make the content wrapper fill the hero height and center content */}
      <div className="relative mx-auto max-w-6xl px-4 min-h-[80vh] md:min-h-[90vh] flex items-center">
        <div className="w-full grid gap-10 md:grid-cols-12">
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
              Welcome to Armstrong Build where we are developing some of the
              United Kingdom most prestigious homes.
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
                className="rounded-full border border-white/35 px-5 py-3 text-sm text-white bg-black hover:border-white/55 transition"
              >
                View projects
              </a>
            </div>

            <div className="mt-6 text-xs text-white/70 tracking-[0.22em] uppercase">
              Now showing: <span className="text-white/90">{active.alt}</span>
            </div>
          </div>
        </div>

        {/* Your studio cards remain commented out */}
      </div>
    </section>
  );
}
