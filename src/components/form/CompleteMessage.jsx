/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ReactComponent as CompleteIcon } from "@svgs/complete.svg";

export default function CompleteMessage({ text, highlight, remainingText }) {
  return (
    <div css={message_wrap}>
      <CompleteIcon css={icon} />
      <p>{text}</p>
      <p>
        <span css={highlight_style}>{highlight}</span>
        {remainingText}
      </p>
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
    color: #3c3c3c;
  }
`;

const icon = css`
  padding: 0 0 12px 0;
`;

const highlight_style = css`
  color: var(--primary);
`;
