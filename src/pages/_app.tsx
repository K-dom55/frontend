import '@/styles/globals.css';
import { ThemeProvider } from '@emotion/react';
import type { AppProps } from 'next/app';
import localFont from 'next/font/local';
import React from 'react';
import { theme } from '@/styles/theme';
import emotionReset from 'emotion-reset';
import { Global, css } from '@emotion/react';
import { resetStyle } from '@/styles/resetStyle';

const pretendard = localFont({
  src: '../assets/fonts/woff2/PretendardVariable.woff2',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={pretendard.className}
      style={{
        display: 'flex',
        position: 'relative',
        flexDirection: 'column',
        overflow: 'auto',
        minHeight: '100dvh',
        maxWidth: '440px',
        margin: '0 auto',
        outline: '1px solid black',
      }}
    >
      <Global
        styles={css`
          ${emotionReset}
          ${resetStyle}
          *, *::after, *::before {
            box-sizing: border-box;
            -moz-osx-font-smoothing: grayscale;
            -webkit-font-smoothing: antialiased;
            font-smoothing: antialiased;
          }
        `}
      />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </main>
  );
}
