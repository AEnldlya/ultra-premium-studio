'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ScrollReveal } from '@/components/ScrollReveal';
import { LineReveal } from '@/components/TextReveal';
import { TiltCard } from '@/components/TiltCard';
import { Footer } from '@/components/Footer';
import { ArrowUpRight, X, ExternalLink } from 'lucide-react';

export default function PortfolioPage() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Fintech', 'Technology', 'Architecture', 'E-commerce', 'Healthcare'];

  const projects = [
    {
      title: 'Lumina Finance',
      category: 'Fintech',
      year: '2024',
      description: 'A complete digital transformation for a leading fintech startup, featuring real-time data visualization and seamless user experience.',
      services: ['Brand Strategy', 'Web Development', 'Motion Design'],
      results: ['340% increase in user engagement', '2.5s average load time', '4.9/5 user satisfaction'],
      color: 'from-amber-500/30 to-amber-500/5',
      gradient: 'bg-gradient-to-br from-amber-500/20 to-orange-500/10',
    },
    {
      title: 'Nova Architecture',
      category: 'Architecture',
      year: '2024',
      description: 'An immersive portfolio experience for an award-winning architecture firm, showcasing their work through cinematic scroll animations.',
      services: ['Web Design', 'Motion Design', 'CMS Integration'],
      results: ['180% increase in inquiries', 'Featured in Awwwards', '12 awards won'],
      color: 'from-blue-500/30 to-blue-500/5',
      gradient: 'bg-gradient-to-br from-blue-500/20 to-cyan-500/10',
    },
    {
      title: 'Vertex Labs',
      category: 'Technology',
      year: '2023',
      description: 'A futuristic brand identity and web platform for an AI research company pushing the boundaries of machine learning.',
      services: ['Brand Identity', 'Web Development', 'Motion Design'],
      results: ['$12M Series A raised', '500% traffic increase', 'Featured in TechCrunch'],
      color: 'from-purple-500/30 to-purple-500/5',
      gradient: 'bg-gradient-to-br from-purple-500/20 to-pink-500/10',
    },
    {
      title: 'Ember Commerce',
      category: 'E-commerce',
      year: '2023',
      description: 'A headless e-commerce platform with immersive product experiences and seamless checkout flow.',
      services: ['E-commerce', 'UX Design', 'Development'],
      results: ['45% increase in conversions', '3x faster checkout', '99.9% uptime'],
      color: 'from-rose-500/30 to-rose-500/5',
      gradient: 'bg-gradient-to-br from-rose-500/20 to-red-500/10',
    },
    {
      title: 'Pulse Health',
      category: 'Healthcare',
      year: '2023',
      description: 'A patient-centric healthcare platform designed to simplify appointment booking and medical record access.',
      services: ['UX Research', 'UI Design', 'Development'],
      results: ['60% reduction in booking time', 'HIPAA compliant', '4.8 app store rating'],
      color: 'from-emerald-500/30 to-emerald-500/5',
      gradient: 'bg-gradient-to-br from-emerald-500/20 to-teal-500/10',
    },
    {
      title: 'Cipher Security',
      category: 'Technology',
      year: '2022',
      description: 'A bold rebrand and website for a cybersecurity firm, communicating trust and technical excellence.',
      services: ['Brand Strategy', 'Web Design', 'Development'],
      results: ['200% increase in leads', 'Enterprise clients acquired', 'Industry recognition'],
      color: 'from-indigo-500/30 to-indigo-500/5',
      gradient: 'bg-gradient-to-br from-indigo-500/20 to-violet-500/10',
    },
  ];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <main className="relative pt-32">
      {/* Hero Section */}
      <section className="relative mb-16">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-aurum text-caption font-medium tracking-wider uppercase mb-6 block"
            >
              Portfolio
            </motion.span>
            <div className="overflow-hidden mb-6">
              <motion.h1
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: 'power4.out' }}
                className="font-display text-display-lg text-platinum"
              >
                Selected work
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-8">
              <motion.h1
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: 'power4.out' }}
                className="font-display text-display-lg text-gradient"
              >
                that defines us
              </motion.h1>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-silver text-body-lg max-w-xl leading-relaxed"
            >
              A curated collection of projects that showcase our expertise in brand strategy, 
              web development, and motion design.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="relative mb-12">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    filter === category
                      ? 'bg-aurum text-void'
                      : 'bg-surface text-silver border border-white/5 hover:border-aurum/30'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="relative mb-24">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <motion.div 
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <TiltCard className="h-full">
                    <button
                      onClick={() => setSelectedProject(projects.indexOf(project))}
                      className="group w-full text-left h-full"
                    >
                      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                        <div className={`absolute inset-0 ${project.gradient}`} />
                        <div className="absolute inset-0 bg-surface" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="font-display text-6xl text-white/10">
                            {project.title.charAt(0)}
                          </span>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent" />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-void/80 backdrop-blur-sm rounded-full text-caption text-platinum">
                            {project.category}
                          </span>
                        </div>
                        <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <ArrowUpRight size={18} className="text-platinum" />
                        </div>
                      </div>
                      <div className="px-2">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-display text-xl text-platinum group-hover:text-aurum transition-colors duration-300">
                            {project.title}
                          </h3>
                          <span className="text-silver text-caption">{project.year}</span>
                        </div>
                        <p className="text-silver text-body-sm line-clamp-2">{project.description}</p>
                      </div>
                    </button>
                  </TiltCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div 
              className="absolute inset-0 bg-void/95 backdrop-blur-xl"
              onClick={() => setSelectedProject(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-surface border border-white/10 rounded-3xl"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <X size={20} className="text-platinum" />
              </button>

              {selectedProject !== null && (
                <div>
                  {/* Hero Image */}
                  <div className={`relative aspect-video ${projects[selectedProject].gradient}`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-display text-[12rem] text-white/5">
                        {projects[selectedProject].title.charAt(0)}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:p-12">
                    <div className="flex flex-wrap items-center gap-4 mb-6">
                      <span className="px-4 py-1 bg-aurum/10 text-aurum rounded-full text-caption">
                        {projects[selectedProject].category}
                      </span>
                      <span className="text-silver text-caption">{projects[selectedProject].year}</span>
                    </div>

                    <h2 className="font-display text-display-md text-platinum mb-4">
                      {projects[selectedProject].title}
                    </h2>

                    <p className="text-silver text-body-lg mb-8 leading-relaxed">
                      {projects[selectedProject].description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                      <div>
                        <h4 className="font-display text-platinum mb-4">Services</h4>
                        <div className="flex flex-wrap gap-2">
                          {projects[selectedProject].services.map((service, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-white/5 text-silver rounded-full text-body-sm"
                            >
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-display text-platinum mb-4">Results</h4>
                        <ul className="space-y-2">
                          {projects[selectedProject].results.map((result, i) => (
                            <li key={i} className="text-silver text-body-sm flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-aurum" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <button className="inline-flex items-center gap-2 px-6 py-3 bg-aurum text-void rounded-full font-medium hover:shadow-[0_0_30px_rgba(201,169,98,0.3)] transition-shadow">
                      View Live Site
                      <ExternalLink size={16} />
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="relative py-section border-t border-white/5">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="font-display text-display-md text-platinum mb-4">
                Have a project in mind?
              </h2>
              <p className="text-silver text-body-lg mb-8">
                Let&apos;s discuss how we can bring your vision to life with the same 
                attention to detail and cinematic quality.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-aurum text-void rounded-full font-medium hover:shadow-[0_0_40px_rgba(201,169,98,0.4)] transition-shadow"
              >
                Start a Project
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
