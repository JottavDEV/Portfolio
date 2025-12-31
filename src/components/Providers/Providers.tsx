'use client';

import React, { ReactNode } from 'react';
import { ThemeProvider } from '../../contexts/ThemeContext';
import { GlobalStyles } from '../../styles/GlobalStyles';

interface ProvidersProps {
  children: ReactNode;
}

export const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <ThemeProvider>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};


