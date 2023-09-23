import { css } from '@emotion/react';

export const resetStyle = css`
  a {
    text-decoration: none;
    color: inherit;
  }
  * {
    box-sizing: border-box;
  }
  html,
  body,
  div,
  span,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  a,
  dl,
  dt,
  dd,
  button,
  ol,
  ul,
  li,
  form,
  label,
  table {
    margin: 0;
    padding: 0;
    border: 0;
    padding: 0;
    font-size: 16px;
    vertical-align: baseline;
  }
  body {
    line-height: 1;
    background-color: #f6f9f0;
  }
  ol,
  ul {
    list-style: none;
  }
  button {
    border: 0;
    background: transparent;
    cursor: pointer;
  }
`;
