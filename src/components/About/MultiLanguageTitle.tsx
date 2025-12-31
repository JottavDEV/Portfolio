'use client';

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const TypewriterContainer = styled.div`
  position: relative;
  min-height: 80px;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    min-height: 60px;
  }
`;

const Text = styled.span`
  font-family: var(--font-inter), -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  font-size: 6rem;
  font-weight: 300;
  color: ${props => props.theme.colors.text};

  @media (max-width: 768px) {
    font-size: 3.5rem;
  }
`;

const Cursor = styled.span`
  display: inline-block;
  width: 4px;
  height: 1em;
  background-color: ${props => props.theme.colors.text};
  margin-left: 8px;
  animation: blink 0.7s infinite;

  @keyframes blink {
    0%, 50% {
      opacity: 1;
    }
    51%, 100% {
      opacity: 0;
    }
  }
`;

const languages = [
  { text: 'Olá', delay: 2000 },      // Português
  { text: 'Hello', delay: 2000 },    // Inglês
  { text: 'Hola', delay: 2000 },     // Espanhol
  { text: 'こんにちは', delay: 2500 }, // Japonês (Konnichiwa)
];

export const MultiLanguageTitle: React.FC = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor] = useState(true);

  useEffect(() => {
    let currentIndex = 0;
    let timeoutId: ReturnType<typeof setTimeout>;
    let intervalId: ReturnType<typeof setInterval>;
    let languageIndex = 0;

    const typeText = (text: string, speed: number = 100) => {
      setDisplayedText('');
      currentIndex = 0;

      intervalId = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayedText(text.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(intervalId);
          
          // Aguarda antes de apagar
          timeoutId = setTimeout(() => {
            deleteText(text, speed);
          }, languages[languageIndex].delay);
        }
      }, speed);
    };

    const deleteText = (text: string, speed: number = 50) => {
      currentIndex = text.length;

      intervalId = setInterval(() => {
        if (currentIndex > 0) {
          setDisplayedText(text.slice(0, currentIndex - 1));
          currentIndex--;
        } else {
          clearInterval(intervalId);
          
          // Muda para a próxima língua
          languageIndex = (languageIndex + 1) % languages.length;
          timeoutId = setTimeout(() => {
            typeText(languages[languageIndex].text);
          }, 500);
        }
      }, speed);
    };

    // Inicia com a primeira língua
    typeText(languages[0].text);

    return () => {
      if (intervalId) clearInterval(intervalId);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []); // Executa apenas uma vez ao montar

  return (
    <TypewriterContainer>
      <Text>
        {displayedText}
        {showCursor && <Cursor />}
      </Text>
    </TypewriterContainer>
  );
};
