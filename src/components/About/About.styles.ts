import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideInFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AboutSection = styled.section`
  min-height: 100vh;
  padding: 8rem 2rem 6rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 6rem 1rem 4rem;
  }
`;

export const AboutContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: stretch;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 3rem;
    align-items: start;
  }

  @media (max-width: 768px) {
    gap: 2rem;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  animation: ${fadeIn} 0.8s ease-out;

  @media (max-width: 768px) {
    gap: 2rem;
  }
`;

export const TitleContainer = styled.div`
  width: 100%;
`;

export const DescriptionContainer = styled.div`
  width: 100%;
  max-width: 600px;
  line-height: 1.8;
  overflow: hidden;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  animation: ${slideInFromRight} 0.8s ease-out;
  height: 80%;

  @media (max-width: 1024px) {
    order: -1;
    align-items: center;
    height: auto;
  }
`;

export const ProfileImage = styled.div`
  width: 100%;
  max-width: 500px;
  height: 100%;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 32px ${props => 
    props.theme.name === 'light' 
      ? 'rgba(26, 22, 35, 0.15)' 
      : 'rgba(255, 255, 255, 0.1)'};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  align-self: stretch;
  display: flex;
  align-items: stretch;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 40px ${props => 
      props.theme.name === 'light' 
        ? 'rgba(26, 22, 35, 0.2)' 
        : 'rgba(255, 255, 255, 0.15)'};
  }

  @media (max-width: 1024px) {
    max-width: 400px;
    height: auto;
    aspect-ratio: 1;
  }

  @media (max-width: 768px) {
    max-width: 300px;
    aspect-ratio: 1;
  }
`;

