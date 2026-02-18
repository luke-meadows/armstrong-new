import Image from 'next/image';

const projects = [
  {
    title: 'The Atrium House',
    subtitle: 'New build • Contemporary',
    img: '/outside3.jpg',
  },
  {
    title: 'Stone & Glass',
    subtitle: 'Extension • Heritage blend',
    img: '/inside2.jpg',
  },
  {
    title: 'Courtyard Home',
    subtitle: 'Renovation • Spatial replan',
    img: '/outside2.jpg',
  },
  {
    title: 'Lantern Kitchen',
    subtitle: 'Interiors • Bespoke joinery',
    img: '/inside1.jpg',
  },
];

export default function FeaturedProjects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-16 bg-white">
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="text-xs tracking-[0.3em] uppercase text-black/50">
            Projects
          </p>
          <h2 className="h-display mt-3 text-3xl md:text-4xl text-black">
            Picture-led work that reads as luxury.
          </h2>
          <p className="mt-3 max-w-2xl text-black/60">
            Clean typography, restrained composition, and confident
            imagery—focused on material integrity and finish.
          </p>
        </div>
        <a
          href="#contact"
          className="hidden md:inline-flex rounded-full border border-black/15 px-4 py-2 text-sm text-black hover:border-black/30 transition"
        >
          Start your project →
        </a>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {projects.map((p) => (
          <a
            key={p.title}
            href="#contact"
            className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white"
          >
            <div className="relative h-72 md:h-96">
              <Image src={p.img} alt={p.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex items-baseline justify-between gap-4">
                <div>
                  <h3 className="h-display text-2xl text-white">{p.title}</h3>
                  <p className="mt-1 text-sm text-white/80">{p.subtitle}</p>
                </div>
                <span className="text-sm text-white/80 group-hover:text-white transition">
                  Discover →
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
