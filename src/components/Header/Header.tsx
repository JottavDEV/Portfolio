'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useTheme } from '../../contexts/ThemeContext';
import {
  HeaderContainer,
  Nav,
  Logo,
  NavLinks,
  NavLink,
  ThemeSelect,
  HamburgerButton,
  MobileMenuOverlay,
} from './Header.styles';

export const Header: React.FC = () => {
  const { themeMode, setThemeMode } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newTheme = e.target.value as 'light' | 'dark' | 'system';
    setThemeMode(newTheme);
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
            <a href="#home" onClick={closeMenu}>Home</a>
          </NavLink>
          <NavLink>
            <a href="#about" onClick={closeMenu}>Sobre</a>
          </NavLink>
          <NavLink>
            <a href="#skills" onClick={closeMenu}>Habilidades</a>
          </NavLink>
          <NavLink>
            <a href="#projects" onClick={closeMenu}>Projetos</a>
          </NavLink>
          <NavLink>
            <a href="#contact" onClick={closeMenu}>Contato</a>
          </NavLink>
          <NavLink>
            <ThemeSelect value={themeMode} onChange={handleThemeChange}>
              <option value="light">☀️ Claro</option>
              <option value="dark">🌙 Escuro</option>
              <option value="system">⚙️ Sistema</option>
            </ThemeSelect>
          </NavLink>
        </NavLinks>
      </Nav>
    </HeaderContainer>
  );
};

