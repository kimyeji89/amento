/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ReactComponent as CompleteIcon } from "@svgs/complete.svg";

export default function CompleteMessage({ icon, text, highlight }) {
  return (
    <div css={message_wrap}>
      <CompleteIcon css={icon} />
      <p>{text}</p>
      {highlight && <p css={highlight_style}>{highlight}</p>}
    </div>
  );
}

const message_wrap = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 54px 0 44px;

  p {
    font-size: 24px;
    font-weight: 700;
    line-height: 28.8px;
    color: #3c3c3c;
  }
`;

const highlight_style = css``;
