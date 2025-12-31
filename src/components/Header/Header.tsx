'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useTheme } from '../../contexts/ThemeContext';
import { useLanguage } from '../../contexts/LanguageContext';
import {
  HeaderContainer,
  Nav,
  Logo,
  NavLinks,
  NavLink,
  ThemeDropdownContainer,
  ThemeDropdownButton,
  ThemeDropdownList,
  ThemeDropdownItem,
  LanguageDropdownContainer,
  LanguageDropdownButton,
  LanguageDropdownList,
  LanguageDropdownItem,
  HamburgerButton,
  MobileMenuOverlay,
} from './Header.styles';

export const Header: React.FC = () => {
  const { themeMode, setThemeMode } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [isThemeDropdownOpen, setIsThemeDropdownOpen] = useState(false);
  const languageDropdownRef = useRef<HTMLDivElement>(null);
  const themeDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        languageDropdownRef.current &&
        !languageDropdownRef.current.contains(event.target as Node)
      ) {
        setIsLanguageDropdownOpen(false);
      }
      if (
        themeDropdownRef.current &&
        !themeDropdownRef.current.contains(event.target as Node)
      ) {
        setIsThemeDropdownOpen(false);
      }
    };

    if (isLanguageDropdownOpen || isThemeDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isLanguageDropdownOpen, isThemeDropdownOpen]);

  const handleThemeSelect = (theme: 'light' | 'dark' | 'system') => {
    setThemeMode(theme);
    setIsThemeDropdownOpen(false);
  };

  const handleLanguageSelect = (lang: 'pt' | 'en') => {
    setLanguage(lang);
    setIsLanguageDropdownOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <HeaderContainer>
      <Nav>
        <Logo>
          <Image
            src="/images/logo.png"
            alt="JottaV Dev Logo"
            width={200}
            height={60}
            priority
            style={{ width: 'auto', height: '60px' }}
          />
        </Logo>
        <HamburgerButton onClick={toggleMenu} $isOpen={isMenuOpen}>
          <span></span>
          <span></span>
          <span></span>
        </HamburgerButton>
        <MobileMenuOverlay $isOpen={isMenuOpen} onClick={closeMenu} />
        <NavLinks $isOpen={isMenuOpen}>
          <NavLink>
            <a href="#home" onClick={closeMenu}>{t.header.home}</a>
          </NavLink>
          <NavLink>
            <a href="#about" onClick={closeMenu}>{t.header.about}</a>
          </NavLink>
          <NavLink>
            <a href="#skills" onClick={closeMenu}>{t.header.skills}</a>
          </NavLink>
          <NavLink>
            <a href="#projects" onClick={closeMenu}>{t.header.projects}</a>
          </NavLink>
          <NavLink>
            <a href="#contact" onClick={closeMenu}>{t.header.contact}</a>
          </NavLink>
          <NavLink>
            <LanguageDropdownContainer ref={languageDropdownRef}>
              <LanguageDropdownButton 
                onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                $isOpen={isLanguageDropdownOpen}
              >
                {language === 'pt' ? '🇧🇷 PT' : '🇺🇸 EN'}
              </LanguageDropdownButton>
              <LanguageDropdownList $isOpen={isLanguageDropdownOpen}>
                <LanguageDropdownItem
                  $isSelected={language === 'pt'}
                  onClick={() => handleLanguageSelect('pt')}
                >
                  🇧🇷 PT
                </LanguageDropdownItem>
                <LanguageDropdownItem
                  $isSelected={language === 'en'}
                  onClick={() => handleLanguageSelect('en')}
                >
                  🇺🇸 EN
                </LanguageDropdownItem>
              </LanguageDropdownList>
            </LanguageDropdownContainer>
          </NavLink>
          <NavLink>
            <ThemeDropdownContainer ref={themeDropdownRef}>
              <ThemeDropdownButton 
                onClick={() => setIsThemeDropdownOpen(!isThemeDropdownOpen)}
                $isOpen={isThemeDropdownOpen}
              >
                {themeMode === 'light' && `☀️ ${t.header.themes.light}`}
                {themeMode === 'dark' && `🌙 ${t.header.themes.dark}`}
                {themeMode === 'system' && `⚙️ ${t.header.themes.system}`}
              </ThemeDropdownButton>
              <ThemeDropdownList $isOpen={isThemeDropdownOpen}>
                <ThemeDropdownItem
                  $isSelected={themeMode === 'light'}
                  onClick={() => handleThemeSelect('light')}
                >
                  ☀️ {t.header.themes.light}
                </ThemeDropdownItem>
                <ThemeDropdownItem
                  $isSelected={themeMode === 'dark'}
                  onClick={() => handleThemeSelect('dark')}
                >
                  🌙 {t.header.themes.dark}
                </ThemeDropdownItem>
                <ThemeDropdownItem
                  $isSelected={themeMode === 'system'}
                  onClick={() => handleThemeSelect('system')}
                >
                  ⚙️ {t.header.themes.system}
                </ThemeDropdownItem>
              </ThemeDropdownList>
            </ThemeDropdownContainer>
          </NavLink>
        </NavLinks>
      </Nav>
    </HeaderContainer>
  );
};

