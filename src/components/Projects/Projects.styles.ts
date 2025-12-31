import styled from 'styled-components';

export const ProjectsSection = styled.section`
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

export const ProjectsContainer = styled.div`
  width: 100%;
`;

export const ProjectsTitle = styled.h2`
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

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

export const ProjectCard = styled.div`
  background-color: ${props => props.theme.colors.background};
  border: 1px solid ${props => 
    props.theme.name === 'light' 
      ? 'rgba(26, 22, 35, 0.1)' 
      : 'rgba(255, 255, 255, 0.1)'};
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px ${props => 
      props.theme.name === 'light' 
        ? 'rgba(26, 22, 35, 0.15)' 
        : 'rgba(255, 255, 255, 0.1)'};
  }
`;

export const ProjectImage = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  background-color: ${props => 
    props.theme.name === 'light' 
      ? 'rgba(26, 22, 35, 0.05)' 
      : 'rgba(255, 255, 255, 0.05)'};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  img {
    transition: transform 0.3s ease;
  }

  iframe {
    transition: transform 0.3s ease;
  }

  ${ProjectCard}:hover & img,
  ${ProjectCard}:hover & iframe {
    transform: scale(1.05);
  }
`;

export const ProjectInfo = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
`;

export const ProjectTitle = styled.h3`
  font-family: var(--font-inter), -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  color: ${props => props.theme.colors.text};
  margin: 0;
`;

export const ProjectDescription = styled.p`
  font-family: var(--font-montserrat), -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  font-size: 0.9rem;
  line-height: 1.6;
  color: ${props => props.theme.colors.text};
  opacity: 0.8;
  margin: 0;
  flex: 1;
`;

export const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const ProjectTag = styled.span`
  font-family: var(--font-montserrat), -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  font-size: 0.75rem;
  padding: 0.25rem 0.75rem;
  background-color: ${props => 
    props.theme.name === 'light' 
      ? 'rgba(26, 22, 35, 0.1)' 
      : 'rgba(255, 255, 255, 0.1)'};
  color: ${props => props.theme.colors.text};
  border-radius: 4px;
  font-weight: 500;
`;

export const ProjectLink = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: auto;

  a {
    font-family: var(--font-montserrat), -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    font-size: 0.9rem;
    color: ${props => props.theme.colors.text};
    text-decoration: none;
    font-weight: 500;
    transition: opacity 0.3s ease;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 0;
      height: 2px;
      background-color: ${props => props.theme.colors.text};
      transition: width 0.3s ease;
    }

    &:hover {
      opacity: 0.8;

      &::after {
        width: 100%;
      }
    }
  }
`;

