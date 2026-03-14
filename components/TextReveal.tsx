'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
  stagger?: number;
  start?: string;
  splitBy?: 'chars' | 'words' | 'lines';
}

export function TextReveal({
  children,
  className = '',
  delay = 0,
  stagger = 0.02,
  start = 'top 85%',
  splitBy = 'chars',
}: TextRevealProps) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const triggersRef = useRef<ScrollTrigger[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let elements: Element[] = [];

    if (splitBy === 'chars') {
      const text = children;
      container.innerHTML = text
        .split('')
        .map(char => 
          char === ' ' 
            ? '<span class="inline-block">&nbsp;</span>' 
            : `<span class="inline-block opacity-0 translate-y-full">${char}</span>`
        )
        .join('');
      elements = Array.from(container.querySelectorAll('span'));
    } else if (splitBy === 'words') {
      const words = children.split(' ');
      container.innerHTML = words
        .map(word => `<span class="inline-block overflow-hidden mr-[0.25em]"><span class="inline-block opacity-0 translate-y-full">${word}</span></span>`)
        .join('');
      elements = Array.from(container.querySelectorAll('span > span'));
    }

    if (elements.length === 0) return;

    const tween = gsap.to(elements, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger,
      delay,
      ease: 'power4.out',
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
  }, [children, delay, stagger, start, splitBy]);

  return <span ref={containerRef} className={className} />;
}

// Line by line reveal for headings
interface LineRevealProps {
  lines: string[];
  className?: string;
  lineClassName?: string;
  stagger?: number;
  start?: string;
}

export function LineReveal({
  lines,
  className = '',
  lineClassName = '',
  stagger = 0.15,
  start = 'top 85%',
}: LineRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const triggersRef = useRef<ScrollTrigger[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const lineElements = container.querySelectorAll('.line-inner');

    gsap.set(lineElements, { y: '100%' });

    const tween = gsap.to(lineElements, {
      y: 0,
      duration: 1,
      stagger,
      ease: 'power4.out',
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
  }, [stagger, start]);

  return (
    <div ref={containerRef} className={className}>
      {lines.map((line, index) => (
        <div key={index} className="overflow-hidden">
          <div className={`line-inner ${lineClassName}`}>
            {line}
          </div>
        </div>
      ))}
    </div>
  );
}
