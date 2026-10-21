import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  User,
  MapPin,
  GraduationCap,
  Heart,
  Dumbbell,
  Terminal,
  Cpu,
  MessageSquare,
  ArrowRight,
  ExternalLink,
  Mail,
  FileText
} from 'lucide-react';
import { profile } from '../data/profile';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  const [activeTakeIndex, setActiveTakeIndex] = useState(0);

  return (
    <div className="max-w-4xl mx-auto space-y-16 pb-16 text-left">
      {/* ========================================================= */}
      {/* INTRO HERO: The Craftsman Behind the Code (Vibe of Image 2)*/}
      {/* ========================================================= */}
      <section className="space-y-6 pt-4 border-b border-white/10 pb-12">
        <div className="flex items-center gap-2">
          <span className="text-amber-500 font-bold text-sm select-none">—</span>
          <span className="text-xs sm:text-sm font-mono font-semibold tracking-[0.16em] sm:tracking-[0.2em] text-amber-500 uppercase">
            LIFE & PHILOSOPHY
          </span>
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            The Craftsman Behind the Code
          </h1>
          <p className="text-sm sm:text-base text-slate-400 font-sans leading-relaxed">
            Where computer science theory meets gym progressive overload and late-night curiosity.
          </p>
        </div>

        {/* Profile Card & Intro */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-2">
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border border-white/15 shadow-xl shrink-0 bg-slate-900 group">
            <img
              src="/pfp.png"
              alt="Ahmed El-Shazly"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>
          <div className="space-y-1.5">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-white">
              Ahmed El-Shazly
            </h2>
            <p className="text-xs sm:text-sm font-mono text-amber-400 flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5" />
              <span>Ismailia, Egypt · Computer Science @ Suez Canal University</span>
            </p>
            <p className="text-xs text-slate-400 font-mono">
              Class of 2027 · ITI Software Engineering Scholarship Alum
            </p>
          </div>
        </div>

        {/* Narrative Paragraphs styled directly from Image 2 */}
        <div className="space-y-4 text-base sm:text-lg text-slate-300 leading-relaxed font-sans pt-2">
          <p>
            I'm an undergraduate studying Computer Science at <strong className="text-white font-semibold">Suez Canal University</strong> and a graduate of the intensive <strong className="text-white font-semibold">ITI software engineering bootcamp</strong>.
          </p>

          {/* Highlighted Quote Callout Block */}
          <blockquote className="craftsman-quote my-6 pl-5 sm:pl-6">
            “I treat code architecture the same way I treat heavy deadlifts: form before ego. Master the fundamentals first, optimize under real load, and make sure the system doesn't break.”
          </blockquote>

          <p>
            Most developers chase every trendy tool on Twitter. I focus on what makes software resilient: <strong className="text-white font-semibold">clean state machines</strong>, <strong className="text-white font-semibold">predictable database indexing</strong>, <strong className="text-white font-semibold">sub-100ms socket latency</strong>, and user interfaces that feel tactile rather than sterile.
          </p>

          <p>
            When I'm not writing code or debugging WebSocket race conditions, I'm at the gym tracking compound lifts, reading systems papers, or keeping the cat from stepping on my mechanical keyboard.
          </p>
        </div>
      </section>

      {/* ========================================================= */}
      {/* ACADEMIC & BOOTCAMP PATH                                   */}
      {/* ========================================================= */}
      <section className="space-y-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-amber-500 font-bold text-xs select-none">—</span>
            <span className="text-xs font-mono font-semibold tracking-wider text-amber-500 uppercase">
              FOUNDATIONS
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
            Academic & Bootcamp Journey
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {profile.education.map((edu, idx) => (
            <div
              key={idx}
              className="craft-card rounded-2xl p-6 border border-white/10 space-y-3 hover:border-amber-500/40 transition-all"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-amber-400 font-semibold px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20">
                  {edu.period}
                </span>
                <span className="w-2 h-2 rounded-full bg-amber-400" />
              </div>
              <h3 className="text-base font-serif font-bold text-white">
                {edu.degree}
              </h3>
              <p className="text-xs font-medium text-slate-300">
                {edu.institution}
              </p>
              <p className="text-xs text-slate-400 leading-relaxed pt-1">
                {edu.details}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================= */}
      {/* HOBBIES & LIFE BEYOND CODE                                */}
      {/* ========================================================= */}
      <section className="space-y-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-amber-500 font-bold text-xs select-none">—</span>
            <span className="text-xs font-mono font-semibold tracking-wider text-amber-500 uppercase">
              OUTSIDE THE IDE
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
            What Keeps Me Grounded & Energized
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {profile.hobbies.map((hobby, idx) => (
            <div
              key={idx}
              className="craft-card rounded-2xl p-5 border border-white/10 space-y-2 hover:border-amber-500/40 transition-all"
            >
              <div className="text-2xl mb-1">{hobby.icon}</div>
              <h3 className="text-sm font-serif font-bold text-white">
                {hobby.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {hobby.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================= */}
      {/* INTERACTIVE POV & HOT TAKES                               */}
      {/* ========================================================= */}
      <section className="craft-card rounded-2xl p-6 sm:p-8 border border-white/10 space-y-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-amber-500 font-bold text-xs select-none">—</span>
            <span className="text-xs font-mono font-semibold tracking-wider text-amber-500 uppercase">
              ENGINEERING POV
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-white tracking-tight">
            Opinions, Hot Takes & How I Work
          </h2>
          <p className="text-xs text-slate-400">
            Click any question to view my honest perspective.
          </p>
        </div>

        <div className="space-y-3">
          {profile.hotTakes.map((take, idx) => {
            const isActive = activeTakeIndex === idx;
            return (
              <div
                key={idx}
                onClick={() => setActiveTakeIndex(idx)}
                className={`p-4 rounded-xl cursor-pointer transition-all border ${isActive
                    ? 'bg-amber-500/10 border-amber-500/30 shadow-md'
                    : 'bg-white/5 border-white/5 hover:bg-white/10'
                  }`}
              >
                <div className="flex items-center justify-between font-serif font-semibold text-sm text-white">
                  <span>{take.question}</span>
                  <span className="text-xs font-mono text-amber-400">
                    {isActive ? '—' : '+'}
                  </span>
                </div>
                {isActive && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed border-t border-white/10 pt-3 font-sans"
                  >
                    {take.answer}
                  </motion.p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================================================= */}
      {/* CALL TO CONNECT                                           */}
      {/* ========================================================= */}
      <section className="craft-card rounded-2xl p-8 sm:p-10 border border-white/10 text-center space-y-4">
        <div className="flex items-center justify-center gap-2">
          <span className="text-amber-500 font-bold text-xs select-none">—</span>
          <span className="text-xs font-mono font-semibold tracking-wider text-amber-500 uppercase">
            LET'S TALK
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
          Want to chat about software, gym routines, or an internship?
        </h2>
        <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
          I’m always excited to meet other developers, talk about interesting distributed problems, or discuss potential opportunities.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <a
            href="mailto:ahmedcomy74@gmail.com"
            className="btn-tactile inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-sm font-semibold shadow-lg shadow-amber-500/20"
          >
            <Mail className="w-4 h-4" />
            <span>Send Me an Email</span>
          </a>
          <Link
            to="/cv"
            className="btn-tactile inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 text-white text-sm font-semibold"
          >
            <FileText className="w-4 h-4 text-amber-500" />
            <span>Review Professional CV</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
