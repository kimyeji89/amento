/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export default function Button({ label }) {
  return (
    <div css={button_wrap}>
      <p>{label}</p>
    </div>
  );
}

const button_wrap = css`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  width: 100%;
  height: 60px;
  background: var(--primary);
  border-radius: 64px;

  p {
    color: var(--white);
    font-size: 17px;
    font-weight: 700;
    line-height: 20.29px;
  }
`;
