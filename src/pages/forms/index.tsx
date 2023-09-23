import React, { useState } from 'react';
import { Forms as FormsTemplate } from '@/components/templates';
import { Button, DeemLayer } from '@/components/atom';
import { Popup } from '@/components/molecules';
import { css } from '@emotion/react';

export default function Forms() {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <>
      <FormsTemplate
        handleShowPopup={() => {
          setShowPopup(true);
        }}
      />
      {showPopup && (
        <DeemLayer>
          <Popup>
            <Popup.Title>작성을 취소할까요?</Popup.Title>
            <Popup.Body>
              홈으로 돌아가면 지금까지 <br />
              작성한 효능이 사라져요
            </Popup.Body>
            <div>
              <Button
                onClick={() => {
                  setShowPopup(false);
                }}
                size="xxlarge"
                css={css`
                  display: block;
                  width: 100%;
                  margin-top: 37px;
                `}
              >
                아니요
              </Button>
              <Button
                size="xxlarge"
                css={css`
                  display: block;
                  width: 100%;
                  margin-top: 8px;
                `}
                variant="outlined"
              >
                네
              </Button>
            </div>
          </Popup>
        </DeemLayer>
      )}
    </>
  );
}
