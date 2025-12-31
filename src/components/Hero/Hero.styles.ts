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

export const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6rem 2rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
//   gap: 4rem;

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

export const Presentation = styled.p`
  font-family: var(--font-montserrat), -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  font-size: 0.8rem;
  line-height: 1.8;
  color: ${props => props.theme.colors.text};
  opacity: 0.9;
  max-width: 600px;
  animation: ${fadeIn} 0.8s ease-out 0.5s both;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} 0.8s ease-out 0.3s both;
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
`;

