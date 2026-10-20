import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ArrowDown,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Sparkles,
  Download,
  GraduationCap,
  Award,
  ShieldCheck,
  Building,
  Calendar
} from 'lucide-react';
import { FaDiscord, FaInstagram, FaFacebook } from 'react-icons/fa';
import { projects } from '../data/projects';
import { certifications } from '../data/certifications';
import confetti from 'canvas-confetti';
import TechMarquee from '../components/TechMarquee';
import SkillsSection from '../components/SkillsSection';
import AcademicTimeline from '../components/AcademicTimeline';

const floatingSocials = [
  {
    Icon: Github,
    href: 'https://github.com/ImComy',
    label: 'GitHub',
    // 10 o'clock position
    positionClass: 'top-1 left-2 sm:top-2 sm:left-3',
    delay: 0
  },
  {
    Icon: Linkedin,
    href: 'https://www.linkedin.com/in/ahmedelshazly74/',
    label: 'LinkedIn',
    // 2 o'clock position
    positionClass: 'top-1 right-2 sm:top-2 sm:right-3',
    delay: 0.2
  },
  {
    Icon: Mail,
    href: 'mailto:ahmedcomy74@gmail.com',
    label: 'Email',
    // 9 o'clock position
    positionClass: 'top-1/2 -left-3 sm:-left-4 -translate-y-1/2',
    delay: 0.4
  },
  {
    Icon: FaDiscord,
    href: 'https://discord.com/users/713394083179135026',
    label: 'Discord',
    // 3 o'clock position
    positionClass: 'top-1/2 -right-3 sm:-right-4 -translate-y-1/2',
    delay: 0.6
  },
  {
    Icon: FaInstagram,
    href: 'https://www.instagram.com/im_comy',
    label: 'Instagram',
    // 8 o'clock position
    positionClass: 'bottom-1 left-3 sm:bottom-2 sm:left-4',
    delay: 0.8
  },
  {
    Icon: FaFacebook,
    href: 'https://www.facebook.com/ImComy',
    label: 'Facebook',
    // 4 o'clock position
    positionClass: 'bottom-1 right-3 sm:bottom-2 sm:right-4',
    delay: 1.0
  }
];

