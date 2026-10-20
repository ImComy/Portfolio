import React, { useEffect, useRef } from 'react';

export default function InteractiveDotGrid() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse & drag state - tuned with a tighter, more restrained scale
    const mouse = {
      x: -2000,
      y: -2000,
      prevX: -2000,
      prevY: -2000,
      vx: 0,
      vy: 0,
      isDragging: false,
      influenceRadius: 75
    };

    // Expanding subtle ripples from clicks
    const ripples = [];

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initDots();
    };

    const addRipple = (x, y, maxRadius = 95, speed = 4.5, strength = 0.5) => {
      if (ripples.length > 4) ripples.shift();
      ripples.push({
        x,
        y,
        radius: 0,
        maxRadius,
        speed,
        strength,
        width: 28
      });
    };

    // Helper: Determine if user clicked on text or interactive UI elements
    const isInteractiveOrContent = (target) => {
      if (!target || target === document.body || target === document.documentElement) {
        return false;
      }
      // Interactive controls
      if (target.closest('a, button, input, textarea, select, [role="button"], label, pre, code')) {
        return true;
      }
      // Text content that user may legitimately want to highlight/select
      if (target.closest('p, h1, h2, h3, h4, h5, h6, li, blockquote, figcaption, span.select-text')) {
        return true;
      }
      // Cards & widgets with interactive content
      if (target.closest('.craft-card, nav, footer, [role="dialog"], .interactive-cat-container')) {
        return true;
      }
      return false;
    };

    // Pointerdown: ONLY initiate drag if user clicked on empty background area!
    const handlePointerDown = (e) => {
      if (e.button !== undefined && e.button !== 0) return;

      // If user clicked on text, button, card, or link, do NOT hijack the click!
      if (isInteractiveOrContent(e.target)) {
        return;
      }

      // Empty background was clicked: prevent default to eliminate accidental text selection
      e.preventDefault();
      window.getSelection()?.removeAllRanges();

      // Temporarily disable text selection during the background drag
      document.body.style.userSelect = 'none';
      document.body.style.webkitUserSelect = 'none';

      mouse.isDragging = true;
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.prevX = e.clientX;
      mouse.prevY = e.clientY;
      mouse.vx = 0;
      mouse.vy = 0;

      // Gentle, subtle ripple on click
      addRipple(e.clientX, e.clientY, 90, 4.2, 0.45);
    };

    const handlePointerMove = (e) => {
      // Strictly ignore movement unless actively dragging from an empty space!
      if (!mouse.isDragging) return;

      const currentX = e.clientX;
      const currentY = e.clientY;
      const dx = currentX - mouse.x;
      const dy = currentY - mouse.y;

      // Smoothed drag velocity
      mouse.vx = dx * 0.45 + mouse.vx * 0.55;
      mouse.vy = dy * 0.45 + mouse.vy * 0.55;
      mouse.prevX = mouse.x;
      mouse.prevY = mouse.y;
      mouse.x = currentX;
      mouse.y = currentY;
    };

    const handlePointerUp = () => {
      if (mouse.isDragging) {
        // Fast release creates a delicate mini wave
        const releaseSpeed = Math.hypot(mouse.vx, mouse.vy);
        if (releaseSpeed > 6) {
          addRipple(mouse.x, mouse.y, 75, 4, 0.3);
        }

        // Restore standard user-select styles
        document.body.style.userSelect = '';
        document.body.style.webkitUserSelect = '';
      }

      mouse.isDragging = false;
      mouse.vx = 0;
      mouse.vy = 0;
      mouse.x = -2000;
      mouse.y = -2000;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerup', handlePointerUp);
    window.addEventListener('pointercancel', handlePointerUp);

    // Dot grid configuration
    const spacing = 32;
    let dots = [];

    const initDots = () => {
      dots = [];
      const cols = Math.ceil(width / spacing);
      const rows = Math.ceil(height / spacing);

      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
          const ox = i * spacing;
          const oy = j * spacing;
          dots.push({
            originX: ox,
            originY: oy,
            x: ox,
            y: oy,
            vx: 0,
            vy: 0,
            baseRadius: 1.15,
            glow: 0,
            // Crisp, restrained spring tuning
            spring: 0.055,
            damping: 0.84
          });
        }
      }
    };

    initDots();

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Process subtle ripples
      for (let r = ripples.length - 1; r >= 0; r--) {
        const rip = ripples[r];
        rip.radius += rip.speed;
        rip.strength *= 0.95;
        if (rip.strength < 0.02 || rip.radius > rip.maxRadius) {
          ripples.splice(r, 1);
        }
      }

      const isDragging = mouse.isDragging;
      const dragSpeed = isDragging ? Math.hypot(mouse.vx, mouse.vy) : 0;
      const dynamicRadius = isDragging ? Math.min(95, mouse.influenceRadius + dragSpeed * 0.8) : 0;

      // 2. Physics & Draw Dots
      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];

        // A. Elastic spring back to home anchor
        const ax = (dot.originX - dot.x) * dot.spring;
        const ay = (dot.originY - dot.y) * dot.spring;
        dot.vx = (dot.vx + ax) * dot.damping;
        dot.vy = (dot.vy + ay) * dot.damping;

        // B. Drag interaction: subtle, restrained fluid wake
        if (isDragging) {
          const dx = dot.x - mouse.x;
          const dy = dot.y - mouse.y;
          const dist = Math.hypot(dx, dy);

          if (dist < dynamicRadius && dist > 0.001) {
            // Smooth bell falloff
            const ratio = dist / dynamicRadius;
            const factor = Math.cos(ratio * (Math.PI * 0.5));

            // Gentle stroke momentum
            dot.vx += mouse.vx * factor * 0.08;
            dot.vy += mouse.vy * factor * 0.08;

            // Small tactile nudge away from cursor
            const angle = Math.atan2(dy, dx);
            const push = factor * 1.5;
            dot.vx += Math.cos(angle) * push * 0.08;
            dot.vy += Math.sin(angle) * push * 0.08;

            // Subtle glow
            dot.glow = Math.max(dot.glow, factor * 0.7);
          }
        }

        // C. Gentle ripple wave-front impulse
        for (let r = 0; r < ripples.length; r++) {
          const rip = ripples[r];
          const rdx = dot.x - rip.x;
          const rdy = dot.y - rip.y;
          const rDist = Math.hypot(rdx, rdy);
          const diff = Math.abs(rDist - rip.radius);

          if (diff < rip.width && rDist > 0.01) {
            const wave = (1 - diff / rip.width) * rip.strength;
            const angle = Math.atan2(rdy, rdx);
            const waveImpulse = wave * 2.0;

            dot.vx += Math.cos(angle) * waveImpulse * 0.12;
            dot.vy += Math.sin(angle) * waveImpulse * 0.12;
            dot.glow = Math.max(dot.glow, wave * 0.6);
          }
        }

        // Clamp extreme velocities
        dot.vx = Math.max(-10, Math.min(10, dot.vx));
        dot.vy = Math.max(-10, Math.min(10, dot.vy));

        // D. Apply velocity
        dot.x += dot.vx;
        dot.y += dot.vy;

        // E. Decay glow & calculate displacement
        dot.glow *= 0.92;
        const displacement = Math.hypot(dot.x - dot.originX, dot.y - dot.originY);
        const intensity = Math.min(1.0, dot.glow + displacement / 8);

        // F. Render dot with restrained scale
        if (intensity > 0.04) {
          // Subtle expansion: from 1.15px up to ~1.65px max
          const radius = dot.baseRadius + intensity * 0.5;

          ctx.beginPath();
          ctx.arc(dot.x, dot.y, radius, 0, Math.PI * 2);

          // Soft warm coral/amber tint
          const g = Math.round(140 + (1 - intensity) * 35);
          ctx.fillStyle = `rgba(255, ${g}, 85, ${0.25 + intensity * 0.55})`;
          ctx.fill();
        } else {
          // Calm resting dot
          ctx.beginPath();
          ctx.arc(dot.originX, dot.originY, dot.baseRadius, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(255, 255, 255, 0.075)';
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('pointercancel', handlePointerUp);
      cancelAnimationFrame(animationFrameId);

      // Clean up styles if unmounted mid-drag
      document.body.style.userSelect = '';
      document.body.style.webkitUserSelect = '';
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.98 }}
    />
  );
}


