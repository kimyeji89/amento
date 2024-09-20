/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export default function TablePageTitle({ title }) {
  return <h2 css={page_title}>{title}</h2>;
}

const page_title = css`
  color: var(--black, #111);
  font-size: 40px;
  font-weight: 700;
`;
