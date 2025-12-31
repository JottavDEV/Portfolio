'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useTheme } from '../../contexts/ThemeContext';
import { useLanguage } from '../../contexts/LanguageContext';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiReact,
  SiNestjs,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiGit,
  SiFigma,
  SiSupabase,
  SiFlutter,
  SiDart,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import {
  SkillsSection,
  SkillsContainer,
  SkillsTitle,
  SkillsGrid,
  SkillCard,
  SkillName,
  SkillLogo,
} from './Skills.styles';

interface Skill {
  id: string;
  name: string;
  IconComponent?: React.ComponentType<{ className?: string }>;
  imageUrl?: string;
  color: string;
}

const skills: Skill[] = [
  { id: 'html', name: 'HTML', IconComponent: SiHtml5, color: '#E34F26' },
  { id: 'css', name: 'CSS', IconComponent: SiCss3, color: '#1572B6' },
  { id: 'javascript', name: 'JavaScript', IconComponent: SiJavascript, color: '#F7DF1E' },
  { id: 'typescript', name: 'TypeScript', IconComponent: SiTypescript, color: '#3178C6' },
  { id: 'nodejs', name: 'Node.js', IconComponent: SiNodedotjs, color: '#339933' },
  { id: 'react', name: 'React', IconComponent: SiReact, color: '#61DAFB' },
  { id: 'reactnative', name: 'React Native', IconComponent: SiReact, color: '#61DAFB' },
  { id: 'nextjs', name: 'Next.js', imageUrl: '/images/nextjsicon.png', color: '#000000' },
  { id: 'nestjs', name: 'NestJS', IconComponent: SiNestjs, color: '#E0234E' },
  { id: 'tailwind', name: 'Tailwind CSS', IconComponent: SiTailwindcss, color: '#06B6D4' },
  { id: 'mongodb', name: 'MongoDB', IconComponent: SiMongodb, color: '#47A248' },
  { id: 'postgres', name: 'Postgres', IconComponent: SiPostgresql, color: '#4169E1' },
  { id: 'mysql', name: 'MySQL', IconComponent: SiMysql, color: '#4479A1' },
  { id: 'git', name: 'Git/GitHub', IconComponent: SiGit, color: '#F05032' },
  { id: 'figma', name: 'Figma', IconComponent: SiFigma, color: '#F24E1E' },
  { id: 'java', name: 'Java', IconComponent: FaJava, color: '#ED8B00' },
  { id: 'supabase', name: 'Supabase', IconComponent: SiSupabase, color: '#3ECF8E' },
  { id: 'flutter', name: 'Flutter', IconComponent: SiFlutter, color: '#02569B' },
  { id: 'dart', name: 'Dart', IconComponent: SiDart, color: '#0175C2' },
];

export const Skills: React.FC = () => {
  const { resolvedTheme } = useTheme();
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards((prev) => new Set(prev).add(index));
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    const cards = containerRef.current?.querySelectorAll('[data-index]');
    cards?.forEach((card) => observer.observe(card));

    return () => {
      cards?.forEach((card) => observer.unobserve(card));
    };
  }, []);

  const getSkillColor = (skillId: string, defaultColor: string): string => {
    // Ajustar cor do React e React Native para azul mais escuro no tema claro
    if ((skillId === 'react' || skillId === 'reactnative') && resolvedTheme === 'light') {
      return '#149ECA'; // Azul mais escuro para melhor visibilidade no tema claro
    }
    return defaultColor;
  };

  const getAnimationDirection = (index: number): 'left' | 'right' => {
    // Alterna entre esquerda e direita a cada 3 cards (já que temos 6 por fileira)
    return index % 6 < 3 ? 'left' : 'right';
  };

  return (
    <SkillsSection id="skills">
      <SkillsContainer ref={containerRef}>
        <SkillsTitle>{t.skills.title}</SkillsTitle>
        <SkillsGrid>
          {skills.map((skill, index) => {
            const Icon = skill.IconComponent;
            const skillColor = getSkillColor(skill.id, skill.color);
            const isVisible = visibleCards.has(index);
            const animationDirection = getAnimationDirection(index);
            return (
              <SkillCard 
                key={skill.id}
                data-index={index}
                $isVisible={isVisible}
                $animationDirection={animationDirection}
              >
                <SkillName>{skill.name}</SkillName>
                <SkillLogo $color={skillColor}>
                  {skill.imageUrl ? (
                    <Image
                      src={skill.imageUrl}
                      alt={skill.name}
                      width={60}
                      height={60}
                      style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                    />
                  ) : Icon ? (
                    <Icon />
                  ) : null}
                </SkillLogo>
              </SkillCard>
            );
          })}
        </SkillsGrid>
      </SkillsContainer>
    </SkillsSection>
  );
};

