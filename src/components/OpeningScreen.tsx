'use client';

import { motion } from 'framer-motion';
import { invitation } from '@/config/invitation';

interface OpeningScreenProps {
  onOpen: () => void;
}

export default function OpeningScreen({ onOpen }: OpeningScreenProps) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{
        background: 'linear-gradient(135deg, #fdf9ed 0%, #fef1f7 30%, #fdf9ed 50%, #fce7eb 70%, #fdf9ed 100%)',
      }}
      exit={{
        opacity: 0,
        scale: 1.1,
        transition: { duration: 0.8, ease: 'easeInOut' },
      }}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Top corner floral */}
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #cc2d58, transparent 70%)' }} />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #ddab14, transparent 70%)' }} />
        
        {/* Subtle glow */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(221,171,20,0.12), transparent 70%)' }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Decorative dots pattern */}
        <div className="absolute top-10 left-10 opacity-20">
          <svg width="60" height="60" viewBox="0 0 60 60">
            <circle cx="10" cy="10" r="2" fill="#ddab14" />
            <circle cx="30" cy="10" r="2" fill="#ddab14" />
            <circle cx="50" cy="10" r="2" fill="#ddab14" />
            <circle cx="10" cy="30" r="2" fill="#ddab14" />
            <circle cx="30" cy="30" r="2" fill="#ddab14" />
            <circle cx="50" cy="30" r="2" fill="#ddab14" />
            <circle cx="10" cy="50" r="2" fill="#ddab14" />
            <circle cx="30" cy="50" r="2" fill="#ddab14" />
            <circle cx="50" cy="50" r="2" fill="#ddab14" />
          </svg>
        </div>
        <div className="absolute bottom-10 right-10 opacity-20">
          <svg width="60" height="60" viewBox="0 0 60 60">
            <circle cx="10" cy="10" r="2" fill="#cc2d58" />
            <circle cx="30" cy="10" r="2" fill="#cc2d58" />
            <circle cx="50" cy="10" r="2" fill="#cc2d58" />
            <circle cx="10" cy="30" r="2" fill="#cc2d58" />
            <circle cx="30" cy="30" r="2" fill="#cc2d58" />
            <circle cx="50" cy="30" r="2" fill="#cc2d58" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        {/* Top decorative line */}
        <motion.div
          className="mx-auto mb-6 w-16 h-0.5"
          style={{ background: 'linear-gradient(90deg, transparent, #ddab14, transparent)' }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        />

        {/* Blessing */}
        <motion.p
          className="text-gold-600 text-base md:text-lg tracking-wider mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {invitation.blessing}
        </motion.p>

        {/* Lotus/Om icon */}
        <motion.div
          className="text-5xl mb-6"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          🪷
        </motion.div>

        {/* Main title */}
        <motion.h1
          className="text-maroon-900 text-3xl md:text-5xl font-bold mb-2 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          श्री गणरायाचे
        </motion.h1>
        <motion.h2
          className="text-4xl md:text-6xl font-extrabold mb-8"
          style={{
            background: 'linear-gradient(135deg, #8f1d40, #cc2d58, #7a1b3b)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          आगमन
        </motion.h2>

        {/* Decorative divider */}
        <motion.div
          className="flex items-center justify-center gap-3 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <div className="w-12 h-px bg-gold-400" />
          <span className="text-gold-500 text-xl">✶</span>
          <div className="w-12 h-px bg-gold-400" />
        </motion.div>

        {/* CTA Button */}
        <motion.button
          onClick={onOpen}
          className="premium-btn text-lg md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="आमंत्रण उघडा"
        >
          🙏 आमंत्रण उघडा
        </motion.button>

        {/* Bottom decorative line */}
        <motion.div
          className="mx-auto mt-8 w-16 h-0.5"
          style={{ background: 'linear-gradient(90deg, transparent, #ddab14, transparent)' }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        />
      </div>
    </motion.div>
  );
}
