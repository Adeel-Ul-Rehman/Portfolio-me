'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, Layers, Cpu, Sparkles, ShieldCheck } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden z-10 my-8 flex flex-col"
        >
          {/* Header Bar */}
          <div className="px-4 sm:px-6 py-3.5 sm:py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/90 shrink-0">
            <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-900 shrink-0"></span>
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-slate-500 truncate">
                {project.category}
              </span>
              {project.badge && (
                <span className="text-[10px] sm:text-[11px] font-semibold px-2 sm:px-2.5 py-0.5 rounded-full bg-slate-200/70 text-slate-700 shrink-0">
                  {project.badge}
                </span>
              )}
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-slate-400 hover:text-slate-900 hover:bg-slate-200/60 transition-colors shrink-0 ml-2"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Content (Scrollable) */}
          <div className="p-4 sm:p-6 md:p-8 space-y-6 overflow-y-auto">
            {/* Project Image Preview inside Mockup Frame */}
            {project.image && (
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-950">
                {/* Browser Top Window Bar */}
                <div className="px-4 py-2 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <div className="px-4 py-0.5 rounded-md bg-slate-800 text-slate-400 font-mono text-[11px] truncate max-w-[240px] sm:max-w-md">
                    {project.liveUrl || `https://portfolio.internal/projects/${project.id}`}
                  </div>
                  <div className="w-8"></div>
                </div>

                {/* Image */}
                <div className="relative aspect-[16/9] w-full bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            )}

            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight mb-2">
                {project.title}
              </h3>
              <p className="text-base text-slate-600 font-medium">
                {project.tagline}
              </p>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              {project.description}
            </p>

            {/* Admin Panel Overview (if present) */}
            {project.adminOverview && (
              <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-100 text-slate-800 space-y-1.5">
                <div className="font-semibold text-blue-950 text-xs sm:text-sm flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>{project.adminTitle || 'Dedicated Management & Admin Portal'}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {project.adminOverview}
                </p>
                {project.adminCredentials && (
                  <div className="mt-2.5 pt-2.5 border-t border-blue-200/60 flex flex-wrap items-center gap-2 text-xs">
                    <span className="font-semibold text-blue-950">Demo Credentials:</span>
                    <span className="font-mono bg-white px-2.5 py-1 rounded-md border border-blue-200 text-slate-800">
                      Email: <span className="font-semibold text-blue-900">{project.adminCredentials.email}</span>
                    </span>
                    <span className="font-mono bg-white px-2.5 py-1 rounded-md border border-blue-200 text-slate-800">
                      Password: <span className="font-semibold text-blue-900">{project.adminCredentials.password}</span>
                    </span>
                  </div>
                )}
              </div>
            )}

            {/* Key Features List */}
            <div className="space-y-3 pt-2">
              <h4 className="text-sm font-semibold text-slate-900 tracking-wide uppercase flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-slate-700" /> Key Features & Architecture
              </h4>
              <ul className="space-y-2.5">
                {project.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-slate-900 shrink-0 mt-0.5" />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Pills */}
            <div className="pt-2">
              <h4 className="text-sm font-semibold text-slate-900 tracking-wide uppercase mb-3 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-slate-700" /> Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg bg-slate-100 border border-slate-200 text-slate-800 text-xs font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Links */}
            <div className="pt-5 border-t border-slate-100 flex flex-wrap items-center gap-2.5 sm:gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl bg-slate-950 text-white font-medium text-xs sm:text-sm hover:bg-slate-800 transition-colors shadow flex-1 sm:flex-none whitespace-nowrap"
                >
                  <span>{project.id === 'hadi-bookstore' ? 'Visit Storefront' : project.adminUrl ? 'Visit Customer Portal' : 'Visit Live Website'}</span>
                  <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </a>
              )}
              {project.adminUrl && (
                <a
                  href={project.adminUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl bg-blue-600 text-white font-medium text-xs sm:text-sm hover:bg-blue-700 transition-colors shadow flex-1 sm:flex-none whitespace-nowrap"
                >
                  <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span>Visit Admin Panel</span>
                  <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl border border-slate-300 text-slate-800 font-medium text-xs sm:text-sm hover:bg-slate-50 transition-colors flex-1 sm:flex-none whitespace-nowrap"
                >
                  <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span>GitHub Repository</span>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
