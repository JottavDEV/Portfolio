'use client';

import React from 'react';
import { ProjectPreview } from './ProjectPreview';
import {
  ProjectsSection,
  ProjectsContainer,
  ProjectsTitle,
  ProjectsGrid,
  ProjectCard,
  ProjectImage,
  ProjectInfo,
  ProjectTitle,
  ProjectDescription,
  ProjectTags,
  ProjectTag,
  ProjectLink,
} from './Projects.styles';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  previewUrl?: string;
  tags: string[];
  link?: string;
  github?: string;
}

interface ProjectsProps {
  projects?: Project[];
}

const defaultProjects: Project[] = [
  {
    id: '1',
    title: 'Projeto 1',
    description: 'Descrição do projeto 1. Uma breve descrição do que foi desenvolvido.',
    image: '/images/topo.png',
    previewUrl: 'https://cardap-io-unex.vercel.app',
    tags: ['React', 'TypeScript', 'Next.js'],
    link: '#',
    github: '#',
  },
  {
    id: '2',
    title: 'Projeto 2',
    description: 'Descrição do projeto 2. Uma breve descrição do que foi desenvolvido.',
    image: '/images/topo.png',
    tags: ['Node.js', 'Express', 'MongoDB'],
    link: '#',
    github: '#',
  },
  {
    id: '3',
    title: 'Projeto 3',
    description: 'Descrição do projeto 3. Uma breve descrição do que foi desenvolvido.',
    image: '/images/topo.png',
    tags: ['Vue.js', 'Nuxt', 'Tailwind'],
    link: '#',
    github: '#',
  },
];

export const Projects: React.FC<ProjectsProps> = ({ projects = defaultProjects }) => {
  return (
    <ProjectsSection id="projects">
      <ProjectsContainer>
        <ProjectsTitle>Projetos</ProjectsTitle>
        <ProjectsGrid>
          {projects.map((project) => (
            <ProjectCard key={project.id}>
              <ProjectImage>
                <ProjectPreview
                  previewUrl={project.previewUrl}
                  image={project.image}
                  alt={project.title}
                />
              </ProjectImage>
              <ProjectInfo>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <ProjectTags>
                  {project.tags.map((tag, index) => (
                    <ProjectTag key={index}>{tag}</ProjectTag>
                  ))}
                </ProjectTags>
                {(project.link || project.github) && (
                  <ProjectLink>
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        Ver Projeto
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        GitHub
                      </a>
                    )}
                  </ProjectLink>
                )}
              </ProjectInfo>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </ProjectsContainer>
    </ProjectsSection>
  );
};

