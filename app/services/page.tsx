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
  Globe,
  Zap
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
      timeline: '1-2 weeks',
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
      timeline: '1-2 weeks',
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
      timeline: '1-2 weeks',
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
      timeline: '2-3 weeks',
    },
  ];

  // Different aspects of the $1000 package
  const aspects = [
    {
      icon: Globe,
      title: 'Custom Domain',
      description: 'Your own professional domain name (e.g., yourbusiness.com) with SSL certificate included.',
    },
    {
      icon: Monitor,
      title: '5 Pages',
      description: 'Home, About, Services, Portfolio/Work, and Contact pages - everything you need.',
    },
    {
      icon: Smartphone,
      title: 'Mobile Responsive',
      description: 'Looks perfect on phones, tablets, and desktops with fluid, adaptive layouts.',
    },
    {
      icon: Zap,
      title: 'Cinematic Animations',
      description: 'Scroll-triggered animations, hover effects, and smooth page transitions that wow visitors.',
    },
    {
      icon: Code2,
      title: 'Fast Performance',
      description: 'Optimized for speed with 90+ Lighthouse scores and sub-second load times.',
    },
    {
      icon: Sparkles,
      title: 'SEO Ready',
      description: 'Search engine optimized with proper meta tags, structured data, and best practices.',
    },
  ];

  const process = [
    {
      number: '01',
      title: 'Discovery',
      description: 'We learn about your business, goals, and vision for the website.',
      icon: Monitor,
    },
    {
      number: '02',
      title: 'Design',
      description: 'We create mockups and get your approval before building.',
      icon: Palette,
    },
    {
      number: '03',
      title: 'Development',
      description: 'We build your site with clean code and stunning animations.',
      icon: Code2,
    },
    {
      number: '04',
      title: 'Launch',
      description: 'We deploy your site to your custom domain and hand over the keys.',
      icon: Sparkles,
    },
  ];

  // Maintenance plan details
  const maintenancePlan = {
    title: 'Monthly Maintenance',
    price: '$40/month',
    description: 'Keep your website running smoothly with our comprehensive maintenance plan.',
    features: [
      'Website hosting included',
      'Security updates & patches',
      'Regular backups',
      'Minor content changes (up to 2/month)',
      'Performance monitoring',
      'SSL certificate renewal',
      'Priority support',
      '99.9% uptime guarantee',
    ],
  };

  const faqs = [
    {
      question: 'What is included in the $1000 package?',
      answer: 'Everything you need to get online: a custom domain, 5 professionally designed pages, mobile-responsive layout, cinematic animations, fast performance, and SEO optimization. No hidden fees.',
    },
    {
      question: 'How long does it take to build?',
      answer: 'Most websites are completed within 1-2 weeks from start to finish. We work efficiently without sacrificing quality.',
    },
    {
      question: 'What if I need more than 5 pages?',
      answer: 'We can add additional pages for $100 each. Just let us know what you need during our discovery call.',
    },
    {
      question: 'Do you offer ongoing support?',
      answer: 'Yes! We offer a $40/month maintenance package that includes hosting, security updates, and minor content changes.',
    },
    {
      question: 'What technologies do you use?',
      answer: 'We build with Next.js, React, TypeScript, and Tailwind CSS. For animations, we use GSAP and Framer Motion. This ensures your site is fast, modern, and scalable.',
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
                Premium websites
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-8">
              <motion.h1
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: 'power4.out' }}
                className="font-display text-display-lg text-gradient"
              >
                for $1,000
              </motion.h1>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-silver text-body-lg max-w-xl leading-relaxed"
            >
              Everything you need to establish a professional online presence. 
              Custom domain, stunning design, cinematic animations, and more.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative py-section border-y border-white/5">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <ScrollReveal className="text-center mb-16">
            <span className="text-aurum text-caption font-medium tracking-wider uppercase mb-4 block">
              What You Get
            </span>
            <h2 className="font-display text-display-md text-platinum">
              Everything included for $1,000
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {aspects.map((aspect, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <TiltCard className="h-full">
                  <div className="group h-full p-8 bg-surface border border-white/5 rounded-2xl hover:border-aurum/30 transition-colors duration-500">
                    <div className="w-14 h-14 rounded-xl bg-aurum/10 flex items-center justify-center mb-6 group-hover:bg-aurum/20 transition-colors duration-300">
                      <aspect.icon size={28} className="text-aurum" />
                    </div>
                    <h3 className="font-display text-xl text-platinum mb-3">{aspect.title}</h3>
                    <p className="text-silver text-body-md">{aspect.description}</p>
                  </div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="text-center">
              <MagneticButton>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-aurum text-void rounded-full font-medium hover:shadow-[0_0_40px_rgba(201,169,98,0.4)] transition-shadow duration-500"
                >
                  Get Started for $1,000
                  <ArrowRight size={18} />
                </Link>
              </MagneticButton>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-section">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <ScrollReveal className="text-center mb-16">
            <span className="text-aurum text-caption font-medium tracking-wider uppercase mb-4 block">
              How It Works
            </span>
            <h2 className="font-display text-display-md text-platinum">
              Simple 4-step process
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-4 gap-6">
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

      {/* Maintenance Plan Section */}
      <section className="relative py-section bg-surface/30 border-y border-white/5">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <span className="text-aurum text-caption font-medium tracking-wider uppercase mb-4 block">
                Ongoing Support
              </span>
              <h2 className="font-display text-display-md text-platinum mb-4">
                {maintenancePlan.title}
              </h2>
              <p className="text-silver text-body-lg mb-6">
                {maintenancePlan.description}
              </p>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="font-display text-4xl text-aurum">{maintenancePlan.price}</span>
                <span className="text-silver">after your site is live</span>
              </div>
              <MagneticButton>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-aurum/10 border border-aurum/30 text-aurum rounded-full font-medium hover:bg-aurum hover:text-void transition-all duration-300"
                >
                  Add Maintenance Plan
                  <ArrowRight size={16} />
                </Link>
              </MagneticButton>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="p-8 bg-surface border border-white/5 rounded-2xl">
                <h3 className="font-display text-xl text-platinum mb-6">What's Included</h3>
                <ul className="space-y-4">
                  {maintenancePlan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check size={18} className="text-aurum mt-1 shrink-0" />
                      <span className="text-silver text-body-md">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="relative py-section border-y border-white/5">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <ScrollReveal className="text-center mb-16">
            <span className="text-aurum text-caption font-medium tracking-wider uppercase mb-4 block">
              Capabilities
            </span>
            <h2 className="font-display text-display-md text-platinum">
              Additional services
            </h2>
          </ScrollReveal>

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

      {/* FAQ Section */}
      <section className="relative py-section">
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
