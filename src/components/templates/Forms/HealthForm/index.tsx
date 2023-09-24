import React, { useState } from 'react';
import { FormsHeader, Forms } from '@/components/organisms';
import { css } from '@emotion/react';
import { motion } from 'framer-motion';
import { Button } from '@/components/atom';
import CancelIcon from '@/assets/images/cancel_16.svg';

interface Props {
  slideDirection: 'left' | 'right';
  handleShowPopup: () => void;
  handleBack?: () => void;
  step: number;
  keywordList: { id: number; keyword: string }[];
  handleAddKeywordItem: (keyword: string) => void;
  handleDeleteKeywordItem: (selectedId: number) => void;
  handleNext?: () => void;
  disableInput: boolean;
}

export default function HealthForm({
  slideDirection,
  handleShowPopup,
  handleBack,
  step,
  keywordList,
  handleAddKeywordItem,
  handleDeleteKeywordItem,
  handleNext,
  disableInput,
}: Props) {
  const [keyword, setKeyword] = useState('');

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
      {' '}
      <FormsHeader>
        <FormsHeader.Navigation onClickHome={handleShowPopup}>효능 자랑하기</FormsHeader.Navigation>
        <FormsHeader.ProgressBar
          css={css`
            margin-top: 6px;
          `}
          step={step}
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
            <span>최애의 효능...</span>
            <span>💊</span>
          </Forms.H1>
          <Forms.Body1>내가 생각하는 최애의 효능을 작성해주세요.</Forms.Body1>
          <Forms.Body1>생각이 안난다면 AI의 추천 효능을 받아보세요!</Forms.Body1>
        </div>
        <div
          id="profile-form-name"
          css={css`
            margin-top: 32px;
            padding-left: 20px;
            padding-right: 20px;
          `}
        >
          <Forms.H2>최애의 대표 효능</Forms.H2>
          <form
            css={css`
              position: relative;
            `}
            onSubmit={(e) => {
              e.preventDefault();
              handleAddKeywordItem(keyword);
              setKeyword('');
            }}
          >
            <input
              type="text"
              value={keyword}
              maxLength={10}
              onChange={(e) => {
                setKeyword(e.target.value);
              }}
              placeholder="예시 보약"
              disabled={disableInput}
              css={css`
                display: block;
                position: relative;
                background-color: transparent;
                font-family: Pretendard;
                padding-left: 21px;
                padding-top: 12px;
                padding-bottom: 12px;
                padding-right: 65px;
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
            <div
              role="presentation"
              css={css`
                display: block;
                color: #1d1d1d;
                font-weight: 500;
                width: fit-content;
                position: absolute;
                top: 12px;
                left: 8px;
              `}
            >
              #
            </div>
            {!keyword && (
              <div
                css={css`
                  color: #b7b7b7;
                  font-size: 12px;
                  position: absolute;
                  top: 15px;
                  right: 65px;
                `}
              >
                최대 10자
              </div>
            )}
            <Button
              size="small"
              onClick={() => {
                handleAddKeywordItem(keyword);
                setKeyword('');
              }}
              css={css`
                display: block;
                position: absolute;
                right: 8px;
                top: 5px;
              `}
              disabled={!keyword}
            >
              생성
            </Button>
          </form>
        </div>
        <div
          id="profile-form-keyword"
          css={css`
            margin-top: 24px;
            padding-left: 20px;
            padding-right: 20px;
          `}
        >
          <Forms.H2>선택한 효능</Forms.H2>
          <div
            css={css`
              margin-top: 16px;
              display: flex;
              flex-wrap: wrap;
              gap: 10px;
            `}
          >
            {keywordList.map((item, i) => (
              <div
                key={item.id}
                css={css`
                  padding: 6px 10px;
                  display: flex;
                  align-items: center;
                  gap: 4px;
                  background-color: #ecfe54;
                  border: 1px solid #1d1d1d;
                  border-radius: 999px;

                  font-size: 12px;
                  line-height: 140%;
                `}
              >
                <span
                  css={css`
                    &::before {
                      content: '#';
                      margin-right: 4px;
                    }
                  `}
                >
                  {item.keyword}
                </span>
                <button
                  onClick={() => {
                    handleDeleteKeywordItem(item.id);
                  }}
                  type="button"
                  aria-label="삭제하기"
                >
                  <CancelIcon
                    css={css`
                      vertical-align: bottom;
                    `}
                  />
                </button>
              </div>
            ))}
          </div>
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
          disabled={!keywordList.length}
          onClick={handleNext}
        >
          완료
        </Button>
      </div>
    </motion.div>
  );
}
