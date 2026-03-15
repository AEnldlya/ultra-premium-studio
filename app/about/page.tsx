'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ScrollReveal';
import { LineReveal } from '@/components/TextReveal';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { Footer } from '@/components/Footer';
import { Target, Users, Zap, Heart, Award, Globe, Coffee, Clock } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const triggersRef = useRef<ScrollTrigger[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const line = timelineRef.current?.querySelector('.timeline-line');
      if (line) {
        const tween = gsap.fromTo(line, 
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: timelineRef.current,
              start: 'top 70%',
              end: 'bottom 70%',
              scrub: 1,
            },
          }
        );
        if (tween.scrollTrigger) {
          triggersRef.current.push(tween.scrollTrigger);
        }
      }
    }, timelineRef);

    return () => {
      triggersRef.current.forEach(trigger => trigger.kill());
      triggersRef.current = [];
      ctx.revert();
    };
  }, []);

  // Timeline of how we build websites
  const milestones = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We start by understanding your business, goals, and target audience through in-depth research and strategy sessions.',
    },
    {
      step: '02',
      title: 'Design',
      description: 'Our designers craft pixel-perfect mockups with cinematic animations, ensuring every detail aligns with your vision.',
    },
    {
      step: '03',
      title: 'Development',
      description: 'We build your site with clean, performant code using Next.js, React, and cutting-edge animation libraries.',
    },
    {
      step: '04',
      title: 'Launch',
      description: 'After rigorous testing, we deploy your site and provide training so you can manage it with confidence.',
    },
  ];

  const values = [
    {
      icon: Target,
      title: 'Precision',
      description: 'Every pixel, every animation, every interaction is crafted with meticulous attention to detail.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work as an extension of your team, ensuring your vision guides every decision.',
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We push boundaries and explore new technologies to deliver cutting-edge solutions.',
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'We love what we do, and that passion drives us to create exceptional work.',
    },
  ];

  // Team section removed - company operates as a unified studio

  const stats = [
    { icon: Award, value: 47, suffix: '', label: 'Websites Built' },
    { icon: Globe, value: 100, suffix: '%', label: 'Client Satisfaction' },
    { icon: Coffee, value: 12, suffix: '', label: 'Day Average Delivery' },
    { icon: Clock, value: 3, suffix: '', label: 'Years Experience' },
  ];

  return (
    <main className="relative pt-32">
      {/* Hero Section */}
      <section className="relative mb-24">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-aurum text-caption font-medium tracking-wider uppercase mb-6 block"
              >
                About Us
              </motion.span>
              <div className="overflow-hidden mb-6">
                <motion.h1
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1, ease: 'power4.out' }}
                  className="font-display text-display-lg text-platinum"
                >
                  Building digital
                </motion.h1>
              </div>
              <div className="overflow-hidden mb-8">
                <motion.h1
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: 'power4.out' }}
                  className="font-display text-display-lg text-gradient"
                >
                  excellence together
                </motion.h1>
              </div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-silver text-body-lg max-w-lg leading-relaxed"
              >
                We are a team of designers and developers united by a passion 
                for creating exceptional digital experiences. Our work bridges the gap between 
                art and technology, delivering results that exceed expectations.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-surface"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-aurum/20 via-transparent to-blue-500/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full border-2 border-aurum/30 flex items-center justify-center">
                  <span className="font-display text-5xl text-aurum">A</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-section border-y border-white/5">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <ScrollReveal className="text-center mb-16">
            <span className="text-aurum text-caption font-medium tracking-wider uppercase mb-4 block">
              Our Principles
            </span>
            <h2 className="font-display text-display-md text-platinum">
              Values that drive us
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="group p-8 bg-surface border border-white/5 rounded-2xl hover:border-aurum/30 transition-colors duration-500 h-full">
                  <div className="w-14 h-14 rounded-xl bg-aurum/10 flex items-center justify-center mb-6 group-hover:bg-aurum/20 transition-colors duration-300">
                    <value.icon size={28} className="text-aurum" />
                  </div>
                  <h3 className="font-display text-xl text-platinum mb-3">{value.title}</h3>
                  <p className="text-silver text-body-sm">{value.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section - How We Build */}
      <section className="relative py-section">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <ScrollReveal className="text-center mb-16">
            <span className="text-aurum text-caption font-medium tracking-wider uppercase mb-4 block">
              Our Process
            </span>
            <h2 className="font-display text-display-md text-platinum">
              How we build your website
            </h2>
          </ScrollReveal>

          <div ref={timelineRef} className="relative max-w-3xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-white/10">
              <div className="timeline-line absolute inset-x-0 top-0 bg-aurum origin-top" style={{ height: '100%' }} />
            </div>

            {milestones.map((milestone, index) => (
              <ScrollReveal
                key={index}
                direction={index % 2 === 0 ? 'left' : 'right'}
                delay={index * 0.15}
              >
                <div className={`relative flex items-start gap-8 mb-16 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}>
                  {/* Dot */}
                  <div className="absolute left-8 lg:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-aurum border-4 border-void z-10" />
                  
                  {/* Content */}
                  <div className={`ml-20 lg:ml-0 lg:w-1/2 ${
                    index % 2 === 0 ? 'lg:pr-16 lg:text-right' : 'lg:pl-16'
                  }`}>
                    <span className="text-aurum/40 font-display text-sm mb-2 block">{milestone.step}</span>
                    <h3 className="font-display text-xl text-platinum mb-3">{milestone.title}</h3>
                    <p className="text-silver text-body-md">{milestone.description}</p>
                  </div>
                  <div className="hidden lg:block lg:w-1/2" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - Template for future real stats */}
      {/*
      <section className="relative py-section">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: 0, suffix: '+', label: 'Projects Delivered' },
              { value: 0, suffix: '+', label: 'Years Experience' },
              { value: 0, suffix: '%', label: 'Client Satisfaction' },
              { value: 0, suffix: '', label: 'Awards Won' },
            ].map((stat, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="text-center p-8 bg-surface border border-white/5 rounded-2xl">
                  <Award size={32} className="text-aurum mx-auto mb-4" />
                  <div className="font-display text-display-md text-platinum mb-2">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-silver text-body-sm">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      */}

      <Footer />
    </main>
  );
}
