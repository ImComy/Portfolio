import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, Filter, Sparkles, Code2 } from 'lucide-react';
import { projects, projectCategories } from '../data/projects';

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="space-y-12 max-w-6xl mx-auto">
      {/* Header */}
      <section className="space-y-4 pt-6 text-left border-b border-white/10 pb-8">
        <span className="badge-pill text-xs font-mono text-primary">
          <Code2 className="w-3.5 h-3.5" /> Project Works & Case Studies
        </span>
        <h1 className="text-3xl sm:text-5xl font-heading font-bold text-foreground">
          Built with intent and real problem solving.
        </h1>
        <p className="text-sm sm:text-base text-muted-foreground max-w-2xl leading-relaxed">
          Every project below has its own dedicated case study exploring architectural decisions, tricky technical challenges, and live takeaways.
        </p>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 pt-4">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all ${
                selectedCategory === cat
                  ? 'bg-primary text-primary-foreground font-semibold shadow-sm'
                  : 'bg-white/5 hover:bg-white/10 text-muted-foreground hover:text-foreground border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project, idx) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: idx * 0.08 }}
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
                      <Sparkles className="w-3 h-3" /> Playable Demo
                    </span>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h2 className="text-xl font-heading font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h2>
                    <p className="text-xs font-mono text-muted-foreground mt-0.5">
                      {project.tagline}
                    </p>
                  </div>
                  <span className="text-xs font-mono text-muted-foreground px-2 py-0.5 rounded bg-white/5">
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
                      className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-white/5 text-muted-foreground border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="px-6 py-4 bg-white/[0.02] border-t border-white/5 flex items-center justify-between">
              <Link
                to={`/projects/${project.slug}`}
                className="btn-tactile inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-primary hover:bg-primary/90 text-primary-foreground transition-all shadow-sm"
              >
                <span>Read Full Case Study</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <div className="flex items-center gap-2">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-white/10 transition-colors"
                    title="View Source on GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-white/10 transition-colors"
                    title="Open Live Web Application"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Note about expanding archive */}
      <section className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center space-y-2">
        <h3 className="text-sm font-heading font-semibold text-foreground">
          More projects currently in the pipeline
        </h3>
        <p className="text-xs text-muted-foreground max-w-lg mx-auto leading-relaxed">
          I'm continually writing case studies for other web applications and experiments. Check back soon or visit my GitHub for recent commit activity.
        </p>
      </section>
    </div>
  );
}
