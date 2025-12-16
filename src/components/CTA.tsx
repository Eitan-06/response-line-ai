import { motion } from 'motion/react';
import { ArrowRight, Calendar, Mail } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function CTA() {
  return (
    <section id="cta-section" className="py-20 lg:py-32 bg-gradient-to-br from-[#1E6BFF] via-[#1A5BE0] to-[#20C6B7] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-white mb-6">
              Ready to Never Miss Another Call?
            </h2>
            <p className="text-white/90 mb-8 text-lg leading-relaxed">
              See how Response Line AI can transform your inbound call experience. Book a demo and we'll show you exactly how our voice agents work for businesses like yours.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-white">
                <div className="w-6 h-6 bg-[#20C6B7] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>15-minute personalized demo</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <div className="w-6 h-6 bg-[#20C6B7] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Custom pricing based on your call volume</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <div className="w-6 h-6 bg-[#20C6B7] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>No long-term contracts required</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="mailto:hello@responselineai.com"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-white text-[#1E6BFF] rounded-lg hover:bg-[#F5F7FB] transition-colors flex items-center justify-center gap-2 shadow-xl"
              >
                <Calendar className="w-5 h-5" />
                Book a Demo
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="mailto:hello@responselineai.com"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-[#20C6B7] text-white rounded-lg hover:bg-[#18B0A4] transition-colors flex items-center justify-center gap-2 border border-white/20"
              >
                <Mail className="w-5 h-5" />
                Contact Sales
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758518730384-be3d205838e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGhhbmRzaGFrZSUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjU4MzI5ODl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Professional partnership"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}