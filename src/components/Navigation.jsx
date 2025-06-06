import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = ({ activeSection, sections }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border w-full"
      style={{ WebkitOverflowScrolling: 'touch' }}
    >
      <div className="w-full">
        <div className="flex justify-between items-center px-4 sm:px-6 py-3">
          <motion.div
            whileHover={{ scale: 1.05, rotate: -2 }}
            className="text-lg sm:text-2xl font-bold text-gradient cursor-default truncate"
            style={{ maxWidth: '70vw' }}
          >
            Ahmed El-Shazly Mohmed Abbas
          </motion.div>
          {/* Desktop links */}
          <div className="hidden md:flex space-x-6">
            {sections.map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ scale: 1.1, y: -2 }}
                className={`text-sm transition-colors whitespace-nowrap ${
                  activeSection === item.toLowerCase()
                    ? 'text-primary font-semibold'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item}
              </motion.a>
            ))}
          </div>
          {/* Mobile menu button with animated hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 relative z-50"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-primary rounded transition-all duration-300
                ${menuOpen ? 'rotate-45 translate-y-2' : ''}
              `}
            />
            <span
              className={`block w-6 h-0.5 bg-primary rounded transition-all duration-300 my-1
                ${menuOpen ? 'opacity-0' : ''}
              `}
            />
            <span
              className={`block w-6 h-0.5 bg-primary rounded transition-all duration-300
                ${menuOpen ? '-rotate-45 -translate-y-2' : ''}
              `}
            />
          </button>
        </div>
        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden mt-3 flex flex-col space-y-3 px-4 pb-2 w-full overflow-x-hidden"
            >
              {sections.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`block text-base px-2 py-2 rounded transition-colors whitespace-nowrap ${
                    activeSection === item.toLowerCase()
                      ? 'text-primary font-semibold bg-primary/10'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;