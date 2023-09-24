import React from 'react';
import { css } from '@emotion/react';
import { Button } from '@/components/atom';
import { useTheme } from '@emotion/react';
import TitleImage from '@/assets/images/title.svg';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

export default function Home() {
  const theme = useTheme();
  const router = useRouter();
  return (
    <div
      css={css`
        padding-top: 200px;
        padding-bottom: 88px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex: 1;
      `}
    >
      <div>
        <div
          css={[
            theme.aggro,
            theme.headline3,
            {
              marginBottom: '16px',
              textAlign: 'center',
              fontWeight: 400,
            },
          ]}
        >
          이제는 최애를 자랑할 시간
        </div>
        <div
          css={css`
            text-align: center;
          `}
        >
          <TitleImage />
        </div>
      </div>
      <div
        css={css`
          display: flex;
          height: 100%;
          flex-direction: column;
          padding-left: 20px;
          padding-right: 20px;
        `}
      >
        <Button
          onClick={() => {
            router.push('/forms');
          }}
          variant="primary"
          size="xxlarge"
          css={theme.aggro}
        >
          효능 자랑하기
        </Button>
        <div
          css={css`
            margin-top: 6px;
            display: flex;
            gap: 6px;
          `}
        >
          <Button
            variant="outlined"
            size="xxlarge"
            css={theme.aggro}
            cssProps={css`
              width: 100%;
            `}
            onClick={() => {
              router.push('/feeds');
            }}
          >
            효능 백과
          </Button>
          <Button
            onClick={() => {
              // router.push('/ranking');
              toast.info('신기능 출시 준비중입니다.', {
                position: 'top-center',
                hideProgressBar: true,
                autoClose: 4000,
                toastId: 'ranking-toast',
              });
            }}
            variant="outlined"
            size="xxlarge"
            css={theme.aggro}
            cssProps={css`
              width: 100%;
              font-weight: 400;
            `}
          >
            랭킹
          </Button>
        </div>
      </div>
    </div>
  );
}
