'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { invitation } from '@/config/invitation';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calculateTimeLeft(): TimeLeft | null {
  const eventDate = new Date(invitation.date + 'T00:00:00+05:30');
  const now = new Date();
  const difference = eventDate.getTime() - now.getTime();

  if (difference <= 0) return null;

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

const labels = [
  { key: 'days', label: 'दिवस' },
  { key: 'hours', label: 'तास' },
  { key: 'minutes', label: 'मिनिटे' },
  { key: 'seconds', label: 'सेकंद' },
] as const;

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!mounted) {
    return (
      <section className="py-12 md:py-16 px-4" aria-label="उलटगणती">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-maroon-900 mb-8">
            गणरायाच्या आगमनाला आता...
          </h2>
          <div className="grid grid-cols-4 gap-3 md:gap-5 max-w-md mx-auto">
            {labels.map(({ key, label }) => (
              <div key={key} className="info-card !p-4">
                <div className="text-3xl md:text-4xl font-bold text-maroon-900 mb-1">--</div>
                <div className="text-xs md:text-sm text-maroon-600">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (!timeLeft) {
    return (
      <section className="py-12 md:py-16 px-4" aria-label="शुभेच्छा">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-5xl mb-4">🎉</div>
          <h2 className="text-2xl md:text-3xl font-bold text-maroon-900">
            🙏 गणरायाचे आगमन झाले! 🙏
          </h2>
          <p className="text-maroon-600 mt-3 text-lg">गणपती बाप्पा मोरया!</p>
        </motion.div>
      </section>
    );
  }

  return (
    <section
      className="py-12 md:py-16 px-4"
      style={{ background: 'linear-gradient(180deg, transparent, rgba(254,241,247,0.5), transparent)' }}
      aria-label="उलटगणती"
    >
      <motion.div
        className="max-w-2xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-maroon-900 mb-8">
          गणरायाच्या आगमनाला आता...
        </h2>

        <div className="grid grid-cols-4 gap-3 md:gap-5 max-w-md mx-auto">
          {labels.map(({ key, label }) => (
            <motion.div
              key={key}
              className="info-card !p-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <motion.div
                className="text-3xl md:text-4xl font-bold text-maroon-900 mb-1"
                key={timeLeft[key]}
                initial={{ y: -10, opacity: 0.5 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {String(timeLeft[key]).padStart(2, '0')}
              </motion.div>
              <div className="text-xs md:text-sm text-maroon-600 font-medium">{label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
