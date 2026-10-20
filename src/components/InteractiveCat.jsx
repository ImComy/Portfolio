import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

export default function InteractiveCat() {
  const [isSupported, setIsSupported] = useState(false);
  const [targetPosition, setTargetPosition] = useState(null);
  const [catEmoji, setCatEmoji] = useState('🐱');
  const [isSleeping, setIsSleeping] = useState(false);
  const [petCount, setPetCount] = useState(0);
  const [hearts, setHearts] = useState([]);
  const [toyType, setToyType] = useState('🧶');
  const playIntervalRef = useRef(null);

  const x = useMotionValue(100);
  const y = useMotionValue(200);
  const springX = useSpring(x, { damping: 28, stiffness: 140 });
  const springY = useSpring(y, { damping: 28, stiffness: 140 });

  // Detect touch / mobile devices - disabled completely on touch screens
  useEffect(() => {
    const checkSupport = () => {
      const isTouch =
        window.matchMedia('(pointer: coarse)').matches ||
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        window.innerWidth < 768;
      setIsSupported(!isTouch);
    };

    checkSupport();
    window.addEventListener('resize', checkSupport);
    return () => window.removeEventListener('resize', checkSupport);
  }, []);

  useEffect(() => {
    if (!isSupported || isSleeping) return;

    const handleMouseMove = (e) => {
      if (!targetPosition) {
        const xOffset = window.scrollX + e.clientX + 20;
        const yOffset = window.scrollY + e.clientY + 20;
        x.set(xOffset);
        y.set(yOffset);
        setCatEmoji('😼');

        clearTimeout(window.__catTimeout);
        window.__catTimeout = setTimeout(() => {
          if (!targetPosition) setCatEmoji('🐱');
        }, 250);
      }
    };

    const handleClick = (e) => {
      // Don't toss toy if clicked on interactive buttons, inputs, links, or cat box
      if (
        !targetPosition &&
        !['button', 'a', 'input', 'textarea'].includes(e.target.tagName.toLowerCase()) &&
        !e.target.closest('button') &&
        !e.target.closest('a') &&
        !e.target.classList.contains('cat-toy') &&
        !e.target.classList.contains('cat-avatar')
      ) {
        const xOffset = window.scrollX + e.clientX;
        const yOffset = window.scrollY + e.clientY;
        const toys = ['🧶', '🐟', '🎾', '🐁'];
        setToyType(toys[Math.floor(Math.random() * toys.length)]);
        setTargetPosition({ x: xOffset, y: yOffset });
        setCatEmoji('😻');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      clearTimeout(window.__catTimeout);
      clearInterval(playIntervalRef.current);
    };
  }, [isSupported, targetPosition, isSleeping, x, y]);

  // Toy playing animation loop
  useEffect(() => {
    if (!targetPosition || isSleeping) {
      clearInterval(playIntervalRef.current);
      return;
    }

    let angle = 0;
    playIntervalRef.current = setInterval(() => {
      angle += 0.6;
      const radius = 25 + Math.random() * 12;
      const dx = targetPosition.x + Math.cos(angle) * radius;
      const dy = targetPosition.y + Math.sin(angle) * radius;
      x.set(dx + 10);
      y.set(dy + 10);
      setCatEmoji(['😹', '😻', '😼', '😽'][Math.floor(Math.random() * 4)]);
    }, 450);

    return () => clearInterval(playIntervalRef.current);
  }, [targetPosition, isSleeping, x, y]);

  const handleToyClick = (e) => {
    e.stopPropagation();
    setTargetPosition(null);
    setCatEmoji('🐱');
  };

  const handlePetCat = (e) => {
    e.stopPropagation();
    setPetCount((prev) => prev + 1);
    setCatEmoji('😻');

    // Spawn floating heart
    const newHeart = {
      id: Date.now() + Math.random(),
      x: springX.get() + (Math.random() * 20 - 10),
      y: springY.get() - 20
    };
    setHearts((prev) => [...prev, newHeart]);
    setTimeout(() => {
      setHearts((prev) => prev.filter((h) => h.id !== newHeart.id));
    }, 1200);

    setTimeout(() => {
      if (!targetPosition) setCatEmoji('🐱');
    }, 600);
  };

  if (!isSupported) {
    return null;
  }

  return (
    <div className="hidden md:block">
      {/* Floating Toy when user clicks screen */}
      {targetPosition && !isSleeping && (
        <motion.div
          className="cat-toy absolute z-30 w-10 h-10 flex items-center justify-center cursor-pointer select-none"
          style={{
            left: targetPosition.x - 20,
            top: targetPosition.y - 20
          }}
          initial={{ scale: 0, rotate: 0 }}
          animate={{ scale: 1, rotate: [0, 360] }}
          transition={{
            type: 'spring',
            stiffness: 350,
            damping: 18,
            rotate: { repeat: Infinity, duration: 2, ease: 'linear' }
          }}
          onClick={handleToyClick}
          title="Click to retrieve toy!"
        >
          <span className="text-3xl filter drop-shadow-md select-none">{toyType}</span>
        </motion.div>
      )}

      {/* Cat Avatar following or sleeping */}
      {!isSleeping && (
        <motion.div
          className="cat-avatar absolute z-30 cursor-pointer select-none"
          style={{
            x: springX,
            y: springY,
            pointerEvents: 'auto'
          }}
          whileHover={{ scale: 1.25 }}
          whileTap={{ scale: 0.9 }}
          onClick={handlePetCat}
          title="Click to pet the cat!"
        >
          <div className="relative text-3xl sm:text-4xl filter drop-shadow-lg transition-transform duration-150">
            {catEmoji}
          </div>
        </motion.div>
      )}

      {/* Floating Pet Hearts */}
      <AnimatePresence>
        {hearts.map((heart) => (
          <motion.div
            key={heart.id}
            initial={{ opacity: 1, y: 0, scale: 0.6 }}
            animate={{ opacity: 0, y: -40, scale: 1.3 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute z-30 pointer-events-none text-xl"
            style={{ left: heart.x, top: heart.y }}
          >
            💖
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Cozy Cat Sleep/Wake Toggle Dock in bottom right */}
      <div className="fixed bottom-4 right-4 z-40 no-print flex items-center gap-2">
        <button
          onClick={() => setIsSleeping(!isSleeping)}
          className="group flex items-center gap-2 px-3 py-1.5 rounded-full bg-card/90 backdrop-blur-md border border-white/10 hover:border-primary/40 text-xs font-mono text-muted-foreground hover:text-foreground shadow-lg transition-all"
          title={isSleeping ? 'Wake up cat' : 'Put cat to sleep in box'}
        >
          <span>{isSleeping ? '📦💤' : '🐱🐾'}</span>
          <span className="hidden sm:inline">
            {isSleeping ? 'Cat napping (Click to wake)' : petCount > 0 ? `Petted ${petCount}x` : 'Cat following'}
          </span>
        </button>
      </div>
    </div>
  );
}
