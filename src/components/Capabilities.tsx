import { motion } from 'motion/react';
import { Phone, UserCheck, Calendar, MessageCircle, AlertCircle, Workflow } from 'lucide-react';

const capabilities = [
  {
    icon: Phone,
    title: 'Answer Calls 24/7',
    description: 'Never miss a call again. Your AI agent picks up instantly, any time of day or night, even on holidays and weekends.',
  },
  {
    icon: UserCheck,
    title: 'Qualify Leads',
    description: 'Ask the right questions to identify high-intent prospects. Route qualified leads to your team and filter out noise automatically.',
  },
  {
    icon: Calendar,
    title: 'Book Appointments',
    description: 'Sync with your calendar in real-time. Your agent schedules meetings, sends confirmations, and handles rescheduling requests.',
  },
  {
    icon: MessageCircle,
    title: 'Handle FAQs',
    description: 'Answer common questions instantly with custom responses tailored to your business. Free up your team for complex tasks.',
  },
  {
    icon: AlertCircle,
    title: 'Escalate Urgent Calls',
    description: 'Smart routing identifies priority situations and immediately connects callers to the right person on your team.',
  },
  {
    icon: Workflow,
    title: 'Integrate with Your Tools',
    description: 'Seamlessly connect with your CRM, calendar, email, SMS, and business systems. Data flows where you need it.',
  },
];

export function Capabilities() {
  return (
    <section className="py-20 lg:py-32 bg-[#F5F7FB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-[#0F1B3D]">What Our AI Voice Agents Can Do</h2>
          <p className="text-[#6B7280] max-w-2xl mx-auto">
            Powered by advanced AI, our voice agents handle every aspect of your inbound calls with natural conversation and intelligent routing.
          </p>
        </motion.div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-xl p-8 border border-[#E3E7EF] hover:border-[#20C6B7] hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[#1E6BFF] to-[#20C6B7] rounded-lg flex items-center justify-center mb-6">
                <capability.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="mb-3 text-[#0F1B3D]">{capability.title}</h3>
              <p className="text-[#6B7280] leading-relaxed">
                {capability.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}