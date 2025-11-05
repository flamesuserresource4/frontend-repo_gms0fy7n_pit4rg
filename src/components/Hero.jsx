import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/qMOKV671Z1CM9yS7/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* Subtle gradient vignettes that don't block interaction */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,230,130,0.08),transparent_60%)]" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-24 pb-16 text-center md:pt-32">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-widest text-white/80 backdrop-blur-sm">
          Digital Sanctuary
        </span>
        <h1 className="mb-4 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
          A calm, intentional space on your phone
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-white/80 md:text-lg">
          Slip into a distraction‑free mode that replaces noise with focus. Keep only what matters: notes, a meditation timer, calming music, and an emergency contact.
        </p>
        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <a href="#modes" className="group inline-flex items-center gap-2 rounded-full bg-yellow-400 px-6 py-3 font-medium text-black transition hover:bg-yellow-300">
            Start a Sanctuary Session
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5 transition-transform group-hover:translate-x-0.5"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
          <a href="#features" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 font-medium text-white/90 backdrop-blur-sm transition hover:bg-white/10">
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
}
