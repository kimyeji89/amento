/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import BoxWrap from "./BoxWrap";

export default function PayProduct() {
  return (
    <BoxWrap title={"결제상품"}>
      <img
        src="/assets/images/payHistoryDetailPage/payProduct.png"
        alt="payProduct"
        css={preview_img}
      />
      <div css={container}>
        <p css={date}>2024.04.01 16:03</p>
        <p css={product}>연말 업무성과표 작성 양식 공유</p>
        <p css={des}>직영점 1년 미만, 미운영</p>
        <div css={count_pay}>
          <p css={count}>수량 1개</p>
          <p css={amount}>1,100,000원</p>
        </div>
      </div>
    </BoxWrap>
  );
}

const preview_img = css`
  width: 130px;
  height: 130px;

  @media (max-width: 500px) {
    width: 80px;
    height: 80px;
  }
`;

const container = css`
  width: 100%;
`;

const date = css`
  padding: 0 0 4px 0;
  overflow: hidden;
  color: #4e4e4e;
  font-size: 12px;
  font-weight: 500;
  line-height: normal;
`;

const product = css`
  padding: 0 0 10px 0;
  color: #3c3c3c;
  font-size: 20px;
  font-weight: 700;
  line-height: normal;

  @media (max-width: 500px) {
    font-size: 16px;
  }
`;

const des = css`
  display: inline-flex;
  padding: 4px 10px;

  border-radius: 80px;
  background: #f8efff;

  color: var(--primary, #9627e7);

  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  word-break: keep-all;

  @media (max-width: 500px) {
    font-size: 13px;
  }
`;

const count_pay = css`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 12px 0 0 0;
  // border: 1px solid red;

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const count = css`
  color: #666;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  @media (max-width: 500px) {
    font-size: 12px;
  }
`;

const amount = css`
  color: #3c3c3c;
  white-space: nowrap;
  font-size: 16px;
  font-weight: 800;
  line-height: normal;

  @media (max-width: 500px) {
    font-size: 14px;
  }
`;
