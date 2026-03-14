'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollReveal } from '@/components/ScrollReveal';
import { LineReveal } from '@/components/TextReveal';
import { TiltCard } from '@/components/TiltCard';
import { MagneticButton } from '@/components/MagneticButton';
import { Footer } from '@/components/Footer';
import { 
  Palette, 
  Code2, 
  Sparkles, 
  Layers, 
  ArrowRight, 
  Check,
  ChevronDown,
  Monitor,
  Smartphone,
  ShoppingBag,
  Gauge
} from 'lucide-react';
import Link from 'next/link';

export default function ServicesPage() {
  const [activeService, setActiveService] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const services = [
    {
      icon: Palette,
      title: 'Brand Strategy',
      shortDesc: 'Distinctive brand identities that resonate',
      fullDesc: 'We craft comprehensive brand strategies that position your business for success. From visual identity systems to brand guidelines, we ensure every touchpoint communicates your unique value proposition with clarity and impact.',
      features: [
        'Brand Identity Design',
        'Visual System Development',
        'Brand Guidelines',
        'Logo Design & Refinement',
        'Brand Voice & Messaging',
        'Market Positioning',
      ],
      deliverables: ['Brand Strategy Document', 'Visual Identity System', 'Brand Guidelines', 'Asset Library'],
      timeline: '4-6 weeks',
      price: 'From $15,000',
    },
    {
      icon: Code2,
      title: 'Web Development',
      shortDesc: 'Performance-driven digital experiences',
      fullDesc: 'We build blazing-fast, accessible websites using cutting-edge technologies. Our development process prioritizes performance, SEO, and user experience to ensure your site not only looks stunning but drives real business results.',
      features: [
        'Next.js & React Development',
        'Headless CMS Integration',
        'E-commerce Solutions',
        'Custom Web Applications',
        'API Development',
        'Performance Optimization',
      ],
      deliverables: ['Custom Website', 'CMS Setup', 'Documentation', 'Training Session'],
      timeline: '8-12 weeks',
      price: 'From $25,000',
    },
    {
      icon: Sparkles,
      title: 'Motion Design',
      shortDesc: 'Cinematic animations that captivate',
      fullDesc: 'We create scroll-driven animations and micro-interactions that bring your digital experience to life. Every movement is purposeful, enhancing usability while creating memorable moments that differentiate your brand.',
      features: [
        'Scroll-Triggered Animations',
        'Page Transition Design',
        'Micro-interactions',
        'Loading Animations',
        'Lottie Animations',
        '3D Motion Graphics',
      ],
      deliverables: ['Animation Library', 'Motion Guidelines', 'Interactive Prototypes', 'Source Files'],
      timeline: '3-5 weeks',
      price: 'From $8,000',
    },
    {
      icon: Layers,
      title: 'Digital Products',
      shortDesc: 'End-to-end product experiences',
      fullDesc: 'From concept to launch, we design and develop digital products that users love. Our user-centered approach combines research-driven insights with exceptional craft to create products that solve real problems.',
      features: [
        'UX Research & Strategy',
        'UI Design Systems',
        'Prototyping & Testing',
        'Design Sprints',
        'User Testing',
        'Product Roadmapping',
      ],
      deliverables: ['Product Strategy', 'Design System', 'Interactive Prototype', 'User Research Report'],
      timeline: '12-16 weeks',
      price: 'From $40,000',
    },
  ];

  const process = [
    {
      number: '01',
      title: 'Discovery',
      description: 'We dive deep into your business, audience, and goals to establish a solid foundation for the project.',
      icon: Monitor,
    },
    {
      number: '02',
      title: 'Strategy',
      description: 'Based on our findings, we develop a comprehensive strategy that aligns with your objectives.',
      icon: Smartphone,
    },
    {
      number: '03',
      title: 'Design',
      description: 'We craft pixel-perfect designs that bring the strategy to life with stunning visuals.',
      icon: Palette,
    },
    {
      number: '04',
      title: 'Development',
      description: 'Our engineers build the solution with clean code, optimized performance, and rigorous testing.',
      icon: Code2,
    },
    {
      number: '05',
      title: 'Launch',
      description: 'We ensure a smooth deployment and provide support as your new experience goes live.',
      icon: Sparkles,
    },
  ];

  const faqs = [
    {
      question: 'What is your typical project timeline?',
      answer: 'Project timelines vary based on scope and complexity. A typical brand identity project takes 4-6 weeks, while a full website build ranges from 8-12 weeks. We provide detailed timelines during our proposal phase.',
    },
    {
      question: 'How do you handle project communication?',
      answer: 'We maintain transparent communication through dedicated Slack channels, weekly check-ins, and shared project management tools. You will always know the status of your project and have direct access to our team.',
    },
    {
      question: 'What technologies do you specialize in?',
      answer: 'We specialize in modern web technologies including Next.js, React, TypeScript, and Tailwind CSS. For animations, we use GSAP, Framer Motion, and Lottie. We also work with various headless CMS platforms.',
    },
    {
      question: 'Do you offer ongoing support after launch?',
      answer: 'Yes, we offer maintenance packages and retainer agreements for ongoing support. This includes performance monitoring, security updates, content updates, and continuous improvement based on analytics.',
    },
    {
      question: 'How do you price your projects?',
      answer: 'We typically work on a project basis with fixed pricing based on scope. This ensures transparency and eliminates surprises. For ongoing work, we offer monthly retainer arrangements.',
    },
  ];

  return (
    <main className="relative pt-32">
      {/* Hero Section */}
      <section className="relative mb-24">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-aurum text-caption font-medium tracking-wider uppercase mb-6 block"
            >
              Services
            </motion.span>
            <div className="overflow-hidden mb-6">
              <motion.h1
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: 'power4.out' }}
                className="font-display text-display-lg text-platinum"
              >
                Everything you need
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-8">
              <motion.h1
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: 'power4.out' }}
                className="font-display text-display-lg text-gradient"
              >
                to stand out online
              </motion.h1>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-silver text-body-lg max-w-xl leading-relaxed"
            >
              From brand strategy to web development, we offer comprehensive digital services 
              designed to elevate your presence and drive measurable results.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="relative py-section border-y border-white/5">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Service Navigation */}
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-32 space-y-2">
                {services.map((service, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveService(index)}
                    className={`w-full text-left p-6 rounded-xl transition-all duration-300 ${
                      activeService === index
                        ? 'bg-aurum/10 border border-aurum/30'
                        : 'bg-surface border border-white/5 hover:border-white/10'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        activeService === index ? 'bg-aurum/20' : 'bg-white/5'
                      }`}>
                        <service.icon size={24} className={activeService === index ? 'text-aurum' : 'text-silver'} />
                      </div>
                      <div>
                        <h3 className={`font-display text-lg mb-1 ${
                          activeService === index ? 'text-platinum' : 'text-silver'
                        }`}>
                          {service.title}
                        </h3>
                        <p className="text-silver/60 text-body-sm">{service.shortDesc}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Service Content */}
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="mb-8">
                    <h2 className="font-display text-display-md text-platinum mb-4">
                      {services[activeService].title}
                    </h2>
                    <p className="text-silver text-body-lg leading-relaxed">
                      {services[activeService].fullDesc}
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="p-6 bg-surface border border-white/5 rounded-xl">
                      <h4 className="font-display text-platinum mb-4">What&apos;s Included</h4>
                      <ul className="space-y-3">
                        {services[activeService].features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3 text-silver text-body-sm">
                            <Check size={16} className="text-aurum mt-1 shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-6 bg-surface border border-white/5 rounded-xl">
                      <h4 className="font-display text-platinum mb-4">Deliverables</h4>
                      <ul className="space-y-3">
                        {services[activeService].deliverables.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-silver text-body-sm">
                            <Check size={16} className="text-aurum mt-1 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-6 p-6 bg-aurum/5 border border-aurum/20 rounded-xl">
                    <div>
                      <span className="text-silver text-body-sm block mb-1">Timeline</span>
                      <span className="font-display text-platinum text-lg">{services[activeService].timeline}</span>
                    </div>
                    <div className="w-px h-12 bg-white/10 hidden sm:block" />
                    <div>
                      <span className="text-silver text-body-sm block mb-1">Investment</span>
                      <span className="font-display text-aurum text-lg">{services[activeService].price}</span>
                    </div>
                    <div className="flex-1" />
                    <MagneticButton>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-aurum text-void rounded-full font-medium hover:shadow-[0_0_30px_rgba(201,169,98,0.3)] transition-shadow"
                      >
                        Get Started
                        <ArrowRight size={16} />
                      </Link>
                    </MagneticButton>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-section">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <ScrollReveal className="text-center mb-16">
            <span className="text-aurum text-caption font-medium tracking-wider uppercase mb-4 block">
              How We Work
            </span>
            <h2 className="font-display text-display-md text-platinum">
              Our proven process
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-5 gap-6">
            {process.map((step, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="relative text-center">
                  <div className="w-16 h-16 rounded-2xl bg-surface border border-white/5 flex items-center justify-center mx-auto mb-6">
                    <step.icon size={28} className="text-aurum" />
                  </div>
                  <span className="text-aurum/40 font-display text-sm mb-2 block">{step.number}</span>
                  <h3 className="font-display text-lg text-platinum mb-2">{step.title}</h3>
                  <p className="text-silver text-body-sm">{step.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-section border-y border-white/5">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal className="text-center mb-16">
              <span className="text-aurum text-caption font-medium tracking-wider uppercase mb-4 block">
                FAQ
              </span>
              <h2 className="font-display text-display-md text-platinum">
                Common questions
              </h2>
            </ScrollReveal>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <ScrollReveal key={index} delay={index * 0.05}>
                  <div className="bg-surface border border-white/5 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full flex items-center justify-between p-6 text-left"
                    >
                      <span className="font-display text-platinum pr-4">{faq.question}</span>
                      <ChevronDown
                        size={20}
                        className={`text-aurum shrink-0 transition-transform duration-300 ${
                          openFaq === index ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {openFaq === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="px-6 pb-6">
                            <p className="text-silver text-body-md leading-relaxed">{faq.answer}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
