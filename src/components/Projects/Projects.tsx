'use client';

import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ProjectPreview } from './ProjectPreview';
import { useLanguage } from '../../contexts/LanguageContext';
import {
  ProjectsSection,
  ProjectsContainer,
  ProjectsTitle,
  ProjectsCarouselContainer,
  ProjectsViewport,
  ProjectsCarouselContainerInner,
  ProjectSlide,
  ProjectCard,
  ProjectImage,
  ProjectInfo,
  ProjectTitle,
  ProjectDescription,
  ProjectTags,
  ProjectTag,
  ProjectLink,
  CarouselButtons,
  CarouselButton,
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

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const { t } = useLanguage();
  
  const defaultProjects: Project[] = [
    {
      id: '1',
      title: t.projects.items.cardapioDigital.title,
      description: t.projects.items.cardapioDigital.description,
      image: '/images/topo.png',
      previewUrl: 'https://cardap-io-unex.vercel.app',
      tags: ['React Native', 'TypeScript', 'Supabase', 'Expo'],
      link: 'https://cardap-io-unex.vercel.app',
      github: 'https://github.com/jottavdev/Cardap.io',
    },
    {
      id: '2',
      title: t.projects.items.byteBusters.title,
      description: t.projects.items.byteBusters.description,
      image: '/images/topo.png',
      previewUrl: 'https://bytebusters-one.vercel.app',
      tags: ['NextJS', 'TailwindCSS'],
      link: 'https://bytebusters-one.vercel.app',
      github: 'https://github.com/jottavdev/ByteBusters',
    },
    {
      id: '3',
      title: t.projects.items.links.title,
      description: t.projects.items.links.description,
      image: '/images/topo.png',
      previewUrl: 'https://jottavdev.github.io/Links',
      tags: ['Html', 'Css'],
      link: 'https://jottavdev.github.io/Links',
      github: 'https://github.com/jottavdev/Links',
    },
    {
      id: '4',
      title: t.projects.items.siteParaCasal.title,
      description: t.projects.items.siteParaCasal.description,
      image: '/images/topo.png',
      previewUrl: 'https://love-us.vercel.app',
      tags: ['Next.js', 'TypeScript', 'Styled-components'],
      link: 'https://love-us.vercel.app',
    },
  ];

  const projectsToShow = projects || defaultProjects;
  
  // Duplicar projetos para criar loop infinito
  const duplicatedProjects = [...projectsToShow, ...projectsToShow];

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: 'start',
      slidesToScroll: 1,
    }
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <ProjectsSection id="projects">
      <ProjectsContainer>
        <ProjectsTitle>{t.projects.title}</ProjectsTitle>
        <ProjectsCarouselContainer>
          <ProjectsViewport ref={emblaRef}>
            <ProjectsCarouselContainerInner>
              {duplicatedProjects.map((project, index) => (
                <ProjectSlide key={`${project.id}-${index}`}>
                  <ProjectCard>
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
                        {project.tags.map((tag, tagIndex) => (
                          <ProjectTag key={tagIndex}>{tag}</ProjectTag>
                        ))}
                      </ProjectTags>
                      {(project.link || project.github) && (
                        <ProjectLink>
                          {project.link && (
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                              {t.projects.viewProject}
                            </a>
                          )}
                          {project.github && (
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              {t.projects.github}
                            </a>
                          )}
                        </ProjectLink>
                      )}
                    </ProjectInfo>
                  </ProjectCard>
                </ProjectSlide>
              ))}
            </ProjectsCarouselContainerInner>
          </ProjectsViewport>
          <CarouselButtons>
            <CarouselButton onClick={scrollPrev} aria-label="Previous project">
              ←
            </CarouselButton>
            <CarouselButton onClick={scrollNext} aria-label="Next project">
              →
            </CarouselButton>
          </CarouselButtons>
        </ProjectsCarouselContainer>
      </ProjectsContainer>
    </ProjectsSection>
  );
};
