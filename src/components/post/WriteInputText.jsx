/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export default function WriteInputText() {
  return <textarea css={textarea}>asdf</textarea>;
}

const textarea = css`
  padding: 34px;
  // margin: 44px 0;
  width: 100%;
  height: auto;
  min-height: 300px;
  box-sizing: border-box;

  border-radius: 10px;
  background: #f9f9f9;
  border: none;

  color: var(--Black, #131313);
  font-size: 17px;
  font-weight: 400;
  line-height: 160%;

  resize: none;

  @media (max-width: 375px) {
    font-size: 15px;
    padding: 20px;
  }
`;
