import { css, useTheme } from '@emotion/react';
import ArrowImage from '@/assets/images/arrow_24.svg';
import { useRouter } from 'next/router';

export default function Header() {
  const theme = useTheme();
  const router = useRouter();

  return (
    <div
      css={[
        css`
          height: 48px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-left: 12px;
          padding-right: 12px;
        `,
        theme.headline3,
      ]}
    >
      <button
        onClick={() => {
          router.push('/');
        }}
        aria-label="뒤로 가기"
        type="button"
      >
        <ArrowImage />
      </button>
      <span
        css={[
          theme.headline3,
          css`
            flex: 1;
            text-align: center;
          `,
        ]}
      >
        랭킹
      </span>
    </div>
  );
}
