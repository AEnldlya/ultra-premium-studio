'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
  start?: string;
}

export function AnimatedCounter({
  end,
  suffix = '',
  prefix = '',
  duration = 2,
  className = '',
  start = 'top 85%',
}: AnimatedCounterProps) {
  const counterRef = useRef<HTMLSpanElement>(null);
  const triggersRef = useRef<ScrollTrigger[]>([]);

  useEffect(() => {
    const counter = counterRef.current;
    if (!counter) return;

    const obj = { value: 0 };

    const tween = gsap.to(obj, {
      value: end,
      duration,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: counter,
        start,
        toggleActions: 'play none none none',
        once: true,
      },
      onUpdate: () => {
        counter.textContent = prefix + Math.round(obj.value).toLocaleString() + suffix;
      },
    });

    if (tween.scrollTrigger) {
      triggersRef.current.push(tween.scrollTrigger);
    }

    return () => {
      triggersRef.current.forEach(trigger => trigger.kill());
      triggersRef.current = [];
      tween.kill();
    };
  }, [end, suffix, prefix, duration, start]);

  return (
    <span ref={counterRef} className={className}>
      {prefix}0{suffix}
    </span>
  );
}
