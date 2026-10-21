import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Zap,
  ShieldCheck,
  Database,
  Gauge,
  Layers,
  ArrowRight,
  Sparkles,
  Cpu,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';
import { impactMetrics, engineeredSolutions } from '../data/experience';

export default function ImpactSolutionsSection() {
  const [activeSolutionId, setActiveSolutionId] = useState(engineeredSolutions[0]?.id || 'solution-1');
  const activeSolution = engineeredSolutions.find((s) => s.id === activeSolutionId) || engineeredSolutions[0];

  return (
    <section id="impact-solutions" className="space-y-10 max-w-5xl mx-auto pt-4 text-left">
      {/* Header */}
      <div className="border-b border-white/10 pb-4">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-amber-500 font-bold text-xs sm:text-sm select-none">—</span>
          <span className="text-xs font-mono font-semibold tracking-wider text-amber-500 uppercase">
            IMPACT & ARCHITECTURAL SOLUTIONS
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white tracking-tight">
          Engineered Solutions & Measurable Impact
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl leading-relaxed">
          Tackling non-trivial latency race conditions, state machine reliability, and database indexing under real load.
        </p>
      </div>

      {/* 4 Impact Metric Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {impactMetrics.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="craft-card rounded-2xl p-5 border border-white/10 space-y-2 hover:border-amber-500/40 transition-all flex flex-col justify-between"
          >
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400 font-semibold block">
                {item.tag}
              </span>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-serif font-extrabold text-white tracking-tight">
                {item.metric}
              </div>
              <h3 className="text-xs sm:text-sm font-semibold text-slate-200">
                {item.label}
              </h3>
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed pt-2 border-t border-white/5">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Deep-Dive Solution Showcase */}
      <div className="craft-card rounded-2xl p-6 sm:p-8 border border-white/10 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/5 pb-4">
          <div>
            <span className="text-xs font-mono text-amber-400 uppercase tracking-wider font-semibold block mb-1">
              Case Study Breakdown
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
              How I Solve Tough Engineering Hurdles
            </h3>
          </div>

          {/* Solution Selector Tabs */}
          <div className="flex flex-wrap gap-1.5 bg-white/5 p-1 rounded-xl border border-white/5">
            {engineeredSolutions.map((sol, idx) => (
              <button
                key={sol.id}
                onClick={() => setActiveSolutionId(sol.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer ${
                  activeSolutionId === sol.id
                    ? 'bg-amber-500 text-slate-950 font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>0{idx + 1}. {sol.category}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Selected Solution Detail View */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSolution.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            {/* Title & Category */}
            <div className="space-y-1">
              <span className="text-xs font-mono text-amber-500 font-semibold uppercase">
                {activeSolution.category}
              </span>
              <h4 className="text-lg sm:text-xl font-serif font-bold text-white">
                {activeSolution.title}
              </h4>
            </div>

            {/* Problem vs Solution Split */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Problem Statement */}
              <div className="p-5 rounded-xl bg-destructive/10 border border-destructive/20 space-y-2">
                <div className="flex items-center gap-2 text-rose-400 font-mono text-xs font-semibold">
                  <AlertTriangle className="w-4 h-4" />
                  <span>THE ENGINEERING CHALLENGE</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  {activeSolution.challenge}
                </p>
              </div>

              {/* Architectural Solution */}
              <div className="p-5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-semibold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>THE ARCHITECTURAL SOLUTION</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  {activeSolution.solution}
                </p>
              </div>
            </div>

            {/* Measured Impact & Technologies */}
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">
                  MEASURABLE OUTCOME
                </span>
                <p className="text-xs sm:text-sm font-semibold text-white">
                  {activeSolution.impact}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-1.5 shrink-0">
                {activeSolution.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/5 text-amber-400 border border-amber-500/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
