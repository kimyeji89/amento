/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import BoxWrap from "./BoxWrap";

export function PayInfo() {
  return (
    <BoxWrap title={"결제정보"} isBoxCol>
      <div css={pay_container}>
        <div css={amount_container}>
          <div css={pay_amount}>
            <p>결제 금액</p>
            <p>총 1,100,000원</p>
          </div>
          <div css={product_amount}>
            <p css={product_p_1}>상품 금액</p>
            <p>1,100,000원</p>
          </div>
        </div>
      </div>

      <div css={card_container}>
        <div css={card_pay_container}>
          <p css={card_p}>카드 간편결제</p>
          <p>총 1,100,000원</p>
        </div>
        <div css={card_info}>
          <p>국민 ****-****-*****</p>
        </div>
      </div>
    </BoxWrap>
  );
}

export function RefundInfo() {
  return (
    <BoxWrap title={"환불정보"} isBoxCol>
      <div css={pay_container}>
        <div css={amount_container}>
          <div css={pay_amount}>
            <p>환불 금액</p>
            <p>총 1,100,000원</p>
          </div>
          <div css={product_amount}>
            <p css={product_p_1}>환불 상품 금액</p>
            <p>1,100,000원</p>
          </div>
        </div>
      </div>

      <div css={card_container}>
        <div css={card_pay_container}>
          <p css={card_p}>카드 간편결제 환불</p>
          <p>총 1,100,000원</p>
        </div>
      </div>
    </BoxWrap>
  );
}

const pay_container = css`
  display: flex;
  flex-direction: column;
  padding: 0 0 24px;
  width: 100%;

  border-bottom: 1px solid #666;

  @media (max-width: 500px) {
    padding: 0 0 10px;
  }
`;

const card_container = css`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;

const amount_container = css`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const pay_amount = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  color: #9627e7;
  font-size: 20px;
  font-weight: 700;
  line-height: normal;

  @media (max-width: 500px) {
    font-size: 16px;
  }
`;

const card_pay_container = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  color: #111;
  font-size: 20px;
  font-weight: 700;
  line-height: normal;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 500px) {
    font-size: 16px;
  }
`;

const card_p = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  color: #444;
`;

const product_amount = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding: 0 0 0 20px;

  color: #3c3c3c;
  font-size: 20px;
  font-weight: 500;
  line-height: normal;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 500px) {
    font-size: 16px;
  }
`;

const product_p_1 = css`
  color: #4e4e4e;
`;

const card_info = css`
  padding: 0 0 0 20px;

  color: #666;
  font-size: 20px;
  font-weight: 500;
  line-height: normal;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 500px) {
    font-size: 16px;
  }
`;
