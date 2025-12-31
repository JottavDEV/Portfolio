'use client';

import React, { useEffect, useRef, useState } from 'react';
import {
  DivisorContainer,
  Line,
  Circle,
} from './Divisor.styles';

interface DivisorProps {
  direction?: 'left-to-right' | 'right-to-left';
}

export const Divisor: React.FC<DivisorProps> = ({ direction = 'left-to-right' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <DivisorContainer ref={containerRef} $direction={direction}>
      <Line $isVisible={isVisible} $direction={direction} />
      <Circle $isVisible={isVisible} $direction={direction} />
    </DivisorContainer>
  );
};

