import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Briefcase,
  Users,
  CheckCircle2,
  Calendar,
  MapPin,
  ChevronDown,
  ChevronUp,
  Sparkles,
  ArrowUpRight,
  GitBranch,
  Layers
} from 'lucide-react';
import { experiences } from '../data/experience';

export default function ExperienceTimeline() {
  const [expandedId, setExpandedId] = useState(experiences[0]?.id || null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="w-full text-left space-y-6">
      {/* Timeline spine */}
      <div className="relative border-l-2 border-white/10 ml-3 sm:ml-6 space-y-10 py-2">
        {experiences.map((exp, index) => {
          const Icon = exp.icon || Briefcase;
          const isExpanded = expandedId === exp.id;

          return (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-6 sm:pl-10 group"
            >
              {/* Timeline Node with Amber Glow */}
              <div className="absolute -left-[11px] top-1.5 w-5 h-5 rounded-full bg-slate-950 border-2 border-amber-500 group-hover:scale-125 group-hover:bg-amber-500 transition-all duration-300 shadow-[0_0_12px_rgba(245,158,11,0.5)] flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 group-hover:bg-slate-950 transition-colors" />
              </div>

              {/* Main Card Container */}
              <div className="craft-card rounded-2xl p-6 sm:p-7 border border-white/10 space-y-5 hover:border-amber-500/40 transition-all">
                {/* Header Row: Role, Company, Period */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-white/5 pb-4">
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className={`text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full border ${exp.badgeColor}`}>
                        {exp.type}
                      </span>
                      <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-amber-500" /> {exp.location}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-white group-hover:text-amber-400 transition-colors">
                      {exp.role}
                    </h3>

                    <p className="text-sm font-medium text-slate-300 flex items-center gap-2">
                      <span className="font-semibold text-white">{exp.organization}</span>
                    </p>
                  </div>

                  <div className="flex sm:flex-col items-center sm:items-end justify-between gap-2 shrink-0">
                    <span className="text-xs font-mono font-semibold text-amber-400 px-3 py-1 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" /> {exp.period}
                    </span>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
                  {exp.summary}
                </p>

                {/* Who I Worked With Callout */}
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-start gap-3 text-xs sm:text-sm">
                  <div className="p-1.5 rounded-lg bg-amber-500/10 text-amber-400 shrink-0 mt-0.5">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-slate-400 block mb-0.5 font-semibold">
                      Who I Worked With & Environment:
                    </span>
                    <span className="text-slate-200">{exp.whoIWorkedWith}</span>
                  </div>
                </div>

                {/* Toggleable "How I Worked" Methodology Details */}
                <div className="space-y-3 pt-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold flex items-center gap-1.5">
                      <GitBranch className="w-3.5 h-3.5" /> How I Worked & Engineering Methods
                    </span>
                    <button
                      type="button"
                      onClick={() => toggleExpand(exp.id)}
                      className="text-xs font-mono text-slate-400 hover:text-white flex items-center gap-1 transition-colors cursor-pointer py-1 px-2 rounded-lg hover:bg-white/5"
                    >
                      <span>{isExpanded ? 'Collapse Details' : 'Expand All Steps'}</span>
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                  {/* Bullet Points with collapsible / expandable view */}
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                    {(isExpanded ? exp.howIWorked : exp.howIWorked.slice(0, 2)).map((point, pIdx) => {
                      const [title, ...descParts] = point.split(': ');
                      const desc = descParts.join(': ');
                      return (
                        <li key={pIdx} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                          <div className="leading-relaxed">
                            {desc ? (
                              <>
                                <strong className="text-white font-semibold font-mono text-xs sm:text-[13px]">{title}:</strong>{' '}
                                <span className="text-slate-300">{desc}</span>
                              </>
                            ) : (
                              <span className="text-slate-300">{point}</span>
                            )}
                          </div>
                        </li>
                      );
                    })}
                  </ul>

                  {!isExpanded && exp.howIWorked.length > 2 && (
                    <button
                      onClick={() => toggleExpand(exp.id)}
                      className="text-xs font-mono text-amber-400/90 hover:text-amber-300 hover:underline pt-1 inline-flex items-center gap-1"
                    >
                      <span>+ {exp.howIWorked.length - 2} more engineering details...</span>
                    </button>
                  )}
                </div>

                {/* Key Impact & Tech Tags */}
                <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-white/5 text-slate-300 border border-white/5"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="text-xs font-mono text-emerald-400 flex items-center gap-1.5 shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Validated Milestone</span>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
