import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Layers, AlertCircle, CheckCircle2, ChevronRight, ChevronLeft, Sparkles } from 'lucide-react';
import { projects } from '../data/projects';
import PlayableTTT from '../components/PlayableTTT';

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const project = projects[projectIndex];

  if (!project) {
    return (
      <div className="py-20 text-center space-y-4">
        <h2 className="text-2xl font-heading font-bold text-foreground">Project Not Found</h2>
        <p className="text-sm text-muted-foreground">The case study you are looking for does not exist.</p>
        <Link to="/showcase" className="btn-tactile inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground text-xs font-semibold">
          <ArrowLeft className="w-4 h-4" /> Back to Showcase
        </Link>
      </div>
    );
  }

  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

  return (
    <article className="max-w-4xl mx-auto space-y-12 pb-16">
      {/* Navigation & Breadcrumbs */}
      <div className="flex items-center justify-between pt-4">
        <Link
          to="/showcase"
          className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors group"
        >
          <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
          <span>Back to Showcase</span>
        </Link>

        <span className="text-xs font-mono text-muted-foreground px-2.5 py-1 rounded-full bg-white/5 border border-white/5">
          Case Study • {project.year}
        </span>
      </div>

      {/* Hero Header */}
      <header className="space-y-4 border-b border-white/10 pb-8 text-left">
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="text-amber-500 font-bold text-xs select-none">—</span>
            <span className="text-xs font-mono font-semibold tracking-wider text-amber-500 uppercase">
              {project.category}
            </span>
          </div>
          <span className="text-xs font-mono text-slate-400 px-2 py-0.5 rounded bg-white/5 border border-white/5">
            Status: {project.status}
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white leading-tight">
          {project.title}
        </h1>
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
          {project.tagline}
        </p>

        {/* Tech Badges & Action Buttons */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-3">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/5 text-slate-200 border border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-tactile inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 transition-all"
              >
                <Github className="w-4 h-4" />
                <span>Source Code</span>
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-tactile inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-sm transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </header>

      {/* Interactive Demonstration Section (if available) */}
      {project.interactiveDemo === 'ttt' && (
        <section className="space-y-4">
          <PlayableTTT />
        </section>
      )}

      {/* Main Visual Showcase */}
      <section className="space-y-3">
        <div className="rounded-2xl overflow-hidden border border-white/10 bg-slate-950 shadow-2xl">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto object-cover max-h-[500px]"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>
        <p className="text-center text-xs font-mono text-slate-500">
          Visual interface preview of {project.title}
        </p>
      </section>

      {/* Why Built Section */}
      <section className="craft-card rounded-2xl p-6 sm:p-8 border border-white/10 space-y-4 text-left">
        <div className="flex items-center gap-2">
          <span className="text-amber-500 font-bold text-xs select-none">—</span>
          <span className="text-xs font-mono font-semibold tracking-wider text-amber-500 uppercase">
            RATIONALE
          </span>
        </div>
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-white flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-500" /> Why I Built This
        </h2>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
          {project.whyBuilt}
        </p>
      </section>

      {/* Architecture Breakdown */}
      <section className="space-y-4 text-left">
        <div className="flex items-center gap-2">
          <span className="text-amber-500 font-bold text-xs select-none">—</span>
          <span className="text-xs font-mono font-semibold tracking-wider text-amber-500 uppercase">
            SYSTEM DESIGN
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white flex items-center gap-2.5">
          <Layers className="w-5 h-5 text-amber-500" /> System Architecture & Mechanics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {project.architecture.map((layer, idx) => (
            <div
              key={idx}
              className="craft-card rounded-2xl p-5 border border-white/10 space-y-2.5"
            >
              <span className="text-xs font-mono text-amber-400 font-semibold block">
                0{idx + 1}. {layer.layer}
              </span>
              <p className="text-xs text-slate-400 leading-relaxed">
                {layer.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Engineering Challenges */}
      <section className="space-y-4 text-left">
        <div className="flex items-center gap-2">
          <span className="text-amber-500 font-bold text-xs select-none">—</span>
          <span className="text-xs font-mono font-semibold tracking-wider text-amber-500 uppercase">
            RESILIENCE & PROBLEM SOLVING
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white flex items-center gap-2.5">
          <AlertCircle className="w-5 h-5 text-amber-500" /> Engineering Hurdles & Solutions
        </h2>
        <div className="space-y-4">
          {project.challenges.map((item, idx) => (
            <div
              key={idx}
              className="craft-card rounded-2xl p-6 border border-white/10 space-y-3"
            >
              <h3 className="text-base font-serif font-bold text-white">
                {item.title}
              </h3>
              <div className="space-y-2 text-xs leading-relaxed">
                <div className="p-3 rounded-xl bg-destructive/10 border border-destructive/20 text-destructive-foreground">
                  <span className="font-semibold text-rose-400 block mb-0.5">The Problem:</span>
                  <span className="text-slate-300">{item.challenge}</span>
                </div>
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-200">
                  <span className="font-semibold text-emerald-400 block mb-0.5">The Solution:</span>
                  <span className="text-slate-300">{item.solution}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* Key Takeaways */}
      <section className="craft-card rounded-2xl p-6 sm:p-8 border border-white/10 space-y-4 text-left">
        <div className="flex items-center gap-2">
          <span className="text-amber-500 font-bold text-xs select-none">—</span>
          <span className="text-xs font-mono font-semibold tracking-wider text-amber-500 uppercase">
            INSIGHTS
          </span>
        </div>
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-white flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Key Engineering Takeaways
        </h2>
        <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
          {project.highlights.map((highlight, idx) => (
            <li key={idx} className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Bottom Switcher */}
      <nav className="border-t border-white/10 pt-8 flex items-center justify-between gap-4">
        {prevProject ? (
          <Link
            to={`/projects/${prevProject.slug}`}
            className="flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <div className="text-left">
              <span className="block text-[10px] text-muted-foreground">Previous</span>
              <span className="font-semibold text-foreground">{prevProject.title}</span>
            </div>
          </Link>
        ) : (
          <div />
        )}

        {nextProject ? (
          <Link
            to={`/projects/${nextProject.slug}`}
            className="flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors text-right"
          >
            <div>
              <span className="block text-[10px] text-muted-foreground">Next</span>
              <span className="font-semibold text-foreground">{nextProject.title}</span>
            </div>
            <ChevronRight className="w-4 h-4" />
          </Link>
        ) : (
          <div />
        )}
      </nav>
    </article>
  );
}
