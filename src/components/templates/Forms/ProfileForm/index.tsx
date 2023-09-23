import React, { ChangeEvent } from 'react';
import { FormsHeader, Forms } from '@/components/organisms';
import { css } from '@emotion/react';
import { motion } from 'framer-motion';
import { Button } from '@/components/atom';
import Image from 'next/image';
import { useController, UseControllerProps } from 'react-hook-form';
import EmptyProfileImage from '@/assets/images/empty-image.png';
import UploadIcon from '@/assets/images/upload_24.svg';

interface Props extends UseControllerProps {
  handleShowPopup: () => void;
  imagePreview: string;
  handleFileChange: (e: ChangeEvent<HTMLInputElement>) => void;
  profileName: string;
  handleChangeProfileName: (e: ChangeEvent<HTMLInputElement>) => void;
  handleNext?: () => void;
  slideDirection: 'left' | 'right';
  step: number;
}

export default function ProfileForm({
  handleShowPopup,
  imagePreview,
  handleFileChange,
  profileName,
  handleChangeProfileName,
  handleNext,
  slideDirection,
  step,
  ...props
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
      exit={{ x: -300, opacity: 0 }}
    >
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
          id="profile-form-guide"
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
            <span>최애의 프로필</span>
            <span>🔍</span>
          </Forms.H1>
          <Forms.Body1>우리는 당신의 최애가 궁금해요.</Forms.Body1>
          <Forms.Body1>최애의 사진을 등록하고 이름을 작성해주세요.</Forms.Body1>
        </div>
        <div
          id="profile-form-image"
          css={css`
            margin-top: 32px;
            padding-left: 20px;
            padding-right: 20px;
          `}
        >
          <Forms.H2
            css={css`
              margin-bottom: 3px;
            `}
          >
            대표 최애 사진 등록
          </Forms.H2>
          {imagePreview ? (
            <Image
              alt=""
              src={imagePreview}
              width={320}
              height={192}
              css={css`
                display: block;
                object-fit: cover;
                width: 100%;
                margin-top: 4px;
              `}
            />
          ) : (
            <div
              css={css`
                height: 192px;
                width: 100%;
                text-align: center;
                margin-top: 4px;
                display: flex;
                justify-content: center;
                align-items: flex-end;
              `}
            >
              <Image src={EmptyProfileImage} alt="" width={202} height={156} />
            </div>
          )}
          <label
            htmlFor="picture"
            css={css`
              display: flex;
              gap: 4px;
              background-color: black;
              width: 100%;
              height: 48px;
              color: #ecfe54;
              justify-content: center;
              align-items: center;
              cursor: pointer;
            `}
          >
            <span>최애 사진 등록</span>
            <UploadIcon />
            <input
              css={css`
                display: none;
              `}
              id="picture"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
            />
          </label>
        </div>
        <div
          id="profile-form-name"
          css={css`
            margin-top: 24px;
            padding-left: 20px;
            padding-right: 20px;
          `}
        >
          <Forms.H2>최애의 이름</Forms.H2>
          <input
            type="text"
            value={profileName}
            onChange={handleChangeProfileName}
            placeholder="최애의 본명을 작성해주세요"
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
          padding-left: 20px;
          padding-right: 20px;
        `}
      >
        <Button
          disabled={!imagePreview || !profileName}
          onClick={handleNext}
          css={css`
            width: 100%;
          `}
          size="xxlarge"
        >
          다음
        </Button>
      </div>
    </motion.div>
  );
}
