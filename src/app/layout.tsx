import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import { Providers } from '../components/Providers';
import StyledComponentsRegistry from './registry';
import { lightTheme, darkTheme } from '../styles/themes';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Meu portfólio pessoal',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${montserrat.variable}`} suppressHydrationWarning>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme') || 'dark';
                  var resolvedTheme = theme;
                  
                  if (theme === 'system') {
                    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                    resolvedTheme = prefersDark ? 'dark' : 'light';
                  }
                  
                  document.documentElement.setAttribute('data-theme', resolvedTheme);
                } catch (e) {
                  document.documentElement.setAttribute('data-theme', 'dark');
                }
              })();
            `,
          }}
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `
              html[data-theme="light"] {
                background-color: ${lightTheme.colors.background} !important;
                color: ${lightTheme.colors.text} !important;
              }
              html[data-theme="dark"] {
                background-color: ${darkTheme.colors.background} !important;
                color: ${darkTheme.colors.text} !important;
              }
              body {
                background-color: inherit !important;
                color: inherit !important;
              }
              /* Header styles based on data-theme */
              html[data-theme="light"] header {
                background-color: ${lightTheme.colors.background} !important;
                border-bottom-color: rgba(26, 22, 35, 0.1) !important;
              }
              html[data-theme="dark"] header {
                background-color: ${darkTheme.colors.background} !important;
                border-bottom-color: rgba(255, 255, 255, 0.1) !important;
              }
              html[data-theme="light"] header * {
                color: ${lightTheme.colors.text} !important;
              }
              html[data-theme="dark"] header * {
                color: ${darkTheme.colors.text} !important;
              }
            `,
          }}
        />
        <StyledComponentsRegistry>
          <Providers>
            {children}
          </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

