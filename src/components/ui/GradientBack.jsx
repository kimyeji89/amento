/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export default function GradientBack({ children, mt }) {
  return (
    <div css={container}>
      <div css={gradient_wrap(mt)}></div>
      {children}
    </div>
  );
}

const container = css`
  width: 100%;
  position: relative;
`;

const gradient_wrap = (mt) => css`
  position: absolute;
  bottom: 0px;
  z-index: -1;

  width: 100%;
  height: 915px;

  background: url(/assets/images/gradientMask.png) no-repeat center center;
  background-size: cover;

  // margin-top: ${mt ? "mt" : "165px"};
`;
