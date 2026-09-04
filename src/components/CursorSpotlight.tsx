import React, { useEffect, useRef } from 'react';

export const CursorSpotlight: React.FC = () => {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run on fine-pointer desktop devices
    if (!window.matchMedia('(pointer: fine)').matches) return;

    const spotlight = spotlightRef.current;
    if (!spotlight) return;

    let rafId: number | null = null;
    let targetX = -1000;
    let targetY = -1000;

    const updatePosition = () => {
      if (spotlight) {
        spotlight.style.background = `radial-gradient(600px circle at ${targetX}px ${targetY}px, rgba(0, 210, 255, 0.04), transparent 80%)`;
      }
      rafId = null;
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!rafId) {
        rafId = window.requestAnimationFrame(updatePosition);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={spotlightRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 will-change-[background]"
    />
  );
};
