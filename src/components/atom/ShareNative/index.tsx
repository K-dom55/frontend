import React from 'react';

export default function ShareNative() {
  return (
    <button
      type="button"
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
      공유
    </button>
  );
}
