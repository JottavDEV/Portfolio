'use client';

import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const TitleWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  color: ${props => props.theme.colors.text};
`;

const SvgContainer = styled.svg`
  font-family: var(--font-inter), -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  font-size: 9rem;
  font-weight: 100;
  overflow: visible;
  width: 100%;
  height: 160px;
  opacity: 0;

  @media (max-width: 768px) {
    font-size: 4.5rem;
    height: 110px;
  }
`;

interface AnimatedTitleProps {
  text: string;
}

export const AnimatedTitle: React.FC<AnimatedTitleProps> = ({ text }) => {
  const strokeTextRef = useRef<SVGTextElement>(null);
  const fillTextRef = useRef<SVGTextElement>(null);

  useEffect(() => {
    if (!strokeTextRef.current) return;

    const strokeElement = strokeTextRef.current;
    const styleId = 'animated-title-keyframes';

    const animateText = () => {
      let styleElement = document.getElementById(styleId) as HTMLStyleElement;
      
      if (!styleElement) {
        styleElement = document.createElement('style');
        styleElement.id = styleId;
        document.head.appendChild(styleElement);
      }

      const bbox = strokeElement.getBBox();
      const textLength = Math.ceil((bbox.width + bbox.height) * 1.5);
      
      styleElement.textContent = `
        @keyframes showSvg {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        @keyframes drawStroke {
          0% {
            stroke-dashoffset: ${textLength};
          }
          100% {
            stroke-dashoffset: 0;
          }
        }
        @keyframes fillText {
          0% {
            fill-opacity: 0;
          }
          100% {
            fill-opacity: 1;
          }
        }
      `;

      const svgElement = strokeElement.closest('svg');
      if (svgElement) {
        svgElement.style.opacity = '0';
        svgElement.style.animation = 'showSvg 0.1s ease-out forwards';
      }

      strokeElement.style.strokeDasharray = `${textLength}`;
      strokeElement.style.strokeDashoffset = `${textLength}`;
      strokeElement.style.animation = 'drawStroke 2.5s ease-in-out 0.1s forwards';

      if (fillTextRef.current) {
        fillTextRef.current.style.fillOpacity = '0';
        fillTextRef.current.style.animation = 'fillText 0.2s ease-in-out 2.6s forwards';
      }
    };

    const timer = setTimeout(animateText, 100);

    return () => {
      clearTimeout(timer);
    };
  }, [text]);

  return (
    <TitleWrapper>
      <SvgContainer viewBox="0 0 800 120" preserveAspectRatio="xMinYMid meet">
        {/* Texto com stroke (desenho do contorno) */}
        <text
          ref={strokeTextRef}
          x="0"
          y="70"
          fontSize="144"
          fontWeight="100"
          fontFamily="var(--font-inter), -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
          textAnchor="start"
          dominantBaseline="middle"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {text}
        </text>
        {/* Texto com fill (preenchimento) */}
        <text
          ref={fillTextRef}
          x="0"
          y="70"
          fontSize="144"
          fontWeight="100"
          fontFamily="var(--font-inter), -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
          textAnchor="start"
          dominantBaseline="middle"
          fill="currentColor"
          stroke="none"
        >
          {text}
        </text>
      </SvgContainer>
    </TitleWrapper>
  );
};

