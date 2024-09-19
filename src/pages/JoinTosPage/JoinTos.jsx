/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ReactComponent as CheckBefore } from "@svgs/joinTosPage/checkBefore.svg";
import { ReactComponent as CheckGray } from "@svgs/joinTosPage/checkGray.svg";
import { ReactComponent as AngleRight } from "@svgs/common/angleRight.svg";

export default function JoinTos() {
  return (
    <div css={tos_wrap}>
      <div css={tos_container}>
        <Tos />
        <Tos />
      </div>
      <div css={check_all}>
        <CheckBefore />
        <div>모든 약관을 확인하고 전체 동의합니다.</div>
      </div>
    </div>
  );
}

export function Tos() {
  return (
    <div css={tos_list}>
      <div css={required_tos}>
        <CheckGray />
        <div>
          <span css={hightlight}>(필수)</span>서비스 이용약관
        </div>
      </div>
      <AngleRight css={angle_right} />
    </div>
  );
}

const tos_wrap = css`
  padding: 44px 0 34px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const tos_container = css`
  display: flex;
  flex-direction: column;
  gap: 20px;

  font-size: 16px;

  @media (max-width: 375px) {
    gap: 10px;
    font-size: 15px;
  }
`;

const check_all = css`
  display: flex;
  padding: 14px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  border-radius: 10px;
  background: #f5e8ff;

  color: #3b3b3b;
  font-size: 15px;
  font-weight: 500;

  @media (max-width: 375px) {
    padding: 8px;
    font-size: 13px;
  }
`;

const tos_list = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`;

const required_tos = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;

  svg {
    cursor: pointer;
  }
`;

const hightlight = css`
  color: var(--primary);
  font-weight: 700;
`;

const angle_right = css`
  cursor: pointer;
`;
