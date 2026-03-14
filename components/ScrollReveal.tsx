'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
  distance?: number;
  scrub?: boolean | number;
  start?: string;
  end?: string;
  markers?: boolean;
}

export function ScrollReveal({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  duration = 1,
  distance = 40,
  scrub = false,
  start = 'top 85%',
  end = 'bottom 15%',
  markers = false,
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const triggersRef = useRef<ScrollTrigger[]>([]);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const getInitialTransform = () => {
      switch (direction) {
        case 'up': return { y: distance, x: 0 };
        case 'down': return { y: -distance, x: 0 };
        case 'left': return { x: distance, y: 0 };
        case 'right': return { x: -distance, y: 0 };
        default: return { y: distance, x: 0 };
      }
    };

    const initial = getInitialTransform();

    // Set initial state
    gsap.set(element, {
      opacity: 0,
      ...initial,
    });

    // Create animation
    const tween = gsap.to(element, {
      opacity: 1,
      x: 0,
      y: 0,
      duration: scrub ? 1 : duration,
      delay: scrub ? 0 : delay,
      ease: 'power4.out',
      scrollTrigger: scrub ? {
        trigger: element,
        start,
        end,
        scrub: scrub === true ? 1 : scrub,
        markers,
      } : {
        trigger: element,
        start,
        toggleActions: 'play none none reverse',
        markers,
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
  }, [direction, delay, duration, distance, scrub, start, end, markers]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}

// Staggered children reveal
interface StaggerRevealProps {
  children: React.ReactNode[];
  className?: string;
  childClassName?: string;
  stagger?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  start?: string;
}

export function StaggerReveal({
  children,
  className = '',
  childClassName = '',
  stagger = 0.1,
  direction = 'up',
  start = 'top 85%',
}: StaggerRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const triggersRef = useRef<ScrollTrigger[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const items = container.children;
    if (items.length === 0) return;

    const getInitialTransform = () => {
      switch (direction) {
        case 'up': return { y: 40 };
        case 'down': return { y: -40 };
        case 'left': return { x: 40 };
        case 'right': return { x: -40 };
        default: return { y: 40 };
      }
    };

    const initial = getInitialTransform();

    gsap.set(items, {
      opacity: 0,
      ...initial,
    });

    const tween = gsap.to(items, {
      opacity: 1,
      x: 0,
      y: 0,
      duration: 0.8,
      stagger,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: container,
        start,
        toggleActions: 'play none none reverse',
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
  }, [stagger, direction, start]);

  return (
    <div ref={containerRef} className={className}>
      {children.map((child, index) => (
        <div key={index} className={childClassName}>
          {child}
        </div>
      ))}
    </div>
  );
}

// Parallax element
interface ParallaxProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  direction?: 'vertical' | 'horizontal';
}

export function Parallax({
  children,
  className = '',
  speed = 0.5,
  direction = 'vertical',
}: ParallaxProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const triggersRef = useRef<ScrollTrigger[]>([]);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const distance = 100 * speed;
    const prop = direction === 'vertical' ? 'y' : 'x';

    const tween = gsap.to(element, {
      [prop]: distance,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
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
  }, [speed, direction]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}
