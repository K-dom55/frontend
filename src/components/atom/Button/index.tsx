import { css, Theme } from '@emotion/react';
import React, { ReactNode } from 'react';
import { SerializedStyles } from '@emotion/react';
import { HTMLAttributes } from 'react';

const sizes = {
  small: css`
    padding-left: 10px;
    padding-right: 10px;
    height: 29px;
  `,
  medium: css`
    padding-left: 10px;
    padding-right: 10px;
    height: 32px;
  `,
  large: css`
    padding-left: 10px;
    padding-right: 10px;
    height: 34px;
  `,
  xlarge: css`
    padding-left: 10px;
    padding-right: 10px;
    height: 37px;
  `,
  xxlarge: css`
    padding-left: 10px;
    padding-right: 10px;
    height: 48px;
  `,
};

const variants = {
  primary: css`
    color: #ecfe54;
    background-color: #1d1d1d;
    font-size: 16px;

    &:hover {
      background-color: #3c3c3c;
      color: '#ecfe54';
    }

    &:disabled {
      background-color: #dadada;
      color: #979797;
    }
  `,
  outlined: css`
    font-size: 16px;
    border: 1px solid #1d1d1d;
    background: #fff;
    color: #1d1d1d;
  `,
};

interface Props extends HTMLAttributes<HTMLButtonElement> {
  size?: 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge';
  variant?: 'primary' | 'outlined';
  selected?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  cssProps?: SerializedStyles;
  children: ReactNode;
}
export default function Button({
  size = 'medium',
  variant = 'primary',
  selected,
  disabled,
  children,
  onClick,
  cssProps,
  ...props
}: Props) {
  return (
    <button
      css={[
        sizes[size],
        variants[variant],
        css`
          font-family: pretendard;
          text-align: center;
          transition-property: all;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          transition-duration: 150ms;
        `,
        cssProps,
      ]}
      disabled={disabled}
      onClick={onClick}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
}
