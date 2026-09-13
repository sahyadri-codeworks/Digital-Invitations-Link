'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="py-12 md:py-16 px-4 text-center" aria-label="तळटीप">
      <motion.div
        className="max-w-lg mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-30px' }}
        transition={{ duration: 0.6 }}
      >
        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-16 h-px bg-gold-400/50" />
          <span className="text-gold-500">🌺</span>
          <div className="w-16 h-px bg-gold-400/50" />
        </div>

        <p className="text-maroon-600 text-base md:text-lg mb-4 tracking-wide">
          ॥ श्रद्धा ॥ प्रेम ॥ परिवार ॥ सदैव बाप्पांचे साथ ॥
        </p>

        <motion.p
          className="text-2xl md:text-3xl font-bold text-maroon-900 mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          🙏 गणपती बाप्पा मोरया 🙏
        </motion.p>

        {/* Bottom lotus decoration */}
        <div className="flex items-center justify-center gap-2 opacity-40">
          <span>🌸</span>
          <span>🌺</span>
          <span>🌸</span>
        </div>

        <p className="text-xs text-maroon-300 mt-8">
          मंगलमय आमंत्रण
        </p>
      </motion.div>
    </footer>
  );
}
