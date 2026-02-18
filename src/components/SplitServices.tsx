import Image from 'next/image';

export default function SplitServices() {
  return (
    <section id="services" className="bg-white border-y border-black/10">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-10 md:grid-cols-12 md:items-start">
          <div className="md:col-span-5">
            <p className="text-xs tracking-[0.3em] uppercase text-black/50">
              Design + Build
            </p>
            <h2 className="h-display mt-3 text-3xl md:text-4xl text-black">
              Design. Develop. Deliver.
            </h2>
            <p className="mt-4 text-black/60 leading-relaxed">
              One accountable team — protecting design intent, keeping decisions
              fast, and delivering a flawless finish.
            </p>
          </div>

          <div className="md:col-span-7 grid gap-5 md:grid-cols-2">
            {[
              {
                title: 'Design',
                points: [
                  'Architecture + interiors',
                  'Planning support',
                  'Material palettes',
                  'Joinery + lighting coordination',
                ],
              },
              {
                title: 'Build',
                points: [
                  'Programme + cost control',
                  'Quality assurance',
                  'Site standards',
                  'Aftercare handover',
                ],
              },
            ].map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-black/10 bg-white p-6"
              >
                <h3 className="h-display text-2xl text-black">{c.title}</h3>
                <ul className="mt-4 space-y-2 text-sm text-black/60">
                  {c.points.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-black/35" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="mt-6 inline-block text-sm text-black/65 hover:text-black"
                >
                  Learn more →
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Big image panel */}
        <div className="mt-10 grid gap-5 md:grid-cols-12">
          <div className="md:col-span-7 overflow-hidden rounded-2xl border border-black/10">
            <div className="relative h-80 md:h-[420px]">
              <Image
                src="/outside1.jpg"
                alt="Detail image"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-xs tracking-[0.3em] uppercase text-white/80">
                  Attention to Detail
                </p>
                <p className="h-display mt-2 text-2xl text-white">
                  Quality materials, sourced from the best suppliers
                </p>
              </div>
            </div>
          </div>

          <div className="md:col-span-5 rounded-2xl border border-black/10 bg-black p-7">
            <p className="text-white/85">
              Have a project in mind?{' '}
              <span className="text-white/65">
                Share your timeline and we’ll map next steps.
              </span>
            </p>
            <a
              href="#contact"
              className="mt-6 inline-flex rounded-full bg-white px-5 py-3 text-sm font-medium text-black hover:bg-white/90 transition"
            >
              Request a consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
