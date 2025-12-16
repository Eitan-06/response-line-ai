import { motion } from 'motion/react';
import { Phone, Calendar, MessageSquare, CheckCircle, User, Clock } from 'lucide-react';

export function HeroVisual() {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Main Dashboard Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="relative bg-white rounded-2xl shadow-2xl border border-[#E3E7EF] p-8 overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#E3E7EF]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#1E6BFF] to-[#20C6B7] rounded-lg flex items-center justify-center">
              <Phone className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-[#0F1B3D]">AI Voice Agent</div>
              <div className="text-xs text-[#6B7280]">Active Now</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#20C6B7] rounded-full animate-pulse" />
            <span className="text-sm text-[#20C6B7]">Live</span>
          </div>
        </div>

        {/* Incoming Call Card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-gradient-to-br from-[#1E6BFF]/5 to-[#20C6B7]/5 rounded-xl p-4 mb-4 border border-[#1E6BFF]/20"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-[#1E6BFF] to-[#20C6B7] rounded-full flex items-center justify-center flex-shrink-0">
              <Phone className="w-6 h-6 text-white animate-pulse" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[#0F1B3D]">Incoming Call</span>
                <span className="text-xs text-[#6B7280] flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  Just now
                </span>
              </div>
              <p className="text-sm text-[#6B7280] mb-2">+1 (555) 123-4567</p>
              <div className="flex items-center gap-2">
                <div className="w-16 h-1 bg-[#20C6B7] rounded-full">
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#1E6BFF] to-[#20C6B7] rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
                <span className="text-xs text-[#1E6BFF]">AI answering...</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* AI Processing Steps */}
        <div className="space-y-3">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex items-center gap-3 p-3 bg-white rounded-lg border border-[#E3E7EF]"
          >
            <CheckCircle className="w-5 h-5 text-[#20C6B7] flex-shrink-0" />
            <div className="flex-1">
              <div className="text-sm text-[#0F1B3D]">Call answered in 1.2s</div>
              <div className="text-xs text-[#6B7280]">Greeting delivered</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="flex items-center gap-3 p-3 bg-white rounded-lg border border-[#E3E7EF]"
          >
            <MessageSquare className="w-5 h-5 text-[#1E6BFF] flex-shrink-0" />
            <div className="flex-1">
              <div className="text-sm text-[#0F1B3D]">Lead qualification in progress</div>
              <div className="text-xs text-[#6B7280]">Gathering caller information</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            className="flex items-center gap-3 p-3 bg-gradient-to-r from-[#20C6B7]/10 to-transparent rounded-lg border border-[#20C6B7]/30"
          >
            <Calendar className="w-5 h-5 text-[#20C6B7] flex-shrink-0" />
            <div className="flex-1">
              <div className="text-sm text-[#0F1B3D]">Booking appointment</div>
              <div className="text-xs text-[#6B7280]">Checking calendar availability</div>
            </div>
          </motion.div>
        </div>

        {/* Success Indicator */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.3 }}
          className="mt-6 p-4 bg-gradient-to-r from-[#20C6B7]/10 to-[#1E6BFF]/10 rounded-lg border border-[#20C6B7]/30"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#20C6B7] rounded-full flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-sm text-[#0F1B3D]">Appointment Confirmed</div>
              <div className="text-xs text-[#6B7280]">Lead added to CRM • Calendar updated</div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Stats Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border border-[#E3E7EF] max-w-[200px]"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-[#1E6BFF] to-[#20C6B7] rounded-lg flex items-center justify-center">
            <User className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="text-[#0F1B3D]">127</div>
            <div className="text-xs text-[#6B7280]">Calls Today</div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.7 }}
        className="absolute -top-6 -right-6 bg-white rounded-xl shadow-xl p-4 border border-[#E3E7EF] max-w-[200px]"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-[#20C6B7] to-[#1E6BFF] rounded-lg flex items-center justify-center">
            <Calendar className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="text-[#0F1B3D]">42</div>
            <div className="text-xs text-[#6B7280]">Booked This Week</div>
          </div>
        </div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute -z-10 top-1/4 -right-12 w-32 h-32 bg-gradient-to-br from-[#1E6BFF]/20 to-[#20C6B7]/20 rounded-full blur-3xl" />
      <div className="absolute -z-10 bottom-1/4 -left-12 w-32 h-32 bg-gradient-to-br from-[#20C6B7]/20 to-[#1E6BFF]/20 rounded-full blur-3xl" />
    </div>
  );
}
