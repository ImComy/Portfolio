import React from 'react';
import Marquee from 'react-fast-marquee';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TechIconDisplay = ({ icon: Icon, name, color }) => (
  <div className="flex-shrink-0 w-32 h-32 md:w-36 md:h-36 flex flex-col items-center justify-center p-3 m-2 glass-card rounded-xl group">
    <Icon className={`w-10 h-10 md:w-12 md:h-12 mb-2 ${color} group-hover:drop-shadow-lg transition-all duration-300 group-hover:scale-110`} />
    <span className="text-xs md:text-sm text-center text-muted-foreground">{name}</span>
  </div>
);

const TechSkillsCarousel = ({ skills, speed = 50 }) => {
  return (
    <div className="w-full p-4 glass-card rounded-xl overflow-hidden">
      <h4 className="text-lg font-semibold mb-4 text-center text-primary">Core Technologies</h4>
      <Marquee gradient={false} speed={speed} pauseOnHover={true}>
        {skills.map((skill, index) => (
          <TechIconDisplay
            key={`${skill.name}-${index}`}
            icon={skill.icon}
            name={skill.name}
            color={skill.color}
          />
        ))}
      </Marquee>
      <p className="text-xs text-center text-muted-foreground mt-3">Hover to pause</p>
    </div>
  );
};

export default TechSkillsCarousel;
