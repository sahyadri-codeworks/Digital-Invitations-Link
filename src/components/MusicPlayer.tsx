'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { invitation } from '@/config/invitation';

interface MusicPlayerProps {
  autoPlay: boolean;
}

export default function MusicPlayer({ autoPlay }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleCanPlay = () => {
      setIsLoaded(true);
      if (autoPlay) {
        audio.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
      }
    };

    const handleError = () => setHasError(true);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener('canplaythrough', handleCanPlay);
    audio.addEventListener('error', handleError);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('canplaythrough', handleCanPlay);
      audio.removeEventListener('error', handleError);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [autoPlay]);

  const toggleMusic = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  }, [isPlaying]);

  const musicSrc = `${process.env.NEXT_PUBLIC_BASE_PATH || ''}${invitation.music}`;

  return (
    <>
      <audio ref={audioRef} src={musicSrc} loop preload="none" />
      <AnimatePresence>
        {isLoaded && (
          <motion.button
            onClick={toggleMusic}
            className="fixed top-4 right-4 z-50 w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-md transition-colors"
            style={{
              background: isPlaying
                ? 'linear-gradient(135deg, rgba(143,29,64,0.8), rgba(204,45,88,0.8))'
                : 'rgba(253,249,237,0.8)',
              border: '1px solid rgba(221,171,20,0.3)',
              color: isPlaying ? 'white' : '#7a1b3b',
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            whileTap={{ scale: 0.9 }}
            aria-label={isPlaying ? 'संगीत बंद करा' : 'संगीत सुरू करा'}
          >
            <span className="text-xl">{isPlaying ? '🔊' : '🔇'}</span>
            {isPlaying && (
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-white/30"
                animate={{ scale: [1, 1.3], opacity: [0.5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            )}
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
