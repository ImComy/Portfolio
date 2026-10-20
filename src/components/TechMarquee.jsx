import React, { useRef, useState, useEffect, useCallback } from 'react';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiRedux,
  SiCplusplus,
  SiPython,
  SiGit,
  SiLinux
} from 'react-icons/si';
import { MoveHorizontal, ChevronLeft, ChevronRight, Pause } from 'lucide-react';

const techItems = [
  { name: 'React', icon: SiReact, color: 'text-cyan-400' },
  { name: 'Next.js', icon: SiNextdotjs, color: 'text-white' },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-400' },
  { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
  { name: 'Node.js', icon: SiNodedotjs, color: 'text-emerald-400' },
  { name: 'Express.js', icon: SiExpress, color: 'text-neutral-300' },
  { name: 'MongoDB', icon: SiMongodb, color: 'text-emerald-500' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-teal-400' },
  { name: 'Redux Toolkit', icon: SiRedux, color: 'text-purple-400' },
  { name: 'C / C++', icon: SiCplusplus, color: 'text-blue-500' },
  { name: 'Python', icon: SiPython, color: 'text-amber-400' },
  { name: 'Git', icon: SiGit, color: 'text-orange-500' },
  { name: 'Linux', icon: SiLinux, color: 'text-yellow-500' }
];

export default function TechMarquee() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const singleSetRef = useRef(null);

  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Animation values stored in refs for maximum 60/120fps performance
  const offsetRef = useRef(0);
  const isDraggingRef = useRef(false);
  const isHoveredRef = useRef(false);
  const lastXRef = useRef(0);
  const velocityRef = useRef(0);
  const singleSetWidthRef = useRef(0);

  // Measure single set width accurately
  const measureWidth = useCallback(() => {
    if (singleSetRef.current) {
      const rect = singleSetRef.current.getBoundingClientRect();
      if (rect.width > 50) {
        singleSetWidthRef.current = rect.width;
      }
    }
  }, []);

  useEffect(() => {
    measureWidth();
    const timer = setTimeout(measureWidth, 250);
    window.addEventListener('resize', measureWidth);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', measureWidth);
    };
  }, [measureWidth]);

  // Main continuous render / momentum loop
  useEffect(() => {
    let animId;
    const autoScrollSpeed = 0.85; // px per frame

    const loop = () => {
      if (isDraggingRef.current) {
        // While user is dragging, movement is driven by onPointerMove
      } else if (Math.abs(velocityRef.current) > 0.15) {
        // Coasting deceleration after drag flick
        offsetRef.current += velocityRef.current;
        velocityRef.current *= 0.92;
      } else if (!isHoveredRef.current) {
        // Auto-scroll ONLY when not hovered and not dragging
        offsetRef.current -= autoScrollSpeed;
      }

      // Seamless infinite wrapping modulo single set width
      const setWidth = singleSetWidthRef.current;
      if (setWidth > 0) {
        while (offsetRef.current <= -setWidth) {
          offsetRef.current += setWidth;
        }
        while (offsetRef.current > 0) {
          offsetRef.current -= setWidth;
        }
      }

      // Apply transform via hardware acceleration
      if (trackRef.current) {
        trackRef.current.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
      }

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, []);

  // HTML5 Pointer Events
  const onPointerDown = (e) => {
    if (e.button !== undefined && e.button !== 0) return;

    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch (err) {}

    isDraggingRef.current = true;
    setIsDragging(true);
    lastXRef.current = e.clientX;
    velocityRef.current = 0;
  };

  const onPointerMove = (e) => {
    if (!isDraggingRef.current) return;
    const dx = e.clientX - lastXRef.current;
    offsetRef.current += dx;
    velocityRef.current = dx * 0.85;
    lastXRef.current = e.clientX;
  };

  const onPointerUp = (e) => {
    if (isDraggingRef.current) {
      isDraggingRef.current = false;
      setIsDragging(false);
      try {
        e.currentTarget.releasePointerCapture(e.pointerId);
      } catch (err) {}
    }
  };

  const handleMouseEnter = () => {
    isHoveredRef.current = true;
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    isHoveredRef.current = false;
    setIsHovered(false);
    velocityRef.current = 0; // stop any drag momentum on exit so it cleanly scrolls
  };

  const nudge = (direction) => {
    offsetRef.current += direction * 80;
  };

  const renderItemSet = (isKeySet = false) => (
    <div
      ref={isKeySet ? singleSetRef : null}
      className="flex items-center shrink-0"
    >
      {techItems.map((tech) => {
        const Icon = tech.icon;
        return (
          <div
            key={tech.name + (isKeySet ? '-set1' : '-set2')}
            className="mx-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-primary/40 flex items-center gap-2.5 transition-colors select-none shrink-0 pointer-events-none"
          >
            <Icon className={`w-5 h-5 ${tech.color} shrink-0`} />
            <span className="text-xs font-mono font-medium text-foreground whitespace-nowrap">
              {tech.name}
            </span>
          </div>
        );
      })}
    </div>
  );

  return (
    <div className="w-full text-left select-none">
      <div className="flex items-center justify-between px-1 pb-2">
        <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground font-semibold flex items-center gap-1.5">
          <span>Tools & Daily Drivers</span>
        </span>
        <div className="flex items-center gap-3">
          <span className="text-[11px] font-mono text-muted-foreground/80 flex items-center gap-1.5">
            {isHovered ? (
              <span className="flex items-center gap-1 text-primary">
                <Pause className="w-3 h-3" />
                <span>Paused on hover</span>
              </span>
            ) : (
              <span className="flex items-center gap-1">
                <MoveHorizontal className="w-3.5 h-3.5 text-primary" />
                <span>Hover to pause • Drag to scrub</span>
              </span>
            )}
          </span>
          {/* Quick nudge buttons */}
          <div className="hidden sm:flex items-center gap-1">
            <button
              type="button"
              onClick={() => nudge(1)}
              className="p-1 rounded-lg bg-white/5 hover:bg-white/10 text-muted-foreground hover:text-foreground transition-colors"
              title="Scrub right"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={() => nudge(-1)}
              className="p-1 rounded-lg bg-white/5 hover:bg-white/10 text-muted-foreground hover:text-foreground transition-colors"
              title="Scrub left"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={containerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        className={`relative overflow-hidden rounded-2xl bg-card/60 backdrop-blur-md border border-white/10 p-3 shadow-inner touch-pan-y ${
          isDragging ? 'cursor-grabbing' : 'cursor-grab'
        }`}
        title="Hover to pause • Click and drag to scrub"
      >
        {/* Subtle gradient edges */}
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-card to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-card to-transparent z-10 pointer-events-none" />

        {/* Draggable & Animating Strip */}
        <div
          ref={trackRef}
          className="flex items-center will-change-transform"
        >
          {renderItemSet(true)}
          {renderItemSet(false)}
          {renderItemSet(false)}
          {renderItemSet(false)}
        </div>
      </div>
    </div>
  );
}
