/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export default function PostTextBox({ text }) {
  return (
    <div css={text_wrap}>
      {text.split("\n").map((line, index) => (
        <span key={index}>
          {line}
          <br />
        </span>
      ))}
    </div>
  );
}

const text_wrap = css`
  padding: 34px;
  margin: 44px 0;
  height: auto;
  min-height: 300px;

  border-radius: 10px;
  background: #f9f9f9;

  color: var(--Black, #131313);
  font-size: 17px;
  font-weight: 400;
  line-height: 160%;

  @media (max-width: 768px) {
    padding: 20px;
    margin: 24px 0 34px;
  }

  @media (max-width: 375px) {
    padding: 20px;
    margin: 24px 0 34px;
    font-size: 15px;
  }
`;
