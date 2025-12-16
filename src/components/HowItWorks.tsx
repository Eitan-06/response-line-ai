import { motion } from 'motion/react';
import { MessageSquare, Settings, Rocket, BarChart3 } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    title: 'Consultation & Design',
    description: 'We learn your business, call flows, and goals. Together we design a custom script and define your agent\'s role and personality.',
  },
  {
    icon: Settings,
    title: 'Integration & Configuration',
    description: 'We connect your agent to your phone system, CRM, calendar, and tools. All setup is handled by our team—no technical work required from you.',
  },
  {
    icon: Rocket,
    title: 'Deploy & Train',
    description: 'Your AI voice agent goes live, handling real calls. We monitor initial performance and fine-tune responses based on real interactions.',
  },
  {
    icon: BarChart3,
    title: 'Optimize & Scale',
    description: 'We provide ongoing analytics, performance reports, and continuous optimization. As your business grows, your agent evolves with you.',
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-[#0F1B3D]">How It Works</h2>
          <p className="text-[#6B7280] max-w-2xl mx-auto">
            From consultation to deployment, we handle everything. Your AI voice agent is live and answering calls in under 48 hours.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[calc(50%+2rem)] w-[calc(100%-2rem)] h-[2px] bg-gradient-to-r from-[#1E6BFF] via-[#20C6B7] to-transparent opacity-30" />
              )}

              <div className="relative bg-white rounded-xl p-6 border border-[#E3E7EF] hover:border-[#1E6BFF] hover:shadow-lg transition-all">
                {/* Step Number */}
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-br from-[#1E6BFF] to-[#20C6B7] text-white rounded-full flex items-center justify-center text-sm">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 bg-gradient-to-br from-[#1E6BFF]/10 to-[#20C6B7]/10 rounded-xl flex items-center justify-center mb-4">
                  <step.icon className="w-7 h-7 text-[#1E6BFF]" />
                </div>

                {/* Content */}
                <h3 className="mb-3 text-[#0F1B3D]">{step.title}</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}