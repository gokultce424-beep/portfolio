import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}

const revealCallbacks = new WeakMap<Element, () => void>();
let revealObserver: IntersectionObserver | null = null;

const hiddenDirectionClasses: Record<NonNullable<ScrollRevealProps['direction']>, string> = {
  up: 'opacity-0 translate-y-10 blur-[2px]',
  down: 'opacity-0 -translate-y-10 blur-[2px]',
  left: 'opacity-0 translate-x-10 blur-[2px]',
  right: 'opacity-0 -translate-x-10 blur-[2px]',
  none: 'opacity-0 blur-[2px]',
};

function getRevealObserver() {
  if (!revealObserver) {
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          revealCallbacks.get(entry.target)?.();
          revealObserver?.unobserve(entry.target);
          revealCallbacks.delete(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -50px 0px' },
    );
  }

  return revealObserver;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = getRevealObserver();
    revealCallbacks.set(element, () => setIsVisible(true));
    observer.observe(element);

    return () => {
      observer.unobserve(element);
      revealCallbacks.delete(element);
    };
  }, []);

  const visibilityClasses = isVisible
    ? 'opacity-100 translate-x-0 translate-y-0 blur-0'
    : hiddenDirectionClasses[direction];

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-[opacity,transform,filter] duration-700 ease-out ${visibilityClasses} ${className}`}
    >
      {children}
    </div>
  );
};
