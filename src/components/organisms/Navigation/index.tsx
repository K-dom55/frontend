import { css, useTheme } from '@emotion/react';
import ArrowImage from '@/assets/images/arrow_24.svg';

interface FeedNavigationProps {
  onClickBack?: () => void;
  onClickHome?: () => void;
  children: React.ReactNode;
}

export default function Navigation({ onClickBack, onClickHome, children }: FeedNavigationProps) {
  const theme = useTheme();

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
          onClickHome?.();
        }}
        aria-label="그만하기"
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
        {children}
      </span>
    </div>
  );
}
