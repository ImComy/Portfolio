
import React from 'react';
import { motion } from 'framer-motion';

const TechIconDisplay = ({ icon: Icon, name, color }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.4 }}
      className="tech-icon flex flex-col items-center p-4 glass-card rounded-xl group w-32 h-32 justify-center"
    >
      <Icon className={`w-10 h-10 mb-2 ${color} group-hover:drop-shadow-lg transition-all duration-300 group-hover:scale-110`} />
      <span className="text-xs text-center text-muted-foreground">{name}</span>
    </motion.div>
  );
};

const TechSkillsSlider = ({ skills }) => {
  return (
    <div className="relative w-full p-4 glass-card rounded-xl overflow-hidden min-h-[180px]">
      <h4 className="text-lg font-semibold mb-4 text-center text-primary">Core Technologies</h4>
      <p className="text-center text-muted-foreground">This component is no longer used. Please use TechSkillsCarousel instead.</p>
      {/* The old slider logic is removed. If you need to revert, check git history. */}
      {/* This is a placeholder to indicate the component is deprecated in favor of TechSkillsCarousel */}
      <div className="flex justify-around items-center gap-4 opacity-50">
        {skills.slice(0,2).map((skill, index) => (
            <TechIconDisplay key={index} icon={skill.icon} name={skill.name} color={skill.color} />
          ))}
      </div>
    </div>
  );
};

export default TechSkillsSlider;
