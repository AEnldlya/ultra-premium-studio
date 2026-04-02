'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

// Mouse Spotlight Effect Component
function MouseSpotlight({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    };

    const element = ref.current;
    if (element) {
      element.addEventListener('mousemove', handleMouseMove);
      return () => element.removeEventListener('mousemove', handleMouseMove);
    }
  }, [mouseX, mouseY]);

  const background = useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(201, 169, 98, 0.06), transparent 40%)`;

  return (
    <div ref={ref} className={`relative ${className}`}>
      <motion.div
        className="absolute inset-0 pointer-events-none z-0"
        style={{ background }}
      />
      {children}
    </div>
  );
}

// 3D Tilt Card Component
function TiltCard3D({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    setRotateX((y - centerY) / 15);
    setRotateY((centerX - x) / 15);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX,
        rotateY,
        scale: isHovered ? 1.02 : 1,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      style={{ transformStyle: 'preserve-3d' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Magnetic Button Component
function MagneticButton({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPosition({ x: x * 0.3, y: y * 0.3 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 350, damping: 15 }}
      className={className}
    >
      {children}
    </motion.button>
  );
}

// Floating Particles Component
function FloatingParticles() {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 15,
    delay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-aurum/20"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

// Text Reveal Animation
function TextReveal({ children, className = '', delay = 0 }: { children: string; className?: string; delay?: number }) {
  const words = children.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: delay },
    }),
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 40,
      rotateX: -40,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.span
      className={`inline-flex flex-wrap ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
      style={{ perspective: '1000px' }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={child}
          className="inline-block mr-[0.25em]"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}

// Character Reveal Animation
function CharacterReveal({ text, className = '', delay = 0 }: { text: string; className?: string; delay?: number }) {
  const characters = text.split('');

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: delay },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <motion.span
      className={`inline-block ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {characters.map((char, index) => (
        <motion.span
          key={index}
          variants={child}
          className="inline-block"
          style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.span>
  );
}

// Scroll Progress Bar
function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-aurum/50 via-aurum to-aurum/50 z-[100] origin-left"
      style={{ scaleX }}
    />
  );
}

// Main Hero Component
export function HeroAceternity() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <ScrollProgressBar />

      <MouseSpotlight className="relative min-h-screen flex items-center overflow-hidden">
        {/* Floating Particles Background */}
        <FloatingParticles />

        {/* Ambient Background Gradients */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] bg-aurum/5 rounded-full blur-[150px]" />
          <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-aurum/3 rounded-full blur-[120px]" />
        </div>

        {/* Main Content */}
        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              {/* Label */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-aurum/10 border border-aurum/20 text-aurum text-sm font-medium">
                  <span className="w-2 h-2 rounded-full bg-aurum animate-pulse" />
                  Premium Digital Studio
                </span>
              </motion.div>

              {/* Main Heading */}
              <div className="space-y-2">
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-platinum leading-[1.1]">
                  {mounted && (
                    <>
                      <CharacterReveal text="We craft" delay={0.2} />
                      <br />
                      <span className="text-gradient">
                        <CharacterReveal text="cinematic" delay={0.4} />
                      </span>
                      <br />
                      <CharacterReveal text="experiences" delay={0.6} />
                    </>
                  )}
                </h1>
              </div>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-silver text-lg lg:text-xl max-w-lg leading-relaxed"
              >
                {mounted && <TextReveal delay={0.8}>A premium digital studio specializing in scroll-driven animations, brand identity, and web experiences that leave lasting impressions.</TextReveal>}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <MagneticButton>
                  <Link
                    href="/services"
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-aurum text-void rounded-full font-medium transition-all duration-300 hover:shadow-[0_0_40px_rgba(201,169,98,0.4)] hover:scale-105"
                  >
                    Explore Services
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </MagneticButton>

                <MagneticButton>
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-3 px-8 py-4 border border-white/20 text-platinum rounded-full font-medium transition-all duration-300 hover:border-aurum/50 hover:text-aurum hover:bg-aurum/5"
                  >
                    Start a Project
                    <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </MagneticButton>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="flex gap-8 pt-8 border-t border-white/10"
              >
                {[
                  { value: '150+', label: 'Projects' },
                  { value: '50+', label: 'Clients' },
                  { value: '12', label: 'Awards' },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="font-display text-2xl lg:text-3xl text-aurum">{stat.value}</div>
                    <div className="text-silver text-sm">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right Column - 3D Cards */}
            <div className="relative hidden lg:block">
              <div className="relative h-[500px] w-full">
                {/* Main Card */}
                <motion.div
                  initial={{ opacity: 0, x: 100, rotateY: -15 }}
                  animate={{ opacity: 1, x: 0, rotateY: 0 }}
                  transition={{ duration: 1, delay: 0.5, type: 'spring' }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
                >
                  <TiltCard3D>
                    <div className="w-80 h-96 rounded-2xl bg-gradient-to-br from-charcoal to-graphite border border-aurum/20 p-8 shadow-2xl shadow-aurum/10">
                      <div className="h-full flex flex-col justify-between">
                        <div className="w-16 h-16 rounded-xl bg-aurum/20 flex items-center justify-center">
                          <svg className="w-8 h-8 text-aurum" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-display text-2xl text-platinum mb-2">Premium Design</h3>
                          <p className="text-silver text-sm leading-relaxed">Crafting exceptional digital experiences with meticulous attention to detail.</p>
                        </div>
                      </div>
                    </div>
                  </TiltCard3D>
                </motion.div>

                {/* Floating Cards */}
                <motion.div
                  initial={{ opacity: 0, x: -50, y: -30 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 1, delay: 0.7, type: 'spring' }}
                  className="absolute top-8 left-8 z-10"
                >
                  <TiltCard3D>
                    <div className="w-48 h-32 rounded-xl bg-charcoal/80 border border-white/10 p-4 backdrop-blur-sm">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                      </div>
                      <div className="space-y-2">
                        <div className="h-2 w-full bg-white/10 rounded" />
                        <div className="h-2 w-2/3 bg-aurum/30 rounded" />
                      </div>
                    </div>
                  </TiltCard3D>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50, y: 30 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 1, delay: 0.9, type: 'spring' }}
                  className="absolute bottom-8 right-8 z-30"
                >
                  <TiltCard3D>
                    <div className="w-40 h-40 rounded-xl bg-gradient-to-br from-aurum/20 to-aurum/5 border border-aurum/30 p-4 flex flex-col items-center justify-center text-center">
                      <div className="font-display text-4xl text-aurum mb-1">98%</div>
                      <div className="text-silver text-xs">Client Satisfaction</div>
                    </div>
                  </TiltCard3D>
                </motion.div>

                {/* Decorative Elements */}
                <motion.div
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ 
                    rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
                    scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                  }}
                  className="absolute -top-4 -right-4 w-24 h-24 border border-aurum/20 rounded-full"
                />
                <motion.div
                  animate={{ 
                    rotate: -360,
                  }}
                  transition={{ 
                    duration: 30, 
                    repeat: Infinity, 
                    ease: 'linear' 
                  }}
                  className="absolute -bottom-8 -left-8 w-32 h-32 border border-white/5 rounded-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-3 text-silver/60">
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-px h-10 bg-gradient-to-b from-aurum/60 to-transparent"
            />
          </div>
        </motion.div>
      </MouseSpotlight>
    </>
  );
}
