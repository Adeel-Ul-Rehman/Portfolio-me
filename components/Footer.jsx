'use client';

import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-slate-950 text-slate-400 border-t border-slate-900 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-white text-slate-950 font-bold flex items-center justify-center text-sm">
            AR
          </div>
          <div>
            <span className="text-white font-semibold block">Adeel Ul Rehman</span>
            <span className="text-xs text-slate-500">Full Stack Developer & AI/ML Specialist</span>
          </div>
        </div>

        <p className="text-xs text-slate-500 text-center md:text-left">
          © {new Date().getFullYear()} Adeel Ul Rehman. Built with Next.js, React & Tailwind CSS.
        </p>

        <button
          onClick={scrollToTop}
          className="p-3 rounded-xl bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors flex items-center gap-2 text-xs font-semibold"
          aria-label="Back to top"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-4 h-4" />
        </button>

      </div>
    </footer>
  );
}
