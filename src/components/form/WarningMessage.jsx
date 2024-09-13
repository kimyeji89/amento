/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ReactComponent as WarningIcon } from "@svgs/common/warning.svg";

export default function WarningMessage({ text }) {
  return (
    <div css={message_wrap}>
      <WarningIcon />
      <p>{text}</p>
    </div>
  );
}

const message_wrap = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
  padding: 44px 0 24px;

  p {
    font-size: 24px;
    font-weight: 700;
    color: #3c3c3c;
  }

  @media (max-width: 375px) {
    padding: 44px 0 34px;

    p {
      font-size: 20px;
    }
  }
`;
