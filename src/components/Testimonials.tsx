'use client';

import { useMemo, useState } from 'react';

const items = [
  {
    quote:
      'They protected the design intent all the way through build. Detail, communication, and programme were exceptional.',
    name: 'Homeowner',
    project: 'Atrium House',
  },
  {
    quote:
      'A genuinely joined-up team. Decisions were quick and the finish quality reads premium in every room.',
    name: 'Client',
    project: 'Stone & Glass Extension',
  },
  {
    quote:
      'Clear process, calm delivery. Handover was as polished as the build.',
    name: 'Homeowner',
    project: 'Courtyard Renovation',
  },
];

export default function Testimonials() {
  const [i, setI] = useState(0);
  const current = useMemo(() => items[i], [i]);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-black/50">
              Client reviews
            </p>
            <h2 className="h-display mt-3 text-3xl md:text-4xl text-black">
              What clients say
            </h2>
          </div>
          <div className="flex gap-2">
            <button
              className="rounded-full border border-black/15 px-4 py-2 text-sm text-black hover:border-black/30 transition"
              onClick={() => setI((v) => (v - 1 + items.length) % items.length)}
            >
              Prev
            </button>
            <button
              className="rounded-full border border-black/15 px-4 py-2 text-sm text-black hover:border-black/30 transition"
              onClick={() => setI((v) => (v + 1) % items.length)}
            >
              Next
            </button>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-black/10 bg-white p-7 md:p-10">
          <p className="h-display text-2xl leading-relaxed text-black">
            “{current.quote}”
          </p>
          <div className="mt-6 text-sm text-black/60">
            <span className="text-black/80">{current.name}</span> • Project:{' '}
            {current.project}
          </div>
        </div>
      </div>
    </section>
  );
}
