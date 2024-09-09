/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export default function GradientBack({ children, mt }) {
  return <div css={gradient_wrap(mt)}>{children}</div>;
}

const gradient_wrap = (mt) => css`
  background: url(/assets/images/gradientMask.png) no-repeat center center;
  background-size: cover;
  //   border: 5px solid red;
  margin-top: ${mt ? "mt" : "165px"};
`;
