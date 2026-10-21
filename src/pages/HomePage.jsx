import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ArrowDown,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  FileText,
  Check,
  Calendar,
  Building,
  ShieldCheck,
  Sparkles,
  Dumbbell,
  Terminal,
  Cpu
} from 'lucide-react';
import { FaDiscord, FaInstagram, FaFacebook } from 'react-icons/fa';
import { projects } from '../data/projects';
import { certifications } from '../data/certifications';
import confetti from 'canvas-confetti';
import TechMarquee from '../components/TechMarquee';
import SkillsSection from '../components/SkillsSection';
import AcademicTimeline from '../components/AcademicTimeline';
import ImpactSolutionsSection from '../components/ImpactSolutionsSection';
import ExperienceTimeline from '../components/ExperienceTimeline';

export default function HomePage() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const featuredProjects = projects.filter((p) => p.featured);
  const selectedCertifications = [
    certifications.find((c) => c.id === 'iti-frontend') || certifications[0],
    certifications.find((c) => c.id === 'fullstack-rest-api') || certifications[2]
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('ahmedcomy74@gmail.com');
    setCopiedEmail(true);
    confetti({
      particleCount: 35,
      spread: 50,
      origin: { y: 0.7 }
    });
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const scrollToContent = () => {
    const el = document.getElementById('craftsman-philosophy');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-24 sm:space-y-28 text-left pb-16">
      {/* ========================================================= */}
      {/* HERO SECTION (Faithfully styled after Image 1)            */}
      {/* ========================================================= */}
      <section className="min-h-[calc(100vh-7rem)] flex flex-col justify-between pt-4 sm:pt-8 pb-4 max-w-5xl mx-auto relative">
        <div className="flex-1 flex flex-col justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Main Hero Copy - Image 1 exact layout & styling */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="lg:col-span-8 space-y-6"
            >
              {/* Top Eyebrow Tag */}
              <div className="flex items-center gap-2">
                <span className="text-amber-500 font-bold text-sm sm:text-base select-none">—</span>
                <span className="text-xs sm:text-sm font-mono font-semibold tracking-[0.16em] sm:tracking-[0.2em] text-amber-500 uppercase">
                  CS STUDENT · SUEZ CANAL UNIV · ITI BOOTCAMP
                </span>
              </div>

              {/* Main Headline with Serif Typography */}
              <h1 className="text-4xl sm:text-6xl lg:text-[4.25rem] font-serif font-black text-white tracking-tight leading-[1.08] text-balance">
                Hey, I'm Ahmed.<br />
                I build<br />
                <span className="text-amber-500 underline decoration-amber-600/70 decoration-[3px] underline-offset-8">
                  stuff that works.
                </span>
              </h1>

              {/* Body Paragraph with Strategic White Bold Highlights */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans max-w-2xl">
                CS student at <strong className="text-white font-semibold">Suez Canal University</strong> (Class of 2027) & ITI scholarship graduate. I lift heavy things at the gym and write full-stack MERN code that <strong className="text-white font-semibold">doesn't fall apart at 2 AM</strong>. This is my workshop — part portfolio, part arcade, part engineering workbench.
              </p>

              {/* Action Buttons Row */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                {/* Primary Button */}
                <a
                  href="#featured-work"
                  className="btn-tactile inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-lg shadow-amber-500/20 transition-all cursor-pointer"
                >
                  <span>Explore the Workshop</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </a>

                {/* Secondary Button */}
                <Link
                  to="/cv"
                  className="btn-tactile inline-flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium bg-slate-900/90 hover:bg-slate-800/90 border border-slate-700/80 hover:border-slate-500 text-slate-200 transition-all"
                >
                  <FileText className="w-4 h-4 text-amber-500" />
                  <span>View CV & Spec</span>
                </Link>

                {/* Tertiary Button (Copy Email) */}
                <button
                  onClick={handleCopyEmail}
                  className="btn-tactile inline-flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium bg-slate-900/90 hover:bg-slate-800/90 border border-slate-700/80 hover:border-slate-500 text-slate-200 transition-all cursor-pointer"
                  title="Copy email address to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400 stroke-[2.5]" />
                      <span className="text-emerald-400 font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Mail className="w-4 h-4 text-slate-400" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              {/* Links Line Underneath */}
              <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-mono text-slate-400">
                <span className="text-slate-500 font-semibold tracking-wider">LINKS:</span>
                <a
                  href="https://github.com/ImComy"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-slate-300 hover:text-amber-400 transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
                <span className="text-slate-700 select-none">/</span>
                <a
                  href="https://www.linkedin.com/in/ahmedelshazly74/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-slate-300 hover:text-amber-400 transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
                <span className="text-slate-700 select-none">/</span>
                <a
                  href="https://discord.com/users/713394083179135026"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-slate-300 hover:text-amber-400 transition-colors"
                >
                  <FaDiscord className="w-3.5 h-3.5" />
                  <span>Discord</span>
                </a>
              </div>
            </motion.div>

            {/* Right: Refined Craftsman Avatar Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-4 flex justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-[280px] sm:max-w-[310px] craft-card rounded-2xl p-5 border border-white/10 space-y-4">
                {/* Header status indicator */}
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="inline-flex items-center gap-1.5 text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Available for Work
                  </span>
                  <span className="text-slate-500">2023 — 2027</span>
                </div>

                {/* Profile Image with subtle gold ring */}
                <div className="relative aspect-square rounded-xl overflow-hidden bg-slate-900 border border-white/10 group">
                  <img
                    src="/pfp.png"
                    alt="Ahmed El-Shazly"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 right-3 text-left">
                    <p className="text-sm font-serif font-bold text-white">Ahmed El-Shazly</p>
                    <p className="text-[11px] font-mono text-amber-400">@ImComy · Full-Stack</p>
                  </div>
                </div>

                {/* Quick specs / attributes */}
                <div className="grid grid-cols-2 gap-2 text-[11px] font-mono text-slate-400 pt-1">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                    <span className="text-slate-500 block text-[10px]">FOCUS</span>
                    <span className="text-slate-200 font-semibold">MERN + Next.js</span>
                  </div>
                  <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                    <span className="text-slate-500 block text-[10px]">CAMPUS</span>
                    <span className="text-slate-200 font-semibold">Suez Canal Univ</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="pt-8 pb-2 flex flex-col items-center justify-center">
          <button
            onClick={scrollToContent}
            className="group flex flex-col items-center gap-2 text-xs font-mono text-slate-500 hover:text-slate-300 transition-colors cursor-pointer"
            aria-label="Scroll down to craftsman philosophy"
          >
            <span className="tracking-widest uppercase text-[10px]">Philosophy & Code</span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              className="p-2 rounded-full bg-slate-900/80 group-hover:bg-slate-800 border border-slate-800 text-amber-500 transition-colors"
            >
              <ArrowDown className="w-3.5 h-3.5" />
            </motion.div>
          </button>
        </div>
      </section>

      {/* ========================================================= */}
      {/* FEATURED WORKS SHOWCASE                                    */}
      {/* ========================================================= */}
      <section id="featured-work" className="space-y-8 max-w-5xl mx-auto pt-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-amber-500 font-bold text-xs sm:text-sm select-none">—</span>
              <span className="text-xs font-mono font-semibold tracking-wider text-amber-500 uppercase">
                SELECTED WORKS
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white tracking-tight">
              Featured Projects
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Deep-dive case studies covering architecture, challenges, and live applications.
            </p>
          </div>
          <Link
            to="/showcase"
            className="text-xs font-mono text-amber-400 hover:text-amber-300 flex items-center gap-1 group transition-colors"
          >
            <span>Browse all showcase</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="craft-card rounded-2xl flex flex-col justify-between overflow-hidden group border border-white/10 p-5 space-y-5"
            >
              <div className="space-y-4">
                {/* Image preview with tag overlay */}
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-slate-950 border border-white/5">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <div className="absolute top-2.5 left-2.5">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-black/75 backdrop-blur-md text-amber-400 border border-white/10">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Title & Tagline */}
                <div>
                  <h3 className="text-lg font-serif font-bold text-white group-hover:text-amber-400 transition-colors flex items-center justify-between">
                    <span>{project.title}</span>
                    <span className="text-xs font-mono text-slate-500 font-normal">{project.year}</span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-1.5 line-clamp-2 leading-relaxed">
                    {project.summary}
                  </p>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-white/5 text-slate-300 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-1.5 py-0.5 rounded-md text-[10px] font-mono bg-white/5 text-slate-400">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                <Link
                  to={`/projects/${project.slug}`}
                  className="text-xs font-semibold text-amber-500 hover:text-amber-400 flex items-center gap-1.5 py-1 transition-colors"
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
                      className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
                      title="GitHub Source"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* ========================================================= */}
      {/* TOOLS & DAILY DRIVERS MARQUEE                             */}
      {/* ========================================================= */}
      <section className="max-w-5xl mx-auto -mt-4 sm:-mt-6">
        <TechMarquee />
      </section>

      {/* ========================================================= */}
      {/* ACQUIRED SKILLS & TECHNOLOGIES                            */}
      {/* ========================================================= */}
      <SkillsSection />

      {/* ========================================================= */}
      {/* IMPACT & ARCHITECTURAL SOLUTIONS                          */}
      {/* ========================================================= */}
      <ImpactSolutionsSection />

      {/* ========================================================= */}
      {/* WORK EXPERIENCE & APPLIED ENGINEERING TIMELINE           */}
      {/* ========================================================= */}
      <section className="space-y-8 max-w-5xl mx-auto pt-4">
        <div className="border-b border-white/10 pb-4">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-amber-500 font-bold text-xs sm:text-sm select-none">—</span>
            <span className="text-xs font-mono font-semibold tracking-wider text-amber-500 uppercase">
              WORK EXPERIENCE & COLLABORATION
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white tracking-tight">
            Where & How I’ve Worked
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl leading-relaxed">
            Collaborative agile pods, independent client contracts, academic project leadership, and systems development.
          </p>
        </div>

        <ExperienceTimeline />
      </section>

      {/* ========================================================= */}
      {/* SELECTED CERTIFICATIONS                                   */}
      {/* ========================================================= */}
      <section className="space-y-8 max-w-5xl mx-auto pt-2">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-amber-500 font-bold text-xs sm:text-sm select-none">—</span>
              <span className="text-xs font-mono font-semibold tracking-wider text-amber-500 uppercase">
                ACCREDITATIONS
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white tracking-tight">
              Selected Certifications
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Bootcamp specializations and validated technical competencies.
            </p>
          </div>
          <Link
            to="/showcase"
            className="text-xs font-mono text-amber-400 hover:text-amber-300 flex items-center gap-1 group transition-colors"
          >
            <span>View all in Showcase</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {selectedCertifications.map((cert, index) => (
            <motion.article
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="craft-card rounded-2xl flex flex-col justify-between overflow-hidden group border border-white/10 p-6 space-y-5 hover:border-amber-500/40 transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" /> {cert.status}
                  </span>
                  <span className="text-xs font-mono text-slate-500 flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {cert.issueDate}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-white group-hover:text-amber-400 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5 text-amber-500" />
                    <span>{cert.issuer}</span>
                  </p>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                  {cert.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-white/5 text-slate-300 border border-white/5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <Link
                  to={`/certifications/${cert.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors"
                >
                  <span>View Credential Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                {cert.verifyUrl && (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
                    title="Verify Issuer"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* ========================================================= */}
      {/* ACADEMIC JOURNEY TIMELINE                                 */}
      {/* ========================================================= */}
      <section className="space-y-8 max-w-5xl mx-auto">
        <div className="border-b border-white/10 pb-4">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-amber-500 font-bold text-xs sm:text-sm select-none">—</span>
            <span className="text-xs font-mono font-semibold tracking-wider text-amber-500 uppercase">
              ACADEMIC JOURNEY
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white tracking-tight">
            Academic & Bootcamp Foundation
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Computer science degree and professional development path at Suez Canal University & ITI.
          </p>
        </div>

        <AcademicTimeline />
      </section>

      {/* ========================================================= */}
      {/* CONNECT BANNER                                            */}
      {/* ========================================================= */}
      <section className="craft-card rounded-2xl p-8 sm:p-10 border border-white/10 text-center space-y-4 max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-2">
          <span className="text-amber-500 font-bold text-xs sm:text-sm select-none">—</span>
          <span className="text-xs font-mono font-semibold tracking-wider text-amber-500 uppercase">
            GET IN TOUCH
          </span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white tracking-tight">
          Let’s build something that works.
        </h2>
        <p className="text-sm sm:text-base text-slate-300 max-w-lg mx-auto leading-relaxed">
          Open to full-stack engineering opportunities, internships, and collaborative software projects.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <a
            href="mailto:ahmedcomy74@gmail.com"
            className="btn-tactile inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-sm font-semibold shadow-lg shadow-amber-500/20"
          >
            <Mail className="w-4 h-4" />
            <span>Send Email</span>
          </a>
          <Link
            to="/cv"
            className="btn-tactile inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 text-white text-sm font-semibold"
          >
            <FileText className="w-4 h-4 text-amber-500" />
            <span>View Full CV & Spec</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
