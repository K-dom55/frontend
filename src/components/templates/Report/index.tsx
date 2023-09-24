import Bottom from '@/assets/images/result_bottom.svg';
import { css, useTheme } from '@emotion/react';
import TitleSmall from '@/assets/images/title_small.svg';
import NowTime from '@/assets/images/nowtime.svg';
import { Feed } from '@/components/organisms/Feed';
import AttachImage from '@/assets/images/attach_16.svg';
import Image from 'next/image';
import Qr from '@/assets/images/qr.png';
import { RefObject, useEffect, useRef, useState } from 'react';
import { ShareKakao, ShareNative, ShareTwitter } from '@/components/atom';
import moment from 'moment';
import { useRouter } from 'next/router';

interface Props {
  attachUrl: string;
  dto?: {
    title: string;
    content: string;
    target: string;
    linkUrl: string;
    keywords: string[];
    createdAt?: string;
    imgUrl: string;
  };
}

export default function Report({ attachUrl, dto }: Props) {
  const style = {
    container: css`
      width: 360px;
      overflow: hidden;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      border-collapse: collapse;
      border: 2px solid black;
      border-bottom: none;
    `,
    bottomContainer: css`
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 10px;
    `,
    top: css`
      display: flex;
      width: 100%;
      height: 84px;
      justify-content: space-between;
      align-items: center;
      padding: 0 20px;
    `,
    titleContainer: css`
      padding: 12px 20px;
      width: 100%;
      outline: 2px solid #1d1d1d;
    `,
    title: css`
      color: #1d1d1d;
      font-weight: 400 !important;
    `,
    imageContainer: css`
      width: 100%;
      height: 270px;
      position: relative;
      outline: 2px solid #1d1d1d;
      overflow: hidden;
    `,
    subtitle: css`
      font-size: 18px;
      font-weight: 400;
      line-height: 140%;
    `,
    profile: css`
      display: flex;
      width: 100%;

      outline: 2px solid #1d1d1d;
      text-align: center;

      & div {
        align-items: center;
      }
    `,
    profileNameDate: css`
      display: flex;
      flex-direction: column;
      outline: 2px solid #1d1d1d;
      width: 50%;
    `,
    chipContainer: css`
      display: flex;
      flex-direction: column;
      gap: 12px;
    `,
    profileNameTitle: css`
      height: 106px;
      width: 100%;
      border-bottom: 2px solid #1d1d1d;
      display: flex;
      flex-direction: column;
      gap: 4px;
      justify-content: center;
    `,
    profileName: css`
      font-size: 32px;
      font-weight: 400;
      line-height: 140%;
    `,
    profileDateTitle: css`
      height: 106px;
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 4px;
      justify-content: center;
    `,
    profileDate: css`
      font-size: 22px;
      font-weight: 400;
      line-height: 140%;
    `,
    effect: css`
      width: 50%;
      display: flex;
      flex-direction: column;
      gap: 8px;
      justify-content: center;
    `,
    reason: css`
      border-bottom: 2px solid #1d1d1d;
      padding: 16px 20px;
      display: flex;
      flex-direction: column;
      gap: 8px;
      width: 100%;
    `,
    profileImage: (url: string) => css`
      background-image: url(${url});
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center center;
      height: 270px;
      width: 100%;
    `,
    attach: css`
      display: flex;
      align-items: center;
      gap: 4px;
    `,
    last: css`
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 100%;
      gap: 16px;
      padding: 16px 20px;
    `,
  };

  const [thumbnailUrl, setThumbnailUrl] = useState<string>('');
  const router = useRouter();

  useEffect(() => {
    const urlList = [
      'https://www.youtube.com/embed/',
      'https://youtu.be/',
      'https://www.youtube.com/watch?v=',
    ];

    for (const matchUrl of urlList) {
      if (attachUrl.includes(matchUrl)) {
        setThumbnailUrl(
          `https://img.youtube.com/vi/${attachUrl.replace(matchUrl, '')}/sddefault.jpg`,
        );
        return;
      }
    }
  }, [attachUrl]);

  const theme = useTheme();

  return (
    <div css={style.container}>
      <div css={style.top}>
        <TitleSmall
          css={css`
            cursor: pointer;
          `}
          onClick={() => {
            router.push('/');
          }}
        />
        <NowTime />
      </div>
      <div css={style.titleContainer}>
        <p css={[style.title, theme.headline1, theme.aggro]}>{dto?.title}</p>
      </div>
      <div css={style.imageContainer}>
        <div css={style.profileImage(dto?.imgUrl || '')}></div>
      </div>
      <div css={style.profile}>
        <div css={style.profileNameDate}>
          <div css={style.profileNameTitle}>
            <p css={[theme.aggro, style.subtitle]}>최애의 이름</p>
            <p css={[theme.aggro, style.profileName]}>{dto?.content}</p>
          </div>
          <div css={style.profileDateTitle}>
            <p css={[theme.aggro, style.subtitle]}>발행 일시</p>
            <p css={[theme.aggro, style.profileDate]}>
              {moment(dto?.createdAt).format('YY.MM.DD')}
            </p>
          </div>
        </div>
        <div css={style.effect}>
          <p css={[theme.aggro, style.subtitle]}>최애의 효능</p>
          <div css={style.chipContainer}>
            {dto?.keywords.map((keyword, i) => {
              if (i > 2) return;
              return <Feed.Chip key={i} text={keyword} />;
            })}
          </div>
        </div>
      </div>
      <div css={style.reason}>
        <p css={[theme.aggro, style.subtitle]}>최애를 사랑해야하는 이유</p>
        <p css={theme.caption1}>{dto?.target}</p>
      </div>
      <div css={style.last}>
        <p css={[theme.aggro, style.subtitle]}>이 사람의 진짜 매력을 보려면...</p>
        <div
          css={css`
            width: 100%;
          `}
        >
          {thumbnailUrl && (
            <Image src={thumbnailUrl} height={180} width={320} alt="youtube 썸네일" />
          )}
          <a css={[theme.caption3, style.attach]} href={dto?.linkUrl}>
            {dto?.linkUrl && <AttachImage />}
            {dto?.linkUrl}
            {dto?.linkUrl || '링크가 없어요'}
          </a>
        </div>

        <Image src={Qr} alt={'Github'} width={67} height={67} />
      </div>
      <div css={style.bottomContainer}>
        <Bottom />
      </div>
    </div>
  );
}
