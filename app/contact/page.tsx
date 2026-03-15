'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ScrollReveal';
import { MagneticButton } from '@/components/MagneticButton';
import { Footer } from '@/components/Footer';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  ArrowUpRight,
  CheckCircle,
  Loader2
} from 'lucide-react';

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Create submission object
      const submission = {
        ...formState,
        submittedAt: new Date().toISOString(),
        id: Date.now().toString(),
      };

      // Store in localStorage
      const existingSubmissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
      existingSubmissions.push(submission);
      localStorage.setItem('contactSubmissions', JSON.stringify(existingSubmissions));

      // Log to console
      console.log('\n🚨 NEW FORM SUBMISSION 🚨');
      console.log('========================');
      console.log(`Name: ${formState.name}`);
      console.log(`Email: ${formState.email}`);
      console.log(`Company: ${formState.company || 'N/A'}`);
      console.log(`Budget: ${formState.budget || 'N/A'}`);
      console.log(`Message: ${formState.message}`);
      console.log(`Time: ${submission.submittedAt}`);
      console.log('========================\n');

      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'andy.li.zhang2010@gmail.com',
      href: 'mailto:andy.li.zhang2010@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (603) 306-7508',
      href: 'tel:+16033067508',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Hanover, New Hampshire',
      href: '#',
    },
    {
      icon: Clock,
      label: 'Availability',
      value: 'Mon-Fri, 9am-6pm EST',
      href: '#',
    },
  ];

  const budgetOptions = [
    '$1,000 (One-time website)',
    '$40/month (Maintenance plan)',
    '$1,000 - $2,500',
    '$2,500 - $5,000',
    '$5,000+',
  ];

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
              Contact
            </motion.span>
            <div className="overflow-hidden mb-6">
              <motion.h1
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: 'power4.out' }}
                className="font-display text-display-lg text-platinum"
              >
                Let&apos;s start
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-8">
              <motion.h1
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: 'power4.out' }}
                className="font-display text-display-lg text-gradient"
              >
                a conversation
              </motion.h1>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-silver text-body-lg max-w-xl leading-relaxed"
            >
              Have a project in mind? We&apos;d love to hear about it. Fill out the form below 
              or reach out directly — we typically respond within 24 hours.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-section border-y border-white/5">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                <h2 className="font-display text-display-md text-platinum mb-8">
                  Get in touch
                </h2>
              </ScrollReveal>

              <div className="space-y-6 mb-12">
                {contactInfo.map((item, index) => (
                  <ScrollReveal key={index} delay={index * 0.1}>
                    <a
                      href={item.href}
                      className="group flex items-start gap-4 p-4 -mx-4 rounded-xl hover:bg-surface transition-colors duration-300"
                    >
                      <div className="w-12 h-12 rounded-lg bg-aurum/10 flex items-center justify-center shrink-0 group-hover:bg-aurum/20 transition-colors duration-300">
                        <item.icon size={22} className="text-aurum" />
                      </div>
                      <div>
                        <span className="text-silver text-caption block mb-1">{item.label}</span>
                        <span className="text-platinum font-medium group-hover:text-aurum transition-colors duration-300">
                          {item.value}
                        </span>
                      </div>
                    </a>
                  </ScrollReveal>
                ))}
              </div>

              <ScrollReveal delay={0.4}>
                <div className="p-6 bg-surface border border-white/5 rounded-2xl">
                  <h3 className="font-display text-platinum mb-3">Response Time</h3>
                  <p className="text-silver text-body-sm">
                    We aim to respond to all inquiries within 24 hours during business days. 
                    For urgent matters, please call us directly.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <div className="p-8 lg:p-10 bg-surface border border-white/5 rounded-2xl">
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-16 h-16 rounded-full bg-aurum/20 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle size={32} className="text-aurum" />
                      </div>
                      <h3 className="font-display text-2xl text-platinum mb-3">Message Sent!</h3>
                      <p className="text-silver text-body-md">
                        Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                      </p>
                      <p className="text-silver/60 text-sm mt-4">
                        Your submission has been saved locally.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-platinum text-body-sm mb-2">
                            Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            required
                            value={formState.name}
                            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                            className="w-full px-4 py-3 bg-void border border-white/10 rounded-lg text-platinum placeholder-silver/40 focus:border-aurum/50 focus:outline-none transition-colors"
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-platinum text-body-sm mb-2">
                            Email *
                          </label>
                          <input
                            type="email"
                            id="email"
                            required
                            value={formState.email}
                            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                            className="w-full px-4 py-3 bg-void border border-white/10 rounded-lg text-platinum placeholder-silver/40 focus:border-aurum/50 focus:outline-none transition-colors"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="company" className="block text-platinum text-body-sm mb-2">
                            Company
                          </label>
                          <input
                            type="text"
                            id="company"
                            value={formState.company}
                            onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                            className="w-full px-4 py-3 bg-void border border-white/10 rounded-lg text-platinum placeholder-silver/40 focus:border-aurum/50 focus:outline-none transition-colors"
                            placeholder="Your company"
                          />
                        </div>
                        <div>
                          <label htmlFor="budget" className="block text-platinum text-body-sm mb-2">
                            Budget Range
                          </label>
                          <select
                            id="budget"
                            value={formState.budget}
                            onChange={(e) => setFormState({ ...formState, budget: e.target.value })}
                            className="w-full px-4 py-3 bg-void border border-white/10 rounded-lg text-platinum focus:border-aurum/50 focus:outline-none transition-colors appearance-none cursor-pointer"
                          >
                            <option value="" className="bg-void">Select a range</option>
                            {budgetOptions.map((option) => (
                              <option key={option} value={option} className="bg-void">
                                {option}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-platinum text-body-sm mb-2">
                          Project Details *
                        </label>
                        <textarea
                          id="message"
                          required
                          rows={5}
                          value={formState.message}
                          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                          className="w-full px-4 py-3 bg-void border border-white/10 rounded-lg text-platinum placeholder-silver/40 focus:border-aurum/50 focus:outline-none transition-colors resize-none"
                          placeholder="Tell us about your project, goals, and timeline..."
                        />
                      </div>

                      <MagneticButton className="w-full">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-aurum text-void rounded-full font-medium hover:shadow-[0_0_40px_rgba(201,169,98,0.4)] transition-shadow disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 size={18} className="animate-spin" />
                              Sending...
                            </>
                          ) : (
                            <>
                              Send Message
                              <Send size={18} />
                            </>
                          )}
                        </button>
                      </MagneticButton>
                    </form>
                  )}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-section">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <ScrollReveal className="text-center mb-16">
            <span className="text-aurum text-caption font-medium tracking-wider uppercase mb-4 block">
              FAQ
            </span>
            <h2 className="font-display text-display-md text-platinum">
              Common questions
            </h2>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">
            {[
              {
                q: 'What is included in the $1000 package?',
                a: 'Everything you need to get online: a custom domain, 5 professionally designed pages, mobile-responsive layout, cinematic animations, fast performance, and SEO optimization. No hidden fees.',
              },
              {
                q: 'How long does it take to build?',
                a: 'Most websites are completed within 1-2 weeks from start to finish. We work efficiently without sacrificing quality.',
              },
              {
                q: 'What if I need more than 5 pages?',
                a: 'We can add additional pages for $100 each. Just let us know what you need during our discovery call.',
              },
              {
                q: 'Do you offer ongoing support?',
                a: 'Yes! We offer a $40/month maintenance package that includes hosting, security updates, and minor content changes.',
              },
            ].map((faq, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="p-6 bg-surface border border-white/5 rounded-xl h-full">
                  <h3 className="font-display text-platinum mb-3">{faq.q}</h3>
                  <p className="text-silver text-body-sm">{faq.a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
