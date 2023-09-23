import React, { ChangeEvent } from 'react';
import { Forms, FormsHeader } from '@/components/organisms';
import { css } from '@emotion/react';
import { motion } from 'framer-motion';
import { Button } from '@/components/atom';
import TextareaAutosize from 'react-textarea-autosize';

interface Props {
  handleShowPopup: () => void;
  favoriteMent?: string;
  handleChangeFavoriteMent?: (e: ChangeEvent<HTMLInputElement>) => void;
  favoriteReason?: string;
  handleChangeFavoriteReason?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  favoriteLink?: string;
  handleChangeFavoriteLink?: (e: ChangeEvent<HTMLInputElement>) => void;
  handleNext?: () => void;
  handleBack?: () => void;
  slideDirection: 'left' | 'right';
  step: number;
}

export default function FavoritForm({
  handleShowPopup,
  favoriteMent,
  handleChangeFavoriteMent,
  favoriteReason,
  handleChangeFavoriteReason,
  favoriteLink,
  handleChangeFavoriteLink,
  handleNext,
  handleBack,
  slideDirection,
  step,
}: Props) {
  return (
    <motion.div
      css={css`
        display: flex;
        flex-direction: column;
        padding-bottom: 50px;
        flex: 1;
      `}
      initial={{ x: slideDirection === 'right' ? 300 : -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: slideDirection === 'right' ? -300 : 300, opacity: 0 }}
    >
      <FormsHeader>
        <FormsHeader.Navigation onClickHome={handleShowPopup}>효능 자랑하기</FormsHeader.Navigation>
        <FormsHeader.ProgressBar
          step={step}
          css={css`
            margin-top: 6px;
          `}
        />
      </FormsHeader>
      <div
        css={css`
          flex: 1;
          margin-top: 27px;
        `}
      >
        <div
          id="favorite-form-guide"
          css={css`
            padding-left: 20px;
            padding-right: 20px;
          `}
        >
          <Forms.H1
            css={css`
              display: flex;
              gap: 4px;
              margin-bottom: 3px;
            `}
          >
            <span>나의 최애는...</span>
            <span>💖</span>
          </Forms.H1>
          <Forms.Body1>나의 최애를 최대한 자랑해주세요.</Forms.Body1>
          <Forms.Body1>어떤 주접 멘트도 상관없어요!</Forms.Body1>
        </div>
        <div
          id="favorite-ment"
          css={css`
            margin-top: 32px;
            padding-left: 20px;
            padding-right: 20px;
          `}
        >
          <Forms.H2>대표 주접 멘트</Forms.H2>
          <Forms.Body1>제목으로 올라갈 멘트에요.</Forms.Body1>
          <input
            type="text"
            value={favoriteMent}
            onChange={handleChangeFavoriteMent}
            placeholder="예시) 최애를 만나고 코로나가 사라졌다"
            css={css`
              display: block;
              font-family: Pretendard;
              background-color: transparent;
              padding-left: 8px;
              padding-top: 12px;
              padding-bottom: 12px;
              border: none;
              border-bottom: 1px solid #b7b7b7;
              margin-top: 4px;
              width: 100%;
              font-size: 14px;
              &:placeholder {
                color: #b7b7b7;
              }
              &:focus {
                outline: none;

                border-bottom: 1px solid black;
              }
            `}
          />
        </div>
        <div
          id="favorite-reason"
          css={css`
            margin-top: 24px;
            padding-left: 20px;
            padding-right: 20px;
          `}
        >
          <Forms.H2>최애를 사랑해야하는 이유</Forms.H2>
          <TextareaAutosize
            placeholder="예) 최애를 만나고 코로나가 사라졌다"
            value={favoriteReason}
            onChange={handleChangeFavoriteReason}
            css={css`
              margin-top: 4px;
              display: block;
              font-family: Pretendard;
              min-height: 96px;
              padding-left: 8px;
              padding-top: 12px;
              padding-bottom: 12px;
              border: none;
              border-bottom: 1px solid #b7b7b7;
              width: 100%;
              font-size: 14px;
              &:placeholder {
                color: #b7b7b7;
              }
              &:focus {
                outline: 1px solid black;
              }
            `}
          />
          <Forms.Info
            css={css`
              text-align: right;
            `}
          >
            {favoriteReason?.length}/100
          </Forms.Info>
        </div>
        <div
          id="profile-form-name"
          css={css`
            margin-top: 24px;
            padding-left: 20px;
            padding-right: 20px;
          `}
        >
          <Forms.H2>최애의 진짜 매력을 보려면...</Forms.H2>
          <input
            type="text"
            value={favoriteLink}
            onChange={handleChangeFavoriteLink}
            placeholder="유튜브 링크를 추가해주세요"
            css={css`
              display: block;
              font-family: Pretendard;
              background-color: transparent;
              padding-left: 8px;
              padding-top: 12px;
              padding-bottom: 12px;
              border: none;
              border-bottom: 1px solid #b7b7b7;
              margin-top: 4px;
              width: 100%;
              font-size: 14px;
              &:placeholder {
                color: #b7b7b7;
              }
              &:focus {
                outline: none;

                border-bottom: 1px solid black;
              }
            `}
          />
        </div>
      </div>
      <div
        css={css`
          display: flex;
          gap: 8px;
          padding-left: 20px;
          padding-right: 20px;
        `}
      >
        <Button
          size="xxlarge"
          css={css`
            width: 110px;
          `}
          variant="outlined"
          onClick={handleBack}
        >
          이전
        </Button>
        <Button
          css={css`
            flex: 1;
            width: 100%;
          `}
          size="xxlarge"
          disabled={!favoriteReason || !favoriteMent}
          onClick={() => {
            handleNext?.();
          }}
        >
          다음
        </Button>
      </div>
    </motion.div>
  );
}
