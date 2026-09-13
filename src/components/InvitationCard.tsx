'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { invitation } from '@/config/invitation';

export default function InvitationCard() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const openLightbox = useCallback(() => setIsLightboxOpen(true), []);
  const closeLightbox = useCallback(() => setIsLightboxOpen(false), []);

  return (
    <section className="py-10 md:py-16 px-4 floral-pattern" aria-label="आमंत्रण पत्रिका">
      <div className="max-w-lg mx-auto">
        {/* Card frame */}
        <motion.div
          className="relative rounded-2xl overflow-hidden card-glow"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          {/* Gold border frame */}
          <div className="p-1 rounded-2xl" style={{
            background: 'linear-gradient(135deg, #ddab14, #f3d650, #ddab14, #98610f, #ddab14)',
          }}>
            <div className="rounded-xl overflow-hidden bg-cream-50">
              <Image
                src={invitation.invitationImage}
                alt="श्री गणरायाचे आगमन - आमंत्रण पत्रिका"
                width={800}
                height={1200}
                className="w-full h-auto"
                priority
                quality={90}
                sizes="(max-width: 768px) 96vw, 500px"
              />
            </div>
          </div>
        </motion.div>

        {/* View full button */}
        <motion.div
          className="text-center mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <button
            onClick={openLightbox}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-maroon-800 bg-cream-100 hover:bg-cream-200 border border-gold-300 transition-all duration-300 hover:shadow-md text-base font-medium"
            aria-label="पूर्ण आमंत्रण पहा"
          >
            🔍 पूर्ण आमंत्रण पहा
          </button>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label="आमंत्रण पूर्ण दृश्य"
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-[110] w-12 h-12 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 text-white text-2xl transition-colors"
              aria-label="बंद करा"
            >
              ✕
            </button>

            {/* Full image */}
            <motion.div
              className="relative max-w-full max-h-full overflow-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              style={{ touchAction: 'pinch-zoom' }}
            >
              <Image
                src={invitation.invitationImage}
                alt="श्री गणरायाचे आगमन - पूर्ण आमंत्रण"
                width={800}
                height={1200}
                className="max-h-[90vh] w-auto mx-auto object-contain"
                quality={95}
                sizes="100vw"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
