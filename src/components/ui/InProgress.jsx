/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export default function InProgress() {
  return (
    <div css={progress_wrap}>
      <img src="/assets/images/common/inProgress.png" alt="inProgress" />
      <p css={text}>
        <span>서비스 개발이 진행 중</span>입니다.
        <br />
        빠른 시일 내에 이용하실 수 있도록 최선을 다하겠습니다.
      </p>
    </div>
  );
}

const progress_wrap = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  margin: 0 auto;
  padding: 120px 0 242px;
`;

const text = css`
  font-size: 30px;
  line-height: 42px;
  font-weight: 700;
  color: #3c3c3c;
  text-align: center;

  span {
    color: var(--primary);
  }
`;
