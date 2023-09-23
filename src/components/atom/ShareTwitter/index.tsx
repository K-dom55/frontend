import React from 'react';
import { css } from '@emotion/react';

export default function ShareTwitter() {
  return (
    <>
      <a
        href="https://twitter.com/share?ref_src=twsrc%5Etfw"
        className="twitter-share-button"
        data-show-count="false"
        css={css`
          width: 60px;
          height: 60px;
        `}
      >
        Tweet
      </a>
      <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>{' '}
    </>
  );
}
