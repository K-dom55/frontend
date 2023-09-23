import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const Title = styled.div`
  font-family: 'SBAggroB';
  font-size: 22px;
  font-weight: 400;
  line-height: 140%;
`;

const Body = styled.div`
  font-size: 14px;
  line-height: 140%;
  color: #5b5b5b;
`;

function Container({ children }: { children: ReactNode }) {
  return (
    <div
      css={css`
        padding: 58px 12px 24px 12px;
        min-width: 300px;
        text-align: center;
        background: #fff;
      `}
    >
      {children}
    </div>
  );
}

export default Object.assign(Container, {
  Title,
  Body,
});
