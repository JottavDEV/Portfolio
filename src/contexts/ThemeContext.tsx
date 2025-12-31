'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, Theme } from '../styles/themes';

type ThemeMode = 'light' | 'dark' | 'system';
type ResolvedTheme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  themeMode: ThemeMode;
  resolvedTheme: ResolvedTheme;
  setThemeMode: (mode: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};


interface ThemeProviderProps {
  children: ReactNode;
}

const getSystemTheme = (): ResolvedTheme => {
  if (typeof window !== 'undefined') {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  return 'dark';
};

const resolveTheme = (mode: ThemeMode): ResolvedTheme => {
  if (mode === 'system') {
    return getSystemTheme();
  }
  return mode;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>('dark');
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as ThemeMode | null;
    const initialTheme: ThemeMode = (savedTheme && (savedTheme === 'light' || savedTheme === 'dark' || savedTheme === 'system')) 
      ? savedTheme 
      : 'dark';
    
    setThemeMode(initialTheme);
    const resolved = resolveTheme(initialTheme);
    setResolvedTheme(resolved);
    document.documentElement.setAttribute('data-theme', resolved);
  }, []);

  useEffect(() => {
    const resolved = resolveTheme(themeMode);
    setResolvedTheme(resolved);
    document.documentElement.setAttribute('data-theme', resolved);
    localStorage.setItem('theme', themeMode);

    if (themeMode === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = (e: MediaQueryListEvent) => {
        const newResolved = e.matches ? 'dark' : 'light';
        setResolvedTheme(newResolved);
        document.documentElement.setAttribute('data-theme', newResolved);
      };
      
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, [themeMode]);

  const handleSetThemeMode = (mode: ThemeMode) => {
    setThemeMode(mode);
  };

  const theme = resolvedTheme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ theme, themeMode, resolvedTheme, setThemeMode: handleSetThemeMode }}>
      <StyledThemeProvider theme={theme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

