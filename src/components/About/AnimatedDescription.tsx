'use client';

import React, { useMemo } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const DescriptionWrapper = styled.div`
  position: relative;
  display: block;
  width: 100%;
  color: ${props => props.theme.colors.text};
  max-width: 600px;
`;

const TextContainer = styled.div`
  font-family: var(--font-inter), -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  font-size: 0.95rem;
  font-weight: 300;
  line-height: 1.6;
  text-align: justify;
  color: ${props => props.theme.colors.text};

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

const LineWrapper = styled.div<{ $delay: number; $isParagraphBreak?: boolean }>`
  opacity: 0;
  animation: ${fadeInUp} 0.5s ease-out forwards;
  animation-delay: ${props => props.$delay}s;
  margin-bottom: ${props => props.$isParagraphBreak ? '0.75rem' : '0.25rem'};

  &:last-child {
    margin-bottom: 0;
  }
`;

interface AnimatedDescriptionProps {
  text: string;
}

// Função para quebrar texto em múltiplas linhas baseado em comprimento máximo
const wrapText = (text: string, maxCharsPerLine: number = 70): string[] => {
  const paragraphs = text.split('\n');
  const wrappedLines: string[] = [];

  paragraphs.forEach((paragraph) => {
    if (paragraph.trim() === '') {
      // Adiciona linha vazia
      wrappedLines.push('');
      return;
    }

    const words = paragraph.split(' ');
    let currentLine = '';

    words.forEach((word) => {
      const testLine = currentLine ? `${currentLine} ${word}` : word;
      
      if (testLine.length <= maxCharsPerLine || currentLine === '') {
        currentLine = testLine;
      } else {
        // Salva a linha atual e começa uma nova
        if (currentLine) {
          wrappedLines.push(currentLine);
        }
        currentLine = word;
      }
    });

    // Adiciona a última linha do parágrafo
    if (currentLine) {
      wrappedLines.push(currentLine);
    }
  });

  return wrappedLines;
};

export const AnimatedDescription: React.FC<AnimatedDescriptionProps> = ({ text }) => {
  // Quebra o texto em linhas
  const lines = useMemo(() => {
    return wrapText(text, 70);
  }, [text]);

  return (
    <DescriptionWrapper>
      <TextContainer>
        {lines.map((line, index) => {
          const isParagraphBreak = line.trim() === '';
          return (
            <LineWrapper 
              key={index} 
              $delay={index * 0.15}
              $isParagraphBreak={isParagraphBreak}
            >
              {line || '\u00A0'}
            </LineWrapper>
          );
        })}
      </TextContainer>
    </DescriptionWrapper>
  );
};
