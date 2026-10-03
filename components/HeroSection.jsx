'use client';

import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, RotateCcw, Sparkles, FileText } from 'lucide-react';

export default function HeroSection() {
  const desktopVideoRef = useRef(null);
  const mobileVideoRef = useRef(null);
  const [isPausedOnEnd, setIsPausedOnEnd] = useState(false);

  useEffect(() => {
    const playVideo = (v) => {
      if (!v) return;
      const playPromise = v.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
    };
    playVideo(desktopVideoRef.current);
    playVideo(mobileVideoRef.current);
  }, []);

  const handleTimeUpdate = (ref) => {
    const video = ref?.current;
    if (!video) return;
    
    // Auto-freeze smoothly at the final frame
    if (video.duration && video.currentTime >= video.duration - 0.12) {
      video.pause();
      setIsPausedOnEnd(true);
    }
  };

  const handleEnded = () => {
    setIsPausedOnEnd(true);
  };

  const handleReplay = () => {
    [desktopVideoRef.current, mobileVideoRef.current].forEach((video) => {
      if (!video) return;
      video.currentTime = 0;
      video.play();
    });
    setIsPausedOnEnd(false);
  };

  return (
    <section className="relative pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 md:pb-20 overflow-hidden bg-white">
      {/* Ambient Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-slate-100/70 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">

        {/* MOBILE VIEW (Strictly Ordered for Mobile, hidden on lg screens) */}
        <div className="flex flex-col lg:hidden space-y-4">
          
          {/* 1. Role Badge (Clean Multi-line on Mobile) */}
          <div className="flex justify-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold uppercase tracking-tight shadow-xs">
              <Sparkles className="w-4 h-4 text-slate-900 shrink-0 self-start mt-0.5" />
              <div className="flex flex-col leading-snug">
                <span>Full-Stack Software Engineer</span>
                <span className="text-slate-600 font-medium">& AI Systems Architect</span>
              </div>
            </div>
          </div>

          {/* 2. Video Character Walking */}
          <div className="flex flex-col justify-center items-center relative group w-full py-0.5">
            <video
              ref={mobileVideoRef}
              src="/videos/hero_vid.mp4"
              poster="/hero_poster.png"
              playsInline
              muted
              autoPlay
              onTimeUpdate={() => handleTimeUpdate(mobileVideoRef)}
              onEnded={handleEnded}
              className="w-auto max-w-full h-[320px] sm:h-[420px] object-contain outline-none border-0 shadow-none ring-0 select-none"
              style={{
                mixBlendMode: 'multiply',
                filter: 'contrast(1.04) brightness(1.02)',
                WebkitMaskImage: 'radial-gradient(ellipse 85% 90% at 50% 50%, black 70%, transparent 98%)',
                maskImage: 'radial-gradient(ellipse 85% 90% at 50% 50%, black 70%, transparent 98%)',
              }}
            />

            {/* Floating Status Pill */}
            <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-md border border-slate-200 px-3 py-1 rounded-full text-[11px] font-semibold text-slate-800 flex items-center gap-1.5 shadow-sm whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Adeel Ul Rehman</span>
            </div>

            {/* Replay Button on Mobile */}
            {isPausedOnEnd && (
              <button
                onClick={handleReplay}
                className="absolute bottom-2 bg-slate-950/90 text-white backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-medium flex items-center gap-1.5 shadow-md cursor-pointer whitespace-nowrap"
                aria-label="Replay intro video"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Replay Walk</span>
              </button>
            )}
          </div>

          {/* 3. Headline Text */}
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950 leading-[1.2]">
              Turning ideas into <span className="underline decoration-slate-300 underline-offset-8">production</span> software, Apps, intelligent AI & automation.
            </h1>
          </div>

          {/* 4. Subtitle / Bio Description */}
          <div>
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              Hi, I&apos;m <span className="font-semibold text-slate-900">Adeel Ul Rehman</span> — a Full-Stack Engineer and AI Systems Architect. I build high-performance web platforms, real-time operating systems, and intelligent computer vision & generative 3D architectures engineered for production scale.
            </p>
          </div>

          {/* 5. Action Buttons ALL IN ONE ROW on Mobile (Zero multi-line wrapping) */}
          <div className="grid grid-cols-3 gap-1.5 w-full pt-1">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-1 px-1 py-2.5 rounded-xl bg-slate-950 text-white font-medium text-[11px] min-[390px]:text-xs whitespace-nowrap shadow-md hover:bg-slate-800 transition-all text-center"
            >
              <span>Selected Work</span>
              <ArrowRight className="w-3 h-3 shrink-0" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-1 px-1 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-800 font-medium text-[11px] min-[390px]:text-xs whitespace-nowrap shadow-xs hover:bg-slate-50 transition-all text-center"
            >
              <span>Get in Touch</span>
            </a>

            <a
              href="https://drive.google.com/file/d/1BN1y434DKlDg7HYbiGfx2rW3rRLYco-u/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1 px-1 py-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-950 font-medium text-[11px] min-[390px]:text-xs whitespace-nowrap transition-colors text-center"
            >
              <FileText className="w-3 h-3 shrink-0" />
              <span>Resume</span>
            </a>
          </div>

          {/* 6. Quick Metrics Bar in Order */}
          <div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-200/80 text-center">
            <div className="flex flex-col">
              <span className="block text-xl font-bold text-slate-950 tracking-tight">13+</span>
              <span className="text-[11px] text-slate-500 font-medium whitespace-nowrap leading-tight mt-0.5">Shipped Systems</span>
            </div>
            <div className="flex flex-col">
              <span className="block text-xl font-bold text-slate-950 tracking-tight">99.4%</span>
              <span className="text-[11px] text-slate-500 font-medium whitespace-nowrap leading-tight mt-0.5">Deliverability</span>
            </div>
            <div className="flex flex-col">
              <span className="block text-xl font-bold text-slate-950 tracking-tight">100%</span>
              <span className="text-[11px] text-slate-500 font-medium whitespace-nowrap leading-tight mt-0.5">Production Code</span>
            </div>
          </div>

        </div>

        {/* DESKTOP VIEW (100% Preserved 2-Column Layout, hidden on mobile) */}
        <div className="hidden lg:grid lg:grid-cols-12 lg:gap-x-12 xl:gap-x-16 items-center">
          
          {/* Left Column: All Text, Actions & Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col justify-start text-left z-10"
          >
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold tracking-wide uppercase mb-5 w-fit shadow-xs whitespace-nowrap">
              <Sparkles className="w-3.5 h-3.5 text-slate-900 shrink-0" />
              <span>Full-Stack Software Engineer & AI Systems Architect</span>
            </div>

            {/* Title */}
            <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 leading-[1.1] mb-5">
              Turning ideas into <span className="underline decoration-slate-300 underline-offset-8">production</span> software, Apps, intelligent AI & automation.
            </h1>

            {/* Description */}
            <p className="text-lg text-slate-600 font-normal leading-relaxed max-w-2xl mb-8">
              Hi, I&apos;m <span className="font-semibold text-slate-900">Adeel Ul Rehman</span> — a Full-Stack Engineer and AI Systems Architect. I build high-performance web platforms, real-time operating systems, and intelligent computer vision & generative 3D architectures engineered for production scale.
            </p>

            {/* Action Buttons */}
            <div className="flex items-center gap-4 mb-10 w-auto">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-950 text-white font-medium text-sm hover:bg-slate-800 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 whitespace-nowrap group"
              >
                <span>View Selected Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white border border-slate-300 text-slate-800 font-medium text-sm hover:bg-slate-50 hover:border-slate-400 transition-all shadow-xs whitespace-nowrap"
              >
                <span>Get in Touch</span>
              </a>

              <a
                href="https://drive.google.com/file/d/1BN1y434DKlDg7HYbiGfx2rW3rRLYco-u/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl text-slate-600 hover:text-slate-950 font-medium text-sm whitespace-nowrap transition-colors"
              >
                <FileText className="w-4 h-4" />
                <span>Resume (PDF)</span>
              </a>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-200/80 max-w-xl text-left">
              <div className="flex flex-col">
                <span className="block text-3xl font-bold text-slate-950 tracking-tight">13+</span>
                <span className="text-sm text-slate-500 font-medium whitespace-nowrap mt-0.5">Shipped Systems</span>
              </div>
              <div className="flex flex-col">
                <span className="block text-3xl font-bold text-slate-950 tracking-tight">99.4%</span>
                <span className="text-sm text-slate-500 font-medium whitespace-nowrap mt-0.5">Email Deliverability</span>
              </div>
              <div className="flex flex-col">
                <span className="block text-3xl font-bold text-slate-950 tracking-tight">100%</span>
                <span className="text-sm text-slate-500 font-medium whitespace-nowrap mt-0.5">Production Live Code</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Video Character Walking */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col justify-center items-center relative group"
          >
            <video
              ref={desktopVideoRef}
              src="/videos/hero_vid.mp4"
              poster="/hero_poster.png"
              playsInline
              muted
              autoPlay
              onTimeUpdate={() => handleTimeUpdate(desktopVideoRef)}
              onEnded={handleEnded}
              className="w-auto max-w-full h-[620px] xl:h-[680px] object-contain transition-transform duration-500 group-hover:scale-[1.02] outline-none border-0 shadow-none ring-0 select-none"
              style={{
                mixBlendMode: 'multiply',
                filter: 'contrast(1.04) brightness(1.02)',
                WebkitMaskImage: 'radial-gradient(ellipse 85% 90% at 50% 50%, black 70%, transparent 98%)',
                maskImage: 'radial-gradient(ellipse 85% 90% at 50% 50%, black 70%, transparent 98%)',
              }}
            />

            {/* Floating Status Pill */}
            <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-md border border-slate-200 px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-800 flex items-center gap-2 shadow-sm whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Adeel Ul Rehman</span>
            </div>

            {/* Replay Motion Button */}
            {isPausedOnEnd && (
              <button
                onClick={handleReplay}
                className="absolute bottom-4 z-30 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-slate-950/90 hover:bg-slate-900 text-white backdrop-blur-md px-4 py-2 rounded-full text-xs font-medium flex items-center gap-2 shadow-lg transform translate-y-2 group-hover:translate-y-0 cursor-pointer whitespace-nowrap"
                aria-label="Replay intro video"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Replay Walk Motion</span>
              </button>
            )}
          </motion.div>

        </div>

      </div>
    </section>
  );
}