import { FormsHeader } from '@/components/organisms';
import React from 'react';
import { css } from '@emotion/react';

interface Props {
  handleShowPopup: () => void;
}

export default function Forms({ handleShowPopup }: Props) {
  return (
    <div>
      <FormsHeader>
        <FormsHeader.Navigation onClickHome={handleShowPopup}>효능 자랑하기</FormsHeader.Navigation>
        <FormsHeader.ProgressBar
          css={css`
            margin-top: 6px;
          `}
        />
      </FormsHeader>
    </div>
  );
}
