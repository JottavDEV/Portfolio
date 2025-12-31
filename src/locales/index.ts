import { pt } from './pt';
import { en } from './en';

export type Language = 'pt' | 'en';

export type Translations = typeof pt;

export const translations: Record<Language, Translations> = {
  pt,
  en,
};

export const getTranslations = (lang: Language): Translations => {
  return translations[lang];
};

