export default function Footer() {
  return (
    <footer id="contact" className="bg-white border-t border-black/10">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="text-xs tracking-[0.3em] uppercase text-black/50">
              Let’s talk
            </p>
            <h2 className="h-display mt-3 text-3xl md:text-4xl text-black">
              Start a project enquiry
            </h2>
            <p className="mt-4 text-black/60">
              Share your location, timeline, and a few photos/plans. We’ll come
              back with next steps.
            </p>

            <div className="mt-6 space-y-2 text-sm text-black/60">
              <div>
                <span className="text-black/80">Phone:</span> 0123 456 789
              </div>
              <div>
                <span className="text-black/80">Email:</span>{' '}
                hello@yourstudio.com
              </div>
              <div>
                <span className="text-black/80">Area:</span> Midlands •
                Cotswolds • London
              </div>
            </div>
          </div>

          <div className="md:col-span-7">
            <form className="rounded-2xl border border-black/10 bg-white p-6 md:p-8">
              <div className="grid gap-4 md:grid-cols-2">
                <input
                  className="rounded-xl bg-white border border-black/10 px-4 py-3 text-sm outline-none focus:border-black/30"
                  placeholder="Name"
                />
                <input
                  className="rounded-xl bg-white border border-black/10 px-4 py-3 text-sm outline-none focus:border-black/30"
                  placeholder="Email"
                />
                <input
                  className="rounded-xl bg-white border border-black/10 px-4 py-3 text-sm outline-none focus:border-black/30 md:col-span-2"
                  placeholder="Project location"
                />
                <textarea
                  className="rounded-xl bg-white border border-black/10 px-4 py-3 text-sm outline-none focus:border-black/30 md:col-span-2"
                  rows={5}
                  placeholder="Tell us about your project..."
                />
              </div>
              <button
                type="button"
                className="mt-5 w-full rounded-xl bg-black py-3 text-sm font-medium text-white hover:bg-black/90 transition"
              >
                Send enquiry
              </button>
              <p className="mt-3 text-xs text-black/45">
                Demo form (wire to email/API later).
              </p>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}
