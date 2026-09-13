'use client';

import { motion } from 'framer-motion';
import { invitation } from '@/config/invitation';

const rsvpOptions = [
  {
    emoji: '❤️',
    label: 'हो, मी येणार आहे',
    message: invitation.rsvp.attending,
    color: 'from-green-500 to-emerald-600',
    hoverBg: 'hover:bg-green-50',
    borderColor: 'border-green-200',
  },
  {
    emoji: '🤔',
    label: 'कदाचित येईन',
    message: invitation.rsvp.maybe,
    color: 'from-amber-500 to-orange-600',
    hoverBg: 'hover:bg-amber-50',
    borderColor: 'border-amber-200',
  },
  {
    emoji: '🙏',
    label: 'क्षमस्व, येता येणार नाही',
    message: invitation.rsvp.notAttending,
    color: 'from-red-400 to-rose-500',
    hoverBg: 'hover:bg-red-50',
    borderColor: 'border-red-200',
  },
];

export default function RSVP() {
  const handleRSVP = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    const number = invitation.whatsappNumber.replace(/[^0-9]/g, '');
    const url = number
      ? `https://wa.me/${number}?text=${encodedMessage}`
      : `https://wa.me/?text=${encodedMessage}`;
    window.open(url, '_blank');
  };

  return (
    <section
      className="py-12 md:py-16 px-4"
      style={{ background: 'linear-gradient(180deg, transparent, rgba(254,241,247,0.3), transparent)' }}
      aria-label="RSVP"
    >
      <motion.div
        className="max-w-lg mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-maroon-900 mb-3">
          आपली उपस्थिती कळवा 🙏
        </h2>
        <div className="section-divider mb-8" />

        <div className="grid gap-4">
          {rsvpOptions.map((option, index) => (
            <motion.button
              key={index}
              onClick={() => handleRSVP(option.message)}
              className={`w-full p-5 rounded-2xl border-2 ${option.borderColor} ${option.hoverBg} bg-white/80 backdrop-blur-sm transition-all duration-300 flex items-center gap-4`}
              whileHover={{ scale: 1.02, x: 5 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <span className="text-3xl">{option.emoji}</span>
              <span className="text-lg font-medium text-maroon-800">{option.label}</span>
            </motion.button>
          ))}
        </div>

        <p className="text-sm text-maroon-400 mt-4">
          WhatsApp वर आपला प्रतिसाद पाठवा
        </p>
      </motion.div>
    </section>
  );
}
