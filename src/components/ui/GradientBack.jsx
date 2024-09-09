/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Outlet } from "react-router-dom";

export default function GradientBack() {
  return (
    <div css={gradient_wrap}>
      {/* <img src="/assets/images/gradientMask.png" /> */}
      <Outlet />
    </div>
  );
}

const gradient_wrap = css`
  height: 100vh;
  width: 100%;
  background-image: url(/assets/images/gradientMask.png);
  padding: 90px 0 330.5px;
`;
