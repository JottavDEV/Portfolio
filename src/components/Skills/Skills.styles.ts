import styled, { keyframes } from 'styled-components';

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const SkillsSection = styled.section`
  padding: 6rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
`;

export const SkillsContainer = styled.div`
  width: 100%;
`;

export const SkillsTitle = styled.h2`
  font-family: var(--font-inter), -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  font-size: 3rem;
  font-weight: 300;
  color: ${props => props.theme.colors.text};
  margin-bottom: 4rem;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1.5rem;
  justify-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const SkillCard = styled.div<{ $isVisible: boolean; $animationDirection: 'left' | 'right' }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1.5rem 1rem;
  background-color: ${props => 
    props.theme.name === 'light' 
      ? 'rgba(26, 22, 35, 0.05)' 
      : 'rgba(255, 255, 255, 0.05)'};
  border: 1px solid ${props => 
    props.theme.name === 'light' 
      ? 'rgba(26, 22, 35, 0.1)' 
      : 'rgba(255, 255, 255, 0.1)'};
  border-radius: 12px;
  width: 100%;
  max-width: 140px;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
  opacity: ${props => props.$isVisible ? '1' : '0'};
  animation: ${props => 
    props.$isVisible 
      ? (props.$animationDirection === 'left' ? slideInLeft : slideInRight)
      : 'none'
  } 0.6s ease-out forwards;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px ${props => 
      props.theme.name === 'light' 
        ? 'rgba(26, 22, 35, 0.15)' 
        : 'rgba(255, 255, 255, 0.1)'};
    background-color: ${props => 
      props.theme.name === 'light' 
        ? 'rgba(26, 22, 35, 0.1)' 
        : 'rgba(255, 255, 255, 0.1)'};
  }

  @media (max-width: 768px) {
    max-width: 120px;
    padding: 1rem 0.75rem;
  }
`;

export const SkillName = styled.span`
  font-family: var(--font-montserrat), -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  color: ${props => props.theme.colors.text};
  text-align: center;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export const SkillLogo = styled.div<{ $color: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 100%;

  svg {
    width: 60px;
    height: 60px;
    color: ${props => props.$color};
    transition: transform 0.3s ease;
    filter: ${props => 
      props.theme.name === 'light' 
        ? 'drop-shadow(0 2px 4px rgba(26, 22, 35, 0.2))' 
        : 'none'};
  }

  img {
    width: 60px;
    height: 60px;
    object-fit: contain;
    transition: transform 0.3s ease;
    filter: ${props => 
      props.theme.name === 'light' 
        ? 'drop-shadow(0 2px 4px rgba(26, 22, 35, 0.2))' 
        : 'none'};
  }

  ${SkillCard}:hover & svg,
  ${SkillCard}:hover & img {
    transform: scale(1.1);
    filter: ${props => 
      props.theme.name === 'light' 
        ? 'drop-shadow(0 4px 8px rgba(26, 22, 35, 0.3))' 
        : 'none'};
  }

  @media (max-width: 768px) {
    height: 50px;

    svg,
    img {
      width: 50px;
      height: 50px;
    }
  }
`;

