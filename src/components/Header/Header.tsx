'use client';

import React from 'react';
import Image from 'next/image';
import { useTheme } from '../../contexts/ThemeContext';
import {
  HeaderContainer,
  Nav,
  Logo,
  NavLinks,
  NavLink,
  ThemeSelect,
} from './Header.styles';

export const Header: React.FC = () => {
  const { themeMode, setThemeMode } = useTheme();

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newTheme = e.target.value as 'light' | 'dark' | 'system';
    setThemeMode(newTheme);
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
        <NavLinks>
          <NavLink>
            <a href="#home">Home</a>
          </NavLink>
          <NavLink>
            <a href="#about">Sobre</a>
          </NavLink>
          <NavLink>
            <a href="#projects">Projetos</a>
          </NavLink>
          <NavLink>
            <a href="#contact">Contato</a>
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

