/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export function PageWrap({ children, pt = "250", pb = "0" }) {
  return <div css={page_wrap(pt, pb)}>{children}</div>;
}

const page_wrap = (pt, pb) => css`
  width: 500px;
  padding: ${pt}px 0 ${pb}px;
  margin: 0 auto;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    width: 90%;
  }

  @media (max-width: 375px) {
    width: 100%;
    padding: 146px 20px 333px;
  }
`;

export function PageWrapWide({ children, pt = "250", pb = "0" }) {
  return <div css={page_wrap_wide(pt, pb)}>{children}</div>;
}

const page_wrap_wide = (pt, pb) => css`
  width: 800px;
  padding: ${pt}px 0 ${pb}px;
  margin: 0 auto;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    width: 90%;
  }

  @media (max-width: 375px) {
    width: 100%;
    padding: 146px 20px 333px;
  }
`;
