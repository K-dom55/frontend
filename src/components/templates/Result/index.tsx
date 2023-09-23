import { css } from '@emotion/react';
import Report from '../Report';
import { useEffect, useRef, useState } from 'react';
import { useResetProjection } from 'framer-motion';
import html2canvas from 'html2canvas';

export default function Result() {
  const style = {
    container: css`
      display: flex;
      flex-direction: column;
      align-items: center;
    `,
  };

  return (
    <div css={style.container}>
      <Report attachUrl="" />
    </div>
  );
}
