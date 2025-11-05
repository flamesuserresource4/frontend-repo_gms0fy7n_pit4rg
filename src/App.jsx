import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import ModeCards from './components/ModeCards';
import CTA from './components/CTA';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Hero />
      <FeatureGrid />
      <ModeCards />
      <CTA />
      <footer className="w-full bg-black pb-16 pt-8 text-center text-sm text-white/60">
        Built for calmer, more intentional tech moments.
      </footer>
    </div>
  );
}
