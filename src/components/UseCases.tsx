import { motion } from 'motion/react';
import { Wrench, Heart, Scale, Home, TrendingUp, Briefcase } from 'lucide-react';

const useCases = [
  {
    icon: Wrench,
    industry: 'Home Services',
    description: 'HVAC, plumbing, landscaping, and contractors',
    benefits: 'Book service calls, answer pricing questions, schedule emergency repairs 24/7',
  },
  {
    icon: Heart,
    industry: 'Healthcare',
    description: 'Medical practices, dental offices, wellness clinics',
    benefits: 'Appointment scheduling, patient intake, insurance verification, after-hours triage',
  },
  {
    icon: Scale,
    industry: 'Legal Services',
    description: 'Law firms, attorneys, legal consultants',
    benefits: 'Qualify potential clients, schedule consultations, gather case details, route urgent matters',
  },
  {
    icon: Home,
    industry: 'Real Estate',
    description: 'Agents, brokerages, property management',
    benefits: 'Lead capture, showing requests, property inquiries, tenant support',
  },
  {
    icon: TrendingUp,
    industry: 'Sales Teams',
    description: 'B2B sales, agencies, service providers',
    benefits: 'Inbound lead qualification, demo scheduling, customer support, FAQ handling',
  },
  {
    icon: Briefcase,
    industry: 'Professional Services',
    description: 'Consulting, accounting, coaching, agencies',
    benefits: 'Client intake, discovery calls, meeting coordination, service inquiries',
  },
];

export function UseCases() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-[#F5F7FB] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-[#0F1B3D]">Built for Every Industry</h2>
          <p className="text-[#6B7280] max-w-2xl mx-auto">
            Response Line AI adapts to your industry's unique workflows. From healthcare to home services, we've helped businesses across sectors capture more leads and deliver better customer experiences.
          </p>
        </motion.div>

        {/* Use Cases Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl border border-[#E3E7EF] hover:border-[#20C6B7] hover:shadow-xl transition-all overflow-hidden group"
            >
              <div className="p-8">
                <div className="w-12 h-12 bg-gradient-to-br from-[#1E6BFF]/10 to-[#20C6B7]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gradient-to-br group-hover:from-[#1E6BFF] group-hover:to-[#20C6B7] transition-all">
                  <useCase.icon className="w-6 h-6 text-[#1E6BFF] group-hover:text-white transition-colors" />
                </div>
                <h3 className="mb-2 text-[#0F1B3D]">{useCase.industry}</h3>
                <p className="text-[#6B7280] text-sm mb-4">{useCase.description}</p>
                <div className="pt-4 border-t border-[#E3E7EF]">
                  <p className="text-sm text-[#0F1B3D] leading-relaxed">
                    {useCase.benefits}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}