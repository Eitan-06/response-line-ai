import { motion } from 'motion/react';
import { Sparkles, Mic, Zap, Target, RefreshCw, Building2 } from 'lucide-react';

const differentiators = [
  {
    icon: Sparkles,
    title: 'Custom-Built for Your Business',
    description: 'Not a generic chatbot. Every agent is designed around your specific workflows, terminology, and customer journey.',
  },
  {
    icon: Mic,
    title: 'Natural, Human-Like Voice',
    description: 'Advanced voice AI that sounds genuine and professional. Your callers won\'t know they\'re talking to AI unless you tell them.',
  },
  {
    icon: Zap,
    title: 'Fast Setup & Deployment',
    description: 'Live in under 48 hours. We handle all the technical heavy lifting—integration, testing, and go-live.',
  },
  {
    icon: Target,
    title: 'Industry Flexibility',
    description: 'Proven across healthcare, legal, real estate, home services, and more. We adapt to your industry\'s unique needs.',
  },
  {
    icon: RefreshCw,
    title: 'Ongoing Optimization',
    description: 'Your agent improves over time. We analyze performance, update scripts, and refine responses based on real call data.',
  },
  {
    icon: Building2,
    title: 'Enterprise-Grade Reliability',
    description: '99.9% uptime, secure infrastructure, and dedicated support. Built to scale as your call volume grows.',
  },
];

export function WhyUs() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-[#0F1B3D]">Why Response Line AI</h2>
          <p className="text-[#6B7280] max-w-2xl mx-auto">
            We don't just provide software—we partner with you to build AI voice solutions that drive real business results.
          </p>
        </motion.div>

        {/* Differentiators Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentiators.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="h-full bg-gradient-to-br from-[#F5F7FB] to-white rounded-xl p-8 border border-[#E3E7EF] hover:border-[#1E6BFF] transition-all">
                <div className="w-14 h-14 bg-gradient-to-br from-[#1E6BFF] to-[#20C6B7] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="mb-3 text-[#0F1B3D]">{item.title}</h3>
                <p className="text-[#6B7280] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}