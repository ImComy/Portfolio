import React, { useState, useEffect } from 'react';

const TypewriterText = ({ text, delay = 0, speed = 70 }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    setDisplayText('');
    setCurrentIndex(0);
    setStartTyping(false);
    const startTimer = setTimeout(() => setStartTyping(true), delay);
    return () => clearTimeout(startTimer);
  }, [text, delay]);

  useEffect(() => {
    if (!startTyping || currentIndex >= text.length) return;

    const timer = setTimeout(() => {
      setDisplayText(prev => prev + text[currentIndex]);
      setCurrentIndex(prev => prev + 1);
    }, speed);

    return () => clearTimeout(timer);
  }, [startTyping, currentIndex, text, speed]);

  return (
    <span className="typing-animation">
      {displayText}
      <span className="cursor">|</span>
    </span>
  );
};

export default TypewriterText;
