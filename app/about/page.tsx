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

  const team = [
    {
      name: 'Andy Zhang',
      role: 'Founder & Lead Developer',
      image: 'bg-gradient-to-br from-aurum/30 to-aurum/5',
    },
    {
      name: 'Owen Osterberg',
      role: 'Creative Director',
      image: 'bg-gradient-to-br from-blue-500/30 to-blue-500/5',
    },
    {
      name: 'Ben Pastel',
      role: 'Technical Lead',
      image: 'bg-gradient-to-br from-purple-500/30 to-purple-500/5',
    },
  ];

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

      {/* Team Section */}
      <section className="relative py-section border-y border-white/5">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <ScrollReveal className="text-center mb-16">
            <span className="text-aurum text-caption font-medium tracking-wider uppercase mb-4 block">
              The Team
            </span>
            <h2 className="font-display text-display-md text-platinum">
              Meet the team
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="group">
                  <div className={`relative aspect-[3/4] rounded-2xl overflow-hidden mb-4 ${member.image}`}>
                    <div className="absolute inset-0 bg-surface" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-display text-6xl text-white/20">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-aurum/0 group-hover:bg-aurum/10 transition-colors duration-500" />
                  </div>
                  <h3 className="font-display text-lg text-platinum">{member.name}</h3>
                  <p className="text-silver text-body-sm">{member.role}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Hanover & Dartmouth Section */}
      <section className="relative py-section border-y border-white/5">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="/images/hanover-nh.jpg"
                  alt="Hanover, New Hampshire"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-void/60 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <span className="text-aurum text-caption font-medium tracking-wider uppercase">Our Home</span>
                  <h3 className="font-display text-2xl text-platinum mt-2">Hanover, NH</h3>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <span className="text-aurum text-caption font-medium tracking-wider uppercase mb-4 block">
                Rooted in Community
              </span>
              <h2 className="font-display text-display-md text-platinum mb-6">
                From the Upper Valley to the World
              </h2>
              <p className="text-silver text-body-lg mb-6 leading-relaxed">
                Based in Hanover, New Hampshire — home to Dartmouth College and a vibrant community 
                of innovators. The Upper Valley has shaped our approach to business: combining 
                academic excellence with practical problem-solving.
              </p>
              <p className="text-silver text-body-md leading-relaxed">
                We believe local businesses deserve world-class digital presence. Our mission is to 
                bring enterprise-quality websites to the community that raised us, helping neighbors 
                compete in the global marketplace.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Robotics Background Section */}
      <section className="relative py-section">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal className="order-2 lg:order-1">
              <span className="text-aurum text-caption font-medium tracking-wider uppercase mb-4 block">
                Our Foundation
              </span>
              <h2 className="font-display text-display-md text-platinum mb-6">
                Built on Robotics Excellence
              </h2>
              <p className="text-silver text-body-lg mb-6 leading-relaxed">
                Our journey began in robotics. As founding members of a championship FIRST Robotics 
                team, we learned what it takes to build something extraordinary from the ground up.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div className="p-4 bg-surface border border-white/5 rounded-xl">
                  <div className="font-display text-3xl text-aurum mb-2">State Champs</div>
                  <p className="text-silver text-body-sm">First year competing</p>
                </div>
                <div className="p-4 bg-surface border border-white/5 rounded-xl">
                  <div className="font-display text-3xl text-aurum mb-2">#1 Rookie</div>
                  <p className="text-silver text-body-sm">Team in the region</p>
                </div>
              </div>
              <p className="text-silver text-body-md leading-relaxed">
                That same drive for precision, innovation, and teamwork now powers every website we build. 
                We bring championship-level dedication to helping local businesses succeed online.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2} className="order-1 lg:order-2">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="/images/robotics.jpg"
                  alt="Robotics competition"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-void/60 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <span className="text-aurum text-caption font-medium tracking-wider uppercase">Where It Started</span>
                  <h3 className="font-display text-2xl text-platinum mt-2">FIRST Robotics</h3>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Dartmouth Connection */}
      <section className="relative py-section border-y border-white/5">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="/images/dartmouth.jpg"
                  alt="Dartmouth College"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-void/60 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <span className="text-aurum text-caption font-medium tracking-wider uppercase">Academic Excellence</span>
                  <h3 className="font-display text-2xl text-platinum mt-2">Dartmouth College</h3>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <span className="text-aurum text-caption font-medium tracking-wider uppercase mb-4 block">
                Inspired by Excellence
              </span>
              <h2 className="font-display text-display-md text-platinum mb-6">
                Ivy League Standards, Local Heart
              </h2>
              <p className="text-silver text-body-lg mb-6 leading-relaxed">
                Growing up in the shadow of Dartmouth College instilled in us a commitment to excellence. 
                We apply the same rigorous standards to web development that the College applies to education.
              </p>
              <p className="text-silver text-body-md leading-relaxed">
                But we're not just about prestige — we're about community. Every website we build is 
                designed to help our neighbors thrive, bringing world-class digital presence to local 
                businesses that deserve to be seen.
              </p>
            </ScrollReveal>
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
