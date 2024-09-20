/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export default function TitleInput() {
  return <input placeholder="제목(45자)" css={input} />;
}

const input = css`
  width: 100%;
  padding: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 21px 15px;
  box-sizing: border-box;

  border-radius: 10px;
  border: 1px solid #ededed;
  background: #fff;

  color: var(--gray, #959595);
  font-size: 15px;
  font-weight: 500;
  line-height: normal;

  @media (max-width: 375px) {
    padding: 16.5px 15px;
    font-size: 13px;
  }
`;
