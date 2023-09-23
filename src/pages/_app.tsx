import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import localFont from 'next/font/local';
import React from 'react';

const pretendard = localFont({
  src: '../assets/fonts/woff2/PretendardVariable.woff2',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={pretendard.className}
      style={{
        display: 'flex',
        flexDirection: 'column',
        overflow: 'auto',
        minHeight: '100dvh',
        maxWidth: '440px',
        margin: '0 auto',
        outline: '1px solid black',
      }}
    >
      <Component {...pageProps} />
    </main>
  );
}
