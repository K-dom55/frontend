import { Theme, css, useTheme } from '@emotion/react';
import FeedSpacerImage from '@/assets/images/feedSpacer.svg';
import Image from 'next/image';

interface FeedMainProps {
  children: React.ReactNode;
}

interface FeedTitleProps {
  text: string;
}

interface FeedChipProps {
  text: string;
  variant?: 'default' | 'selected';
}

interface FeedChipContainerProps {
  children: React.ReactNode;
}

interface FeedImageProps {
  src: string;
}

interface FeedLikeContainerProps {
  children: React.ReactNode;
}

function FeedMain({ children }: FeedMainProps) {
  const style = css`
    width: 320px;
    padding: 16px 16px 12px 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;

    border: 2px solid #1d1d1d;
    background: white;
  `;

  return <div css={[style]}>{children}</div>;
}

function FeedSpacer() {
  return <FeedSpacerImage />;
}

function FeedTitle({ text }: FeedTitleProps) {
  const style = css`
    color: #1d1d1d;
    font-weight: 400;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 100%;
  `;

  const theme = useTheme();

  return <p css={[theme.aggro, theme.body1, style]}>{text}</p>;
}

function FeedChipContainer({ children }: FeedChipContainerProps) {
  return (
    <div
      css={css`
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        gap: 8px;
        width: 100%;
      `}
    >
      {children}
    </div>
  );
}

function FeedChip({ text, variant = 'selected' }: FeedChipProps) {
  const theme = useTheme();

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

  return <span css={[defaultStyle, theme.caption3, variants[variant]]}># {text}</span>;
}

// function FeedImage({ src }: FeedImageProps) {
//   const style = css`
//     width: 288px;
//     height: 216px;
//     background: url(${src});
//   `;
//   return <div css={style}></div>;
// }

function FeedImage({ src }: FeedImageProps) {
  const style = css`
    width: 288px;
    height: 216px;
    position: relative;
    border: 2px solid #1d1d1d;
    overflow: hidden;
  `;

  return (
    <div css={style}>
      <Image
        src={src}
        alt={''}
        height={216}
        width={288}
        css={css`
          object-fit: cover;
          min-width: 288px;
          min-height: 216px;
        `}
      />
    </div>
  );
}

function FeedLikeContainer({ children }: FeedLikeContainerProps) {
  const theme = useTheme();
  const style = css`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
  `;

  return <div css={[theme.caption2, style]}>{children}</div>;
}

export const Feed = Object.assign(FeedMain, {
  Spacer: FeedSpacer,
  Title: FeedTitle,
  ChipContainer: FeedChipContainer,
  Chip: FeedChip,
  Image: FeedImage,
  LikeContainer: FeedLikeContainer,
});
