import React from 'react';
import Image from 'next/image';
import { css } from '@emotion/react';

function Avatar({ alt = '', src, ranking }: { src: string; alt: string; ranking: number }) {
  if (ranking === 1) {
    return (
      <div
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin: 0 auto;
        `}
      >
        <svg
          css={css`
            position: relative;
            top: 8px;
          `}
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25.1202 25.6H6.8802L3.2002 14.4L11.1469 16L16.0002 6.40002L20.8535 16L28.8002 14.4L25.1202 25.6Z"
            fill="#1D1D1D"
          />
          <circle cx="16.0004" cy="4.00002" r="1.6" fill="#1D1D1D" />
          <circle cx="1.6" cy="12.8" r="1.6" fill="#1D1D1D" />
          <circle cx="30.3998" cy="12.8" r="1.6" fill="#1D1D1D" />
        </svg>
        <Image
          css={css`
            border-radius: 100%;
            border: 2px solid #1d1d1d;
            z-index: 10;
          `}
          width={64}
          height={64}
          alt={alt}
          src={src}
        />
      </div>
    );
  }

  return (
    <Image
      css={css`
        border-radius: 100%;
        border: 2px solid #1d1d1d;
      `}
      width={64}
      height={64}
      alt={alt}
      src={src}
    />
  );
}

function Bar({ ranking }: { ranking: number }) {
  const height = ranking * -30 + 120;
  const text = ranking + '위';

  return (
    <div
      css={css`
        position: relative;
        height: ${height}px;
        background-color: #1d1d1d;

        &::after {
          display: block;
          position: absolute;
          bottom: 0;
          width: 100%;
          text-align: center;
          content: '${text}';
          font-family: 'SBAggroB';
          font-size: 18px;
          line-height: 25.2px;
          color: #ecfe54;
        }
      `}
    />
  );
}

export default function Chart() {
  const number = 100;
  return (
    <div
      css={css`
        display: flex;
        gap: 4px;
        text-align: center;
        align-itmes: flex-end;
        width: 100%;
      `}
    >
      {[2, 1, 3].map((ranking) => (
        <div
          key={ranking}
          css={css`
            flex: 1;
            min-width: 0px;
            align-self: flex-end;
          `}
        >
          <div
            css={css`
              position: relative;
              text-align: center;
              margin-bottom: 4px;
            `}
          >
            <Avatar src="" alt="" ranking={ranking} />
          </div>
          <div>
            <div
              css={css`
                width: 100%;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
                leading: 20px;
              `}
            >
              주우재 겁나 킹받아ㅁㄴㅇㅁㄴㅇ
            </div>
            <div
              css={css`
                margin-bottom: 8px;
              `}
            >
              <svg
                css={css`
                  vertical-align: sub;
                  margin-right: 4px;
                `}
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.9998 6.81107L4.3998 3.16663L0.799805 6.81107L7.9998 14.1L15.1998 6.81107L11.5998 3.16663L7.9998 6.81107Z"
                  fill="#1D1D1D"
                />
              </svg>
              <span
                css={css`
                  color: #5b5b5b;
                  font-size: 12px;
                  line-height: 17px;
                `}
              >
                {number.toLocaleString()}
              </span>
            </div>
            <Bar ranking={ranking} />
          </div>
        </div>
      ))}
    </div>
  );
}
