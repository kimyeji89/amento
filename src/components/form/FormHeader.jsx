/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export default function FormHeader({ label }) {
  return (
    <div css={header_wrap}>
      <img src={"/assets/images/logoPicture.png"} alt="Logo" />
      <h1>{label}</h1>
      <div css={line}></div>
    </div>
  );
}

const header_wrap = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 200px;
    height: 48px;
    padding: 0 0 6px 0;
  }

  h1 {
    font-size: 40px;
    font-weight: 800;
    color: #3c3c3c;
    line-height: 47.73px;
  }
`;

const line = css`
  position: relative;
  width: 100%;
  height: 1px;
  background-color: #cbcbcb;
  margin: 40px 0 0 0;

  ::after {
    content: "";
    position: absolute;
    top: 0px;
    left: 50%;
    transform: translateX(-50%);
    width: 64px;
    height: 1px;
    background-color: var(--primary);
  }
`;
