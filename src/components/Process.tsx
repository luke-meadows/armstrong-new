const steps = [
  {
    title: 'Discovery',
    desc: 'Site visit, scope, feasibility, budget alignment.',
  },
  {
    title: 'Design',
    desc: 'Plans, detailing, materials, programme definition.',
  },
  {
    title: 'Build',
    desc: 'Immaculate delivery, tight comms, uncompromising finish.',
  },
  { title: 'Handover', desc: 'Snagging, documentation, aftercare support.' },
];

export default function Process() {
  return (
    <section id="process" className="bg-white border-y border-black/10">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <p className="text-xs tracking-[0.3em] uppercase text-black/50">
          Process
        </p>
        <h2 className="h-display mt-3 text-3xl md:text-4xl text-black">
          A calm, structured delivery.
        </h2>
        <p className="mt-3 max-w-2xl text-black/60">
          Luxury is the experience as much as the outcome—clear steps, clean
          decisions, no surprises.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-4">
          {steps.map((s, idx) => (
            <div
              key={s.title}
              className="rounded-2xl border border-black/10 bg-white p-6"
            >
              <p className="text-xs text-black/45">0{idx + 1}</p>
              <h3 className="h-display mt-2 text-2xl text-black">{s.title}</h3>
              <p className="mt-3 text-sm text-black/60 leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
