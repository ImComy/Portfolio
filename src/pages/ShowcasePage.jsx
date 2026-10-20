import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, Code2, Award, Sparkles, ChevronLeft, ChevronRight, ShieldCheck, Calendar, Building } from 'lucide-react';
import { projects, projectCategories } from '../data/projects';
import { certifications } from '../data/certifications';

export default function ShowcasePage() {
  // Projects State
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [projectPage, setProjectPage] = useState(1);
  const projectsPerPage = 2;

  // Certifications State
  const [certPage, setCertPage] = useState(1);
  const certsPerPage = 2;

  // Filter Projects
  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const totalProjectPages = Math.ceil(filteredProjects.length / projectsPerPage) || 1;
  const currentProjects = filteredProjects.slice(
    (projectPage - 1) * projectsPerPage,
    projectPage * projectsPerPage
  );

  // Pagination for Certifications
  const totalCertPages = Math.ceil(certifications.length / certsPerPage) || 1;
  const currentCerts = certifications.slice(
    (certPage - 1) * certsPerPage,
    certPage * certsPerPage
  );

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    setProjectPage(1);
  };

  return (
    <div className="space-y-16 max-w-6xl mx-auto pb-16 text-left">
      {/* Page Header */}
      <section className="space-y-4 pt-6 border-b border-white/10 pb-8">
        <span className="badge-pill text-xs font-mono text-primary">
          <Sparkles className="w-3.5 h-3.5" /> Built Works & Accreditations
        </span>
        <h1 className="text-3xl sm:text-5xl font-heading font-bold text-foreground tracking-tight">
          Showcase
        </h1>
        <p className="text-sm sm:text-base text-muted-foreground max-w-2xl leading-relaxed">
          An indexed record of production software projects, interactive engineering systems, and validated professional certifications.
        </p>
      </section>

      {/* SECTION 1: PROJECTS */}
      <section className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="badge-pill text-xs font-mono text-primary">
                <Code2 className="w-3.5 h-3.5" /> Systems & Builds
              </span>
              <span className="text-xs font-mono text-muted-foreground px-2 py-0.5 rounded bg-white/5">
                {filteredProjects.length} Total
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">
              Software Projects
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-3 py-1 rounded-xl text-xs font-mono transition-all ${
                  selectedCategory === cat
                    ? 'bg-primary text-primary-foreground font-semibold shadow-sm'
                    : 'bg-white/5 hover:bg-white/10 text-muted-foreground hover:text-foreground border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="wait">
            {currentProjects.map((project, idx) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="craft-card rounded-2xl overflow-hidden border border-white/10 flex flex-col justify-between group"
              >
                <div>
                  {/* Image Preview */}
                  <div className="relative aspect-[16/10] bg-muted/40 overflow-hidden border-b border-white/5">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-black/80 backdrop-blur-md text-white border border-white/10">
                        {project.category}
                      </span>
                      {project.interactiveDemo && (
                        <span className="px-2 py-1 rounded-md text-[10px] font-mono bg-primary text-primary-foreground font-bold flex items-center gap-1 shadow-md">
                          <Sparkles className="w-3 h-3" /> Playable
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="text-xl font-heading font-bold text-foreground group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-xs font-mono text-muted-foreground mt-0.5">
                          {project.tagline}
                        </p>
                      </div>
                      <span className="text-xs font-mono text-muted-foreground px-2 py-0.5 rounded bg-white/5 shrink-0">
                        {project.year}
                      </span>
                    </div>

                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                      {project.summary}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-white/5 text-muted-foreground border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action Links */}
                <div className="px-6 py-4 bg-white/[0.02] border-t border-white/5 flex items-center justify-between">
                  <Link
                    to={`/projects/${project.slug}`}
                    className="btn-tactile inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-primary hover:bg-primary/90 text-primary-foreground transition-all shadow-sm"
                  >
                    <span>Read Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors border border-transparent hover:border-white/10"
                        title="GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors border border-transparent hover:border-white/10"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* Projects Pagination Bar */}
        {totalProjectPages > 1 && (
          <div className="flex items-center justify-center gap-2 pt-2">
            <button
              onClick={() => setProjectPage((prev) => Math.max(prev - 1, 1))}
              disabled={projectPage === 1}
              className="btn-tactile p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 disabled:opacity-40 disabled:cursor-not-allowed text-foreground"
              aria-label="Previous Projects Page"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {Array.from({ length: totalProjectPages }).map((_, i) => {
              const pageNumber = i + 1;
              return (
                <button
                  key={pageNumber}
                  onClick={() => setProjectPage(pageNumber)}
                  className={`w-8 h-8 rounded-xl text-xs font-mono font-medium transition-all ${
                    projectPage === pageNumber
                      ? 'bg-primary text-primary-foreground font-bold shadow-md shadow-primary/20'
                      : 'bg-white/5 hover:bg-white/10 text-muted-foreground hover:text-foreground border border-white/5'
                  }`}
                >
                  {pageNumber}
                </button>
              );
            })}

            <button
              onClick={() => setProjectPage((prev) => Math.min(prev + 1, totalProjectPages))}
              disabled={projectPage === totalProjectPages}
              className="btn-tactile p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 disabled:opacity-40 disabled:cursor-not-allowed text-foreground"
              aria-label="Next Projects Page"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </section>

      {/* SECTION 2: CERTIFICATIONS */}
      <section className="space-y-8 pt-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="badge-pill text-xs font-mono text-emerald-400">
                <Award className="w-3.5 h-3.5" /> Validated Credentials
              </span>
              <span className="text-xs font-mono text-muted-foreground px-2 py-0.5 rounded bg-white/5">
                {certifications.length} Total
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">
              Certifications & Accreditations
            </h2>
          </div>
          <p className="text-xs text-muted-foreground">
            Official training programs, bootcamp specializations, and academic diplomas.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="wait">
            {currentCerts.map((cert, idx) => (
              <motion.article
                key={cert.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="craft-card rounded-2xl overflow-hidden border border-white/10 flex flex-col justify-between group hover:border-emerald-500/40 transition-all"
              >
                <div className="p-6 space-y-4">
                  {/* Category & Status */}
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5" /> {cert.status}
                    </span>
                    <span className="text-xs font-mono text-muted-foreground flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {cert.issueDate}
                    </span>
                  </div>

                  {/* Title & Issuer */}
                  <div className="space-y-1">
                    <h3 className="text-lg sm:text-xl font-heading font-bold text-foreground group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-xs font-mono text-muted-foreground flex items-center gap-1.5">
                      <Building className="w-3.5 h-3.5 text-primary" />
                      <span>{cert.issuer}</span>
                    </p>
                  </div>

                  {/* Summary */}
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                    {cert.description}
                  </p>

                  {/* Skills Tagged */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-white/5 text-muted-foreground border border-white/5"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Action Links */}
                <div className="px-6 py-4 bg-white/[0.02] border-t border-white/5 flex items-center justify-between">
                  <Link
                    to={`/certifications/${cert.slug}`}
                    className="btn-tactile inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/15 text-foreground transition-all border border-white/10"
                  >
                    <span>View Credential Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  {cert.verifyUrl && (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-primary hover:underline"
                    >
                      <span>Verify Issuer</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* Certifications Pagination Bar */}
        {totalCertPages > 1 && (
          <div className="flex items-center justify-center gap-2 pt-2">
            <button
              onClick={() => setCertPage((prev) => Math.max(prev - 1, 1))}
              disabled={certPage === 1}
              className="btn-tactile p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 disabled:opacity-40 disabled:cursor-not-allowed text-foreground"
              aria-label="Previous Certifications Page"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {Array.from({ length: totalCertPages }).map((_, i) => {
              const pageNumber = i + 1;
              return (
                <button
                  key={pageNumber}
                  onClick={() => setCertPage(pageNumber)}
                  className={`w-8 h-8 rounded-xl text-xs font-mono font-medium transition-all ${
                    certPage === pageNumber
                      ? 'bg-emerald-500 text-white font-bold shadow-md shadow-emerald-500/20'
                      : 'bg-white/5 hover:bg-white/10 text-muted-foreground hover:text-foreground border border-white/5'
                  }`}
                >
                  {pageNumber}
                </button>
              );
            })}

            <button
              onClick={() => setCertPage((prev) => Math.min(prev + 1, totalCertPages))}
              disabled={certPage === totalCertPages}
              className="btn-tactile p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 disabled:opacity-40 disabled:cursor-not-allowed text-foreground"
              aria-label="Next Certifications Page"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
