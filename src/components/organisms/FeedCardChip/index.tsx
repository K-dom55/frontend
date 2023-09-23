import { Theme, css, useTheme } from '@emotion/react';

interface Props {
  text: string;
  variant?: 'default' | 'selected';
}

const variants = {
  default: (theme: Theme) => css`
    border: 1px solid ${theme.gray400};
    color: ${theme.gray500};
  `,
  selected: (theme: Theme) => css`
    border: 1px solid black;
    background-color: ${theme.secondaryNeonGreen};
  `,
};

const defaultStyle = css`
  border-radius: 999px;
  padding: 6px 10px;
`;

export default function FeedCardChip({ text, variant = 'selected' }: Props) {
  const theme = useTheme();

  return <span css={[defaultStyle, theme.caption3, variants[variant]]}># {text}</span>;
}
