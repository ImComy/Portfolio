import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  sourceCode,
  liveDemo,
  index,
  date
}) => {
  const [imgSrc, setImgSrc] = React.useState(image);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      className="glass-card rounded-2xl p-0 project-card group flex flex-col shadow-2xl border border-primary/20 hover:border-primary/40 transition-all duration-300 bg-gradient-to-br from-background/80 to-secondary/60"
    >
      <div className="relative overflow-hidden rounded-t-2xl mb-0 aspect-video border-b border-primary/10">
        <img  
          alt={`${title} project screenshot`}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          src={imgSrc}
          onError={() =>
            setImgSrc(
              `https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=${title.replace(/\s+/g, '-')}`
            )
          }
        />
        {/* Desktop (hover) buttons */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 hidden sm:flex">
          <div className="flex gap-3">
            <Button
              size="sm"
              className="bg-primary/90 hover:bg-primary text-primary-foreground shadow-lg group-hover:animate-pulse rounded-full px-4"
              asChild
            >
              <a href={liveDemo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </a>
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="bg-background/80 border-primary/50 hover:bg-primary/10 text-primary hover:text-primary shadow-lg rounded-full px-4"
              asChild
            >
              <a href={sourceCode} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                Source Code
              </a>
            </Button>
          </div>
        </div>
      </div>
      {/* Mobile (always visible) buttons - moved below the image */}
      <div className="flex gap-2 justify-center mb-3 sm:hidden mt-4">
        <Button
          size="sm"
          className="bg-primary/90 hover:bg-primary text-primary-foreground shadow-lg rounded-full px-4"
          asChild
        >
          <a href={liveDemo} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="w-4 h-4 mr-2" />
            Live Demo
          </a>
        </Button>
        <Button
          size="sm"
          variant="outline"
          className="bg-background/80 border-primary/50 hover:bg-primary/10 text-primary hover:text-primary shadow-lg rounded-full px-4"
          asChild
        >
          <a href={sourceCode} target="_blank" rel="noopener noreferrer">
            <Github className="w-4 h-4 mr-2" />
            Source Code
          </a>
        </Button>
      </div>
      <div className="flex flex-col flex-1 px-6 pt-4 pb-6">
        <h3 className="text-2xl font-bold mb-1 text-gradient drop-shadow-sm">{title}</h3>
        {date && (
          <div className="text-xs text-muted-foreground mb-2 italic">{date}</div>
        )}
        <p className="text-muted-foreground text-sm mb-4 flex-grow leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs border border-primary/30 font-semibold shadow-sm hover:bg-primary/20 transition"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;