
import React from 'react';
import { motion } from 'framer-motion';

const EducationTimeline = ({ items }) => {
  return (
    <div className="education-timeline max-w-xl md:max-w-3xl mx-auto px-4 sm:px-0">
      {items.map((item, index) => (
        <motion.div
          key={index}
          className={`education-item ${index % 2 === 0 ? 'md:pr-[calc(50%+20px)] md:text-right' : 'md:pl-[calc(50%+20px)] md:left-auto md:right-0 md:text-left'}`}
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <div className={`education-content ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
            <div className={`flex items-center mb-2 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              {item.icon && <item.icon className={`w-6 h-6 text-primary pr-1  ${index % 2 === 0 ? 'md:ml-3' : 'md:mr-3'}`} />}
              <h3 className="text-lg font-semibold text-foreground ml-1">{item.title}</h3>
            </div>
            <p className="text-sm text-primary mb-1">{item.date}</p>
            <p className="text-sm font-medium text-muted-foreground mb-2">{item.institution}</p>
            <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default EducationTimeline;
