'use client';

import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, RotateCcw, Sparkles, FileText } from 'lucide-react';

export default function HeroSection() {
  const videoRef = useRef(null);
  const [isPausedOnEnd, setIsPausedOnEnd] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {});
    }
  }, []);

  const handleTimeUpdate = () => {
    const video = videoRef.current;
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
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = 0;
    video.play();
    setIsPausedOnEnd(false);
  };

  return (
    <section className="relative pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 md:pb-20 overflow-hidden bg-white">
      {/* Ambient Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-slate-100/70 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-6 lg:gap-y-0 lg:gap-x-12 xl:gap-x-16 items-center">
          
          {/* Top Intro Text Block (order-1 on mobile, lg:col-span-7 lg:row-start-1 on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-none lg:col-span-7 lg:col-start-1 lg:row-start-1 flex flex-col justify-start text-left z-10"
          >
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-[11px] sm:text-xs font-semibold tracking-normal sm:tracking-wide uppercase mb-4 sm:mb-5 w-fit shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-slate-900 shrink-0" />
              <span className="hidden sm:inline">Full-Stack Software Engineer & AI Systems Architect</span>
              <span className="sm:hidden">Full-Stack Engineer & AI Systems Architect</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 leading-[1.18] sm:leading-[1.1] mb-4 sm:mb-5">
              Turning ideas into <span className="underline decoration-slate-300 underline-offset-8">production</span> software, Apps, intelligent AI & automation.
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl mb-2 lg:mb-8">
              Hi, I&apos;m <span className="font-semibold text-slate-900">Adeel Ul Rehman</span> — a Full-Stack Engineer and AI Systems Architect. I build high-performance web platforms, real-time operating systems, and intelligent computer vision & generative 3D architectures engineered for production scale.
            </p>
          </motion.div>

          {/* Video Character Block (order-2 on mobile right below intro text, lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:row-span-2 on desktop) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="order-2 lg:order-none lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:row-span-2 flex flex-col justify-center items-center relative group my-2 lg:my-0"
          >
            {/* 
              Direct Video Element: 
              - Removed heavy canvas chroma-keying which was causing edge artifacts/borders.
              - mixBlendMode: 'multiply' ensures any subtle gray video compression halos 
                around the white background become perfectly transparent, blending flawlessly 
                with the parent's white background.
            */}
            <video
              ref={videoRef}
              src="/videos/hero_vid.mp4"
              poster="/hero_poster.png"
              playsInline
              muted
              autoPlay
              onTimeUpdate={handleTimeUpdate}
              onEnded={handleEnded}
              className="w-auto max-w-full h-[320px] sm:h-[460px] lg:h-[620px] xl:h-[680px] object-contain transition-transform duration-500 group-hover:scale-[1.02] outline-none border-0 shadow-none ring-0 select-none"
              style={{
                mixBlendMode: 'multiply',
                filter: 'contrast(1.04) brightness(1.02)',
                WebkitMaskImage: 'radial-gradient(ellipse 85% 90% at 50% 50%, black 70%, transparent 98%)',
                maskImage: 'radial-gradient(ellipse 85% 90% at 50% 50%, black 70%, transparent 98%)',
              }}
            />

            {/* Floating Status Pill */}
            <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 bg-white/90 backdrop-blur-md border border-slate-200 px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-800 flex items-center gap-2 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Adeel Ul Rehman</span>
            </div>

            {/* Replay Motion Button */}
            {isPausedOnEnd && (
              <button
                onClick={handleReplay}
                className="absolute bottom-4 z-30 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-slate-950/90 hover:bg-slate-900 text-white backdrop-blur-md px-4 py-2 rounded-full text-xs font-medium flex items-center gap-2 shadow-lg transform translate-y-2 group-hover:translate-y-0 cursor-pointer"
                aria-label="Replay intro video"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Replay Walk Motion</span>
              </button>
            )}
          </motion.div>

          {/* Action Buttons & Quick Metrics Bar (order-3 on mobile, lg:col-span-7 lg:col-start-1 lg:row-start-2 on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="order-3 lg:order-none lg:col-span-7 lg:col-start-1 lg:row-start-2 flex flex-col justify-start text-left z-10"
          >
            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-4 mb-8 lg:mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-slate-950 text-white font-medium text-xs sm:text-sm hover:bg-slate-800 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 group"
              >
                <span>View Selected Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-white border border-slate-300 text-slate-800 font-medium text-xs sm:text-sm hover:bg-slate-50 hover:border-slate-400 transition-all shadow-xs"
              >
                <span>Get in Touch</span>
              </a>

              <a
                href="https://drive.google.com/file/d/1BN1y434DKlDg7HYbiGfx2rW3rRLYco-u/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 sm:py-3.5 rounded-xl text-slate-600 hover:text-slate-950 font-medium text-xs sm:text-sm transition-colors"
              >
                <FileText className="w-4 h-4" />
                <span>Resume (PDF)</span>
              </a>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-2 sm:gap-6 pt-5 sm:pt-6 border-t border-slate-200/80 max-w-xl text-center sm:text-left">
              <div className="flex flex-col">
                <span className="block text-xl sm:text-3xl font-bold text-slate-950 tracking-tight">13+</span>
                <span className="text-[11px] sm:text-sm text-slate-500 font-medium leading-tight mt-0.5">Shipped Systems</span>
              </div>
              <div className="flex flex-col">
                <span className="block text-xl sm:text-3xl font-bold text-slate-950 tracking-tight">99.4%</span>
                <span className="text-[11px] sm:text-sm text-slate-500 font-medium leading-tight mt-0.5">
                  <span className="hidden sm:inline">Email </span>Deliverability
                </span>
              </div>
              <div className="flex flex-col">
                <span className="block text-xl sm:text-3xl font-bold text-slate-950 tracking-tight">100%</span>
                <span className="text-[11px] sm:text-sm text-slate-500 font-medium leading-tight mt-0.5">
                  Production <span className="hidden sm:inline">Live </span>Code
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}