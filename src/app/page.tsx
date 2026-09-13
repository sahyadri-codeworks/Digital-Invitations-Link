'use client';

import { useState, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import OpeningScreen from '@/components/OpeningScreen';
import InvitationCard from '@/components/InvitationCard';
import EventDetails from '@/components/EventDetails';
import Countdown from '@/components/Countdown';
import MusicPlayer from '@/components/MusicPlayer';
import FlowerPetals from '@/components/FlowerPetals';
import Footer from '@/components/Footer';

export default function Home() {
  const [isOpened, setIsOpened] = useState(false);
  const [musicAllowed, setMusicAllowed] = useState(false);

  const handleOpen = useCallback(() => {
    setIsOpened(true);
    setMusicAllowed(true);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        {!isOpened && (
          <OpeningScreen key="opening" onOpen={handleOpen} />
        )}
      </AnimatePresence>

      {isOpened && (
        <>
          <FlowerPetals />
          <div className="relative z-10">
            <InvitationCard />
            <EventDetails />
            <Countdown />
            <Footer />
          </div>
          <MusicPlayer autoPlay={musicAllowed} />
        </>
      )}
    </main>
  );
}
