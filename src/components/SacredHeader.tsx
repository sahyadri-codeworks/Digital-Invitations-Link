'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { sound } from '@/utils/audio';

export default function SacredHeader() {
  const [bellRinging, setBellRinging] = useState<number | null>(null);

  const ringBell = (index: number) => {
    setBellRinging(index);
    sound.playTempleBell();
    setTimeout(() => setBellRinging(null), 1500);
  };

  return (
    <header className="relative pt-6 pb-4 px-4 text-center select-none">
      {/* Decorative hanging brass temple bells */}
      <div className="flex justify-between items-start max-w-lg mx-auto px-6 mb-3">
        {[0, 1, 2].map((idx) => {
          const isRinging = bellRinging === idx;
          return (
            <motion.div
              key={idx}
              className="flex flex-col items-center cursor-pointer group"
              onClick={() => ringBell(idx)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              title="घंटी वाजवा"
            >
              {/* Hanging thread/chain */}
              <div className="w-0.5 h-8 bg-gradient-to-b from-amber-600 to-yellow-500 shadow-sm" />

              {/* Temple bell icon */}
              <motion.div
                className="text-3xl drop-shadow-md relative"
                animate={
                  isRinging
                    ? { rotate: [0, -22, 22, -14, 14, -6, 6, 0] }
                    : { rotate: [0, -3, 3, 0] }
                }
                transition={
                  isRinging
                    ? { duration: 1.2, ease: 'easeInOut' }
                    : { duration: 4, repeat: Infinity, ease: 'easeInOut', delay: idx * 0.7 }
                }
                style={{ transformOrigin: 'top center' }}
              >
                🔔
                {/* Sound wave ripple effect when clicked */}
                {isRinging && (
                  <motion.div
                    className="absolute inset-0 rounded-full border border-amber-400"
                    initial={{ scale: 1, opacity: 0.8 }}
                    animate={{ scale: 2.2, opacity: 0 }}
                    transition={{ duration: 0.8 }}
                  />
                )}
              </motion.div>
              <span className="text-[10px] text-maroon-500 opacity-60 group-hover:opacity-100 transition-opacity mt-1">
                वाजवा
              </span>
            </motion.div>
          );
        })}
      </div>

      {/* Traditional Marigold Flower Toran (झेंडूचे तोरण) */}
      <div className="flex justify-center items-center gap-1.5 opacity-90 my-2">
        {['🌼', '🏵️', '🌸', '🏵️', '🌼', '🏵️', '🌸', '🏵️', '🌼'].map((flower, i) => (
          <span key={i} className="text-base sm:text-lg animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}>
            {flower}
          </span>
        ))}
      </div>

      {/* Auspicious Sanskrit Shloka */}
      <motion.div
        className="max-w-xl mx-auto mt-3 px-5 py-3 rounded-2xl bg-gradient-to-r from-amber-50/80 via-white/90 to-amber-50/80 border border-gold-300/70 shadow-sm"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-xs sm:text-sm font-semibold text-maroon-800 tracking-wide leading-relaxed">
          ॥ वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ ।
        </p>
        <p className="text-xs sm:text-sm font-semibold text-maroon-800 tracking-wide leading-relaxed">
          निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥
        </p>
      </motion.div>
    </header>
  );
}
