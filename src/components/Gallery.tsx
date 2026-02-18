import Image from 'next/image';

const imgs = [
  { src: '/inside1.jpg', alt: 'Interior 1' },
  { src: '/outside1.jpg', alt: 'Outside 1' },
  { src: '/inside2.jpg', alt: 'Interior 2' },
  { src: '/outside2.jpg', alt: 'Outside 2' },
  { src: '/outside3.jpg', alt: 'Outside 3' },
  { src: '/hero.jpg', alt: 'Hero' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-black/50">
              Gallery
            </p>
            <h2 className="h-display mt-3 text-3xl md:text-4xl text-black">
              A portfolio that leads with imagery.
            </h2>
            <p className="mt-3 max-w-2xl text-black/60">
              Use this section for interiors, exteriors, and detail shots—luxury
              is visual first.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-12">
          {/* Large */}
          <div className="md:col-span-7 overflow-hidden rounded-2xl border border-black/10">
            <div className="relative h-80 md:h-[520px]">
              <Image
                src={imgs[0].src}
                alt={imgs[0].alt}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Stack */}
          <div className="md:col-span-5 grid gap-4">
            <div className="overflow-hidden rounded-2xl border border-black/10">
              <div className="relative h-40 md:h-[250px]">
                <Image
                  src={imgs[1].src}
                  alt={imgs[1].alt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-black/10">
              <div className="relative h-40 md:h-[250px]">
                <Image
                  src={imgs[2].src}
                  alt={imgs[2].alt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Row of 3 */}
          {[imgs[3], imgs[4], imgs[5]].map((img) => (
            <div
              key={img.src}
              className="md:col-span-4 overflow-hidden rounded-2xl border border-black/10"
            >
              <div className="relative h-56 md:h-72">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
