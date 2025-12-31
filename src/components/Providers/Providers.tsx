'use client';

import React, { ReactNode } from 'react';
import { ThemeProvider } from '../../contexts/ThemeContext';
import { LanguageProvider } from '../../contexts/LanguageContext';
import { GlobalStyles } from '../../styles/GlobalStyles';

interface ProvidersProps {
  children: ReactNode;
}

export const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <GlobalStyles />
        {children}
      </LanguageProvider>
    </ThemeProvider>
  );
};


