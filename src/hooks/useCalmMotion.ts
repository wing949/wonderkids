import { useEffect, useState } from 'react';

/**
 * Keeps decorative motion off for the first paint, compact screens and users
 * who explicitly request reduced motion. Desktop animation is enabled only
 * after the media queries have been evaluated in the browser.
 */
export const useCalmMotion = () => {
  const [shouldCalmMotion, setShouldCalmMotion] = useState(true);

  useEffect(() => {
    const compactScreen = window.matchMedia('(max-width: 1180px)');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotionProfile = () => {
      setShouldCalmMotion(compactScreen.matches || reducedMotion.matches);
    };

    updateMotionProfile();
    compactScreen.addEventListener?.('change', updateMotionProfile);
    reducedMotion.addEventListener?.('change', updateMotionProfile);
    return () => {
      compactScreen.removeEventListener?.('change', updateMotionProfile);
      reducedMotion.removeEventListener?.('change', updateMotionProfile);
    };
  }, []);

  return shouldCalmMotion;
};
