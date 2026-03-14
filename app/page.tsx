'use client';

import { useEffect, useRef } from 'react';
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

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const floatingElementsRef = useRef<HTMLDivElement>(null);
  const triggersRef = useRef<ScrollTrigger[]>([]);

  useEffect(() => {
    // Hero load animation
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.5 });

      tl.from('.hero-line', {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power4.out',
      })
      .from('.hero-subtitle', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      }, '-=0.5')
      .from('.hero-cta', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      }, '-=0.5');

      // Floating elements parallax
      if (floatingElementsRef.current) {
        const elements = floatingElementsRef.current.querySelectorAll('.float-element');
        elements.forEach((el, i) => {
          const tween = gsap.to(el, {
            y: (i % 2 === 0 ? -50 : 50),
            rotation: (i % 2 === 0 ? 5 : -5),
            ease: 'none',
            scrollTrigger: {
              trigger: heroRef.current,
              start: 'top top',
              end: 'bottom top',
              scrub: 1,
            },
          });
          if (tween.scrollTrigger) {
            triggersRef.current.push(tween.scrollTrigger);
          }
        });
      }
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

  const portfolioItems = [
    {
      title: 'Lumina Finance',
      category: 'Fintech',
      year: '2024',
      color: 'from-aurum/20 to-aurum/5',
    },
    {
      title: 'Nova Architecture',
      category: 'Architecture',
      year: '2024',
      color: 'from-blue-500/20 to-blue-500/5',
    },
    {
      title: 'Vertex Labs',
      category: 'Technology',
      year: '2023',
      color: 'from-purple-500/20 to-purple-500/5',
    },
  ];

  const testimonials = [
    {
      quote: "Studio Aureum transformed our digital presence completely. The attention to detail and cinematic quality exceeded all expectations.",
      author: "Sarah Chen",
      role: "CEO, Lumina Finance",
    },
    {
      quote: "Working with this team felt like having an extension of our own. They understood our vision and elevated it beyond what we imagined.",
      author: "Marcus Webb",
      role: "Founder, Nova Architecture",
    },
    {
      quote: "The animations and interactions they created have become a signature element of our brand. Truly world-class work.",
      author: "Elena Rodriguez",
      role: "CMO, Vertex Labs",
    },
  ];

  return (
    <main className="relative">
      {/* Ambient Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] bg-aurum/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-aurum/3 rounded-full blur-[120px]" />
      </div>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center pt-24 overflow-hidden">
        {/* Floating Elements */}
        <div ref={floatingElementsRef} className="absolute inset-0 pointer-events-none">
          <div className="float-element absolute top-1/4 right-[15%] w-32 h-32 border border-aurum/20 rounded-full" />
          <div className="float-element absolute bottom-1/3 left-[10%] w-24 h-24 border border-aurum/10 rounded-full" />
          <div className="float-element absolute top-1/3 left-[20%] w-2 h-2 bg-aurum/40 rounded-full" />
          <div className="float-element absolute bottom-1/4 right-[25%] w-3 h-3 bg-aurum/30 rounded-full" />
        </div>

        <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-12 py-20">
          <div className="max-w-4xl">
            <div className="overflow-hidden mb-2">
              <h1 className="hero-line font-display text-display-xl text-platinum">
                We craft
              </h1>
            </div>
            <div className="overflow-hidden mb-2">
              <h1 className="hero-line font-display text-display-xl text-gradient">
                cinematic
              </h1>
            </div>
            <div className="overflow-hidden mb-8">
              <h1 className="hero-line font-display text-display-xl text-platinum">
                digital experiences
              </h1>
            </div>

            <p className="hero-subtitle text-silver text-body-lg max-w-xl mb-10 leading-relaxed">
              A premium digital studio specializing in scroll-driven animations, 
              brand identity, and web experiences that leave lasting impressions.
            </p>

            <div className="hero-cta flex flex-wrap items-center gap-4">
              <MagneticButton>
                <Link
                  href="/portfolio"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-aurum text-void rounded-full font-medium hover:shadow-[0_0_40px_rgba(201,169,98,0.4)] transition-shadow duration-500"
                >
                  View Our Work
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </MagneticButton>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 text-platinum hover:text-aurum transition-colors duration-300"
              >
                Start a Project
                <ArrowUpRight size={18} />
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

      {/* Stats Section */}
      <section className="relative py-24 border-y border-white/5">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {[
              { value: 127, suffix: '+', label: 'Projects Delivered' },
              { value: 15, suffix: '+', label: 'Years Experience' },
              { value: 98, suffix: '%', label: 'Client Satisfaction' },
              { value: 24, suffix: '', label: 'Awards Won' },
            ].map((stat, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="text-center lg:text-left">
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

      {/* Services Section */}
      <section className="relative py-section">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-16">
            <ScrollReveal>
              <span className="text-aurum text-caption font-medium tracking-wider uppercase mb-4 block">
                What We Do
              </span>
              <LineReveal
                lines={['Services crafted', 'with precision']}
                className="font-display text-display-lg text-platinum"
                lineClassName="leading-tight"
              />
            </ScrollReveal>
            <ScrollReveal delay={0.2} className="flex items-end">
              <p className="text-silver text-body-lg max-w-md">
                We combine strategic thinking with exceptional craft to deliver 
                digital experiences that drive results and delight users.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <TiltCard className="h-full">
                  <div className="group h-full p-8 lg:p-10 bg-surface border border-white/5 rounded-2xl hover:border-aurum/30 transition-colors duration-500">
                    <div className="w-14 h-14 rounded-xl bg-aurum/10 flex items-center justify-center mb-6 group-hover:bg-aurum/20 transition-colors duration-300">
                      <service.icon size={28} className="text-aurum" />
                    </div>
                    <h3 className="font-display text-xl text-platinum mb-3">{service.title}</h3>
                    <p className="text-silver text-body-md mb-6">{service.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-caption text-silver bg-white/5 rounded-full"
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

      {/* Portfolio Preview */}
      <section className="relative py-section">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
            <ScrollReveal>
              <span className="text-aurum text-caption font-medium tracking-wider uppercase mb-4 block">
                Selected Work
              </span>
              <h2 className="font-display text-display-lg text-platinum">
                Featured Projects
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <Link
                href="/portfolio"
                className="group inline-flex items-center gap-2 text-platinum hover:text-aurum transition-colors duration-300"
              >
                View All Projects
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.15}>
                <Link href="/portfolio" className="group block">
                  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-surface mb-6">
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-50`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="text-caption text-silver">{item.year}</span>
                    </div>
                    <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowUpRight size={18} className="text-platinum" />
                    </div>
                  </div>
                  <h3 className="font-display text-xl text-platinum mb-1 group-hover:text-aurum transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-silver text-body-sm">{item.category}</p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-section">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <ScrollReveal className="text-center mb-16">
            <span className="text-aurum text-caption font-medium tracking-wider uppercase mb-4 block">
              Client Voices
            </span>
            <h2 className="font-display text-display-lg text-platinum">
              What they say
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="h-full p-8 bg-surface border border-white/5 rounded-2xl">
                  <div className="text-aurum text-4xl font-display mb-6">&ldquo;</div>
                  <p className="text-platinum text-body-md mb-8 leading-relaxed">
                    {testimonial.quote}
                  </p>
                  <div>
                    <p className="font-display text-platinum">{testimonial.author}</p>
                    <p className="text-silver text-body-sm">{testimonial.role}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-section">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <div className="relative p-12 lg:p-20 bg-surface border border-white/5 rounded-3xl overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-aurum/10 rounded-full blur-[100px]" />
              <div className="relative z-10 max-w-2xl">
                <h2 className="font-display text-display-md text-platinum mb-6">
                  Ready to elevate your<br />
                  <span className="text-gradient">digital presence?</span>
                </h2>
                <p className="text-silver text-body-lg mb-8 max-w-lg">
                  Let&apos;s discuss your project and explore how we can bring your vision to life 
                  with cinematic precision.
                </p>
                <MagneticButton>
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-aurum text-void rounded-full font-medium hover:shadow-[0_0_40px_rgba(201,169,98,0.4)] transition-shadow duration-500"
                  >
                    Start a Conversation
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
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
