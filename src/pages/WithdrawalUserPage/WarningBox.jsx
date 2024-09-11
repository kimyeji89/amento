/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
export default function WarningBox() {
  return (
    <div css={box_wrap}>
      <p css={warning_header}>
        탈퇴를 하시면 모든 데이터가 삭제되며, 복구가 불가능합니다.
      </p>
      <ul css={warning_list}>
        <li>회원 정보 및 모든 기록이 영구적으로 삭제됩니다.</li>
        <li>더 이상 서비스를 이용하실 수 없습니다.</li>
        <li>삭제된 정보는 복구할 수 없습니다.</li>
      </ul>
    </div>
  );
}

const box_wrap = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 18px;
  padding: 24px 34px;
  margin: 0 0 44px;

  border-radius: 15px;
  border: 1px solid rgba(255, 0, 0, 0.3);
  background: #fcf6f6;
`;

const warning_header = css`
  color: #f00;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
`;

const warning_list = css`
  list-style: disc;
  padding: 0;
  margin: 0;
  color: #333;
  font-size: 14px;
  line-height: 1.6;
`;
