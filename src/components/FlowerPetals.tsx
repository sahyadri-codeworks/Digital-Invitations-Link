'use client';

import { useEffect, useState } from 'react';

const petalColors = [
  '#ffb6c1', // light pink
  '#ff69b4', // hot pink
  '#ffc0cb', // pink
  '#fff0f5', // lavender blush
  '#ffe4e1', // misty rose
  '#f8d7e8', // soft pink
  '#ffffff', // white
  '#fdd', // very light pink
];

const petalShapes = [
  // Lotus petal shape
  'M10,0 C10,0 20,15 10,30 C10,30 0,15 10,0 Z',
  // Round petal
  'M10,0 C15,5 18,15 10,25 C2,15 5,5 10,0 Z',
  // Thin petal
  'M8,0 C12,8 14,18 8,28 C2,18 4,8 8,0 Z',
];

export default function FlowerPetals() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  if (prefersReducedMotion) return null;

  const petals = Array.from({ length: 8 }, (_, i) => {
    const color = petalColors[i % petalColors.length];
    const shape = petalShapes[i % petalShapes.length];
    const size = 12 + (i % 4) * 4;

    return (
      <div
        key={i}
        className={`petal petal-${i + 1}`}
        style={{ width: size, height: size * 1.5 }}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 20 30"
          width={size}
          height={size * 1.5}
          style={{ filter: `drop-shadow(0 1px 2px rgba(0,0,0,0.1))` }}
        >
          <path d={shape} fill={color} opacity="0.7" />
        </svg>
      </div>
    );
  });

  return (
    <div className="fixed inset-0 pointer-events-none z-5" aria-hidden="true">
      {petals}
    </div>
  );
}
