'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '../../contexts/LanguageContext';
import {
  AboutSection,
  AboutContainer,
  ContentWrapper,
  TextContainer,
  TitleContainer,
  DescriptionContainer,
  ImageContainer,
  ProfileImage,
} from './About.styles';
import { MultiLanguageTitle } from './MultiLanguageTitle';
import { AnimatedDescription } from './AnimatedDescription';

export const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <AboutSection id="about">
      <AboutContainer>
        <ContentWrapper>
          <TextContainer>
            <TitleContainer>
              <MultiLanguageTitle />
            </TitleContainer>
            <DescriptionContainer>
              <AnimatedDescription text={t.about.description} />
            </DescriptionContainer>
          </TextContainer>
          <ImageContainer>
            <ProfileImage>
              <Image
                src="/images/Perfil.jpeg"
                alt="João Victor"
                width={500}
                height={800}
                priority
                quality={100}
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }}
              />
            </ProfileImage>
          </ImageContainer>
        </ContentWrapper>
      </AboutContainer>
    </AboutSection>
  );
};