export default function HomePage() {
  const featuredProjects = projects.filter((p) => p.featured);
  const selectedCertifications = [
    certifications.find((c) => c.id === 'iti-frontend') || certifications[0],
    certifications.find((c) => c.id === 'fullstack-rest-api') || certifications[2]
  ];

  const handleDownloadCV = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 }
    });
  };

  const scrollToContent = () => {
    const el = document.getElementById('featured-work');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-20 sm:space-y-24 text-left">
      {/* Full-Screen Hero Section */}
      <section className="min-h-[calc(100vh-6rem)] flex flex-col justify-between pt-6 pb-6 max-w-5xl mx-auto relative">
        <div className="flex-1 flex flex-col justify-center">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 sm:gap-14 items-center">
            {/* Left: Circular Avatar with Floating Orbital Social Icons */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="md:col-span-5 flex justify-center"
            >
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 flex items-center justify-center">
                {/* Subtle orbital guideline ring */}
                <div className="absolute inset-2 sm:inset-3 rounded-full border border-dashed border-white/15 pointer-events-none" />

                {/* Circular Profile Avatar */}
                <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-primary/60 shadow-[0_0_35px_rgba(255,107,74,0.3)] bg-card group">
                  <img
                    src="/pfp.png"
                    alt="Ahmed El-Shazly"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 rounded-full border border-white/15 pointer-events-none" />
                </div>

                {/* Floating Orbital Social Icons */}
                {floatingSocials.map(({ Icon, href, label, positionClass, delay }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    animate={{
                      y: [-3, 3, -3]
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 3,
                      ease: 'easeInOut',
                      delay: delay
                    }}
                    whileHover={{ scale: 1.25, rotate: 6 }}
                    whileTap={{ scale: 0.9 }}
                    className={`absolute ${positionClass} p-2.5 sm:p-3 rounded-full bg-card/90 backdrop-blur-md border border-white/20 hover:border-primary text-muted-foreground hover:text-primary transition-colors shadow-xl z-20`}
                    aria-label={label}
                    title={label}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Right: Intro & Headlines */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="md:col-span-7 space-y-5 text-center md:text-left"
            >
              <div className="space-y-2">
                <h1 className="text-4xl sm:text-6xl font-heading font-bold text-foreground tracking-tight leading-[1.1]">
                  Hi, I’m <span className="text-warm-gradient">Ahmed El-Shazly</span>
                </h1>
                <p className="text-lg sm:text-xl font-mono text-primary font-medium">
                  Full-Stack Software Engineer
                </p>
              </div>

              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-xl mx-auto md:mx-0">
                Computer Science student at Suez Canal University (Class of 2027) & ITI bootcamp graduate. I engineer modern web applications, real-time mechanics, and responsive interfaces with React, Next.js, TypeScript, and Node.js.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2">
                <Link
                  to="/showcase"
                  className="btn-tactile inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 transition-all"
                >
                  <span>Explore Showcase</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href="/Ahmed-CV.pdf"
                  download="Ahmed-El-Shazly-CV.pdf"
                  onClick={handleDownloadCV}
                  className="btn-tactile inline-flex items-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold bg-white/5 hover:bg-white/10 border border-white/10 text-foreground transition-all"
                >
                  <Download className="w-4 h-4 text-primary" />
                  <span>Download CV</span>
                </a>

                <Link
                  to="/about"
                  className="btn-tactile inline-flex items-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-mono text-muted-foreground hover:text-foreground hover:bg-white/5 transition-all"
                >
                  <span>About Me</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="pt-6 pb-2 flex flex-col items-center justify-center">
          <button
            onClick={scrollToContent}
            className="group flex flex-col items-center gap-2 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            aria-label="Scroll down to featured work"
          >
            <span className="tracking-wider uppercase text-[11px]">Scroll Down</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
              className="p-2 rounded-full bg-white/5 group-hover:bg-white/10 border border-white/10 text-primary transition-colors"
            >
              <ArrowDown className="w-4 h-4" />
            </motion.div>
          </button>
        </div>
      </section>

      {/* Featured Works Showcase */}
      <section id="featured-work" className="space-y-8 max-w-5xl mx-auto pt-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-4">
          <div className="space-y-1">
            <span className="badge-pill text-xs font-mono text-primary">
              <Sparkles className="w-3.5 h-3.5" /> Selected Works
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">
              Featured Projects
            </h2>
            <p className="text-xs text-muted-foreground">
              Deep-dive case studies covering architecture, challenges, and live applications.
            </p>
          </div>
          <Link
            to="/showcase"
            className="text-xs font-mono text-primary hover:underline flex items-center gap-1 group"
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
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-muted/30 border border-white/5">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <div className="absolute top-2.5 left-2.5">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-black/70 backdrop-blur-md text-white border border-white/10">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Title & Tagline */}
                <div>
                  <h3 className="text-lg font-heading font-bold text-foreground group-hover:text-primary transition-colors flex items-center justify-between">
                    <span>{project.title}</span>
                    <span className="text-xs font-mono text-muted-foreground">{project.year}</span>
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-2 leading-relaxed">
                    {project.summary}
                  </p>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-white/5 text-muted-foreground border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-1.5 py-0.5 rounded-md text-[10px] font-mono bg-white/5 text-muted-foreground">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                <Link
                  to={`/projects/${project.slug}`}
                  className="text-xs font-semibold text-primary hover:text-primary/80 flex items-center gap-1.5 py-1"
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
                      className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors"
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
                      className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors"
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

      {/* Tools & Daily Drivers Marquee (Placed directly beneath Featured Projects with tight margins) */}
      <section className="max-w-5xl mx-auto -mt-4 sm:-mt-6">
        <TechMarquee />
      </section>

      {/* Comprehensive Acquired Skills & Technologies Section */}
      <SkillsSection />

      {/* Selected Certifications Section */}
      <section className="space-y-8 max-w-5xl mx-auto pt-2">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-4">
          <div className="space-y-1">
            <span className="badge-pill text-xs font-mono text-emerald-400">
              <Award className="w-3.5 h-3.5" /> Accreditations
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">
              Selected Certifications
            </h2>
            <p className="text-xs text-muted-foreground">
              Bootcamp specializations and validated technical competencies.
            </p>
          </div>
          <Link
            to="/showcase"
            className="text-xs font-mono text-emerald-400 hover:underline flex items-center gap-1 group"
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
              className="craft-card rounded-2xl flex flex-col justify-between overflow-hidden group border border-white/10 p-6 space-y-5 hover:border-emerald-500/40 transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" /> {cert.status}
                  </span>
                  <span className="text-xs font-mono text-muted-foreground flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {cert.issueDate}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-lg sm:text-xl font-heading font-bold text-foreground group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-mono text-muted-foreground flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5 text-primary" />
                    <span>{cert.issuer}</span>
                  </p>
                </div>

                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                  {cert.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-white/5 text-muted-foreground border border-white/5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <Link
                  to={`/certifications/${cert.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <span>View Credential Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                {cert.verifyUrl && (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors"
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

      {/* Academic Journey Timeline */}
      <section className="space-y-8 max-w-5xl mx-auto">
        <div className="border-b border-white/10 pb-4">
          <span className="badge-pill text-xs font-mono text-primary mb-2">
            <GraduationCap className="w-3.5 h-3.5" /> Education
          </span>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">
            Academic Journey
          </h2>
          <p className="text-xs text-muted-foreground mt-1">
            Computer science degree and professional development path.
          </p>
        </div>

        <AcademicTimeline />
      </section>

      {/* Connect Banner */}
      <section className="craft-card rounded-2xl p-8 sm:p-10 border border-white/10 text-center space-y-4 max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">
          Let’s build something together.
        </h2>
        <p className="text-sm text-muted-foreground max-w-lg mx-auto leading-relaxed">
          Open to full-stack engineering opportunities, internships, and collaborative software projects.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <a
            href="mailto:ahmedcomy74@gmail.com"
            className="btn-tactile inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground text-xs font-semibold shadow-lg shadow-primary/20"
          >
            <Mail className="w-4 h-4" />
            <span>Send Email</span>
          </a>
          <Link
            to="/cv"
            className="btn-tactile inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-foreground text-xs font-semibold"
          >
            <span>View Full CV & Spec</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
