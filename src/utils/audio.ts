// Synthesized authentic Indian temple bell & devotional chimes using Web Audio API
// No external MP3 download needed - works instantly and reliably on mobile!

class SoundEngine {
  private ctx: AudioContext | null = null;

  private initCtx() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
    return this.ctx;
  }

  // Authentic temple brass bell sound (घंटा नाद)
  playTempleBell() {
    const ctx = this.initCtx();
    if (!ctx) return;

    const now = ctx.currentTime;
    // Bell harmonic ratios: fundamental, minor third, fifth, octave, upper harmonics
    const fundamental = 587.33; // D5 note - bright & auspicious
    const harmonics = [
      { ratio: 1.0, gain: 0.6, decay: 2.8 },
      { ratio: 1.2, gain: 0.35, decay: 2.2 },
      { ratio: 1.5, gain: 0.3, decay: 1.8 },
      { ratio: 2.0, gain: 0.25, decay: 1.5 },
      { ratio: 2.76, gain: 0.15, decay: 1.2 },
      { ratio: 3.4, gain: 0.1, decay: 0.9 },
    ];

    harmonics.forEach(({ ratio, gain, decay }) => {
      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(fundamental * ratio, now);

      gainNode.gain.setValueAtTime(0, now);
      gainNode.gain.linearRampToValueAtTime(gain * 0.5, now + 0.008); // Sharp strike
      gainNode.gain.exponentialRampToValueAtTime(0.0001, now + decay);

      osc.connect(gainNode);
      gainNode.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + decay);
    });
  }

  // Soft sparkle / flower shower chime
  playFlowerChime() {
    const ctx = this.initCtx();
    if (!ctx) return;

    const now = ctx.currentTime;
    const notes = [659.25, 783.99, 987.77, 1174.66]; // E5, G5, B5, D6 arpeggio

    notes.forEach((freq, index) => {
      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();

      const startTime = now + index * 0.08;
      const decay = 0.8;

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, startTime);

      gainNode.gain.setValueAtTime(0, startTime);
      gainNode.gain.linearRampToValueAtTime(0.12, startTime + 0.01);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, startTime + decay);

      osc.connect(gainNode);
      gainNode.connect(ctx.destination);

      osc.start(startTime);
      osc.stop(startTime + decay);
    });
  }
}

export const sound = new SoundEngine();
