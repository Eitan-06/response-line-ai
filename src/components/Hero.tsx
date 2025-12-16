import { motion } from 'motion/react';
import { Phone, ArrowRight, Check } from 'lucide-react';
import { HeroVisual } from './HeroVisual';

export function Hero() {
  const scrollToDemo = () => {
    document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#F5F7FB] to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#1E6BFF]/10 to-[#20C6B7]/10 border border-[#20C6B7]/30 text-[#0F1B3D] rounded-full mb-6"
            >
              <Phone className="w-4 h-4 text-[#1E6BFF]" />
              <span>24/7 AI Call Answering Service</span>
            </motion.div>

            {/* H1 - SEO Optimized */}
            <h1 className="mb-6 text-[#0F1B3D]">
              AI Voice Agents That Answer Every Call, Qualify Leads, and Book Appointments
            </h1>

            {/* Subheadline - Problem & Solution */}
            <p className="text-[#6B7280] mb-8 max-w-2xl mx-auto lg:mx-0 text-lg leading-relaxed">
              Stop losing business to missed calls and after-hours gaps. Our AI phone answering service deploys intelligent voice agents that handle customer calls 24/7—qualifying leads, scheduling appointments, answering FAQs, and routing urgent requests to your team.
            </p>

            {/* Value Props */}
            <div className="mb-8 space-y-3">
              <div className="flex items-center gap-3 text-[#0F1B3D] justify-center lg:justify-start">
                <div className="w-5 h-5 bg-gradient-to-br from-[#1E6BFF] to-[#20C6B7] rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span>Never miss a customer call again</span>
              </div>
              <div className="flex items-center gap-3 text-[#0F1B3D] justify-center lg:justify-start">
                <div className="w-5 h-5 bg-gradient-to-br from-[#1E6BFF] to-[#20C6B7] rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span>Automated lead qualification and appointment booking</span>
              </div>
              <div className="flex items-center gap-3 text-[#0F1B3D] justify-center lg:justify-start">
                <div className="w-5 h-5 bg-gradient-to-br from-[#1E6BFF] to-[#20C6B7] rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span>Live in 48 hours with full CRM integration</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={scrollToDemo}
                className="px-8 py-4 bg-[#1E6BFF] text-white rounded-lg hover:bg-[#1A5BE0] transition-colors flex items-center justify-center gap-2 shadow-lg shadow-[#1E6BFF]/20"
              >
                Book a Demo
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-white text-[#0F1B3D] rounded-lg hover:bg-[#F5F7FB] transition-colors border border-[#E3E7EF]"
              >
                See How It Works
              </motion.button>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-[#E3E7EF]"
            >
              <div>
                <div className="text-[#1E6BFF] mb-1">24/7</div>
                <div className="text-[#6B7280] text-sm">AI Coverage</div>
              </div>
              <div>
                <div className="text-[#1E6BFF] mb-1">99.9%</div>
                <div className="text-[#6B7280] text-sm">Uptime</div>
              </div>
              <div>
                <div className="text-[#1E6BFF] mb-1">&lt;48hrs</div>
                <div className="text-[#6B7280] text-sm">Setup</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Product Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}