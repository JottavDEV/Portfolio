'use client';

import { useServerInsertedHTML } from 'next/navigation';

export function ThemeScript() {
  useServerInsertedHTML(() => {
    return (
      <>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme') || 'dark';
                  var html = document.documentElement;
                  html.setAttribute('data-theme', theme);
                  
                  if (theme === 'light') {
                    html.style.backgroundColor = '#02fcf3';
                    html.style.color = '#1a1623';
                    if (document.body) {
                      document.body.style.backgroundColor = '#02fcf3';
                      document.body.style.color = '#1a1623';
                    }
                  } else {
                    html.style.backgroundColor = '#1a1623';
                    html.style.color = '#ffffff';
                    if (document.body) {
                      document.body.style.backgroundColor = '#1a1623';
                      document.body.style.color = '#ffffff';
                    }
                  }
                } catch (e) {
                  var html = document.documentElement;
                  html.setAttribute('data-theme', 'dark');
                  html.style.backgroundColor = '#1a1623';
                  html.style.color = '#ffffff';
                  if (document.body) {
                    document.body.style.backgroundColor = '#1a1623';
                    document.body.style.color = '#ffffff';
                  }
                }
              })();
            `,
          }}
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `
              html[data-theme="light"] {
                background-color: #02fcf3 !important;
                color: #1a1623 !important;
              }
              html[data-theme="dark"] {
                background-color: #1a1623 !important;
                color: #ffffff !important;
              }
              body {
                background-color: inherit !important;
                color: inherit !important;
              }
            `,
          }}
        />
      </>
    );
  });

  return null;
}

