'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { invitation } from '@/config/invitation';
import { sound } from '@/utils/audio';

interface OpeningScreenProps {
  onOpen: () => void;
}

export default function OpeningScreen({ onOpen }: OpeningScreenProps) {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpenInvitation = () => {
    if (isOpening) return;
    setIsOpening(true);
    sound.playTempleBell();

    // Trigger full opening sequence
    setTimeout(() => {
      onOpen();
    }, 1100);
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at center, #3b0918 0%, #1f040c 70%, #120207 100%)',
      }}
      exit={{
        opacity: 0,
        scale: 1.05,
        transition: { duration: 0.8, ease: 'easeInOut' },
      }}
    >
      {/* Subtle floating golden dust particles in background */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-amber-300"
            style={{
              width: Math.random() * 4 + 2 + 'px',
              height: Math.random() * 4 + 2 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 3 + 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Royal Indian Envelope Card */}
      <motion.div
        className="relative w-full max-w-sm sm:max-w-md rounded-3xl p-1 shadow-2xl cursor-pointer"
        style={{
          background: 'linear-gradient(135deg, #ddab14 0%, #fdf5b7 35%, #bf850e 70%, #fdf5b7 100%)',
          perspective: '1200px',
        }}
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleOpenInvitation}
      >
        {/* Envelope Body */}
        <div
          className="relative rounded-[22px] px-6 py-10 sm:py-12 text-center overflow-hidden"
          style={{
            background: 'linear-gradient(160deg, #7a1b3b 0%, #520e23 60%, #3e0717 100%)',
            boxShadow: 'inset 0 0 30px rgba(0,0,0,0.6)',
          }}
        >
          {/* Ornate Gold Corner Borders */}
          <div className="absolute top-3 left-3 text-gold-400 text-lg opacity-80">⚜</div>
          <div className="absolute top-3 right-3 text-gold-400 text-lg opacity-80">⚜</div>
          <div className="absolute bottom-3 left-3 text-gold-400 text-lg opacity-80">⚜</div>
          <div className="absolute bottom-3 right-3 text-gold-400 text-lg opacity-80">⚜</div>

          {/* Envelope Top Flap Simulation */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-16 origin-top"
            style={{
              background: 'linear-gradient(to bottom, rgba(221, 171, 20, 0.2), transparent)',
              borderBottom: '1px solid rgba(221, 171, 20, 0.4)',
            }}
            animate={isOpening ? { rotateX: -120, opacity: 0 } : {}}
            transition={{ duration: 0.7 }}
          />

          {/* Auspicious Blessing Heading */}
          <p className="text-gold-300 text-sm sm:text-base font-semibold tracking-widest mb-3">
            {invitation.blessing}
          </p>

          <div className="w-20 h-0.5 mx-auto mb-6 bg-gradient-to-r from-transparent via-gold-400 to-transparent" />

          {/* Invitation Title */}
          <h1 className="text-2xl sm:text-3xl font-extrabold text-cream-100 tracking-wide mb-1">
            श्री गणरायाचे
          </h1>
          <h2
            className="text-4xl sm:text-5xl font-black mb-8 tracking-wider"
            style={{
              background: 'linear-gradient(135deg, #ffe082 0%, #ffca28 50%, #ffd54f 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 2px 8px rgba(221,171,20,0.4))',
            }}
          >
            आगमन
          </h2>

          {/* 3D Royal Gold Wax Seal (मोहर) */}
          <div className="relative my-4 flex justify-center items-center">
            {/* Glowing aura around seal */}
            <motion.div
              className="absolute w-28 h-28 rounded-full bg-gold-400/25 blur-md"
              animate={{
                scale: isOpening ? [1, 2.5] : [1, 1.25, 1],
                opacity: isOpening ? [0.4, 0] : [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: isOpening ? 0.8 : 2.5,
                repeat: isOpening ? 0 : Infinity,
              }}
            />

            {/* Wax Seal Button */}
            <motion.div
              className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full flex flex-col items-center justify-center shadow-2xl border-4 border-amber-300"
              style={{
                background: 'radial-gradient(circle at 35% 35%, #ffd54f 0%, #d4a017 45%, #8f6500 100%)',
                boxShadow: '0 8px 25px rgba(0,0,0,0.7), inset 0 2px 4px rgba(255,255,255,0.8), inset 0 -3px 6px rgba(0,0,0,0.5)',
              }}
              animate={isOpening ? { scale: [1, 1.3, 0], rotate: 45 } : { scale: [1, 1.05, 1] }}
              transition={{
                duration: isOpening ? 0.7 : 3,
                repeat: isOpening ? 0 : Infinity,
                ease: 'easeInOut',
              }}
            >
              <span className="text-3xl sm:text-4xl filter drop-shadow">🪷</span>
              <span className="text-[9px] sm:text-[10px] font-black tracking-widest text-maroon-950 uppercase mt-0.5">
                उघडा
              </span>
            </motion.div>
          </div>

          {/* Instructions */}
          <motion.div
            className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black/30 border border-gold-400/40 text-gold-200 text-xs sm:text-sm font-medium"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span>🙏</span>
            <span>आमंत्रण उघडण्यासाठी येथे स्पर्श करा</span>
            <span>🙏</span>
          </motion.div>

          <p className="text-[11px] text-rose-200/60 mt-4 tracking-wider">
            {invitation.host}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
