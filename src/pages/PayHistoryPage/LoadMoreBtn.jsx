/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ReactComponent as DownIcon } from "@svgs/payHistoryPage/arrowDown.svg";

export default function LoadMoreBtn() {
  return (
    <div css={container}>
      <div>이전내역 더보기</div>
      <DownIcon />
    </div>
  );
}

const container = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row !important;
  width: 100%;
  height: 60px;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  cursor: pointer;

  border-radius: 10px;
  border: 1px solid #cecece;
  background: #fff;
  box-shadow: 0px 6px 20px 0px rgba(235, 235, 235, 0.7);

  font-size: 17px;
  font-weight: 700;

  @media (max-width: 768px) {
    height: 52px;
    font-size: 15px;
  }
`;
