import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Award, ArrowLeft, CheckCircle2, Calendar, Building, ExternalLink, ShieldCheck, ArrowRight } from 'lucide-react';
import { certifications } from '../data/certifications';

export default function CertificateDetailPage() {
  const { id } = useParams();
  const cert = certifications.find((c) => c.id === id || c.slug === id);

  if (!cert) {
    return <Navigate to="/showcase" replace />;
  }

  return (
    <div className="max-w-4xl mx-auto space-y-10 pb-16 text-left">
      {/* Back button */}
      <div>
        <Link
          to="/showcase"
          className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to Showcase</span>
        </Link>
      </div>

      {/* Main Certificate Card */}
      <motion.article
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="craft-card rounded-2xl p-6 sm:p-10 border border-white/10 space-y-8"
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 border-b border-white/10 pb-6">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center gap-1.5">
                <span className="text-amber-500 font-bold text-xs select-none">—</span>
                <span className="text-xs font-mono font-semibold tracking-wider text-amber-500 uppercase">
                  {cert.category}
                </span>
              </div>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <ShieldCheck className="w-3.5 h-3.5" /> {cert.status}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-serif font-bold text-white">
              {cert.title}
            </h1>

            <p className="text-sm font-medium text-slate-300 flex items-center gap-2">
              <Building className="w-4 h-4 text-amber-500" />
              <span>{cert.issuer}</span>
              <span>•</span>
              <span className="text-slate-400 flex items-center gap-1 text-xs">
                <Calendar className="w-3.5 h-3.5" /> {cert.issueDate}
              </span>
            </p>
          </div>

          <div className="shrink-0 p-4 rounded-2xl bg-white/5 border border-white/10 text-primary self-start">
            <Award className="w-10 h-10" />
          </div>
        </div>

        {/* Certificate Meta Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-1">
            <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">
              Credential ID
            </span>
            <p className="text-sm font-mono font-semibold text-foreground">
              {cert.credentialId}
            </p>
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-1">
            <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">
              Issued By
            </span>
            <p className="text-sm font-heading font-semibold text-foreground">
              {cert.issuer}
            </p>
          </div>
        </div>

        {/* Description */}
        <div className="space-y-3">
          <h2 className="text-base font-heading font-bold text-foreground">
            Scope & Curriculum Highlights
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {cert.description}
          </p>
        </div>

        {/* Skills Tagged */}
        <div className="space-y-3">
          <h2 className="text-xs font-mono uppercase tracking-wider text-muted-foreground font-semibold">
            Validated Competencies & Technologies
          </h2>
          <div className="flex flex-wrap gap-2">
            {cert.skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 rounded-lg text-xs font-mono bg-white/5 text-foreground border border-white/10"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* External Verify Link */}
        {cert.verifyUrl && (
          <div className="pt-4 border-t border-white/10 flex items-center justify-between">
            <a
              href={cert.verifyUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-tactile inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground text-xs font-semibold shadow-sm"
            >
              <span>Verify at Official Issuer</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <Link
              to="/showcase"
              className="text-xs font-mono text-muted-foreground hover:text-foreground"
            >
              Back to all items
            </Link>
          </div>
        )}
      </motion.article>
    </div>
  );
}
