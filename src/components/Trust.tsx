import { motion } from 'motion/react';
import { Shield, Clock, Sliders, Lock, Quote } from 'lucide-react';

const trustFactors = [
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level encryption, SOC 2 compliant infrastructure, and secure data handling protocols.',
  },
  {
    icon: Clock,
    title: '99.9% Uptime Guarantee',
    description: 'Redundant systems and 24/7 monitoring ensure your calls are always answered, even during peak traffic.',
  },
  {
    icon: Sliders,
    title: 'Fully Customizable',
    description: 'Tailored scripts, custom integrations, and flexible workflows built specifically for your business needs.',
  },
  {
    icon: Lock,
    title: 'Privacy First',
    description: 'Your data stays yours. We never share customer information and comply with all industry regulations.',
  },
];

const testimonials = [
  {
    quote: "Response Line AI transformed how we handle inbound calls. We went from missing 30% of calls after hours to capturing every single lead. The ROI was immediate.",
    author: "Sarah Chen",
    role: "Operations Director",
    company: "Premier Home Services",
  },
  {
    quote: "The voice agent sounds so natural that most callers don't realize it's AI. It's handling our appointment scheduling flawlessly and integrating perfectly with our CRM.",
    author: "Michael Torres",
    role: "Practice Manager",
    company: "Metro Dental Group",
  },
  {
    quote: "Setup took less than 48 hours and the ongoing support has been exceptional. This technology pays for itself within the first month just in recovered leads alone.",
    author: "Jennifer Williams",
    role: "Founder & CEO",
    company: "Williams Law Firm",
  },
];

export function Trust() {
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
          <h2 className="mb-4 text-[#0F1B3D]">Built on Trust & Reliability</h2>
          <p className="text-[#6B7280] max-w-2xl mx-auto">
            Security, uptime, and customization you can count on. We're committed to delivering enterprise-grade solutions with personalized support.
          </p>
        </motion.div>

        {/* Trust Factors */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {trustFactors.map((factor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#1E6BFF]/10 to-[#20C6B7]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <factor.icon className="w-8 h-8 text-[#1E6BFF]" />
              </div>
              <h3 className="mb-2 text-[#0F1B3D]">{factor.title}</h3>
              <p className="text-[#6B7280] text-sm leading-relaxed">
                {factor.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="mb-4 text-[#0F1B3D]">What Our Clients Say</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#F5F7FB] rounded-xl p-8 border border-[#E3E7EF]"
              >
                <Quote className="w-8 h-8 text-[#1E6BFF] mb-4" />
                <p className="text-[#0F1B3D] mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div>
                  <div className="text-[#0F1B3D]">{testimonial.author}</div>
                  <div className="text-sm text-[#6B7280]">{testimonial.role}</div>
                  <div className="text-sm text-[#1E6BFF]">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}