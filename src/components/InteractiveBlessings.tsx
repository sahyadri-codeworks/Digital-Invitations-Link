'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { sound } from '@/utils/audio';

interface FallingFlower {
  id: number;
  x: number;
  emoji: string;
  size: number;
  rotation: number;
  duration: number;
}

const flowerEmojis = ['🌸', '🌺', '🌼', '🏵️', '🌷', '✨', '💐'];

export default function InteractiveBlessings() {
  const [diyaLit, setDiyaLit] = useState(true);
  const [showerCount, setShowerCount] = useState(0);
  const [fallingFlowers, setFallingFlowers] = useState<FallingFlower[]>([]);
  const [showBlessingToast, setShowBlessingToast] = useState(false);

  const toggleDiya = () => {
    sound.playTempleBell();
    const nextState = !diyaLit;
    setDiyaLit(nextState);
    if (nextState) {
      setShowBlessingToast(true);
      setTimeout(() => setShowBlessingToast(false), 3500);
    }
  };

  const triggerFlowerShower = useCallback(() => {
    sound.playFlowerChime();
    setShowerCount((prev) => prev + 1);

    const newFlowers: FallingFlower[] = Array.from({ length: 18 }, (_, i) => ({
      id: Date.now() + i,
      x: Math.random() * 90 + 5, // 5% to 95% width
      emoji: flowerEmojis[Math.floor(Math.random() * flowerEmojis.length)],
      size: Math.floor(Math.random() * 16) + 20, // 20px - 36px
      rotation: Math.floor(Math.random() * 360),
      duration: Math.random() * 1.5 + 2.5, // 2.5s - 4s
    }));

    setFallingFlowers((prev) => [...prev, ...newFlowers]);

    // Clean up flowers after animation
    setTimeout(() => {
      setFallingFlowers((prev) => prev.filter((f) => !newFlowers.some((nf) => nf.id === f.id)));
    }, 4500);
  }, []);

  return (
    <div className="relative z-20 my-8 px-4">
      {/* Floating flower rain layer */}
      <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
        {fallingFlowers.map((flower) => (
          <motion.div
            key={flower.id}
            className="absolute -top-10 select-none"
            style={{ left: `${flower.x}%`, fontSize: `${flower.size}px` }}
            initial={{ y: -50, rotate: 0, opacity: 1 }}
            animate={{
              y: '110vh',
              rotate: flower.rotation + 360,
              opacity: [1, 1, 0.8, 0],
            }}
            transition={{
              duration: flower.duration,
              ease: 'easeIn',
            }}
          >
            {flower.emoji}
          </motion.div>
        ))}
      </div>

      {/* Interactive Controls Bar */}
      <div className="max-w-md mx-auto p-4 rounded-3xl bg-gradient-to-r from-cream-100/95 via-rose-50/90 to-cream-100/95 border-2 border-gold-300 shadow-xl backdrop-blur-md">
        <div className="flex items-center justify-around gap-3">
          {/* Diya Lighting Button */}
          <motion.button
            onClick={toggleDiya}
            className={`flex-1 py-3 px-4 rounded-2xl flex flex-col items-center justify-center transition-all ${
              diyaLit
                ? 'bg-gradient-to-b from-amber-100 to-amber-200/90 border border-amber-400 shadow-inner'
                : 'bg-white/80 hover:bg-white border border-gray-200'
            }`}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            <div className="relative">
              <span className="text-3xl filter drop-shadow">🪔</span>
              {diyaLit && (
                <motion.div
                  className="absolute -top-1 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-yellow-400 blur-sm pointer-events-none"
                  animate={{ scale: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 1.2, repeat: Infinity }}
                />
              )}
            </div>
            <span className="text-xs font-bold text-maroon-900 mt-1.5">
              {diyaLit ? 'दीप प्रज्वलित आहे' : 'दीप प्रज्वलन करा'}
            </span>
            <span className="text-[10px] text-maroon-600">
              {diyaLit ? '✨ आशीर्वाद प्राप्त' : 'स्पर्श करा'}
            </span>
          </motion.button>

          {/* Flower Shower Button */}
          <motion.button
            onClick={triggerFlowerShower}
            className="flex-1 py-3 px-4 rounded-2xl bg-gradient-to-r from-rani-pink-600 via-maroon-700 to-rani-pink-600 text-white flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition-all"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            <span className="text-3xl animate-bounce">🌸</span>
            <span className="text-xs font-bold text-white mt-1.5">
              पुष्पवृष्टी करा
            </span>
            <span className="text-[10px] text-pink-100">
              {showerCount > 0 ? `${showerCount} वेळा उधळण!` : 'बाप्पांवर फुले वाहा'}
            </span>
          </motion.button>
        </div>

        {/* Diya Blessing Toast */}
        <AnimatePresence>
          {showBlessingToast && (
            <motion.div
              className="mt-3 py-2 px-3 rounded-xl bg-amber-50 border border-gold-400 text-center"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <p className="text-xs font-semibold text-maroon-800">
                ✨ शुभं करोति कल्याणम् आरोग्यम् धनसंपदा ✨
              </p>
              <p className="text-[11px] text-maroon-600 mt-0.5">
                बाप्पांचे कृपाछत्र आपल्यावर सदैव राहो!
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
