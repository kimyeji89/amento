/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export default function TablePageTitle({ title }) {
  return <h2 css={page_title}>{title}</h2>;
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
