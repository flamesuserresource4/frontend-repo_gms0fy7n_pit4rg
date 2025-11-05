import { Moon, Sun, Headphones, PenTool } from 'lucide-react';

const modes = [
  {
    icon: Moon,
    name: 'Deep Focus',
    desc: 'Hide all but the essentials. Ideal for studying or flow work.'
  },
  {
    icon: Headphones,
    name: 'Meditation',
    desc: 'Timer-forward, gentle visuals, and breath-friendly soundscapes.'
  },
  {
    icon: PenTool,
    name: 'Writing',
    desc: 'Distraction-free notes with optional type‑sounds and mono fonts.'
  },
  {
    icon: Sun,
    name: 'Light Session',
    desc: 'Short sessions for quick resets between tasks.'
  }
];

export default function ModeCards() {
  return (
    <section id="modes" className="w-full bg-gradient-to-b from-black to-[#070707] py-16 text-white md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="text-2xl font-semibold md:text-3xl">Choose your sanctuary</h2>
            <p className="mt-2 max-w-2xl text-white/70">
              Pick a mode that matches your intention. Each one prioritizes clarity, quiet, and just‑enough tools.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {modes.map(({ icon: Icon, name, desc }) => (
            <div key={name} className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-yellow-300/30 hover:bg-white/10">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-yellow-400/10 text-yellow-300 ring-1 ring-inset ring-yellow-300/30">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mb-1 text-lg font-medium">{name}</h3>
              <p className="text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
