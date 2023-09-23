import { css, Theme } from '@emotion/react';
import React, { ReactNode } from 'react';
import { SerializedStyles } from '@emotion/react';
import { HTMLAttributes } from 'react';

const sizes = {
  small: css`
    padding-left: 10;
    padding-right: 10;
    height: 29;
  `,
  medium: css`
    padding-left: 10;
    padding-right: 10;
    height: 32;
  `,
  large: css`
    padding-left: 10;
    padding-right: 10;
    height: 34;
  `,
  xlarge: css`
    padding-left: 10;
    padding-right: 10;
    height: 37;
  `,
};

/*
const variants = {
    primary (theme:Theme) {
        return css`
            ${theme}
        `

    }
    
}
*/

interface Props extends HTMLAttributes<HTMLButtonElement> {
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  variant?: 'primary' | 'outlined';
  selected?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  css?: SerializedStyles;
  children: ReactNode;
}
export default function Button({
  size = 'medium',
  variant = 'primary',
  selected,
  disabled,
  children,
  onClick,
  css,
  ...props
}: Props) {
  return (
    <button
      css={[[sizes[size], , css]]}
      disabled={disabled}
      onClick={onClick}
      type="button"
      {...props}
    >
      {children}
      <Child />
    </button>
  );
}

function Child({}) {
  return <div></div>;
}
