'use client';

import React from 'react';
import Image from 'next/image';
import {
  HeroSection,
  ContentWrapper,
  TitleContainer,
  AnimatedTitleWrapper,
  Presentation,
  ImageWrapper,
  DevImageContainer,
  DevImage,
} from './Hero.styles';
import { AnimatedTitle } from './AnimatedTitle';

interface HeroProps {
  presentation?: string;
}

export const Hero: React.FC<HeroProps> = ({ 
  presentation = "Hi, I'm João Victor! I am a Fullstack Developer based in Vitória da Conquista, Bahia. I specialize in building high-quality websites, e-commerce platforms, and automation systems. My focus is on combining clean, modern aesthetics with a seamless user experience (UX) to ensure that every project is not only visually appealing but also highly functional."
}) => {
  const titleText = 'Welcome.';

  return (
    <HeroSection id="home">
      <ContentWrapper>
        <TitleContainer>
          <AnimatedTitleWrapper>
            <AnimatedTitle text={titleText} />
          </AnimatedTitleWrapper>
        </TitleContainer>
        <Presentation>{presentation}</Presentation>
      </ContentWrapper>
      <ImageWrapper>
        <DevImageContainer>
          <DevImage>
            <Image
              src="/images/topo.png"
              alt="Developer workspace with laptop, coffee and smartphone"
              width={500}
              height={500}
              priority
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </DevImage>
        </DevImageContainer>
      </ImageWrapper>
    </HeroSection>
  );
};

