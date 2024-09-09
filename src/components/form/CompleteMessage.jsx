/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export default function CompleteMessage({ icon }) {
  return (
    <div css={message_wrap}>
      <div css={icon}>{icon}</div>
    </div>
  );
}

const message_wrap = css``;
