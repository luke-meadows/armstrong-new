export default function LogosStrip() {
  return (
    <section className="border-b border-black/10 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-black/60">
            Trusted for premium residential delivery.{' '}
            <span className="text-black/80">
              Selected partners & accreditations
            </span>
          </p>
          <div className="flex flex-wrap gap-2 text-xs text-black/55">
            {['NHBC', 'FMB', 'CHAS', 'TrustMark', 'ISO 9001'].map((t) => (
              <span
                key={t}
                className="rounded-full border border-black/10 bg-white px-3 py-1"
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
