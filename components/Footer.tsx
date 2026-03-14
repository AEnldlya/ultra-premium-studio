'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { MagneticButton } from './MagneticButton';
import { ArrowRight, Sparkles } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    navigation: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Services', href: '/services' },
      { label: 'Portfolio', href: '/portfolio' },
      { label: 'Contact', href: '/contact' },
    ],
    services: [
      { label: 'Brand Strategy', href: '/services' },
      { label: 'Web Design', href: '/services' },
      { label: 'Development', href: '/services' },
      { label: 'Motion Design', href: '/services' },
    ],
    social: [
      { label: 'Twitter', href: '#' },
      { label: 'LinkedIn', href: '#' },
      { label: 'Instagram', href: '#' },
      { label: 'Dribbble', href: '#' },
    ],
  };

  return (
    <footer className="relative bg-charcoal border-t border-white/5">
      {/* CTA Section */}
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 text-aurum mb-6"
            >
              <Sparkles size={16} />
              <span className="text-sm font-medium tracking-wider uppercase">Ready to Start?</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-display-md text-platinum mb-6"
            >
              Let&apos;s create something<br />
              <span className="text-gradient">extraordinary</span> together
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-silver text-body-lg max-w-md mb-8"
            >
              Every great project starts with a conversation. Tell us about your vision, and we&apos;ll bring it to life.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex lg:justify-end"
          >
            <MagneticButton>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-4 px-8 py-5 bg-aurum text-void rounded-full font-medium text-lg hover:shadow-[0_0_40px_rgba(201,169,98,0.4)] transition-shadow duration-500"
              >
                Start Your Project
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </MagneticButton>
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="border-t border-white/5">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <Link href="/" className="inline-flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full border border-aurum/30 flex items-center justify-center">
                  <span className="text-aurum font-display font-bold text-lg">A</span>
                </div>
                <span className="font-display font-medium text-lg tracking-tight">
                  Studio<span className="text-aurum">Aureum</span>
                </span>
              </Link>
              <p className="text-silver text-body-sm max-w-xs">
                Crafting cinematic digital experiences that elevate brands and captivate audiences.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="font-display font-medium text-platinum mb-4">Navigation</h4>
              <ul className="space-y-3">
                {footerLinks.navigation.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-silver text-body-sm hover:text-aurum transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-display font-medium text-platinum mb-4">Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-silver text-body-sm hover:text-aurum transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-display font-medium text-platinum mb-4">Connect</h4>
              <ul className="space-y-3">
                {footerLinks.social.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-silver text-body-sm hover:text-aurum transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-silver/60 text-caption">
              &copy; {currentYear} Studio Aureum. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="#" className="text-silver/60 text-caption hover:text-aurum transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-silver/60 text-caption hover:text-aurum transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
