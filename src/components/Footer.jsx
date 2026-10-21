import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, ExternalLink, Heart, Terminal } from 'lucide-react';
import { FaDiscord } from 'react-icons/fa';
import { profile } from '../data/profile';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-white/10 bg-card/40 backdrop-blur-md pt-16 pb-12 px-4 sm:px-6 no-print">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* Left branding */}
        <div className="space-y-3 max-w-sm">
          <div className="flex items-center gap-2">
            <span className="font-serif font-bold text-lg text-white">
              Ahmed El-Shazly
            </span>
            <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
              @ImComy
            </span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Computer Science student at Suez Canal University. Building full-stack web systems, real-time mechanics, and responsive interfaces with genuine craft.
          </p>
          <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground pt-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Based in Ismailia, Egypt</span>
          </div>
        </div>

        {/* Navigation columns */}
        <div className="flex flex-wrap gap-10 text-xs">
          <div className="space-y-2.5">
            <span className="font-mono text-muted-foreground uppercase tracking-wider text-[11px] font-semibold">
              Navigation
            </span>
            <ul className="space-y-1.5 font-medium">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/showcase" className="text-muted-foreground hover:text-foreground transition-colors">
                  Showcase (Projects & Certifications)
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About & Life Story
                </Link>
              </li>
              <li>
                <Link to="/cv" className="text-muted-foreground hover:text-foreground transition-colors">
                  CV & Specification
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-2.5">
            <span className="font-mono text-muted-foreground uppercase tracking-wider text-[11px] font-semibold">
              Connect
            </span>
            <div className="flex flex-col gap-1.5 font-medium">
              <a
                href="https://github.com/ImComy"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="w-3.5 h-3.5" /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/ahmedelshazly74/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" /> LinkedIn
              </a>
              <a
                href="mailto:ahmedcomy74@gmail.com"
                className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="w-3.5 h-3.5" /> Email
              </a>
              <a
                href="https://discord.com/users/713394083179135026"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
              >
                <FaDiscord className="w-3.5 h-3.5" /> Discord
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-muted-foreground">
        <div>
          © {currentYear} Ahmed El-Shazly. Built with React, Tailwind & Vite.
        </div>
        <div className="flex items-center gap-1.5">
          <Terminal className="w-3.5 h-3.5 text-primary" />
          <span>No boring templates. Pure human code.</span>
        </div>
      </div>
    </footer>
  );
}
