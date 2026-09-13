'use client';

import { motion } from 'framer-motion';
import { invitation } from '@/config/invitation';
import { sound } from '@/utils/audio';

export default function CalendarButton() {
  const eventTitle = `${invitation.title} - ${invitation.host}`;
  const eventDetails = invitation.description;
  const eventLocation = `${invitation.venue}, ${invitation.address}`;
  
  // Date: 14 September 2026 (all day event in YYYYMMDD format)
  const startDate = '20260914';
  const endDate = '20260915';

  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    eventTitle
  )}&dates=${startDate}/${endDate}&details=${encodeURIComponent(
    eventDetails
  )}&location=${encodeURIComponent(eventLocation)}&sf=true&output=xml`;

  const downloadIcsFile = () => {
    sound.playFlowerChime();
    const icsData = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Sahyadri Codeworks//Digital Invitations//MR',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      `DTSTART;VALUE=DATE:${startDate}`,
      `DTEND;VALUE=DATE:${endDate}`,
      `SUMMARY:${eventTitle}`,
      `DESCRIPTION:${eventDetails.replace(/\n/g, '\\n')}`,
      `LOCATION:${eventLocation}`,
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'ganpati-aagman-2026.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
      <motion.a
        href={googleCalendarUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => sound.playFlowerChime()}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-base font-semibold text-maroon-900 bg-gradient-to-r from-amber-100 via-amber-200 to-amber-100 border border-gold-400 shadow-md hover:shadow-lg transition-all"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        <svg className="w-5 h-5 text-maroon-800" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11zM7 11h5v5H7z"/>
        </svg>
        <span>Google Calendar मध्ये जोडा</span>
      </motion.a>

      <motion.button
        onClick={downloadIcsFile}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-base font-semibold text-maroon-800 bg-cream-50 hover:bg-cream-100 border border-maroon-200 shadow-sm transition-all"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        <span className="text-lg">🍎</span>
        <span>Apple / iCal मध्ये जोडा</span>
      </motion.button>
    </div>
  );
}
