'use client';

import { useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if touch device
    const isTouch = window.matchMedia('(hover: none)').matches;
    setIsTouchDevice(isTouch);

    // Skip Lenis on mobile for better native scroll performance
    if (isTouch) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Expose lenis globally for GSAP ScrollTrigger
    (window as typeof window & { lenis: Lenis }).lenis = lenis;

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
