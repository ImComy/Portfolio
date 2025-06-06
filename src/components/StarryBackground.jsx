import React, { useEffect, useState } from 'react';

const StarryBackground = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const numStars = 100; // Adjust for density
    const newStars = [];
    for (let i = 0; i < numStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 2 + 0.5, // Star size
        left: Math.random() * 100, // Initial horizontal position (%)
        top: Math.random() * 100, // Initial vertical position (%)
        duration: Math.random() * 30 + 20, // Animation duration (seconds)
        delay: Math.random() * 20, // Animation delay (seconds)
        randomXFactor: (Math.random() - 0.5) * 0.5, // For horizontal drift
      });
    }
    setStars(newStars);
  }, []);

  return (
    <div className="starry-background">
      {stars.map(star => (
        <div
          key={star.id}
          className="star"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.left}%`,
            top: `${star.top}%`,
            animationDuration: `${star.duration}s`,
            animationDelay: `${star.delay}s`,
            opacity: Math.random() * 0.5 + 0.3, // Random opacity
            '--random-x': star.randomXFactor,
          }}
        />
      ))}
    </div>
  );
};

export default StarryBackground;