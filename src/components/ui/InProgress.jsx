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
  width: 100%;
  margin: 0 auto;
  padding: 120px 0 242px;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    padding: 120px 20px 242px;
  }

  img {
    @media (max-width: 1024px) {
      width: 40%;
    }

    @media (max-width: 768px) {
      width: 60%;
    }

    @media (max-width: 375px) {
      width: 73%;
    }
  }
`;

const text = css`
  font-size: 30px;
  line-height: 140%;
  font-weight: 700;
  color: #3c3c3c;
  text-align: center;
  word-break: keep-all;

  span {
    color: var(--primary);
  }

  @media (max-width: 1024px) {
    font-size: 25px;
  }

  @media (max-width: 375px) {
    font-size: 20px;
    padding: 0 20px;
  }
`;
