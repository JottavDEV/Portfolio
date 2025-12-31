import styled, { keyframes } from 'styled-components';

export const writeAnimation = keyframes`
  0% {
    clip-path: inset(0 100% 0 0);
  }
  100% {
    clip-path: inset(0 0 0 0);
  }
`;

export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const slideInFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6rem 2rem 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  animation: ${fadeIn} 0.8s ease-out;
`;

export const TitleContainer = styled.div`
  position: relative;
`;

export const AnimatedTitleWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
`;

export const Presentation = styled.div`
  font-family: var(--font-montserrat), -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  font-size: 0.8rem;
  line-height: 1.8;
  color: ${props => props.theme.colors.text};
  opacity: 0.9;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DevImageContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DevImage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  opacity: 0;
  animation: ${slideInFromRight} 1.5s ease-out 2.8s both;
`;

export const ResumeButtonContainer = styled.div`
  position: relative;
  opacity: 0;
  animation: ${fadeInUp} 0.5s ease-out forwards;
`;

export const ResumeButton = styled.button`
  font-family: var(--font-montserrat), -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  font-size: 0.85rem;
  font-weight: 500;
  padding: 0.5rem 2rem 0.5rem 1rem;
  background-color: ${props => 
    props.theme.name === 'light' 
      ? 'rgba(26, 22, 35, 0.1)' 
      : 'rgba(255, 255, 255, 0.1)'};
  color: ${props => props.theme.colors.text};
  border: 1px solid ${props => 
    props.theme.name === 'light' 
      ? 'rgba(26, 22, 35, 0.2)' 
      : 'rgba(255, 255, 255, 0.2)'};
  border-radius: 6px;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  appearance: none;

  &::after {
    content: '';
    position: absolute;
    right: 0.75rem;
    top: 50%;
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 5px solid ${props => props.theme.colors.text};
    transition: transform 0.3s ease;
    transform: translateY(-50%);
  }

  &:hover {
    background-color: ${props => 
      props.theme.name === 'light' 
        ? 'rgba(26, 22, 35, 0.15)' 
        : 'rgba(255, 255, 255, 0.15)'};
    border-color: ${props => 
      props.theme.name === 'light' 
        ? 'rgba(26, 22, 35, 0.3)' 
        : 'rgba(255, 255, 255, 0.3)'};
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${props =>
      props.theme.name === 'light'
        ? 'rgba(26, 22, 35, 0.2)'
        : 'rgba(255, 255, 255, 0.2)'};
  }
`;

export const ResumeDropdownList = styled.ul<{ $isOpen: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 0.5rem;
  background-color: ${props => props.theme.colors.background};
  border: 1px solid ${props =>
    props.theme.name === 'light'
      ? 'rgba(26, 22, 35, 0.1)'
      : 'rgba(255, 255, 255, 0.1)'};
  border-radius: 6px;
  list-style: none;
  padding: 0.5rem 0;
  min-width: 180px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  opacity: ${props => props.$isOpen ? '1' : '0'};
  visibility: ${props => props.$isOpen ? 'visible' : 'hidden'};
  transform: ${props => props.$isOpen ? 'translateY(0)' : 'translateY(-10px)'};
  transition: opacity 0.3s ease, visibility 0.3s ease, transform 0.3s ease;
  z-index: 1000;
`;

export const ResumeDropdownItem = styled.li`
  padding: 0;
  color: ${props => props.theme.colors.text};
  cursor: pointer;
  font-weight: 500;
  font-size: 0.85rem;
  transition: background-color 0.2s ease;

  a {
    display: block;
    padding: 0.5rem 1rem;
    color: ${props => props.theme.colors.text};
    text-decoration: none;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: ${props =>
        props.theme.name === 'light'
          ? 'rgba(26, 22, 35, 0.1)'
          : 'rgba(255, 255, 255, 0.1)'};
    }
  }
`;
