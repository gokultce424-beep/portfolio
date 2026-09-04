import React, { useEffect, useRef } from 'react';

export const ScrollProgressBar: React.FC = () => {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    let rafId: number | null = null;

    const updateScroll = () => {
      const totalScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = windowHeight > 0 ? Math.min(1, Math.max(0, totalScroll / windowHeight)) : 0;

      if (bar) {
        bar.style.transform = `scaleX(${progress})`;
      }
      rafId = null;
    };

    const handleScroll = () => {
      if (!rafId) {
        rafId = window.requestAnimationFrame(updateScroll);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-transparent pointer-events-none">
      <div
        ref={barRef}
        aria-hidden="true"
        className="h-full w-full origin-left bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-600 shadow-[0_0_12px_rgba(0,210,255,0.9)] transform-gpu will-change-transform"
        style={{ transform: 'scaleX(0)' }}
      />
    </div>
  );
};
