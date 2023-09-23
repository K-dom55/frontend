import Bottom from '@/assets/images/result_bottom.svg';
import { css, useTheme } from '@emotion/react';
import TitleSmall from '@/assets/images/title_small.svg';
import NowTime from '@/assets/images/nowtime.svg';
import { Feed } from '@/components/organisms/Feed';
import AttachImage from '@/assets/images/attach_16.svg';
import Image from 'next/image';
import Qr from '@/assets/images/qr.png';
import { useEffect, useState } from 'react';

interface Props {
  attachUrl: string;
}

export default function Result({ attachUrl }: Props) {
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
    `,
    profileImage: css`
      background-image: url('https://kdom.s3.ap-northeast-2.amazonaws.com/3%EC%A3%BC%EC%B0%A8_2021105604_%EB%B0%B0%EC%9E%AC%EC%9D%80_%ED%95%A9%EB%B3%8D%EC%A0%95%EB%A0%AC1.png');
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
        <TitleSmall />
        <NowTime />
      </div>
      <div css={style.titleContainer}>
        <p css={[style.title, theme.headline1, theme.aggro]}>
          문상훈을 보고나서 코로나가 완치됐어요!
        </p>
      </div>
      <div css={style.imageContainer}>
        <div css={style.profileImage}></div>
      </div>
      <div css={style.profile}>
        <div css={style.profileNameDate}>
          <div css={style.profileNameTitle}>
            <p css={[theme.aggro, style.subtitle]}>최애의 이름</p>
            <p css={[theme.aggro, style.profileName]}>문상훈</p>
          </div>
          <div css={style.profileDateTitle}>
            <p css={[theme.aggro, style.subtitle]}>발행 일시</p>
            <p css={[theme.aggro, style.profileDate]}>23.09.23</p>
          </div>
        </div>
        <div css={style.effect}>
          <p css={[theme.aggro, style.subtitle]}>최애의 효능</p>
          <div css={style.chipContainer}>
            <Feed.Chip text="귀여움" />
            <Feed.Chip text="듬직함" />
            <Feed.Chip text="발랄함" />
          </div>
        </div>
      </div>
      <div css={style.reason}>
        <p css={[theme.aggro, style.subtitle]}>문상훈을 사랑해야하는 이유</p>
        <p css={theme.caption1}>
          문상훈은 후암동에서 시작한 만능 개그맨으로, 2023년 현재까지 문기자, 문이병, 문쌤, 복학생
          브이로그, 해인칭, 오당기 등 수많은 컨텐츠를 기획 및 출연하며 꿈에 그리던 유튜브 구독자
          100만을 돌파했다.
        </p>
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
          <a css={[theme.caption3, style.attach]} href="https://youtu.be/9J1IXuEtToY">
            <AttachImage />
            https://youtu.be/9J1IXuEtToY
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
