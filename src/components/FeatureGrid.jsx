import { Timer, Headphones, Phone, Notebook, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: Timer,
    title: 'Session Timer',
    desc: 'Set a focused duration with gentle start and end cues.'
  },
  {
    icon: Notebook,
    title: 'Notes Only',
    desc: 'Capture thoughts without the pull of endless apps.'
  },
  {
    icon: Headphones,
    title: 'Calming Audio',
    desc: 'Play soothing soundscapes or minimal music playlists.'
  },
  {
    icon: Phone,
    title: 'Emergency Contact',
    desc: 'Keep one trusted contact available for what matters.'
  },
  {
    icon: ShieldCheck,
    title: 'UI Lockdown',
    desc: 'A serene, minimalist interface replaces the noisy home screen.'
  }
];

export default function FeatureGrid() {
  return (
    <section id="features" className="relative w-full bg-black py-16 text-white md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-4 text-2xl font-semibold md:text-3xl">Make space for what matters</h2>
        <p className="mb-10 max-w-2xl text-white/70">
          Digital Sanctuary transforms your device into a calm, intentional environment. Choose just a few essential tools and silence everything else for a set time.
        </p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-yellow-400/10 text-yellow-300 ring-1 ring-inset ring-yellow-300/30">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mb-1 text-lg font-medium">{title}</h3>
              <p className="text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
