import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code2, Calendar, MapPin, ArrowUpRight } from 'lucide-react';

const timelineData = [
  {
    period: '2023 — 2027',
    status: 'In Progress',
    title: 'B.Sc. in Computer Science',
    institution: 'Suez Canal University',
    location: 'Ismailia, Egypt',
    icon: GraduationCap,
    description:
      'Focusing on software engineering principles, data structures, algorithms, database architectures, and distributed systems.',
    highlights: ['Algorithms & Complexity', 'Database Design', 'Computer Networks', 'Operating Systems']
  },
  {
    period: 'Aug 2024',
    status: 'Completed',
    title: 'Front-End Development Bootcamp',
    institution: 'Information Technology Institute (ITI)',
    location: 'Ismailia Branch',
    icon: Code2,
    description:
      'Intensive hands-on training focusing on modern React architectures, TypeScript, state management with Redux, and collaborative sprints.',
    highlights: ['React & Next.js Ecosystem', 'TypeScript in Practice', 'Redux State Management', 'Agile Workflows']
  }
];

export default function AcademicTimeline() {
  return (
    <div className="max-w-3xl mx-auto text-left">
      <div className="relative border-l-2 border-white/10 ml-4 sm:ml-6 space-y-10 py-2">
        {timelineData.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative pl-6 sm:pl-8 group"
            >
              {/* Sleek Node Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-background border-2 border-primary group-hover:scale-125 group-hover:bg-primary transition-all duration-300 shadow-[0_0_10px_rgba(255,107,74,0.5)]" />

              <div className="space-y-3">
                {/* Header Info */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-primary px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/20">
                      {item.period}
                    </span>
                    <span className="text-[11px] font-mono text-muted-foreground px-2 py-0.5 rounded bg-white/5">
                      {item.status}
                    </span>
                  </div>

                  <span className="text-xs font-mono text-muted-foreground flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-muted-foreground" />
                    {item.location}
                  </span>
                </div>

                {/* Title & Institution */}
                <div>
                  <h3 className="text-lg sm:text-xl font-heading font-bold text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm font-medium text-foreground/80 mt-0.5">
                    {item.institution}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-2xl">
                  {item.description}
                </p>

                {/* Topic tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {item.highlights.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/5 text-muted-foreground border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
