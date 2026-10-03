'use client';

import { motion } from 'framer-motion';
import { Cpu, Code2, Bot, Database, Wrench, Sparkles } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages & Core',
    icon: Code2,
    skills: ['JavaScript', 'TypeScript', 'Python', 'C++', 'C#', 'SQL', 'Dart']
  },
  {
    title: 'Web & Frontend Frameworks',
    icon: Cpu,
    skills: ['React.js', 'Next.js', 'Tailwind CSS', 'HTML5 & CSS3', 'Bootstrap', 'REST APIs', 'WebSockets']
  },
  {
    title: 'AI / ML & Automation',
    icon: Bot,
    skills: ['Prompt Engineering', 'LLM Pipelines', 'Multi-Model Orchestration', 'UI-Grounding (UGround)', 'ML Fundamentals', 'Computer Vision (OpenCV)', 'Web Scraping', 'Email Deliverability']
  },
  {
    title: 'Databases & Tools',
    icon: Database,
    skills: ['PostgreSQL', 'MongoDB', 'Firebase', 'Git & GitHub', 'Vercel', 'Postman', 'Flutter']
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 md:py-24 bg-slate-50/60 border-t border-slate-200/60 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/70 text-slate-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-slate-900" /> Technical Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            Skills, Tools & Technologies
          </h2>
          <p className="text-slate-600 font-medium text-sm sm:text-base mt-3 leading-relaxed">
            Comprehensive stack covering frontend engineering, backend services, intelligent AI pipelines, and enterprise automation tools.
          </p>
        </div>

        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {skillCategories.map((category, idx) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-3.5 sm:gap-4 mb-5 sm:mb-6">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-slate-950 text-white flex items-center justify-center shrink-0">
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-950">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2 sm:gap-2.5">
                  {category.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-slate-100 hover:bg-slate-950 hover:text-white transition-colors duration-200 text-slate-800 font-medium text-xs sm:text-sm border border-slate-200/80 cursor-default whitespace-nowrap"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
