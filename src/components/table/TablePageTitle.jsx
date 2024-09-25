/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export default function TablePageTitle({ title, hasBorder }) {
  return hasBorder === false ? (
    <h2 css={page_title}>{title}</h2>
  ) : (
    <div css={border}>
      <h2 css={page_title}>{title}</h2>
    </div>
  );
}

const page_title = css`
  color: var(--black, #111);
  font-size: 40px;
  font-weight: 700;

  @media (max-width: 1280px) {
    font-size: 36px;
  }
  @media (max-width: 1024px) {
    font-size: 32px;
    margin-bottom: 24px;
  }
  @media (max-width: 1024px) {
    font-size: 28px;
  }
  @media (max-width: 767px) {
    font-size: 24px;
  }
  @media (max-width: 480px) {
    font-size: 20px;
  }
  @media (max-width: 375px) {
    font-size: 24px;
    margin-bottom: 20px;
  }
`;

const border = css`
  padding-bottom: 24px;
  margin-bottom: 34px;
  border-bottom: 1px solid #000;

  @media (max-width: 1024px) {
    padding-bottom: 0px;
    margin-bottom: 24px;
  }
`;
