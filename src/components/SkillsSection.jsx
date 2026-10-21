import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Layers,
  Database,
  Cpu,
  Terminal,
  Sparkles
} from 'lucide-react';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiCplusplus,
  SiPython,
  SiGit,
  SiGithub,
  SiLinux
} from 'react-icons/si';

const skillDomains = [
  {
    id: 'frontend',
    title: 'Frontend & UI',
    icon: Layers,
    accent: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
    summary: 'App Router, Server Components & responsive systems',
    skills: [
      { name: 'React 18', icon: SiReact, color: 'text-cyan-400' },
      { name: 'Next.js 14', icon: SiNextdotjs, color: 'text-white' },
      { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-400' },
      { name: 'JavaScript (ES6+)', icon: SiJavascript, color: 'text-yellow-400' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-teal-400' },
      { name: 'Redux Toolkit', icon: SiRedux, color: 'text-purple-400' }
    ]
  },
  {
    id: 'backend',
    title: 'Backend & APIs',
    icon: Database,
    accent: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    summary: 'RESTful endpoints, MongoDB aggregations & auth',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, color: 'text-emerald-400' },
      { name: 'Express.js', icon: SiExpress, color: 'text-neutral-300' },
      { name: 'MongoDB', icon: SiMongodb, color: 'text-emerald-500' },
      { name: 'REST APIs', icon: Code2, color: 'text-amber-400' },
      { name: 'WebSockets', icon: Code2, color: 'text-cyan-400' },
      { name: 'JWT Security', icon: Code2, color: 'text-rose-400' }
    ]
  },
  {
    id: 'cs',
    title: 'CS & Fundamentals',
    icon: Cpu,
    accent: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
    summary: 'Memory models, Big-O complexity & systems OOP',
    skills: [
      { name: 'C / C++', icon: SiCplusplus, color: 'text-blue-500' },
      { name: 'Data Structures', icon: Cpu, color: 'text-rose-400' },
      { name: 'Algorithms', icon: Code2, color: 'text-indigo-400' },
      { name: 'OOP Design', icon: Code2, color: 'text-purple-400' },
      { name: 'Python', icon: SiPython, color: 'text-amber-400' }
    ]
  },
  {
    id: 'tools',
    title: 'Workflow & Tools',
    icon: Terminal,
    accent: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
    summary: 'Git branching, Linux CLI, fast Vite bundling & Agile',
    skills: [
      { name: 'Git & GitHub', icon: SiGit, color: 'text-orange-500' },
      { name: 'Linux / Bash', icon: SiLinux, color: 'text-yellow-500' },
      { name: 'Vite & Bundlers', icon: Sparkles, color: 'text-purple-400' },
      { name: 'Agile / Scrum', icon: Code2, color: 'text-emerald-400' }
    ]
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="space-y-4 max-w-5xl mx-auto pt-2 text-left">
      {/* Compact Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-white/10 pb-3">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-amber-500 font-bold text-xs select-none">—</span>
            <span className="text-xs font-mono font-semibold tracking-wider text-amber-500 uppercase">
              TECHNICAL FOUNDATIONS
            </span>
            <span className="text-xs font-mono text-slate-400">
              · 4 Disciplines
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
            Technical Skills & Architecture
          </h2>
        </div>
        <p className="text-xs text-slate-400 font-mono">
          Coursework, ITI bootcamp & production experience.
        </p>
      </div>

      {/* Tight 2x2 Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {skillDomains.map((domain, idx) => {
          const Icon = domain.icon;
          return (
            <motion.div
              key={domain.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="craft-card rounded-xl p-4 sm:p-5 border border-white/10 flex flex-col justify-between space-y-3 hover:border-white/20 transition-colors"
            >
              {/* Header row */}
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <div className={`p-1.5 rounded-lg border ${domain.accent}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="font-heading font-bold text-sm sm:text-base text-foreground">
                    {domain.title}
                  </h3>
                </div>
                <span className="text-[11px] font-mono text-muted-foreground/70 hidden sm:inline">
                  {domain.skills.length} skills
                </span>
              </div>

              {/* Compact Tech Chips */}
              <div className="flex flex-wrap gap-1.5">
                {domain.skills.map((skill) => {
                  const TechIcon = skill.icon;
                  return (
                    <span
                      key={skill.name}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono bg-white/[0.04] hover:bg-white/[0.08] text-foreground border border-white/5 hover:border-primary/30 transition-all select-none"
                    >
                      <TechIcon className={`w-3.5 h-3.5 ${skill.color} shrink-0`} />
                      <span>{skill.name}</span>
                    </span>
                  );
                })}
              </div>

              {/* 1-Line Subtitle */}
              <p className="text-[11px] font-mono text-muted-foreground/80 pt-1 border-t border-white/5">
                {domain.summary}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
