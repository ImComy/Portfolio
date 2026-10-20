import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, MapPin, GraduationCap, Heart, Coffee, Dumbbell, Gamepad2, Wrench, MessageSquare, ArrowRight, ExternalLink } from 'lucide-react';
import { profile } from '../data/profile';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  const [activeTakeIndex, setActiveTakeIndex] = useState(0);

  return (
    <div className="max-w-4xl mx-auto space-y-16 pb-16 text-left">
      {/* Intro Hero */}
      <section className="space-y-6 pt-6 border-b border-white/10 pb-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border-2 border-primary/50 shadow-2xl shrink-0 bg-muted">
            <img
              src="/pfp.png"
              alt="Ahmed El-Shazly"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>
          <div className="space-y-2">
            <span className="badge-pill text-xs font-mono text-primary">
              <User className="w-3.5 h-3.5" /> The Human Behind The Code
            </span>
            <h1 className="text-3xl sm:text-5xl font-heading font-bold text-foreground">
              Ahmed El-Shazly
            </h1>
            <p className="text-sm font-mono text-muted-foreground flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Ismailia, Egypt • Computer Science @ Suez Canal University</span>
            </p>
          </div>
        </div>

        <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed pt-4">
          <p>{profile.aboutStory.intro}</p>
          <p>{profile.aboutStory.background}</p>
          <p>{profile.aboutStory.perspective}</p>
        </div>
      </section>

      {/* Education & Bootcamp Path */}
      <section className="space-y-6">
        <h2 className="text-2xl font-heading font-bold text-foreground flex items-center gap-2.5">
          <GraduationCap className="w-5 h-5 text-accent" /> Academic & Bootcamp Journey
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {profile.education.map((edu, idx) => (
            <div
              key={idx}
              className="craft-card rounded-2xl p-6 border border-white/10 space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-primary font-semibold">
                  {edu.period}
                </span>
                <span className="w-2 h-2 rounded-full bg-accent" />
              </div>
              <h3 className="text-base font-heading font-bold text-foreground">
                {edu.degree}
              </h3>
              <p className="text-xs font-medium text-foreground/80">
                {edu.institution}
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed pt-1">
                {edu.details}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Hobbies & Life Beyond Code */}
      <section className="space-y-6">
        <div className="space-y-1">
          <span className="badge-pill text-xs font-mono text-primary">
            <Heart className="w-3.5 h-3.5" /> Outside The IDE
          </span>
          <h2 className="text-2xl font-heading font-bold text-foreground">
            What Keeps Me Grounded & Energized
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {profile.hobbies.map((hobby, idx) => (
            <div
              key={idx}
              className="craft-card rounded-2xl p-5 border border-white/10 space-y-2 hover:border-primary/40 transition-all"
            >
              <div className="text-2xl mb-1">{hobby.icon}</div>
              <h3 className="text-sm font-heading font-bold text-foreground">
                {hobby.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {hobby.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Hot Takes & Perspectives */}
      <section className="craft-card rounded-2xl p-6 sm:p-8 border border-white/10 space-y-6">
        <div className="space-y-1">
          <span className="badge-pill text-xs font-mono text-accent">
            <MessageSquare className="w-3.5 h-3.5" /> Engineering POV
          </span>
          <h2 className="text-xl sm:text-2xl font-heading font-bold text-foreground">
            Opinions, Hot Takes & How I Work
          </h2>
          <p className="text-xs text-muted-foreground">
            Click any question to view my honest take.
          </p>
        </div>

        <div className="space-y-3">
          {profile.hotTakes.map((take, idx) => {
            const isActive = activeTakeIndex === idx;
            return (
              <div
                key={idx}
                onClick={() => setActiveTakeIndex(idx)}
                className={`p-4 rounded-xl cursor-pointer transition-all border ${
                  isActive
                    ? 'bg-primary/10 border-primary/30 shadow-md'
                    : 'bg-white/5 border-white/5 hover:bg-white/10'
                }`}
              >
                <div className="flex items-center justify-between font-heading font-semibold text-sm text-foreground">
                  <span>{take.question}</span>
                  <span className="text-xs font-mono text-muted-foreground">
                    {isActive ? '—' : '+'}
                  </span>
                </div>
                {isActive && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="text-xs text-muted-foreground mt-3 leading-relaxed border-t border-white/10 pt-3"
                  >
                    {take.answer}
                  </motion.p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Call to Connect */}
      <section className="p-8 rounded-2xl bg-white/5 border border-white/10 text-center space-y-4">
        <h2 className="text-xl font-heading font-bold text-foreground">
          Want to chat about software, gym routines, or an internship?
        </h2>
        <p className="text-xs text-muted-foreground max-w-md mx-auto">
          I’m always excited to meet other developers, talk about interesting problems, or discuss potential opportunities.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <a
            href="mailto:ahmedcomy74@gmail.com"
            className="btn-tactile px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-xs font-semibold shadow-sm"
          >
            Send Me an Email
          </a>
          <Link
            to="/cv"
            className="btn-tactile px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-foreground text-xs font-semibold"
          >
            Review Professional CV
          </Link>
        </div>
      </section>
    </div>
  );
}
