export default function ProofBar() {
  return (
    <section className="border-y border-white/10 bg-[rgb(var(--card))]">
      <div className="mx-auto max-w-6xl px-4 py-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-black/70">
            Trusted for premium residential delivery across:{' '}
            <span className="text-black/90">Warwickshire</span>,{' '}
            <span className="text-black/90">West Midlands</span>,{' '}
            <span className="text-black/90">Cotswolds</span>
          </p>
          <div className="flex flex-wrap gap-2 text-xs text-black/60">
            {[
              'Architectural Build',
              'Interiors + Joinery',
              'Complex Renovations',
              'New Builds',
            ].map((t) => (
              <span
                key={t}
                className="rounded-full border border-black/10 bg-black/5 px-3 py-1"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
