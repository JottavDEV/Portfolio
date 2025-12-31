import { DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
  name: 'light',
  colors: {
    background: '#02fcf3',
    text: '#041122',
  },
};

export const darkTheme: DefaultTheme = {
  name: 'dark',
  colors: {
    background: '#041122',
    text: '#ffffff',
  },
};

export type Theme = typeof lightTheme | typeof darkTheme;

