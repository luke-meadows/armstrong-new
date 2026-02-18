import Image from 'next/image';

const posts = [
  {
    title: 'How we price premium projects (without surprises)',
    date: 'Feb 2026',
    href: '#',
    img: '/inside2.jpg',
  },
  {
    title: 'Material-led luxury: stone, timber, quiet detailing',
    date: 'Jan 2026',
    href: '#',
    img: '/outside3.jpg',
  },
  {
    title: 'From concept to completion: what ‘single team’ really means',
    date: 'Dec 2025',
    href: '#',
    img: '/outside2.jpg',
  },
];

export default function Journal() {
  return (
    <section id="journal" className="bg-white border-y border-black/10">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-black/50">
              Journal
            </p>
            <h2 className="h-display mt-3 text-3xl md:text-4xl text-black">
              Latest notes
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:inline-block text-sm text-black/60 hover:text-black"
          >
            View all →
          </a>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {posts.map((p) => (
            <a
              key={p.title}
              href={p.href}
              className="overflow-hidden rounded-2xl border border-black/10 bg-white hover:bg-black/[0.02] transition"
            >
              <div className="relative h-44">
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-xs text-black/45">{p.date}</p>
                <p className="mt-3 text-black/80">{p.title}</p>
                <p className="mt-4 text-sm text-black/60">Read →</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
