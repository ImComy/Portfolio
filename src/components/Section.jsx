import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ id, children, className = '' }) => {
  return (
    <section id={id} className={`py-16 md:py-24 relative ${className}`}>
      <div className="container mx-auto px-6 relative z-10">
        {children}
      </div>
    </section>
  );
};

export default Section;