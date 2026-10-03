'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Send, Copy, Check, FileText, Sparkles } from 'lucide-react';

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('ajadeel229@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 md:py-24 bg-white relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Contact Details */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-semibold uppercase tracking-wider mb-3 border border-slate-200">
                <Sparkles className="w-3.5 h-3.5 text-slate-900" /> Get In Touch
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
                Let&apos;s build something extraordinary together.
              </h2>
              <p className="text-slate-600 font-medium text-base mt-4 leading-relaxed">
                Whether you have an ambitious AI project, need a scalable full-stack web application, or want to discuss automation pipelines—I&apos;m always ready to collaborate.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              
              {/* Email Card with Quick Copy */}
              <div className="bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-200 flex items-center justify-between gap-3 group">
                <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-slate-950 text-white flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-xs font-medium text-slate-500 block">Direct Email</span>
                    <a
                      href="mailto:ajadeel229@gmail.com"
                      className="font-bold text-slate-950 hover:text-slate-700 text-sm sm:text-base block truncate"
                    >
                      ajadeel229@gmail.com
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 sm:p-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-950 hover:text-white transition-colors shrink-0"
                  title="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Card */}
              <div className="bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-200 flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-slate-950 text-white flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <span className="text-xs font-medium text-slate-500 block">Phone / WhatsApp</span>
                  <a href="tel:03090005634" className="font-bold text-slate-950 text-sm sm:text-base hover:text-slate-700">
                    +92 309 0005634
                  </a>
                </div>
              </div>

              {/* Location Card */}
              <div className="bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-200 flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-slate-950 text-white flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <span className="text-xs font-medium text-slate-500 block">Location</span>
                  <span className="font-bold text-slate-950 text-sm sm:text-base">
                    Lahore, Pakistan
                  </span>
                </div>
              </div>

            </div>

            {/* Social Links */}
            <div className="pt-2 sm:pt-4 flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="https://github.com/Adeel-Ul-Rehman"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-slate-950 text-white text-xs sm:text-sm font-semibold hover:bg-slate-800 transition-colors shadow flex-1 sm:flex-none whitespace-nowrap"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Profile</span>
              </a>

              <a
                href="https://linkedin.com/in/adeel-ul-rehman-73a088294"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl border border-slate-300 text-slate-800 text-xs sm:text-sm font-semibold hover:bg-slate-50 transition-colors flex-1 sm:flex-none whitespace-nowrap"
              >
                <Linkedin className="w-4 h-4 text-blue-600" />
                <span>LinkedIn</span>
              </a>
            </div>

          </div>

          {/* Right Column: Quick Message Form */}
          <div className="lg:col-span-7 bg-slate-50/80 rounded-3xl p-5 sm:p-8 md:p-10 border border-slate-200 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-950 mb-2">
              Send a Direct Message
            </h3>
            <p className="text-sm font-medium text-slate-500 mb-8">
              Fill out the form below to send me a message directly.
            </p>

            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-emerald-950">Message Received!</h4>
                <p className="text-sm text-emerald-800">
                  Thank you for reaching out! I will get back to your email shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-950 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-950 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
                    Project / Message Details
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me about your project idea, hiring inquiry, or collaboration..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-950 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 sm:py-4 rounded-xl bg-slate-950 text-white font-semibold text-sm hover:bg-slate-800 transition-colors shadow-md flex items-center justify-center gap-2 group whitespace-nowrap"
                >
                  <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
