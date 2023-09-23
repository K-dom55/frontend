import { ReactNode } from 'react';
import { css } from '@emotion/react';
import { motion } from 'framer-motion';

const animation = {
  scale: [0, 1],
  opacity: [0, 1],
};

export default function DeemLayer({ children }: { children: ReactNode }) {
  return (
    <motion.div
      animate={animation}
      css={css`
        position: absolute;
        inset: 0;
        background: rgba(29, 29, 29, 0.75);
        display: grid;
        place-items: center;
      `}
    >
      {children}
    </motion.div>
  );
}
