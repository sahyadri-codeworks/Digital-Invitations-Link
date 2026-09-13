'use client';

import { motion } from 'framer-motion';
import { invitation } from '@/config/invitation';

export default function LocationSection() {
  return (
    <section className="py-12 md:py-16 px-4" aria-label="स्थळ">
      <motion.div
        className="max-w-lg mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-maroon-900 mb-3">
          📍 आगमनाचे स्थळ
        </h2>
        <div className="section-divider mb-8" />

        <div className="info-card mb-8">
          <p className="text-lg font-semibold text-maroon-900 mb-2">
            {invitation.venue}
          </p>
          <p className="text-maroon-600 leading-relaxed whitespace-pre-line">
            {invitation.fullAddress}
          </p>
        </div>

        <motion.a
          href={invitation.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="premium-btn inline-flex text-base md:text-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Google Maps वर मार्ग पहा"
        >
          🗺️ Google Maps वर मार्ग पहा
        </motion.a>
      </motion.div>
    </section>
  );
}
