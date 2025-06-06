import React from 'react';
import { motion } from 'framer-motion';

const SkillBar = ({ skill, percentage, icon: Icon, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay, duration: 0.5 }}
      className="mb-6 p-4 glass-card rounded-lg"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          {Icon && <Icon className="w-5 h-5 mr-2 text-primary" />}
          <span className="text-sm font-medium text-foreground">{skill}</span>
        </div>
        <span className="text-sm text-primary">{percentage}%</span>
      </div>
      <div className="w-full bg-muted rounded-full h-2.5 skill-bar">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ delay: delay + 0.2, duration: 0.8, ease: "easeOut" }}
          className="h-2.5 bg-gradient-to-r from-primary to-blue-500 rounded-full"
        />
      </div>
    </motion.div>
  );
};

export default SkillBar;