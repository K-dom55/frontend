import React from 'react';

export default function ShareTwitter() {
  return (
    <>
      <a
        href="https://twitter.com/share?ref_src=twsrc%5Etfw"
        className="twitter-share-button"
        data-show-count="false"
      >
        Tweet
      </a>
      <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>{' '}
    </>
  );
}
