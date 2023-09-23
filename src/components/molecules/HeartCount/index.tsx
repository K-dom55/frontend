import HeartImage from '@/assets/images/heart_16.svg';
import { css, useTheme } from '@emotion/react';

interface Props {
  count: number;
}

export default function HeartCount({ count }: Props) {
  const theme = useTheme();

  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        gap: 4px;
      `}
    >
      <HeartImage />
      <span css={[theme.aggro, theme.caption2]}>{count}</span>
    </div>
  );
}
