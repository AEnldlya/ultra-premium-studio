'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

interface AnimatedImageProps {
  src: string;
  alt: string;
  className?: string;
  parallax?: boolean;
  parallaxSpeed?: number;
  scaleOnHover?: boolean;
  overlay?: boolean;
  overlayColor?: string;
  priority?: boolean;
}

export function AnimatedImage({
  src,
  alt,
  className = '',
  parallax = false,
  parallaxSpeed = 0.5,
  scaleOnHover = true,
  overlay = false,
  overlayColor = 'from-void/80 via-void/40 to-transparent',
  priority = false,
}: AnimatedImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  useEffect(() => {
    setIsTouchDevice(window.matchMedia('(hover: none)').matches);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100 * parallaxSpeed]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);

  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <motion.div
        className="relative w-full h-full"
        style={parallax && !isTouchDevice ? { y, scale } : {}}
        whileHover={scaleOnHover && !isTouchDevice ? { scale: 1.05 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </motion.div>
      
      {overlay && (
        <div className={`absolute inset-0 bg-gradient-to-t ${overlayColor} pointer-events-none`} />
      )}
      
      {/* Animated border glow on hover */}
      {!isTouchDevice && (
        <motion.div
          className="absolute inset-0 border-2 border-aurum/0 rounded-inherit pointer-events-none"
          whileHover={{ borderColor: 'rgba(201, 169, 98, 0.3)' }}
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.div>
  );
}

// Image grid component for portfolio/gallery
interface ImageGridProps {
  images: { src: string; alt: string; title?: string }[];
  columns?: 2 | 3 | 4;
}

export function AnimatedImageGrid({ images, columns = 3 }: ImageGridProps) {
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  useEffect(() => {
    setIsTouchDevice(window.matchMedia('(hover: none)').matches);
  }, []);

  const colClasses = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
  };

  return (
    <div className={`grid ${colClasses[columns]} gap-4 lg:gap-6`}>
      {images.map((image, index) => (
        <motion.div
          key={index}
          className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-surface cursor-pointer"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={!isTouchDevice ? { y: -5 } : {}}
        >
          <AnimatedImage
            src={image.src}
            alt={image.alt}
            className="absolute inset-0"
            scaleOnHover={true}
            overlay={true}
          />
          
          {image.title && (
            <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6">
              <motion.h3
                className="font-display text-lg text-platinum"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {image.title}
              </motion.h3>
            </div>
          )}
          
          {/* Hover overlay effect */}
          {!isTouchDevice && (
            <motion.div
              className="absolute inset-0 bg-aurum/0 flex items-center justify-center"
              whileHover={{ backgroundColor: 'rgba(201, 169, 98, 0.1)' }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="w-12 h-12 rounded-full bg-aurum/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
              >
                <span className="text-aurum text-2xl">+</span>
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
}

// Floating image component for decorative elements
interface FloatingImageProps {
  src: string;
  alt: string;
  className?: string;
  floatDuration?: number;
  floatDistance?: number;
}

export function FloatingImage({
  src,
  alt,
  className = '',
  floatDuration = 6,
  floatDistance = 20,
}: FloatingImageProps) {
  return (
    <motion.div
      className={`relative ${className}`}
      animate={{
        y: [0, -floatDistance, 0],
      }}
      transition={{
        duration: floatDuration,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover rounded-2xl"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </motion.div>
  );
}
