import styled, { keyframes, css } from 'styled-components';

const drawLineLeftToRight = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 50%;
  }
`;

const drawLineRightToLeft = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 50%;
  }
`;

const drawCircleLeftToRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-50%) scale(0);
  }
  70% {
    opacity: 0;
    transform: translateX(-50%) scale(0);
  }
  100% {
    opacity: 1;
    transform: translateX(-50%) scale(1);
  }
`;

const drawCircleRightToLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(50%) scale(0);
  }
  70% {
    opacity: 0;
    transform: translateX(50%) scale(0);
  }
  100% {
    opacity: 1;
    transform: translateX(50%) scale(1);
  }
`;

export const DivisorContainer = styled.div<{ $direction: 'left-to-right' | 'right-to-left' }>`
  position: relative;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 4rem 0;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 40px;
    margin: 2rem 0;
  }
`;

export const Line = styled.div<{ $isVisible: boolean; $direction: 'left-to-right' | 'right-to-left' }>`
  position: absolute;
  height: 2px;
  background-color: ${props => props.theme.colors.text};
  opacity: 0.3;
  
  ${props => {
    if (props.$direction === 'left-to-right') {
      return css`
        left: 0;
        ${props.$isVisible 
          ? css`
              width: 50%;
              animation: ${drawLineLeftToRight} 1.5s ease-out forwards;
            `
          : css`
              width: 0;
            `}
      `;
    } else {
      return css`
        right: 0;
        ${props.$isVisible 
          ? css`
              width: 50%;
              animation: ${drawLineRightToLeft} 1.5s ease-out forwards;
            `
          : css`
              width: 0;
            `}
      `;
    }
  }}

  @media (max-width: 768px) {
    height: 1.5px;
  }
`;

export const Circle = styled.div<{ $isVisible: boolean; $direction: 'left-to-right' | 'right-to-left' }>`
  position: absolute;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.text};
  opacity: 0.3;
  
  ${props => {
    if (props.$direction === 'left-to-right') {
      return css`
        left: 50%;
        transform: translateX(-50%);
        ${props.$isVisible 
          ? css`
              animation: ${drawCircleLeftToRight} 1.5s ease-out forwards;
            `
          : css`
              opacity: 0;
              transform: translateX(-50%) scale(0);
            `}
      `;
    } else {
      return css`
        right: 50%;
        transform: translateX(50%);
        ${props.$isVisible 
          ? css`
              animation: ${drawCircleRightToLeft} 1.5s ease-out forwards;
            `
          : css`
              opacity: 0;
              transform: translateX(50%) scale(0);
            `}
      `;
    }
  }}

  @media (max-width: 768px) {
    width: 10px;
    height: 10px;
  }
`;

