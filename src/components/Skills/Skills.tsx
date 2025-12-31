'use client';

import React from 'react';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiReact,
  SiNextdotjs,
  SiNestjs,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiGithub,
  SiFigma,
  SiSupabase,
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
  IconComponent: React.ComponentType<{ className?: string }>;
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
  { id: 'nextjs', name: 'Next.js', IconComponent: SiNextdotjs, color: '#000000' },
  { id: 'nestjs', name: 'NestJS', IconComponent: SiNestjs, color: '#E0234E' },
  { id: 'tailwind', name: 'Tailwind CSS', IconComponent: SiTailwindcss, color: '#06B6D4' },
  { id: 'mongodb', name: 'MongoDB', IconComponent: SiMongodb, color: '#47A248' },
  { id: 'postgres', name: 'Postgres', IconComponent: SiPostgresql, color: '#4169E1' },
  { id: 'mysql', name: 'MySQL', IconComponent: SiMysql, color: '#4479A1' },
  { id: 'git', name: 'Git/GitHub', IconComponent: SiGithub, color: '#181717' },
  { id: 'figma', name: 'Figma', IconComponent: SiFigma, color: '#F24E1E' },
  { id: 'java', name: 'Java', IconComponent: FaJava, color: '#ED8B00' },
  { id: 'supabase', name: 'Supabase', IconComponent: SiSupabase, color: '#3ECF8E' },
];

export const Skills: React.FC = () => {
  return (
    <SkillsSection id="skills">
      <SkillsContainer>
        <SkillsTitle>Habilidades</SkillsTitle>
        <SkillsGrid>
          {skills.map((skill) => {
            const Icon = skill.IconComponent;
            return (
              <SkillCard key={skill.id}>
                <SkillName>{skill.name}</SkillName>
                <SkillLogo $color={skill.color}>
                  <Icon />
                </SkillLogo>
              </SkillCard>
            );
          })}
        </SkillsGrid>
      </SkillsContainer>
    </SkillsSection>
  );
};

