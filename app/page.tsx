'use client';

import { useEffect, useRef, Suspense } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Palette, Code2, Sparkles, Layers } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { LineReveal } from '@/components/TextReveal';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { TiltCard } from '@/components/TiltCard';
import { MagneticButton } from '@/components/MagneticButton';
import { Footer } from '@/components/Footer';
import { FloatingShapes } from '@/components/FloatingShapes';
import { AnimatedImage, AnimatedImageGrid } from '@/components/AnimatedImage';

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const triggersRef = useRef<ScrollTrigger[]>([]);

  useEffect(() => {
    // Check if touch device for reduced animations
    const isTouch = window.matchMedia('(hover: none)').matches;
    
    const ctx = gsap.context(() => {
      // Faster animations on mobile
      const tl = gsap.timeline({ delay: isTouch ? 0.1 : 0.3 });

      tl.from('.hero-line', {
        y: isTouch ? 30 : 100,
        opacity: 0,
        duration: isTouch ? 0.5 : 1,
        stagger: isTouch ? 0.08 : 0.15,
        ease: 'power4.out',
      })
      .from('.hero-subtitle', {
        y: isTouch ? 15 : 30,
        opacity: 0,
        duration: isTouch ? 0.4 : 0.8,
        ease: 'power3.out',
      }, '-=0.3')
      .from('.hero-cta', {
        y: isTouch ? 15 : 30,
        opacity: 0,
        duration: isTouch ? 0.4 : 0.8,
        ease: 'power3.out',
      }, '-=0.3');
    }, heroRef);

    return () => {
      triggersRef.current.forEach(trigger => trigger.kill());
      triggersRef.current = [];
      ctx.revert();
    };
  }, []);

  const services = [
    {
      icon: Palette,
      title: 'Brand Strategy',
      description: 'We craft distinctive brand identities that resonate with your audience and stand the test of time.',
      features: ['Brand Identity', 'Visual Systems', 'Brand Guidelines'],
    },
    {
      icon: Code2,
      title: 'Web Development',
      description: 'Performance-driven websites built with cutting-edge technology and flawless execution.',
      features: ['Next.js & React', 'Headless CMS', 'E-commerce'],
    },
    {
      icon: Sparkles,
      title: 'Motion Design',
      description: 'Cinematic animations and interactions that bring your digital experience to life.',
      features: ['Scroll Animations', 'Micro-interactions', 'Page Transitions'],
    },
    {
      icon: Layers,
      title: 'Digital Products',
      description: 'End-to-end product design and development for web applications and platforms.',
      features: ['UX Research', 'UI Design', 'Prototyping'],
    },
  ];

  return (
    <main className="relative">
      {/* Ambient Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] bg-aurum/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-aurum/3 rounded-full blur-[120px]" />
      </div>

      {/* Hero Section with 3D Shapes */}
      <section ref={heroRef} className="relative min-h-[90vh] sm:min-h-screen flex items-center pt-20 lg:pt-24 overflow-hidden">
        {/* 3D Floating Shapes - Hidden on mobile for performance */}
        <div className="hidden md:block">
          <Suspense fallback={null}>
            <FloatingShapes />
          </Suspense>
        </div>

        <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 py-16 lg:py-20">
          <div className="max-w-4xl">
            <div className="overflow-hidden mb-1 lg:mb-2">
              <h1 className="hero-line font-display text-4xl sm:text-5xl lg:text-display-xl text-platinum">
                We craft
              </h1>
            </div>
            <div className="overflow-hidden mb-1 lg:mb-2">
              <h1 className="hero-line font-display text-4xl sm:text-5xl lg:text-display-xl text-gradient">
                cinematic
              </h1>
            </div>
            <div className="overflow-hidden mb-6 lg:mb-8">
              <h1 className="hero-line font-display text-4xl sm:text-5xl lg:text-display-xl text-platinum">
                digital experiences
              </h1>
            </div>

            <p className="hero-subtitle text-silver text-base sm:text-lg lg:text-body-lg max-w-xl mb-8 lg:mb-10 leading-relaxed">
              A premium digital studio specializing in scroll-driven animations, 
              brand identity, and web experiences that leave lasting impressions.
            </p>

            <div className="hero-cta flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4">
              <MagneticButton>
                <Link
                  href="/services"
                  className="group inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-aurum text-void rounded-full font-medium hover:shadow-[0_0_40px_rgba(201,169,98,0.4)] transition-shadow duration-500 text-sm sm:text-base"
                >
                  Explore Services
                  <ArrowRight size={16} className="sm:w-[18px] group-hover:translate-x-1 transition-transform" />
                </Link>
              </MagneticButton>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-platinum hover:text-aurum transition-colors duration-300 text-sm sm:text-base"
              >
                Start a Project
                <ArrowUpRight size={16} className="sm:w-[18px]" />
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2 text-silver/60">
            <span className="text-caption">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-px h-8 bg-gradient-to-b from-aurum/60 to-transparent"
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Section - Template for future real stats */}
      {/* 
      <section className="relative py-16 lg:py-24 border-y border-white/5">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 xl:gap-12">
            {[
              { value: 0, suffix: '+', label: 'Projects Delivered' },
              { value: 0, suffix: '+', label: 'Years Experience' },
              { value: 0, suffix: '%', label: 'Client Satisfaction' },
              { value: 0, suffix: '', label: 'Awards Won' },
            ].map((stat, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="text-center lg:text-left">
                  <div className="font-display text-2xl sm:text-3xl lg:text-display-md text-platinum mb-1 lg:mb-2">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-silver text-xs sm:text-sm lg:text-body-sm">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* Services Section */}
      <section className="relative py-16 lg:py-section">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-24 mb-12 lg:mb-16">
            <ScrollReveal>
              <span className="text-aurum text-caption font-medium tracking-wider uppercase mb-3 lg:mb-4 block">
                What We Do
              </span>
              <LineReveal
                lines={['Services crafted', 'with precision']}
                className="font-display text-3xl sm:text-4xl lg:text-display-lg text-platinum"
                lineClassName="leading-tight"
              />
            </ScrollReveal>
            <ScrollReveal delay={0.2} className="flex items-end">
              <p className="text-silver text-base sm:text-lg lg:text-body-lg max-w-md">
                We combine strategic thinking with exceptional craft to deliver 
                digital experiences that drive results and delight users.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
            {services.map((service, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <TiltCard className="h-full">
                  <div className="group h-full p-6 sm:p-8 lg:p-10 bg-surface border border-white/5 rounded-2xl hover:border-aurum/30 transition-colors duration-500">
                    <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-aurum/10 flex items-center justify-center mb-4 lg:mb-6 group-hover:bg-aurum/20 transition-colors duration-300">
                      <service.icon size={24} className="lg:w-[28px] lg:h-[28px] text-aurum" />
                    </div>
                    <h3 className="font-display text-lg sm:text-xl text-platinum mb-2 lg:mb-3">{service.title}</h3>
                    <p className="text-silver text-sm sm:text-base lg:text-body-md mb-4 lg:mb-6">{service.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, i) => (
                        <span
                          key={i}
                          className="px-2 sm:px-3 py-1 text-xs sm:text-caption text-silver bg-white/5 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="relative py-16 lg:py-section">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
          <ScrollReveal className="text-center mb-12 lg:mb-16">
            <span className="text-aurum text-caption font-medium tracking-wider uppercase mb-4 block">
              Our Work
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-display-md text-platinum mb-4">
              Visual Excellence
            </h2>
            <p className="text-silver text-base sm:text-lg lg:text-body-lg max-w-2xl mx-auto">
              Every project is crafted with attention to detail and cinematic quality.
            </p>
          </ScrollReveal>

          <AnimatedImageGrid
            images={[
              { src: '/images/abstract-gold.jpg', alt: 'Abstract gold design', title: 'Brand Identity' },
              { src: '/images/geometric.jpg', alt: 'Geometric patterns', title: 'Web Design' },
              { src: '/images/tech-abstract.jpg', alt: 'Technology abstract', title: 'Development' },
              { src: '/images/luxury-dark.jpg', alt: 'Luxury dark theme', title: 'Premium UI' },
              { src: '/images/dark-gradient.jpg', alt: 'Dark gradient', title: 'Motion Design' },
              { src: '/images/hero-bg.jpg', alt: 'Hero background', title: 'Digital Experience' },
            ]}
            columns={3}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 lg:py-section">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
          <ScrollReveal>
            <div className="relative p-8 sm:p-12 lg:p-20 bg-surface border border-white/5 rounded-2xl lg:rounded-3xl overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 sm:w-96 sm:h-96 bg-aurum/10 rounded-full blur-[60px] sm:blur-[100px]" />
              <div className="relative z-10 max-w-2xl">
                <h2 className="font-display text-2xl sm:text-3xl lg:text-display-md text-platinum mb-4 lg:mb-6">
                  Ready to elevate your<br />
                  <span className="text-gradient">digital presence?</span>
                </h2>
                <p className="text-silver text-base sm:text-lg lg:text-body-lg mb-6 lg:mb-8 max-w-lg">
                  Let&apos;s discuss your project and explore how we can bring your vision to life 
                  with cinematic precision.
                </p>
                <MagneticButton>
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-aurum text-void rounded-full font-medium hover:shadow-[0_0_40px_rgba(201,169,98,0.4)] transition-shadow duration-500 text-sm sm:text-base"
                  >
                    Start a Conversation
                    <ArrowRight size={16} className="sm:w-[18px] group-hover:translate-x-1 transition-transform" />
                  </Link>
                </MagneticButton>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
