import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CatFollower = () => {
  const [targetPosition, setTargetPosition] = useState(null);
  const [catEmoji, setCatEmoji] = useState('🐱');
  const [isPlaying, setIsPlaying] = useState(false);
  const playIntervalRef = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 25, stiffness: 120 });
  const springY = useSpring(y, { damping: 25, stiffness: 120 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!targetPosition) {
        const xOffset = window.scrollX + e.clientX + 15;
        const yOffset = window.scrollY + e.clientY + 15;
        x.set(xOffset);
        y.set(yOffset);
        setCatEmoji('😼');

        clearTimeout(window.__catTimeout);
        window.__catTimeout = setTimeout(() => setCatEmoji('🐱'), 200);
      }
    };

    const handleClick = (e) => {
      if (
        !targetPosition &&
        e.target.tagName.toLowerCase() !== 'button' &&
        !e.target.classList.contains('ball')
      ) {
        const xOffset = window.scrollX + e.clientX;
        const yOffset = window.scrollY + e.clientY;
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
  }, [targetPosition, x, y]);

  useEffect(() => {
    if (!targetPosition) {
      clearInterval(playIntervalRef.current);
      return;
    }

    let angle = 0;
    setIsPlaying(true);
    playIntervalRef.current = setInterval(() => {
      angle += 0.5 + Math.random() * 0.5;
      const radius = 30 + Math.random() * 10;
      const dx = targetPosition.x + Math.cos(angle) * radius;
      const dy = targetPosition.y + Math.sin(angle) * radius;
      x.set(dx + 10);
      y.set(dy + 10);
      setCatEmoji(['😹', '😻', '😼'][Math.floor(Math.random() * 3)]);
    }, 500);

    return () => clearInterval(playIntervalRef.current);
  }, [targetPosition, x, y]);

  const handleBallClick = (e) => {
    e.stopPropagation();
    setTargetPosition(null);
    setIsPlaying(false);
    setCatEmoji('🐱');
  };

// ...existing code...
return (
  <>
    {targetPosition && (
      <motion.div
        className="ball absolute z-40 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center cursor-pointer"
        style={{
          left: targetPosition.x,
          top: targetPosition.y,
        }}
        initial={{ scale: 0, rotate: 0 }}
        animate={{ scale: 1, rotate: [0, 360] }}
        transition={{ type: 'spring', stiffness: 300, damping: 15, rotate: { repeat: Infinity, duration: 2, ease: "linear" } }}
        onClick={handleBallClick}
      >
        <span className="text-3xl sm:text-4xl select-none pointer-events-none">🏐</span>
      </motion.div>
    )}

    <motion.div
      className="absolute z-50 text-4xl pointer-events-none drop-shadow-md hidden sm:block"
      style={{ x: springX, y: springY }}
    >
      {catEmoji}
    </motion.div>
  </>
);
};

export default CatFollower;