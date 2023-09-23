import { css, useTheme } from '@emotion/react';
import React, { HTMLAttributes } from 'react';
import ArrowIcon from '@/assets/images/arrow_24.svg';
import CancelIcon from '@/assets/images/cancel_24.svg';
import { ReactNode } from 'react';

interface Props {}

function Container({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

interface INavigation {
  onClickBack?: () => void;
  onClickHome?: () => void;
  children: ReactNode;
}

function Navigation({ onClickBack, onClickHome, children }: INavigation) {
  const theme = useTheme();

  return (
    <div
      css={[
        css`
          height: 48px;
          display: flex;
          jsutify-content: space-between;
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
        <CancelIcon
          css={css`
            vertical-align: bottom;
          `}
        />
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

interface IProgressBar extends HTMLAttributes<HTMLDivElement> {
  step?: number;
}

function ProgressBar({ step = 2, ...rest }: IProgressBar) {
  const progressWidthPercent = `${step * 33}%`;
  return (
    <div
      css={css`
        dispaly: flex;
        justify-contnet: flex-start;
        border: 1px solid #1d1d1d;
        margin-left: 20px;
        margin-right: 20px;
        height: 12px;
      `}
      role="presentation"
      {...rest}
    >
      <div
        css={[
          css`
            position: relative;
            height: 100%;
            width: ${progressWidthPercent};
            background-color: black;

            &::after {
              position: absolute;
              right: -8px;
              content: '';
              display: block;
              clip-path: polygon(0 0, 0% 100%, 70% 0);
              background-color: #211d1d;
              height: 100%;
              width: 8px;
            }
          `,
          step === 3 &&
            css`
              display: none;
            `,
        ]}
      />
    </div>
  );
}

export default Object.assign(Container, {
  Navigation,
  ProgressBar,
});
