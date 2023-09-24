import { ThemeProvider } from '@emotion/react';
import type { AppProps } from 'next/app';
import React from 'react';
import { theme } from '@/styles/theme';
import emotionReset from 'emotion-reset';
import { Global, css } from '@emotion/react';
import { resetStyle } from '@/styles/resetStyle';
import { ToastContainer } from 'react-toastify';
import { pretendard } from './_app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ToastContainer>
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
            }
            input,
            button {
              font-family: ${pretendard.style.fontFamily};
            }
            body {
              background-color: #f9f9f9;
            }
          `}
        />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </main>
    </ToastContainer>
  );
}
