import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
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

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const getDirectionClasses = () => {
    if (isVisible) {
      return 'opacity-100 translate-x-0 translate-y-0 blur-0';
    }

    switch (direction) {
      case 'up':
        return 'opacity-0 translate-y-10 blur-[2px]';
      case 'down':
        return 'opacity-0 -translate-y-10 blur-[2px]';
      case 'left':
        return 'opacity-0 translate-x-10 blur-[2px]';
      case 'right':
        return 'opacity-0 -translate-x-10 blur-[2px]';
      case 'none':
      default:
        return 'opacity-0 blur-[2px]';
    }
  };

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out transform-gpu will-change-transform ${getDirectionClasses()} ${className}`}
    >
      {children}
    </div>
  );
};
