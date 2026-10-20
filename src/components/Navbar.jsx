import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Mail, Menu, X, Check, FileText } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Navbar() {
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const copyEmail = () => {
    navigator.clipboard.writeText('ahmedcomy74@gmail.com');
    setCopied(true);
    confetti({
      particleCount: 40,
      spread: 50,
      origin: { y: 0.1, x: 0.85 }
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Showcase', path: '/showcase' },
    { name: 'About Me', path: '/about' },
    { name: 'CV & Spec', path: '/cv' }
  ];

  return (
    <>
      {/* Mobile backdrop overlay to easily tap away */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      <header className="sticky top-0 sm:top-4 z-50 w-full pt-2.5 sm:pt-0 px-3 sm:px-6 max-w-6xl mx-auto no-print">
        <nav className="flex items-center justify-between px-3.5 sm:px-6 py-2.5 rounded-2xl bg-card/90 backdrop-blur-xl border border-white/10 shadow-xl shadow-black/25">
          {/* Brand / Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="relative shrink-0">
              <div className="w-8 h-8 rounded-full overflow-hidden bg-muted border border-white/15 ring-2 ring-primary/20 group-hover:ring-primary/50 transition-all duration-300">
                <img
                  src="/pfp.png"
                  alt="Ahmed El-Shazly"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-card" />
            </div>

            <span className="text-sm sm:text-base font-heading font-bold text-foreground tracking-tight group-hover:text-primary transition-colors">
              Ahmed El-Shazly
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1 bg-white/5 p-1 rounded-xl border border-white/5">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${isActive
                    ? 'bg-primary text-primary-foreground font-semibold shadow-sm'
                    : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={copyEmail}
              className="btn-tactile flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono bg-white/5 hover:bg-white/10 border border-white/10 text-muted-foreground hover:text-foreground transition-all"
              title="Click to copy email address"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-semibold">Copied!</span>
                </>
              ) : (
                <>
                  <Mail className="w-3.5 h-3.5" />
                  <span>Copy Email</span>
                </>
              )}
            </button>

            <Link
              to="/cv"
              className="btn-tactile flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-primary hover:bg-primary/90 text-primary-foreground transition-all shadow-sm"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>View CV</span>
            </Link>
          </div>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-white/5 border border-white/5 transition-colors"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>

        {/* Mobile Attached Dropdown Menu (Sticks with navbar) */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 p-3 rounded-2xl bg-card/95 backdrop-blur-2xl border border-white/10 shadow-2xl shadow-black/40 flex flex-col gap-1 animate-in fade-in slide-in-from-top-2 duration-200">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${isActive
                    ? 'bg-primary text-primary-foreground font-semibold shadow-sm'
                    : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
                  }`
                }
              >
                <span>{item.name}</span>
                <span className="text-xs opacity-60">→</span>
              </NavLink>
            ))}
            <div className="mt-1 pt-2 border-t border-white/10 flex items-center gap-2">
              <button
                onClick={copyEmail}
                className="flex-1 py-2 px-3 rounded-xl text-xs font-mono bg-white/5 hover:bg-white/10 border border-white/10 text-center flex items-center justify-center gap-1.5 text-muted-foreground hover:text-foreground transition-all"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-3.5 h-3.5" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
              <Link
                to="/cv"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-4 rounded-xl text-xs font-semibold bg-primary hover:bg-primary/90 text-primary-foreground text-center flex items-center gap-1.5 shadow-sm"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>CV</span>
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
