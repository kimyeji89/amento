/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ReactComponent as WarningIcon } from "@svgs/common/warning.svg";

export default function WarningMessage({ text }) {
  return (
    <div css={message_wrap}>
      <WarningIcon css={icon} />
      <p>{text}</p>
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
