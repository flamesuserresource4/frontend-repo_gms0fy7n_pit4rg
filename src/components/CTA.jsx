export default function CTA() {
  return (
    <section className="relative w-full bg-black py-16 text-white md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(135deg,rgba(255,230,130,0.08),rgba(255,255,255,0.02))] p-8 md:p-12">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-2xl font-semibold md:text-3xl">Create your sanctuary ritual</h3>
              <p className="mt-2 max-w-xl text-white/70">
                Set your duration, choose your essentials, and enter a calmer phone experience. You can always keep one contact for emergencies.
              </p>
            </div>
            <div className="flex gap-3">
              <a href="#" className="group inline-flex items-center gap-2 rounded-full bg-yellow-400 px-6 py-3 font-medium text-black transition hover:bg-yellow-300">
                Try a 25‑minute Focus
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5 transition-transform group-hover:translate-x-0.5"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
              <a href="#features" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 font-medium text-white/90 backdrop-blur-sm transition hover:bg-white/10">
                Explore features
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
