import confetti from 'canvas-confetti';

export const triggerConfetti = () => {
  // Burst from center-left and center-right with rainbow pastel colors
  const count = 200;
  const defaults = {
    origin: { y: 0.7 },
    colors: ['#10B981', '#F59E0B', '#0EA5E9', '#8B5CF6', '#F43F5E', '#FBBF24', '#34D399'],
    shapes: ['circle', 'square'] as confetti.Shape[],
    ticks: 300,
    gravity: 0.9,
    scalar: 1.2,
  };

  function fire(particleRatio: number, opts: confetti.Options) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio)
    });
  }

  fire(0.25, {
    spread: 26,
    startVelocity: 55,
  });
  fire(0.2, {
    spread: 60,
  });
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  });
};

export const triggerStarBurst = () => {
  confetti({
    particleCount: 50,
    spread: 360,
    origin: { y: 0.5, x: 0.5 },
    colors: ['#FBBF24', '#F59E0B', '#FEF08A'],
    shapes: ['star'] as confetti.Shape[],
    scalar: 1.5,
    ticks: 150
  });
};
