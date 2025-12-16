import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { Capabilities } from './components/Capabilities';
import { WhyUs } from './components/WhyUs';
import { UseCases } from './components/UseCases';
import { Trust } from './components/Trust';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <HowItWorks />
      <Capabilities />
      <WhyUs />
      <UseCases />
      <Trust />
      <CTA />
      <Footer />
    </div>
  );
}
