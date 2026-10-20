import React, { useState } from 'react';
import { Download, Printer, ExternalLink, Github, Linkedin, Mail, MapPin, CheckCircle, GraduationCap, Code2, Briefcase } from 'lucide-react';
import { profile } from '../data/profile';
import { projects } from '../data/projects';

export default function CVPage() {
  const [viewMode, setViewMode] = useState('standard'); // 'standard' | 'deep'

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-16 text-left">
      {/* Top Action Bar (hidden on print) */}
      <div className="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-card/80 backdrop-blur-md border border-white/10 shadow-lg">
        <div>
          <span className="text-xs font-mono text-primary font-semibold block">
            Curriculum Vitae & Specification
          </span>
          <span className="text-xs text-muted-foreground">
            Print-ready layout optimized for recruitment review
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* View toggle */}
          <div className="flex items-center bg-white/5 p-1 rounded-xl border border-white/5 text-xs font-mono">
            <button
              onClick={() => setViewMode('standard')}
              className={`px-3 py-1 rounded-lg transition-all ${
                viewMode === 'standard'
                  ? 'bg-primary text-primary-foreground font-semibold'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Standard
            </button>
            <button
              onClick={() => setViewMode('deep')}
              className={`px-3 py-1 rounded-lg transition-all ${
                viewMode === 'deep'
                  ? 'bg-primary text-primary-foreground font-semibold'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Deep Tech Spec
            </button>
          </div>

          {/* Action buttons */}
          <button
            onClick={handlePrint}
            className="btn-tactile p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-muted-foreground hover:text-foreground"
            title="Print or Save as PDF"
          >
            <Printer className="w-4 h-4" />
          </button>

          <a
            href="/Ahmed-CV.pdf"
            download="Ahmed-El-Shazly-CV.pdf"
            className="btn-tactile inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground text-xs font-semibold shadow-sm"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download PDF</span>
          </a>
        </div>
      </div>

      {/* Printable Resume Container */}
      <div className="p-6 sm:p-12 rounded-2xl bg-card border border-white/10 shadow-2xl space-y-10 print:p-0 print:border-none print:shadow-none print:bg-white print:text-black">
        {/* CV Header */}
        <header className="border-b border-white/10 print:border-black/20 pb-8 flex flex-col sm:flex-row sm:items-start justify-between gap-6">
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl font-heading font-bold text-foreground print:text-black">
              {profile.name}
            </h1>
            <p className="text-sm font-mono text-primary print:text-neutral-700 font-semibold">
              Software Engineer • Computer Science Student
            </p>
            <p className="text-xs text-muted-foreground print:text-neutral-600 max-w-xl leading-relaxed">
              {profile.bioShort}
            </p>
          </div>

          <div className="space-y-1.5 text-xs font-mono text-muted-foreground print:text-neutral-700 shrink-0">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-primary print:text-neutral-700" />
              <span>{profile.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-primary print:text-neutral-700" />
              <a href="mailto:ahmedcomy74@gmail.com" className="hover:underline">
                ahmedcomy74@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Github className="w-3.5 h-3.5 text-primary print:text-neutral-700" />
              <a href="https://github.com/ImComy" target="_blank" rel="noreferrer" className="hover:underline">
                github.com/ImComy
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Linkedin className="w-3.5 h-3.5 text-primary print:text-neutral-700" />
              <a href="https://www.linkedin.com/in/ahmedelshazly74/" target="_blank" rel="noreferrer" className="hover:underline">
                linkedin.com/in/ahmedelshazly74
              </a>
            </div>
          </div>
        </header>

        {/* Education */}
        <section className="space-y-4">
          <h2 className="text-xs font-mono uppercase tracking-widest text-primary print:text-black font-bold flex items-center gap-2">
            <GraduationCap className="w-4 h-4" /> Education & Training
          </h2>
          <div className="space-y-4">
            {profile.education.map((edu, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-start justify-between gap-1">
                <div>
                  <h3 className="text-sm font-heading font-bold text-foreground print:text-black">
                    {edu.degree}
                  </h3>
                  <p className="text-xs font-medium text-foreground/80 print:text-neutral-800">
                    {edu.institution}
                  </p>
                  <p className="text-xs text-muted-foreground print:text-neutral-600 mt-1 max-w-xl">
                    {edu.details}
                  </p>
                </div>
                <span className="text-xs font-mono text-muted-foreground print:text-neutral-600 shrink-0">
                  {edu.period}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Core Technical Projects */}
        <section className="space-y-6">
          <h2 className="text-xs font-mono uppercase tracking-widest text-primary print:text-black font-bold flex items-center gap-2">
            <Code2 className="w-4 h-4" /> Selected Project Engineering
          </h2>
          <div className="space-y-6">
            {projects.map((proj) => (
              <div key={proj.id} className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-heading font-bold text-foreground print:text-black">
                      {proj.title}
                    </h3>
                    <span className="text-[11px] font-mono text-muted-foreground print:text-neutral-600">
                      ({proj.category})
                    </span>
                  </div>
                  <span className="text-xs font-mono text-muted-foreground print:text-neutral-600">
                    {proj.year}
                  </span>
                </div>

                <p className="text-xs text-muted-foreground print:text-neutral-700 leading-relaxed">
                  {proj.summary}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-0.5">
                  {proj.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 print:bg-neutral-100 print:text-neutral-800 text-muted-foreground border border-white/5 print:border-neutral-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {viewMode === 'deep' && (
                  <div className="mt-3 p-3 rounded-xl bg-white/[0.03] print:bg-neutral-50 border border-white/5 print:border-neutral-200 text-xs space-y-2">
                    <span className="font-mono text-[11px] text-accent print:text-neutral-900 font-semibold block">
                      Architectural Challenge:
                    </span>
                    <p className="text-muted-foreground print:text-neutral-700 text-[11px] leading-relaxed">
                      {proj.challenges[0]?.challenge} → <strong className="text-foreground print:text-black">Solution:</strong> {proj.challenges[0]?.solution}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Technical Skills Inventory */}
        <section className="space-y-4">
          <h2 className="text-xs font-mono uppercase tracking-widest text-primary print:text-black font-bold flex items-center gap-2">
            <Briefcase className="w-4 h-4" /> Technical Skills & Tools
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            {profile.skillsCategorized.map((cat) => (
              <div key={cat.category} className="space-y-1">
                <span className="font-mono font-semibold text-foreground print:text-black text-[11px]">
                  {cat.category}:
                </span>
                <p className="text-muted-foreground print:text-neutral-700 leading-relaxed">
                  {cat.skills.map((s) => s.name).join(' • ')}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
