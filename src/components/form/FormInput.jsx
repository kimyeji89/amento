/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export default function FormInput({ label, placeholder }) {
  return (
    <div css={input_wrap}>
      <label css={label_style}>{label}</label>
      <input placeholder={placeholder} css={input_style} />
    </div>
  );
}

const input_wrap = css`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const label_style = css`
  font-size: 17px;
  font-weight: 800;
  line-height: 20.4px;
  color: #3c3c3c;
`;

const input_style = css`
  border: 1px solid #ededed;
  padding: 18px 15px;
  border-radius: 10px;
  color: #181818;
  font-size: 15px;
  font-weight: 400;
  line-height: 17.9px;
`;
