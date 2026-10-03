'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Sparkles, GraduationCap } from 'lucide-react';

const experiences = [
  {
    role: 'AI/ML Engineering Intern',
    company: 'Portsea Games',
    location: 'Islamabad (On-site)',
    period: 'June 2026 – July 2026',
    type: 'Internship',
    bullets: [
      'Engineered end-to-end pipelines for an AI-driven 3D Website Generator featuring prompt-enhancement, clarifying-questions loop, and a dual-model architecture where model 1 generates 3D assets while model 2 validates & refines prompts.',
      'Developed prototype automation tool using pretrained UI-grounding model (UGround) converting natural language prompts into on-screen coordinates and JSON execution task plans.',
      'Prototyped 3D VR room-reconstruction engine generating navigable 3D room models from sets of raw input images.'
    ]
  },
  {
    role: 'Digital Marketing & Automation Specialist',
    company: 'Independent Business Collaboration',
    location: 'Lahore, Pakistan',
    period: 'November 2025 – Present',
    type: 'Contract / Project',
    bullets: [
      'Designed & operated automated email marketing infrastructure in Python, scraping 1,000+ targeted business contacts daily.',
      'Executed bulk personalized email campaigns (200–250 emails/day) while managing DNS settings (SPF, DKIM, DMARC) and mailbox warmup to protect domain deliverability.'
    ]
  },
  {
    role: 'Frontend Developer Intern',
    company: 'Social Swirls',
    location: 'Remote',
    period: 'July 2024 – September 2024',
    type: 'Internship',
    bullets: [
      'Built responsive frontend web applications using React.js, prioritizing modern component hierarchy, UI render performance, and cross-browser fidelity.'
    ]
  },
  {
    role: 'Data Operator',
    company: 'Electronics Retail Firm',
    location: 'Lahore, Pakistan',
    period: 'January 2024 – August 2024',
    type: 'Employment',
    bullets: [
      'Owned end-to-end data operations for product & customer databases, managing daily entries, customer records, and recurring inventory audit reporting.'
    ]
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 md:py-24 bg-white relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-semibold uppercase tracking-wider mb-3 border border-slate-200">
            <Briefcase className="w-3.5 h-3.5 text-slate-900" /> Professional Track Record
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            Work Experience & Engineering Roles
          </h2>
        </div>

        {/* Timeline List */}
        <div className="relative border-l-2 border-slate-200 ml-2.5 sm:ml-4 md:ml-6 space-y-8 sm:space-y-12 pl-4 sm:pl-6 md:pl-10">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Timeline Bullet Dot */}
              <div className="absolute -left-[25px] sm:-left-[31px] md:-left-[47px] top-1.5 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white border-4 border-slate-950 group-hover:scale-125 transition-transform" />

              {/* Experience Card */}
              <div className="bg-slate-50/70 rounded-3xl p-5 sm:p-8 border border-slate-200/80 shadow-xs hover:border-slate-400 hover:bg-white transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-950">
                      {exp.role}
                    </h3>
                    <span className="text-base font-semibold text-slate-700">
                      {exp.company}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-medium text-slate-500">
                    <span className="inline-flex items-center gap-1 bg-white px-2.5 sm:px-3 py-1 rounded-full border border-slate-200 text-slate-700 whitespace-nowrap">
                      <Calendar className="w-3.5 h-3.5 text-slate-900" />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1 bg-white px-2.5 sm:px-3 py-1 rounded-full border border-slate-200 text-slate-700 whitespace-nowrap">
                      <MapPin className="w-3.5 h-3.5 text-slate-900" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2.5">
                  {exp.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="text-slate-600 text-sm leading-relaxed flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-900 shrink-0 mt-2"></span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education Highlight Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-slate-950 text-white rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl"
        >
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-white shrink-0">
              <GraduationCap className="w-8 h-8" />
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-slate-400 block mb-1">
                Education
              </span>
              <h3 className="text-xl sm:text-2xl font-bold">
                Bachelor of Science in Computer Science (BS CS)
              </h3>
              <p className="text-slate-300 text-sm font-medium mt-1">
                University of Engineering & Technology (UET), KSK Lahore (2023 – 2027)
              </p>
            </div>
          </div>
          <div className="px-4 py-2 rounded-full bg-white/10 text-xs font-semibold text-slate-200 whitespace-nowrap">
            Undergraduate Student
          </div>
        </motion.div>

      </div>
    </section>
  );
}
