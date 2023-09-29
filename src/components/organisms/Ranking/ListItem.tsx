import React from 'react';
import { css } from '@emotion/react';
import Image from 'next/image';
import { ArticleListDTO } from '@/api/article';
import { RankingTabType } from './Tabs';

interface Props extends Omit<ArticleListDTO, 'likeRank'> {
  type: RankingTabType;
  linkRank?: number;
}

export default function ListItem({
  id,
  target,
  title,
  content,
  imgUrl,
  linkUrl,
  keywords,
  likeCount,
  linkRank,
  createdAt,
  type,
}: Props) {
  const cardTitle = type == RankingTabType.Article ? title : target;

  return (
    <div
      css={css`
        display: flex;
        border: 1px solid #1d1d1d;
        padding: 12px;
      `}
    >
      <div
        css={css`
          font-family: 'SBAggroB';
          line-height: 22.4px;
          margin-right: 8px;
          display: flex;
          align-items: center;
          color: #3c3c3c;
          min-width: 35px;
          shirink: 0;
          text-align: right;
        `}
      >
        {linkRank}위
      </div>
      <div
        css={css`
          flex: 1;
          display: flex;
          gap: 12px;
        `}
      >
        <Image
          css={css`
            border: 1px solid #1d1d1d;
            object-fit: cover;
            min-width: 50px;
          `}
          width={50}
          height={50}
          alt=""
          src={imgUrl}
        />
        <div
          css={css`
            display: flex;
            flex-direction: column;
            gap: 4px;
            justify-content: center;
            width: 100%;
          `}
        >
          <div
            css={css`
              font-size: 14px;
              font-weight: 500;
              line-height: 20px;
              color: #1d1d1d;
              display: -webkit-box;
              overflow: hidden;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 1;
            `}
          >
            {cardTitle}
          </div>
          <div
            css={css`
              display: flex;
              align-items: center;
            `}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M7.9998 6.31107L4.3998 2.66663L0.799805 6.31107L7.9998 13.6L15.1998 6.31107L11.5998 2.66663L7.9998 6.31107Z"
                fill="#1D1D1D"
              />
            </svg>
            <span
              css={css`
                font-size: 14px;
                line-height: 20px;
                color: #5b5b5b;
                margin-left: 4px;
              `}
            >
              {likeCount.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
