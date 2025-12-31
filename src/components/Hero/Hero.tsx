'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { useLanguage } from '../../contexts/LanguageContext';
import {
  HeroSection,
  ContentWrapper,
  TitleContainer,
  AnimatedTitleWrapper,
  Presentation,
  ImageWrapper,
  DevImageContainer,
  DevImage,
  ResumeButtonContainer,
  ResumeButton,
  ResumeDropdownList,
  ResumeDropdownItem,
} from './Hero.styles';
import { AnimatedTitle } from './AnimatedTitle';
import { TypewriterText } from './TypewriterText';

interface HeroProps {
  presentation?: string;
}

export const Hero: React.FC<HeroProps> = ({ 
  presentation
}) => {
  const { t } = useLanguage();
  const titleText = t.hero.title;
  const presentationText = presentation || t.hero.presentation;
  const [showResumeButton, setShowResumeButton] = useState(false);
  const [isResumeDropdownOpen, setIsResumeDropdownOpen] = useState(false);
  const resumeDropdownRef = useRef<HTMLDivElement>(null);

  const handleTypewriterComplete = () => {
    setShowResumeButton(true);
  };

  const resumeUrls = {
    pt: '/docs/Currículo João Victor Carvalho de Oliveira - PTBR.pdf',
    en: '/docs/Curriculum Vitae of João Victor Carvalho de Oliveira - EN US.pdf.pdf',
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        resumeDropdownRef.current &&
        !resumeDropdownRef.current.contains(event.target as Node)
      ) {
        setIsResumeDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isResumeDropdownOpen]);

  return (
    <HeroSection id="home">
      <ContentWrapper>
        <TitleContainer>
          <AnimatedTitleWrapper>
            <AnimatedTitle text={titleText} />
          </AnimatedTitleWrapper>
        </TitleContainer>
        <Presentation>
          <TypewriterText 
            text={presentationText} 
            speed={20} 
            delay={2800}
            onComplete={handleTypewriterComplete}
          />
          {showResumeButton && (
            <ResumeButtonContainer ref={resumeDropdownRef}>
              <ResumeButton onClick={() => setIsResumeDropdownOpen(!isResumeDropdownOpen)}>
                {t.hero.downloadResume}
              </ResumeButton>
              <ResumeDropdownList $isOpen={isResumeDropdownOpen}>
                <ResumeDropdownItem>
                  <a href={resumeUrls.pt} download>
                    🇧🇷 Português (PT-BR)
                  </a>
                </ResumeDropdownItem>
                <ResumeDropdownItem>
                  <a href={resumeUrls.en} download>
                    🇺🇸 English (EN-US)
                  </a>
                </ResumeDropdownItem>
              </ResumeDropdownList>
            </ResumeButtonContainer>
          )}
        </Presentation>
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
