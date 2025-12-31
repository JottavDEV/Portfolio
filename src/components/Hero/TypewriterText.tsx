'use client';

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const TypewriterContainer = styled.div`
  position: relative;
`;

const Text = styled.span`
  font-family: var(--font-montserrat), -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  font-size: 0.8rem;
  line-height: 1.8;
  color: ${props => props.theme.colors.text};
  opacity: 0.9;
  max-width: 600px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Cursor = styled.span`
  display: inline-block;
  width: 10px;
  height: 1em;
  background-color: ${props => props.theme.colors.text};
  margin-left: 4px;
  animation: blink 1s infinite;

  @keyframes blink {
    0%, 50% {
      opacity: 1;
    }
    51%, 100% {
      opacity: 0;
    }
  }
`;

interface TypewriterTextProps {
  text: string;
  speed?: number;
  delay?: number;
  onComplete?: () => void;
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({ 
  text, 
  speed = 20,
  delay = 0,
  onComplete
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    setDisplayedText('');
    setShowCursor(true);

    const timer = setTimeout(() => {
      let currentIndex = 0;

      const typeInterval = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayedText(text.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(typeInterval);
          // Mantém o cursor visível após terminar de digitar
          setShowCursor(true);
          if (onComplete) {
            onComplete();
          }
        }
      }, speed);

      return () => clearInterval(typeInterval);
    }, delay);

    return () => clearTimeout(timer);
  }, [text, speed, delay, onComplete]);

  return (
    <TypewriterContainer>
      <Text>
        {displayedText}
        {showCursor && <Cursor />}
      </Text>
    </TypewriterContainer>
  );
};

