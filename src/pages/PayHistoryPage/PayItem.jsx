/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ReactComponent as ArrowRightIcon } from "@svgs/payHistoryPage/arrowRight.svg";
import { Link } from "react-router-dom";

export default function PayItem({ category, img, date, product, des }) {
  return (
    <div css={box}>
      <div css={cate}>{category}</div>
      <div css={content_wrap}>
        <img src={img} alt="payProduct" css={preview_img} />
        <div css={container}>
          <p css={date_p}>{date}</p>
          <p css={product_p}>{product}</p>
          <p css={des_p}>{des}</p>
          <div css={count_pay}>
            <Link to="/payHistoryDetail">
              <p css={count}>결제 상세</p>
              <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const box = css`
  display: flex;
  padding: 24px 38px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  border-radius: 10px;
  border: 1px solid var(--stroke, #e8e8e8);
  background: #fff;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const cate = css`
  overflow: hidden;
  color: #111;
  font-size: 17px;
  font-weight: 700;
  line-height: normal;

  @media (max-width: 430px) {
    font-size: 15px;
  }
`;

const content_wrap = css`
  display: flex;
  flex-direction: row;
  gap: 41px;
  width: 100%;

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

const preview_img = css`
  width: 124px;
  height: 114px;

  @media (max-width: 500px) {
    width: 80px;
    height: 80px;
  }
`;

const container = css`
  width: 100%;
  flex-grow: 1;

  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 6px;
    padding: 14px 0 0 0;
    text-decoration: none;

    @media (max-width: 500px) {
      justify-content: end;
    }
  }
`;

const date_p = css`
  padding: 0 0 4px 0;
  overflow: hidden;
  color: #4e4e4e;
  font-size: 12px;
  font-weight: 500;
  line-height: normal;
`;

const product_p = css`
  padding: 0 0 14px 0;
  color: #3c3c3c;
  font-size: 20px;
  font-weight: 800;
  line-height: normal;

  @media (max-width: 500px) {
    font-size: 16px;
  }
`;

const des_p = css`
  display: inline-flex;
  padding: 4px 10px;

  border-radius: 80px;
  background: #f8efff;

  color: var(--primary, #9627e7);

  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media (max-width: 500px) {
    font-size: 13px;
  }
`;

const count_pay = css`
  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  @media (max-width: 500px) {
    width: 100%;
    justify-content: end;
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
