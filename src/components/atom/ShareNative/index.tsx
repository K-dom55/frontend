import React from 'react';
import { css } from '@emotion/react';

export default function ShareNative() {
  return (
    <button
      aria-label="공유하기"
      type="button"
      css={css`
        width: 60px;
        height: 60px;
        background-color: #b7b7b7;
      `}
      onClick={() => {
        if (!window.navigator.canShare) {
          alert('PC 환경에서는 해당 기능을 지원하지 않습니다.');
          return;
        }
        window.navigator.share({
          url: window.location.href,
        });
      }}
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M21.5 6.8335L21.5 23.1668L18.5 23.1668L18.5 6.8335L21.5 6.8335Z"
          fill="#1D1D1D"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M20 4.54541L27.1213 11.6667L25 13.7881L20 8.78805L15 13.7881L12.8787 11.6667L20 4.54541Z"
          fill="#1D1D1D"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5.16663 16.8335H14.5098V19.8335H8.16663V31.8335H31.8333V19.8335H25.4902V16.8335H34.8333V34.8335H5.16663V16.8335Z"
          fill="black"
        />
      </svg>
    </button>
  );
}
