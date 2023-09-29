import React from 'react';
import { motion } from 'framer-motion';
import { css } from '@emotion/react';

export enum RankingTabType {
  Article,
  Name,
}

interface Props {
  type: RankingTabType;
  handleChangeType: (targetType: RankingTabType) => void;
}

export default function Tabs({ type, handleChangeType }: Props) {
  const isTypeArticle = type === RankingTabType.Article;

  return (
    <div
      css={css`
        height: 46px;
        display: flex;
        position: relative;

        color: #1d1d1d;
      `}
    >
      <button
        type="button"
        css={css`
          display: grid;
          place-items: center;
          font-size: 16px;
          font-weight: 500;
          flex: 1;
          color: ${isTypeArticle ? '#1d1d1d' : '#b7b7b7'};
          transition: color 0.1s ease;
        `}
        onClick={() => {
          handleChangeType(RankingTabType.Article);
        }}
      >
        게시물 랭킹
      </button>
      <button
        type="button"
        css={css`
          display: grid;
          place-items: center;
          font-size: 16px;
          font-weight: 500;
          flex: 1;
          color: ${isTypeArticle ? '#b7b7b7' : '#1d1d1d'};
          transition: color 0.1s ease;
        `}
        onClick={() => {
          handleChangeType(RankingTabType.Name);
        }}
      >
        이름 랭킹
      </button>

      <div
        role="presentation"
        css={css`
          display: block;
          position: absolute;
          bottom: 0;
          content: '';
          height: 2px;
          width: 100%;
          background-color: #eaeaea;

          &::after {
            display: block;
            content: '';
            width: 50%;
            height: 100%;
            background-color: black;
            transform: ${isTypeArticle ? 'none' : 'translateX(100%)'};
            transition: transform 0.2s ease;
          }
        `}
      />
    </div>
  );
}
