'use client';

import { motion } from 'framer-motion';
import { invitation } from '@/config/invitation';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function EventDetails() {
  return (
    <section className="py-12 md:py-16 px-4" aria-label="कार्यक्रम तपशील">
      <div className="max-w-2xl mx-auto">
        {/* Section heading */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-maroon-900 mb-3">
            {invitation.title}
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-maroon-700 text-base md:text-lg leading-relaxed max-w-md mx-auto">
            {invitation.description}
          </p>
        </motion.div>

        {/* Info cards */}
        <motion.div
          className="grid gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {/* Date card */}
          <motion.div className="info-card" variants={itemVariants}>
            <div className="text-3xl mb-3">📅</div>
            <h3 className="text-sm text-maroon-500 font-medium mb-1 tracking-wider">
              आगमन दिनांक
            </h3>
            <p className="text-2xl md:text-3xl font-bold text-maroon-900 mb-1">
              {invitation.dateDisplay}
            </p>
            <p className="text-maroon-600 text-lg">({invitation.day})</p>
          </motion.div>

          {/* Location card */}
          <motion.div className="info-card" variants={itemVariants}>
            <div className="text-3xl mb-3">📍</div>
            <h3 className="text-sm text-maroon-500 font-medium mb-1 tracking-wider">
              स्थळ
            </h3>
            <p className="text-lg md:text-xl font-semibold text-maroon-900 mb-2">
              {invitation.venue}
            </p>
            <p className="text-maroon-600 text-base leading-relaxed whitespace-pre-line">
              {invitation.fullAddress}
            </p>
          </motion.div>

          {/* Host card */}
          <motion.div className="info-card" variants={itemVariants}>
            <h3 className="text-sm text-maroon-500 font-medium mb-2 tracking-wider">
              निमंत्रक
            </h3>
            <p className="text-2xl md:text-3xl font-bold text-maroon-900">
              {invitation.host}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
