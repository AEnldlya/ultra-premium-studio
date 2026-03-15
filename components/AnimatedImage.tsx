'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

interface AnimatedImageProps {
  src: string;
  alt: string;
  className?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  priority?: boolean;
}

export function AnimatedImage({
  src,
  alt,
  className = '',
  fill = false,
  width,
  height,
  priority = false,
}: AnimatedImageProps) {
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  useEffect(() => {
    setIsTouchDevice(window.matchMedia('(hover: none)').matches);
  }, []);

  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <motion.div
        className="relative w-full h-full"
        whileHover={!isTouchDevice ? { scale: 1.05 } : {}}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        {fill ? (
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            priority={priority}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <Image
            src={src}
            alt={alt}
            width={width || 600}
            height={height || 400}
            className="object-cover w-full h-full"
            priority={priority}
          />
        )}
      </motion.div>
    </motion.div>
  );
}

// Simple image grid component
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
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
  };

  return (
    <div className={`grid ${colClasses[columns]} gap-4 lg:gap-6`}>
      {images.map((image, index) => (
        <motion.div
          key={index}
          className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-surface"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={!isTouchDevice ? { y: -5 } : {}}
        >
          <motion.div
            className="absolute inset-0"
            whileHover={!isTouchDevice ? { scale: 1.05 } : {}}
            transition={{ duration: 0.4 }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </motion.div>
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-void/80 via-void/20 to-transparent pointer-events-none" />
          
          {image.title && (
            <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6">
              <h3 className="font-display text-lg text-platinum relative z-10">
                {image.title}
              </h3>
            </div>
          )}
          
          {/* Hover border effect */}
          {!isTouchDevice && (
            <div className="absolute inset-0 border-2 border-aurum/0 group-hover:border-aurum/30 rounded-2xl transition-colors duration-300 pointer-events-none" />
          )}
        </motion.div>
      ))}
    </div>
  );
}
